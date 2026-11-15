/**
 * Which curriculum topics have lesson content. Lesson files are named by their content `topic_id`
 * (`1.1.1.EP001` = sub-stage 1.1, topic 1, episode 1) and mapped onto Learning Path topic ids (`s1.1.01`).
 * Add new lessons to LESSON_FILES; topics without content keep the placeholder lesson screen.
 */
import ep_1_1_1_001 from './content/1.1.1.EP001.json';
import { parseLesson, type GrammarLesson } from './schema';

const LESSON_FILES: unknown[] = [ep_1_1_1_001];

/** `1.1.1.EP001` → `s1.1.01`. */
export function curriculumTopicId(contentTopicId: string): string | undefined {
  const m = /^(\d+)\.(\d+)\.(\d+)\.EP\d+$/.exec(contentTopicId);
  return m ? `s${m[1]}.${m[2]}.${m[3].padStart(2, '0')}` : undefined;
}

const BY_TOPIC = new Map<string, GrammarLesson>();
for (const file of LESSON_FILES) {
  const lesson = parseLesson(file);
  const id = curriculumTopicId(lesson.topic.topic_id);
  // First episode of a topic is the one played for now.
  if (id && !BY_TOPIC.has(id)) BY_TOPIC.set(id, lesson);
}

export function lessonForTopic(topicId: string): GrammarLesson | undefined {
  return BY_TOPIC.get(topicId);
}
