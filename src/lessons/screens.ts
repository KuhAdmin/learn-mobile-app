/**
 * Splits lesson pages into phone-sized screens so none needs scrolling. A page breaks before its
 * first example or note block:
 *   1) title + intro text + picture
 *   2) title + the example/note and everything after it + Key Takeaway
 * When an example is drawn as one picture per sentence ("A Word Can Change Its Job"), the pictures
 * stay on the first screen and the break comes at the example's explanation instead.
 * A summary page shows its checklist first, then its picture (mascot) + Key Takeaway on a second screen.
 */
import { visualsFor } from './presentation';
import type { ContentBlock, GrammarLesson, LessonPage } from './schema';

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

const BREAK_BEFORE: ContentBlock['type'][] = ['example', 'note'];

export function pageScreens(page: LessonPage, pageIndex: number, hasSentencePictures = false): LessonScreen[] {
  const split = page.content.findIndex((b) => BREAK_BEFORE.includes(b.type));
  const base = { page, pageIndex, parts: 2, examplePart: 'all' as ExamplePart };
  if (page.page_type === 'summary' && page.key_takeaway) {
    return [
      { ...base, part: 0, blocks: page.content, showArt: false, showTakeaway: false },
      { ...base, part: 1, blocks: [], showArt: true, showTakeaway: true },
    ];
  }
  if (split < 1) {
    return [{ ...base, part: 0, parts: 1, blocks: page.content, showArt: true, showTakeaway: true }];
  }
  if (hasSentencePictures && page.content[split].type === 'example') {
    return [
      { ...base, part: 0, blocks: page.content.slice(0, split + 1), examplePart: 'sentences', showArt: true, showTakeaway: false },
      { ...base, part: 1, blocks: page.content.slice(split), examplePart: 'explanation', showArt: false, showTakeaway: true },
    ];
  }
  return [
    { ...base, part: 0, blocks: page.content.slice(0, split), showArt: true, showTakeaway: false },
    { ...base, part: 1, blocks: page.content.slice(split), showArt: false, showTakeaway: true },
  ];
}

export function lessonScreens(lesson: GrammarLesson): LessonScreen[] {
  const visuals = visualsFor(lesson.topic.topic_id);
  return lesson.pages.flatMap((page, i) => pageScreens(page, i, Boolean(visuals?.pages[page.page_id]?.sentenceArt)));
}
