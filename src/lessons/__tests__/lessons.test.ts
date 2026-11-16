import { describe, expect, it } from '@jest/globals';

import { findTopic } from '@/learning-path/progression';

import { grade, normalizeTyped, score, type Answer } from '../answers';
import v1raw from '../content/1.1.1.EP001.json';
import v2raw from '../content/1-1-2.json';
import { buildSteps, initialLessonFlow, lessonFlowReducer, lessonScore, type LessonFlowState } from '../lesson-flow';
import { parseList } from '../list-items';
import { loadLesson, type Question } from '../model';
import { LESSON_VISUALS, visualsFor } from '../presentation';
import { curriculumTopicId, lessonForTopic } from '../registry';
import { bodyBudget, DEFAULT_BUDGET, estimateHeight, lessonScreens, titleLines } from '../screens';
import { splitTokenSentences, tokenizeSentence } from '../sentence';

const v1 = loadLesson(v1raw);
const v2 = loadLesson(v2raw);
// Untyped deep copy, so tests can break the JSON on purpose.
const clone = (x: unknown) => JSON.parse(JSON.stringify(x));

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
    expect(lessonForTopic('s1.1.03')).toBeUndefined();
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
    expect(() => loadLesson(overlap)).toThrow('Q001 is also in a dimension check');
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
    expect([screens[12], screens[13]].map((s) => [s.blocks.map((b) => b.type), s.examplePart])).toEqual([
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
      const h = s.blocks.reduce((sum, b) => sum + estimateHeight(b) + 24, -24);
      expect(h).toBeLessThanOrEqual(DEFAULT_BUDGET - titleLines(s.page.title) * 37);
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
