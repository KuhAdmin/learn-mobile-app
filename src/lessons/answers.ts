/**
 * Learner answers and grading for every question type. Pure, so answer rules are unit tested.
 * Typed answers ignore case, surrounding/extra spaces and end punctuation ("Noun." = "noun").
 */
import type { Question } from './model';

export type Answer =
  | { kind: 'choice'; id: string }
  | { kind: 'bool'; value: boolean }
  | { kind: 'text'; values: string[] }
  | { kind: 'pairs'; pairs: Record<string, string> }
  | { kind: 'reveal' };

export const normalizeTyped = (s: string) =>
  s
    .toLowerCase()
    .replace(/[“”"‘’'.,!?;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const matches = (typed: string | undefined, accepted: string[]) =>
  typed !== undefined && accepted.some((a) => normalizeTyped(a) === normalizeTyped(typed));

/** "The, is, in, the" → {the, is, in}. "and" is a joiner, not an answer word. */
const wordSet = (s: string) => new Set(normalizeTyped(s).split(' ').filter((w) => w && w !== 'and'));

/** An identify answer that is a comma-separated word list ("small, dog, runs, quickly"). */
export const isWordList = (q: Question) => q.type === 'identify' && q.accepted.some((a) => a.includes(','));

/** Word-list answers match in any order, with repeats, commas or "and" ignored. */
const matchesWords = (typed: string | undefined, accepted: string[]) => {
  if (typed === undefined) return false;
  const words = wordSet(typed);
  return accepted.some((a) => {
    const want = wordSet(a);
    return want.size === words.size && [...want].every((w) => words.has(w));
  });
};

/** true/false = right/wrong; null = not scored (flash cards) or no answer yet. */
export function grade(q: Question, a: Answer | undefined): boolean | null {
  if (!a) return null;
  switch (q.type) {
    case 'multiple_choice':
      return a.kind === 'choice' && q.correctIds.includes(a.id);
    case 'true_false':
      return a.kind === 'bool' && a.value === q.correct;
    case 'identify':
      return a.kind === 'text' && (matches(a.values[0], q.accepted) || (isWordList(q) && matchesWords(a.values[0], q.accepted)));
    case 'sentence_correction':
      return a.kind === 'text' && matches(a.values[0], q.accepted);
    case 'fill_blank':
      return a.kind === 'text' && q.blanks.every((b, i) => matches(a.values[i], b.accepted));
    case 'match_the_pair':
      return a.kind === 'pairs' && q.left.every((l) => a.pairs[l.id] === q.pairs[l.id]);
    case 'flash_card':
      return null;
  }
}

/** Score over the questions that are graded (flash cards don't count). */
export function score(questions: Question[], answers: Record<string, Answer>) {
  const graded = questions.filter((q) => q.type !== 'flash_card');
  return { correct: graded.filter((q) => grade(q, answers[q.id]) === true).length, total: graded.length };
}

/** The answer to show after a wrong attempt, for typed questions. */
export function expectedText(q: Question): string | undefined {
  switch (q.type) {
    case 'identify':
    case 'sentence_correction':
      return q.accepted[0];
    case 'fill_blank':
      return q.blanks.map((b) => b.accepted[0]).join(', ');
    default:
      return undefined;
  }
}
