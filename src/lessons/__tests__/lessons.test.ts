import { describe, expect, it } from '@jest/globals';

import { findTopic } from '@/learning-path/progression';

import raw from '../content/1.1.1.EP001.json';
import { LESSON_VISUALS } from '../presentation';
import { initialLessonFlow, lessonFlowReducer, lessonScore, type LessonFlowState } from '../lesson-flow';
import { curriculumTopicId, lessonForTopic } from '../registry';
import { parseLesson } from '../schema';
import { splitTokenSentences, tokenizeSentence } from '../sentence';

const lesson = parseLesson(raw);

describe('lesson content', () => {
  it('parses the first lesson and maps it onto topic 1.1.1', () => {
    expect(lesson.pages).toHaveLength(8);
    expect(lesson.knowledge_check.questions).toHaveLength(4);
    expect(curriculumTopicId('1.1.1.EP001')).toBe('s1.1.01');
    expect(curriculumTopicId('2.3.12.EP002')).toBe('s2.3.12');
    expect(findTopic('s1.1.01')?.topic.title).toBe('Introduction to Parts of Speech');
    expect(lessonForTopic('s1.1.01')).toBe(lessonForTopic('s1.1.01'));
    expect(lessonForTopic('s1.1.02')).toBeUndefined();
  });

  it('rejects malformed content with the JSON path of the problem', () => {
    const broken = JSON.parse(JSON.stringify(raw));
    broken.knowledge_check.questions[1].correct_answers = ['Z'];
    expect(() => parseLesson(broken)).toThrow('$.knowledge_check.questions[1].correct_answers');
    const badHighlight = JSON.parse(JSON.stringify(raw));
    badHighlight.pages[0].content[1].examples[0].highlight = ['cat'];
    expect(() => parseLesson(badHighlight)).toThrow('"cat" is not in the sentence');
  });

  it('every annotated example spells out its sentence', () => {
    const annotations = LESSON_VISUALS['1.1.1.EP001'].annotations ?? {};
    for (const page of lesson.pages)
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

  it('highlights a repeated word once per listing and splits sentences', () => {
    const tokens = tokenizeSentence('I drink water. Please water the plant.', ['drink', 'water', 'water', 'plant']);
    expect(tokens.filter((t) => t.tone).map((t) => t.text)).toEqual(['drink', 'water.', 'water', 'plant.']);
    expect(splitTokenSentences(tokens).map((g) => g.map((t) => t.text).join(' '))).toEqual([
      'I drink water.',
      'Please water the plant.',
    ]);
  });
});

describe('lessonFlowReducer', () => {
  const reduce = lessonFlowReducer(lesson);
  const run = (state: LessonFlowState, ...actions: Parameters<typeof reduce>[1][]) => actions.reduce(reduce, state);
  const next = { type: 'next' } as const;

  it('walks every page, then the quiz, then the result', () => {
    let s = run(initialLessonFlow, ...Array(7).fill(next));
    expect(s.step).toEqual({ kind: 'page', index: 7 });
    s = reduce(s, next);
    expect(s.step).toEqual({ kind: 'quiz', index: 0 });
    // Can't skip an unanswered question.
    expect(reduce(s, next)).toBe(s);
    const qs = lesson.knowledge_check.questions;
    for (const [i, q] of qs.entries()) {
      s = reduce(s, { type: 'answer', questionId: q.question_id, optionId: i === 1 ? 'A' : q.correct_answers[0] });
      s = reduce(s, next);
    }
    expect(s.step).toEqual({ kind: 'result' });
    expect(lessonScore(lesson, s.answers)).toEqual({ correct: 3, total: 4 });
  });

  it('locks the first answer and steps back across the quiz boundary', () => {
    let s = run(initialLessonFlow, ...Array(8).fill(next));
    s = reduce(s, { type: 'answer', questionId: 'Q001', optionId: 'B' });
    s = reduce(s, { type: 'answer', questionId: 'Q001', optionId: 'A' });
    expect(s.answers.Q001).toBe('B');
    s = reduce(s, { type: 'back' });
    expect(s.step).toEqual({ kind: 'page', index: 7 });
    expect(reduce(initialLessonFlow, { type: 'back' })).toBe(initialLessonFlow);
    expect(reduce(s, { type: 'restart' })).toEqual(initialLessonFlow);
  });
});
