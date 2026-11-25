import { describe, expect, it } from '@jest/globals';

import { reminderSchedule } from '../reminder-plan';

describe('reminderSchedule', () => {
  it('schedules at the chosen time when the reminder is on', () => {
    expect(reminderSchedule({ enabled: true, time: { hour: 20, minute: 30 } })).toEqual({ hour: 20, minute: 30 });
  });

  it('schedules nothing when the reminder is off', () => {
    expect(reminderSchedule({ enabled: false, time: { hour: 20, minute: 0 } })).toBeNull();
  });

  it('schedules nothing for an impossible time', () => {
    expect(reminderSchedule({ enabled: true, time: { hour: 24, minute: 0 } })).toBeNull();
    expect(reminderSchedule({ enabled: true, time: { hour: 8, minute: 60 } })).toBeNull();
    expect(reminderSchedule({ enabled: true, time: { hour: 8.5, minute: 0 } })).toBeNull();
  });
});
