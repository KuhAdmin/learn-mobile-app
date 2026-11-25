import { router, useLocalSearchParams } from 'expo-router';

import { AppText, ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { LessonPlayer } from '@/components/lesson/LessonPlayer';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { Screen } from '@/components/Screen';
import { findTopic } from '@/learning-path/progression';
import { lessonForTopic } from '@/lessons/registry';
import { useProgress } from '@/state/progress-context';

/**
 * Lesson route opened from the Learning Path or the Topics list. The path only lists topics with lesson
 * content (see `src/lessons/registry.ts`), so anything else is "not found".
 */
export default function LessonScreen() {
  const { topicId } = useLocalSearchParams<{ topicId: string }>();
  const { statuses } = useProgress();
  const ref = findTopic(topicId);
  const status = ref ? statuses[ref.topic.id] : undefined;
  const lesson = ref && status !== 'locked' ? lessonForTopic(ref.topic.id) : undefined;
  const back = () => (router.canGoBack() ? router.back() : router.replace('/learn'));

  if (ref && lesson) return <LessonPlayer lesson={lesson} topic={ref} />;

  const locked = ref && status === 'locked';
  return (
    <Screen header={<OnboardingHeader />} footer={<PrimaryButton label="Back to path" onPress={back} />}>
      <ScreenTitle>{locked ? 'This lesson is locked' : 'Lesson not found'}</ScreenTitle>
      <AppText>
        {locked ? 'Complete the lessons before this one to unlock it.' : 'This lesson isn’t part of your path.'}
      </AppText>
    </Screen>
  );
}
