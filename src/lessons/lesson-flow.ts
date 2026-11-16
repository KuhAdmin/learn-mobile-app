/**
 * Lesson player state: content screens (pages, split by `screens.ts`) → knowledge check → result. Pure reducer so the
 * navigation rules (no skipping unanswered questions, one answer per question) are unit tested.
 */
import type { GrammarLesson, QuizQuestion } from './schema';
import { lessonScreens } from './screens';

export type LessonStep =
  /** `index` is a screen index (see `lessonScreens`), not a JSON page index. */
  | { kind: 'page'; index: number }
  | { kind: 'quiz'; index: number }
  | { kind: 'result' };

export interface LessonFlowState {
  step: LessonStep;
  /** question_id → chosen option_id. Locked once set. */
  answers: Record<string, string>;
  /** Direction of the last step change, so the next screen can slide in from the matching side. */
  lastMove: 'forward' | 'back';
}

export type LessonFlowAction =
  | { type: 'next' }
  | { type: 'back' }
  | { type: 'answer'; questionId: string; optionId: string }
  | { type: 'restart' };

export const initialLessonFlow: LessonFlowState = { step: { kind: 'page', index: 0 }, answers: {}, lastMove: 'forward' };

export const isCorrect = (q: QuizQuestion, optionId: string | undefined) =>
  optionId !== undefined && q.correct_answers.includes(optionId);

export function lessonScore(lesson: GrammarLesson, answers: Record<string, string>) {
  const questions = lesson.knowledge_check.questions;
  return { correct: questions.filter((q) => isCorrect(q, answers[q.question_id])).length, total: questions.length };
}

/** Whether "back" stays inside the lesson (false = leave the lesson). */
export const canStepBack = (state: LessonFlowState) => !(state.step.kind === 'page' && state.step.index === 0);

export function lessonFlowReducer(lesson: GrammarLesson) {
  const lastPage = lessonScreens(lesson).length - 1;
  const questions = lesson.knowledge_check.questions;

  const move = (state: LessonFlowState, action: LessonFlowAction): LessonFlowState => {
    const { step } = state;
    switch (action.type) {
      case 'next':
        if (step.kind === 'page') {
          if (step.index < lastPage) return { ...state, step: { kind: 'page', index: step.index + 1 } };
          return { ...state, step: questions.length ? { kind: 'quiz', index: 0 } : { kind: 'result' } };
        }
        if (step.kind === 'quiz') {
          if (!state.answers[questions[step.index].question_id]) return state; // answer first
          if (step.index < questions.length - 1) return { ...state, step: { kind: 'quiz', index: step.index + 1 } };
          return { ...state, step: { kind: 'result' } };
        }
        return state;
      case 'back':
        if (step.kind === 'page') return step.index > 0 ? { ...state, step: { kind: 'page', index: step.index - 1 } } : state;
        if (step.kind === 'quiz')
          return { ...state, step: step.index > 0 ? { kind: 'quiz', index: step.index - 1 } : { kind: 'page', index: lastPage } };
        return { ...state, step: questions.length ? { kind: 'quiz', index: questions.length - 1 } : { kind: 'page', index: lastPage } };
      case 'answer': {
        if (step.kind !== 'quiz' || state.answers[action.questionId]) return state;
        const q = questions[step.index];
        if (q.question_id !== action.questionId || !q.options.some((o) => o.option_id === action.optionId)) return state;
        return { ...state, answers: { ...state.answers, [action.questionId]: action.optionId } };
      }
      case 'restart':
        return initialLessonFlow;
    }
  };

  return (state: LessonFlowState, action: LessonFlowAction): LessonFlowState => {
    const next = move(state, action);
    if (next === state || next.step === state.step || action.type === 'restart') return next;
    return { ...next, lastMove: action.type === 'back' ? 'back' : 'forward' };
  };
}
