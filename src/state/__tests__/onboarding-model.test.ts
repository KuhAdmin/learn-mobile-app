import { describe, expect, it } from '@jest/globals';

import {
  focusSplit,
  formatTime,
  initialOnboardingState as init,
  onboardingReducer as reduce,
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
