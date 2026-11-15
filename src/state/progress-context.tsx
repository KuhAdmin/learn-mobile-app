/**
 * Learner progress — PHASE 1 MOCK ADAPTER.
 * In-memory only: no backend, no persistence; progress resets when the app restarts.
 * Replace this file with the real progress API/storage later; screens only use `useProgress()`.
 */
import { createContext, useCallback, useContext, useMemo, useReducer, type ReactNode } from 'react';

import { deriveTopicStatuses, type CompletedTopics, type TopicStatus } from '@/learning-path/progression';

type ProgressAction = { type: 'complete'; topicId: string; at: string } | { type: 'reset' };

function progressReducer(state: CompletedTopics, action: ProgressAction): CompletedTopics {
  switch (action.type) {
    case 'complete':
      // Keep the first completion time when a lesson is reviewed again.
      return state[action.topicId] ? state : { ...state, [action.topicId]: action.at };
    case 'reset':
      return {};
  }
}

interface ProgressContextValue {
  completed: CompletedTopics;
  statuses: Record<string, TopicStatus>;
  completeTopic: (topicId: string) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, dispatch] = useReducer(progressReducer, {});
  const statuses = useMemo(() => deriveTopicStatuses(completed), [completed]);
  const completeTopic = useCallback(
    (topicId: string) => dispatch({ type: 'complete', topicId, at: new Date().toISOString() }),
    [],
  );
  const resetProgress = useCallback(() => dispatch({ type: 'reset' }), []);
  const value = useMemo(
    () => ({ completed, statuses, completeTopic, resetProgress }),
    [completed, statuses, completeTopic, resetProgress],
  );
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>');
  return ctx;
}
