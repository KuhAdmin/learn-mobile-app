/**
 * Turns an example sentence into word chips. Highlighted words get alternating teal / salmon chips
 * in sentence order (as in the lesson mockups); other words render plain. Punctuation stays attached
 * to its word ("sings." is one chip).
 */
export type ChipTone = 'teal' | 'salmon';

export interface WordToken {
  text: string;
  tone: ChipTone | null;
}

// Plain ASCII classes (lesson content is English) rather than \p{L}, for Hermes compatibility.
const bare = (word: string) => word.replace(/^[^A-Za-z0-9'’]+|[^A-Za-z0-9'’]+$/g, '');

export function tokenizeSentence(sentence: string, highlight: readonly string[]): WordToken[] {
  // Each highlight entry is used once, so a word listed twice highlights two occurrences.
  const pending = [...highlight];
  let n = 0;
  return sentence
    .split(/\s+/)
    .filter(Boolean)
    .map((text) => {
      const word = bare(text);
      // Exact fragment first ("Wow!"), then the word without punctuation, then any case.
      let idx = pending.indexOf(text);
      if (idx === -1) idx = pending.indexOf(word);
      if (idx === -1) idx = pending.findIndex((h) => bare(h).toLowerCase() === word.toLowerCase());
      if (idx === -1) return { text, tone: null };
      pending.splice(idx, 1);
      return { text, tone: n++ % 2 === 0 ? 'teal' : 'salmon' };
    });
}

/**
 * Consecutive examples that repeat the same sentence with different highlights ("These are content
 * words" / "These are function words") are shown as one sentence with one tone per group.
 */
export function groupExamples<T extends { sentence: string }>(examples: readonly T[]): T[][] {
  const groups: T[][] = [];
  for (const e of examples) {
    const last = groups[groups.length - 1];
    if (last && last[0].sentence === e.sentence) last.push(e);
    else groups.push([e]);
  }
  return groups;
}

/** Chips for a grouped example: words highlighted by group i get `toneAt(i)`. */
export function tokenizeGroups(sentence: string, highlights: readonly (readonly string[])[]): WordToken[] {
  const pending = highlights.map((h) => [...h]);
  return sentence
    .split(/\s+/)
    .filter(Boolean)
    .map((text) => {
      const word = bare(text);
      for (let g = 0; g < pending.length; g++) {
        const list = pending[g];
        let idx = list.indexOf(text);
        if (idx === -1) idx = list.indexOf(word);
        if (idx === -1) idx = list.findIndex((h) => bare(h).toLowerCase() === word.toLowerCase());
        if (idx !== -1) {
          list.splice(idx, 1);
          return { text, tone: toneAt(g) };
        }
      }
      return { text, tone: null };
    });
}

/** "The, are, in, the" → "The, are, in": a group's highlighted words for its legend row. */
export const highlightList = (highlight: readonly string[]) =>
  highlight.filter((w, i) => highlight.findIndex((x) => bare(x).toLowerCase() === bare(w).toLowerCase()) === i).join(', ');

/** Splits chips into sentences ("I drink water. Please water the plant." → two groups). */
export function splitTokenSentences(tokens: readonly WordToken[]): WordToken[][] {
  const groups: WordToken[][] = [[]];
  tokens.forEach((t, i) => {
    groups[groups.length - 1].push(t);
    if (/[.!?]["”’']?$/.test(t.text) && i < tokens.length - 1) groups.push([]);
  });
  return groups;
}

/** Alternating tone for annotated phrase chips (index 0 = teal). */
export const toneAt = (index: number): ChipTone => (index % 2 === 0 ? 'teal' : 'salmon');
