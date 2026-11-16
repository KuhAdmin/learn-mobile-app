/**
 * Which curriculum topics have lesson content. Lesson files are named by their content `topic_id`
 * and mapped onto Learning Path topic ids (`s1.1.01`):
 *   schema 1.0: `1.1.1.EP001` (sub-stage 1.1, topic 1, episode 1)
 *   schema 2.0: `1-1-2` (sub-stage 1.1, topic 2)
 * Add new lessons to LESSON_FILES; topics without content keep the placeholder lesson screen.
 */
import ep_1_1_1_001 from './content/1.1.1.EP001.json';
import topic_1_1_2 from './content/1-1-2.json';
import { loadLesson, type Lesson } from './model';

const LESSON_FILES: unknown[] = [ep_1_1_1_001, topic_1_1_2];

/** `1.1.1.EP001` / `1-1-2` → `s1.1.01` / `s1.1.02`. */
export function curriculumTopicId(contentTopicId: string): string | undefined {
  const m = /^(\d+)[.-](\d+)[.-](\d+)(?:\.EP\d+)?$/.exec(contentTopicId);
  return m ? `s${m[1]}.${m[2]}.${m[3].padStart(2, '0')}` : undefined;
}

const BY_TOPIC = new Map<string, Lesson>();
for (const file of LESSON_FILES) {
  const lesson = loadLesson(file);
  const id = curriculumTopicId(lesson.id);
  // First episode of a topic is the one played for now.
  if (id && !BY_TOPIC.has(id)) BY_TOPIC.set(id, lesson);
}

export function lessonForTopic(topicId: string): Lesson | undefined {
  return BY_TOPIC.get(topicId);
}
