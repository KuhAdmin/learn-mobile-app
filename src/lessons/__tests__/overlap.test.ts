import { describe, expect, it } from '@jest/globals';

import v1raw from '../content/1.1.1.EP001.json';
import v2raw from '../content/1-1-2.json';
import v3raw from '../content/1-1-3.json';
import v4raw from '../content/1-1-4.json';
import v5raw from '../content/1-1-5.json';
import v6raw from '../content/1-1-6.json';

// The first 1.1.6 the generator produced: it re-taught 1.1.2 and 1.1.5. Kept as a regression case.
import draft from './fixtures/1-1-6-first-draft.json';

interface Finding {
  kind: 'sentence' | 'title' | 'takeaway' | 'structure' | 'word' | 'answer' | 'content' | 'assessment' | 'schema';
  where: string;
  text: string;
  matches: { lesson: string; where: string }[];
  fix?: string;
}
interface Report {
  findings: Finding[];
  comparedWith: string[];
}
interface OverlapTool {
  parseLessonText(text: string): unknown;
  normalize(text: string): string;
  findOverlaps(candidate: unknown, earlier: unknown[]): Report;
  comparisonSet(candidate: unknown, appLessons: unknown[], drafts: unknown[]): unknown[];
  fixList(report: Report): string[];
  coverageBrief(lessons: unknown[]): string;
}
// Plain Node script (scripts/lesson-overlap.js), so it runs without a build step.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tool: OverlapTool = require('../../../scripts/lesson-overlap');

const earlier = [v1raw, v2raw, v3raw, v4raw, v5raw];
// Untyped deep copy, so tests can break the JSON on purpose.
const clone = (x: unknown) => JSON.parse(JSON.stringify(x));
// 1.1.6 reuses three job words from 1.1.5 (tested below); other tests look past them.
const others = (lesson: unknown) => tool.findOverlaps(lesson, earlier).findings.filter((f) => f.kind !== 'word');

describe('lesson overlap check', () => {
  const { findings, comparedWith } = tool.findOverlaps(draft, [...earlier, v6raw]);
  const has = (kind: Finding['kind'], text: string, lesson: string) =>
    findings.some((f) => f.kind === kind && f.text === text && f.matches.some((m) => m.lesson === lesson));

  it("finds what 1.1.6's first draft repeated from earlier lessons", () => {
    expect(comparedWith).toEqual(['1.1.1.EP001', '1-1-2', '1-1-3', '1-1-4', '1-1-5']);
    expect(has('sentence', 'She drives carefully.', '1-1-2')).toBe(true);
    expect(has('sentence', 'I arrived before lunch.', '1-1-5')).toBe(true);
    expect(has('title', 'What Are Parts of Speech?', '1-1-2')).toBe(true);
    // Repeated inside the lesson itself (pages 13 and 22).
    expect(has('takeaway', 'Find the word being described.', '1-1-6')).toBe(true);
  });

  it('matches sentences loosely but never reads text between two quoted words', () => {
    expect(has('sentence', 'Children play outside.', '1-1-5')).toBe(true); // vs "The children play outside."
    expect(findings.some((f) => tool.normalize(f.text) === 'in the sentence')).toBe(false);
    expect(tool.normalize('“Wow!” That’s it.')).toBe('wow thats it');
  });

  it('flags re-teaching one part of speech per page, but not "changing jobs" pages', () => {
    const run = findings.find((f) => f.kind === 'structure' && f.matches[0].lesson === '1-1-2');
    expect(run).toMatchObject({ where: 'p5–p12' });
    expect(run?.text).toContain('noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection');
    // 1.1.5's "A Noun Can Become a Verb" pages teach changing jobs, not the parts themselves.
    expect(tool.findOverlaps(v5raw, earlier).findings.some((f) => f.kind === 'structure')).toBe(false);
  });

  it('does not flag a lesson that goes deeper into one part of speech', () => {
    // A nouns lesson (like 1.2.1) has many pages opening "A noun …"; that is its topic, not a re-run of 1.1.2.
    const nouns = clone(v6raw);
    nouns.pages.slice(0, 6).forEach((p: { title: string; key_takeaway: string; content: unknown[] }, i: number) => {
      p.title = `The Noun at Work ${i + 1}`;
      p.key_takeaway = `A noun can do job ${i + 1}.`;
      p.content = [{ block_id: `N${i}`, type: 'text', text: `A noun can do job number ${i + 1} in a sentence.` }];
    });
    expect(tool.findOverlaps(nouns, earlier).findings.some((f) => f.kind === 'structure')).toBe(false);
  });

  it('checks answer keys and assessment placement, with a fix for each', () => {
    // The draft's "Identify the noun in 'The baby is sleeping.'" accepted only "noun" (Q005–Q012).
    expect(findings.filter((f) => f.kind === 'answer').map((f) => f.where)).toEqual(['Q005', 'Q006', 'Q007', 'Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(findings.find((f) => f.where === 'Q005')?.fix).toContain('The answer is "baby"');
    // The fixed lesson has no other issue, and "Identify the part of speech of 'smiled'"-style prompts are never flagged.
    expect(others(v6raw)).toEqual([]);
    const swapped = clone(v6raw);
    swapped.question_bank.find((q: { question_id: string }) => q.question_id === 'Q006').accepted_answers = ['pronoun'];
    expect(others(swapped).map((f) => f.fix)).toEqual([expect.stringContaining('Put the word itself in accepted_answers')]);

    const misplaced = clone(v4raw);
    misplaced.assessments.dimension_assessments[3].after_page_id = 'PAGE010';
    misplaced.pages[8].content.push({ block_id: 'X', type: 'question', question_id: 'Q006' });
    const report = tool.findOverlaps(misplaced, earlier);
    const assessment = report.findings.filter((f) => f.kind === 'assessment').map((f) => f.fix);
    expect(assessment).toEqual([
      expect.stringContaining('DA004 (DIM004) is placed after PAGE010'),
      expect.stringContaining('Q006 is used in page PAGE009 and DA003'),
    ]);
    // The generator fix list has one instruction per finding.
    expect(tool.fixList(report)).toHaveLength(report.findings.length);
  });

  it('checks a batch of drafts against each other, earlier drafts only', () => {
    const asDraft = (lesson: unknown, id: string) => {
      const d = clone(lesson);
      d.topic.topic_id = id;
      return d;
    };
    // Two drafts teaching with the same sentences: only the later one reports the repeats.
    const first = asDraft(v6raw, '1-2-1');
    const second = asDraft(v6raw, '1-2-2');
    const drafts = [second, first];
    const repeatsOf = (lesson: unknown, other: string) =>
      tool.findOverlaps(lesson, tool.comparisonSet(lesson, earlier, drafts)).findings.filter((f) => f.matches.some((m) => m.lesson === other));
    expect(repeatsOf(second, '1-2-1').some((f) => f.kind === 'sentence')).toBe(true);
    expect(repeatsOf(first, '1-2-2')).toEqual([]);
    // A draft replaces the app copy of its topic.
    const redo = asDraft(v5raw, '1-1-5');
    expect(tool.comparisonSet(asDraft(v6raw, '1-2-3'), earlier, [redo])).toEqual([v1raw, v2raw, v3raw, v4raw, redo]);
  });

  it('flags a short final check and values outside schema v2.0', () => {
    const bad = clone(v6raw);
    bad.assessments.final_assessment.question_ids = bad.assessments.final_assessment.question_ids.slice(0, 1);
    bad.learning_dimensions[0].status = 'applicable';
    bad.coverage.cross_references[0] = { concept: 'Pronouns', status: 'excluded', related_lesson: null, note: 'Later.' };
    const kinds = others(bad).filter((f) => f.kind === 'assessment' || f.kind === 'schema');
    expect(kinds.map((f) => [f.kind, f.where])).toEqual([
      ['assessment', 'FA001'],
      ['schema', 'DIM001'],
      ['schema', 'CR1'],
    ]);
    expect(kinds[0].fix).toContain('at least 4 new questions');
  });

  it('flags typed corrections that only fix capitals or apostrophes', () => {
    const typed = clone(v6raw);
    typed.question_bank.push({
      question_id: 'Q099',
      type: 'sentence_correction',
      learning_objective_ids: ['OBJ001'],
      prompt: 'Correct the sentence.',
      original_sentence: 'my sisters bag is red.',
      corrected_sentence: "My sister's bag is red.",
      explanation: 'Sister owns the bag.',
    });
    expect(others(typed).find((f) => f.where === 'Q099')?.fix).toContain('Make it a multiple_choice question');
  });

  it('flags comparison examples that lost the word they demonstrate', () => {
    // The regenerated 1.1.6 swapped "clean" for "spotless" to avoid a repeat.
    const lost = clone(v6raw);
    lost.pages[15].content[0].items[0].example = 'The spotless kitchen looks lovely.';
    expect(others(lost)).toEqual([
      expect.objectContaining({ kind: 'content', where: 'p16', fix: expect.stringContaining('"Clean – Adjective"') }),
    ]);
  });

  it('flags words an earlier lesson already showed doing more than one job', () => {
    // 1.1.6 pages 15–16 show light, clean and early in two jobs, as 1.1.5 did.
    const words = tool.findOverlaps(v6raw, earlier).findings.filter((f) => f.kind === 'word');
    expect(words.map((f) => [f.where, f.text, f.matches.map((m) => `${m.lesson} ${m.where}`)])).toEqual([
      ['p15', 'light', ['1-1-5 p13']],
      ['p16', 'clean', ['1-1-5 p7']],
      ['p16', 'early', ['1-1-5 p9']],
    ]);
    expect(words[0].fix).toContain('Use a word no earlier lesson has shown in more than one job');
    // patient / patiently is one pair; "Mina" in both examples is not a demonstrated word.
    expect(tool.findOverlaps(v6raw, earlier).findings.some((f) => f.text === 'mina')).toBe(false);
    expect(tool.coverageBrief([v5raw])).toContain('**Words shown in more than one job:** book, play, water, answer');
  });

  it('reads sentences in unquoted prompts and in answer options', () => {
    const q = clone(v6raw);
    q.question_bank[0].prompt = 'What is the word class of light in: This bag is light?';
    q.question_bank[0].options = [{ option_id: 'A', text: 'Please clean the room.' }, { option_id: 'B', text: 'Noun' }];
    const sentences = tool.findOverlaps(q, earlier).findings.filter((f) => f.kind === 'sentence');
    expect(sentences.map((f) => [f.text, f.matches[0].lesson])).toEqual([
      ['This bag is light', '1-1-5'],
      ['Please clean the room.', '1-1-5'],
    ]);
  });

  it('reads plain, fenced and rich-text workbench pastes', () => {
    const json = JSON.stringify({ a: 'x' }, null, 2);
    expect(tool.parseLessonText(json)).toEqual({ a: 'x' });
    expect(tool.parseLessonText('```\n\n' + json + '\n\n```\n')).toEqual({ a: 'x' });
    expect(tool.parseLessonText('{\\\n&#x20; "a": "x"\\\n}')).toEqual({ a: 'x' });
  });

  it('lists every lesson in curriculum order in the brief', () => {
    const brief = tool.coverageBrief([v6raw, ...earlier]);
    const order = ['### 1.1.1 ', '### 1.1.2 ', '### 1.1.3 ', '### 1.1.4 ', '### 1.1.5 ', '### 1.1.6 '].map((h) => brief.indexOf(h));
    expect(order.every((i, k) => i >= 0 && (k === 0 || i > order[k - 1]))).toBe(true);
    expect(brief).toContain('Riya is my friend. She is kind.');
  });
});
