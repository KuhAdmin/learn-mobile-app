import { StyleSheet, View } from 'react-native';

import { ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { Illustration } from '@/components/Illustration';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { OptionPill } from '@/components/Options';
import { Screen } from '@/components/Screen';
import { DAILY_MINUTE_OPTIONS } from '@/data/options';
import { useOnboardingNav } from '@/onboarding/use-onboarding-nav';
import { useOnboarding } from '@/state/onboarding-context';
import { space } from '@/theme/tokens';

export default function DailyTimeScreen() {
  const { state, dispatch } = useOnboarding();
  const { next } = useOnboardingNav('daily-time');

  return (
    <Screen header={<OnboardingHeader />} footer={<PrimaryButton label="Continue" onPress={next} />}>
      <ScreenTitle>How much time can{'\n'}you give daily?</ScreenTitle>
      <Illustration name="calendar" size={170} />
      <View style={styles.list} accessibilityRole="radiogroup">
        {DAILY_MINUTE_OPTIONS.map((m) => (
          <OptionPill
            key={m}
            label={`${m} minutes`}
            align="center"
            indicator="selected"
            selected={state.dailyMinutes === m}
            onPress={() => dispatch({ type: 'setDailyMinutes', minutes: m })}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { gap: space.md, marginTop: space.xl },
});
