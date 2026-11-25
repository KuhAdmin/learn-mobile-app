/**
 * Which curriculum topics have lesson content. Lesson files are named by their content `topic_id`
 * and mapped onto Learning Path topic ids (`s1.1.01`):
 *   schema 1.0: `1.1.1.EP001` (sub-stage 1.1, topic 1, episode 1)
 *   schema 2.0: `1-1-2` (sub-stage 1.1, topic 2)
 * Add new lessons to LESSON_LOADERS. Only topics listed here appear on the Learning Path.
 *
 * Lessons load on demand: a file is parsed and validated only when its topic is opened, and only the
 * last few are kept, so memory stays small however many lessons the app ships.
 */
import { loadLesson, type Lesson } from './model';

// Metro needs literal require paths, so each lesson file is listed once here, in path order.
const LESSON_LOADERS: Record<string, () => unknown> = {
  's1.1.01': () => require('./content/1.1.1.EP001.json'),
  's1.1.02': () => require('./content/1-1-2.json'),
  's1.1.03': () => require('./content/1-1-3.json'),
  's1.1.04': () => require('./content/1-1-4.json'),
  's1.1.05': () => require('./content/1-1-5.json'),
  's1.1.06': () => require('./content/1-1-6.json'),
  's1.1.07': () => require('./content/1-1-7.json'),
  's1.2.01': () => require('./content/1-2-1.json'),
  's1.2.02': () => require('./content/1-2-2.json'),
  's1.2.03': () => require('./content/1-2-3.json'),
  's1.2.04': () => require('./content/1-2-4.json'),
  's1.2.05': () => require('./content/1-2-5.json'),
  's1.2.06': () => require('./content/1-2-6.json'),
  's1.2.07': () => require('./content/1-2-7.json'),
  's1.2.08': () => require('./content/1-2-8.json'),
  's1.2.09': () => require('./content/1-2-9.json'),
  's1.2.10': () => require('./content/1-2-10.json'),
  's1.2.11': () => require('./content/1-2-11.json'),
  's1.2.12': () => require('./content/1-2-12.json'),
  's1.2.13': () => require('./content/1-2-13.json'),
  's1.2.14': () => require('./content/1-2-14.json'),
  's1.3.01': () => require('./content/1-3-1.json'),
  's1.3.02': () => require('./content/1-3-2.json'),
  's1.3.03': () => require('./content/1-3-3.json'),
  's1.3.04': () => require('./content/1-3-4.json'),
  's1.3.05': () => require('./content/1-3-5.json'),
  's1.3.06': () => require('./content/1-3-6.json'),
  's1.3.07': () => require('./content/1-3-7.json'),
  's1.3.08': () => require('./content/1-3-8.json'),
  's1.3.09': () => require('./content/1-3-9.json'),
  's1.3.10': () => require('./content/1-3-10.json'),
  's1.3.11': () => require('./content/1-3-11.json'),
  's1.3.12': () => require('./content/1-3-12.json'),
  's1.3.13': () => require('./content/1-3-13.json'),
  's1.3.14': () => require('./content/1-3-14.json'),
  's1.3.15': () => require('./content/1-3-15.json'),
  's1.4.01': () => require('./content/1-4-1.json'),
  's1.4.02': () => require('./content/1-4-2.json'),
  's1.4.03': () => require('./content/1-4-3.json'),
  's1.4.04': () => require('./content/1-4-4.json'),
  's1.4.05': () => require('./content/1-4-5.json'),
  's1.4.06': () => require('./content/1-4-6.json'),
  's1.4.07': () => require('./content/1-4-7.json'),
  's1.4.08': () => require('./content/1-4-8.json'),
  's1.4.09': () => require('./content/1-4-9.json'),
  's1.4.10': () => require('./content/1-4-10.json'),
  's1.4.11': () => require('./content/1-4-11.json'),
  's1.4.12': () => require('./content/1-4-12.json'),
  's1.4.13': () => require('./content/1-4-13.json'),
  's1.4.14': () => require('./content/1-4-14.json'),
  's1.4.15': () => require('./content/1-4-15.json'),
  's1.4.16': () => require('./content/1-4-16.json'),
  's1.5.01': () => require('./content/1-5-1.json'),
  's1.5.02': () => require('./content/1-5-2.json'),
  's1.5.03': () => require('./content/1-5-3.json'),
  's1.5.09': () => require('./content/1-5-9.json'),
  's1.5.10': () => require('./content/1-5-10.json'),
  's1.5.11': () => require('./content/1-5-11.json'),
  's1.5.12': () => require('./content/1-5-12.json'),
  's1.5.13': () => require('./content/1-5-13.json'),
  's1.5.14': () => require('./content/1-5-14.json'),
  's1.5.15': () => require('./content/1-5-15.json'),
  's1.5.16': () => require('./content/1-5-16.json'),
  's2.1.01': () => require('./content/2-1-1.json'),
  's2.1.02': () => require('./content/2-1-2.json'),
  's2.1.03': () => require('./content/2-1-3.json'),
  's2.1.04': () => require('./content/2-1-4.json'),
  's2.1.05': () => require('./content/2-1-5.json'),
  's2.1.06': () => require('./content/2-1-6.json'),
  's2.1.07': () => require('./content/2-1-7.json'),
  's2.1.08': () => require('./content/2-1-8.json'),
  's2.1.09': () => require('./content/2-1-9.json'),
  's2.1.10': () => require('./content/2-1-10.json'),
  's2.1.11': () => require('./content/2-1-11.json'),
  's2.1.12': () => require('./content/2-1-12.json'),
  's2.1.13': () => require('./content/2-1-13.json'),
  's2.1.14': () => require('./content/2-1-14.json'),
  's2.2.01': () => require('./content/2-2-1.json'),
  's2.2.02': () => require('./content/2-2-2.json'),
  's2.2.03': () => require('./content/2-2-3.json'),
  's2.2.04': () => require('./content/2-2-4.json'),
  's2.2.05': () => require('./content/2-2-5.json'),
  's2.2.06': () => require('./content/2-2-6.json'),
  's2.2.07': () => require('./content/2-2-7.json'),
  's2.2.08': () => require('./content/2-2-8.json'),
  's2.2.09': () => require('./content/2-2-9.json'),
  's2.2.10': () => require('./content/2-2-10.json'),
  's2.2.11': () => require('./content/2-2-11.json'),
  's2.2.12': () => require('./content/2-2-12.json'),
  's2.2.13': () => require('./content/2-2-13.json'),
  's2.2.14': () => require('./content/2-2-14.json'),
  's2.2.15': () => require('./content/2-2-15.json'),
  's2.2.16': () => require('./content/2-2-16.json'),
  's2.2.17': () => require('./content/2-2-17.json'),
  's2.3.01': () => require('./content/2-3-1.json'),
  's2.3.02': () => require('./content/2-3-2.json'),
  's2.3.03': () => require('./content/2-3-3.json'),
  's2.3.04': () => require('./content/2-3-4.json'),
  's2.3.05': () => require('./content/2-3-5.json'),
  's2.3.06': () => require('./content/2-3-6.json'),
  's2.3.07': () => require('./content/2-3-7.json'),
  's2.3.08': () => require('./content/2-3-8.json'),
  's2.3.09': () => require('./content/2-3-9.json'),
  's2.3.10': () => require('./content/2-3-10.json'),
  's2.3.11': () => require('./content/2-3-11.json'),
  's2.3.12': () => require('./content/2-3-12.json'),
  's2.3.13': () => require('./content/2-3-13.json'),
  's2.3.14': () => require('./content/2-3-14.json'),
  's2.4.01': () => require('./content/2-4-1.json'),
  's2.4.02': () => require('./content/2-4-2.json'),
  's2.4.03': () => require('./content/2-4-3.json'),
  's2.4.04': () => require('./content/2-4-4.json'),
  's2.4.05': () => require('./content/2-4-5.json'),
  's2.4.06': () => require('./content/2-4-6.json'),
  's2.4.07': () => require('./content/2-4-7.json'),
  's2.4.08': () => require('./content/2-4-8.json'),
  's2.4.09': () => require('./content/2-4-9.json'),
  's2.4.10': () => require('./content/2-4-10.json'),
  's2.4.11': () => require('./content/2-4-11.json'),
  's2.4.12': () => require('./content/2-4-12.json'),
  's2.4.13': () => require('./content/2-4-13.json'),
  's2.4.14': () => require('./content/2-4-14.json'),
  's2.4.15': () => require('./content/2-4-15.json'),
  's2.4.16': () => require('./content/2-4-16.json'),
  's2.4.17': () => require('./content/2-4-17.json'),
};

/** `1.1.1.EP001` / `1-1-2` → `s1.1.01` / `s1.1.02`. */
export function curriculumTopicId(contentTopicId: string): string | undefined {
  const m = /^(\d+)[.-](\d+)[.-](\d+)(?:\.EP\d+)?$/.exec(contentTopicId);
  return m ? `s${m[1]}.${m[2]}.${m[3].padStart(2, '0')}` : undefined;
}

/** Whether a curriculum topic has a lesson (no lesson file is read). */
export function hasLesson(topicId: string): boolean {
  return Object.prototype.hasOwnProperty.call(LESSON_LOADERS, topicId);
}

/** Learning Path topic ids that have lessons, in path order. */
export const LESSON_TOPIC_IDS: readonly string[] = Object.keys(LESSON_LOADERS);

/** How many validated lessons stay in memory (the one open now, plus the last one). */
const CACHE_SIZE = 2;
const cache = new Map<string, Lesson>();

export function lessonForTopic(topicId: string): Lesson | undefined {
  const cached = cache.get(topicId);
  if (cached) {
    // Most recently used goes last.
    cache.delete(topicId);
    cache.set(topicId, cached);
    return cached;
  }
  const load = LESSON_LOADERS[topicId];
  if (!load) return undefined;
  const lesson = loadLesson(load());
  cache.set(topicId, lesson);
  while (cache.size > CACHE_SIZE) cache.delete(cache.keys().next().value as string);
  return lesson;
}

/** Every lesson the app plays, in path order. Loads them all: for tests and tools, not screens. */
export function allLessons(): Lesson[] {
  return LESSON_TOPIC_IDS.map((id) => loadLesson(LESSON_LOADERS[id]()));
}
