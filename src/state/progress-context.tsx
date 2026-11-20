/**
 * Learner progress, saved on the device across restarts (see `storage.ts`). No backend yet; screens
 * only use `useProgress()`, so a server-backed version can replace this later.
 *
 * Development builds also have "unlock all lessons" (Profile tab), so new lessons can be checked
 * without completing every earlier one. It is ignored in release builds.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { deriveTopicStatuses, type CompletedTopics, type TopicStatus } from '@/learning-path/progression';

import { progressReducer, restoreProgress } from './progress-model';
import { readJSON, STORAGE_KEYS, usePersistedReducer, writeJSON } from './storage';

interface ProgressContextValue {
  completed: CompletedTopics;
  statuses: Record<string, TopicStatus>;
  completeTopic: (topicId: string) => void;
  resetProgress: () => void;
  /** Development only: every lesson is open. Always false in release builds. */
  devUnlock: boolean;
  setDevUnlock: (on: boolean) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, dispatch] = usePersistedReducer(STORAGE_KEYS.progress, progressReducer, {}, restoreProgress);
  const [devUnlockSaved, setDevUnlock] = useState(() => __DEV__ && readJSON(STORAGE_KEYS.devUnlock) === true);
  useEffect(() => {
    if (__DEV__) writeJSON(STORAGE_KEYS.devUnlock, devUnlockSaved);
  }, [devUnlockSaved]);
  const devUnlock = __DEV__ && devUnlockSaved;

  const statuses = useMemo(() => {
    const derived = deriveTopicStatuses(completed);
    if (!devUnlock) return derived;
    // Every lock check reads these statuses, so opening them here opens every lesson.
    return Object.fromEntries(
      Object.entries(derived).map(([id, s]) => [id, s === 'locked' ? 'available' : s]),
    ) as Record<string, TopicStatus>;
  }, [completed, devUnlock]);

  const completeTopic = useCallback(
    (topicId: string) => dispatch({ type: 'complete', topicId, at: new Date().toISOString() }),
    [dispatch],
  );
  const resetProgress = useCallback(() => dispatch({ type: 'reset' }), [dispatch]);
  const value = useMemo(
    () => ({ completed, statuses, completeTopic, resetProgress, devUnlock, setDevUnlock }),
    [completed, statuses, completeTopic, resetProgress, devUnlock],
  );
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>');
  return ctx;
}
