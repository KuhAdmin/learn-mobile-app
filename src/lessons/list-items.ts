/**
 * Decides how a list block is drawn, from the shape of its items (lists are plain strings in the content):
 *   - `tiles`  "Noun – names something." / "People: teacher, mother" / "When? – time: at noon" → label + detail cards
 *   - `qa`     "Does it name something? Noun." → question row with an answer chip (not when a dash follows the
 *              question: "When? – time" labels the question word, so it is a tile)
 *   - `chips`  "I, you, he, she, it" → short word groups as chips
 *   - `rows`   anything else → bulleted / numbered rows
 */
export type ListLayout = 'tiles' | 'qa' | 'chips' | 'rows';

export interface ListEntry {
  text: string;
  label?: string;
  detail?: string;
}

const PAIR = /^([^–:?]{1,24}?\??)\s*(?:\s–\s|:\s)(.+)$/;
const QA = /^(.+\?)\s+(?!–)(.+?)\.?$/;

export function parseList(items: string[]): { layout: ListLayout; entries: ListEntry[] } {
  const qa = items.map((t) => QA.exec(t));
  if (qa.every(Boolean)) {
    return { layout: 'qa', entries: qa.map((m, i) => ({ text: items[i], label: m![1], detail: m![2] })) };
  }
  // An item holding two pairs ("hard – with effort; hardly – almost not") isn't one label + detail: it reads as a row.
  const pairs = items.map((t) => PAIR.exec(t)).map((m) => (m && !m[2].includes(' – ') ? m : null));
  if (pairs.every(Boolean)) {
    return {
      layout: 'tiles',
      entries: pairs.map((m, i) => ({ text: items[i], label: m![1].trim(), detail: m![2].trim().replace(/\.$/, '') })),
    };
  }
  if (items.every((t) => t.length <= 32 && !/[.?]$/.test(t))) {
    return { layout: 'chips', entries: items.map((text) => ({ text })) };
  }
  return { layout: 'rows', entries: items.map((text) => ({ text })) };
}
