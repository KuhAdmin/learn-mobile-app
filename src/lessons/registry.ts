/**
 * Which curriculum topics have lesson content. Lesson files are named by their content `topic_id`
 * and mapped onto Learning Path topic ids (`s1.1.01`):
 *   schema 1.0: `1.1.1.EP001` (sub-stage 1.1, topic 1, episode 1)
 *   schema 2.0: `1-1-2` (sub-stage 1.1, topic 2)
 * Add new lessons to LESSON_FILES; topics without content keep the placeholder lesson screen.
 */
import ep_1_1_1_001 from './content/1.1.1.EP001.json';
import topic_1_1_2 from './content/1-1-2.json';
import topic_1_1_3 from './content/1-1-3.json';
import topic_1_1_4 from './content/1-1-4.json';
import topic_1_1_5 from './content/1-1-5.json';
import topic_1_1_6 from './content/1-1-6.json';
import topic_1_1_7 from './content/1-1-7.json';
import topic_1_2_1 from './content/1-2-1.json';
import topic_1_2_2 from './content/1-2-2.json';
import topic_1_2_3 from './content/1-2-3.json';
import topic_1_2_4 from './content/1-2-4.json';
import topic_1_2_5 from './content/1-2-5.json';
import topic_1_2_6 from './content/1-2-6.json';
import topic_1_2_7 from './content/1-2-7.json';
import topic_1_2_8 from './content/1-2-8.json';
import topic_1_2_9 from './content/1-2-9.json';
import topic_1_2_10 from './content/1-2-10.json';
import topic_1_2_11 from './content/1-2-11.json';
import topic_1_2_12 from './content/1-2-12.json';
import topic_1_2_13 from './content/1-2-13.json';
import topic_1_2_14 from './content/1-2-14.json';
import topic_1_3_1 from './content/1-3-1.json';
import topic_1_3_2 from './content/1-3-2.json';
import topic_1_3_3 from './content/1-3-3.json';
import topic_1_3_4 from './content/1-3-4.json';
import topic_1_3_5 from './content/1-3-5.json';
import topic_1_3_6 from './content/1-3-6.json';
import topic_1_3_7 from './content/1-3-7.json';
import topic_1_3_8 from './content/1-3-8.json';
import topic_1_3_9 from './content/1-3-9.json';
import topic_1_3_10 from './content/1-3-10.json';
import topic_1_3_11 from './content/1-3-11.json';
import topic_1_3_12 from './content/1-3-12.json';
import topic_1_3_13 from './content/1-3-13.json';
import topic_1_3_14 from './content/1-3-14.json';
import topic_1_3_15 from './content/1-3-15.json';
import topic_1_4_1 from './content/1-4-1.json';
import topic_1_4_2 from './content/1-4-2.json';
import topic_1_4_3 from './content/1-4-3.json';
import topic_1_4_4 from './content/1-4-4.json';
import topic_1_4_5 from './content/1-4-5.json';
import topic_1_4_6 from './content/1-4-6.json';
import topic_1_4_7 from './content/1-4-7.json';
import topic_1_4_8 from './content/1-4-8.json';
import topic_1_4_9 from './content/1-4-9.json';
import topic_1_4_10 from './content/1-4-10.json';
import topic_1_4_11 from './content/1-4-11.json';
import topic_1_4_12 from './content/1-4-12.json';
import topic_1_4_13 from './content/1-4-13.json';
import topic_1_4_14 from './content/1-4-14.json';
import topic_1_4_15 from './content/1-4-15.json';
import topic_1_4_16 from './content/1-4-16.json';
import topic_1_5_1 from './content/1-5-1.json';
import topic_1_5_2 from './content/1-5-2.json';
import topic_1_5_3 from './content/1-5-3.json';
import topic_1_5_9 from './content/1-5-9.json';
import topic_1_5_10 from './content/1-5-10.json';
import topic_1_5_11 from './content/1-5-11.json';
import topic_1_5_12 from './content/1-5-12.json';
import topic_1_5_13 from './content/1-5-13.json';
import topic_1_5_14 from './content/1-5-14.json';
import topic_1_5_15 from './content/1-5-15.json';
import topic_1_5_16 from './content/1-5-16.json';
import { loadLesson, type Lesson } from './model';

const LESSON_FILES: unknown[] = [
  ep_1_1_1_001,
  topic_1_1_2,
  topic_1_1_3,
  topic_1_1_4,
  topic_1_1_5,
  topic_1_1_6,
  topic_1_1_7,
  topic_1_2_1,
  topic_1_2_2,
  topic_1_2_3,
  topic_1_2_4,
  topic_1_2_5,
  topic_1_2_6,
  topic_1_2_7,
  topic_1_2_8,
  topic_1_2_9,
  topic_1_2_10,
  topic_1_2_11,
  topic_1_2_12,
  topic_1_2_13,
  topic_1_2_14,
  topic_1_3_1,
  topic_1_3_2,
  topic_1_3_3,
  topic_1_3_4,
  topic_1_3_5,
  topic_1_3_6,
  topic_1_3_7,
  topic_1_3_8,
  topic_1_3_9,
  topic_1_3_10,
  topic_1_3_11,
  topic_1_3_12,
  topic_1_3_13,
  topic_1_3_14,
  topic_1_3_15,
  topic_1_4_1,
  topic_1_4_2,
  topic_1_4_3,
  topic_1_4_4,
  topic_1_4_5,
  topic_1_4_6,
  topic_1_4_7,
  topic_1_4_8,
  topic_1_4_9,
  topic_1_4_10,
  topic_1_4_11,
  topic_1_4_12,
  topic_1_4_13,
  topic_1_4_14,
  topic_1_4_15,
  topic_1_4_16,
  topic_1_5_1,
  topic_1_5_2,
  topic_1_5_3,
  topic_1_5_9,
  topic_1_5_10,
  topic_1_5_11,
  topic_1_5_12,
  topic_1_5_13,
  topic_1_5_14,
  topic_1_5_15,
  topic_1_5_16,
];

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
