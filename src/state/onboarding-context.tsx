import { createContext, useContext, type Dispatch, type ReactNode } from 'react';

import {
  initialOnboardingState,
  onboardingReducer,
  restoreOnboarding,
  type OnboardingAction,
  type OnboardingState,
} from './onboarding-model';
import { STORAGE_KEYS, usePersistedReducer } from './storage';

interface OnboardingContextValue {
  state: OnboardingState;
  dispatch: Dispatch<OnboardingAction>;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

/** Onboarding answers and whether onboarding is finished, saved across restarts (see `storage.ts`). */
export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = usePersistedReducer(STORAGE_KEYS.onboarding, onboardingReducer, initialOnboardingState, restoreOnboarding);
  return <OnboardingContext.Provider value={{ state, dispatch }}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding(): OnboardingContextValue {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error('useOnboarding must be used inside <OnboardingProvider>');
  return ctx;
}
