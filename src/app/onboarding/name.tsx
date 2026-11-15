import { StyleSheet, View } from 'react-native';

import { AppText, ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { Illustration } from '@/components/Illustration';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { Screen } from '@/components/Screen';
import { TextField } from '@/components/TextField';
import { useOnboardingNav } from '@/onboarding/use-onboarding-nav';
import { useOnboarding } from '@/state/onboarding-context';
import { space } from '@/theme/tokens';

/** Last onboarding step: the learner's first name, used to personalise the app. */
export default function NameScreen() {
  const { state, dispatch } = useOnboarding();
  const { next } = useOnboardingNav('name');
  const canContinue = state.name.trim().length > 0;

  const submit = () => {
    if (!canContinue) return;
    dispatch({ type: 'setName', name: state.name.trim() });
    next();
  };

  return (
    <Screen
      header={<OnboardingHeader />}
      footer={
        <View style={styles.footer}>
          <PrimaryButton label="Continue" onPress={submit} disabled={!canContinue} />
          <AppText variant="caption" align="center">
            You can update this anytime in your profile.
          </AppText>
        </View>
      }
    >
      <Illustration name="idcard" size={170} />
      <View style={styles.title}>
        <ScreenTitle align="center" subtitle="We’ll use this to personalise your learning experience.">
          What’s your name?
        </ScreenTitle>
      </View>
      <TextField
        icon="account-outline"
        value={state.name}
        onChangeText={(name) => dispatch({ type: 'setName', name })}
        placeholder="Enter your name"
        accessibilityLabel="Your name"
        autoCapitalize="words"
        autoComplete="name"
        textContentType="name"
        autoCorrect={false}
        maxLength={40}
        returnKeyType="done"
        onSubmitEditing={submit}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { marginTop: space.xl },
  footer: { gap: space.md },
});
