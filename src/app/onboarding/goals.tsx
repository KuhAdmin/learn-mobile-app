import { StyleSheet, View } from 'react-native';

import { AppText, ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { OptionCard } from '@/components/Options';
import { Screen } from '@/components/Screen';
import { GOAL_OPTIONS } from '@/data/options';
import { useOnboardingNav } from '@/onboarding/use-onboarding-nav';
import { useOnboarding } from '@/state/onboarding-context';
import { MAX_GOALS } from '@/state/onboarding-model';
import { colors, space } from '@/theme/tokens';

export default function GoalsScreen() {
  const { state, dispatch } = useOnboarding();
  const { next } = useOnboardingNav('goals');
  const atLimit = state.goals.length >= MAX_GOALS;

  return (
    <Screen
      header={<OnboardingHeader />}
      footer={<PrimaryButton label="Continue" onPress={next} disabled={state.goals.length === 0} />}
    >
      <ScreenTitle subtitle="Tell us what you want to achieve. We’ll make your English learning journey more relevant to your life.">
        What’s your main goal?
      </ScreenTitle>
      <AppText variant="caption" style={styles.hint} accessibilityLiveRegion="polite">
        {`Choose up to ${MAX_GOALS} · ${state.goals.length} of ${MAX_GOALS} selected`}
      </AppText>
      <View style={styles.list}>
        {GOAL_OPTIONS.map((o) => {
          const selected = state.goals.includes(o.id);
          return (
            <OptionCard
              key={o.id}
              indicator="checkbox"
              title={o.title}
              subtitle={o.subtitle}
              icon={o.icon}
              selected={selected}
              // Once two are chosen, the rest dim until one is deselected.
              disabled={atLimit && !selected}
              onPress={() => dispatch({ type: 'toggleGoal', id: o.id })}
            />
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hint: { color: colors.inkSubtle, marginTop: -space.lg, marginBottom: space.md },
  list: { gap: space.md },
});
