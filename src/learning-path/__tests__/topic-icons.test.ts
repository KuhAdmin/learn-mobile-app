import { describe, expect, it } from '@jest/globals';

import { CURRICULUM } from '@/data/curriculum';

import { topicIconFor } from '../topic-icons';

describe('topicIconFor', () => {
  it('matches the icons drawn in the Learning Path mockup', () => {
    let prev: ReturnType<typeof topicIconFor> | undefined;
    const titles = CURRICULUM[0].subStages[0].topics.map((t) => (prev = topicIconFor(t.title, t.order, prev)));
    // 1.1: intro, eight parts, content/function, open/closed, functioning as, identifying, classification.
    expect(titles).toEqual(['book', 'star', 'puzzle', 'letters', 'layers', 'search', 'book']);
    expect(topicIconFor('Introduction to Nouns', 1)).toBe('book');
  });

  it('never repeats the icon it is told to avoid', () => {
    expect(topicIconFor('Introduction to Verbs', 1, 'book')).not.toBe('book');
    expect(topicIconFor('Something unmatched', 2, 'puzzle')).not.toBe('puzzle');
  });

  it('gives every topic an icon and uses all of them', () => {
    const used = new Set(
      CURRICULUM.flatMap((s) => s.subStages.flatMap((sub) => sub.topics.map((t) => topicIconFor(t.title, t.order)))),
    );
    expect([...used].sort()).toEqual(['book', 'layers', 'letters', 'puzzle', 'search', 'star']);
  });
});
