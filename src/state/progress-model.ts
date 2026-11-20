/**
 * Learner progress model: completed topics (topic id → ISO completion time) and the reducer that
 * changes them. Pure, so the rules are unit tested; `progress-context.tsx` saves it across restarts.
 */
import { findTopic, type CompletedTopics } from '@/learning-path/progression';

export type ProgressAction = { type: 'complete'; topicId: string; at: string } | { type: 'reset' };

export function progressReducer(state: CompletedTopics, action: ProgressAction): CompletedTopics {
  switch (action.type) {
    case 'complete':
      // Keep the first completion time when a lesson is reviewed again.
      return state[action.topicId] ? state : { ...state, [action.topicId]: action.at };
    case 'reset':
      return {};
  }
}

/** Saved progress → state: keeps only known curriculum topics with a completion time; null if unusable. */
export function restoreProgress(raw: unknown): CompletedTopics | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const out: Record<string, string> = {};
  for (const [id, at] of Object.entries(raw)) if (typeof at === 'string' && findTopic(id)) out[id] = at;
  return out;
}
