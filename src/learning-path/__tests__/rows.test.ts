import { describe, expect, it } from '@jest/globals';

import { deriveTopicStatuses } from '../progression';
import { buildPathRows, PATH_ZIGZAG } from '../rows';

describe('buildPathRows', () => {
  const rows = buildPathRows(deriveTopicStatuses({}));

  it('emits every banner, sub-stage and topic in curriculum order', () => {
    const count = (k: string) => rows.filter((r) => r.kind === k).length;
    expect([count('banner'), count('legend'), count('sub'), count('topic')]).toEqual([5, 1, 25, 502]);
    expect(rows.slice(0, 4).map((r) => r.key)).toEqual(['s1', 'legend', 's1.1', 's1.1.01']);
  });

  it('breaks the connector between stages and links rows inside a stage', () => {
    const firstSub = rows.find((r) => r.key === 's2.1');
    const lastOfStage1 = rows.find((r) => r.key === 's1.5.16');
    expect(firstSub?.kind === 'sub' && firstSub.path.prevX).toBeNull();
    expect(lastOfStage1?.kind === 'topic' && lastOfStage1.path.nextX).toBeNull();
    const t2 = rows.find((r) => r.key === 's1.1.02');
    expect(t2?.kind === 'topic' && t2.path).toMatchObject({ x: PATH_ZIGZAG[1], prevX: PATH_ZIGZAG[0] });
  });

  it('numbers sub-stages as chapters across the whole path and gives topics icons', () => {
    const subs = rows.filter((r) => r.kind === 'sub');
    expect(subs.map((r) => r.kind === 'sub' && r.chapter)).toEqual(Array.from({ length: 25 }, (_, i) => i + 1));
    const s21 = rows.find((r) => r.key === 's2.1');
    expect(s21?.kind === 'sub' && s21.chapter).toBe(6);
    const t1 = rows.find((r) => r.key === 's1.1.02');
    expect(t1?.kind === 'topic' && t1.icon).toBe('star');
    const topics = rows.filter((r) => r.kind === 'topic');
    const repeats = topics.filter(
      (r, i) => i > 0 && r.ref.subStage === topics[i - 1].ref.subStage && r.icon === topics[i - 1].icon,
    );
    expect(repeats).toHaveLength(0);
  });

  it('marks the line as travelled only up to the current topic', () => {
    const r = buildPathRows(deriveTopicStatuses({ 's1.1.01': 'x' }));
    const byKey = (k: string) => r.find((row) => row.key === k);
    const t1 = byKey('s1.1.01');
    const t2 = byKey('s1.1.02');
    const t3 = byKey('s1.1.03');
    expect(t1?.kind === 'topic' && t1.path.outReached).toBe(true); // into the current topic
    expect(t2?.kind === 'topic' && [t2.status, t2.path.outReached]).toEqual(['current', false]);
    expect(t3?.kind === 'topic' && t3.path.inReached).toBe(false);
  });
});
