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
import v131raw from '../content/1-3-1.json';
import v132raw from '../content/1-3-2.json';
import v133raw from '../content/1-3-3.json';
import v134raw from '../content/1-3-4.json';
import v135raw from '../content/1-3-5.json';
import v136raw from '../content/1-3-6.json';
import v137raw from '../content/1-3-7.json';
import v138raw from '../content/1-3-8.json';
import v139raw from '../content/1-3-9.json';
import v1310raw from '../content/1-3-10.json';
import v1311raw from '../content/1-3-11.json';
import v1312raw from '../content/1-3-12.json';
import v1313raw from '../content/1-3-13.json';
import v1314raw from '../content/1-3-14.json';
import v1315raw from '../content/1-3-15.json';
import v141raw from '../content/1-4-1.json';
import v142raw from '../content/1-4-2.json';
import v143raw from '../content/1-4-3.json';
import v144raw from '../content/1-4-4.json';
import v145raw from '../content/1-4-5.json';
import v146raw from '../content/1-4-6.json';
import v147raw from '../content/1-4-7.json';
import v148raw from '../content/1-4-8.json';
import v149raw from '../content/1-4-9.json';
import v1410raw from '../content/1-4-10.json';
import v1411raw from '../content/1-4-11.json';
import v1412raw from '../content/1-4-12.json';
import v1413raw from '../content/1-4-13.json';
import v1414raw from '../content/1-4-14.json';
import v1415raw from '../content/1-4-15.json';
import v1416raw from '../content/1-4-16.json';
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
import { LESSON_VISUALS, LIST_ICONS, visualsFor } from '../presentation';
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
const v131 = loadLesson(v131raw);
const v132 = loadLesson(v132raw);
const v133 = loadLesson(v133raw);
const v134 = loadLesson(v134raw);
const v135 = loadLesson(v135raw);
const v136 = loadLesson(v136raw);
const v137 = loadLesson(v137raw);
const v138 = loadLesson(v138raw);
const v139 = loadLesson(v139raw);
const v1310 = loadLesson(v1310raw);
const v1311 = loadLesson(v1311raw);
const v1312 = loadLesson(v1312raw);
const v1313 = loadLesson(v1313raw);
const v1314 = loadLesson(v1314raw);
const v1315 = loadLesson(v1315raw);
const v141 = loadLesson(v141raw);
const v142 = loadLesson(v142raw);
const v143 = loadLesson(v143raw);
const v144 = loadLesson(v144raw);
const v145 = loadLesson(v145raw);
const v146 = loadLesson(v146raw);
const v147 = loadLesson(v147raw);
const v148 = loadLesson(v148raw);
const v149 = loadLesson(v149raw);
const v1410 = loadLesson(v1410raw);
const v1411 = loadLesson(v1411raw);
const v1412 = loadLesson(v1412raw);
const v1413 = loadLesson(v1413raw);
const v1414 = loadLesson(v1414raw);
const v1415 = loadLesson(v1415raw);
const v1416 = loadLesson(v1416raw);
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

  it('fits lesson 1.3.1 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v131.id);
    const screens = lessonScreens(v131, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v131, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v131.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE006', 'PAGE007']);
    expect(v131.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // An antecedent can be named with or without its determiner.
    expect(grade(v131.questions.Q003, { kind: 'text', values: ['The puppies'] })).toBe(true);
    expect(grade(v131.questions.Q003, { kind: 'text', values: ['they'] })).toBe(false);
    // The parcel sits in page 2's comparison; the rule and list pages (5, 7) have no picture.
    expect(pageBlockArt(v131.pages[1], visuals).BLOCK003?.comparison).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v131.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE005', 'PAGE007']);
    // Pages 3, 4 and 6 show their picture under the intro text. On 4 and 6 the example joins the Key Takeaway;
    // page 3's two examples fill their screen, so its takeaway closes the page alone.
    for (const [id, parts] of [['PAGE003', 3], ['PAGE004', 2], ['PAGE006', 2]] as const) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect([id, page.length, page[0].showArt, page[parts - 1].showTakeaway]).toEqual([id, parts, true, true]);
    }
  });

  it('fits lesson 1.3.2 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v132.id);
    const screens = lessonScreens(v132, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v132, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v132.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE006', 'PAGE008']);
    expect(v132.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Typed answers ignore case; the capital-I questions are multiple choice for that reason.
    expect(grade(v132.questions.Q004, { kind: 'text', values: ['Him'] })).toBe(true);
    expect(grade(v132.questions.Q004, { kind: 'text', values: ['he'] })).toBe(false);
    expect(v132.questions.Q008.type).toBe('multiple_choice');
    // Each example keeps its picture beside it, as in the mockup (pages 7 and 8 with the rule's examples).
    for (const [i, id, n] of [[2, 'BLOCK006', 2], [3, 'BLOCK008', 2], [5, 'BLOCK011', 2], [6, 'BLOCK012', 1], [7, 'BLOCK013', 2]] as const)
      expect(pageBlockArt(v132.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v132.pages[4], visuals).BLOCK009?.comparison).toHaveLength(2);
    // Page 2 opens with its list, so the person icons close the page with the takeaway.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.3 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v133.id);
    const screens = lessonScreens(v133, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v133, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v133.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE006']);
    expect(v133.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v133.questions.Q005, { kind: 'text', values: ['Hers.'] })).toBe(true);
    expect(grade(v133.questions.Q005, { kind: 'text', values: ['her'] })).toBe(false);
    // Typed answers are compared without apostrophes, so the apostrophe questions are multiple choice.
    for (const id of ['Q006', 'Q011']) expect(v133.questions[id].type).toBe('multiple_choice');
    // Every page has a picture except page 6, whose picture sits beside its example; page 5's rule example has one too.
    const pages = visuals?.pages ?? {};
    expect(v133.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE006']);
    expect(pageBlockArt(v133.pages[5], visuals).BLOCK011?.examples).toHaveLength(1);
    expect(pageBlockArt(v133.pages[4], visuals).BLOCK009?.examples).toHaveLength(1);
    // Pages 2 and 5 open with a list or rule, so their picture closes the page with the takeaway.
    for (const id of ['PAGE002', 'PAGE005']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.3.4 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v134.id);
    const screens = lessonScreens(v134, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v134, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v134.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE006']);
    expect(v134.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v134.questions.Q003, { kind: 'text', values: ['Our'] })).toBe(true);
    expect(grade(v134.questions.Q003, { kind: 'text', values: ['ours'] })).toBe(false);
    // Typed answers are compared without apostrophes, so its is only tested with multiple choice.
    expect(v134.questions.Q007.type).toBe('multiple_choice');
    // Pictures sit beside the rule examples (pages 3 and 5), in the comparison (4) and beside the tortoise example (6).
    for (const [i, id, n] of [[2, 'BLOCK004', 2], [4, 'BLOCK006', 2], [5, 'BLOCK008', 1]] as const)
      expect(pageBlockArt(v134.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v134.pages[3], visuals).BLOCK005?.comparison).toHaveLength(2);
    // Page 2 opens with its list, so the pointing boy closes the page with the takeaway.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.5 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v135.id);
    const screens = lessonScreens(v135, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v135, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v135.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v135.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v135.questions.Q007, { kind: 'text', values: ['Myself.'] })).toBe(true);
    expect(grade(v135.questions.Q007, { kind: 'text', values: ['me'] })).toBe(false);
    // Rule examples (page 3) and the comparison (page 4) keep their pictures; page 2's list has none.
    expect(pageBlockArt(v135.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v135.pages[3], visuals).BLOCK005?.comparison).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v135.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004']);
    // The self-family list fits on one screen with its takeaway.
    expect(screens.filter((s) => s.page.page_id === 'PAGE002')).toHaveLength(1);
  });

  it('fits lesson 1.3.6 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v136.id);
    const screens = lessonScreens(v136, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v136, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v136.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v136.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    // The singer can be a man or a woman.
    for (const answer of ['himself', 'Herself']) expect(grade(v136.questions.Q009, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v136.questions.Q009, { kind: 'text', values: ['themselves'] })).toBe(false);
    // Pictures sit beside each example (pages 2, 3 and 5's rule example) and in page 4's comparison.
    for (const [i, id, n] of [[1, 'BLOCK004', 2], [2, 'BLOCK006', 2], [4, 'BLOCK008', 1]] as const)
      expect(pageBlockArt(v136.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v136.pages[3], visuals).BLOCK007?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.3.7 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v137.id);
    const screens = lessonScreens(v137, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v137, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v137.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE005', 'PAGE006']);
    expect(v137.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v137.questions.Q002, { kind: 'text', values: ['this'] })).toBe(true);
    expect(grade(v137.questions.Q002, { kind: 'text', values: ['That'] })).toBe(false);
    // Pictures sit beside each example (pages 3, 4 and 6) and in page 5's comparison.
    for (const [i, id, n] of [[2, 'BLOCK005', 2], [3, 'BLOCK007', 2], [5, 'BLOCK010', 1]] as const)
      expect(pageBlockArt(v137.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v137.pages[4], visuals).BLOCK008?.comparison).toHaveLength(2);
    // Page 2 opens with its list, so the near/far icons close the page with the takeaway.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.8 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v138.id);
    const screens = lessonScreens(v138, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v138, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v138.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006']);
    expect(v138.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v138.questions.Q002, { kind: 'text', values: ['who'] })).toBe(true);
    expect(grade(v138.questions.Q002, { kind: 'text', values: ['Whom'] })).toBe(false);
    // Every page but the comparison has a main picture; the comparison draws one per item.
    const pages = visuals?.pages ?? {};
    expect(v138.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE005']);
    expect(pageBlockArt(v138.pages[4], visuals).BLOCK009?.comparison).toHaveLength(2);
    // Page 6 opens with its rule, so the paintings close the page with the takeaway.
    const page6 = screens.filter((s) => s.page.page_id === 'PAGE006');
    expect(page6[page6.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.9 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v139.id);
    const screens = lessonScreens(v139, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v139, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v139.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE005', 'PAGE007']);
    expect(v139.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v139.questions.Q003, { kind: 'text', values: ['Whose'] })).toBe(true);
    expect(grade(v139.questions.Q003, { kind: 'text', values: ['who'] })).toBe(false);
    // Each example keeps its picture beside it (page 6's with the rule), and page 7's comparison draws one per item.
    for (const [i, id, n] of [[1, 'BLOCK004', 2], [2, 'BLOCK006', 1], [3, 'BLOCK008', 1], [4, 'BLOCK010', 1], [5, 'BLOCK011', 1]] as const)
      expect(pageBlockArt(v139.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v139.pages[6], visuals).BLOCK012?.comparison).toHaveLength(2);
    // Pages 3–5 fit their example and takeaway on one screen after the intro.
    for (const id of ['PAGE003', 'PAGE004', 'PAGE005']) expect(screens.filter((s) => s.page.page_id === id)).toHaveLength(2);
  });

  it('fits lesson 1.3.10 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1310.id);
    const screens = lessonScreens(v1310, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1310, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1310.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005', 'PAGE006']);
    expect(v1310.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Either every- word for people is right.
    for (const answer of ['Everyone', 'everybody']) expect(grade(v1310.questions.Q005, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v1310.questions.Q005, { kind: 'text', values: ['Everything'] })).toBe(false);
    // Page 2's list shows as label tiles; the rule's examples on page 3 each keep a picture.
    expect(parseList((v1310.pages[1].content[0] as { items: string[] }).items).layout).toBe('tiles');
    expect(pageBlockArt(v1310.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v1310.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003']);
  });

  it('fits lesson 1.3.11 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1311.id);
    const screens = lessonScreens(v1311, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1311, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1311.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006']);
    expect(v1311.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v1311.questions.Q004, { kind: 'text', values: ['neither'] })).toBe(true);
    expect(grade(v1311.questions.Q004, { kind: 'text', values: ['Either'] })).toBe(false);
    // Rule examples (page 5) keep their pictures and page 6's comparison draws one per item.
    expect(pageBlockArt(v1311.pages[4], visuals).BLOCK009?.examples).toHaveLength(2);
    expect(pageBlockArt(v1311.pages[5], visuals).BLOCK010?.comparison).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v1311.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE005', 'PAGE006']);
  });

  it('fits lesson 1.3.12 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1312.id);
    const screens = lessonScreens(v1312, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1312, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1312.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v1312.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    // Both reciprocal pronouns are accepted, typed in any case.
    for (const answer of ['each other', 'One another']) expect(grade(v1312.questions.Q002, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v1312.questions.Q002, { kind: 'text', values: ['themselves'] })).toBe(false);
    // Typed answers are compared without apostrophes, so each other's is tested with multiple choice.
    expect(v1312.questions.Q003.type).toBe('multiple_choice');
    // Examples on pages 2 and 3 keep their pictures and page 4's comparison draws one per item; page 5 has none.
    expect(pageBlockArt(v1312.pages[1], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v1312.pages[2], visuals).BLOCK006?.examples).toHaveLength(1);
    expect(pageBlockArt(v1312.pages[3], visuals).BLOCK007?.comparison).toHaveLength(2);
    expect(pageBlockArt(v1312.pages[4], visuals)).toEqual({});
  });

  it('fits lesson 1.3.13 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1313.id);
    const screens = lessonScreens(v1313, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1313, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1313.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006', 'PAGE007']);
    expect(v1313.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // The antecedent can be named with or without its determiner.
    for (const answer of ['radio', 'The radio']) expect(grade(v1313.questions.Q008, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v1313.questions.Q008, { kind: 'text', values: ['Nani'] })).toBe(false);
    // Examples keep their picture beside them (page 2's with the rule); page 3's two people sit under the intro instead.
    for (const [i, id, n] of [[1, 'BLOCK003', 2], [4, 'BLOCK008', 1], [5, 'BLOCK010', 1], [6, 'BLOCK012', 2]] as const)
      expect(pageBlockArt(v1313.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(screens.find((s) => s.page.page_id === 'PAGE003')).toMatchObject({ part: 0, showArt: true });
    // Page 4 opens with its rule, so Meena and her brother close the page with the takeaway.
    const page4 = screens.filter((s) => s.page.page_id === 'PAGE004');
    expect(page4[page4.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.14 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1314.id);
    const screens = lessonScreens(v1314, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1314, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1314.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v1314.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v1314.questions.Q011, { kind: 'text', values: ['They'] })).toBe(true);
    expect(grade(v1314.questions.Q011, { kind: 'text', values: ['me'] })).toBe(false);
    // Every page has a picture; pages that open with a mistake card or rule show theirs with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v1314.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    for (const id of ['PAGE002', 'PAGE003', 'PAGE004']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.3.15 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1315.id);
    const screens = lessonScreens(v1315, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1315, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1315.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE009']);
    expect(v1315.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Corrections accept the listed alternatives; the original mistake is wrong.
    expect(grade(v1315.questions.Q005, { kind: 'text', values: ['These shoes are too tight for me'] })).toBe(true);
    expect(grade(v1315.questions.Q005, { kind: 'text', values: ['Them shoes are too tight for me.'] })).toBe(false);
    // Its, it's and I/me are only tested with multiple choice.
    for (const id of ['Q001', 'Q002', 'Q003', 'Q010']) expect(v1315.questions[id].type).toBe('multiple_choice');
    // Mistake-first pages show their picture with the takeaway; page 9 has none.
    const pages = visuals?.pages ?? {};
    expect(v1315.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE009']);
    for (const id of ['PAGE002', 'PAGE003', 'PAGE005', 'PAGE006', 'PAGE007', 'PAGE008']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.4.1 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v141.id)).toBe('s1.4.01');
    expect(lessonForTopic('s1.4.01')?.id).toBe('1-4-1');
    const visuals = visualsFor(v141.id);
    const screens = lessonScreens(v141, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v141, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v141.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE006']);
    expect(v141.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v141.questions.Q011, { kind: 'text', values: ['The'] })).toBe(true);
    expect(grade(v141.questions.Q011, { kind: 'text', values: ['a'] })).toBe(false);
    // Page 2's questions show as question rows with an answer chip.
    expect(parseList((v141.pages[1].content[0] as { items: string[] }).items).layout).toBe('qa');
    expect(pageBlockArt(v141.pages[3], visuals).BLOCK006?.comparison).toHaveLength(2);
    // Pages that open with a list or rule show their picture with the takeaway.
    for (const id of ['PAGE002', 'PAGE005', 'PAGE006']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.4.2 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v142.id);
    const screens = lessonScreens(v142, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v142, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v142.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v142.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v142.questions.Q003, { kind: 'text', values: ['A'] })).toBe(true);
    expect(grade(v142.questions.Q003, { kind: 'text', values: ['the'] })).toBe(false);
    // Every page has a picture; page 3 opens with its rule, so the mango and chair close it with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v142.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    const page3 = screens.filter((s) => s.page.page_id === 'PAGE003');
    expect(page3[page3.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.3 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v143.id);
    const screens = lessonScreens(v143, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v143, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v143.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005', 'PAGE006']);
    expect(v143.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    expect(grade(v143.questions.Q009, { kind: 'text', values: ['An'] })).toBe(true);
    expect(grade(v143.questions.Q009, { kind: 'text', values: ['a'] })).toBe(false);
    expect(grade(v143.questions.Q010, { kind: 'text', values: ['a'] })).toBe(true);
    // Each example keeps its picture beside it (pages 2 and 6 with the rule's examples).
    for (const [i, id] of [[1, 'BLOCK003'], [2, 'BLOCK005'], [3, 'BLOCK007'], [5, 'BLOCK010']] as const)
      expect(pageBlockArt(v143.pages[i], visuals)[id]?.examples).toHaveLength(2);
  });

  it('fits lesson 1.4.4 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v144.id);
    const screens = lessonScreens(v144, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v144, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v144.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v144.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v144.questions.Q003, { kind: 'text', values: ['the'] })).toBe(true);
    expect(grade(v144.questions.Q003, { kind: 'text', values: ['A'] })).toBe(false);
    // Pages 1–5 have a main picture; page 6's two examples each keep theirs.
    const pages = visuals?.pages ?? {};
    expect(v144.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE006']);
    expect(pageBlockArt(v144.pages[5], visuals).BLOCK012?.examples).toHaveLength(2);
  });

  it('fits lesson 1.4.5 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v145.id);
    const screens = lessonScreens(v145, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v145, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v145.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE005']);
    expect(v145.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011']);
    // Removing the article fixes the sentence; leaving it in doesn't.
    expect(grade(v145.questions.Q010, { kind: 'text', values: ['I like geography more than any other subject'] })).toBe(true);
    expect(grade(v145.questions.Q010, { kind: 'text', values: ['I like the geography more than any other subject.'] })).toBe(false);
    // The rule's two examples on page 2 keep their pictures; page 4's tiles each get an icon.
    expect(pageBlockArt(v145.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    const tiles = parseList((v145.pages[3].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
  });

  it('fits lesson 1.4.6 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v146.id);
    const screens = lessonScreens(v146, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v146, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v146.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE005']);
    expect(v146.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v146.questions.Q008, { kind: 'text', values: ['the'] })).toBe(true);
    expect(grade(v146.questions.Q008, { kind: 'text', values: ['A'] })).toBe(false);
    // Page 4's comparison draws one picture per item; page 2 opens with its rule, so the owls close it.
    expect(pageBlockArt(v146.pages[3], visuals).BLOCK006?.comparison).toHaveLength(2);
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.7 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v147.id);
    const screens = lessonScreens(v147, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v147, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v147.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005', 'PAGE006']);
    expect(v147.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Some and any both fit before uncountable juice; a sugar is corrected to some sugar or a unit of sugar.
    for (const answer of ['some', 'Any']) expect(grade(v147.questions.Q005, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v147.questions.Q005, { kind: 'text', values: ['a'] })).toBe(false);
    expect(grade(v147.questions.Q008, { kind: 'text', values: ['Can you lend me a cup of sugar'] })).toBe(true);
    expect(grade(v147.questions.Q008, { kind: 'text', values: ['Can you lend me a sugar?'] })).toBe(false);
    // Page 5's tiles each get an icon; page 6's comparison draws one picture per item.
    const tiles = parseList((v147.pages[4].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v147.pages[5], visuals).BLOCK008?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.4.8 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v148.id);
    const screens = lessonScreens(v148, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v148, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v148.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE006']);
    expect(v148.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v148.questions.Q004, { kind: 'text', values: ['The'] })).toBe(true);
    expect(grade(v148.questions.Q012, { kind: 'text', values: ['My aunt moved to Australia last year'] })).toBe(true);
    expect(grade(v148.questions.Q012, { kind: 'text', values: ['My aunt moved to the Australia last year.'] })).toBe(false);
    // Every page has a picture; page 3 opens with its rule, so its panels close the page with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v148.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    const page3 = screens.filter((s) => s.page.page_id === 'PAGE003');
    expect(page3[page3.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.9 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v149.id);
    const screens = lessonScreens(v149, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v149, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v149.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE006']);
    expect(v149.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v149.questions.Q003, { kind: 'text', values: ['These'] })).toBe(true);
    expect(grade(v149.questions.Q003, { kind: 'text', values: ['this'] })).toBe(false);
    for (const answer of ['These oranges are very juicy', 'Those oranges are very juicy.'])
      expect(grade(v149.questions.Q010, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v149.questions.Q010, { kind: 'text', values: ['This oranges are very juicy.'] })).toBe(false);
    // Page 2's rule examples keep their pictures; page 3's row sits under the intro; page 5 opens with its rule, so its
    // picture closes the page.
    expect(pageBlockArt(v149.pages[1], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(screens.find((s) => s.page.page_id === 'PAGE003')).toMatchObject({ part: 0, showArt: true });
    const page5 = screens.filter((s) => s.page.page_id === 'PAGE005');
    expect(page5[page5.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.10 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1410.id);
    const screens = lessonScreens(v1410, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1410, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1410.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v1410.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v1410.questions.Q005, { kind: 'text', values: ['Own'] })).toBe(true);
    for (const answer of ['His car broke down on the highway', 'The car broke down on the highway.'])
      expect(grade(v1410.questions.Q010, { kind: 'text', values: [answer] })).toBe(true);
    // Page 4's mockup picture shows a different example, so it has none; page 6 keeps only the shoes picture.
    const pages = visuals?.pages ?? {};
    expect(v1410.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE004', 'PAGE006']);
    expect(pageBlockArt(v1410.pages[5], visuals).BLOCK011?.examples?.map(Boolean)).toEqual([false, true]);
    // Page 2 opens with its rule, so the umbrella closes the page; page 3's intro line carries the two girls.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    expect(screens.find((s) => s.page.page_id === 'PAGE003')).toMatchObject({ part: 0, showArt: true });
  });

  it('fits lesson 1.4.11 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1411.id);
    const screens = lessonScreens(v1411, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1411, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1411.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE005']);
    expect(v1411.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v1411.questions.Q007, { kind: 'text', values: ['No'] })).toBe(true);
    expect(grade(v1411.questions.Q007, { kind: 'text', values: ['any'] })).toBe(false);
    // Pages 2 and 4 keep a picture beside each example; page 3's comparison draws one per item.
    for (const [i, id] of [[1, 'BLOCK003'], [3, 'BLOCK007']] as const)
      expect(pageBlockArt(v1411.pages[i], visuals)[id]?.examples).toHaveLength(2);
    expect(pageBlockArt(v1411.pages[2], visuals).BLOCK005?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.4.12 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1412.id);
    const screens = lessonScreens(v1412, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1412, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1412.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE005']);
    expect(v1412.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012', 'Q003']);
    expect(grade(v1412.questions.Q005, { kind: 'text', values: ['Neither'] })).toBe(true);
    expect(grade(v1412.questions.Q005, { kind: 'text', values: ['either'] })).toBe(false);
    for (const answer of ['Each runner got a medal', 'Every runner got a medal.'])
      expect(grade(v1412.questions.Q012, { kind: 'text', values: [answer] })).toBe(true);
  });

  it('fits lesson 1.4.13 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1413.id);
    const screens = lessonScreens(v1413, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1413, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1413.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v1413.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v1413.questions.Q006, { kind: 'text', values: ['Second'] })).toBe(true);
    expect(grade(v1413.questions.Q006, { kind: 'text', values: ['poetry'] })).toBe(false);
    // Every page has a picture; page 2's rule examples keep theirs and page 5's book closes the page.
    const pages = visuals?.pages ?? {};
    expect(v1413.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002']);
    expect(pageBlockArt(v1413.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    const page5 = screens.filter((s) => s.page.page_id === 'PAGE005');
    expect(page5[page5.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.14 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1414.id);
    const screens = lessonScreens(v1414, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1414, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1414.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE003', 'PAGE004']);
    expect(v1414.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    // Either question word fits a birthday party's day.
    for (const answer of ['What', 'which']) expect(grade(v1414.questions.Q004, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v1414.questions.Q004, { kind: 'text', values: ['Whose'] })).toBe(false);
    // Page 3's mockup picture shows a different example, so it has none.
    const pages = visuals?.pages ?? {};
    expect(v1414.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003']);
  });

  it('fits lesson 1.4.15 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1415.id);
    const screens = lessonScreens(v1415, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1415, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1415.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE003', 'PAGE005']);
    expect(v1415.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v1415.questions.Q006, { kind: 'text', values: ['Both'] })).toBe(true);
    expect(grade(v1415.questions.Q006, { kind: 'text', values: ['all'] })).toBe(false);
    // Pages 3 and 4 keep a picture beside each example; page 5's comparison draws one per item.
    for (const [i, id] of [[2, 'BLOCK006'], [3, 'BLOCK008']] as const)
      expect(pageBlockArt(v1415.pages[i], visuals)[id]?.examples).toHaveLength(2);
    expect(pageBlockArt(v1415.pages[4], visuals).BLOCK010?.comparison).toHaveLength(2);
    // Page 2 opens with its list, so the row of icons closes the page with the takeaway.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.16 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1416.id);
    const screens = lessonScreens(v1416, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1416, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1416.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v1416.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v1416.questions.Q006, { kind: 'text', values: ['Half'] })).toBe(true);
    expect(grade(v1416.questions.Q007, { kind: 'text', values: ['All'] })).toBe(true);
    expect(grade(v1416.questions.Q007, { kind: 'text', values: ['my'] })).toBe(false);
    // Page 2's slots show as label tiles; page 4's examples each keep a picture.
    expect(parseList((v1416.pages[1].content[0] as { items: string[] }).items).layout).toBe('tiles');
    expect(pageBlockArt(v1416.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
    for (const id of ['PAGE002', 'PAGE003']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
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
