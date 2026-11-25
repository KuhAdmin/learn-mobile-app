/**
 * The daily learning reminder: one local notification a day at the learner's chosen time. All
 * scheduling goes through here (CLAUDE.md, "Reminders"). Nothing is sent from a server.
 */
import * as Notifications from 'expo-notifications';
import { AndroidImportance } from 'expo-notifications';
import { Platform } from 'react-native';

import { REMINDER_CHANNEL_ID, REMINDER_CONTENT, reminderSchedule, type ReminderPreference } from './reminder-plan';

// Show the reminder even if the app happens to be open at that moment.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

/** Android needs a channel before it can ask for permission (Android 13+) or post a notification. */
async function ensureChannel() {
  if (Platform.OS !== 'android') return;
  await Notifications.setNotificationChannelAsync(REMINDER_CHANNEL_ID, {
    name: 'Daily reminder',
    description: 'One reminder a day to practise grammar.',
    importance: AndroidImportance.DEFAULT,
  });
}

/**
 * Asks for notification permission if it hasn't been decided yet. Resolves to whether reminders can be
 * shown. Never rejects: if the notification module fails, reminders are treated as unavailable.
 */
export async function requestReminderPermission(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  try {
    await ensureChannel();
    const current = await Notifications.getPermissionsAsync();
    if (current.granted) return true;
    if (!current.canAskAgain) return false;
    return (await Notifications.requestPermissionsAsync()).granted;
  } catch (error) {
    console.warn('Notification permission request failed', error);
    return false;
  }
}

/**
 * Makes the scheduled reminder match the preference: cancels any old one, then schedules the daily
 * reminder if it is on and allowed. Safe to call any number of times. Never asks for permission itself.
 */
export async function syncDailyReminder(pref: ReminderPreference): Promise<void> {
  if (Platform.OS === 'web') return;
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    const at = reminderSchedule(pref);
    if (!at) return;
    if (!(await Notifications.getPermissionsAsync()).granted) return;
    await ensureChannel();
    await Notifications.scheduleNotificationAsync({
      content: { ...REMINDER_CONTENT },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: at.hour,
        minute: at.minute,
        channelId: REMINDER_CHANNEL_ID,
      },
    });
  } catch {
    // A reminder that can't be scheduled must never break the app.
  }
}
