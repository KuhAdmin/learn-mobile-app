import { describe, expect, it } from '@jest/globals';
import type { Question } from '../model';
import { choiceOrder, matchBankOrder, positionLetter, randomSeed, shuffled } from '../option-order';
import { allLessons } from '../registry';

const questions = allLessons().flatMap((l) => Object.values(l.questions));
const choices = questions.filter((q): q is Extract<Question, { type: 'multiple_choice' }> => q.type === 'multiple_choice');
const matches = questions.filter((q): q is Extract<Question, { type: 'match_the_pair' }> => q.type === 'match_the_pair');
const SEEDS = Array.from({ length: 200 }, (_, i) => (i * 2654435761) >>> 0);

describe('option order', () => {
  it('shuffles without losing, repeating or changing items', () => {
    const items = ['a', 'b', 'c', 'd', 'e'];
    for (const seed of SEEDS.slice(0, 20)) expect([...shuffled(items, seed, 'q')].sort()).toEqual(items);
    expect(items).toEqual(['a', 'b', 'c', 'd', 'e']);
    for (const q of choices)
      expect(
        choiceOrder(q, 7)
          .map((o) => o.id)
          .sort(),
      ).toEqual(q.options.map((o) => o.id).sort());
    for (const q of matches)
      expect(
        matchBankOrder(q, 7)
          .map((r) => r.id)
          .sort(),
      ).toEqual(q.right.map((r) => r.id).sort());
  });

  it('keeps one order for an attempt and changes it between attempts', () => {
    const q = choices.find((c) => c.options.length >= 3)!;
    expect(choiceOrder(q, 42)).toEqual(choiceOrder(q, 42));
    const orders = new Set(
      SEEDS.map((s) =>
        choiceOrder(q, s)
          .map((o) => o.id)
          .join(''),
      ),
    );
    expect(orders.size).toBe(q.options.length === 3 ? 6 : 24); // every arrangement turns up
    // Questions in one attempt are shuffled independently, not all the same way.
    const sameLength = choices.filter((c) => c.options.length === 3).slice(0, 10);
    const arrangement = (c: (typeof sameLength)[number]) =>
      choiceOrder(c, 42)
        .map((o) => c.options.indexOf(o))
        .join('');
    expect(new Set(sameLength.map(arrangement)).size).toBeGreaterThan(1);
  });

  it('spreads the right answer over every position, though content puts it first', () => {
    for (const size of [3, 4]) {
      const group = choices.filter((q) => q.options.length === size);
      const at = Array(size).fill(0);
      for (const seed of SEEDS) for (const q of group) at[choiceOrder(q, seed).findIndex((o) => o.id === q.correctIds[0])]++;
      const total = group.length * SEEDS.length;
      // Uniform is 1/size; allow a little noise either way.
      for (const n of at) expect(Math.abs(n / total - 1 / size)).toBeLessThan(0.03);
    }
  });

  it('spreads match answers so the bank order gives nothing away', () => {
    let inLeftOrder = 0;
    for (const seed of SEEDS)
      for (const q of matches) {
        const bank = matchBankOrder(q, seed).map((r) => r.id);
        if (q.left.every((l, i) => q.pairs[l.id] === bank[i])) inLeftOrder++;
      }
    // With three pairs, one order in six lines up with the left column by chance.
    expect(inLeftOrder / (matches.length * SEEDS.length)).toBeLessThan(0.25);
  });

  it('letters options by position, and makes 32-bit seeds', () => {
    expect([0, 1, 2, 3].map(positionLetter)).toEqual(['A', 'B', 'C', 'D']);
    const seed = randomSeed();
    expect(Number.isInteger(seed) && seed >= 0 && seed < 2 ** 32).toBe(true);
  });

  it('has no option or explanation that depends on where an option is shown', () => {
    // Options are shuffled on screen (CLAUDE.md), so "all of the above" or "option B" would point at the wrong thing.
    const POSITIONAL =
      /\b(all|none) of the above\b|\b(both|either|neither) [A-D] (and|or|nor) [A-D]\b|\boption [A-D]\b|\(([A-D])\)|\banswer [A-D]\b/i;
    const offenders = choices.flatMap((q) =>
      [q.prompt, q.explanation, ...q.options.map((o) => o.text)].filter((t) => POSITIONAL.test(t)).map((t) => `${q.id}: ${t}`),
    );
    expect(offenders).toEqual([]);
  });
});
