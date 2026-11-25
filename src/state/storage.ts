/**
 * Local learner state, saved across app restarts. The only module that touches storage.
 *
 * `expo-sqlite/localStorage/install` gives a synchronous `localStorage` backed by SQLite on iOS/Android
 * (included in Expo Go); on web it does nothing and the browser's own localStorage is used. Synchronous
 * reads let state start from what was saved, without a loading flash.
 *
 * Stored values are untrusted (older app versions, manual edits): each reader passes a `restore`
 * function that validates them and returns null to fall back to defaults.
 */
import 'expo-sqlite/localStorage/install';

import { useEffect, useReducer, type Reducer } from 'react';

/** Storage keys. Bump the version when a value's shape changes incompatibly. */
export const STORAGE_KEYS = {
  onboarding: 'learn.onboarding.v1',
  progress: 'learn.progress.v1',
  devUnlock: 'learn.devUnlock.v2',
} as const;

const store = (): Storage | undefined => {
  try {
    return globalThis.localStorage ?? undefined;
  } catch {
    return undefined; // storage blocked (e.g. some private browsing modes)
  }
};

export function readJSON(key: string): unknown {
  try {
    const raw = store()?.getItem(key);
    return raw == null ? undefined : JSON.parse(raw);
  } catch {
    return undefined;
  }
}

export function writeJSON(key: string, value: unknown): void {
  try {
    store()?.setItem(key, JSON.stringify(value));
  } catch {
    // Not saving is better than crashing; the app keeps working in memory.
  }
}

/** `useReducer` that starts from the saved value (if `restore` accepts it) and saves every change. */
export function usePersistedReducer<S, A>(
  key: string,
  reducer: Reducer<S, A>,
  initial: S,
  restore: (raw: unknown) => S | null,
) {
  const [state, dispatch] = useReducer(reducer, undefined, () => restore(readJSON(key)) ?? initial);
  useEffect(() => writeJSON(key, state), [key, state]);
  return [state, dispatch] as const;
}
