/**
 * Pure onboarding model: types, defaults, reducer and selectors.
 * Saved across restarts by `onboarding-context.tsx` (see `src/state/storage.ts`); `restoreOnboarding`
 * validates what was saved.
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
  /** When the learner finished onboarding (ISO time); null = not finished, so launch shows the intro. */
  completedAt: string | null;
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
  completedAt: null,
};

export type OnboardingAction =
  | { type: 'setLevel'; level: Level }
  | { type: 'toggleGoal'; id: string }
  | { type: 'setDailyMinutes'; minutes: number }
  | { type: 'setReminderEnabled'; enabled: boolean }
  | { type: 'setReminderTime'; time: TimeOfDay }
  | { type: 'setName'; name: string }
  | { type: 'complete'; at: string }
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
    case 'complete':
      return state.completedAt ? state : { ...state, completedAt: action.at };
    case 'reset':
      return initialOnboardingState;
  }
}

const LEVELS: readonly Level[] = ['beginner', 'intermediate', 'advanced'];
const FOCUSES: readonly Focus[] = ['grammar', 'vocabulary'];
const isInt = (v: unknown, min: number, max: number): v is number => Number.isInteger(v) && (v as number) >= min && (v as number) <= max;

/**
 * Saved onboarding → state. Each field is kept only if it is valid; anything else (or a field added in a
 * later version) falls back to its default. Returns null when nothing usable was saved.
 */
export function restoreOnboarding(raw: unknown): OnboardingState | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const s = raw as Record<string, unknown>;
  const d = initialOnboardingState;
  const focus = Array.isArray(s.focus) ? s.focus.filter((f): f is Focus => FOCUSES.includes(f as Focus)) : [];
  const goals = Array.isArray(s.goals) ? s.goals.filter((g): g is string => typeof g === 'string') : [];
  const time = s.reminderTime as Partial<TimeOfDay> | undefined;
  return {
    focus: focus.length ? focus : d.focus,
    level: LEVELS.includes(s.level as Level) ? (s.level as Level) : d.level,
    goals: goals.slice(0, MAX_GOALS),
    dailyMinutes: isInt(s.dailyMinutes, 1, 240) ? s.dailyMinutes : d.dailyMinutes,
    reminderEnabled: typeof s.reminderEnabled === 'boolean' ? s.reminderEnabled : d.reminderEnabled,
    reminderTime:
      time && isInt(time.hour, 0, 23) && isInt(time.minute, 0, 59) ? { hour: time.hour, minute: time.minute } : d.reminderTime,
    name: typeof s.name === 'string' ? s.name : d.name,
    completedAt: typeof s.completedAt === 'string' ? s.completedAt : null,
  };
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
