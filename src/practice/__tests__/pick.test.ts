import { describe, expect, it } from '@jest/globals';

import { hasLesson, LESSON_TOPIC_IDS, lessonForTopic } from '@/lessons/registry';

import { pickPracticeQuestions, PRACTICE_LESSONS, PRACTICE_SIZE } from '../pick';

/** Deterministic random source. */
function seeded(seed: number) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}

describe('lesson registry', () => {
  it('knows which topics have lessons without loading them, and loads one on demand', () => {
    expect(hasLesson('s1.1.02')).toBe(true);
    expect(hasLesson('s5.5.01')).toBe(false);
    expect(LESSON_TOPIC_IDS[0]).toBe('s1.1.01');
    expect(lessonForTopic('s1.1.02')?.id).toBe('1-1-2');
    expect(lessonForTopic('s5.5.01')).toBeUndefined();
  });
});

describe('pickPracticeQuestions', () => {
  it('is empty when no lesson is completed', () => {
    expect(pickPracticeQuestions([], lessonForTopic)).toEqual([]);
  });

  it('takes a full round from completed lessons only, spread across at most five lessons', () => {
    const completed = LESSON_TOPIC_IDS.slice(0, 12);
    const loaded: string[] = [];
    const items = pickPracticeQuestions(completed, (id) => (loaded.push(id), lessonForTopic(id)), seeded(7));
    expect(items).toHaveLength(PRACTICE_SIZE);
    expect(loaded.length).toBeLessThanOrEqual(PRACTICE_LESSONS);
    expect(items.every((i) => completed.includes(i.topicId))).toBe(true);
    expect(new Set(items.map((i) => i.question.id + i.topicId)).size).toBe(items.length);
  });

  it('uses every question of a single short lesson when that is all there is', () => {
    const lesson = lessonForTopic('s1.1.02')!;
    const items = pickPracticeQuestions(['s1.1.02'], lessonForTopic, seeded(3));
    expect(items).toHaveLength(Math.min(PRACTICE_SIZE, Object.keys(lesson.questions).length));
  });
});
