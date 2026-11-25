/**
 * Practice round: a short mixed set of questions from lessons the learner has completed. Pure (the lesson
 * loader and random source are passed in), so it is unit tested. Only the sampled lessons are loaded.
 */
import type { Lesson, Question } from '@/lessons/model';

export const PRACTICE_SIZE = 10;
/** At most this many lessons feed one round, so a round loads only a few lesson files. */
export const PRACTICE_LESSONS = 5;

export interface PracticeItem {
  topicId: string;
  lessonTitle: string;
  question: Question;
}

function shuffled<T>(items: readonly T[], random: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Up to `PRACTICE_SIZE` questions from up to `PRACTICE_LESSONS` random completed lessons, spread evenly
 * across them, in a mixed order. Empty when nothing is completed.
 */
export function pickPracticeQuestions(
  completedTopicIds: readonly string[],
  load: (topicId: string) => Lesson | undefined,
  random: () => number = Math.random,
): PracticeItem[] {
  const lessons = shuffled(completedTopicIds, random)
    .slice(0, PRACTICE_LESSONS)
    .map((topicId) => ({ topicId, lesson: load(topicId) }))
    .filter((l): l is { topicId: string; lesson: Lesson } => l.lesson !== undefined);
  if (!lessons.length) return [];

  const pools = lessons.map(({ topicId, lesson }) =>
    shuffled(Object.values(lesson.questions), random).map((question) => ({
      topicId,
      lessonTitle: lesson.lessonTitle,
      question,
    })),
  );
  // Round-robin over the lessons, so each contributes about the same number of questions.
  const picked: PracticeItem[] = [];
  for (let round = 0; picked.length < PRACTICE_SIZE && pools.some((p) => p.length > round); round++)
    for (const pool of pools) if (pool[round] && picked.length < PRACTICE_SIZE) picked.push(pool[round]);
  return shuffled(picked, random);
}
