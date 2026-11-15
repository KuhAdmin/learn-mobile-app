import { describe, expect, it } from '@jest/globals';

import { CURRICULUM } from '@/data/curriculum';

import {
  ALL_TOPICS,
  currentTopicId,
  deriveTopicStatuses,
  findTopic,
  overallProgress,
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
    expect(currentTopicId(deriveTopicStatuses(firstN(68)))).toBe('s2.1.01');
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
    const s = deriveTopicStatuses({}, { entryTopicId: 's3.1.01', availableAhead: 0 });
    expect(s['s1.1.01']).toBe('locked');
    expect(s['s3.1.01']).toBe('current');
  });
});

describe('progress', () => {
  const stage1 = CURRICULUM[0];

  it('derives sub-stage, stage and overall progress from completions', () => {
    const c = firstN(7); // all of 1.1 Parts of Speech
    expect(subStageProgress(stage1.subStages[0], c)).toEqual({ done: 7, total: 7, fraction: 1 });
    expect(stageProgress(stage1, c)).toEqual({ done: 7, total: 68, fraction: 7 / 68 });
    expect(overallProgress(c)).toEqual({ done: 7, total: 507, fraction: 7 / 507 });
  });

  it('classifies stages', () => {
    const s = deriveTopicStatuses(firstN(68));
    expect(stageStatus(CURRICULUM[0], s)).toBe('completed');
    expect(stageStatus(CURRICULUM[1], s)).toBe('current');
    expect(stageStatus(CURRICULUM[2], s)).toBe('locked');
  });

  it('finds a topic with its parents', () => {
    const ref = findTopic('s2.3.09');
    expect(ref?.topic.title).toBe('Agreement with Either...Or and Neither...Nor');
    expect(ref?.subStage.code).toBe('2.3');
    expect(ref?.stage.title).toBe('Sentence Building');
  });
});
