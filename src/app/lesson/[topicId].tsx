import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText, ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { LessonPlayer } from '@/components/lesson/LessonPlayer';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { Screen } from '@/components/Screen';
import { chapterNumber, findTopic } from '@/learning-path/progression';
import { lessonForTopic } from '@/lessons/registry';
import { useProgress } from '@/state/progress-context';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

/**
 * Lesson route opened from the Learning Path. Topics with lesson content (see `src/lessons/registry.ts`)
 * play it; the rest show a PHASE 1 placeholder with "Mark as complete".
 */
export default function LessonScreen() {
  const { topicId } = useLocalSearchParams<{ topicId: string }>();
  const { statuses, completeTopic } = useProgress();
  const ref = findTopic(topicId);
  const status = ref ? statuses[ref.topic.id] : undefined;
  const back = () => (router.canGoBack() ? router.back() : router.replace('/learn'));

  if (!ref || status === 'locked') {
    return (
      <Screen header={<OnboardingHeader />} footer={<PrimaryButton label="Back to path" onPress={back} />}>
        <ScreenTitle>{ref ? 'This lesson is locked' : 'Lesson not found'}</ScreenTitle>
        <AppText>
          {ref ? 'Complete the lessons before this one to unlock it.' : 'This lesson isn’t part of your path.'}
        </AppText>
      </Screen>
    );
  }

  const lesson = lessonForTopic(ref.topic.id);
  if (lesson) return <LessonPlayer lesson={lesson} topic={ref} />;

  const done = status === 'completed';

  return (
    <Screen
      header={<OnboardingHeader />}
      footer={
        done ? (
          <PrimaryButton label="Back to path" onPress={back} />
        ) : (
          <PrimaryButton
            label="Mark as complete"
            onPress={() => {
              completeTopic(ref.topic.id);
              back();
            }}
          />
        )
      }
    >
      <AppText variant="caption" style={styles.crumb}>
        {`Course ${ref.stage.number} · Chapter ${chapterNumber(ref.subStage.id)}`}
      </AppText>
      <ScreenTitle>{ref.topic.title}</ScreenTitle>
      {done ? (
        <View style={styles.done}>
          <MaterialCommunityIcons name="check-circle" size={18} color={colors.pathTeal} />
          <AppText variant="label">Completed — review any time</AppText>
        </View>
      ) : null}
      <View style={styles.placeholder}>
        <MaterialCommunityIcons name="book-open-variant-outline" size={32} color={colors.inkMuted} />
        <AppText align="center">Lesson content is coming soon.</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  crumb: { fontFamily: fonts.sansMedium, marginBottom: space.sm },
  done: { flexDirection: 'row', alignItems: 'center', gap: space.sm, marginTop: -space.md, marginBottom: space.xl },
  placeholder: {
    alignItems: 'center',
    gap: space.md,
    paddingVertical: space.xxl,
    paddingHorizontal: space.xl,
    borderRadius: radii.block,
    borderWidth,
    borderStyle: 'dashed',
    borderColor: colors.inkSubtle,
    backgroundColor: colors.surface,
  },
});
