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
import { bodyBudget, DEFAULT_BUDGET, estimateHeight, lessonScreens, pageBlockArt, splitList, titleLines, type LessonScreen } from '../screens';
import { groupExamples, highlightList, keepSuffixes, splitTokenSentences, tokenizeGroups, tokenizeSentence } from '../sentence';

const v1 = loadLesson(v1raw);
const v2 = loadLesson(v2raw);
const v3 = loadLesson(v3raw);
const v4 = loadLesson(v4raw);
const v5 = loadLesson(v5raw);
const v6 = loadLesson(v6raw);
const v7 = loadLesson(v7raw);
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
    expect([v3.pages.length, Object.keys(v3.questions).length, v3.finalCheck?.questionIds.length]).toEqual([15, 18, 6]);
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
