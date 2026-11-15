import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';

import { ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { Illustration } from '@/components/Illustration';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { ToggleRow, ValueRow } from '@/components/Rows';
import { Screen } from '@/components/Screen';
import { dateToTime, TimePickerSheet, timeToDate } from '@/components/TimePickerSheet';
import { useOnboardingNav } from '@/onboarding/use-onboarding-nav';
import { useOnboarding } from '@/state/onboarding-context';
import { formatTime, type TimeOfDay } from '@/state/onboarding-model';
import { space } from '@/theme/tokens';

/** Phase 1 only records the preference — no notifications are scheduled yet. */
export default function ReminderScreen() {
  const { state, dispatch } = useOnboarding();
  const { next } = useOnboardingNav('reminder');
  const [iosPickerOpen, setIosPickerOpen] = useState(false);

  const setTime = (time: TimeOfDay) => dispatch({ type: 'setReminderTime', time });

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
    <Screen header={<OnboardingHeader />} footer={<PrimaryButton label="Continue" onPress={next} />}>
      <ScreenTitle align="center">Set a learning{'\n'}reminder?</ScreenTitle>
      <Illustration name="bell" size={170} />
      <View style={styles.list}>
        <ToggleRow
          label="Daily reminder"
          value={state.reminderEnabled}
          onValueChange={(enabled) => dispatch({ type: 'setReminderEnabled', enabled })}
        />
        <ValueRow
          label="Preferred time"
          value={formatTime(state.reminderTime)}
          onPress={openPicker}
          disabled={!state.reminderEnabled}
        />
      </View>
      {Platform.OS === 'ios' ? (
        <TimePickerSheet
          visible={iosPickerOpen}
          value={state.reminderTime}
          onConfirm={setTime}
          onClose={() => setIosPickerOpen(false)}
        />
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { gap: space.lg, marginTop: space.xxl },
});
