import { router } from 'expo-router';
import { Alert } from 'react-native';

import type { TopicStatus } from './progression';

/** Opens a lesson from the path or the Topics list, or explains why it is still locked. */
export function openTopic(topicId: string, status: TopicStatus | undefined) {
  if (status === undefined || status === 'locked') {
    Alert.alert('Lesson locked', 'Complete the lessons before this one to unlock it.');
    return;
  }
  router.push({ pathname: '/lesson/[topicId]', params: { topicId } });
}
