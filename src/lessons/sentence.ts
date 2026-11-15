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
      let idx = pending.indexOf(word);
      if (idx === -1) idx = pending.findIndex((h) => h.toLowerCase() === word.toLowerCase());
      if (idx === -1) return { text, tone: null };
      pending.splice(idx, 1);
      return { text, tone: n++ % 2 === 0 ? 'teal' : 'salmon' };
    });
}

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
