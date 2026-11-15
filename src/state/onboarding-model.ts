/**
 * Pure onboarding model: types, defaults, reducer and selectors.
 * In-memory only for Phase 1 — no persistence.
 */

export type Focus = 'grammar' | 'vocabulary';
export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface TimeOfDay {
  hour: number; // 0–23
  minute: number; // 0–59
}

export interface OnboardingState {
  focus: Focus[];
  level: Level | null;
  goals: string[];
  dailyMinutes: number;
  reminderEnabled: boolean;
  reminderTime: TimeOfDay;
  name: string;
}

/** Learners pick at most this many main goals. */
export const MAX_GOALS = 2;

export const initialOnboardingState: OnboardingState = {
  // No focus question in the flow: every learner gets both tracks, grammar first (70/30).
  focus: ['grammar', 'vocabulary'],
  level: null,
  goals: [],
  dailyMinutes: 10,
  reminderEnabled: true,
  reminderTime: { hour: 20, minute: 0 },
  name: '',
};

export type OnboardingAction =
  | { type: 'setLevel'; level: Level }
  | { type: 'toggleGoal'; id: string }
  | { type: 'setDailyMinutes'; minutes: number }
  | { type: 'setReminderEnabled'; enabled: boolean }
  | { type: 'setReminderTime'; time: TimeOfDay }
  | { type: 'setName'; name: string }
  | { type: 'reset' };

function toggle<T>(list: readonly T[], item: T): T[] {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
}

export function onboardingReducer(state: OnboardingState, action: OnboardingAction): OnboardingState {
  switch (action.type) {
    case 'setLevel':
      return { ...state, level: action.level };
    case 'toggleGoal': {
      // Adding beyond the limit is ignored; the user must deselect one first.
      const adding = !state.goals.includes(action.id);
      if (adding && state.goals.length >= MAX_GOALS) return state;
      return { ...state, goals: toggle(state.goals, action.id) };
    }
    case 'setDailyMinutes':
      return { ...state, dailyMinutes: action.minutes };
    case 'setReminderEnabled':
      return { ...state, reminderEnabled: action.enabled };
    case 'setReminderTime':
      return { ...state, reminderTime: action.time };
    case 'setName':
      return { ...state, name: action.name };
    case 'reset':
      return initialOnboardingState;
  }
}

/** Grammar is the primary track: when both are chosen, split 70/30 in its favour. */
export function focusSplit(state: Pick<OnboardingState, 'focus'>): Record<Focus, number> {
  const g = state.focus.includes('grammar');
  const v = state.focus.includes('vocabulary');
  if (g && v) return { grammar: 70, vocabulary: 30 };
  if (v) return { grammar: 0, vocabulary: 100 };
  return { grammar: 100, vocabulary: 0 };
}

export function formatTime({ hour, minute }: TimeOfDay): string {
  const suffix = hour < 12 ? 'AM' : 'PM';
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${h12}:${String(minute).padStart(2, '0')} ${suffix}`;
}
