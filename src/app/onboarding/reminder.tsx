import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { Illustration } from '@/components/Illustration';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { confirmReminderChoice, ReminderSettings } from '@/components/ReminderSettings';
import { Screen } from '@/components/Screen';
import { useOnboardingNav } from '@/onboarding/use-onboarding-nav';
import { useOnboarding } from '@/state/onboarding-context';
import { space } from '@/theme/tokens';

/**
 * Daily reminder choice. Continue asks for notification permission when the reminder is on; the root
 * layout then schedules it (`syncDailyReminder`) once onboarding is finished.
 */
export default function ReminderScreen() {
  const { state, dispatch } = useOnboarding();
  const { next } = useOnboardingNav('reminder');
  const [busy, setBusy] = useState(false);

  const onContinue = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await confirmReminderChoice(state.reminderEnabled, () => dispatch({ type: 'setReminderEnabled', enabled: false }));
    } finally {
      setBusy(false);
    }
    next();
  };

  return (
    <Screen
      header={<OnboardingHeader />}
      footer={<PrimaryButton label="Continue" onPress={() => void onContinue()} disabled={busy} />}
    >
      <ScreenTitle align="center">Set a learning{'\n'}reminder?</ScreenTitle>
      <Illustration name="bell" size={170} />
      <View style={styles.list}>
        <ReminderSettings />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { marginTop: space.xxl },
});
