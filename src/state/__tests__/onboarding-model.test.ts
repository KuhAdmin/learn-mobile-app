import { describe, expect, it } from '@jest/globals';

import {
  focusSplit,
  formatTime,
  initialOnboardingState as init,
  onboardingReducer as reduce,
  restoreOnboarding,
} from '../onboarding-model';

describe('onboardingReducer', () => {
  it('starts with both tracks, 10 min, reminder on at 8 PM', () => {
    expect(init.focus).toEqual(['grammar', 'vocabulary']);
    expect(init.dailyMinutes).toBe(10);
    expect(init.reminderEnabled).toBe(true);
    expect(formatTime(init.reminderTime)).toBe('8:00 PM');
  });

  it('toggles goals', () => {
    let s = reduce(init, { type: 'toggleGoal', id: 'career' });
    expect(s.goals).toEqual(['career']);
    s = reduce(s, { type: 'toggleGoal', id: 'career' });
    expect(s.goals).toEqual([]);
  });

  it('caps goals at two until one is deselected', () => {
    let s = reduce(init, { type: 'toggleGoal', id: 'career' });
    s = reduce(s, { type: 'toggleGoal', id: 'exams' });
    expect(reduce(s, { type: 'toggleGoal', id: 'abroad' })).toBe(s);
    s = reduce(s, { type: 'toggleGoal', id: 'career' });
    s = reduce(s, { type: 'toggleGoal', id: 'abroad' });
    expect(s.goals).toEqual(['exams', 'abroad']);
  });

  it('sets level, minutes, reminder and name, and resets', () => {
    let s = reduce(init, { type: 'setLevel', level: 'advanced' });
    s = reduce(s, { type: 'setDailyMinutes', minutes: 20 });
    s = reduce(s, { type: 'setReminderEnabled', enabled: false });
    s = reduce(s, { type: 'setReminderTime', time: { hour: 7, minute: 5 } });
    s = reduce(s, { type: 'setName', name: 'Asha' });
    expect(s).toMatchObject({ level: 'advanced', dailyMinutes: 20, reminderEnabled: false, name: 'Asha' });
    expect(formatTime(s.reminderTime)).toBe('7:05 AM');
    expect(reduce(s, { type: 'reset' })).toBe(init);
  });
});

describe('focusSplit', () => {
  it('weights grammar 70/30 when both are selected', () => {
    expect(focusSplit({ focus: ['grammar', 'vocabulary'] })).toEqual({ grammar: 70, vocabulary: 30 });
  });
  it('gives 100% to a single focus', () => {
    expect(focusSplit({ focus: ['grammar'] })).toEqual({ grammar: 100, vocabulary: 0 });
    expect(focusSplit({ focus: ['vocabulary'] })).toEqual({ grammar: 0, vocabulary: 100 });
  });
});

describe('formatTime', () => {
  it('handles midnight and noon', () => {
    expect(formatTime({ hour: 0, minute: 0 })).toBe('12:00 AM');
    expect(formatTime({ hour: 12, minute: 30 })).toBe('12:30 PM');
  });
});

describe('onboarding completion and saved state', () => {
  it('records completion once and clears it on reset', () => {
    const done = reduce(init, { type: 'complete', at: '2026-11-16T10:00:00.000Z' });
    expect(done.completedAt).toBe('2026-11-16T10:00:00.000Z');
    expect(reduce(done, { type: 'complete', at: '2026-11-17T10:00:00.000Z' })).toBe(done);
    expect(reduce(done, { type: 'reset' }).completedAt).toBeNull();
  });

  it('restores valid saved fields and defaults the rest', () => {
    const saved = { ...init, level: 'advanced', goals: ['career'], name: 'Asha', completedAt: '2026-11-16T10:00:00.000Z' };
    expect(restoreOnboarding(JSON.parse(JSON.stringify(saved)))).toEqual(saved);
    // An older save without newer fields still loads.
    expect(restoreOnboarding({ name: 'Asha' })).toEqual({ ...init, name: 'Asha' });
  });

  it('drops invalid saved values', () => {
    const bad = restoreOnboarding({
      level: 'expert',
      goals: ['a', 'b', 'c', 7],
      dailyMinutes: -5,
      reminderTime: { hour: 30, minute: 0 },
      reminderEnabled: 'yes',
      focus: ['history'],
      completedAt: 42,
    });
    expect(bad).toEqual({ ...init, goals: ['a', 'b'] });
    expect(restoreOnboarding(null)).toBeNull();
    expect(restoreOnboarding('text')).toBeNull();
    expect(restoreOnboarding([])).toBeNull();
  });
});
