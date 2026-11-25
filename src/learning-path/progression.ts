/**
 * Learning Path rules and progress maths. Pure functions (no React) so they can be unit tested
 * and swapped for server-driven rules later. Curriculum data lives in `@/data/curriculum`.
 */
import {
  CURRICULUM,
  type CurriculumStage,
  type CurriculumSubStage,
  type CurriculumTopic,
} from '@/data/curriculum';
import { hasLesson } from '@/lessons/registry';

/**
 * The curriculum as learners see it: only topics that have a lesson, without empty chapters or courses.
 * New lessons appear on the path as soon as they are registered in `src/lessons/registry.ts`.
 */
export const PATH_CURRICULUM: readonly CurriculumStage[] = CURRICULUM.map((stage) => ({
  ...stage,
  subStages: stage.subStages
    .map((subStage) => ({ ...subStage, topics: subStage.topics.filter((t) => hasLesson(t.id)) }))
    .filter((subStage) => subStage.topics.length > 0),
})).filter((stage) => stage.subStages.length > 0);

export type TopicStatus = 'locked' | 'available' | 'current' | 'completed';

/** topicId → ISO completion time. Learner progress is stored per topic, separate from curriculum. */
export type CompletedTopics = Readonly<Record<string, string>>;

export interface ProgressionRules {
  /** Where a new learner starts (onboarding/placement may change this later). */
  entryTopicId: string;
  /** How many topics after the current one are open without completing it first. */
  availableAhead: number;
}

/** Product rules: strictly sequential, starting at the first lesson on the path. */
export const PROGRESSION_RULES: ProgressionRules = {
  entryTopicId: PATH_CURRICULUM[0].subStages[0].topics[0].id,
  availableAhead: 0,
};

export interface TopicRef {
  topic: CurriculumTopic;
  subStage: CurriculumSubStage;
  stage: CurriculumStage;
  /** 0-based position across the whole curriculum. */
  index: number;
}

/** Every topic on the path (see `PATH_CURRICULUM`), in order, with its parents. */
export const ALL_TOPICS: readonly TopicRef[] = PATH_CURRICULUM.flatMap((stage) =>
  stage.subStages.flatMap((subStage) => subStage.topics.map((topic) => ({ topic, subStage, stage }))),
).map((ref, index) => ({ ...ref, index }));

const BY_ID = new Map(ALL_TOPICS.map((ref) => [ref.topic.id, ref]));

export function findTopic(id: string): TopicRef | undefined {
  return BY_ID.get(id);
}

/**
 * Sub-stages are shown to learners as numbered chapters, counted across the whole curriculum (1.1 → Chapter 1,
 * 2.1 → Chapter 6), so a chapter keeps its number as lessons are added.
 */
const CHAPTERS = new Map(CURRICULUM.flatMap((stage) => stage.subStages).map((sub, i) => [sub.id, i + 1]));

export function chapterNumber(subStageId: string): number {
  return CHAPTERS.get(subStageId) ?? 0;
}

/** Status for every topic, derived only from completion records and the rules. */
export function deriveTopicStatuses(
  completed: CompletedTopics,
  rules: ProgressionRules = PROGRESSION_RULES,
): Record<string, TopicStatus> {
  const statuses: Record<string, TopicStatus> = {};
  const entry = BY_ID.get(rules.entryTopicId)?.index ?? 0;
  let currentIndex = -1;

  for (const { topic, index } of ALL_TOPICS) {
    if (completed[topic.id]) {
      statuses[topic.id] = 'completed';
    } else if (currentIndex === -1 && index >= entry) {
      statuses[topic.id] = 'current';
      currentIndex = index;
    } else if (currentIndex !== -1 && index - currentIndex <= rules.availableAhead) {
      statuses[topic.id] = 'available';
    } else {
      statuses[topic.id] = 'locked';
    }
  }
  return statuses;
}

/** The learner's current topic, or `undefined` once everything is complete. */
export function currentTopicId(statuses: Record<string, TopicStatus>): string | undefined {
  return ALL_TOPICS.find((ref) => statuses[ref.topic.id] === 'current')?.topic.id;
}

export interface Progress {
  done: number;
  total: number;
  /** 0–1. */
  fraction: number;
}

function progressOf(topics: readonly CurriculumTopic[], completed: CompletedTopics): Progress {
  const done = topics.filter((t) => completed[t.id]).length;
  return { done, total: topics.length, fraction: topics.length ? done / topics.length : 0 };
}

export function subStageProgress(subStage: CurriculumSubStage, completed: CompletedTopics): Progress {
  return progressOf(subStage.topics, completed);
}

export function stageProgress(stage: CurriculumStage, completed: CompletedTopics): Progress {
  return progressOf(
    stage.subStages.flatMap((s) => s.topics),
    completed,
  );
}

export function overallProgress(completed: CompletedTopics): Progress {
  return progressOf(
    ALL_TOPICS.map((r) => r.topic),
    completed,
  );
}

/**
 * Stage-level state for banners: `current` holds the learner's current topic,
 * `completed` has every topic done, `locked` has nothing open yet.
 */
export function stageStatus(
  stage: CurriculumStage,
  statuses: Record<string, TopicStatus>,
): 'completed' | 'current' | 'open' | 'locked' {
  const topics = stage.subStages.flatMap((s) => s.topics.map((t) => statuses[t.id]));
  if (topics.every((s) => s === 'completed')) return 'completed';
  if (topics.includes('current')) return 'current';
  if (topics.some((s) => s !== 'locked')) return 'open';
  return 'locked';
}
