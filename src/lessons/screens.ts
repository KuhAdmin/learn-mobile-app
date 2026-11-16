/**
 * Splits lesson pages into phone-sized screens so none needs scrolling (UI rules):
 *   1) title + intro text + picture (below the text)
 *   2…) title + the remaining blocks, packed by estimated height, Key Takeaway on the last screen
 * - The Key Takeaway never sits alone when a block can move down to join it.
 * - Sentence-picture examples ("A Word Can Change Its Job") keep their pictures with the intro and
 *   break at the explanation.
 * - A summary page ends with its picture (mascot) + Key Takeaway on their own screen.
 * - In-page practice questions are not drawn on screens; the flow turns them into question steps.
 */
import type { LessonVisuals } from './presentation';
import { parseList } from './list-items';
import type { ContentBlock, Lesson, LessonPage } from './model';

/** Which part of a split example block a screen shows. */
export type ExamplePart = 'all' | 'sentences' | 'explanation';

export interface LessonScreen {
  page: LessonPage;
  pageIndex: number;
  /** 0 = first screen of the page. */
  part: number;
  parts: number;
  blocks: ContentBlock[];
  /** For an example block split across screens (sentence pictures vs explanation). */
  examplePart: ExamplePart;
  /** The page's main picture sits with this screen's first block. */
  showArt: boolean;
  showTakeaway: boolean;
}

/**
 * Height budget (pt) for blocks under the page head, from the real window. Measured from the rendered
 * lesson UI: header 56, content top padding 8, lesson pill + gap 42, title→first block gap 24,
 * footer (Continue 52 + padding) and an 8pt safety margin.
 */
export function bodyBudget(windowHeight: number, insetTop = 0, insetBottom = 0): number {
  const header = 56 + 8 + 42 + 24;
  const footer = 52 + 12 + Math.max(insetBottom, 16) + 8;
  return windowHeight - insetTop - header - footer - 8;
}

/** Budget for a ~400×820 window without insets (tests and defaults). */
export const DEFAULT_BUDGET = bodyBudget(820);
const GAP = 24;
const TITLE_LINE = 37;
/** Card padding + tag + gap, shared by Example / list / comparison / warning cards. */
const CARD_HEAD = 32 + 26 + 12;

const lines = (text: string, perLine: number) => Math.max(1, Math.ceil(text.length / perLine));

/** Page titles are Fraunces 30; ~18pt per character over a ~320pt line keeps the estimate on the safe side. */
export const titleLines = (title: string) => lines(title, 18);

/** Lines of word chips (Fraunces 22) a sentence needs inside a card. */
function chipLines(sentence: string, width = 326): number {
  let count = 1;
  let used = 0;
  for (const word of sentence.split(/\s+/).filter(Boolean)) {
    const w = word.length * 12.5 + 26;
    if (used && used + 6 + w > width) {
      count++;
      used = w;
    } else used += (used ? 6 : 0) + w;
  }
  return count;
}

/** Rough rendered height (pt) of a block at phone width, calibrated against rendered screens. */
export function estimateHeight(block: ContentBlock): number {
  switch (block.type) {
    case 'text':
      return lines(block.text, 44) * 25;
    case 'note':
      return 32 + Math.max(52, 34 + lines(block.text, 30) * 22);
    case 'example':
      return (
        CARD_HEAD +
        block.examples.reduce((h, e, i) => {
          const chips = chipLines(e.sentence);
          return h + (i ? 28 : 0) + chips * 36 + (chips - 1) * 6 + 8 + lines(e.explanation, 44) * 22;
        }, 0)
      );
    case 'list': {
      const { layout, entries } = parseList(block.items);
      const head = block.introduction ? CARD_HEAD : 32;
      const pairs = (h: (e: (typeof entries)[number]) => number) => {
        let total = 0;
        for (let i = 0; i < entries.length; i += 2) total += Math.max(h(entries[i]), entries[i + 1] ? h(entries[i + 1]) : 0) + 10;
        return total - 10;
      };
      if (layout === 'tiles') return head + pairs((e) => 71 + lines(e.detail ?? '', 20) * 18);
      if (layout === 'chips') return head + pairs((e) => 16 + lines(e.text, 16) * 22);
      if (layout === 'qa') return head + entries.reduce((h, e) => h + lines(e.label ?? e.text, 24) * 22 + 22, 0);
      return head + entries.reduce((h, e) => h + lines(e.text, 34) * 22 + 20, 0);
    }
    case 'comparison': {
      const card = Math.max(
        ...block.items.map((i) => 42 + lines(i.description, 18) * 18 + (i.example ? 12 + lines(i.example, 16) * 20 : 0)),
      );
      const points = (block.comparison_points ?? []).reduce((h, p) => h + lines(p, 40) * 22 + 12, 0);
      return CARD_HEAD + card + 12 + points + (block.conclusion ? lines(block.conclusion, 38) * 22 + 12 : 0);
    }
    case 'warning':
      return (
        CARD_HEAD +
        lines(block.mistake.incorrect, 32) * 22 +
        12 +
        lines(block.mistake.correct, 32) * 22 +
        12 +
        lines(block.mistake.reason, 40) * 20
      );
    case 'rule':
      return 32 + Math.max(52, 34 + lines(block.rule_text, 30) * 22);
    case 'question':
      return 0;
  }
}

const takeawayHeight = (text: string) => 44 + lines(text, 24) * 27 + 16;

interface Draft {
  blocks: ContentBlock[];
  height: number;
  examplePart: ExamplePart;
}

export function pageScreens(
  page: LessonPage,
  pageIndex: number,
  opts: { sentencePictures?: boolean; budget?: number } = {},
): LessonScreen[] {
  // The page head grows with the title; the rest of the window is for blocks.
  const SCREEN_BUDGET = (opts.budget ?? DEFAULT_BUDGET) - titleLines(page.title) * TITLE_LINE;
  const blocks = page.content.filter((b) => b.type !== 'question');
  const leadCount = blocks.findIndex((b) => b.type !== 'text');
  const lead = leadCount === -1 ? blocks : blocks.slice(0, leadCount);
  let queue = leadCount === -1 ? [] : blocks.slice(leadCount);
  const summary = page.page_type === 'summary' && Boolean(page.key_takeaway);

  // Screen 1: intro text (+ picture). Not packed further.
  let intro: Draft | null = lead.length ? { blocks: lead, height: 0, examplePart: 'all' } : null;
  // Screens 2…: remaining blocks packed by height.
  const packed: Draft[] = [];
  if (opts.sentencePictures && intro && queue[0]?.type === 'example') {
    // Sentence pictures stay with the intro; their explanation starts the next screen.
    intro = { blocks: [...lead, queue[0]], height: 0, examplePart: 'sentences' };
    packed.push({ blocks: [queue[0]], height: 120, examplePart: 'explanation' });
    queue = queue.slice(1);
  }
  for (const block of queue) {
    const h = estimateHeight(block);
    const last = packed[packed.length - 1];
    if (last && last.examplePart === 'all' && last.height + GAP + h <= SCREEN_BUDGET) {
      last.blocks.push(block);
      last.height += GAP + h;
    } else {
      packed.push({ blocks: [block], height: h, examplePart: 'all' });
    }
  }

  let closing = summary; // summary: picture + takeaway get their own last screen
  if (page.key_takeaway && !summary && packed.length) {
    const last = packed[packed.length - 1];
    if (last.height + GAP + takeawayHeight(page.key_takeaway) > SCREEN_BUDGET) {
      if (last.blocks.length > 1) {
        // Move the last block down so the takeaway isn't alone.
        const moved = last.blocks.pop()!;
        last.height -= GAP + estimateHeight(moved);
        packed.push({ blocks: [moved], height: estimateHeight(moved), examplePart: 'all' });
      } else {
        closing = true;
      }
    }
  }

  const drafts = [...(intro ? [intro] : []), ...packed];
  if (closing || !drafts.length) drafts.push({ blocks: [], height: 0, examplePart: 'all' });

  const parts = drafts.length;
  return drafts.map((d, part) => ({
    page,
    pageIndex,
    part,
    parts,
    blocks: d.blocks,
    examplePart: d.examplePart,
    // Summary pages keep their picture for the closing takeaway screen.
    showArt: summary ? part === parts - 1 : part === 0,
    showTakeaway: part === parts - 1 && Boolean(page.key_takeaway),
  }));
}

/** `budget`: see `bodyBudget`; defaults to a ~400×820 phone. */
export function lessonScreens(lesson: Lesson, visuals?: LessonVisuals, budget?: number): LessonScreen[] {
  return lesson.pages.flatMap((page, i) =>
    pageScreens(page, i, { sentencePictures: Boolean(visuals?.pages[page.page_id]?.sentenceArt), budget }),
  );
}
