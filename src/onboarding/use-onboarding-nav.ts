import { router } from 'expo-router';

import { getNextStep, STEP_ROUTES, type OnboardingStep } from './flow';

/** Leave onboarding for good: clear the stack so Back can't return into it, and land on the Learning Path. */
export function finishOnboarding() {
  if (router.canDismiss()) router.dismissAll();
  router.replace('/learn');
}

export function useOnboardingNav(step: OnboardingStep) {
  const next = () => {
    const target = getNextStep(step);
    if (target) router.push(STEP_ROUTES[target]);
    else finishOnboarding();
  };

  return { next };
}
