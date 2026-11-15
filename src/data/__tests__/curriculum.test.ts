import { describe, expect, it } from '@jest/globals';

import { CURRICULUM } from '../curriculum';

const topicsOf = (i: number) => CURRICULUM[i].subStages.flatMap((s) => s.topics);

describe('curriculum', () => {
  it('has the approved 5 stages in order', () => {
    expect(CURRICULUM.map((s) => s.title)).toEqual([
      'Grammar Foundations',
      'Sentence Building',
      'Verb Mastery and Sentence Control',
      'Connecting and Expanding Ideas',
      'Advanced Grammar and Fluent Expression',
    ]);
  });

  it('has 25 sub-stages numbered 1.1–5.5', () => {
    const codes = CURRICULUM.flatMap((s) => s.subStages.map((u) => u.code));
    expect(codes).toHaveLength(25);
    expect(codes).toEqual([1, 2, 3, 4, 5].flatMap((n) => [1, 2, 3, 4, 5].map((m) => `${n}.${m}`)));
  });

  it('has the verified topic counts (507 in total)', () => {
    expect([0, 1, 2, 3, 4].map((i) => topicsOf(i).length)).toEqual([68, 76, 98, 141, 124]);
  });

  it('uses unique ids and contiguous order', () => {
    const ids = CURRICULUM.flatMap((s) => [s.id, ...s.subStages.flatMap((u) => [u.id, ...u.topics.map((t) => t.id)])]);
    expect(new Set(ids).size).toBe(ids.length);
    for (const stage of CURRICULUM) {
      for (const sub of stage.subStages) {
        expect(sub.topics.map((t) => t.order)).toEqual(sub.topics.map((_, i) => i + 1));
      }
    }
  });

  it('keeps exact titles at sub-stage boundaries', () => {
    const s11 = CURRICULUM[0].subStages[0];
    expect(s11.title).toBe('Parts of Speech');
    expect(s11.topics[0].title).toBe('Introduction to Parts of Speech');
    expect(s11.topics.at(-1)?.title).toBe('Word Classification Through Context');
    const s55 = CURRICULUM[4].subStages[4];
    expect(s55.title).toBe('Punctuation, Capitalization and Writing Mechanics');
    expect(s55.topics.at(-1)?.title).toBe('Common Punctuation Mistakes');
  });
});
