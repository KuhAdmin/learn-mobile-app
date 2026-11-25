import { describe, expect, it } from '@jest/globals';

import { CURRICULUM } from '@/data/curriculum';
import { hasLesson } from '@/lessons/registry';

import {
  ALL_TOPICS,
  currentTopicId,
  deriveTopicStatuses,
  findTopic,
  overallProgress,
  PATH_CURRICULUM,
  stageProgress,
  stageStatus,
  subStageProgress,
  type CompletedTopics,
} from '../progression';

const done = (...ids: string[]): CompletedTopics =>
  Object.fromEntries(ids.map((id) => [id, '2026-11-15T00:00:00.000Z']));
const firstN = (n: number) => done(...ALL_TOPICS.slice(0, n).map((r) => r.topic.id));

describe('deriveTopicStatuses', () => {
  it('opens only the first topic for a new learner', () => {
    const s = deriveTopicStatuses({});
    expect(s['s1.1.01']).toBe('current');
    expect(Object.values(s).filter((v) => v === 'locked')).toHaveLength(ALL_TOPICS.length - 1);
    expect(currentTopicId(s)).toBe('s1.1.01');
  });

  it('moves current forward and keeps completed topics completed', () => {
    const s = deriveTopicStatuses(done('s1.1.01', 's1.1.02'));
    expect(s['s1.1.01']).toBe('completed');
    expect(s['s1.1.02']).toBe('completed');
    expect(s['s1.1.03']).toBe('current');
    expect(s['s1.1.04']).toBe('locked');
  });

  it('crosses sub-stage and stage boundaries', () => {
    expect(currentTopicId(deriveTopicStatuses(firstN(7)))).toBe('s1.2.01');
    expect(currentTopicId(deriveTopicStatuses(firstN(63)))).toBe('s2.1.01');
  });

  it('reports no current topic when everything is complete', () => {
    expect(currentTopicId(deriveTopicStatuses(firstN(ALL_TOPICS.length)))).toBeUndefined();
  });

  it('opens topics ahead when the rules allow it', () => {
    const s = deriveTopicStatuses({}, { entryTopicId: 's1.1.01', availableAhead: 1 });
    expect(s['s1.1.02']).toBe('available');
    expect(s['s1.1.03']).toBe('locked');
  });

  it('honours a different entry point', () => {
    const s = deriveTopicStatuses({}, { entryTopicId: 's2.1.01', availableAhead: 0 });
    expect(s['s1.1.01']).toBe('locked');
    expect(s['s2.1.01']).toBe('current');
  });
});

describe('progress', () => {
  const stage1 = PATH_CURRICULUM[0];

  it('derives sub-stage, stage and overall progress from completions', () => {
    const c = firstN(7); // all of 1.1 Parts of Speech
    expect(subStageProgress(stage1.subStages[0], c)).toEqual({ done: 7, total: 7, fraction: 1 });
    expect(stageProgress(stage1, c)).toEqual({ done: 7, total: 63, fraction: 7 / 63 });
    expect(overallProgress(c)).toEqual({ done: 7, total: ALL_TOPICS.length, fraction: 7 / ALL_TOPICS.length });
  });

  it('classifies stages', () => {
    const s = deriveTopicStatuses(firstN(63));
    expect(stageStatus(PATH_CURRICULUM[0], s)).toBe('completed');
    expect(stageStatus(PATH_CURRICULUM[1], s)).toBe('current');
  });

  it('finds a topic with its parents', () => {
    const ref = findTopic('s2.3.09');
    expect(ref?.topic.title).toBe('Agreement with Either...Or and Neither...Nor');
    expect(ref?.subStage.code).toBe('2.3');
    expect(ref?.stage.title).toBe('Sentence Building');
  });
});

describe('PATH_CURRICULUM', () => {
  it('shows only topics that have a lesson, in curriculum order, and drops empty chapters and courses', () => {
    expect(ALL_TOPICS.every((r) => hasLesson(r.topic.id))).toBe(true);
    const withLessons = CURRICULUM.flatMap((st) => st.subStages.flatMap((sub) => sub.topics.map((t) => t.id))).filter(hasLesson);
    expect(ALL_TOPICS.map((r) => r.topic.id)).toEqual(withLessons);
    expect(PATH_CURRICULUM.every((st) => st.subStages.length > 0 && st.subStages.every((sub) => sub.topics.length > 0))).toBe(true);
    // A topic without a lesson is not on the path, so it is never current or locked in the way.
    expect(findTopic('s5.5.01')).toBeUndefined();
  });

  it('unlocks the next lesson on the path, skipping topics without lessons', () => {
    const last = ALL_TOPICS[ALL_TOPICS.length - 1].topic.id;
    const s = deriveTopicStatuses(firstN(ALL_TOPICS.length - 1));
    expect(currentTopicId(s)).toBe(last);
    expect(Object.keys(s)).toHaveLength(ALL_TOPICS.length);
  });
});
