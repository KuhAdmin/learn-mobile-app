#!/usr/bin/env node
/**
 * Lesson overlap check: does a new lesson repeat what earlier lessons already teach?
 *
 *   npm run lesson:overlap                         → checks "assets/Content generation/ContentWorkbench.md"
 *   npm run lesson:overlap -- <lesson.md|.json>    → checks that file
 *   npm run lesson:overlap -- <file> --strict      → exits 1 when anything repeats
 *   npm run lesson:overlap -- --brief              → prints the "Already covered" brief for the generation prompt
 *   npm run lesson:overlap -- --write-brief <md>   → rewrites the generated part of that brief file
 *   npm run lesson:overlap -- --all <dir>          → checks every lesson draft in <dir>, in curriculum order
 *   … --with <dir>                                 → also compares with the lesson drafts in <dir> (repeatable)
 *
 * Compares example sentences (and sentences quoted in questions), page titles and key takeaways with every
 * lesson in src/lessons/content (except one with the same topic_id), and flags repeats inside the lesson itself.
 * Drafts (`.md` / `.json` files in a --with or --all folder) count only when they come before the checked
 * lesson in curriculum order, so a batch of new lessons is checked like lessons added one by one; a draft
 * replaces the app copy of the same topic.
 * Also reports:
 *   - pages that re-teach the parts of speech one per page, as an earlier lesson already did
 *   - identify questions whose accepted answer is a class name when the prompt asks for a word, and
 *     explanations that start with a verdict
 *   - comparison examples that don't use the word they demonstrate ("Clean – Adjective" without "clean")
 *   - dimension assessments not placed after their dimension's last page, questions used twice, and a
 *     missing final assessment (the same rules the app's loader enforces), or one shorter than 4 questions
 *   - dimension statuses and cross-references that don't use the schema v2.0 fields and values
 * The report ends with a numbered fix list to paste into the lesson generator with the lesson JSON.
 * Plain Node, no build step; the pure functions are exported for tests.
 */
const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'src', 'lessons', 'content');
const DEFAULT_INPUT = path.join(__dirname, '..', 'assets', 'Content generation', 'ContentWorkbench.md');
/** Line above the generated part of a brief file; it records the command that regenerates it. */
const BRIEF_MARKER = /<!-- GENERATED BELOW:[^\n]*-->/;
const briefMarker = (command) => `<!-- GENERATED BELOW: npm run lesson:overlap -- ${command} -->`;
/** The final check must be longer than a quick check (CLAUDE.md, "Lesson assessments" rule 2). */
const MIN_FINAL_QUESTIONS = 4;

/** Lesson JSON from a workbench paste: plain JSON, JSON in a ``` fence, or rich-text pasted markdown. */
function parseLessonText(text) {
  let t = text.replace(/^﻿/, '');
  if (t.includes('&#x20;')) {
    t = t
      .replace(/&#x20;/g, ' ')
      .replace(/\\\r?\n/g, '\n') // trailing "\" line breaks
      .replace(/\\([_[\]*\-#`>!.()+{}|~])/g, '$1'); // markdown escapes
  }
  t = t.trim().replace(/^```[a-zA-Z]*\s*/, '').replace(/\s*```$/, '');
  return JSON.parse(t);
}

const normalize = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[‘’“”'"]/g, '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** Same sentence, or one contains the other (both long enough not to match by accident). */
const sameSentence = (a, b) => a === b || (Math.min(a.length, b.length) > 12 && (a.includes(b) || b.includes(a)));

/**
 * What a lesson teaches with: titles, takeaways and sentences, each with where it appears
 * (`p3` = page 3, `Q004` = question). Works for schema 1.0 and 2.0 content.
 */
function lessonFacts(json) {
  const facts = { id: json.topic.topic_id, title: json.lesson.lesson_title, titles: [], takeaways: [], sentences: [] };
  for (const page of json.pages) {
    const where = `p${page.page_number}`;
    facts.titles.push({ where, text: page.title });
    if (page.key_takeaway) facts.takeaways.push({ where, text: page.key_takeaway });
    for (const block of page.content) {
      if (block.type === 'example' || (block.type === 'rule' && block.examples))
        for (const e of block.examples) facts.sentences.push({ where, text: e.sentence, focus: e.highlight || [] });
      if (block.type === 'comparison')
        for (const item of block.items) if (item.example) facts.sentences.push({ where, text: item.example, focus: [] });
      if (block.type === 'warning') facts.sentences.push({ where, text: block.mistake.incorrect, focus: [] });
    }
  }
  const questions = json.question_bank || (json.knowledge_check && json.knowledge_check.questions) || [];
  for (const q of questions) {
    const where = q.question_id;
    const prompt = q.prompt || q.question || '';
    // Sentences quoted in the prompt ("… in the sentence 'Maya is friendly'?"). A quote must open after a space
    // or colon and close before punctuation/space, so the text *between* two quoted words never counts.
    for (const m of prompt.matchAll(/(?:^|[\s:(])['‘"“]([^'’"”]+)['’"”](?=[\s.,?!:;)]|$)/g))
      if (/\s/.test(m[1].trim()) && m[1].trim().length >= 8) facts.sentences.push({ where, text: m[1].trim(), focus: [] });
    // Unquoted: "… of light in: This bag is light?" / "In the sentence We arrived before lunch, what is before?"
    const unquoted = /\bin:\s*([A-Z][^'‘"“]+?)\??$/.exec(prompt) || /\bin the sentence:?\s+([A-Z][^'‘"“,?]+)[,?]/.exec(prompt);
    if (unquoted && unquoted[1].trim().split(/\s+/).length >= 3) facts.sentences.push({ where, text: unquoted[1].trim(), focus: [] });
    // Answer options that are sentences ("Please clean the kitchen.").
    for (const o of q.options || [])
      if (typeof o.text === 'string' && /[.!?]$/.test(o.text.trim()) && o.text.trim().split(/\s+/).length >= 3)
        facts.sentences.push({ where, text: o.text.trim(), focus: [] });
    if (q.original_sentence) facts.sentences.push({ where, text: q.original_sentence, focus: [] });
  }
  return facts;
}

/**
 * Repeats of the candidate's sentences, titles and takeaways in earlier lessons, plus repeats across pages
 * of the candidate itself. Each finding: { kind, where, text, matches: [{ lesson, where }] }.
 */
function findOverlaps(candidate, earlier) {
  const c = lessonFacts(candidate);
  const others = [...earlier].sort(byOrder).map(lessonFacts).filter((o) => o.id !== c.id);
  const findings = [];
  const check = (kind, items, otherItems, matcher, inside) => {
    const own = items;
    for (const item of own) {
      const n = normalize(item.text);
      if (!n) continue;
      const matches = [];
      for (const o of others)
        for (const x of otherItems(o)) if (matcher(n, normalize(x.text))) matches.push({ lesson: o.id, where: x.where });
      // Inside the lesson: only across different pages (a block may repeat a sentence on purpose), and
      // page content only (quiz questions naturally quote the lesson's own sentences).
      if (inside && item.where.startsWith('p'))
        for (const x of own)
          if (x !== item && x.where.startsWith('p') && x.where !== item.where && matcher(n, normalize(x.text)) && pageNo(x.where) < pageNo(item.where))
            matches.push({ lesson: c.id, where: x.where });
      if (matches.length) findings.push({ kind, where: item.where, text: item.text, matches: dedupe(matches) });
    }
  };
  check('sentence', c.sentences, (o) => o.sentences, sameSentence, true);
  check('title', c.titles, (o) => o.titles, (a, b) => a === b, true);
  check('takeaway', c.takeaways, (o) => o.takeaways, (a, b) => a === b, true);
  // One finding per repeated text and place (a sentence quoted twice in a prompt is one finding).
  const seen = new Set();
  const unique = findings.filter((f) => !seen.has(f.kind + f.where + normalize(f.text)) && seen.add(f.kind + f.where + normalize(f.text)));
  const sorted = [...earlier].sort(byOrder).filter((o) => o.topic.topic_id !== c.id);
  return {
    lesson: c,
    comparedWith: others.map((o) => o.id),
    jobWords: usedJobWords(sorted),
    findings: [
      ...unique,
      ...structureFindings(candidate, sorted),
      ...jobWordFindings(candidate, sorted),
      ...answerFindings(candidate),
      ...exampleFindings(candidate),
      ...assessmentFindings(candidate),
      ...schemaFindings(candidate),
    ],
  };
}

/* ───────────── Words already shown doing more than one job ───────────── */

const STOP = new Set('a an the is are was were be am i we you he she it they my your his her our their of to in on at and or but for with this that'.split(' '));
const tokens = (s) => normalize(s).split(' ').filter(Boolean);
// "patient" / "patiently" demonstrate one pair: compare words without a final -ly.
const stem = (w) => (w.length > 5 ? w.replace(/ly$/, '') : w);

/**
 * Words a page demonstrates in more than one job ("Please light the lamp." / "The room is full of light."):
 * a word highlighted in two different example sentences on the page, the word every item of a comparison
 * shares ("Water — Noun" / "Water — Verb", or named first in its comparison points), and the word of a
 * "Book is always a noun" mistake. Returns [{ word, where }].
 */
function jobWords(json) {
  const out = [];
  const add = (word, page) => {
    if (word && !STOP.has(word) && !isPosTerm(word) && !out.some((x) => stem(x.word) === stem(word) && x.where === `p${page}`))
      out.push({ word, where: `p${page}` });
  };
  for (const page of json.pages) {
    const shown = new Map();
    for (const block of page.content) {
      if (block.type === 'example' || (block.type === 'rule' && block.examples))
        for (const e of block.examples)
          for (const h of e.highlight || []) {
            const w = normalize(h);
            if (w.includes(' ')) continue;
            shown.set(stem(w), new Set([...(shown.get(stem(w)) || []), normalize(e.sentence)]));
            if (shown.get(stem(w)).size >= 2) add(w, page.page_number);
          }
      if (block.type === 'comparison' && block.items.length >= 2 && block.items.every((i) => i.example)) {
        // "Water — Noun" / "Water — Verb" / "Answer — Noun" / …: each labelled word used by two or more items.
        const byLabel = new Map();
        for (const i of block.items) {
          const w = labelWord(i.label);
          if (w && new RegExp('\\b' + w).test(normalize(i.example))) byLabel.set(w, (byLabel.get(w) || 0) + 1);
        }
        for (const [w, n] of byLabel) if (n >= 2) add(w, page.page_number);
        // Otherwise the word every example shares, when the points name it ("Help names …", "The word light …").
        const common = block.items.map((i) => new Set(tokens(i.example).map(stem))).reduce((a, b) => new Set([...a].filter((x) => b.has(x))));
        const notes = [...(block.comparison_points || []), block.conclusion || ''].map(tokens);
        const named = new Set([...notes.map((t) => stem(t[0] || '')), ...notes.flatMap((t) => t.filter((_, k) => t[k - 1] === 'word').map(stem))]);
        for (const w of common) if (named.has(w)) add(w, page.page_number);
      }
      if (block.type === 'warning') {
        const m = /^(\w+) is always\b/.exec(normalize(block.mistake.incorrect));
        if (m) add(m[1], page.page_number);
      }
    }
  }
  return out;
}

/** The candidate demonstrates a word in several jobs that an earlier lesson already demonstrated that way. */
function jobWordFindings(candidate, earlier) {
  const findings = [];
  const theirs = earlier.flatMap((o) => jobWords(o).map((x) => ({ ...x, lesson: o.topic.topic_id })));
  for (const mine of jobWords(candidate)) {
    const matches = theirs.filter((t) => stem(t.word) === stem(mine.word)).map((t) => ({ lesson: t.lesson, where: t.where }));
    if (!matches.length) continue;
    const page = candidate.pages.find((p) => `p${p.page_number}` === mine.where);
    findings.push({
      kind: 'word',
      where: mine.where,
      text: mine.word,
      matches,
      fix:
        `Page ${mine.where.slice(1)} ("${page.title}") shows "${mine.word}" doing more than one job, as ${matches.map((m) => `${label(m.lesson)} ${m.where}`).join(', ')} already did. ` +
        `Use a word no earlier lesson has shown in more than one job, with new sentences (also in this lesson's questions).`,
    });
  }
  return findings;
}

/** Every word earlier lessons show doing more than one job, in curriculum order. */
const usedJobWords = (lessons) => [...new Set([...lessons].sort(byOrder).flatMap((l) => jobWords(l).map((x) => x.word)))];

/* ───────────── Re-taught concepts (same page-per-concept structure as an earlier lesson) ───────────── */

const POS = ['noun', 'pronoun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'interjection', 'determiner'];
const posTerms = (s) => {
  const n = normalize(s);
  return POS.filter((t) => new RegExp('\\b' + t + 's?\\b').test(n));
};
// "A noun names …", "An adverb gives …": a page that opens by defining one part of speech.
const DEFINITION = new RegExp('^(?:a |an |the )?(' + POS.join('|') + ')s?\\b');

/**
 * The part of speech a page is dedicated to teaching ([] for comparison, mixed or other pages): a page that
 * opens by defining one ("A noun names …"), or whose title and takeaway both name only that one
 * ("Noun – Naming Words"). Pages like "A Noun Can Become a Verb" (changing jobs) don't count.
 */
function pageConcepts(page) {
  const text = page.content.find((b) => b.type === 'text');
  const first = text ? text.text.split(/(?<=[.!?])\s+/)[0] : '';
  const def = DEFINITION.exec(normalize(first));
  const inTitle = posTerms(page.title);
  if (def) {
    // "Find the Noun Replacements" + "A pronoun can replace a noun…" is the pronoun page; a title naming
    // another part of speech that the definition doesn't mention means a comparison page.
    const firstTerms = posTerms(first);
    return inTitle.some((t) => !firstTerms.includes(t)) ? [] : [def[1]];
  }
  const inTakeaway = posTerms(page.key_takeaway || '');
  return inTitle.length === 1 && inTakeaway.length === 1 && inTakeaway[0] === inTitle[0] ? inTitle : [];
}

const conceptPages = (json) => json.pages.map((p) => ({ page: p.page_number, concepts: pageConcepts(p) })).filter((x) => x.concepts.length);
const pageRange = (pages) => (pages.length > 1 ? `p${Math.min(...pages)}–p${Math.max(...pages)}` : `p${pages[0]}`);

/**
 * Three or more pages that each teach a part of speech an earlier lesson already gave its own page, covering at
 * least three different parts. A lesson that goes deeper into one part ("The Noun as Subject", "Noun Phrases" …)
 * has many pages on that part, but that is its own topic, not a re-run of the overview.
 */
function structureFindings(candidate, earlier) {
  const mine = conceptPages(candidate);
  const findings = [];
  for (const other of earlier) {
    const theirs = conceptPages(other);
    const taught = new Set(theirs.flatMap((t) => t.concepts));
    const shared = mine.filter((m) => m.concepts.some((c) => taught.has(c)));
    const sharedParts = new Set(shared.flatMap((m) => m.concepts.filter((c) => taught.has(c))));
    if (shared.length < 3 || sharedParts.size < 3) continue;
    // Report this lesson's whole run of concept pages (it may add parts the earlier lesson grouped together).
    const concepts = [...new Set(mine.flatMap((m) => m.concepts))];
    const where = pageRange(mine.map((m) => m.page));
    const theirPages = pageRange(theirs.map((t) => t.page));
    findings.push({
      kind: 'structure',
      where,
      text: `one page per part of speech: ${concepts.join(', ')}`,
      matches: [{ lesson: other.topic.topic_id, where: theirPages }],
      fix:
        `Pages ${where.replace(/p/g, '')} teach one part of speech per page (${concepts.join(', ')}), as lesson ${label(other.topic.topic_id)} ` +
        `pages ${theirPages.replace(/p/g, '')} already do. Learners already know these. Replace them with at most one short recap list ` +
        `and use the pages for this lesson's own topic.`,
    });
  }
  return findings;
}

/* ───────────── Answer keys and explanations ───────────── */

const VERDICT = /^\s*(?:correct|right|incorrect|wrong|not quite|well done)\s*[.!:,]/i;
/** How the app compares typed answers (same as normalizeTyped in src/lessons/answers.ts). */
const typedForm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[“”"‘’'.,!?;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
const isPosTerm = (s) => POS.some((t) => normalize(s) === t || normalize(s) === t + 's');

function answerFindings(json) {
  const findings = [];
  for (const q of json.question_bank || []) {
    const prompt = q.prompt || '';
    if (q.type === 'identify' && Array.isArray(q.accepted_answers) && q.accepted_answers.length) {
      // "Identify the noun in 'The gardener…'" / "Find the word that names a person in …" ask for a word, unlike
      // "Identify the part of speech of 'gardener'", whose answer really is a class name.
      const n = normalize(prompt);
      const asksForWord =
        !/\bpart of speech\b/.test(n) &&
        new RegExp('\\b(?:identify|find|which word is|underline) (?:the |an? )?(?:word\\b|(?:' + POS.join('|') + ')s?\\b)').test(n);
      if (asksForWord && q.accepted_answers.every(isPosTerm)) {
        // Name the answer when `target` is a word of the quoted sentence; generators also use it for a description.
        const quoted = [...prompt.matchAll(/['‘"“]([^'’"”]+)['’"”]/g)].map((m) => m[1]).sort((a, b) => b.length - a.length)[0] || '';
        const escaped = normalize(q.target || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const word = escaped && new RegExp('\\b' + escaped + '\\b').test(normalize(quoted)) ? q.target : null;
        findings.push({
          kind: 'answer',
          where: q.question_id,
          text: prompt,
          matches: [],
          fix:
            `${q.question_id} asks for a word from the sentence${quoted ? ` "${quoted}"` : ''}, but accepted_answers is ${JSON.stringify(q.accepted_answers)}. ` +
            (word
              ? `The answer is "${word}": put it in accepted_answers (or reword the prompt to "What part of speech is '${word}' in …?").`
              : `Put the word itself in accepted_answers (or reword the prompt to ask "What part of speech is …?").`),
        });
      }
    }
    // The app grades typed answers without case or punctuation (normalizeTyped in src/lessons/answers.ts), so a
    // correction that only fixes capitals or apostrophes would accept the uncorrected sentence.
    if (q.type === 'sentence_correction' && q.original_sentence) {
      const fixes = [q.corrected_sentence, ...(q.accepted_corrections || [])].filter(Boolean);
      if (fixes.some((c) => typedForm(c) === typedForm(q.original_sentence)))
        findings.push({
          kind: 'answer',
          where: q.question_id,
          text: q.original_sentence,
          matches: [],
          fix:
            `${q.question_id} only corrects capital letters or punctuation, but typed answers are graded without them, so "${q.original_sentence}" ` +
            `would count as corrected. Make it a multiple_choice question with the correct and incorrect versions as options.`,
        });
    }
    if (VERDICT.test(q.explanation || ''))
      findings.push({
        kind: 'answer',
        where: q.question_id,
        text: q.explanation,
        matches: [],
        fix: `${q.question_id}'s explanation starts with a verdict ("${q.explanation.split(/[.!:,]/)[0]}."). The app adds "Correct!" or "Not quite." itself, so start with the reason.`,
      });
  }
  return findings;
}

/* ───────────── Examples that lost the word they demonstrate ───────────── */

/** The word a comparison label demonstrates: "Clean – Adjective", "Noun: Light", "Before as a preposition" → "clean", … */
function labelWord(text) {
  const parts = text.split(/\s*[–—:]\s*|\s+-\s+|\s+as\s+(?:an?\s+)?/i).map(normalize).filter(Boolean);
  if (parts.length < 2) return null;
  return parts.find((p) => !p.includes(' ') && !isPosTerm(p) && p !== 'a' && p !== 'an') || null;
}

/**
 * A comparison item labelled for a word ("Clean – Adjective", "Noun: Light", "Before as a preposition")
 * whose example sentence doesn't contain that word, e.g. after a rewrite swapped it for a synonym.
 */
function exampleFindings(json) {
  const findings = [];
  for (const page of json.pages)
    for (const block of page.content) {
      if (block.type !== 'comparison') continue;
      for (const item of block.items) {
        if (!item.example) continue;
        const word = labelWord(item.label);
        if (!word) continue;
        if (new RegExp('\\b' + word).test(normalize(item.example))) continue;
        findings.push({
          kind: 'content',
          where: `p${page.page_number}`,
          text: item.example,
          matches: [],
          fix:
            `Page ${page.page_number}: the comparison item "${item.label}" has the example "${item.example}", which doesn't use ` +
            `"${word}". Each example must use the word it demonstrates.`,
        });
      }
    }
  return findings;
}

/* ───────────── Assessment placement (the rules the app's loader enforces) ───────────── */

function assessmentFindings(json) {
  if (!json.assessments) return [];
  const findings = [];
  const add = (where, text, fix) => findings.push({ kind: 'assessment', where, text, matches: [], fix });
  const pageOrder = new Map(json.pages.map((p, i) => [p.page_id, i]));
  const checks = new Map((json.assessments.dimension_assessments || []).map((a) => [a.assessment_id, a]));
  const known = new Set((json.question_bank || []).map((q) => q.question_id));
  for (const d of json.learning_dimensions || []) {
    if (d.applicability === 'not_applicable' || !(d.page_ids || []).length) continue;
    const last = [...d.page_ids].sort((a, b) => (pageOrder.get(a) ?? 0) - (pageOrder.get(b) ?? 0)).pop();
    const check = checks.get(d.assessment_id);
    if (!check) add(d.dimension_id, d.dimension, `${d.dimension_id} has no dimension assessment. Every taught dimension needs a short check placed after ${last}.`);
    else if (check.after_page_id !== last)
      add(check.assessment_id, check.title, `${check.assessment_id} (${d.dimension_id}) is placed after ${check.after_page_id}, but the dimension's last page is ${last}. Place it after ${last}, or fix ${d.dimension_id}'s page_ids.`);
  }
  const used = new Map();
  const use = (id, where) => {
    if (!known.has(id)) add(id, where, `${where} refers to ${id}, which is not in question_bank.`);
    used.set(id, [...(used.get(id) || []), where]);
  };
  for (const p of json.pages) for (const b of p.content) if (b.type === 'question') use(b.question_id, `page ${p.page_id}`);
  for (const a of checks.values()) for (const id of a.question_ids || []) use(id, a.assessment_id);
  const final = json.assessments.final_assessment;
  for (const id of (final && final.question_ids) || []) use(id, 'the final assessment');
  for (const [id, places] of used)
    if (places.length > 1) add(id, places.join(', '), `${id} is used in ${places.join(' and ')}. Ask each question once: drop it from all but one place, or write a new question.`);
  const finalCount = ((final && final.question_ids) || []).length;
  if (!finalCount) add('FA', 'final assessment', 'The lesson has no final assessment. End it with a longer final check whose questions are not used anywhere else.');
  else if (finalCount < MIN_FINAL_QUESTIONS)
    add(
      final.assessment_id || 'FA',
      final.title || 'final assessment',
      `The final assessment has ${finalCount} question${finalCount === 1 ? '' : 's'}. End the lesson with a longer final check: at least ${MIN_FINAL_QUESTIONS} new questions across the lesson's objectives, none used anywhere else.`,
    );
  return findings;
}

/* ───────────── Schema v2.0 values the loader doesn't enforce ───────────── */

const DIMENSION_STATUS = ['covered', 'introduced', 'not_applicable'];
const CROSS_REFERENCE_COVERAGE = ['introduced_only', 'referenced_only', 'excluded'];

/** learning_dimensions[].status and coverage.cross_references[] must use the schema's fields and values. */
function schemaFindings(json) {
  if (json.schema_version !== '2.0') return [];
  const findings = [];
  const add = (where, text, fix) => findings.push({ kind: 'schema', where, text, matches: [], fix });
  for (const d of json.learning_dimensions || [])
    if (!DIMENSION_STATUS.includes(d.status))
      add(d.dimension_id, d.dimension, `${d.dimension_id}'s status is ${JSON.stringify(d.status)}. Use one of ${DIMENSION_STATUS.join(', ')} ("covered" for a taught dimension).`);
  const audit = json.quality_audit || {};
  const statuses = Object.entries({ ...audit, ...(audit.assessment_audit || {}) }).filter(
    ([k]) => !['assessment_audit', 'issues_found', 'corrections_made'].includes(k),
  );
  const notStrings = statuses.filter(([, v]) => !['passed', 'failed', 'review_required'].includes(v)).map(([k]) => k);
  if (notStrings.length)
    add('QA', 'quality_audit', `quality_audit entries must be plain strings ("passed", "failed" or "review_required"), not objects: ${notStrings.join(', ')}.`);
  (json.coverage && json.coverage.cross_references ? json.coverage.cross_references : []).forEach((c, i) => {
    const keys = Object.keys(c).sort().join(',');
    if (keys !== 'concept,coverage,reason' || !CROSS_REFERENCE_COVERAGE.includes(c.coverage))
      add(
        `CR${i + 1}`,
        c.concept || '',
        `Cross-reference ${i + 1} ("${c.concept}") has the fields ${keys}. Use exactly concept, reason and coverage, with coverage one of ${CROSS_REFERENCE_COVERAGE.join(', ')}.`,
      );
  });
  return findings;
}

const pageNo = (where) => Number(where.slice(1));
const dedupe = (matches) => matches.filter((m, i) => matches.findIndex((x) => x.lesson === m.lesson && x.where === m.where) === i);

/** Curriculum order: 1.1.1.EP001 / 1-1-2 → [1, 1, 1] / [1, 1, 2]. */
const order = (id) => (id.match(/\d+/g) || []).slice(0, 3).map(Number);
const byOrder = (a, b) => {
  const x = order(a.topic.topic_id), y = order(b.topic.topic_id);
  for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0);
  return 0;
};
const label = (id) => order(id).join('.');

const where = (m, lessonId) => (m.lesson === lessonId ? `this lesson ${m.where}` : `${label(m.lesson)} ${m.where}`);

/** What the lesson generator should change, one instruction per finding. */
function fixList({ lesson, findings }) {
  return findings.map((f) => {
    if (f.fix) return f.fix;
    const seenIn = f.matches.map((m) => where(m, lesson.id)).join(', ');
    if (f.kind === 'sentence') return `Replace the sentence "${f.text}" (${f.where}). It is already used in ${seenIn}.`;
    if (f.kind === 'title') return `Rename the page title "${f.text}" (${f.where}). It is already a page title in ${seenIn}.`;
    return `Rewrite the key takeaway "${f.text}" (${f.where}). It is already a takeaway in ${seenIn}.`;
  });
}

function formatReport(report) {
  const { lesson, comparedWith, findings } = report;
  const lines = [`Lesson ${label(lesson.id)} (${lesson.id}) "${lesson.title}", compared with ${comparedWith.map(label).join(', ')}`];
  const groups = [
    ['structure', 'Re-taught concepts (same page-per-concept structure as an earlier lesson)'],
    ['sentence', 'Repeated sentences'],
    ['word', 'Words earlier lessons already showed in more than one job'],
    ['title', 'Repeated page titles'],
    ['takeaway', 'Repeated key takeaways'],
    ['answer', 'Answer keys and explanations'],
    ['content', 'Examples that miss their word'],
    ['assessment', 'Assessment placement'],
    ['schema', 'Schema values'],
  ];
  for (const [kind, heading] of groups) {
    const list = findings.filter((f) => f.kind === kind);
    if (!list.length) continue;
    lines.push('', `${heading} (${list.length})`);
    for (const f of list)
      lines.push(
        f.matches.length
          ? `  ${f.where.padEnd(5)} "${f.text}"  — ${f.matches.map((m) => where(m, lesson.id)).join(', ')}`
          : `  ${f.where.padEnd(5)} ${f.fix}`,
      );
  }
  const count = (k) => findings.filter((f) => f.kind === k).length;
  lines.push(
    '',
    `Summary: ${count('structure')} re-taught concept runs, ${count('sentence')} repeated sentences, ${count('title')} repeated titles, ` +
      `${count('takeaway')} repeated takeaways, ${count('word')} re-used job words, ${count('answer')} answer-key issues, ${count('content')} example issues, ${count('assessment')} assessment issues, ${count('schema')} schema issues.`,
  );
  if (!findings.length) {
    lines.push('No problems found.');
    return lines.join('\n');
  }
  lines.push(
    '',
    '──────── Paste below into the lesson generator, with the lesson JSON ────────',
    '',
    `Revise lesson ${lesson.id} "${lesson.title}". Keep everything else unchanged and return the complete JSON.`,
    '',
    ...fixList(report).map((x, i) => `${i + 1}. ${x}`),
  );
  if (count('word') && report.jobWords)
    lines.push('', `Words earlier lessons already show in more than one job (don't use them for that again): ${report.jobWords.join(', ')}.`);
  return lines.join('\n');
}

/** Markdown "Already covered" list for the generation prompt: per lesson, its pages, takeaways and examples. */
function coverageBrief(lessons) {
  const out = ['## Already covered', ''];
  out.push('Do not reuse any sentence, focus word, page title or key takeaway listed below. Build on these lessons instead of re-teaching them.', '');
  out.push(`**Words already shown doing more than one job** (don't demonstrate them that way again): ${usedJobWords(lessons).join(', ')}.`, '');
  for (const json of [...lessons].sort(byOrder)) {
    const f = lessonFacts(json);
    const words = [...new Set(jobWords(json).map((x) => x.word))];
    out.push(`### ${label(f.id)} ${f.title}`, '');
    out.push(`- **Pages:** ${f.titles.map((t) => t.text).join(' · ')}`);
    if (words.length) out.push(`- **Words shown in more than one job:** ${words.join(', ')}`);
    out.push(`- **Key takeaways:** ${[...new Set(f.takeaways.map((t) => t.text))].join(' · ')}`);
    const sentences = f.sentences.filter((s) => s.where.startsWith('p'));
    const unique = sentences.filter((s, i) => sentences.findIndex((x) => normalize(x.text) === normalize(s.text)) === i);
    out.push('- **Example sentences:**');
    for (const s of unique) out.push(`  - ${s.text}${s.focus.length ? ` _(focus: ${[...new Set(s.focus)].join(', ')})_` : ''}`);
    out.push('');
  }
  return out.join('\n');
}

function loadContent(dir = CONTENT_DIR) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
}

/**
 * Lesson drafts in a folder (`.md` workbench pastes or `.json`) as { file, json }; a relative folder is read from
 * the repository root. A missing folder has no drafts.
 */
function readDrafts(dir) {
  const abs = path.resolve(__dirname, '..', dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => /\.(md|json)$/i.test(f))
    .map((file) => {
      try {
        return { file, json: parseLessonText(fs.readFileSync(path.join(abs, file), 'utf8')) };
      } catch (e) {
        throw new Error(`${path.join(dir, file)} is not lesson JSON: ${e.message}`);
      }
    });
}

/** The lessons in a draft folder, in curriculum order. */
function loadDrafts(dir) {
  if (!fs.existsSync(path.resolve(__dirname, '..', dir))) throw new Error(`No such folder: ${dir}`);
  return readDrafts(dir)
    .map((d) => d.json)
    .sort(byOrder);
}

/**
 * The lessons a candidate is compared with: every app lesson, plus the drafts that come before it in
 * curriculum order. A draft replaces the app copy of its topic.
 */
function comparisonSet(candidate, appLessons, drafts) {
  return withDrafts(appLessons, drafts).filter((l) => !drafts.includes(l) || byOrder(l, candidate) < 0);
}

/** App lessons and drafts together, a draft replacing the app copy of its topic. */
function withDrafts(appLessons, drafts) {
  const replaced = new Set(drafts.map((d) => d.topic.topic_id));
  return [...appLessons.filter((l) => !replaced.has(l.topic.topic_id)), ...drafts];
}

/** Values of a repeatable `--flag <value>` argument. */
const argValues = (args, flag) => args.flatMap((a, i) => (a === flag && args[i + 1] ? [args[i + 1]] : []));

function main(argv) {
  const args = argv.slice(2);
  const strict = args.includes('--strict');
  const writeAt = args.indexOf('--write-brief');
  const allDir = argValues(args, '--all')[0];
  const withDirs = argValues(args, '--with');
  const app = loadContent();
  const drafts = [...withDirs, ...(allDir ? [allDir] : [])].flatMap(loadDrafts);
  const uniqueDrafts = drafts.filter((d, i) => drafts.findIndex((x) => x.topic.topic_id === d.topic.topic_id) === i);
  const everything = withDrafts(app, uniqueDrafts);
  if (args.includes('--brief')) {
    process.stdout.write(coverageBrief(everything) + '\n');
    return 0;
  }
  if (writeAt !== -1) {
    const file = args[writeAt + 1];
    const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
    const marker = BRIEF_MARKER.exec(current);
    const head = marker ? current.slice(0, marker.index) : current ? current.trimEnd() + '\n\n' : '';
    const command = [`--write-brief "${file}"`, ...withDirs.map((d) => `--with "${d}"`)].join(' ');
    fs.writeFileSync(file, `${head}${briefMarker(command)}\n\n${coverageBrief(everything)}\n`);
    console.log(`Updated ${file}`);
    return 0;
  }
  if (allDir) {
    const batch = loadDrafts(allDir);
    const results = batch.map((lesson) => findOverlaps(lesson, comparisonSet(lesson, app, uniqueDrafts)));
    for (const report of results) console.log(formatReport(report) + '\n\n' + '═'.repeat(72) + '\n');
    const dirty = results.filter((r) => r.findings.length);
    console.log(
      `Batch: ${results.length} lesson${results.length === 1 ? '' : 's'} in ${allDir}. ` +
        (dirty.length ? `Problems in ${dirty.map((r) => `${r.lesson.id} (${r.findings.length})`).join(', ')}.` : 'No problems found.'),
    );
    return strict && dirty.length ? 1 : 0;
  }
  const input = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--with') || DEFAULT_INPUT;
  const candidate = parseLessonText(fs.readFileSync(input, 'utf8'));
  const report = findOverlaps(candidate, comparisonSet(candidate, app, uniqueDrafts));
  console.log(formatReport(report));
  return strict && report.findings.length ? 1 : 0;
}

module.exports = {
  parseLessonText,
  normalize,
  lessonFacts,
  pageConcepts,
  findOverlaps,
  fixList,
  formatReport,
  coverageBrief,
  loadContent,
  loadDrafts,
  readDrafts,
  comparisonSet,
  BRIEF_MARKER,
};

if (require.main === module) process.exitCode = main(process.argv);
