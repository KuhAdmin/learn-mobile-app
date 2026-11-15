import { describe, expect, it } from '@jest/globals';

import { getNextStep, ONBOARDING_STEPS } from '../flow';

describe('getNextStep', () => {
  it('walks the full flow in order', () => {
    const visited: string[] = [];
    let step: (typeof ONBOARDING_STEPS)[number] | null = 'level';
    while (step) {
      visited.push(step);
      step = getNextStep(step);
    }
    expect(visited).toEqual([...ONBOARDING_STEPS]);
  });

  it('returns null after the last step', () => {
    expect(getNextStep('name')).toBeNull();
  });
});
