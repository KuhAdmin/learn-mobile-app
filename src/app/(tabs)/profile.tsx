import Constants from 'expo-constants';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Alert, StyleSheet, View } from 'react-native';

import { AppText, ScreenTitle } from '@/components/AppText';
import { OutlineButton } from '@/components/Buttons';
import { ReminderSettings } from '@/components/ReminderSettings';
import { ToggleRow } from '@/components/Rows';
import { Screen } from '@/components/Screen';
import { chapterNumber, currentTopicId, findTopic, overallProgress } from '@/learning-path/progression';
import { useOnboarding } from '@/state/onboarding-context';
import { useProgress } from '@/state/progress-context';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

/** Profile tab: the learner's progress, the daily reminder, and resetting progress. */
export default function ProfileScreen() {
  const { state, dispatch } = useOnboarding();
  const { completed, statuses, resetProgress, devUnlock, setDevUnlock } = useProgress();
  const name = state.name.trim();
  const { done, total, fraction } = overallProgress(completed);
  const currentId = currentTopicId(statuses);
  const current = currentId ? findTopic(currentId) : undefined;

  return (
    <Screen>
      <Image
        source={require('../../../assets/brand/app-logo.png')}
        style={styles.logo}
        contentFit="contain"
        accessibilityLabel="Learn Grammar BitbyBit"
      />
      <ScreenTitle>{name ? `Hi, ${name}!` : 'Your profile'}</ScreenTitle>

      <View style={styles.card} accessible accessibilityLabel={`${done} of ${total} lessons completed`}>
        <AppText variant="title">{`${done} of ${total} lessons completed`}</AppText>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${Math.round(fraction * 100)}%` }]} />
        </View>
        <AppText variant="caption">
          {current
            ? `Up next: Chapter ${chapterNumber(current.subStage.id)} · ${current.topic.title}`
            : 'You’ve completed every lesson so far. More are on the way.'}
        </AppText>
      </View>

      <AppText variant="label" style={styles.section}>
        Reminder
      </AppText>
      <ReminderSettings askOnEnable />

      <AppText variant="label" style={styles.section}>
        Progress
      </AppText>
      <View style={styles.actions}>
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
        {__DEV__ ? (
          // Development builds only: open every lesson to check new content without replaying the path.
          <>
            <ToggleRow label="Unlock all lessons (dev)" value={devUnlock} onValueChange={setDevUnlock} />
            <OutlineButton
              label="Restart onboarding (dev)"
              icon="restart"
              onPress={() => {
                dispatch({ type: 'reset' });
                resetProgress();
                router.replace('/intro');
              }}
            />
          </>
        ) : null}
      </View>

      <AppText variant="caption" align="center" style={styles.version}>
        {`Learn :: Grammar BitbyBit · version ${Constants.expoConfig?.version ?? ''}`}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: { width: 112, height: 112, alignSelf: 'center', marginBottom: space.lg },
  card: {
    gap: space.sm,
    padding: space.lg,
    borderRadius: radii.card,
    borderWidth,
    borderColor: colors.divider,
    backgroundColor: colors.surface,
  },
  track: { height: 8, borderRadius: 4, backgroundColor: colors.divider, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 4, backgroundColor: colors.pathTeal },
  section: { fontFamily: fonts.sansMedium, color: colors.inkMuted, marginTop: space.xl, marginBottom: space.sm },
  actions: { gap: space.md },
  version: { marginTop: space.xxl },
});
