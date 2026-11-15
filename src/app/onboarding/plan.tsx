import { StyleSheet, View } from 'react-native';

import { ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { Illustration } from '@/components/Illustration';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { Screen } from '@/components/Screen';
import { useOnboardingNav } from '@/onboarding/use-onboarding-nav';
import { useOnboarding } from '@/state/onboarding-context';
import { space } from '@/theme/tokens';

export default function PlanScreen() {
  const { state } = useOnboarding();
  const { next } = useOnboardingNav('plan');

  return (
    <Screen
      header={<OnboardingHeader />}
      footer={<PrimaryButton label="Start learning" onPress={next} />}
      contentStyle={styles.content}
    >
      <Illustration name="plan" size={162} />
      <View style={styles.title}>
        <ScreenTitle align="center">{`Your ${state.dailyMinutes} minutes daily goal plan is ready!`}</ScreenTitle>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  // Only artwork + heading now, so centre them in the space above the button.
  content: { justifyContent: 'center' },
  title: { marginTop: space.xl },
});
