/**
 * Splits lesson pages into phone-sized screens so none needs scrolling (UI rules):
 *   1) title + intro text + picture (below the text)
 *   2…) title + the remaining blocks, packed by estimated height, Key Takeaway on the last screen
 * - The Key Takeaway never sits alone when a block can move down to join it.
 * - Sentence-picture examples ("A Word Can Change Its Job") keep their pictures with the intro and
 *   break at the explanation.
 * - A comparison too tall for one screen splits into its items, then its points + conclusion.
 * - A summary page, or a page with no intro text, ends with its picture + Key Takeaway on their own screen.
 * - In-page practice questions are not drawn on screens; the flow turns them into question steps.
 */
import { parseList } from './list-items';
import type { ContentBlock, Lesson, LessonPage } from './model';
import type { LessonArt, LessonVisuals } from './presentation';
import { groupExamples, highlightList } from './sentence';

/**
 * Which part of a block split across screens a screen shows: an example's sentence pictures vs its
 * explanation, or a comparison's items vs its points + conclusion. A split block is alone on its screen
 * (apart from intro text).
 */
export type BlockPart = 'all' | 'sentences' | 'explanation' | 'items' | 'points';

export interface LessonScreen {
  page: LessonPage;
  pageIndex: number;
  /** 0 = first screen of the page. */
  part: number;
  parts: number;
  blocks: ContentBlock[];
  blockPart: BlockPart;
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

/** Inner width of a card at phone width. */
const CARD_WIDTH = 326;
/** Example-card pictures take this share of the card width (see `ExampleCard`). */
export const EXAMPLE_ART_SHARE = 0.34;
const EXAMPLE_ART_WIDTH = CARD_WIDTH * EXAMPLE_ART_SHARE;
const BESIDE_ART_WIDTH = CARD_WIDTH - EXAMPLE_ART_WIDTH - 12;

/** Lines of word chips (Fraunces 22) a sentence needs inside a card. */
function chipLines(sentence: string, width = CARD_WIDTH): number {
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
const chipsHeight = (n: number) => n * 36 + (n - 1) * 6;

/**
 * A short example sentence sits beside its picture with the explanation under it; a longer one runs
 * full width with the picture beside the explanation only (so chips don't wrap word by word).
 */
export const artBesideSentence = (sentence: string) => chipLines(sentence, BESIDE_ART_WIDTH) <= 2;

/** Comparisons with more than two items stack as rows (label | description + example). */
export const comparisonAsRows = (block: Extract<ContentBlock, { type: 'comparison' }>) => block.items.length > 2;

/** Pictures drawn inside a block, which change its height. */
export interface BlockArt {
  /** One per example group (see `groupExamples`). */
  examples?: LessonArt[];
  /** One per comparison item. */
  comparison?: LessonArt[];
}

function exampleHeight(block: Extract<ContentBlock, { type: 'example' }>, arts: LessonArt[] = []): number {
  return (
    CARD_HEAD +
    groupExamples(block.examples).reduce((h, group, i) => {
      const [first] = group;
      const art = arts[i];
      const artH = art ? EXAMPLE_ART_WIDTH / art.aspect : 0;
      let body: number;
      if (group.length > 1) {
        // One sentence, then a legend row per group: words, then the explanation.
        body =
          chipsHeight(chipLines(first.sentence)) +
          group.reduce((g, e) => g + 12 + lines(highlightList(e.highlight), 40) * 22 + lines(e.explanation, 40) * 22, 0);
      } else if (art && artBesideSentence(first.sentence)) {
        body = Math.max(artH, chipsHeight(chipLines(first.sentence, BESIDE_ART_WIDTH)) + 8 + lines(first.explanation, 27) * 22);
      } else if (art) {
        body = chipsHeight(chipLines(first.sentence)) + 8 + Math.max(artH, lines(first.explanation, 27) * 22);
      } else {
        body = chipsHeight(chipLines(first.sentence)) + 8 + lines(first.explanation, 44) * 22;
      }
      return h + (i ? 28 : 0) + body;
    }, 0)
  );
}

type Comparison = Extract<ContentBlock, { type: 'comparison' }>;

/** Card with the compared items only. */
function comparisonItemsHeight(block: Comparison, arts: LessonArt[] = []): number {
  if (comparisonAsRows(block)) {
    const rows = block.items.map(
      (it) => 20 + Math.max(lines(it.label, 12) * 21, lines(it.description, 27) * 18 + (it.example ? 8 + lines(it.example, 20) * 19 + 6 : 0)),
    );
    return CARD_HEAD + rows.reduce((a, b) => a + b, 0) + 8 * (rows.length - 1);
  }
  const itemWidth = (CARD_WIDTH - 10) / 2 - 20;
  const card = Math.max(
    ...block.items.map(
      (it, i) =>
        42 +
        (arts[i] ? (itemWidth * 0.7) / arts[i].aspect + 4 : 0) +
        lines(it.description, 18) * 18 +
        (it.example ? 12 + lines(it.example, 16) * 20 : 0),
    ),
  );
  return CARD_HEAD + card;
}

/** Points + conclusion (shown in the same card as the items, or in their own card when split). */
function comparisonPointsHeight(block: Comparison): number {
  const points = (block.comparison_points ?? []).reduce((h, p) => h + lines(p, 40) * 22 + 12, 0);
  return points + (block.conclusion ? lines(block.conclusion, 38) * 22 + 12 : 0);
}
const hasPoints = (block: Comparison) => Boolean(block.comparison_points?.length || block.conclusion);

/** Rough rendered height (pt) of a block at phone width, calibrated against rendered screens. */
export function estimateHeight(block: ContentBlock, art: BlockArt = {}): number {
  switch (block.type) {
    case 'text':
      return lines(block.text, 44) * 25;
    case 'note':
      return 32 + Math.max(52, 34 + lines(block.text, 30) * 22);
    case 'example':
      return exampleHeight(block, art.examples);
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
    case 'comparison':
      return comparisonItemsHeight(block, art.comparison) + (hasPoints(block) ? 12 + comparisonPointsHeight(block) : 0);
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
  blockPart: BlockPart;
}

export interface PageScreenOptions {
  /** The page's example is drawn as sentence pictures (`PageVisual.sentenceArt`). */
  sentencePictures?: boolean;
  /** The page has a main picture (`PageVisual.art`). */
  hasArt?: boolean;
  /** Pictures inside blocks, by block id. */
  blockArt?: Record<string, BlockArt>;
  budget?: number;
}

export function pageScreens(page: LessonPage, pageIndex: number, opts: PageScreenOptions = {}): LessonScreen[] {
  // The page head grows with the title; the rest of the window is for blocks.
  const SCREEN_BUDGET = (opts.budget ?? DEFAULT_BUDGET) - titleLines(page.title) * TITLE_LINE;
  const height = (b: ContentBlock) => estimateHeight(b, opts.blockArt?.[b.block_id]);
  const blocks = page.content.filter((b) => b.type !== 'question');
  const leadCount = blocks.findIndex((b) => b.type !== 'text');
  const lead = leadCount === -1 ? blocks : blocks.slice(0, leadCount);
  let queue = leadCount === -1 ? [] : blocks.slice(leadCount);
  const summary = page.page_type === 'summary' && Boolean(page.key_takeaway);
  // With no intro text to sit under, the picture joins the Key Takeaway on a closing screen.
  const artOnClosing = summary || (!lead.length && Boolean(opts.hasArt));

  // Screen 1: intro text (+ picture). Not packed further.
  let intro: Draft | null = lead.length ? { blocks: lead, height: 0, blockPart: 'all' } : null;
  // Screens 2…: remaining blocks packed by height.
  const packed: Draft[] = [];
  if (opts.sentencePictures && intro && queue[0]?.type === 'example') {
    // Sentence pictures stay with the intro; their explanation starts the next screen.
    intro = { blocks: [...lead, queue[0]], height: 0, blockPart: 'sentences' };
    packed.push({ blocks: [queue[0]], height: 120, blockPart: 'explanation' });
    queue = queue.slice(1);
  }
  for (const block of queue) {
    const h = height(block);
    const last = packed[packed.length - 1];
    if (block.type === 'comparison' && h > SCREEN_BUDGET && hasPoints(block)) {
      // Too tall for any screen: items on one screen, points + conclusion on the next.
      const art = opts.blockArt?.[block.block_id]?.comparison;
      packed.push({ blocks: [block], height: comparisonItemsHeight(block, art), blockPart: 'items' });
      packed.push({ blocks: [block], height: CARD_HEAD + comparisonPointsHeight(block), blockPart: 'points' });
    } else if (last && last.blockPart === 'all' && last.height + GAP + h <= SCREEN_BUDGET) {
      last.blocks.push(block);
      last.height += GAP + h;
    } else {
      packed.push({ blocks: [block], height: h, blockPart: 'all' });
    }
  }

  let closing = artOnClosing;
  if (page.key_takeaway && !closing && packed.length) {
    const last = packed[packed.length - 1];
    if (last.height + GAP + takeawayHeight(page.key_takeaway) > SCREEN_BUDGET) {
      if (last.blocks.length > 1) {
        // Move the last block down so the takeaway isn't alone.
        const moved = last.blocks.pop()!;
        last.height -= GAP + height(moved);
        packed.push({ blocks: [moved], height: height(moved), blockPart: 'all' });
      } else {
        closing = true;
      }
    }
  }

  const drafts = [...(intro ? [intro] : []), ...packed];
  if (closing || !drafts.length) drafts.push({ blocks: [], height: 0, blockPart: 'all' });

  const parts = drafts.length;
  return drafts.map((d, part) => ({
    page,
    pageIndex,
    part,
    parts,
    blocks: d.blocks,
    blockPart: d.blockPart,
    showArt: artOnClosing ? part === parts - 1 : part === 0,
    showTakeaway: part === parts - 1 && Boolean(page.key_takeaway),
  }));
}

/** `budget`: see `bodyBudget`; defaults to a ~400×820 phone. */
export function lessonScreens(lesson: Lesson, visuals?: LessonVisuals, budget?: number): LessonScreen[] {
  return lesson.pages.flatMap((page, i) => {
    const visual = visuals?.pages[page.page_id];
    return pageScreens(page, i, {
      sentencePictures: Boolean(visual?.sentenceArt),
      hasArt: Boolean(visual?.art),
      blockArt: pageBlockArt(page, visuals),
      budget,
    });
  });
}

/** Pictures inside a page's blocks (example and comparison art), by block id. */
export function pageBlockArt(page: LessonPage, visuals?: LessonVisuals): Record<string, BlockArt> {
  const exampleArts = visuals?.pages[page.page_id]?.exampleArts;
  const art: Record<string, BlockArt> = {};
  for (const block of page.content) {
    if (block.type === 'example' && exampleArts) art[block.block_id] = { examples: exampleArts };
    const comparison = visuals?.comparisonArt?.[block.block_id];
    if (comparison) art[block.block_id] = { comparison };
  }
  return art;
}
