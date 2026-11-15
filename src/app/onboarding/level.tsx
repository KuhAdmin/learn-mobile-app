import { Alert, StyleSheet, View } from 'react-native';

import { ScreenTitle } from '@/components/AppText';
import { OutlineButton, PrimaryButton } from '@/components/Buttons';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { OptionPill } from '@/components/Options';
import { Screen } from '@/components/Screen';
import { LEVEL_OPTIONS } from '@/data/options';
import { useOnboardingNav } from '@/onboarding/use-onboarding-nav';
import { useOnboarding } from '@/state/onboarding-context';
import { space } from '@/theme/tokens';

/** Hidden for now; set to true to bring back the quick level test entry point. */
const SHOW_LEVEL_TEST = false;

export default function LevelScreen() {
  const { state, dispatch } = useOnboarding();
  const { next } = useOnboardingNav('level');

  return (
    <Screen
      header={<OnboardingHeader />}
      footer={<PrimaryButton label="Continue" onPress={next} disabled={state.level === null} />}
    >
      <ScreenTitle>What’s your{'\n'}English level?</ScreenTitle>
      <View style={styles.list} accessibilityRole="radiogroup">
        {LEVEL_OPTIONS.map((o) => (
          <OptionPill
            key={o.id}
            label={o.title}
            selected={state.level === o.id}
            onPress={() => dispatch({ type: 'setLevel', level: o.id })}
          />
        ))}
      </View>
      {SHOW_LEVEL_TEST ? (
        <View style={styles.test}>
          <OutlineButton
            label="Take a quick level test"
            icon="creation"
            onPress={() => Alert.alert('Coming soon', 'The quick level test will be available in a future update.')}
          />
        </View>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { gap: space.md },
  test: { marginTop: space.xl },
});
