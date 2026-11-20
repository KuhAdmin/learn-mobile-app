/**
 * Lesson player flow. A lesson becomes one ordered list of steps:
 *   page screens (see `screens.ts`)
 *   → the page's in-page practice questions (one per step)
 *   → any quick check placed after that page (schema 2.0 dimension assessments)
 *   … → final check questions → result.
 * The reducer moves through that list. A question must be answered before moving on, and an
 * answer is locked once given. Pure, so these rules are unit tested.
 */
import { grade, score, type Answer } from './answers';
import type { Lesson } from './model';
import type { LessonVisuals } from './presentation';
import { lessonScreens, type LessonScreen } from './screens';

export type QuestionContext = 'practice' | 'check' | 'final';

export type LessonStep =
  | { kind: 'screen'; screen: LessonScreen }
  | {
      kind: 'question';
      questionId: string;
      context: QuestionContext;
      /** Heading above the question: page title, check title or final-check title. */
      heading: string;
      /** 1-based position within its group (practice page / check / final check). */
      position: number;
      count: number;
      /** Page the question belongs to or follows (header counter). */
      pageNumber: number;
    }
  | { kind: 'result' };

/** `budget`: screen height budget (see `bodyBudget` in screens.ts); defaults to a ~400×820 phone. */
export function buildSteps(lesson: Lesson, visuals?: LessonVisuals, budget?: number): LessonStep[] {
  const steps: LessonStep[] = [];
  const screens = lessonScreens(lesson, visuals, budget);
  for (const page of lesson.pages) {
    screens.filter((s) => s.page === page).forEach((screen) => steps.push({ kind: 'screen', screen }));
    const practice = page.content.flatMap((b) => (b.type === 'question' ? [b.question_id] : []));
    practice.forEach((questionId, i) =>
      steps.push({
        kind: 'question',
        questionId,
        context: 'practice',
        heading: page.title,
        position: i + 1,
        count: practice.length,
        pageNumber: page.page_number,
      }),
    );
    for (const check of lesson.checkpoints.filter((c) => c.afterPageId === page.page_id)) {
      check.questionIds.forEach((questionId, i) =>
        steps.push({
          kind: 'question',
          questionId,
          context: 'check',
          heading: check.title,
          position: i + 1,
          count: check.questionIds.length,
          pageNumber: page.page_number,
        }),
      );
    }
  }
  const final = lesson.finalCheck;
  final?.questionIds.forEach((questionId, i) =>
    steps.push({
      kind: 'question',
      questionId,
      context: 'final',
      heading: final.title,
      position: i + 1,
      count: final.questionIds.length,
      pageNumber: lesson.pages.length,
    }),
  );
  steps.push({ kind: 'result' });
  return steps;
}

export interface LessonFlowState {
  index: number;
  /** question id → answer. Locked once set. */
  answers: Record<string, Answer>;
  /** Direction of the last step change, so the next screen can slide in from the matching side. */
  lastMove: 'forward' | 'back';
}

export type LessonFlowAction =
  | { type: 'next' }
  | { type: 'back' }
  | { type: 'answer'; questionId: string; answer: Answer }
  | { type: 'restart' };

export const initialLessonFlow: LessonFlowState = { index: 0, answers: {}, lastMove: 'forward' };

/** Whether "back" stays inside the lesson (false = leave the lesson). */
export const canStepBack = (state: LessonFlowState) => state.index > 0;

export function lessonScore(lesson: Lesson, answers: Record<string, Answer>) {
  return score((lesson.finalCheck?.questionIds ?? []).map((id) => lesson.questions[id]), answers);
}

/**
 * What the footer button offers for the step after the current one: the final check or a quick check
 * by name (so assessments don't arrive behind a plain "Continue"), "Finish", or "Continue".
 */
export type NextCta = 'final' | 'check' | 'finish' | 'continue';

export function nextCta(lesson: Lesson, nextStep: LessonStep | undefined): NextCta {
  if (nextStep?.kind === 'question' && nextStep.position === 1) {
    if (nextStep.context === 'final' && lesson.finalCheck) return 'final';
    if (nextStep.context === 'check') return 'check';
  }
  if (nextStep?.kind === 'result' && !lesson.finalCheck) return 'finish';
  return 'continue';
}

export function isAnswerCorrect(lesson: Lesson, questionId: string, answers: Record<string, Answer>) {
  return grade(lesson.questions[questionId], answers[questionId]);
}

export function lessonFlowReducer(steps: LessonStep[]) {
  return (state: LessonFlowState, action: LessonFlowAction): LessonFlowState => {
    const step = steps[state.index];
    switch (action.type) {
      case 'next':
        if (step.kind === 'question' && !state.answers[step.questionId]) return state; // answer first
        if (state.index >= steps.length - 1) return state;
        return { ...state, index: state.index + 1, lastMove: 'forward' };
      case 'back':
        return state.index > 0 ? { ...state, index: state.index - 1, lastMove: 'back' } : state;
      case 'answer':
        if (step.kind !== 'question' || step.questionId !== action.questionId || state.answers[action.questionId]) return state;
        return { ...state, answers: { ...state.answers, [action.questionId]: action.answer } };
      case 'restart':
        return initialLessonFlow;
    }
  };
}
