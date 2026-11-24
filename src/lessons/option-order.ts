/**
 * Display order for answer options. Generated lessons almost always list the right answer first, so the
 * player shows options in a shuffled order instead of content order. Answers still record option ids,
 * so grading never depends on what is shown where.
 *
 * Each lesson attempt gets one seed (`randomSeed`). The order is derived from that seed and the
 * question id, so it stays fixed for the whole attempt (re-renders, going back) and changes on the next.
 * Everything here except `randomSeed` is pure, so the rules are unit tested.
 */
import type { Question } from './model';

/** A seed for one lesson attempt. The only impure function in this module. */
export const randomSeed = (): number => Math.floor(Math.random() * 0x100000000);

/** 32-bit FNV-1a hash of the seed and a key, so every question gets its own stream. */
function hash(seed: number, key: string): number {
  let h = (0x811c9dc5 ^ seed) >>> 0;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

/** mulberry32: a small, fast seeded generator returning numbers in [0, 1). */
function generator(state: number): () => number {
  let a = state >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A Fisher–Yates permutation of `items`, fixed for a given seed and key. Never changes `items`. */
export function shuffled<T>(items: readonly T[], seed: number, key: string): T[] {
  const out = [...items];
  const next = generator(hash(seed, key));
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

type ChoiceQuestion = Extract<Question, { type: 'multiple_choice' }>;
type MatchQuestion = Extract<Question, { type: 'match_the_pair' }>;

/** A multiple-choice question's options in the order this attempt shows them. */
export const choiceOrder = (q: ChoiceQuestion, seed: number) => shuffled(q.options, seed, `${q.id}:options`);

/** A match-the-pair question's answer bank in the order this attempt shows it. */
export const matchBankOrder = (q: MatchQuestion, seed: number) => shuffled(q.right, seed, `${q.id}:bank`);

/** Option letters by display position (A, B, C …), so they always read in order down the screen. */
export const positionLetter = (index: number) => String.fromCharCode(65 + index);
