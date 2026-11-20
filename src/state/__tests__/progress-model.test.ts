import { describe, expect, it } from '@jest/globals';

import { progressReducer, restoreProgress } from '../progress-model';

describe('progress model', () => {
  it('keeps the first completion time and resets', () => {
    const s = progressReducer({}, { type: 'complete', topicId: 's1.1.01', at: 'T1' });
    expect(progressReducer(s, { type: 'complete', topicId: 's1.1.01', at: 'T2' })).toBe(s);
    expect(progressReducer(s, { type: 'reset' })).toEqual({});
  });

  it('restores only known topics with a completion time', () => {
    expect(restoreProgress({ 's1.1.01': 'T1', 's1.1.02': 'T2' })).toEqual({ 's1.1.01': 'T1', 's1.1.02': 'T2' });
    expect(restoreProgress({ 's1.1.01': 'T1', 's9.9.99': 'T2', 's1.1.02': 5 })).toEqual({ 's1.1.01': 'T1' });
    expect(restoreProgress(null)).toBeNull();
    expect(restoreProgress(['s1.1.01'])).toBeNull();
  });
});
