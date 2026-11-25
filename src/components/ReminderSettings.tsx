import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';

import { requestReminderPermission } from '@/notifications/reminder';
import { useOnboarding } from '@/state/onboarding-context';
import { formatTime, type TimeOfDay } from '@/state/onboarding-model';
import { space } from '@/theme/tokens';

import { ToggleRow, ValueRow } from './Rows';
import { dateToTime, TimePickerSheet, timeToDate } from './TimePickerSheet';

const DENIED_MESSAGE =
  'Notifications are turned off for this app. To get a daily reminder, allow notifications in your phone’s settings, then turn the reminder on here.';

/**
 * Daily reminder on/off and time, saved with the onboarding answers. The root layout keeps the scheduled
 * notification in step with them (`syncDailyReminder`). `askOnEnable`: ask for notification permission as
 * soon as the reminder is switched on (Profile); onboarding asks when the learner continues instead.
 */
export function ReminderSettings({ askOnEnable = false }: { askOnEnable?: boolean }) {
  const { state, dispatch } = useOnboarding();
  const [iosPickerOpen, setIosPickerOpen] = useState(false);

  const setTime = (time: TimeOfDay) => dispatch({ type: 'setReminderTime', time });

  const setEnabled = async (enabled: boolean) => {
    if (enabled && askOnEnable && !(await requestReminderPermission())) {
      Alert.alert('Reminders are off', DENIED_MESSAGE);
      return;
    }
    dispatch({ type: 'setReminderEnabled', enabled });
  };

  const openPicker = () => {
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: timeToDate(state.reminderTime),
        mode: 'time',
        onValueChange: (_, date) => setTime(dateToTime(date)),
      });
    } else if (Platform.OS === 'ios') {
      setIosPickerOpen(true);
    } else {
      Alert.alert('Not available', 'The time picker is available on iOS and Android.');
    }
  };

  return (
    <View style={styles.list}>
      <ToggleRow label="Daily reminder" value={state.reminderEnabled} onValueChange={(on) => void setEnabled(on)} />
      <ValueRow
        label="Preferred time"
        value={formatTime(state.reminderTime)}
        onPress={openPicker}
        disabled={!state.reminderEnabled}
      />
      {Platform.OS === 'ios' ? (
        <TimePickerSheet
          visible={iosPickerOpen}
          value={state.reminderTime}
          onConfirm={setTime}
          onClose={() => setIosPickerOpen(false)}
        />
      ) : null}
    </View>
  );
}

/**
 * Onboarding's Continue: if the reminder is on, ask for permission now. If it's refused, the reminder is
 * switched off and the learner is told where to turn it back on. Resolves when it's fine to move on.
 */
export async function confirmReminderChoice(
  enabled: boolean,
  turnOff: () => void,
): Promise<void> {
  if (!enabled || (await requestReminderPermission())) return;
  turnOff();
  await new Promise<void>((resolve) =>
    Alert.alert('Reminders are off', 'You can turn on a daily reminder later in Profile.', [
      { text: 'OK', onPress: () => resolve() },
    ]),
  );
}

const styles = StyleSheet.create({
  list: { gap: space.lg },
});
