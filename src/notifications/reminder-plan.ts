/**
 * What the daily reminder should be, from the learner's saved preference. Pure, so it is unit tested;
 * `reminder.ts` turns it into a scheduled notification.
 */
import type { TimeOfDay } from '@/state/onboarding-model';

export const REMINDER_CHANNEL_ID = 'daily-reminder';

export const REMINDER_CONTENT = {
  title: 'Time for today’s grammar bit',
  body: 'A short lesson keeps your English growing. Pick up where you left off.',
} as const;

export interface ReminderPreference {
  enabled: boolean;
  time: TimeOfDay;
}

/** The daily time to remind at, or null when no reminder should be scheduled. */
export function reminderSchedule(pref: ReminderPreference): TimeOfDay | null {
  if (!pref.enabled) return null;
  const { hour, minute } = pref.time;
  const valid = Number.isInteger(hour) && Number.isInteger(minute) && hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
  return valid ? { hour, minute } : null;
}
