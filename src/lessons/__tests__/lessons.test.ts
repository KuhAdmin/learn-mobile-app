import { describe, expect, it } from '@jest/globals';

import { findTopic } from '@/learning-path/progression';

import { explanationText, grade, normalizeTyped, score, type Answer } from '../answers';
import v1raw from '../content/1.1.1.EP001.json';
import v2raw from '../content/1-1-2.json';
import v3raw from '../content/1-1-3.json';
import v4raw from '../content/1-1-4.json';
import v5raw from '../content/1-1-5.json';
import v6raw from '../content/1-1-6.json';
import v7raw from '../content/1-1-7.json';
import v21raw from '../content/1-2-1.json';
import v22raw from '../content/1-2-2.json';
import v23raw from '../content/1-2-3.json';
import v24raw from '../content/1-2-4.json';
import v25raw from '../content/1-2-5.json';
import v26raw from '../content/1-2-6.json';
import v27raw from '../content/1-2-7.json';
import v28raw from '../content/1-2-8.json';
import v29raw from '../content/1-2-9.json';
import v210raw from '../content/1-2-10.json';
import v211raw from '../content/1-2-11.json';
import v212raw from '../content/1-2-12.json';
import v213raw from '../content/1-2-13.json';
import v214raw from '../content/1-2-14.json';
import {
  buildSteps,
  initialLessonFlow,
  lessonFlowReducer,
  lessonScore,
  nextCta,
  type LessonFlowState,
  type LessonStep,
} from '../lesson-flow';
import { parseList } from '../list-items';
import { loadLesson, type Lesson, type Question } from '../model';
import { LESSON_VISUALS, visualsFor } from '../presentation';
import { curriculumTopicId, lessonForTopic } from '../registry';
import {
  bodyBudget,
  DEFAULT_BUDGET,
  estimateHeight,
  lessonScreens,
  pageBlockArt,
  screenBlocks,
  splitList,
  titleLines,
  type LessonScreen,
} from '../screens';
import { groupExamples, highlightList, keepSuffixes, splitTokenSentences, tokenizeGroups, tokenizeSentence } from '../sentence';

const v1 = loadLesson(v1raw);
const v2 = loadLesson(v2raw);
const v3 = loadLesson(v3raw);
const v4 = loadLesson(v4raw);
const v5 = loadLesson(v5raw);
const v6 = loadLesson(v6raw);
const v7 = loadLesson(v7raw);
const v21 = loadLesson(v21raw);
const v22 = loadLesson(v22raw);
const v23 = loadLesson(v23raw);
const v24 = loadLesson(v24raw);
const v25 = loadLesson(v25raw);
const v26 = loadLesson(v26raw);
const v27 = loadLesson(v27raw);
const v28 = loadLesson(v28raw);
const v29 = loadLesson(v29raw);
const v210 = loadLesson(v210raw);
const v211 = loadLesson(v211raw);
const v212 = loadLesson(v212raw);
const v213 = loadLesson(v213raw);
const v214 = loadLesson(v214raw);
// Untyped deep copy, so tests can break the JSON on purpose.
const clone = (x: unknown) => JSON.parse(JSON.stringify(x));

/** Estimated block height of a packed screen (with the pictures drawn inside its blocks). */
const packedHeight = (lesson: Lesson, s: LessonScreen) => {
  const art = pageBlockArt(s.page, visualsFor(lesson.id));
  return s.blocks.reduce((sum, b) => sum + estimateHeight(b, art[b.block_id]) + 24, -24);
};

describe('lesson content', () => {
  it('loads both schema versions and maps them onto path topics', () => {
    expect([v1.schemaVersion, v1.pages.length, v1.finalCheck?.questionIds.length]).toEqual(['1.0', 8, 4]);
    expect([v2.schemaVersion, v2.pages.length, Object.keys(v2.questions).length]).toEqual(['2.0', 16, 21]);
    expect(v2.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE010', 'PAGE012', 'PAGE014', 'PAGE016']);
    expect(v2.finalCheck?.questionIds).toHaveLength(6);
    expect(curriculumTopicId('1.1.1.EP001')).toBe('s1.1.01');
    expect(curriculumTopicId('1-1-2')).toBe('s1.1.02');
    expect(findTopic('s1.1.02')?.topic.title).toBe('The Eight Parts of Speech');
    expect(lessonForTopic('s1.1.02')?.id).toBe('1-1-2');
    expect(lessonForTopic('s1.1.03')?.lessonTitle).toBe('Content Words and Function Words');
    expect(lessonForTopic('s1.1.04')?.lessonTitle).toBe('Open and Closed Word Classes');
    expect(lessonForTopic('s1.1.05')?.lessonTitle).toBe(v5.lessonTitle);
    expect(lessonForTopic('s1.1.06')?.lessonTitle).toBe(v6.lessonTitle);
    expect(lessonForTopic('s1.1.07')?.lessonTitle).toBe(v7.lessonTitle);
    expect(lessonForTopic('s1.1.08')).toBeUndefined();
    expect(curriculumTopicId('1-2-1')).toBe('s1.2.01');
    expect(lessonForTopic('s1.2.01')?.lessonTitle).toBe('Introduction to Nouns');
    expect(lessonForTopic('s1.2.02')?.lessonTitle).toBe('Common and Proper Nouns');
    expect(lessonForTopic('s1.2.03')?.lessonTitle).toBe('Concrete and Abstract Nouns');
    expect(lessonForTopic('s1.2.04')?.lessonTitle).toBe('Collective Nouns');
    expect(lessonForTopic('s1.2.05')?.lessonTitle).toBe('Countable and Uncountable Nouns');
    expect(lessonForTopic('s1.2.06')?.lessonTitle).toBe('Material Nouns');
    expect(lessonForTopic('s1.2.07')?.lessonTitle).toBe('Compound Nouns');
    expect(lessonForTopic('s1.2.08')?.lessonTitle).toBe('Singular and Plural Nouns');
    expect(lessonForTopic('s1.2.09')?.lessonTitle).toBe('Regular and Irregular Plurals');
    expect(curriculumTopicId('1-2-10')).toBe('s1.2.10');
    expect(lessonForTopic('s1.2.10')?.lessonTitle).toBe('Gender of Nouns');
    expect(lessonForTopic('s1.2.11')?.lessonTitle).toBe('Possessive Nouns');
    expect(lessonForTopic('s1.2.12')?.lessonTitle).toBe('Noun Formation and Word Building');
    expect(lessonForTopic('s1.2.13')?.lessonTitle).toBe('Noun Functions in Sentences');
    expect(lessonForTopic('s1.2.14')?.lessonTitle).toBe('Noun Usage and Common Errors');
    expect([v3.pages.length, Object.keys(v3.questions).length, v3.finalCheck?.questionIds.length]).toEqual([15, 18, 6]);
  });

  it('uses only lesson pictures with a transparent background', () => {
    // CLAUDE.md "Lesson artwork": cutouts never keep the mockup's ivory page background.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const art: { opaqueLessonArt(): string[]; webpHasAlpha(buf: Uint8Array): boolean } = require('../../../scripts/art-cutout');
    expect(art.opaqueLessonArt()).toEqual([]);
  });

  it('gives every 1.1.3 page a picture', () => {
    const pages = visualsFor('1-1-3')?.pages ?? {};
    expect(v3.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual([]);
  });

  it('converts v1 true/false and multiple-choice questions', () => {
    expect(v1.questions.Q003).toMatchObject({ type: 'true_false', correct: true });
    expect(v1.questions.Q001).toMatchObject({ type: 'multiple_choice', correctIds: ['A'] });
  });

  it('rejects malformed content with the JSON path of the problem', () => {
    const broken = clone(v1raw);
    broken.knowledge_check.questions[1].correct_answers = ['Z'];
    expect(() => loadLesson(broken)).toThrow('$.knowledge_check.questions[1].correct_answers');
    const badPair = clone(v2raw);
    badPair.question_bank[16].correct_pairs[0].right_id = 'R99';
    expect(() => loadLesson(badPair)).toThrow('unknown item R99');
    const overlap = clone(v2raw);
    overlap.assessments.final_assessment.question_ids.push('Q001');
    expect(() => loadLesson(overlap)).toThrow('Q001 is used more than once (dimension check DA001 and the final assessment)');
    // Rule: each taught dimension ends with its own check; the lesson ends with a final check.
    const lateCheck = clone(v3raw);
    lateCheck.assessments.dimension_assessments[1].after_page_id = 'PAGE014';
    expect(() => loadLesson(lateCheck)).toThrow('DA002 must follow PAGE007');
    const noCheck = clone(v3raw);
    delete noCheck.learning_dimensions[2].assessment_id;
    expect(() => loadLesson(noCheck)).toThrow('needs a short assessment after PAGE010');
    const noFinal = clone(v3raw);
    noFinal.assessments.final_assessment.question_ids = [];
    expect(() => loadLesson(noFinal)).toThrow('a lesson needs a final assessment');
    // Rule: a question is asked once. An in-page practice question can't also be in the check after it.
    const twice = clone(v4raw);
    twice.pages[8].content.push({ block_id: 'BLOCK018', type: 'question', question_id: 'Q003' });
    expect(() => loadLesson(twice)).toThrow('Q003 is used more than once (page PAGE009 and dimension check DA003)');
    const badHighlight = clone(v2raw);
    badHighlight.pages[0].content[1].examples[0].highlight = ['cat'];
    expect(() => loadLesson(badHighlight)).toThrow('"cat" is not in the sentence');
  });

  it('every annotated example spells out its sentence', () => {
    const annotations = LESSON_VISUALS['1.1.1.EP001'].annotations ?? {};
    for (const page of v1.pages)
      for (const block of page.content)
        if (block.type === 'example' && annotations[block.block_id])
          expect(annotations[block.block_id].map((a) => a.text).join(' ')).toBe(block.examples[0].sentence);
  });
});

describe('tokenizeSentence', () => {
  it('alternates highlight tones in sentence order and keeps punctuation on the word', () => {
    expect(tokenizeSentence('The happy girl dances.', ['girl', 'happy', 'dances'])).toEqual([
      { text: 'The', tone: null },
      { text: 'happy', tone: 'teal' },
      { text: 'girl', tone: 'salmon' },
      { text: 'dances.', tone: 'teal' },
    ]);
  });

  it('matches fragments with punctuation ("Wow!") and splits sentences', () => {
    expect(tokenizeSentence('Wow! The boy runs.', ['Wow!', 'runs'])[0]).toEqual({ text: 'Wow!', tone: 'teal' });
    const tokens = tokenizeSentence('I drink water. Please water the plant.', ['drink', 'water', 'water', 'plant']);
    expect(tokens.filter((t) => t.tone).map((t) => t.text)).toEqual(['drink', 'water.', 'water', 'plant.']);
    expect(splitTokenSentences(tokens).map((g) => g.map((t) => t.text).join(' '))).toEqual([
      'I drink water.',
      'Please water the plant.',
    ]);
  });

  it('highlights a multi-word phrase as one chip tone', () => {
    // 1.1.6 page 6 highlights the whole subject: "The little squirrel".
    const tones = tokenizeSentence('The little squirrel climbed the tree.', ['The little squirrel']).map((t) => t.tone);
    expect(tones).toEqual(['teal', 'teal', 'teal', null, null, null]);
    // Phrases and single words alternate tones in sentence order.
    expect(tokenizeSentence('Mira opened the wooden box.', ['opened', 'the wooden box']).map((t) => t.tone)).toEqual([
      null,
      'teal',
      'salmon',
      'salmon',
      'salmon',
    ]);
  });

  it('shows a repeated sentence once, with one tone per highlight group', () => {
    const block = v3.pages[10].content[1]; // "The children are playing in the park." ×2
    if (block.type !== 'example') throw new Error('expected example');
    const groups = groupExamples(block.examples);
    expect(groups).toHaveLength(1);
    const tokens = tokenizeGroups(
      groups[0][0].sentence,
      groups[0].map((e) => e.highlight),
    );
    expect(tokens.map((t) => `${t.text}:${t.tone ?? '-'}`).join(' ')).toBe(
      'The:salmon children:teal are:salmon playing:teal in:salmon the:salmon park.:teal',
    );
    expect(highlightList(['The', 'are', 'in', 'the'])).toBe('The, are, in');
    // Different sentences stay separate.
    expect(groupExamples([{ sentence: 'A.' }, { sentence: 'B.' }, { sentence: 'B.' }]).map((g) => g.length)).toEqual([1, 2]);
  });
});

describe('parseList', () => {
  it('picks tiles, question rows, chips or plain rows from the item shape', () => {
    expect(parseList(['Noun – names something.', 'Verb – shows an action or state.'])).toEqual({
      layout: 'tiles',
      entries: [
        { text: 'Noun – names something.', label: 'Noun', detail: 'names something' },
        { text: 'Verb – shows an action or state.', label: 'Verb', detail: 'shows an action or state' },
      ],
    });
    expect(parseList(['People: teacher, mother']).entries[0]).toMatchObject({ label: 'People', detail: 'teacher, mother' });
    expect(parseList(['Does it name something? Noun.']).entries[0]).toMatchObject({ label: 'Does it name something?', detail: 'Noun' });
    expect(parseList(['I, you, he, she, it', 'We, they']).layout).toBe('chips');
    expect(parseList(['Words make sentences.', 'Grammar helps words work together.']).layout).toBe('rows');
  });
});

describe('answers', () => {
  const q = (id: string) => v2.questions[id] as Question;
  it('grades every question type', () => {
    expect(grade(q('Q001'), { kind: 'choice', id: 'A' })).toBe(true);
    expect(grade(q('Q001'), { kind: 'choice', id: 'B' })).toBe(false);
    expect(grade(q('Q010'), { kind: 'bool', value: true })).toBe(true);
    expect(grade(q('Q003'), { kind: 'text', values: ['  Noun. '] })).toBe(true);
    expect(grade(q('Q014'), { kind: 'text', values: ['on'] })).toBe(false);
    const match = q('Q017');
    if (match.type !== 'match_the_pair') throw new Error('expected match');
    expect(grade(match, { kind: 'pairs', pairs: match.pairs })).toBe(true);
    expect(grade(match, { kind: 'pairs', pairs: { ...match.pairs, L1: 'R2', L2: 'R1' } })).toBe(false);
    expect(grade(q('Q001'), undefined)).toBeNull();
    expect(normalizeTyped('“Adverb!”')).toBe('adverb');
  });

  it("gives the verdict once, for the learner's actual answer", () => {
    const authored = 'Correct. Closed classes usually gain new words very rarely.';
    expect(explanationText(authored, true)).toBe('Correct! Closed classes usually gain new words very rarely.');
    expect(explanationText(authored, false)).toBe('Not quite. Closed classes usually gain new words very rarely.');
    expect(explanationText('Correctly placed words help.', true)).toBe('Correct! Correctly placed words help.');
    expect(explanationText('Wow is an interjection.', null)).toBe('Wow is an interjection.');
  });

  it('grades word-list answers in any order', () => {
    const q3 = (id: string) => v3.questions[id] as Question;
    const typed = (s: string) => ({ kind: 'text' as const, values: [s] });
    expect(grade(q3('Q007'), typed('quickly, runs, small, dog'))).toBe(true);
    expect(grade(q3('Q007'), typed('Small dog runs and quickly'))).toBe(true);
    expect(grade(q3('Q007'), typed('small, dog, runs'))).toBe(false);
    expect(grade(q3('Q004'), typed('the, is, in'))).toBe(true);
    expect(grade(q3('Q016'), typed('on, the, has, she'))).toBe(true);
    expect(grade(q3('Q016'), typed('she, has, flowers'))).toBe(false);
  });

  it('scores only graded questions', () => {
    const answers: Record<string, Answer> = { Q016: { kind: 'choice', id: 'B' }, Q018: { kind: 'choice', id: 'A' } };
    expect(score([q('Q016'), q('Q018')], answers)).toEqual({ correct: 1, total: 2 });
  });
});

describe('lessonScreens', () => {
  it('keeps lesson 1.1.1 split into intro + example screens', () => {
    const screens = lessonScreens(v1, visualsFor(v1.id));
    expect(screens.map((s) => `${s.page.page_number}.${s.part}`)).toEqual([
      '1.0', '1.1', '2.0', '2.1', '3.0', '3.1', '4.0', '4.1', '5.0', '5.1', '6.0', '6.1', '7.0', '7.1', '8.0', '8.1',
    ]);
    const [intro, example] = screens;
    expect([intro.blocks.map((b) => b.type), intro.showArt, intro.showTakeaway]).toEqual([['text'], true, false]);
    expect([example.blocks.map((b) => b.type), example.showArt, example.showTakeaway]).toEqual([['example'], false, true]);
    // Page 7 keeps its sentence pictures with the intro and breaks at the explanation.
    expect([screens[12], screens[13]].map((s) => [s.blocks.map((b) => b.type), s.blockPart])).toEqual([
      [['text', 'example'], 'sentences'],
      [['example'], 'explanation'],
    ]);
    // Summary: checklist, then picture + takeaway.
    expect(screens[14]).toMatchObject({ showArt: false, showTakeaway: false });
    expect(screens[15]).toMatchObject({ blocks: [], showArt: true, showTakeaway: true });
  });

  it('packs lesson 1.1.2 so no screen exceeds the height budget', () => {
    const screens = lessonScreens(v2, visualsFor(v2.id));
    for (const s of screens.filter((x) => x.part > 0 && x.blocks.length > 1)) {
      expect(packedHeight(v2, s)).toBeLessThanOrEqual(DEFAULT_BUDGET - titleLines(s.page.title) * 37);
    }
    // A shorter phone gets more screens.
    expect(lessonScreens(v2, visualsFor(v2.id), bodyBudget(667, 20, 0)).length).toBeGreaterThan(screens.length);
    const byPage = (n: number) => screens.filter((s) => s.page.page_number === n).map((s) => s.blocks.map((b) => b.type));
    // Noun page: intro, examples, then the list with the takeaway (takeaway never alone).
    expect(byPage(4)).toEqual([['text'], ['example'], ['list']]);
    expect(screens.filter((s) => s.page.page_number === 4).at(-1)?.showTakeaway).toBe(true);
    // Practice questions are not drawn on screens.
    expect(byPage(15)).toEqual([['text']]);
  });

  it('fits lesson 1.1.3 on screens, splitting tall comparisons', () => {
    const screens = lessonScreens(v3, visualsFor(v3.id));
    for (const s of screens.filter((x) => x.blocks.some((b) => b.type !== 'text'))) {
      const budget = DEFAULT_BUDGET - titleLines(s.page.title) * 37;
      if (s.blockPart === 'all') expect(packedHeight(v3, s)).toBeLessThanOrEqual(budget);
    }
    const byPage = (n: number) => screens.filter((s) => s.page.page_number === n);
    // No intro text: the comparison first, then picture + takeaway.
    expect(byPage(9).map((s) => [s.blocks.map((b) => b.type), s.showArt, s.showTakeaway])).toEqual([
      [['comparison'], false, false],
      [[], true, true],
    ]);
    // Summary: comparison items, then points, then picture + takeaway.
    expect(byPage(15).map((s) => s.blockPart)).toEqual(['items', 'points', 'all']);
    expect(byPage(15).at(-1)).toMatchObject({ blocks: [], showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.1.6 on screens', () => {
    const screens = lessonScreens(v6, visualsFor(v6.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v6, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v6.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE011', 'PAGE014', 'PAGE016', 'PAGE018', 'PAGE020']);
    // Page 3's eight tiles continue on a second screen, split between grid rows; numbering carries on.
    const page3 = screens.filter((s) => s.page.page_number === 3 && s.blocks[0]?.type === 'list').map((s) => s.blocks[0]);
    expect(page3.length).toBeGreaterThan(1);
    const parts = page3.map((b) => (b.type === 'list' ? [b.start, b.items.length, Boolean(b.introduction)] : null));
    expect(parts.every((p) => p && (p[0] as number) % 2 === 0)).toBe(true);
    expect(parts.map((p) => p?.[2])).toEqual([true, ...parts.slice(1).map(() => false)]);
    const all = v6.pages[2].content[0];
    if (all.type !== 'list') throw new Error('expected list');
    expect(splitList(all, 10_000)).toEqual([{ ...all, start: 0 }]);
    expect(grade(v6.questions.Q005, { kind: 'text', values: ['gardener'] })).toBe(true);
  });

  it('fits lesson 1.1.7 on screens, with practice on pages 6 and 17', () => {
    const screens = lessonScreens(v7, visualsFor(v7.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v7, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v7.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE013', 'PAGE015', 'PAGE019']);
    const practice = (n: number) => v7.pages[n - 1].content.flatMap((b) => (b.type === 'question' ? [b.question_id] : []));
    expect([practice(6), practice(17)]).toEqual([['Q019'], ['Q007', 'Q008']]);
    expect(v7.checkpoints.at(-1)?.questionIds).toEqual(['Q006', 'Q016']);
    // "Every adverb must end in -ly." never wraps between "-" and "ly"; hyphenated words are untouched.
    expect(keepSuffixes('Every adverb must end in -ly.')).toBe('Every adverb must end in -\u2060ly.');
    expect(keepSuffixes('a well-known word')).toBe('a well-known word');
  });

  it('fits lesson 1.2.1 on screens, with a check after each dimension and a longer final check', () => {
    const screens = lessonScreens(v21, visualsFor(v21.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v21, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v21.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE008']);
    expect(v21.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    // Word-list answers match in any order.
    expect(grade(v21.questions.Q005, { kind: 'text', values: ['fence and farmer'] })).toBe(true);
    // Every page but the side-by-side comparison has a picture.
    const pages = visualsFor('1-2-1')?.pages ?? {};
    expect(v21.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE007']);
  });

  it('fits lesson 1.2.2 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v22.id);
    const screens = lessonScreens(v22, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v22, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v22.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE007', 'PAGE009']);
    expect(v22.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Both proper nouns, in either order.
    expect(grade(v22.questions.Q010, { kind: 'text', values: ['Leela and Friday'] })).toBe(true);
    // Page 4's dogs are drawn in its comparison cards; every other page has its own picture.
    const pages = visuals?.pages ?? {};
    expect(v22.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE004']);
    expect(visuals?.comparisonArt?.BLOCK007).toHaveLength(2);
  });

  it('fits lesson 1.2.3 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v23.id);
    const screens = lessonScreens(v23, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v23, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v23.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE008']);
    expect(v23.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Both feelings, in either order.
    expect(grade(v23.questions.Q010, { kind: 'text', values: ['fear and hope'] })).toBe(true);
    // Pages 3, 5 and 7 keep their icons in list rows and tinted cards; page 6's pictures sit beside its examples.
    const pages = visuals?.pages ?? {};
    expect(v23.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE007']);
    expect(visuals?.exampleArt?.BLOCK012).toHaveLength(2);
  });

  it('fits lesson 1.2.4 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v24.id);
    const screens = lessonScreens(v24, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v24, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v24.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE008']);
    expect(v24.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Pages 3 and 7 keep their pictures in tinted cards; page 8's pictures sit beside its examples.
    const pages = visuals?.pages ?? {};
    expect(v24.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE007', 'PAGE008']);
    // List-led pages show their group picture with the Key Takeaway, after the list.
    for (const id of ['PAGE004', 'PAGE005', 'PAGE006']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect([id, page[page.length - 1].showArt, page[page.length - 1].showTakeaway]).toEqual([id, true, true]);
    }
  });

  it('fits lesson 1.2.5 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v25.id);
    const screens = lessonScreens(v25, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v25, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v25.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE008', 'PAGE009']);
    expect(v25.finalCheck?.questionIds).toEqual(['Q011', 'Q012', 'Q013', 'Q014', 'Q015']);
    // Any container of water counts.
    expect(grade(v25.questions.Q008, { kind: 'text', values: ['bottles'] })).toBe(true);
    // Pages 3, 6 and 7 keep their pictures beside the examples; page 5's icons sit on tinted list rows;
    // page 9's pictures are in its comparison cards.
    const pages = visuals?.pages ?? {};
    expect(v25.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE007', 'PAGE009']);
    expect(visuals?.comparisonArt?.BLOCK016).toHaveLength(2);
    // The count test's examples (bottles, sand) are drawn with their pictures under the rule.
    const page3 = screens.filter((s) => s.page.page_id === 'PAGE003').flatMap((s) => s.blocks);
    expect(page3.map((b) => b.type)).toEqual(['rule', 'example']);
    expect(pageBlockArt(v25.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
  });

  it('fits lesson 1.2.6 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v26.id);
    const screens = lessonScreens(v26, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v26, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v26.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v26.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Both materials, in either order.
    expect(grade(v26.questions.Q009, { kind: 'text', values: ['concrete and steel'] })).toBe(true);
    // Pages 2, 5 and 6 keep their pictures beside the examples; pages 4 and 7 in their comparison cards.
    const pages = visuals?.pages ?? {};
    expect(v26.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
    expect([visuals?.comparisonArt?.BLOCK008, visuals?.comparisonArt?.BLOCK013].map((a) => a?.length)).toEqual([2, 2]);
  });

  it('fits lesson 1.2.7 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v27.id);
    const screens = lessonScreens(v27, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v27, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v27.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005', 'PAGE007']);
    expect(v27.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Hyphenated answers keep their hyphens; capitals don't matter.
    expect(grade(v27.questions.Q005, { kind: 'text', values: ['Sister-in-law'] })).toBe(true);
    // Pages 2–6 keep their pictures beside the examples; page 7's are in its comparison cards.
    const pages = visuals?.pages ?? {};
    expect(v27.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
    // The main-word rule's examples (teacup, school bus) are drawn with their pictures under the rule.
    expect(pageBlockArt(v27.pages[5], visuals).BLOCK012?.examples).toHaveLength(2);
  });

  it('fits lesson 1.2.8 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v28.id);
    const screens = lessonScreens(v28, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v28, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v28.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007', 'PAGE008']);
    expect(v28.finalCheck?.questionIds).toEqual(['Q010', 'Q011', 'Q012', 'Q013', 'Q014']);
    // Two plural nouns can be typed in either order.
    expect(grade(v28.questions.Q005, { kind: 'text', values: ['biscuits and cakes'] })).toBe(true);
    expect(grade(v28.questions.Q005, { kind: 'text', values: ['cakes'] })).toBe(false);
    // Pages 2 and 4–8 keep their pictures beside the examples; page 3's sisters sit beside the second example.
    const pages = visuals?.pages ?? {};
    expect(v28.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007', 'PAGE008']);
    expect(pageBlockArt(v28.pages[2], visuals).BLOCK006?.examples).toEqual([null, expect.objectContaining({ label: 'Two smiling sisters' })]);
  });

  it('fits lesson 1.2.9 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v29.id);
    const screens = lessonScreens(v29, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v29, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v29.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE006', 'PAGE009', 'PAGE010']);
    expect(v29.finalCheck?.questionIds).toEqual(['Q013', 'Q014', 'Q015', 'Q016', 'Q017']);
    expect(grade(v29.questions.Q001, { kind: 'text', values: ['Churches'] })).toBe(true);
    expect(grade(v29.questions.Q001, { kind: 'text', values: ['churchs'] })).toBe(false);
    // Pages 3–7 keep their pictures beside the examples; pages 2 and 10 draw theirs under the rule.
    const pages = visuals?.pages ?? {};
    expect(v29.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
    // The rule's examples on pages 2–6 carry their pictures.
    for (const [i, id] of [[1, 'BLOCK003'], [2, 'BLOCK004'], [3, 'BLOCK005'], [4, 'BLOCK006'], [5, 'BLOCK008']] as const)
      expect(pageBlockArt(v29.pages[i], visuals)[id]?.examples).toHaveLength(2);
  });

  it('fits lesson 1.2.10 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v210.id);
    const screens = lessonScreens(v210, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v210, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v210.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE008']);
    expect(v210.finalCheck?.questionIds).toEqual(['Q011', 'Q012', 'Q013', 'Q014', 'Q015']);
    expect(grade(v210.questions.Q008, { kind: 'text', values: ['Tigress'] })).toBe(true);
    expect(grade(v210.questions.Q008, { kind: 'text', values: ['tigeress'] })).toBe(false);
    // Every page but the comparison has a main picture; page 8's are in its comparison cards.
    const pages = visuals?.pages ?? {};
    expect(v210.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE008']);
    expect(visuals?.comparisonArt?.BLOCK016).toHaveLength(2);
  });

  it('fits lesson 1.2.11 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v211.id);
    const screens = lessonScreens(v211, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v211, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v211.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007', 'PAGE009']);
    expect(v211.finalCheck?.questionIds).toEqual(['Q010', 'Q011', 'Q012', 'Q013', 'Q014']);
    // Typed possessives are compared without apostrophes, straight or curly.
    expect(grade(v211.questions.Q002, { kind: 'text', values: ['Farmer’s'] })).toBe(true);
    expect(grade(v211.questions.Q012, { kind: 'text', values: ["the pilot's"] })).toBe(true);
    // Pages 7 and 9 draw their pictures in the comparison cards; the recap has none.
    const pages = visuals?.pages ?? {};
    expect(v211.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE007', 'PAGE009', 'PAGE010']);
    expect([visuals?.comparisonArt?.BLOCK010, visuals?.comparisonArt?.BLOCK013].map((a) => a?.length)).toEqual([2, 2]);
  });

  it('fits lesson 1.2.12 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v212.id);
    const screens = lessonScreens(v212, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v212, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v212.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE007', 'PAGE008']);
    expect(v212.finalCheck?.questionIds).toEqual(['Q013', 'Q014', 'Q015', 'Q016', 'Q017']);
    expect(grade(v212.questions.Q011, { kind: 'text', values: ['Ugliness'] })).toBe(true);
    expect(grade(v212.questions.Q011, { kind: 'text', values: ['uglyness'] })).toBe(false);
    // Every page has a picture; list-first pages show theirs with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v212.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.2.13 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v213.id);
    const screens = lessonScreens(v213, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v213, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v213.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE003', 'PAGE005', 'PAGE006', 'PAGE007']);
    expect(v213.finalCheck?.questionIds).toEqual(['Q011', 'Q012', 'Q013', 'Q014', 'Q015']);
    // Appositive answers can include or leave out the determiner.
    expect(grade(v213.questions.Q013, { kind: 'text', values: ['Hill station'] })).toBe(true);
    expect(grade(v213.questions.Q013, { kind: 'text', values: ['Mount Abu'] })).toBe(false);
    // Pages 2–6 keep a picture beside each example.
    const pages = visuals?.pages ?? {};
    expect(v213.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006']);
    for (const [i, id] of [[1, 'BLOCK004'], [2, 'BLOCK006'], [3, 'BLOCK008'], [4, 'BLOCK010'], [5, 'BLOCK012']] as const)
      expect(pageBlockArt(v213.pages[i], visuals)[id]?.examples).toHaveLength(2);
  });

  it('fits lesson 1.2.14 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v214.id);
    const screens = lessonScreens(v214, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v214, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v214.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE009']);
    expect(v214.finalCheck?.questionIds).toEqual(['Q010', 'Q011', 'Q012', 'Q013', 'Q014']);
    // Corrections accept the listed alternatives; the original mistake is wrong.
    expect(grade(v214.questions.Q002, { kind: 'text', values: ['My uncle gave me some advice'] })).toBe(true);
    expect(grade(v214.questions.Q002, { kind: 'text', values: ['My uncle gave me two advices.'] })).toBe(false);
    // Every page has a picture; mistake-first pages show theirs with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v214.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it("draws a rule's examples as an example card under the rule", () => {
    const page = v25.pages.find((p) => p.page_id === 'PAGE003')!;
    const [rule, examples] = screenBlocks(page);
    expect(rule).toMatchObject({ type: 'rule', block_id: 'BLOCK005' });
    expect(rule.type === 'rule' && rule.examples).toBeFalsy();
    expect(examples).toMatchObject({ type: 'example', block_id: 'BLOCK005' });
    expect(examples.type === 'example' && examples.examples.map((e) => e.highlight)).toEqual([['bottles'], ['sand']]);
    // Earlier lessons' rule examples are drawn too (1.2.2 page 5: "We met Neha outside the cinema.").
    const neha = v22.pages.find((p) => p.page_id === 'PAGE005')!;
    expect(lessonScreens(v22, visualsFor(v22.id)).filter((s) => s.page === neha).flatMap((s) => s.blocks.map((b) => b.type))).toContain('example');
  });

  it('fits lesson 1.1.5 on screens, with pictures in row comparisons', () => {
    const screens = lessonScreens(v5, visualsFor(v5.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v5, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // Each example block has its own pictures: page 7's "dry" block has none.
    const art = pageBlockArt(v5.pages[6], visualsFor(v5.id));
    expect([Boolean(art.BLOCK016?.examples), Boolean(art.BLOCK017)]).toEqual([true, false]);
    expect(v5.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE011', 'PAGE014', 'PAGE018']);
  });

  it('fits lesson 1.1.4 on screens', () => {
    const screens = lessonScreens(v4, visualsFor(v4.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect(packedHeight(v4, s)).toBeLessThanOrEqual(DEFAULT_BUDGET - titleLines(s.page.title) * 37);
    // Summary list, then picture + takeaway; checks follow their dimensions' last pages.
    expect(screens.filter((s) => s.page.page_number === 15).at(-1)).toMatchObject({ blocks: [], showArt: true, showTakeaway: true });
    expect(v4.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE007', 'PAGE009', 'PAGE011', 'PAGE013', 'PAGE015']);
  });
});

describe('lesson flow', () => {
  it('places practice, quick checks and the final check in order', () => {
    const steps = buildSteps(v2, visualsFor(v2.id));
    const questions = steps.flatMap((s) => (s.kind === 'question' ? [`${s.context}:${s.questionId}`] : []));
    expect(questions).toEqual([
      'check:Q001',
      'check:Q002',
      'check:Q003',
      'check:Q004',
      'practice:Q013',
      'practice:Q014',
      'practice:Q015',
      'check:Q005',
      'final:Q016',
      'final:Q017',
      'final:Q018',
      'final:Q019',
      'final:Q020',
      'final:Q021',
    ]);
    // The first quick check follows page 2's last screen.
    const i = steps.findIndex((s) => s.kind === 'question');
    const before = steps[i - 1];
    expect(before.kind === 'screen' && before.screen.page.page_id).toBe('PAGE002');
    expect(steps.at(-1)?.kind).toBe('result');
  });

  it('names the assessment the footer button leads into', () => {
    const ctaAfter = (lesson: Lesson, match: (s: LessonStep) => boolean, last = false) => {
      const steps = buildSteps(lesson, visualsFor(lesson.id));
      const i = last ? steps.findLastIndex(match) : steps.findIndex(match);
      return nextCta(lesson, steps[i + 1]);
    };
    const isQ = (id: string) => (s: LessonStep) => s.kind === 'question' && s.questionId === id;
    const onPage = (n: number) => (s: LessonStep) => s.kind === 'screen' && s.screen.page.page_number === n;
    // 1.1.3: page 3 → quick check (Q001, Q002) → page 4 … page 15 → final check.
    expect(ctaAfter(v3, onPage(3), true)).toBe('check');
    expect(ctaAfter(v3, isQ('Q001'))).toBe('continue');
    expect(ctaAfter(v3, isQ('Q002'))).toBe('continue');
    expect(ctaAfter(v3, onPage(15), true)).toBe('final');
    // 1.1.2's last quick check follows its last page and runs straight into the final check.
    expect(ctaAfter(v2, onPage(16), true)).toBe('check');
    expect(ctaAfter(v2, isQ('Q005'))).toBe('final');
    // After the last final question comes the result; a lesson without a final check offers "Finish".
    expect(ctaAfter(v1, isQ('Q004'))).toBe('continue');
    expect(ctaAfter({ ...v1, finalCheck: null }, onPage(8), true)).toBe('finish');
  });

  it('blocks unanswered questions, locks answers and scores the final check', () => {
    const steps = buildSteps(v1, visualsFor(v1.id));
    const reduce = lessonFlowReducer(steps);
    const run = (state: LessonFlowState, n: number) => Array.from({ length: n }).reduce<LessonFlowState>((s) => reduce(s, { type: 'next' }), state);
    let s = run(initialLessonFlow, 16);
    const step = steps[s.index];
    expect(step.kind === 'question' && step.questionId).toBe('Q001');
    expect(reduce(s, { type: 'next' })).toBe(s); // answer first
    s = reduce(s, { type: 'answer', questionId: 'Q001', answer: { kind: 'choice', id: 'B' } });
    s = reduce(s, { type: 'answer', questionId: 'Q001', answer: { kind: 'choice', id: 'A' } });
    expect(s.answers.Q001).toEqual({ kind: 'choice', id: 'B' });
    s = reduce(s, { type: 'back' });
    expect(s.lastMove).toBe('back');
    expect(reduce(initialLessonFlow, { type: 'back' })).toBe(initialLessonFlow);
    expect(lessonScore(v1, { ...s.answers, Q003: { kind: 'bool', value: true } })).toEqual({ correct: 1, total: 4 });
    expect(reduce(s, { type: 'restart' })).toEqual(initialLessonFlow);
  });
});
