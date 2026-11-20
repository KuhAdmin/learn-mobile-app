import { router } from 'expo-router';
import { Alert, StyleSheet, View } from 'react-native';

import { OutlineButton } from '@/components/Buttons';
import { ComingSoon } from '@/components/ComingSoon';
import { ToggleRow } from '@/components/Rows';
import { overallProgress } from '@/learning-path/progression';
import { useOnboarding } from '@/state/onboarding-context';
import { useProgress } from '@/state/progress-context';
import { space } from '@/theme/tokens';

/** Placeholder profile, plus testing helpers. Progress and onboarding are saved, so these also clear the saved state. */
export default function ProfileScreen() {
  const { state, dispatch } = useOnboarding();
  const { completed, resetProgress, devUnlock, setDevUnlock } = useProgress();
  const name = state.name.trim();
  const { done, total } = overallProgress(completed);

  return (
    <ComingSoon
      icon="account-outline"
      title={name ? `Hi, ${name}!` : 'Your profile'}
      body={`${done} of ${total} grammar topics completed. Profile settings are coming in a later update.`}
    >
      <View style={styles.actions}>
        {__DEV__ ? (
          // Development builds only: open every lesson to check new content without replaying the path.
          <ToggleRow label="Unlock all lessons (dev)" value={devUnlock} onValueChange={setDevUnlock} />
        ) : null}
        <OutlineButton
          label="Reset learning progress"
          icon="progress-close"
          onPress={() =>
            Alert.alert('Reset progress?', 'This clears every completed lesson.', [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Reset', style: 'destructive', onPress: resetProgress },
            ])
          }
        />
        <OutlineButton
          label="Restart onboarding"
          icon="restart"
          onPress={() => {
            dispatch({ type: 'reset' });
            resetProgress();
            router.replace('/intro');
          }}
        />
      </View>
    </ComingSoon>
  );
}

const styles = StyleSheet.create({
  actions: { gap: space.md },
});
