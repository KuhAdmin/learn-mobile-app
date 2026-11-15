/** Ordered question-flow steps (after the intro carousel). */
export const ONBOARDING_STEPS = [
  'level',
  'goals',
  'daily-time',
  'reminder',
  'plan',
  'benefits',
  'name',
] as const;

export type OnboardingStep = (typeof ONBOARDING_STEPS)[number];

export const STEP_ROUTES = {
  level: '/onboarding/level',
  goals: '/onboarding/goals',
  'daily-time': '/onboarding/daily-time',
  reminder: '/onboarding/reminder',
  plan: '/onboarding/plan',
  benefits: '/onboarding/benefits',
  name: '/onboarding/name',
} as const satisfies Record<OnboardingStep, string>;

export const FIRST_STEP: OnboardingStep = 'level';

/** Next step, or `null` when onboarding is finished. */
export function getNextStep(current: OnboardingStep): OnboardingStep | null {
  return ONBOARDING_STEPS[ONBOARDING_STEPS.indexOf(current) + 1] ?? null;
}
