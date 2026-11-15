import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';

import {
  initialOnboardingState,
  onboardingReducer,
  type OnboardingAction,
  type OnboardingState,
} from './onboarding-model';

interface OnboardingContextValue {
  state: OnboardingState;
  dispatch: Dispatch<OnboardingAction>;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(onboardingReducer, initialOnboardingState);
  return <OnboardingContext.Provider value={{ state, dispatch }}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding(): OnboardingContextValue {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error('useOnboarding must be used inside <OnboardingProvider>');
  return ctx;
}
