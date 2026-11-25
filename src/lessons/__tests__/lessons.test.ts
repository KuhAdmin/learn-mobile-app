import { describe, expect, it } from '@jest/globals';

import { findTopic } from '@/learning-path/progression';

import { explanationText, grade, normalizeTyped, score, type Answer } from '../answers';
import v1raw from '../content/1.1.1.EP001.json';
import v2raw from '../content/1-1-2.json';
import v3raw from '../content/1-1-3.json';
import v4raw from '../content/1-1-4.json';
import v5raw from '../content/1-1-5.json';
import v6raw from '../content/1-1-6.json';
import v7raw from '../content/1-1-7.json';
import v21raw from '../content/1-2-1.json';
import v22raw from '../content/1-2-2.json';
import v23raw from '../content/1-2-3.json';
import v24raw from '../content/1-2-4.json';
import v25raw from '../content/1-2-5.json';
import v26raw from '../content/1-2-6.json';
import v27raw from '../content/1-2-7.json';
import v28raw from '../content/1-2-8.json';
import v29raw from '../content/1-2-9.json';
import v210raw from '../content/1-2-10.json';
import v211raw from '../content/1-2-11.json';
import v212raw from '../content/1-2-12.json';
import v213raw from '../content/1-2-13.json';
import v214raw from '../content/1-2-14.json';
import v131raw from '../content/1-3-1.json';
import v132raw from '../content/1-3-2.json';
import v133raw from '../content/1-3-3.json';
import v134raw from '../content/1-3-4.json';
import v135raw from '../content/1-3-5.json';
import v136raw from '../content/1-3-6.json';
import v137raw from '../content/1-3-7.json';
import v138raw from '../content/1-3-8.json';
import v139raw from '../content/1-3-9.json';
import v1310raw from '../content/1-3-10.json';
import v1311raw from '../content/1-3-11.json';
import v1312raw from '../content/1-3-12.json';
import v1313raw from '../content/1-3-13.json';
import v1314raw from '../content/1-3-14.json';
import v1315raw from '../content/1-3-15.json';
import v141raw from '../content/1-4-1.json';
import v142raw from '../content/1-4-2.json';
import v143raw from '../content/1-4-3.json';
import v144raw from '../content/1-4-4.json';
import v145raw from '../content/1-4-5.json';
import v146raw from '../content/1-4-6.json';
import v147raw from '../content/1-4-7.json';
import v148raw from '../content/1-4-8.json';
import v149raw from '../content/1-4-9.json';
import v1410raw from '../content/1-4-10.json';
import v1411raw from '../content/1-4-11.json';
import v1412raw from '../content/1-4-12.json';
import v1413raw from '../content/1-4-13.json';
import v1414raw from '../content/1-4-14.json';
import v1415raw from '../content/1-4-15.json';
import v1416raw from '../content/1-4-16.json';
import v151raw from '../content/1-5-1.json';
import v152raw from '../content/1-5-2.json';
import v153raw from '../content/1-5-3.json';
import v159raw from '../content/1-5-9.json';
import v1510raw from '../content/1-5-10.json';
import v1511raw from '../content/1-5-11.json';
import v1512raw from '../content/1-5-12.json';
import v1513raw from '../content/1-5-13.json';
import v1514raw from '../content/1-5-14.json';
import v1515raw from '../content/1-5-15.json';
import v1516raw from '../content/1-5-16.json';
import v2101raw from '../content/2-1-1.json';
import v2102raw from '../content/2-1-2.json';
import v2103raw from '../content/2-1-3.json';
import v2104raw from '../content/2-1-4.json';
import v2105raw from '../content/2-1-5.json';
import v2106raw from '../content/2-1-6.json';
import v2107raw from '../content/2-1-7.json';
import v2108raw from '../content/2-1-8.json';
import v2109raw from '../content/2-1-9.json';
import v2110raw from '../content/2-1-10.json';
import v2111raw from '../content/2-1-11.json';
import v2112raw from '../content/2-1-12.json';
import v2113raw from '../content/2-1-13.json';
import v2114raw from '../content/2-1-14.json';
import v2201raw from '../content/2-2-1.json';
import v2202raw from '../content/2-2-2.json';
import v2203raw from '../content/2-2-3.json';
import v2204raw from '../content/2-2-4.json';
import v2205raw from '../content/2-2-5.json';
import v2206raw from '../content/2-2-6.json';
import v2207raw from '../content/2-2-7.json';
import v2208raw from '../content/2-2-8.json';
import v2209raw from '../content/2-2-9.json';
import v2210raw from '../content/2-2-10.json';
import v2211raw from '../content/2-2-11.json';
import v2212raw from '../content/2-2-12.json';
import v2213raw from '../content/2-2-13.json';
import v2214raw from '../content/2-2-14.json';
import v2215raw from '../content/2-2-15.json';
import v2216raw from '../content/2-2-16.json';
import v2217raw from '../content/2-2-17.json';
import v231raw from '../content/2-3-1.json';
import v232raw from '../content/2-3-2.json';
import v233raw from '../content/2-3-3.json';
import v234raw from '../content/2-3-4.json';
import v235raw from '../content/2-3-5.json';
import v236raw from '../content/2-3-6.json';
import v237raw from '../content/2-3-7.json';
import v238raw from '../content/2-3-8.json';
import v239raw from '../content/2-3-9.json';
import v2310raw from '../content/2-3-10.json';
import v2311raw from '../content/2-3-11.json';
import v2312raw from '../content/2-3-12.json';
import v2313raw from '../content/2-3-13.json';
import v2314raw from '../content/2-3-14.json';
import v241raw from '../content/2-4-1.json';
import v242raw from '../content/2-4-2.json';
import v243raw from '../content/2-4-3.json';
import v244raw from '../content/2-4-4.json';
import v245raw from '../content/2-4-5.json';
import v246raw from '../content/2-4-6.json';
import v247raw from '../content/2-4-7.json';
import v248raw from '../content/2-4-8.json';
import v249raw from '../content/2-4-9.json';
import v2410raw from '../content/2-4-10.json';
import v2411raw from '../content/2-4-11.json';
import v2412raw from '../content/2-4-12.json';
import v2413raw from '../content/2-4-13.json';
import v2414raw from '../content/2-4-14.json';
import v2415raw from '../content/2-4-15.json';
import v2416raw from '../content/2-4-16.json';
import v2417raw from '../content/2-4-17.json';
import {
  buildSteps,
  initialLessonFlow,
  lessonFlowReducer,
  lessonScore,
  nextCta,
  type LessonFlowState,
  type LessonStep,
} from '../lesson-flow';
import { parseList } from '../list-items';
import { loadLesson, type Lesson, type Question } from '../model';
import { LESSON_VISUALS, LIST_ICONS, visualsFor } from '../presentation';
import { curriculumTopicId, lessonForTopic } from '../registry';
import {
  bodyBudget,
  DEFAULT_BUDGET,
  estimateHeight,
  lessonScreens,
  pageBlockArt,
  screenBlocks,
  splitList,
  titleLines,
  type LessonScreen,
} from '../screens';
import { groupExamples, highlightList, keepSuffixes, splitTokenSentences, tokenizeGroups, tokenizeSentence } from '../sentence';

const v1 = loadLesson(v1raw);
const v2 = loadLesson(v2raw);
const v3 = loadLesson(v3raw);
const v4 = loadLesson(v4raw);
const v5 = loadLesson(v5raw);
const v6 = loadLesson(v6raw);
const v7 = loadLesson(v7raw);
const v21 = loadLesson(v21raw);
const v22 = loadLesson(v22raw);
const v23 = loadLesson(v23raw);
const v24 = loadLesson(v24raw);
const v25 = loadLesson(v25raw);
const v26 = loadLesson(v26raw);
const v27 = loadLesson(v27raw);
const v28 = loadLesson(v28raw);
const v29 = loadLesson(v29raw);
const v210 = loadLesson(v210raw);
const v211 = loadLesson(v211raw);
const v212 = loadLesson(v212raw);
const v213 = loadLesson(v213raw);
const v214 = loadLesson(v214raw);
const v131 = loadLesson(v131raw);
const v132 = loadLesson(v132raw);
const v133 = loadLesson(v133raw);
const v134 = loadLesson(v134raw);
const v135 = loadLesson(v135raw);
const v136 = loadLesson(v136raw);
const v137 = loadLesson(v137raw);
const v138 = loadLesson(v138raw);
const v139 = loadLesson(v139raw);
const v1310 = loadLesson(v1310raw);
const v1311 = loadLesson(v1311raw);
const v1312 = loadLesson(v1312raw);
const v1313 = loadLesson(v1313raw);
const v1314 = loadLesson(v1314raw);
const v1315 = loadLesson(v1315raw);
const v141 = loadLesson(v141raw);
const v142 = loadLesson(v142raw);
const v143 = loadLesson(v143raw);
const v144 = loadLesson(v144raw);
const v145 = loadLesson(v145raw);
const v146 = loadLesson(v146raw);
const v147 = loadLesson(v147raw);
const v148 = loadLesson(v148raw);
const v149 = loadLesson(v149raw);
const v1410 = loadLesson(v1410raw);
const v1411 = loadLesson(v1411raw);
const v1412 = loadLesson(v1412raw);
const v1413 = loadLesson(v1413raw);
const v1414 = loadLesson(v1414raw);
const v1415 = loadLesson(v1415raw);
const v1416 = loadLesson(v1416raw);
const v151 = loadLesson(v151raw);
const v152 = loadLesson(v152raw);
const v153 = loadLesson(v153raw);
const v159 = loadLesson(v159raw);
const v1510 = loadLesson(v1510raw);
const v1511 = loadLesson(v1511raw);
const v1512 = loadLesson(v1512raw);
const v1513 = loadLesson(v1513raw);
const v1514 = loadLesson(v1514raw);
const v1515 = loadLesson(v1515raw);
const v1516 = loadLesson(v1516raw);
const v2101 = loadLesson(v2101raw);
const v2102 = loadLesson(v2102raw);
const v2103 = loadLesson(v2103raw);
const v2104 = loadLesson(v2104raw);
const v2105 = loadLesson(v2105raw);
const v2106 = loadLesson(v2106raw);
const v2107 = loadLesson(v2107raw);
const v2108 = loadLesson(v2108raw);
const v2109 = loadLesson(v2109raw);
const v2110 = loadLesson(v2110raw);
const v2111 = loadLesson(v2111raw);
const v2112 = loadLesson(v2112raw);
const v2113 = loadLesson(v2113raw);
const v2114 = loadLesson(v2114raw);
const v2201 = loadLesson(v2201raw);
const v2202 = loadLesson(v2202raw);
const v2203 = loadLesson(v2203raw);
const v2204 = loadLesson(v2204raw);
const v2205 = loadLesson(v2205raw);
const v2206 = loadLesson(v2206raw);
const v2207 = loadLesson(v2207raw);
const v2208 = loadLesson(v2208raw);
const v2209 = loadLesson(v2209raw);
const v2210 = loadLesson(v2210raw);
const v2211 = loadLesson(v2211raw);
const v2212 = loadLesson(v2212raw);
const v2213 = loadLesson(v2213raw);
const v2214 = loadLesson(v2214raw);
const v2215 = loadLesson(v2215raw);
const v2216 = loadLesson(v2216raw);
const v2217 = loadLesson(v2217raw);
const v231 = loadLesson(v231raw);
const v232 = loadLesson(v232raw);
const v233 = loadLesson(v233raw);
const v234 = loadLesson(v234raw);
const v235 = loadLesson(v235raw);
const v236 = loadLesson(v236raw);
const v237 = loadLesson(v237raw);
const v238 = loadLesson(v238raw);
const v239 = loadLesson(v239raw);
const v2310 = loadLesson(v2310raw);
const v2311 = loadLesson(v2311raw);
const v2312 = loadLesson(v2312raw);
const v2313 = loadLesson(v2313raw);
const v2314 = loadLesson(v2314raw);
const v241 = loadLesson(v241raw);
const v242 = loadLesson(v242raw);
const v243 = loadLesson(v243raw);
const v244 = loadLesson(v244raw);
const v245 = loadLesson(v245raw);
const v246 = loadLesson(v246raw);
const v247 = loadLesson(v247raw);
const v248 = loadLesson(v248raw);
const v249 = loadLesson(v249raw);
const v2410 = loadLesson(v2410raw);
const v2411 = loadLesson(v2411raw);
const v2412 = loadLesson(v2412raw);
const v2413 = loadLesson(v2413raw);
const v2414 = loadLesson(v2414raw);
const v2415 = loadLesson(v2415raw);
const v2416 = loadLesson(v2416raw);
const v2417 = loadLesson(v2417raw);
// Untyped deep copy, so tests can break the JSON on purpose.
const clone = (x: unknown) => JSON.parse(JSON.stringify(x));

/** Estimated block height of a packed screen (with the pictures drawn inside its blocks). */
const packedHeight = (lesson: Lesson, s: LessonScreen) => {
  const art = pageBlockArt(s.page, visualsFor(lesson.id));
  return s.blocks.reduce((sum, b) => sum + estimateHeight(b, art[b.block_id]) + 24, -24);
};

describe('lesson content', () => {
  it('loads both schema versions and maps them onto path topics', () => {
    expect([v1.schemaVersion, v1.pages.length, v1.finalCheck?.questionIds.length]).toEqual(['1.0', 8, 4]);
    expect([v2.schemaVersion, v2.pages.length, Object.keys(v2.questions).length]).toEqual(['2.0', 16, 21]);
    expect(v2.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE010', 'PAGE012', 'PAGE014', 'PAGE016']);
    expect(v2.finalCheck?.questionIds).toHaveLength(6);
    expect(curriculumTopicId('1.1.1.EP001')).toBe('s1.1.01');
    expect(curriculumTopicId('1-1-2')).toBe('s1.1.02');
    expect(findTopic('s1.1.02')?.topic.title).toBe('The Eight Parts of Speech');
    expect(lessonForTopic('s1.1.02')?.id).toBe('1-1-2');
    expect(lessonForTopic('s1.1.03')?.lessonTitle).toBe('Content Words and Function Words');
    expect(lessonForTopic('s1.1.04')?.lessonTitle).toBe('Open and Closed Word Classes');
    expect(lessonForTopic('s1.1.05')?.lessonTitle).toBe(v5.lessonTitle);
    expect(lessonForTopic('s1.1.06')?.lessonTitle).toBe(v6.lessonTitle);
    expect(lessonForTopic('s1.1.07')?.lessonTitle).toBe(v7.lessonTitle);
    expect(lessonForTopic('s1.1.08')).toBeUndefined();
    expect(curriculumTopicId('1-2-1')).toBe('s1.2.01');
    expect(lessonForTopic('s1.2.01')?.lessonTitle).toBe('Introduction to Nouns');
    expect(lessonForTopic('s1.2.02')?.lessonTitle).toBe('Common and Proper Nouns');
    expect(lessonForTopic('s1.2.03')?.lessonTitle).toBe('Concrete and Abstract Nouns');
    expect(lessonForTopic('s1.2.04')?.lessonTitle).toBe('Collective Nouns');
    expect(lessonForTopic('s1.2.05')?.lessonTitle).toBe('Countable and Uncountable Nouns');
    expect(lessonForTopic('s1.2.06')?.lessonTitle).toBe('Material Nouns');
    expect(lessonForTopic('s1.2.07')?.lessonTitle).toBe('Compound Nouns');
    expect(lessonForTopic('s1.2.08')?.lessonTitle).toBe('Singular and Plural Nouns');
    expect(lessonForTopic('s1.2.09')?.lessonTitle).toBe('Regular and Irregular Plurals');
    expect(curriculumTopicId('1-2-10')).toBe('s1.2.10');
    expect(lessonForTopic('s1.2.10')?.lessonTitle).toBe('Gender of Nouns');
    expect(lessonForTopic('s1.2.11')?.lessonTitle).toBe('Possessive Nouns');
    expect(lessonForTopic('s1.2.12')?.lessonTitle).toBe('Noun Formation and Word Building');
    expect(lessonForTopic('s1.2.13')?.lessonTitle).toBe('Noun Functions in Sentences');
    expect(lessonForTopic('s1.2.14')?.lessonTitle).toBe('Noun Usage and Common Errors');
    expect([v3.pages.length, Object.keys(v3.questions).length, v3.finalCheck?.questionIds.length]).toEqual([15, 18, 6]);
  });

  it('uses only lesson pictures with a transparent background', () => {
    // CLAUDE.md "Lesson artwork": cutouts never keep the mockup's ivory page background.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const art: { opaqueLessonArt(): string[]; webpHasAlpha(buf: Uint8Array): boolean } = require('../../../scripts/art-cutout');
    expect(art.opaqueLessonArt()).toEqual([]);
  });

  it('spots a notch cut into a scene, but not an outlined figure or a framed scene', () => {
    // CLAUDE.md "Lesson artwork" rule 4: art:cutout refuses notched pictures, and --check lists them.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { notchIn, roundCorners } = require('../../../scripts/art-cutout') as {
      notchIn(rgba: Uint8Array, w: number, h: number): { x: number; y: number } | null;
      roundCorners(rgba: Uint8Array, w: number, h: number, r: number): Uint8Array;
    };
    const W = 60, H = 50;
    const image = (paint: (x: number, y: number) => number[] | null) => {
      const rgba = new Uint8Array(W * H * 4);
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) rgba.set(paint(x, y) ?? [0, 0, 0, 0], (y * W + x) * 4);
      return rgba;
    };
    const sky = [120, 200, 240, 255];
    // A sky scene filling the picture, with a painted-out bubble leaving a hole in its lower right.
    const notched = image((x, y) => (x >= 25 && y >= 20 ? null : sky));
    const notch = notchIn(notched, W, H);
    expect(notch && [Math.abs(notch.x - 25) <= 1, Math.abs(notch.y - 20) <= 1]).toEqual([true, true]);
    // The same L shape drawn with a dark outline (a figure, e.g. a stack of books) is not a notch.
    const outlined = image((x, y) => {
      if (x >= 25 && y >= 20) return null;
      return x === 24 || y === 19 || x === 0 || y === 0 || x === W - 1 || y === H - 1 ? [10, 10, 10, 255] : sky;
    });
    expect(notchIn(outlined, W, H)).toBeNull();
    // A framed scene with page margin around it, and one with rounded corners, have no notch.
    const framed = image((x, y) => (x >= 8 && x < W - 8 && y >= 8 && y < H - 8 ? sky : null));
    expect(notchIn(framed, W, H)).toBeNull();
    expect(notchIn(roundCorners(image(() => sky), W, H, 8), W, H)).toBeNull();
  });

  it('removes a plain white mockup page only with --page white, and keeps white inside the outline', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { cutout } = require('../../../scripts/art-cutout') as {
      cutout(rgba: Uint8Array, w: number, h: number, skip?: string[], page?: string): Uint8Array;
    };
    // 5×5 white page with a black ring around one white pixel (a teacup inside its outline).
    const image = () => {
      const rgba = new Uint8Array(5 * 5 * 4).fill(253);
      for (let y = 1; y <= 3; y++)
        for (let x = 1; x <= 3; x++) if (x !== 2 || y !== 2) rgba.set([0, 0, 0, 255], (y * 5 + x) * 4);
      return rgba;
    };
    const alpha = (rgba: Uint8Array, x: number, y: number) => rgba[(y * 5 + x) * 4 + 3];
    const ivory = cutout(image(), 5, 5);
    expect(alpha(ivory, 0, 0)).toBe(253);
    const white = cutout(image(), 5, 5, [], 'white');
    expect([alpha(white, 0, 0), alpha(white, 2, 2)]).toEqual([0, 253]);
    expect(() => cutout(image(), 5, 5, [], 'pink')).toThrow(/Unknown page colour/);
  });

  it('gives every 1.1.3 page a picture', () => {
    const pages = visualsFor('1-1-3')?.pages ?? {};
    expect(v3.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual([]);
  });

  it('converts v1 true/false and multiple-choice questions', () => {
    expect(v1.questions.Q003).toMatchObject({ type: 'true_false', correct: true });
    expect(v1.questions.Q001).toMatchObject({ type: 'multiple_choice', correctIds: ['A'] });
  });

  it('rejects malformed content with the JSON path of the problem', () => {
    const broken = clone(v1raw);
    broken.knowledge_check.questions[1].correct_answers = ['Z'];
    expect(() => loadLesson(broken)).toThrow('$.knowledge_check.questions[1].correct_answers');
    const badPair = clone(v2raw);
    badPair.question_bank[16].correct_pairs[0].right_id = 'R99';
    expect(() => loadLesson(badPair)).toThrow('unknown item R99');
    const overlap = clone(v2raw);
    overlap.assessments.final_assessment.question_ids.push('Q001');
    expect(() => loadLesson(overlap)).toThrow('Q001 is used more than once (dimension check DA001 and the final assessment)');
    // Rule: each taught dimension ends with its own check; the lesson ends with a final check.
    const lateCheck = clone(v3raw);
    lateCheck.assessments.dimension_assessments[1].after_page_id = 'PAGE014';
    expect(() => loadLesson(lateCheck)).toThrow('DA002 must follow PAGE007');
    const noCheck = clone(v3raw);
    delete noCheck.learning_dimensions[2].assessment_id;
    expect(() => loadLesson(noCheck)).toThrow('needs a short assessment after PAGE010');
    const noFinal = clone(v3raw);
    noFinal.assessments.final_assessment.question_ids = [];
    expect(() => loadLesson(noFinal)).toThrow('a lesson needs a final assessment');
    // Rule: a question is asked once. An in-page practice question can't also be in the check after it.
    const twice = clone(v4raw);
    twice.pages[8].content.push({ block_id: 'BLOCK018', type: 'question', question_id: 'Q003' });
    expect(() => loadLesson(twice)).toThrow('Q003 is used more than once (page PAGE009 and dimension check DA003)');
    const badHighlight = clone(v2raw);
    badHighlight.pages[0].content[1].examples[0].highlight = ['cat'];
    expect(() => loadLesson(badHighlight)).toThrow('"cat" is not in the sentence');
  });

  it('every annotated example spells out its sentence', () => {
    const annotations = LESSON_VISUALS['1.1.1.EP001'].annotations ?? {};
    for (const page of v1.pages)
      for (const block of page.content)
        if (block.type === 'example' && annotations[block.block_id])
          expect(annotations[block.block_id].map((a) => a.text).join(' ')).toBe(block.examples[0].sentence);
  });
});

describe('tokenizeSentence', () => {
  it('alternates highlight tones in sentence order and keeps punctuation on the word', () => {
    expect(tokenizeSentence('The happy girl dances.', ['girl', 'happy', 'dances'])).toEqual([
      { text: 'The', tone: null },
      { text: 'happy', tone: 'teal' },
      { text: 'girl', tone: 'salmon' },
      { text: 'dances.', tone: 'teal' },
    ]);
  });

  it('matches fragments with punctuation ("Wow!") and splits sentences', () => {
    expect(tokenizeSentence('Wow! The boy runs.', ['Wow!', 'runs'])[0]).toEqual({ text: 'Wow!', tone: 'teal' });
    const tokens = tokenizeSentence('I drink water. Please water the plant.', ['drink', 'water', 'water', 'plant']);
    expect(tokens.filter((t) => t.tone).map((t) => t.text)).toEqual(['drink', 'water.', 'water', 'plant.']);
    expect(splitTokenSentences(tokens).map((g) => g.map((t) => t.text).join(' '))).toEqual([
      'I drink water.',
      'Please water the plant.',
    ]);
  });

  it('highlights a multi-word phrase as one chip tone', () => {
    // 1.1.6 page 6 highlights the whole subject: "The little squirrel".
    const tones = tokenizeSentence('The little squirrel climbed the tree.', ['The little squirrel']).map((t) => t.tone);
    expect(tones).toEqual(['teal', 'teal', 'teal', null, null, null]);
    // Phrases and single words alternate tones in sentence order.
    expect(tokenizeSentence('Mira opened the wooden box.', ['opened', 'the wooden box']).map((t) => t.tone)).toEqual([
      null,
      'teal',
      'salmon',
      'salmon',
      'salmon',
    ]);
  });

  it('shows a repeated sentence once, with one tone per highlight group', () => {
    const block = v3.pages[10].content[1]; // "The children are playing in the park." ×2
    if (block.type !== 'example') throw new Error('expected example');
    const groups = groupExamples(block.examples);
    expect(groups).toHaveLength(1);
    const tokens = tokenizeGroups(
      groups[0][0].sentence,
      groups[0].map((e) => e.highlight),
    );
    expect(tokens.map((t) => `${t.text}:${t.tone ?? '-'}`).join(' ')).toBe(
      'The:salmon children:teal are:salmon playing:teal in:salmon the:salmon park.:teal',
    );
    expect(highlightList(['The', 'are', 'in', 'the'])).toBe('The, are, in');
    // Different sentences stay separate.
    expect(groupExamples([{ sentence: 'A.' }, { sentence: 'B.' }, { sentence: 'B.' }]).map((g) => g.length)).toEqual([1, 2]);
  });
});

describe('parseList', () => {
  it('picks tiles, question rows, chips or plain rows from the item shape', () => {
    expect(parseList(['Noun – names something.', 'Verb – shows an action or state.'])).toEqual({
      layout: 'tiles',
      entries: [
        { text: 'Noun – names something.', label: 'Noun', detail: 'names something' },
        { text: 'Verb – shows an action or state.', label: 'Verb', detail: 'shows an action or state' },
      ],
    });
    expect(parseList(['People: teacher, mother']).entries[0]).toMatchObject({ label: 'People', detail: 'teacher, mother' });
    expect(parseList(['Does it name something? Noun.']).entries[0]).toMatchObject({ label: 'Does it name something?', detail: 'Noun' });
    expect(parseList(['I, you, he, she, it', 'We, they']).layout).toBe('chips');
    expect(parseList(['Words make sentences.', 'Grammar helps words work together.']).layout).toBe('rows');
  });
});

describe('answers', () => {
  const q = (id: string) => v2.questions[id] as Question;
  it('grades every question type', () => {
    expect(grade(q('Q001'), { kind: 'choice', id: 'A' })).toBe(true);
    expect(grade(q('Q001'), { kind: 'choice', id: 'B' })).toBe(false);
    expect(grade(q('Q010'), { kind: 'bool', value: true })).toBe(true);
    expect(grade(q('Q003'), { kind: 'text', values: ['  Noun. '] })).toBe(true);
    expect(grade(q('Q014'), { kind: 'text', values: ['on'] })).toBe(false);
    const match = q('Q017');
    if (match.type !== 'match_the_pair') throw new Error('expected match');
    expect(grade(match, { kind: 'pairs', pairs: match.pairs })).toBe(true);
    expect(grade(match, { kind: 'pairs', pairs: { ...match.pairs, L1: 'R2', L2: 'R1' } })).toBe(false);
    expect(grade(q('Q001'), undefined)).toBeNull();
    expect(normalizeTyped('“Adverb!”')).toBe('adverb');
  });

  it("gives the verdict once, for the learner's actual answer", () => {
    const authored = 'Correct. Closed classes usually gain new words very rarely.';
    expect(explanationText(authored, true)).toBe('Correct! Closed classes usually gain new words very rarely.');
    expect(explanationText(authored, false)).toBe('Not quite. Closed classes usually gain new words very rarely.');
    expect(explanationText('Correctly placed words help.', true)).toBe('Correct! Correctly placed words help.');
    expect(explanationText('Wow is an interjection.', null)).toBe('Wow is an interjection.');
  });

  it('grades word-list answers in any order', () => {
    const q3 = (id: string) => v3.questions[id] as Question;
    const typed = (s: string) => ({ kind: 'text' as const, values: [s] });
    expect(grade(q3('Q007'), typed('quickly, runs, small, dog'))).toBe(true);
    expect(grade(q3('Q007'), typed('Small dog runs and quickly'))).toBe(true);
    expect(grade(q3('Q007'), typed('small, dog, runs'))).toBe(false);
    expect(grade(q3('Q004'), typed('the, is, in'))).toBe(true);
    expect(grade(q3('Q016'), typed('on, the, has, she'))).toBe(true);
    expect(grade(q3('Q016'), typed('she, has, flowers'))).toBe(false);
  });

  it('scores only graded questions', () => {
    const answers: Record<string, Answer> = { Q016: { kind: 'choice', id: 'B' }, Q018: { kind: 'choice', id: 'A' } };
    expect(score([q('Q016'), q('Q018')], answers)).toEqual({ correct: 1, total: 2 });
  });
});

describe('lessonScreens', () => {
  it('keeps lesson 1.1.1 split into intro + example screens', () => {
    const screens = lessonScreens(v1, visualsFor(v1.id));
    expect(screens.map((s) => `${s.page.page_number}.${s.part}`)).toEqual([
      '1.0', '1.1', '2.0', '2.1', '3.0', '3.1', '4.0', '4.1', '5.0', '5.1', '6.0', '6.1', '7.0', '7.1', '8.0', '8.1',
    ]);
    const [intro, example] = screens;
    expect([intro.blocks.map((b) => b.type), intro.showArt, intro.showTakeaway]).toEqual([['text'], true, false]);
    expect([example.blocks.map((b) => b.type), example.showArt, example.showTakeaway]).toEqual([['example'], false, true]);
    // Page 7 keeps its sentence pictures with the intro and breaks at the explanation.
    expect([screens[12], screens[13]].map((s) => [s.blocks.map((b) => b.type), s.blockPart])).toEqual([
      [['text', 'example'], 'sentences'],
      [['example'], 'explanation'],
    ]);
    // Summary: checklist, then picture + takeaway.
    expect(screens[14]).toMatchObject({ showArt: false, showTakeaway: false });
    expect(screens[15]).toMatchObject({ blocks: [], showArt: true, showTakeaway: true });
  });

  it('packs lesson 1.1.2 so no screen exceeds the height budget', () => {
    const screens = lessonScreens(v2, visualsFor(v2.id));
    for (const s of screens.filter((x) => x.part > 0 && x.blocks.length > 1)) {
      expect(packedHeight(v2, s)).toBeLessThanOrEqual(DEFAULT_BUDGET - titleLines(s.page.title) * 37);
    }
    // A shorter phone gets more screens.
    expect(lessonScreens(v2, visualsFor(v2.id), bodyBudget(667, 20, 0)).length).toBeGreaterThan(screens.length);
    const byPage = (n: number) => screens.filter((s) => s.page.page_number === n).map((s) => s.blocks.map((b) => b.type));
    // Noun page: intro, examples, then the list with the takeaway (takeaway never alone).
    expect(byPage(4)).toEqual([['text'], ['example'], ['list']]);
    expect(screens.filter((s) => s.page.page_number === 4).at(-1)?.showTakeaway).toBe(true);
    // Practice questions are not drawn on screens.
    expect(byPage(15)).toEqual([['text']]);
  });

  it('fits lesson 1.1.3 on screens, splitting tall comparisons', () => {
    const screens = lessonScreens(v3, visualsFor(v3.id));
    for (const s of screens.filter((x) => x.blocks.some((b) => b.type !== 'text'))) {
      const budget = DEFAULT_BUDGET - titleLines(s.page.title) * 37;
      if (s.blockPart === 'all') expect(packedHeight(v3, s)).toBeLessThanOrEqual(budget);
    }
    const byPage = (n: number) => screens.filter((s) => s.page.page_number === n);
    // No intro text: the comparison first, then picture + takeaway.
    expect(byPage(9).map((s) => [s.blocks.map((b) => b.type), s.showArt, s.showTakeaway])).toEqual([
      [['comparison'], false, false],
      [[], true, true],
    ]);
    // Summary: comparison items, then points, then picture + takeaway.
    expect(byPage(15).map((s) => s.blockPart)).toEqual(['items', 'points', 'all']);
    expect(byPage(15).at(-1)).toMatchObject({ blocks: [], showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.1.6 on screens', () => {
    const screens = lessonScreens(v6, visualsFor(v6.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v6, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v6.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE011', 'PAGE014', 'PAGE016', 'PAGE018', 'PAGE020']);
    // Page 3's eight tiles continue on a second screen, split between grid rows; numbering carries on.
    const page3 = screens.filter((s) => s.page.page_number === 3 && s.blocks[0]?.type === 'list').map((s) => s.blocks[0]);
    expect(page3.length).toBeGreaterThan(1);
    const parts = page3.map((b) => (b.type === 'list' ? [b.start, b.items.length, Boolean(b.introduction)] : null));
    expect(parts.every((p) => p && (p[0] as number) % 2 === 0)).toBe(true);
    expect(parts.map((p) => p?.[2])).toEqual([true, ...parts.slice(1).map(() => false)]);
    const all = v6.pages[2].content[0];
    if (all.type !== 'list') throw new Error('expected list');
    expect(splitList(all, 10_000)).toEqual([{ ...all, start: 0 }]);
    expect(grade(v6.questions.Q005, { kind: 'text', values: ['gardener'] })).toBe(true);
  });

  it('fits lesson 1.1.7 on screens, with practice on pages 6 and 17', () => {
    const screens = lessonScreens(v7, visualsFor(v7.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v7, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v7.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE013', 'PAGE015', 'PAGE019']);
    const practice = (n: number) => v7.pages[n - 1].content.flatMap((b) => (b.type === 'question' ? [b.question_id] : []));
    expect([practice(6), practice(17)]).toEqual([['Q019'], ['Q007', 'Q008']]);
    expect(v7.checkpoints.at(-1)?.questionIds).toEqual(['Q006', 'Q016']);
    // "Every adverb must end in -ly." never wraps between "-" and "ly"; hyphenated words are untouched.
    expect(keepSuffixes('Every adverb must end in -ly.')).toBe('Every adverb must end in -\u2060ly.');
    expect(keepSuffixes('a well-known word')).toBe('a well-known word');
  });

  it('fits lesson 1.2.1 on screens, with a check after each dimension and a longer final check', () => {
    const screens = lessonScreens(v21, visualsFor(v21.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v21, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v21.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE008']);
    expect(v21.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    // Word-list answers match in any order.
    expect(grade(v21.questions.Q005, { kind: 'text', values: ['fence and farmer'] })).toBe(true);
    // Every page but the side-by-side comparison has a picture.
    const pages = visualsFor('1-2-1')?.pages ?? {};
    expect(v21.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE007']);
  });

  it('fits lesson 1.2.2 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v22.id);
    const screens = lessonScreens(v22, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v22, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v22.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE007', 'PAGE009']);
    expect(v22.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Both proper nouns, in either order.
    expect(grade(v22.questions.Q010, { kind: 'text', values: ['Leela and Friday'] })).toBe(true);
    // Page 4's dogs are drawn in its comparison cards; every other page has its own picture.
    const pages = visuals?.pages ?? {};
    expect(v22.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE004']);
    expect(visuals?.comparisonArt?.BLOCK007).toHaveLength(2);
  });

  it('fits lesson 1.2.3 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v23.id);
    const screens = lessonScreens(v23, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v23, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v23.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE008']);
    expect(v23.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Both feelings, in either order.
    expect(grade(v23.questions.Q010, { kind: 'text', values: ['fear and hope'] })).toBe(true);
    // Pages 3, 5 and 7 keep their icons in list rows and tinted cards; page 6's pictures sit beside its examples.
    const pages = visuals?.pages ?? {};
    expect(v23.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE007']);
    expect(visuals?.exampleArt?.BLOCK012).toHaveLength(2);
  });

  it('fits lesson 1.2.4 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v24.id);
    const screens = lessonScreens(v24, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v24, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v24.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE008']);
    expect(v24.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Pages 3 and 7 keep their pictures in tinted cards; page 8's pictures sit beside its examples.
    const pages = visuals?.pages ?? {};
    expect(v24.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE007', 'PAGE008']);
    // List-led pages show their group picture with the Key Takeaway, after the list.
    for (const id of ['PAGE004', 'PAGE005', 'PAGE006']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect([id, page[page.length - 1].showArt, page[page.length - 1].showTakeaway]).toEqual([id, true, true]);
    }
  });

  it('fits lesson 1.2.5 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v25.id);
    const screens = lessonScreens(v25, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v25, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v25.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE008', 'PAGE009']);
    expect(v25.finalCheck?.questionIds).toEqual(['Q011', 'Q012', 'Q013', 'Q014', 'Q015']);
    // Any container of water counts.
    expect(grade(v25.questions.Q008, { kind: 'text', values: ['bottles'] })).toBe(true);
    // Pages 3, 6 and 7 keep their pictures beside the examples; page 5's icons sit on tinted list rows;
    // page 9's pictures are in its comparison cards.
    const pages = visuals?.pages ?? {};
    expect(v25.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE007', 'PAGE009']);
    expect(visuals?.comparisonArt?.BLOCK016).toHaveLength(2);
    // The count test's examples (bottles, sand) are drawn with their pictures under the rule.
    const page3 = screens.filter((s) => s.page.page_id === 'PAGE003').flatMap((s) => s.blocks);
    expect(page3.map((b) => b.type)).toEqual(['rule', 'example']);
    expect(pageBlockArt(v25.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
  });

  it('fits lesson 1.2.6 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v26.id);
    const screens = lessonScreens(v26, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v26, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v26.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v26.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Both materials, in either order.
    expect(grade(v26.questions.Q009, { kind: 'text', values: ['concrete and steel'] })).toBe(true);
    // Pages 2, 5 and 6 keep their pictures beside the examples; pages 4 and 7 in their comparison cards.
    const pages = visuals?.pages ?? {};
    expect(v26.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
    expect([visuals?.comparisonArt?.BLOCK008, visuals?.comparisonArt?.BLOCK013].map((a) => a?.length)).toEqual([2, 2]);
  });

  it('fits lesson 1.2.7 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v27.id);
    const screens = lessonScreens(v27, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v27, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v27.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005', 'PAGE007']);
    expect(v27.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Hyphenated answers keep their hyphens; capitals don't matter.
    expect(grade(v27.questions.Q005, { kind: 'text', values: ['Sister-in-law'] })).toBe(true);
    // Pages 2–6 keep their pictures beside the examples; page 7's are in its comparison cards.
    const pages = visuals?.pages ?? {};
    expect(v27.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
    // The main-word rule's examples (teacup, school bus) are drawn with their pictures under the rule.
    expect(pageBlockArt(v27.pages[5], visuals).BLOCK012?.examples).toHaveLength(2);
  });

  it('fits lesson 1.2.8 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v28.id);
    const screens = lessonScreens(v28, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v28, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v28.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007', 'PAGE008']);
    expect(v28.finalCheck?.questionIds).toEqual(['Q010', 'Q011', 'Q012', 'Q013', 'Q014']);
    // Two plural nouns can be typed in either order.
    expect(grade(v28.questions.Q005, { kind: 'text', values: ['biscuits and cakes'] })).toBe(true);
    expect(grade(v28.questions.Q005, { kind: 'text', values: ['cakes'] })).toBe(false);
    // Pages 2 and 4–8 keep their pictures beside the examples; page 3's sisters sit beside the second example.
    const pages = visuals?.pages ?? {};
    expect(v28.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007', 'PAGE008']);
    expect(pageBlockArt(v28.pages[2], visuals).BLOCK006?.examples).toEqual([null, expect.objectContaining({ label: 'Two smiling sisters' })]);
  });

  it('fits lesson 1.2.9 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v29.id);
    const screens = lessonScreens(v29, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v29, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v29.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE006', 'PAGE009', 'PAGE010']);
    expect(v29.finalCheck?.questionIds).toEqual(['Q013', 'Q014', 'Q015', 'Q016', 'Q017']);
    expect(grade(v29.questions.Q001, { kind: 'text', values: ['Churches'] })).toBe(true);
    expect(grade(v29.questions.Q001, { kind: 'text', values: ['churchs'] })).toBe(false);
    // Pages 3–7 keep their pictures beside the examples; pages 2 and 10 draw theirs under the rule.
    const pages = visuals?.pages ?? {};
    expect(v29.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
    // The rule's examples on pages 2–6 carry their pictures.
    for (const [i, id] of [[1, 'BLOCK003'], [2, 'BLOCK004'], [3, 'BLOCK005'], [4, 'BLOCK006'], [5, 'BLOCK008']] as const)
      expect(pageBlockArt(v29.pages[i], visuals)[id]?.examples).toHaveLength(2);
  });

  it('fits lesson 1.2.10 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v210.id);
    const screens = lessonScreens(v210, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v210, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v210.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE008']);
    expect(v210.finalCheck?.questionIds).toEqual(['Q011', 'Q012', 'Q013', 'Q014', 'Q015']);
    expect(grade(v210.questions.Q008, { kind: 'text', values: ['Tigress'] })).toBe(true);
    expect(grade(v210.questions.Q008, { kind: 'text', values: ['tigeress'] })).toBe(false);
    // Every page but the comparison has a main picture; page 8's are in its comparison cards.
    const pages = visuals?.pages ?? {};
    expect(v210.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE008']);
    expect(visuals?.comparisonArt?.BLOCK016).toHaveLength(2);
  });

  it('fits lesson 1.2.11 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v211.id);
    const screens = lessonScreens(v211, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v211, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v211.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007', 'PAGE009']);
    expect(v211.finalCheck?.questionIds).toEqual(['Q010', 'Q011', 'Q012', 'Q013', 'Q014']);
    // Typed possessives are compared without apostrophes, straight or curly.
    expect(grade(v211.questions.Q002, { kind: 'text', values: ['Farmer’s'] })).toBe(true);
    expect(grade(v211.questions.Q012, { kind: 'text', values: ["the pilot's"] })).toBe(true);
    // Pages 7 and 9 draw their pictures in the comparison cards; the recap has none.
    const pages = visuals?.pages ?? {};
    expect(v211.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE007', 'PAGE009', 'PAGE010']);
    expect([visuals?.comparisonArt?.BLOCK010, visuals?.comparisonArt?.BLOCK013].map((a) => a?.length)).toEqual([2, 2]);
  });

  it('fits lesson 1.2.12 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v212.id);
    const screens = lessonScreens(v212, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v212, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v212.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE007', 'PAGE008']);
    expect(v212.finalCheck?.questionIds).toEqual(['Q013', 'Q014', 'Q015', 'Q016', 'Q017']);
    expect(grade(v212.questions.Q011, { kind: 'text', values: ['Ugliness'] })).toBe(true);
    expect(grade(v212.questions.Q011, { kind: 'text', values: ['uglyness'] })).toBe(false);
    // Every page has a picture; list-first pages show theirs with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v212.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.2.13 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v213.id);
    const screens = lessonScreens(v213, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v213, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v213.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE003', 'PAGE005', 'PAGE006', 'PAGE007']);
    expect(v213.finalCheck?.questionIds).toEqual(['Q011', 'Q012', 'Q013', 'Q014', 'Q015']);
    // Appositive answers can include or leave out the determiner.
    expect(grade(v213.questions.Q013, { kind: 'text', values: ['Hill station'] })).toBe(true);
    expect(grade(v213.questions.Q013, { kind: 'text', values: ['Mount Abu'] })).toBe(false);
    // Pages 2–6 keep a picture beside each example.
    const pages = visuals?.pages ?? {};
    expect(v213.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006']);
    for (const [i, id] of [[1, 'BLOCK004'], [2, 'BLOCK006'], [3, 'BLOCK008'], [4, 'BLOCK010'], [5, 'BLOCK012']] as const)
      expect(pageBlockArt(v213.pages[i], visuals)[id]?.examples).toHaveLength(2);
  });

  it('fits lesson 1.2.14 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v214.id);
    const screens = lessonScreens(v214, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v214, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v214.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE009']);
    expect(v214.finalCheck?.questionIds).toEqual(['Q010', 'Q011', 'Q012', 'Q013', 'Q014']);
    // Corrections accept the listed alternatives; the original mistake is wrong.
    expect(grade(v214.questions.Q002, { kind: 'text', values: ['My uncle gave me some advice'] })).toBe(true);
    expect(grade(v214.questions.Q002, { kind: 'text', values: ['My uncle gave me two advices.'] })).toBe(false);
    // Every page has a picture; mistake-first pages show theirs with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v214.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.1 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v131.id);
    const screens = lessonScreens(v131, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v131, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v131.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE006', 'PAGE007']);
    expect(v131.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // An antecedent can be named with or without its determiner.
    expect(grade(v131.questions.Q003, { kind: 'text', values: ['The puppies'] })).toBe(true);
    expect(grade(v131.questions.Q003, { kind: 'text', values: ['they'] })).toBe(false);
    // The parcel sits in page 2's comparison; the rule and list pages (5, 7) have no picture.
    expect(pageBlockArt(v131.pages[1], visuals).BLOCK003?.comparison).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v131.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE005', 'PAGE007']);
    // Pages 3, 4 and 6 show their picture under the intro text. On 4 and 6 the example joins the Key Takeaway;
    // page 3's two examples fill their screen, so its takeaway closes the page alone.
    for (const [id, parts] of [['PAGE003', 3], ['PAGE004', 2], ['PAGE006', 2]] as const) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect([id, page.length, page[0].showArt, page[parts - 1].showTakeaway]).toEqual([id, parts, true, true]);
    }
  });

  it('fits lesson 1.3.2 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v132.id);
    const screens = lessonScreens(v132, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v132, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v132.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE006', 'PAGE008']);
    expect(v132.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Typed answers ignore case; the capital-I questions are multiple choice for that reason.
    expect(grade(v132.questions.Q004, { kind: 'text', values: ['Him'] })).toBe(true);
    expect(grade(v132.questions.Q004, { kind: 'text', values: ['he'] })).toBe(false);
    expect(v132.questions.Q008.type).toBe('multiple_choice');
    // Each example keeps its picture beside it, as in the mockup (pages 7 and 8 with the rule's examples).
    for (const [i, id, n] of [[2, 'BLOCK006', 2], [3, 'BLOCK008', 2], [5, 'BLOCK011', 2], [6, 'BLOCK012', 1], [7, 'BLOCK013', 2]] as const)
      expect(pageBlockArt(v132.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v132.pages[4], visuals).BLOCK009?.comparison).toHaveLength(2);
    // Page 2 opens with its list, so the person icons close the page with the takeaway.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.3 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v133.id);
    const screens = lessonScreens(v133, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v133, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v133.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE006']);
    expect(v133.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v133.questions.Q005, { kind: 'text', values: ['Hers.'] })).toBe(true);
    expect(grade(v133.questions.Q005, { kind: 'text', values: ['her'] })).toBe(false);
    // Typed answers are compared without apostrophes, so the apostrophe questions are multiple choice.
    for (const id of ['Q006', 'Q011']) expect(v133.questions[id].type).toBe('multiple_choice');
    // Every page has a picture except page 6, whose picture sits beside its example; page 5's rule example has one too.
    const pages = visuals?.pages ?? {};
    expect(v133.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE006']);
    expect(pageBlockArt(v133.pages[5], visuals).BLOCK011?.examples).toHaveLength(1);
    expect(pageBlockArt(v133.pages[4], visuals).BLOCK009?.examples).toHaveLength(1);
    // Pages 2 and 5 open with a list or rule, so their picture closes the page with the takeaway.
    for (const id of ['PAGE002', 'PAGE005']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.3.4 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v134.id);
    const screens = lessonScreens(v134, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v134, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v134.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE006']);
    expect(v134.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v134.questions.Q003, { kind: 'text', values: ['Our'] })).toBe(true);
    expect(grade(v134.questions.Q003, { kind: 'text', values: ['ours'] })).toBe(false);
    // Typed answers are compared without apostrophes, so its is only tested with multiple choice.
    expect(v134.questions.Q007.type).toBe('multiple_choice');
    // Pictures sit beside the rule examples (pages 3 and 5), in the comparison (4) and beside the tortoise example (6).
    for (const [i, id, n] of [[2, 'BLOCK004', 2], [4, 'BLOCK006', 2], [5, 'BLOCK008', 1]] as const)
      expect(pageBlockArt(v134.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v134.pages[3], visuals).BLOCK005?.comparison).toHaveLength(2);
    // Page 2 opens with its list, so the pointing boy closes the page with the takeaway.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.5 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v135.id);
    const screens = lessonScreens(v135, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v135, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v135.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v135.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v135.questions.Q007, { kind: 'text', values: ['Myself.'] })).toBe(true);
    expect(grade(v135.questions.Q007, { kind: 'text', values: ['me'] })).toBe(false);
    // Rule examples (page 3) and the comparison (page 4) keep their pictures; page 2's list has none.
    expect(pageBlockArt(v135.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v135.pages[3], visuals).BLOCK005?.comparison).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v135.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004']);
    // The self-family list fits on one screen with its takeaway.
    expect(screens.filter((s) => s.page.page_id === 'PAGE002')).toHaveLength(1);
  });

  it('fits lesson 1.3.6 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v136.id);
    const screens = lessonScreens(v136, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v136, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v136.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v136.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    // The singer can be a man or a woman.
    for (const answer of ['himself', 'Herself']) expect(grade(v136.questions.Q009, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v136.questions.Q009, { kind: 'text', values: ['themselves'] })).toBe(false);
    // Pictures sit beside each example (pages 2, 3 and 5's rule example) and in page 4's comparison.
    for (const [i, id, n] of [[1, 'BLOCK004', 2], [2, 'BLOCK006', 2], [4, 'BLOCK008', 1]] as const)
      expect(pageBlockArt(v136.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v136.pages[3], visuals).BLOCK007?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.3.7 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v137.id);
    const screens = lessonScreens(v137, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v137, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v137.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE005', 'PAGE006']);
    expect(v137.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v137.questions.Q002, { kind: 'text', values: ['this'] })).toBe(true);
    expect(grade(v137.questions.Q002, { kind: 'text', values: ['That'] })).toBe(false);
    // Pictures sit beside each example (pages 3, 4 and 6) and in page 5's comparison.
    for (const [i, id, n] of [[2, 'BLOCK005', 2], [3, 'BLOCK007', 2], [5, 'BLOCK010', 1]] as const)
      expect(pageBlockArt(v137.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v137.pages[4], visuals).BLOCK008?.comparison).toHaveLength(2);
    // Page 2 opens with its list, so the near/far icons close the page with the takeaway.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.8 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v138.id);
    const screens = lessonScreens(v138, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v138, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v138.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006']);
    expect(v138.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v138.questions.Q002, { kind: 'text', values: ['who'] })).toBe(true);
    expect(grade(v138.questions.Q002, { kind: 'text', values: ['Whom'] })).toBe(false);
    // Every page but the comparison has a main picture; the comparison draws one per item.
    const pages = visuals?.pages ?? {};
    expect(v138.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE005']);
    expect(pageBlockArt(v138.pages[4], visuals).BLOCK009?.comparison).toHaveLength(2);
    // Page 6 opens with its rule, so the paintings close the page with the takeaway.
    const page6 = screens.filter((s) => s.page.page_id === 'PAGE006');
    expect(page6[page6.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.9 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v139.id);
    const screens = lessonScreens(v139, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v139, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v139.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE005', 'PAGE007']);
    expect(v139.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v139.questions.Q003, { kind: 'text', values: ['Whose'] })).toBe(true);
    expect(grade(v139.questions.Q003, { kind: 'text', values: ['who'] })).toBe(false);
    // Each example keeps its picture beside it (page 6's with the rule), and page 7's comparison draws one per item.
    for (const [i, id, n] of [[1, 'BLOCK004', 2], [2, 'BLOCK006', 1], [3, 'BLOCK008', 1], [4, 'BLOCK010', 1], [5, 'BLOCK011', 1]] as const)
      expect(pageBlockArt(v139.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(pageBlockArt(v139.pages[6], visuals).BLOCK012?.comparison).toHaveLength(2);
    // Pages 3–5 fit their example and takeaway on one screen after the intro.
    for (const id of ['PAGE003', 'PAGE004', 'PAGE005']) expect(screens.filter((s) => s.page.page_id === id)).toHaveLength(2);
  });

  it('fits lesson 1.3.10 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1310.id);
    const screens = lessonScreens(v1310, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1310, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1310.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005', 'PAGE006']);
    expect(v1310.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Either every- word for people is right.
    for (const answer of ['Everyone', 'everybody']) expect(grade(v1310.questions.Q005, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v1310.questions.Q005, { kind: 'text', values: ['Everything'] })).toBe(false);
    // Page 2's list shows as label tiles; the rule's examples on page 3 each keep a picture.
    expect(parseList((v1310.pages[1].content[0] as { items: string[] }).items).layout).toBe('tiles');
    expect(pageBlockArt(v1310.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v1310.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003']);
  });

  it('fits lesson 1.3.11 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1311.id);
    const screens = lessonScreens(v1311, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1311, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1311.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006']);
    expect(v1311.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v1311.questions.Q004, { kind: 'text', values: ['neither'] })).toBe(true);
    expect(grade(v1311.questions.Q004, { kind: 'text', values: ['Either'] })).toBe(false);
    // Rule examples (page 5) keep their pictures and page 6's comparison draws one per item.
    expect(pageBlockArt(v1311.pages[4], visuals).BLOCK009?.examples).toHaveLength(2);
    expect(pageBlockArt(v1311.pages[5], visuals).BLOCK010?.comparison).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v1311.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE005', 'PAGE006']);
  });

  it('fits lesson 1.3.12 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1312.id);
    const screens = lessonScreens(v1312, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1312, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1312.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v1312.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    // Both reciprocal pronouns are accepted, typed in any case.
    for (const answer of ['each other', 'One another']) expect(grade(v1312.questions.Q002, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v1312.questions.Q002, { kind: 'text', values: ['themselves'] })).toBe(false);
    // Typed answers are compared without apostrophes, so each other's is tested with multiple choice.
    expect(v1312.questions.Q003.type).toBe('multiple_choice');
    // Examples on pages 2 and 3 keep their pictures and page 4's comparison draws one per item; page 5 has none.
    expect(pageBlockArt(v1312.pages[1], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v1312.pages[2], visuals).BLOCK006?.examples).toHaveLength(1);
    expect(pageBlockArt(v1312.pages[3], visuals).BLOCK007?.comparison).toHaveLength(2);
    expect(pageBlockArt(v1312.pages[4], visuals)).toEqual({});
  });

  it('fits lesson 1.3.13 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1313.id);
    const screens = lessonScreens(v1313, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1313, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1313.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006', 'PAGE007']);
    expect(v1313.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // The antecedent can be named with or without its determiner.
    for (const answer of ['radio', 'The radio']) expect(grade(v1313.questions.Q008, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v1313.questions.Q008, { kind: 'text', values: ['Nani'] })).toBe(false);
    // Examples keep their picture beside them (page 2's with the rule); page 3's two people sit under the intro instead.
    for (const [i, id, n] of [[1, 'BLOCK003', 2], [4, 'BLOCK008', 1], [5, 'BLOCK010', 1], [6, 'BLOCK012', 2]] as const)
      expect(pageBlockArt(v1313.pages[i], visuals)[id]?.examples).toHaveLength(n);
    expect(screens.find((s) => s.page.page_id === 'PAGE003')).toMatchObject({ part: 0, showArt: true });
    // Page 4 opens with its rule, so Meena and her brother close the page with the takeaway.
    const page4 = screens.filter((s) => s.page.page_id === 'PAGE004');
    expect(page4[page4.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.3.14 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1314.id);
    const screens = lessonScreens(v1314, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1314, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1314.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v1314.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v1314.questions.Q011, { kind: 'text', values: ['They'] })).toBe(true);
    expect(grade(v1314.questions.Q011, { kind: 'text', values: ['me'] })).toBe(false);
    // Every page has a picture; pages that open with a mistake card or rule show theirs with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v1314.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    for (const id of ['PAGE002', 'PAGE003', 'PAGE004']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.3.15 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1315.id);
    const screens = lessonScreens(v1315, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1315, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1315.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE009']);
    expect(v1315.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    // Corrections accept the listed alternatives; the original mistake is wrong.
    expect(grade(v1315.questions.Q005, { kind: 'text', values: ['These shoes are too tight for me'] })).toBe(true);
    expect(grade(v1315.questions.Q005, { kind: 'text', values: ['Them shoes are too tight for me.'] })).toBe(false);
    // Its, it's and I/me are only tested with multiple choice.
    for (const id of ['Q001', 'Q002', 'Q003', 'Q010']) expect(v1315.questions[id].type).toBe('multiple_choice');
    // Mistake-first pages show their picture with the takeaway; page 9 has none.
    const pages = visuals?.pages ?? {};
    expect(v1315.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE009']);
    for (const id of ['PAGE002', 'PAGE003', 'PAGE005', 'PAGE006', 'PAGE007', 'PAGE008']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.4.1 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v141.id)).toBe('s1.4.01');
    expect(lessonForTopic('s1.4.01')?.id).toBe('1-4-1');
    const visuals = visualsFor(v141.id);
    const screens = lessonScreens(v141, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v141, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v141.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE006']);
    expect(v141.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v141.questions.Q011, { kind: 'text', values: ['The'] })).toBe(true);
    expect(grade(v141.questions.Q011, { kind: 'text', values: ['a'] })).toBe(false);
    // Page 2's questions show as question rows with an answer chip.
    expect(parseList((v141.pages[1].content[0] as { items: string[] }).items).layout).toBe('qa');
    expect(pageBlockArt(v141.pages[3], visuals).BLOCK006?.comparison).toHaveLength(2);
    // Pages that open with a list or rule show their picture with the takeaway.
    for (const id of ['PAGE002', 'PAGE005', 'PAGE006']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.4.2 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v142.id);
    const screens = lessonScreens(v142, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v142, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v142.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v142.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v142.questions.Q003, { kind: 'text', values: ['A'] })).toBe(true);
    expect(grade(v142.questions.Q003, { kind: 'text', values: ['the'] })).toBe(false);
    // Every page has a picture; page 3 opens with its rule, so the mango and chair close it with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v142.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    const page3 = screens.filter((s) => s.page.page_id === 'PAGE003');
    expect(page3[page3.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.3 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v143.id);
    const screens = lessonScreens(v143, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v143, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v143.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005', 'PAGE006']);
    expect(v143.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    expect(grade(v143.questions.Q009, { kind: 'text', values: ['An'] })).toBe(true);
    expect(grade(v143.questions.Q009, { kind: 'text', values: ['a'] })).toBe(false);
    expect(grade(v143.questions.Q010, { kind: 'text', values: ['a'] })).toBe(true);
    // Each example keeps its picture beside it (pages 2 and 6 with the rule's examples).
    for (const [i, id] of [[1, 'BLOCK003'], [2, 'BLOCK005'], [3, 'BLOCK007'], [5, 'BLOCK010']] as const)
      expect(pageBlockArt(v143.pages[i], visuals)[id]?.examples).toHaveLength(2);
  });

  it('fits lesson 1.4.4 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v144.id);
    const screens = lessonScreens(v144, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v144, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v144.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v144.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v144.questions.Q003, { kind: 'text', values: ['the'] })).toBe(true);
    expect(grade(v144.questions.Q003, { kind: 'text', values: ['A'] })).toBe(false);
    // Pages 1–5 have a main picture; page 6's two examples each keep theirs.
    const pages = visuals?.pages ?? {};
    expect(v144.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE006']);
    expect(pageBlockArt(v144.pages[5], visuals).BLOCK012?.examples).toHaveLength(2);
  });

  it('fits lesson 1.4.5 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v145.id);
    const screens = lessonScreens(v145, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v145, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v145.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE005']);
    expect(v145.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011']);
    // Removing the article fixes the sentence; leaving it in doesn't.
    expect(grade(v145.questions.Q010, { kind: 'text', values: ['I like geography more than any other subject'] })).toBe(true);
    expect(grade(v145.questions.Q010, { kind: 'text', values: ['I like the geography more than any other subject.'] })).toBe(false);
    // The rule's two examples on page 2 keep their pictures; page 4's tiles each get an icon.
    expect(pageBlockArt(v145.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    const tiles = parseList((v145.pages[3].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
  });

  it('fits lesson 1.4.6 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v146.id);
    const screens = lessonScreens(v146, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v146, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v146.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE005']);
    expect(v146.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v146.questions.Q008, { kind: 'text', values: ['the'] })).toBe(true);
    expect(grade(v146.questions.Q008, { kind: 'text', values: ['A'] })).toBe(false);
    // Page 4's comparison draws one picture per item; page 2 opens with its rule, so the owls close it.
    expect(pageBlockArt(v146.pages[3], visuals).BLOCK006?.comparison).toHaveLength(2);
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.7 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v147.id);
    const screens = lessonScreens(v147, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v147, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v147.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005', 'PAGE006']);
    expect(v147.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Some and any both fit before uncountable juice; a sugar is corrected to some sugar or a unit of sugar.
    for (const answer of ['some', 'Any']) expect(grade(v147.questions.Q005, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v147.questions.Q005, { kind: 'text', values: ['a'] })).toBe(false);
    expect(grade(v147.questions.Q008, { kind: 'text', values: ['Can you lend me a cup of sugar'] })).toBe(true);
    expect(grade(v147.questions.Q008, { kind: 'text', values: ['Can you lend me a sugar?'] })).toBe(false);
    // Page 5's tiles each get an icon; page 6's comparison draws one picture per item.
    const tiles = parseList((v147.pages[4].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v147.pages[5], visuals).BLOCK008?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.4.8 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v148.id);
    const screens = lessonScreens(v148, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v148, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v148.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE006']);
    expect(v148.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v148.questions.Q004, { kind: 'text', values: ['The'] })).toBe(true);
    expect(grade(v148.questions.Q012, { kind: 'text', values: ['My aunt moved to Australia last year'] })).toBe(true);
    expect(grade(v148.questions.Q012, { kind: 'text', values: ['My aunt moved to the Australia last year.'] })).toBe(false);
    // Every page has a picture; page 3 opens with its rule, so its panels close the page with the takeaway.
    const pages = visuals?.pages ?? {};
    expect(v148.pages.filter((p) => !pages[p.page_id]?.art)).toEqual([]);
    const page3 = screens.filter((s) => s.page.page_id === 'PAGE003');
    expect(page3[page3.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.9 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v149.id);
    const screens = lessonScreens(v149, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v149, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v149.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE006']);
    expect(v149.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v149.questions.Q003, { kind: 'text', values: ['These'] })).toBe(true);
    expect(grade(v149.questions.Q003, { kind: 'text', values: ['this'] })).toBe(false);
    for (const answer of ['These oranges are very juicy', 'Those oranges are very juicy.'])
      expect(grade(v149.questions.Q010, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v149.questions.Q010, { kind: 'text', values: ['This oranges are very juicy.'] })).toBe(false);
    // Page 2's rule examples keep their pictures; page 3's row sits under the intro; page 5 opens with its rule, so its
    // picture closes the page.
    expect(pageBlockArt(v149.pages[1], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(screens.find((s) => s.page.page_id === 'PAGE003')).toMatchObject({ part: 0, showArt: true });
    const page5 = screens.filter((s) => s.page.page_id === 'PAGE005');
    expect(page5[page5.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.10 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1410.id);
    const screens = lessonScreens(v1410, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1410, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1410.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v1410.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v1410.questions.Q005, { kind: 'text', values: ['Own'] })).toBe(true);
    for (const answer of ['His car broke down on the highway', 'The car broke down on the highway.'])
      expect(grade(v1410.questions.Q010, { kind: 'text', values: [answer] })).toBe(true);
    // Page 4's mockup picture shows a different example, so it has none; page 6 keeps only the shoes picture.
    const pages = visuals?.pages ?? {};
    expect(v1410.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE004', 'PAGE006']);
    expect(pageBlockArt(v1410.pages[5], visuals).BLOCK011?.examples?.map(Boolean)).toEqual([false, true]);
    // Page 2 opens with its rule, so the umbrella closes the page; page 3's intro line carries the two girls.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    expect(screens.find((s) => s.page.page_id === 'PAGE003')).toMatchObject({ part: 0, showArt: true });
  });

  it('fits lesson 1.4.11 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1411.id);
    const screens = lessonScreens(v1411, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1411, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1411.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE005']);
    expect(v1411.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v1411.questions.Q007, { kind: 'text', values: ['No'] })).toBe(true);
    expect(grade(v1411.questions.Q007, { kind: 'text', values: ['any'] })).toBe(false);
    // Pages 2 and 4 keep a picture beside each example; page 3's comparison draws one per item.
    for (const [i, id] of [[1, 'BLOCK003'], [3, 'BLOCK007']] as const)
      expect(pageBlockArt(v1411.pages[i], visuals)[id]?.examples).toHaveLength(2);
    expect(pageBlockArt(v1411.pages[2], visuals).BLOCK005?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.4.12 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1412.id);
    const screens = lessonScreens(v1412, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1412, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1412.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE005']);
    expect(v1412.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012', 'Q003']);
    expect(grade(v1412.questions.Q005, { kind: 'text', values: ['Neither'] })).toBe(true);
    expect(grade(v1412.questions.Q005, { kind: 'text', values: ['either'] })).toBe(false);
    for (const answer of ['Each runner got a medal', 'Every runner got a medal.'])
      expect(grade(v1412.questions.Q012, { kind: 'text', values: [answer] })).toBe(true);
  });

  it('fits lesson 1.4.13 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1413.id);
    const screens = lessonScreens(v1413, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1413, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1413.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v1413.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v1413.questions.Q006, { kind: 'text', values: ['Second'] })).toBe(true);
    expect(grade(v1413.questions.Q006, { kind: 'text', values: ['poetry'] })).toBe(false);
    // Every page has a picture; page 2's rule examples keep theirs and page 5's book closes the page.
    const pages = visuals?.pages ?? {};
    expect(v1413.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002']);
    expect(pageBlockArt(v1413.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    const page5 = screens.filter((s) => s.page.page_id === 'PAGE005');
    expect(page5[page5.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.14 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1414.id);
    const screens = lessonScreens(v1414, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1414, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1414.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE003', 'PAGE004']);
    expect(v1414.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    // Either question word fits a birthday party's day.
    for (const answer of ['What', 'which']) expect(grade(v1414.questions.Q004, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v1414.questions.Q004, { kind: 'text', values: ['Whose'] })).toBe(false);
    // Page 3's mockup picture shows a different example, so it has none.
    const pages = visuals?.pages ?? {};
    expect(v1414.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003']);
  });

  it('fits lesson 1.4.15 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1415.id);
    const screens = lessonScreens(v1415, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1415, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1415.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE003', 'PAGE005']);
    expect(v1415.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v1415.questions.Q006, { kind: 'text', values: ['Both'] })).toBe(true);
    expect(grade(v1415.questions.Q006, { kind: 'text', values: ['all'] })).toBe(false);
    // Pages 3 and 4 keep a picture beside each example; page 5's comparison draws one per item.
    for (const [i, id] of [[2, 'BLOCK006'], [3, 'BLOCK008']] as const)
      expect(pageBlockArt(v1415.pages[i], visuals)[id]?.examples).toHaveLength(2);
    expect(pageBlockArt(v1415.pages[4], visuals).BLOCK010?.comparison).toHaveLength(2);
    // Page 2 opens with its list, so the row of icons closes the page with the takeaway.
    const page2 = screens.filter((s) => s.page.page_id === 'PAGE002');
    expect(page2[page2.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
  });

  it('fits lesson 1.4.16 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v1416.id);
    const screens = lessonScreens(v1416, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1416, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1416.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v1416.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v1416.questions.Q006, { kind: 'text', values: ['Half'] })).toBe(true);
    expect(grade(v1416.questions.Q007, { kind: 'text', values: ['All'] })).toBe(true);
    expect(grade(v1416.questions.Q007, { kind: 'text', values: ['my'] })).toBe(false);
    // Page 2's slots show as label tiles; page 4's examples each keep a picture.
    expect(parseList((v1416.pages[1].content[0] as { items: string[] }).items).layout).toBe('tiles');
    expect(pageBlockArt(v1416.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
    for (const id of ['PAGE002', 'PAGE003']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.5.1 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v151.id)).toBe('s1.5.01');
    expect(lessonForTopic('s1.5.01')?.id).toBe('1-5-1');
    const visuals = visualsFor(v151.id);
    const screens = lessonScreens(v151, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v151, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v151.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v151.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Any adjective meaning 'not loud' fits.
    for (const answer of ['quiet', 'Low', 'soft']) expect(grade(v151.questions.Q010, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v151.questions.Q010, { kind: 'text', values: ['loud'] })).toBe(false);
    // Page 2's questions show as question rows; pages 2–5 open with a card, so their picture closes the page.
    expect(parseList((v151.pages[1].content[0] as { items: string[] }).items).layout).toBe('qa');
    for (const id of ['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005']) {
      const page = screens.filter((s) => s.page.page_id === id);
      expect(page[page.length - 1]).toMatchObject({ showArt: true, showTakeaway: true });
    }
  });

  it('fits lesson 1.5.2 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v152.id);
    const screens = lessonScreens(v152, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v152, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v152.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE003', 'PAGE005']);
    expect(v152.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Any strong adjective for 'very hungry' fits.
    for (const answer of ['Starving', 'famished', 'ravenous']) expect(grade(v152.questions.Q007, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v152.questions.Q007, { kind: 'text', values: ['hungry'] })).toBe(false);
    // Page 2's meaning groups show as tiles, each with an icon; page 3's comparison draws one picture per item.
    const tiles = parseList((v152.pages[1].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v152.pages[2], visuals).BLOCK004?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.5.3 on screens, with a check after each dimension and a longer final check', () => {
    const visuals = visualsFor(v153.id);
    const screens = lessonScreens(v153, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v153, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v153.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v153.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v153.questions.Q008, { kind: 'text', values: ['Lazy'] })).toBe(true);
    expect(grade(v153.questions.Q008, { kind: 'text', values: ['two'] })).toBe(false);
    // Page 4's comparison draws one picture per item; page 2 has no picture.
    expect(pageBlockArt(v153.pages[3], visuals).BLOCK006?.comparison).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v153.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004']);
  });

  it('fits lesson 1.5.9 on screens, with a check after each dimension and a longer final check', () => {
    // 1.5.9 follows 1.5.3: s1.5.04–s1.5.08 were merged into s1.5.03.
    expect(curriculumTopicId(v159.id)).toBe('s1.5.09');
    expect(lessonForTopic('s1.5.09')?.id).toBe('1-5-9');
    const visuals = visualsFor(v159.id);
    const screens = lessonScreens(v159, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v159, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v159.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v159.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v159.questions.Q003, { kind: 'text', values: ['Spanish'] })).toBe(true);
    expect(grade(v159.questions.Q003, { kind: 'text', values: ['Spain'] })).toBe(false);
    expect(grade(v159.questions.Q006, { kind: 'text', values: ['Egyptian'] })).toBe(true);
    expect(grade(v159.questions.Q006, { kind: 'text', values: ['stamps'] })).toBe(false);
    // Page 2's place → adjective pairs show as chips; page 3's two examples each get a picture.
    expect(parseList((v159.pages[1].content[0] as { items: string[] }).items).layout).toBe('chips');
    expect(visuals?.exampleArt?.BLOCK005).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v159.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003']);
  });

  it('fits lesson 1.5.10 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v1510.id)).toBe('s1.5.10');
    expect(lessonForTopic('s1.5.10')?.id).toBe('1-5-10');
    const visuals = visualsFor(v1510.id);
    const screens = lessonScreens(v1510, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1510, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1510.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v1510.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    const match = v1510.questions.Q010 as { pairs: Record<string, string> };
    expect(match.pairs).toEqual({ L1: 'R3', L2: 'R1', L3: 'R2' });
    // Page 2's pattern names are too long for tiles; page 4's rule examples and page 5's comparison each get pictures.
    expect(parseList((v1510.pages[1].content[0] as { items: string[] }).items).layout).toBe('rows');
    expect(pageBlockArt(v1510.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(pageBlockArt(v1510.pages[4], visuals).BLOCK007?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.5.11 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v1511.id)).toBe('s1.5.11');
    expect(lessonForTopic('s1.5.11')?.id).toBe('1-5-11');
    const visuals = visualsFor(v1511.id);
    const screens = lessonScreens(v1511, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1511, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // The first dimension runs over four pages, so its check waits until page 5.
    expect(v1511.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE005', 'PAGE006']);
    expect(v1511.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v1511.questions.Q003, { kind: 'text', values: ['Tired.'] })).toBe(true);
    expect(grade(v1511.questions.Q003, { kind: 'text', values: ['tiring'] })).toBe(false);
    expect(grade(v1511.questions.Q010, { kind: 'text', values: ['I was very interested in the science fair.'] })).toBe(true);
    expect(grade(v1511.questions.Q010, { kind: 'text', values: ['I was very interesting in the science fair.'] })).toBe(false);
    // Page 4's pairs show as chips; page 5's comparison and page 6's examples each get two pictures.
    expect(parseList((v1511.pages[3].content[0] as { items: string[] }).items).layout).toBe('chips');
    expect(pageBlockArt(v1511.pages[4], visuals).BLOCK006?.comparison).toHaveLength(2);
    expect(pageBlockArt(v1511.pages[5], visuals).BLOCK008?.examples).toHaveLength(2);
  });

  it('fits lesson 1.5.12 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v1512.id)).toBe('s1.5.12');
    expect(lessonForTopic('s1.5.12')?.id).toBe('1-5-12');
    const visuals = visualsFor(v1512.id);
    const screens = lessonScreens(v1512, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1512, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1512.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v1512.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v1512.questions.Q002, { kind: 'text', values: ['Deserted'] })).toBe(true);
    expect(grade(v1512.questions.Q007, { kind: 'text', values: ['heavy'] })).toBe(true);
    // Both 'live' and 'living' fix 'The alive fish'; leaving alive in place does not.
    for (const fixed of ['The live fish swam in the bucket.', 'The living fish swam in the bucket'])
      expect(grade(v1512.questions.Q009, { kind: 'text', values: [fixed] })).toBe(true);
    expect(grade(v1512.questions.Q009, { kind: 'text', values: ['The alive fish swam in the bucket.'] })).toBe(false);
    // Every page but the recap has its own scene; the recap has the pencil.
    const pages = visuals?.pages ?? {};
    expect(v1512.pages.every((p) => pages[p.page_id]?.art)).toBe(true);
  });

  it('fits lesson 1.5.13 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v1513.id)).toBe('s1.5.13');
    expect(lessonForTopic('s1.5.13')?.id).toBe('1-5-13');
    const visuals = visualsFor(v1513.id);
    const screens = lessonScreens(v1513, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1513, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1513.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE005']);
    expect(v1513.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v1513.questions.Q006, { kind: 'text', values: ['Anyone famous'] })).toBe(true);
    expect(grade(v1513.questions.Q006, { kind: 'text', values: ['famous anyone'] })).toBe(false);
    expect(grade(v1513.questions.Q011, { kind: 'text', values: ['We bought a big red umbrella.'] })).toBe(true);
    expect(grade(v1513.questions.Q011, { kind: 'text', values: ['We bought a red big umbrella.'] })).toBe(false);
    // Page 2's eight groups show as tiles, each with an icon.
    const tiles = parseList((v1513.pages[1].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries).toHaveLength(8);
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
  });

  it('fits lesson 1.5.14 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v1514.id)).toBe('s1.5.14');
    expect(lessonForTopic('s1.5.14')?.id).toBe('1-5-14');
    const visuals = visualsFor(v1514.id);
    const screens = lessonScreens(v1514, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1514, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1514.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE005']);
    expect(v1514.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v1514.questions.Q003, { kind: 'text', values: ['For'] })).toBe(true);
    expect(grade(v1514.questions.Q003, { kind: 'text', values: ['of'] })).toBe(false);
    expect(grade(v1514.questions.Q007, { kind: 'text', values: ['to'] })).toBe(true);
    expect(grade(v1514.questions.Q011, { kind: 'text', values: ['Kiran is afraid of the dark.'] })).toBe(true);
    expect(grade(v1514.questions.Q011, { kind: 'text', values: ['Kiran is afraid from the dark.'] })).toBe(false);
    // Page 2's six prepositions show as tiles, each with an icon; pages 3 and 4 each get two pictures.
    const tiles = parseList((v1514.pages[1].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v1514.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v1514.pages[3], visuals).BLOCK006?.comparison).toHaveLength(2);
  });

  it('fits lesson 1.5.15 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v1515.id)).toBe('s1.5.15');
    expect(lessonForTopic('s1.5.15')?.id).toBe('1-5-15');
    const visuals = visualsFor(v1515.id);
    const screens = lessonScreens(v1515, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1515, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // Three dimensions, three quick checks.
    expect(v1515.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE005']);
    expect(v1515.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v1515.questions.Q001, { kind: 'text', values: ['Helpful'] })).toBe(true);
    expect(grade(v1515.questions.Q005, { kind: 'text', values: ['nervous'] })).toBe(true);
    expect(grade(v1515.questions.Q005, { kind: 'text', values: ['nerveous'] })).toBe(false);
    expect(grade(v1515.questions.Q010, { kind: 'text', values: ['noisy'] })).toBe(true);
    expect(grade(v1515.questions.Q010, { kind: 'text', values: ['noisey'] })).toBe(false);
    // Page 3's endings show as tiles, each with an icon; pages 2 and 4 each get two pictures.
    const tiles = parseList((v1515.pages[2].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v1515.pages[1], visuals).BLOCK003?.comparison).toHaveLength(2);
    expect(pageBlockArt(v1515.pages[3], visuals).BLOCK005?.examples).toHaveLength(2);
  });

  it('fits lesson 1.5.16 on screens, with a check after each dimension and a longer final check', () => {
    // The last lesson of Stage 1.
    expect(curriculumTopicId(v1516.id)).toBe('s1.5.16');
    expect(lessonForTopic('s1.5.16')?.id).toBe('1-5-16');
    const visuals = visualsFor(v1516.id);
    const screens = lessonScreens(v1516, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v1516, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v1516.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006', 'PAGE009']);
    expect(v1516.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    expect(grade(v1516.questions.Q005, { kind: 'text', values: ['Arjun is interested in astronomy.'] })).toBe(true);
    expect(grade(v1516.questions.Q005, { kind: 'text', values: ['Arjun is interested at astronomy.'] })).toBe(false);
    expect(grade(v1516.questions.Q009, { kind: 'text', values: ['The students were very excited about the trip'] })).toBe(true);
    // Pages 1–8 have mockup pictures; page 9 has no mockup; the checklist has the pencil.
    const pages = visuals?.pages ?? {};
    expect(v1516.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE009']);
  });

  it('fits lesson 2.1.1 on screens, with a check after each dimension and a longer final check', () => {
    // The first lesson of Stage 2.
    expect(curriculumTopicId(v2101.id)).toBe('s2.1.01');
    expect(lessonForTopic('s2.1.01')?.id).toBe('2-1-1');
    const visuals = visualsFor(v2101.id);
    const screens = lessonScreens(v2101, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2101, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2101.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE005']);
    expect(v2101.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2101.questions.Q003, { kind: 'text', values: ['Smiled'] })).toBe(true);
    expect(grade(v2101.questions.Q004, { kind: 'text', values: ['is fixing'] })).toBe(true);
    expect(grade(v2101.questions.Q004, { kind: 'text', values: ['fixing'] })).toBe(false);
    expect(grade(v2101.questions.Q008, { kind: 'text', values: ['whistled'] })).toBe(true);
    // Page 5's kinds are too long for tiles; page 3's rule examples each get a picture; page 5 has none.
    expect(parseList((v2101.pages[4].content[0] as { items: string[] }).items).layout).toBe('rows');
    expect(pageBlockArt(v2101.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2101.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE005']);
  });

  it('fits lesson 2.1.2 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2102.id)).toBe('s2.1.02');
    expect(lessonForTopic('s2.1.02')?.id).toBe('2-1-2');
    const visuals = visualsFor(v2102.id);
    const screens = lessonScreens(v2102, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2102, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2102.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE005']);
    expect(v2102.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2102.questions.Q001, { kind: 'text', values: ['Building'] })).toBe(true);
    expect(grade(v2102.questions.Q001, { kind: 'text', values: ['are'] })).toBe(false);
    expect(grade(v2102.questions.Q005, { kind: 'text', values: ['will'] })).toBe(true);
    expect(grade(v2102.questions.Q008, { kind: 'text', values: ['landed'] })).toBe(true);
    // Page 3's helper families show as tiles; the three "Forms of" tiles have icons, "Others" (shared with 1.4.1) none.
    const tiles = parseList((v2102.pages[2].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => Boolean(LIST_ICONS[(e.label ?? '').toLowerCase()]))).toEqual([true, true, true, false]);
    expect(pageBlockArt(v2102.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2102.pages[4], visuals).BLOCK007?.comparison).toHaveLength(2);
  });

  it('fits lesson 2.1.3 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2103.id)).toBe('s2.1.03');
    expect(lessonForTopic('s2.1.03')?.id).toBe('2-1-3');
    const visuals = visualsFor(v2103.id);
    const screens = lessonScreens(v2103, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2103, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // The stative dimension runs over pages 3–5, so its check waits until page 5.
    expect(v2103.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005']);
    expect(v2103.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v2103.questions.Q004, { kind: 'text', values: ['Holds'] })).toBe(true);
    expect(grade(v2103.questions.Q004, { kind: 'text', values: ['saris'] })).toBe(false);
    expect(grade(v2103.questions.Q006, { kind: 'text', values: ['buried'] })).toBe(true);
    // Page 3's five groups show as tiles, each with an icon; pages 2 and 4 picture both examples.
    const tiles = parseList((v2103.pages[2].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v2103.pages[1], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2103.pages[3], visuals).BLOCK007?.examples).toHaveLength(2);
  });

  it('fits lesson 2.1.4 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2104.id)).toBe('s2.1.04');
    expect(lessonForTopic('s2.1.04')?.id).toBe('2-1-4');
    const visuals = visualsFor(v2104.id);
    const screens = lessonScreens(v2104, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2104, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2104.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE005']);
    expect(v2104.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v2104.questions.Q002, { kind: 'text', values: ['Grew'] })).toBe(true);
    expect(grade(v2104.questions.Q002, { kind: 'text', values: ['restless'] })).toBe(false);
    expect(grade(v2104.questions.Q007, { kind: 'text', values: ['looked'] })).toBe(true);
    // Page 2's three groups show as tiles, each with an icon; pages 3–5 picture both of their examples or items.
    const tiles = parseList((v2104.pages[1].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v2104.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2104.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(pageBlockArt(v2104.pages[4], visuals).BLOCK007?.comparison).toHaveLength(2);
  });

  it('fits lesson 2.1.5 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2105.id)).toBe('s2.1.05');
    expect(lessonForTopic('s2.1.05')?.id).toBe('2-1-5');
    const visuals = visualsFor(v2105.id);
    const screens = lessonScreens(v2105, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2105, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2105.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004']);
    expect(v2105.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    // The object may be given with or without its determiner.
    for (const answer of ['sandal', 'My sandal']) expect(grade(v2105.questions.Q002, { kind: 'text', values: [answer] })).toBe(true);
    expect(grade(v2105.questions.Q002, { kind: 'text', values: ['goat'] })).toBe(false);
    expect(grade(v2105.questions.Q007, { kind: 'text', values: ['opened'] })).toBe(true);
    expect(grade(v2105.questions.Q007, { kind: 'text', values: ['sneezed'] })).toBe(false);
    // Pages 2 and 3 picture each example; page 4's comparison draws one picture per item.
    expect(pageBlockArt(v2105.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2105.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v2105.pages[3], visuals).BLOCK006?.comparison).toHaveLength(2);
  });

  it('fits lesson 2.1.6 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2106.id)).toBe('s2.1.06');
    expect(lessonForTopic('s2.1.06')?.id).toBe('2-1-6');
    const visuals = visualsFor(v2106.id);
    const screens = lessonScreens(v2106, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2106, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2106.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006']);
    expect(v2106.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v2106.questions.Q003, { kind: 'text', values: ['Smiled'] })).toBe(true);
    expect(grade(v2106.questions.Q003, { kind: 'text', values: ['smileed'] })).toBe(false);
    expect(grade(v2106.questions.Q006, { kind: 'text', values: ['bought'] })).toBe(true);
    expect(grade(v2106.questions.Q006, { kind: 'text', values: ['buyed'] })).toBe(false);
    expect(grade(v2106.questions.Q009, { kind: 'text', values: ['sung'] })).toBe(true);
    expect(grade(v2106.questions.Q009, { kind: 'text', values: ['sang'] })).toBe(false);
    // Page 5's three patterns show as tiles, each with an icon; page 6 pictures both examples.
    const tiles = parseList((v2106.pages[4].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v2106.pages[5], visuals).BLOCK009?.examples).toHaveLength(2);
  });

  it('fits lesson 2.1.7 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2107.id)).toBe('s2.1.07');
    expect(lessonForTopic('s2.1.07')?.id).toBe('2-1-7');
    const visuals = visualsFor(v2107.id);
    const screens = lessonScreens(v2107, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2107, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2107.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE005']);
    expect(v2107.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2107.questions.Q004, { kind: 'text', values: ['Baking'] })).toBe(true);
    expect(grade(v2107.questions.Q004, { kind: 'text', values: ['enjoys'] })).toBe(false);
    expect(grade(v2107.questions.Q008, { kind: 'text', values: ['hopes'] })).toBe(true);
    expect(grade(v2107.questions.Q008, { kind: 'text', values: ['to visit'] })).toBe(false);
    // Page 3's three forms show as tiles, each with an icon; page 5's mockup pictures another example, so it has none.
    const tiles = parseList((v2107.pages[2].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v2107.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2107.pages[3], visuals).BLOCK006?.comparison).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2107.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005']);
  });

  it('fits lesson 2.1.8 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2108.id)).toBe('s2.1.08');
    expect(lessonForTopic('s2.1.08')?.id).toBe('2-1-8');
    const visuals = visualsFor(v2108.id);
    const screens = lessonScreens(v2108, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2108, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // The two-meanings dimension runs over pages 3–5, so its check waits until page 5.
    expect(v2108.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005']);
    expect(v2108.finalCheck?.questionIds).toEqual(['Q007', 'Q008', 'Q009', 'Q010', 'Q011']);
    expect(grade(v2108.questions.Q007, { kind: 'text', values: ['I own a red bicycle.'] })).toBe(true);
    expect(grade(v2108.questions.Q007, { kind: 'text', values: ['I am owning a red bicycle.'] })).toBe(false);
    // Pages 2 and 4 picture both examples; page 3's comparison draws one picture per item.
    expect(pageBlockArt(v2108.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2108.pages[2], visuals).BLOCK004?.comparison).toHaveLength(2);
    expect(pageBlockArt(v2108.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
  });

  it('fits lesson 2.1.9 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2109.id)).toBe('s2.1.09');
    expect(lessonForTopic('s2.1.09')?.id).toBe('2-1-9');
    const visuals = visualsFor(v2109.id);
    const screens = lessonScreens(v2109, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2109, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2109.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE004', 'PAGE005']);
    expect(v2109.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2109.questions.Q004, { kind: 'text', values: ['Riding'] })).toBe(true);
    expect(grade(v2109.questions.Q004, { kind: 'text', values: ['rideing'] })).toBe(false);
    expect(grade(v2109.questions.Q009, { kind: 'text', values: ['hurries'] })).toBe(true);
    expect(grade(v2109.questions.Q009, { kind: 'text', values: ['hurrys'] })).toBe(false);
    expect(grade(v2109.questions.Q012, { kind: 'text', values: ['eaten'] })).toBe(true);
    // Page 2's five forms show as tiles, each with a verb-form icon shared with 2.1.7.
    const tiles = parseList((v2109.pages[1].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v2109.pages[4], visuals).BLOCK010?.examples).toHaveLength(1);
  });

  it('fits lesson 2.1.10 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2110.id)).toBe('s2.1.10');
    expect(lessonForTopic('s2.1.10')?.id).toBe('2-1-10');
    const visuals = visualsFor(v2110.id);
    const screens = lessonScreens(v2110, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2110, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // The second dimension runs over pages 3–5, so its check waits until page 5.
    expect(v2110.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE002', 'PAGE005']);
    expect(v2110.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v2110.questions.Q005, { kind: 'text', values: ['To'] })).toBe(true);
    expect(grade(v2110.questions.Q005, { kind: 'text', values: ['at'] })).toBe(false);
    expect(grade(v2110.questions.Q006, { kind: 'text', values: ['on'] })).toBe(true);
    // Page 2's kinds are too long for tiles; page 4 pictures both examples, page 5 both items.
    expect(parseList((v2110.pages[1].content[0] as { items: string[] }).items).layout).toBe('rows');
    expect(pageBlockArt(v2110.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(pageBlockArt(v2110.pages[4], visuals).BLOCK007?.comparison).toHaveLength(2);
  });

  it('fits lesson 2.1.11 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2111.id)).toBe('s2.1.11');
    expect(lessonForTopic('s2.1.11')?.id).toBe('2-1-11');
    const visuals = visualsFor(v2111.id);
    const screens = lessonScreens(v2111, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2111, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2111.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v2111.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2111.questions.Q003, { kind: 'text', values: ['To wait'] })).toBe(true);
    expect(grade(v2111.questions.Q003, { kind: 'text', values: ['waiting'] })).toBe(false);
    expect(grade(v2111.questions.Q008, { kind: 'text', values: ['I enjoy reading comics.'] })).toBe(true);
    expect(grade(v2111.questions.Q008, { kind: 'text', values: ['I enjoy to read comics.'] })).toBe(false);
    // Pages 2 and 3 picture both examples; every page has a picture.
    expect(pageBlockArt(v2111.pages[1], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2111.pages[2], visuals).BLOCK006?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2111.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003']);
  });

  it('fits lesson 2.1.12 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2112.id)).toBe('s2.1.12');
    expect(lessonForTopic('s2.1.12')?.id).toBe('2-1-12');
    const visuals = visualsFor(v2112.id);
    const screens = lessonScreens(v2112, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2112, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2112.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005']);
    expect(v2112.finalCheck?.questionIds).toEqual(['Q006', 'Q007', 'Q008', 'Q009', 'Q010']);
    expect(grade(v2112.questions.Q003, { kind: 'text', values: ['Out'] })).toBe(true);
    expect(grade(v2112.questions.Q003, { kind: 'text', values: ['up'] })).toBe(false);
    expect(grade(v2112.questions.Q006, { kind: 'text', values: ['ran out of'] })).toBe(true);
    expect(grade(v2112.questions.Q006, { kind: 'text', values: ['ran'] })).toBe(false);
    // Page 3's six phrasal verbs show as tiles, each with an icon; page 2's comparison draws one picture per item.
    const tiles = parseList((v2112.pages[2].content[0] as { items: string[] }).items);
    expect(tiles.layout).toBe('tiles');
    expect(tiles.entries.map((e) => LIST_ICONS[(e.label ?? '').toLowerCase()]).every(Boolean)).toBe(true);
    expect(pageBlockArt(v2112.pages[1], visuals).BLOCK003?.comparison).toHaveLength(2);
    expect(pageBlockArt(v2112.pages[3], visuals).BLOCK005?.examples).toHaveLength(1);
  });

  it('fits lesson 2.1.13 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2113.id)).toBe('s2.1.13');
    expect(lessonForTopic('s2.1.13')?.id).toBe('2-1-13');
    const visuals = visualsFor(v2113.id);
    const screens = lessonScreens(v2113, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2113, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2113.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2113.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    expect(grade(v2113.questions.Q005, { kind: 'text', values: ['Made'] })).toBe(true);
    expect(grade(v2113.questions.Q005, { kind: 'text', values: ['did'] })).toBe(false);
    expect(grade(v2113.questions.Q009, { kind: 'text', values: ['Can I borrow your bicycle tomorrow?'] })).toBe(true);
    // Pages 2 and 3 picture each column; pages 4, 6 and 7 picture each example.
    expect(pageBlockArt(v2113.pages[1], visuals).BLOCK003?.comparison).toHaveLength(2);
    expect(pageBlockArt(v2113.pages[2], visuals).BLOCK004?.comparison).toHaveLength(2);
    expect(pageBlockArt(v2113.pages[3], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v2113.pages[5], visuals).BLOCK009?.examples).toHaveLength(2);
    expect(pageBlockArt(v2113.pages[6], visuals).BLOCK011?.examples).toHaveLength(2);
  });

  it('fits lesson 2.1.14 on screens, with a check after each dimension and a longer final check', () => {
    // The last lesson of Chapter 2.1.
    expect(curriculumTopicId(v2114.id)).toBe('s2.1.14');
    expect(lessonForTopic('s2.1.14')?.id).toBe('2-1-14');
    const visuals = visualsFor(v2114.id);
    const screens = lessonScreens(v2114, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2114, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2114.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006', 'PAGE008']);
    expect(v2114.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2114.questions.Q002, { kind: 'text', values: ['Yesterday Leela caught a fish.'] })).toBe(true);
    expect(grade(v2114.questions.Q009, { kind: 'text', values: ['Thought'] })).toBe(true);
    expect(grade(v2114.questions.Q009, { kind: 'text', values: ['thinked'] })).toBe(false);
    expect(grade(v2114.questions.Q012, { kind: 'text', values: ['Please pick it up.'] })).toBe(true);
    // Every page, the checklist included, has its own mockup picture.
    const pages = visuals?.pages ?? {};
    expect(v2114.pages.every((p) => pages[p.page_id]?.art)).toBe(true);
  });

  it('fits lesson 2.2.1 on screens, with a check after each dimension and a longer final check', () => {
    // The first lesson of Chapter 2.2 (Adverbs).
    expect(curriculumTopicId(v2201.id)).toBe('s2.2.01');
    expect(lessonForTopic('s2.2.01')?.id).toBe('2-2-1');
    const visuals = visualsFor(v2201.id);
    const screens = lessonScreens(v2201, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2201, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2201.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2201.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2201.questions.Q003, { kind: 'text', values: ['So'] })).toBe(true);
    expect(grade(v2201.questions.Q003, { kind: 'text', values: ['tiny'] })).toBe(false);
    expect(grade(v2201.questions.Q004, { kind: 'text', values: ['quietly'] })).toBe(true);
    expect(grade(v2201.questions.Q009, { kind: 'text', values: ['tomorrow'] })).toBe(true);
    // Page 6's kinds each ask a question, so they show as question rows ("Manner – how?" → "gently, well").
    const kinds = parseList((v2201.pages[5].content[0] as { items: string[] }).items);
    expect(kinds.layout).toBe('qa');
    expect(kinds.entries[0]).toMatchObject({ label: 'Manner – how?', detail: 'gently, well' });
    expect(parseList((v2201.pages[6].content[0] as { items: string[] }).items).layout).toBe('tiles');
    expect(pageBlockArt(v2201.pages[3], visuals).BLOCK007?.examples).toHaveLength(1);
  });

  it('fits lesson 2.2.2 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2202.id)).toBe('s2.2.02');
    expect(lessonForTopic('s2.2.02')?.id).toBe('2-2-2');
    const visuals = visualsFor(v2202.id);
    const screens = lessonScreens(v2202, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2202, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2202.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2202.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2202.questions.Q001, { kind: 'text', values: ['Slowly'] })).toBe(true);
    expect(grade(v2202.questions.Q002, { kind: 'text', values: ['well'] })).toBe(true);
    expect(grade(v2202.questions.Q002, { kind: 'text', values: ['good'] })).toBe(false);
    expect(grade(v2202.questions.Q005, { kind: 'text', values: ['We ate our lunch quickly.'] })).toBe(true);
    expect(grade(v2202.questions.Q011, { kind: 'text', values: ['Grandma stirred the milk gently.'] })).toBe(true);
    // Page 2's eight one-word adverbs show as chips; pages 4–6 have no picture (the mockup draws other sentences).
    expect(parseList((v2202.pages[1].content[0] as { items: string[] }).items).layout).toBe('chips');
    const pages = visuals?.pages ?? {};
    expect(v2202.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006']);
  });

  it('fits lesson 2.2.3 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2203.id)).toBe('s2.2.03');
    expect(lessonForTopic('s2.2.03')?.id).toBe('2-2-3');
    const visuals = visualsFor(v2203.id);
    const screens = lessonScreens(v2203, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2203, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2203.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2203.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2203.questions.Q001, { kind: 'text', values: ['Later'] })).toBe(true);
    expect(grade(v2203.questions.Q008, { kind: 'text', values: ['already'] })).toBe(true);
    expect(grade(v2203.questions.Q008, { kind: 'text', values: ['yet'] })).toBe(false);
    expect(grade(v2203.questions.Q010, { kind: 'text', values: ['next week'] })).toBe(true);
    // Page 2's nine one-word time adverbs show as chips; page 3's phrases and page 5's rule example have pictures.
    expect(parseList((v2203.pages[1].content[0] as { items: string[] }).items).layout).toBe('chips');
    expect(pageBlockArt(v2203.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v2203.pages[4], visuals).BLOCK008?.examples).toHaveLength(1);
    const pages = visuals?.pages ?? {};
    expect(v2203.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE007']);
  });

  it('fits lesson 2.2.4 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2204.id)).toBe('s2.2.04');
    expect(lessonForTopic('s2.2.04')?.id).toBe('2-2-4');
    const visuals = visualsFor(v2204.id);
    const screens = lessonScreens(v2204, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2204, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2204.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2204.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2204.questions.Q001, { kind: 'text', values: ['Abroad'] })).toBe(true);
    expect(grade(v2204.questions.Q002, { kind: 'text', values: ['After school, we walked home.'] })).toBe(true);
    expect(grade(v2204.questions.Q002, { kind: 'text', values: ['After school, we walked to home.'] })).toBe(false);
    expect(grade(v2204.questions.Q009, { kind: 'text', values: ['somewhere'] })).toBe(true);
    expect(grade(v2204.questions.Q009, { kind: 'text', values: ['anywhere'] })).toBe(false);
    expect(grade(v2204.questions.Q010, { kind: 'text', values: ['away'] })).toBe(true);
    // Page 2's nine one-word place adverbs show as chips; pages 4, 5 and 7 picture each example, page 6 its rule example.
    expect(parseList((v2204.pages[1].content[0] as { items: string[] }).items).layout).toBe('chips');
    for (const [i, id, n] of [[3, 'BLOCK007', 2], [4, 'BLOCK009', 2], [5, 'BLOCK011', 1], [6, 'BLOCK013', 2]] as const)
      expect(pageBlockArt(v2204.pages[i], visuals)[id]?.examples).toHaveLength(n);
    const pages = visuals?.pages ?? {};
    expect(v2204.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.2.5 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2205.id)).toBe('s2.2.05');
    expect(lessonForTopic('s2.2.05')?.id).toBe('2-2-5');
    const visuals = visualsFor(v2205.id);
    const screens = lessonScreens(v2205, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2205, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // The position dimension spans three pages (4–6), so its check comes after page 6.
    expect(v2205.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE006', 'PAGE007']);
    expect(v2205.finalCheck?.questionIds).toEqual(['Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    expect(grade(v2205.questions.Q003, { kind: 'text', values: ['Sometimes'] })).toBe(true);
    expect(grade(v2205.questions.Q006, { kind: 'text', values: ['We are always hungry after swimming.'] })).toBe(true);
    expect(grade(v2205.questions.Q006, { kind: 'text', values: ['We always are hungry after swimming.'] })).toBe(false);
    expect(grade(v2205.questions.Q008, { kind: 'text', values: ['three times a day'] })).toBe(true);
    expect(grade(v2205.questions.Q010, { kind: 'text', values: ['My brother often plays cricket.'] })).toBe(true);
    expect(grade(v2205.questions.Q011, { kind: 'text', values: ['always'] })).toBe(true);
    // Page 2's scale shows as tiles, top to bottom ("always" / "every time" … "never" / "not at any time").
    const scale = parseList((v2205.pages[1].content[0] as { items: string[] }).items);
    expect(scale.layout).toBe('tiles');
    expect(scale.entries.map((e) => e.label)).toEqual(['always', 'usually', 'often', 'sometimes', 'rarely, seldom', 'hardly ever', 'never']);
    expect(pageBlockArt(v2205.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2205.pages[6], visuals).BLOCK009?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2205.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE007']);
  });

  it('fits lesson 2.2.6 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2206.id)).toBe('s2.2.06');
    expect(lessonForTopic('s2.2.06')?.id).toBe('2-2-6');
    const visuals = visualsFor(v2206.id);
    const screens = lessonScreens(v2206, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2206, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2206.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2206.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2206.questions.Q001, { kind: 'text', values: ['Rather'] })).toBe(true);
    expect(grade(v2206.questions.Q006, { kind: 'text', values: ['Are you old enough to drive?'] })).toBe(true);
    expect(grade(v2206.questions.Q006, { kind: 'text', values: ['Are you enough old to drive?'] })).toBe(false);
    expect(grade(v2206.questions.Q009, { kind: 'text', values: ['enough'] })).toBe(true);
    expect(grade(v2206.questions.Q009, { kind: 'text', values: ['too'] })).toBe(false);
    expect(grade(v2206.questions.Q010, { kind: 'text', values: ['almost'] })).toBe(true);
    // Page 2's scale shows as tiles, weakest first ("slightly, a bit" / "a little" … "completely, totally").
    const scale = parseList((v2206.pages[1].content[0] as { items: string[] }).items);
    expect(scale.layout).toBe('tiles');
    expect(scale.entries.map((e) => e.label)).toEqual([
      'slightly, a bit',
      'fairly, quite',
      'rather',
      'very, really',
      'extremely',
      'almost',
      'completely, totally',
    ]);
    expect(pageBlockArt(v2206.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK006).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2206.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004']);
  });

  it('fits lesson 2.2.7 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2207.id)).toBe('s2.2.07');
    expect(lessonForTopic('s2.2.07')?.id).toBe('2-2-7');
    const visuals = visualsFor(v2207.id);
    const screens = lessonScreens(v2207, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2207, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2207.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2207.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2207.questions.Q003, { kind: 'text', values: ['Certainly'] })).toBe(true);
    expect(grade(v2207.questions.Q005, { kind: 'text', values: ['He probably won’t come today.'] })).toBe(true);
    expect(grade(v2207.questions.Q005, { kind: 'text', values: ["He won't probably come today."] })).toBe(false);
    expect(grade(v2207.questions.Q009, { kind: 'text', values: ['definitely'] })).toBe(true);
    expect(grade(v2207.questions.Q009, { kind: 'text', values: ['probably'] })).toBe(false);
    expect(grade(v2207.questions.Q011, { kind: 'text', values: ['They will definitely come to the match.'] })).toBe(true);
    // Page 2's scale shows as tiles, surest first ("definitely, certainly" / "I'm sure" … "perhaps, maybe").
    const scale = parseList((v2207.pages[1].content[0] as { items: string[] }).items);
    expect(scale.layout).toBe('tiles');
    expect(scale.entries.map((e) => e.label)).toEqual(['definitely, certainly', 'surely', 'probably', 'possibly', 'perhaps, maybe']);
    expect(pageBlockArt(v2207.pages[3], visuals).BLOCK005?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2207.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE007']);
  });

  it('fits lesson 2.2.8 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2208.id)).toBe('s2.2.08');
    expect(lessonForTopic('s2.2.08')?.id).toBe('2-2-8');
    const visuals = visualsFor(v2208.id);
    const screens = lessonScreens(v2208, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2208, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2208.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2208.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2208.questions.Q002, { kind: 'text', values: ['All night'] })).toBe(true);
    expect(grade(v2208.questions.Q005, { kind: 'text', values: ['My sister still plays with dolls.'] })).toBe(true);
    expect(grade(v2208.questions.Q005, { kind: 'text', values: ['My sister plays still with dolls.'] })).toBe(false);
    expect(grade(v2208.questions.Q007, { kind: 'text', values: ['no longer'] })).toBe(true);
    expect(grade(v2208.questions.Q007, { kind: 'text', values: ['still'] })).toBe(false);
    expect(grade(v2208.questions.Q012, { kind: 'text', values: ['still'] })).toBe(true);
    // Page 2's words show as tiles ("briefly" / "for a short time" … "permanently, forever").
    const words = parseList((v2208.pages[1].content[0] as { items: string[] }).items);
    expect(words.layout).toBe('tiles');
    expect(words.entries.map((e) => e.label)).toEqual(['briefly', 'for a while', 'all day, all night', 'temporarily', 'permanently, forever']);
    expect(pageBlockArt(v2208.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v2208.pages[5], visuals).BLOCK010?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2208.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE006']);
  });

  it('fits lesson 2.2.9 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2209.id)).toBe('s2.2.09');
    expect(lessonForTopic('s2.2.09')?.id).toBe('2-2-9');
    const visuals = visualsFor(v2209.id);
    const screens = lessonScreens(v2209, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2209, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2209.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2209.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2209.questions.Q004, { kind: 'text', values: ['To buy mangoes'] })).toBe(true);
    expect(grade(v2209.questions.Q009, { kind: 'text', values: ['I opened the window to let in fresh air.'] })).toBe(true);
    expect(grade(v2209.questions.Q009, { kind: 'text', values: ['I opened the window for let in fresh air.'] })).toBe(false);
    expect(grade(v2209.questions.Q011, { kind: 'text', values: ['accidentally'] })).toBe(true);
    // Page 2's result words show as tiles ("therefore" / "for that reason (formal)" …).
    const words = parseList((v2209.pages[1].content[0] as { items: string[] }).items);
    expect(words.layout).toBe('tiles');
    expect(words.entries.map((e) => e.label)).toEqual(['therefore', "that's why", 'as a result', 'for that reason']);
    expect(pageBlockArt(v2209.pages[2], visuals).BLOCK005?.examples).toHaveLength(1);
    expect(pageBlockArt(v2209.pages[3], visuals).BLOCK008?.examples).toHaveLength(2);
    expect(pageBlockArt(v2209.pages[6], visuals).BLOCK013?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK011).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2209.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.2.10 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2210.id)).toBe('s2.2.10');
    expect(lessonForTopic('s2.2.10')?.id).toBe('2-2-10');
    const visuals = visualsFor(v2210.id);
    const screens = lessonScreens(v2210, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2210, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2210.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2210.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2210.questions.Q002, { kind: 'text', values: ['where'] })).toBe(true);
    expect(grade(v2210.questions.Q002, { kind: 'text', values: ['When'] })).toBe(false);
    expect(grade(v2210.questions.Q004, { kind: 'text', values: ['old'] })).toBe(true);
    expect(grade(v2210.questions.Q009, { kind: 'text', values: ['Why'] })).toBe(true);
    expect(grade(v2210.questions.Q011, { kind: 'text', values: ['How'] })).toBe(true);
    // Pages 2 and 4 show their question words as tiles ("When?" / "time: at noon, on Friday" …).
    for (const [i, labels] of [
      [1, ['When?', 'Where?', 'Why?', 'How?']],
      [3, ['How often?', 'How long?', 'How far?', 'How old?', 'How soon?']],
    ] as const) {
      const list = parseList((v2210.pages[i].content[0] as { items: string[] }).items);
      expect(list.layout).toBe('tiles');
      expect(list.entries.map((e) => e.label)).toEqual(labels);
    }
    // The dash after the question word makes it a tile's label, not a question row's ("– time: …" chip).
    expect(parseList(['When? – time: at noon, on Friday']).entries[0]).toMatchObject({ label: 'When?', detail: 'time: at noon, on Friday' });
    expect(pageBlockArt(v2210.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK009).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2210.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.2.11 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2211.id)).toBe('s2.2.11');
    expect(lessonForTopic('s2.2.11')?.id).toBe('2-2-11');
    const visuals = visualsFor(v2211.id);
    const screens = lessonScreens(v2211, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2211, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2211.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2211.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2211.questions.Q001, { kind: 'text', values: ['Where'] })).toBe(true);
    expect(grade(v2211.questions.Q002, { kind: 'text', values: ['why'] })).toBe(true);
    expect(grade(v2211.questions.Q002, { kind: 'text', values: ['when'] })).toBe(false);
    expect(grade(v2211.questions.Q009, { kind: 'text', values: ['when'] })).toBe(true);
    expect(grade(v2211.questions.Q011, { kind: 'text', values: ['when'] })).toBe(true);
    expect(pageBlockArt(v2211.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v2211.pages[5], visuals).BLOCK008?.examples).toHaveLength(1);
    expect(pageBlockArt(v2211.pages[6], visuals).BLOCK010?.examples).toHaveLength(1);
    expect(visuals?.comparisonArt?.BLOCK006).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2211.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE004', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.2.12 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2212.id)).toBe('s2.2.12');
    expect(lessonForTopic('s2.2.12')?.id).toBe('2-2-12');
    const visuals = visualsFor(v2212.id);
    const screens = lessonScreens(v2212, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2212, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2212.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2212.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2212.questions.Q002, { kind: 'text', values: ['Especially'] })).toBe(true);
    expect(grade(v2212.questions.Q007, { kind: 'text', values: ['too'] })).toBe(true);
    expect(grade(v2212.questions.Q007, { kind: 'text', values: ['also'] })).toBe(false);
    expect(grade(v2212.questions.Q009, { kind: 'text', values: ['mainly'] })).toBe(true);
    expect(grade(v2212.questions.Q011, { kind: 'text', values: ['Ali also speaks Arabic.'] })).toBe(true);
    expect(grade(v2212.questions.Q011, { kind: 'text', values: ['Ali speaks also Arabic.'] })).toBe(false);
    // Page 2's focus words show as tiles ("only, just" / "nothing or nobody else" …).
    const words = parseList((v2212.pages[1].content[0] as { items: string[] }).items);
    expect(words.layout).toBe('tiles');
    expect(words.entries.map((e) => e.label)).toEqual(['only, just', 'even', 'also, too, as well', 'especially, particularly', 'mainly, mostly']);
    expect(pageBlockArt(v2212.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2212.pages[5], visuals).BLOCK007?.examples).toHaveLength(1);
    expect(pageBlockArt(v2212.pages[6], visuals).BLOCK009?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK005).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2212.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.2.13 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2213.id)).toBe('s2.2.13');
    expect(lessonForTopic('s2.2.13')?.id).toBe('2-2-13');
    const visuals = visualsFor(v2213.id);
    const screens = lessonScreens(v2213, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2213, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2213.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2213.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2213.questions.Q002, { kind: 'text', values: ['Unfortunately'] })).toBe(true);
    expect(grade(v2213.questions.Q002, { kind: 'text', values: ['closed'] })).toBe(false);
    expect(grade(v2213.questions.Q009, { kind: 'text', values: ['surprisingly'] })).toBe(true);
    // Page 2's sentence adverbs show as tiles ("luckily, fortunately" / "good news" …).
    const words = parseList((v2213.pages[1].content[0] as { items: string[] }).items);
    expect(words.layout).toBe('tiles');
    expect(words.entries.map((e) => e.label)).toEqual([
      'luckily, fortunately',
      'unfortunately, sadly',
      'surprisingly',
      'hopefully',
      'clearly, obviously',
      'honestly, frankly',
    ]);
    expect(pageBlockArt(v2213.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2213.pages[6], visuals).BLOCK009?.examples).toHaveLength(1);
    expect(visuals?.comparisonArt?.BLOCK008).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2213.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.2.14 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2214.id)).toBe('s2.2.14');
    expect(lessonForTopic('s2.2.14')?.id).toBe('2-2-14');
    const visuals = visualsFor(v2214.id);
    const screens = lessonScreens(v2214, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2214, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2214.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2214.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2214.questions.Q005, { kind: 'text', values: ['Our class went to the planetarium on Friday.'] })).toBe(true);
    expect(grade(v2214.questions.Q005, { kind: 'text', values: ['Our class went on Friday to the planetarium.'] })).toBe(false);
    expect(grade(v2214.questions.Q009, { kind: 'text', values: ['She reads stories to her son every night.'] })).toBe(true);
    expect(grade(v2214.questions.Q011, { kind: 'text', values: ['Suddenly'] })).toBe(true);
    // Page 2's three homes show as tiles ("Front" / "sentence adverbs, perhaps and maybe …").
    const homes = parseList((v2214.pages[1].content[0] as { items: string[] }).items);
    expect(homes.layout).toBe('tiles');
    expect(homes.entries.map((e) => e.label)).toEqual(['Front', 'Middle', 'End']);
    expect(pageBlockArt(v2214.pages[5], visuals).BLOCK008?.examples).toHaveLength(1);
    const pages = visuals?.pages ?? {};
    expect(v2214.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE006']);
  });

  it('fits lesson 2.2.15 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2215.id)).toBe('s2.2.15');
    expect(lessonForTopic('s2.2.15')?.id).toBe('2-2-15');
    const visuals = visualsFor(v2215.id);
    const screens = lessonScreens(v2215, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2215, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2215.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2215.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2215.questions.Q003, { kind: 'text', values: ['good'] })).toBe(true);
    expect(grade(v2215.questions.Q003, { kind: 'text', values: ['well'] })).toBe(false);
    expect(grade(v2215.questions.Q009, { kind: 'text', values: ['Shreya sings very well.'] })).toBe(true);
    expect(grade(v2215.questions.Q009, { kind: 'text', values: ['Shreya sings very good.'] })).toBe(false);
    // Page 6's look-alike pairs hold two pairs per item, so they read as full rows, not label + detail tiles.
    const pairs = parseList((v2215.pages[5].content[0] as { items: string[] }).items);
    expect(pairs.layout).toBe('rows');
    expect(pairs.entries[0].text).toBe('hard – with effort; hardly – almost not');
    expect(pageBlockArt(v2215.pages[4], visuals).BLOCK008?.examples).toHaveLength(2);
    expect(pageBlockArt(v2215.pages[5], visuals).BLOCK011?.examples).toHaveLength(1);
    expect(pageBlockArt(v2215.pages[6], visuals).BLOCK012?.examples).toHaveLength(1);
    expect(visuals?.comparisonArt?.BLOCK003).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK007).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2215.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.2.16 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2216.id)).toBe('s2.2.16');
    expect(lessonForTopic('s2.2.16')?.id).toBe('2-2-16');
    const visuals = visualsFor(v2216.id);
    const screens = lessonScreens(v2216, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2216, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // The spelling dimension spans pages 2–4, so its check comes after page 4.
    expect(v2216.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006', 'PAGE007']);
    expect(v2216.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2216.questions.Q001, { kind: 'text', values: ['easily'] })).toBe(true);
    expect(grade(v2216.questions.Q001, { kind: 'text', values: ['easyly'] })).toBe(false);
    expect(grade(v2216.questions.Q009, { kind: 'text', values: ['truly'] })).toBe(true);
    expect(grade(v2216.questions.Q009, { kind: 'text', values: ['truely'] })).toBe(false);
    expect(grade(v2216.questions.Q011, { kind: 'text', values: ['simply'] })).toBe(true);
    // Pages 2 and 3's word pairs show as chips ("quick → quickly"); page 4's spelling changes read as rows.
    expect(parseList((v2216.pages[1].content[0] as { items: string[] }).items).layout).toBe('chips');
    expect(parseList((v2216.pages[2].content[0] as { items: string[] }).items).layout).toBe('chips');
    expect(parseList((v2216.pages[3].content[0] as { items: string[] }).items).layout).toBe('rows');
    expect(pageBlockArt(v2216.pages[2], visuals).BLOCK006?.examples).toHaveLength(1);
    expect(pageBlockArt(v2216.pages[4], visuals).BLOCK010?.examples).toHaveLength(2);
    expect(pageBlockArt(v2216.pages[5], visuals).BLOCK013?.examples).toHaveLength(1);
    const pages = visuals?.pages ?? {};
    expect(v2216.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006']);
  });

  it('fits lesson 2.2.17 on screens, with a check after each dimension and a longer final check', () => {
    // The last lesson of Chapter 2.2: seven common-mistake pages and a checklist (nine pages).
    expect(curriculumTopicId(v2217.id)).toBe('s2.2.17');
    expect(lessonForTopic('s2.2.17')?.id).toBe('2-2-17');
    const visuals = visualsFor(v2217.id);
    const screens = lessonScreens(v2217, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2217, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2217.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006', 'PAGE008']);
    expect(v2217.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    expect(grade(v2217.questions.Q002, { kind: 'text', values: ['Please speak quietly in the library.'] })).toBe(true);
    expect(grade(v2217.questions.Q002, { kind: 'text', values: ['Please speak quiet in the library.'] })).toBe(false);
    expect(grade(v2217.questions.Q004, { kind: 'text', values: ['My father reads the newspaper every morning.'] })).toBe(true);
    expect(grade(v2217.questions.Q010, { kind: 'text', values: ['Mohan plays the guitar nicely.'] })).toBe(true);
    // Every page has its own mockup picture except the checklist, which uses the shared pencil.
    const pages = visuals?.pages ?? {};
    expect(v2217.pages.every((p) => pages[p.page_id]?.art)).toBe(true);
  });

  it('fits lesson 2.3.1 on screens, with a check after each dimension and a longer final check', () => {
    // The first lesson of Chapter 2.3 (subject–verb agreement).
    expect(curriculumTopicId(v231.id)).toBe('s2.3.01');
    expect(lessonForTopic('s2.3.01')?.id).toBe('2-3-1');
    const visuals = visualsFor(v231.id);
    const screens = lessonScreens(v231, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v231, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v231.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v231.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v231.questions.Q002, { kind: 'text', values: ['are'] })).toBe(true);
    expect(grade(v231.questions.Q002, { kind: 'text', values: ['is'] })).toBe(false);
    expect(grade(v231.questions.Q006, { kind: 'text', values: ['our neighbours'] })).toBe(true);
    expect(grade(v231.questions.Q006, { kind: 'text', values: ['Sundays'] })).toBe(false);
    expect(grade(v231.questions.Q009, { kind: 'text', values: ['were'] })).toBe(true);
    expect(grade(v231.questions.Q011, { kind: 'text', values: ['Our teacher gives us homework every day.'] })).toBe(true);
    expect(grade(v231.questions.Q011, { kind: 'text', values: ['Our teacher give us homework every day.'] })).toBe(false);
    // Page 2 pictures each column: one bell, then two bells.
    expect(visuals?.comparisonArt?.BLOCK003).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v231.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003']);
  });

  it('fits lesson 2.3.2 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v232.id)).toBe('s2.3.02');
    expect(lessonForTopic('s2.3.02')?.id).toBe('2-3-2');
    const visuals = visualsFor(v232.id);
    const screens = lessonScreens(v232, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v232, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v232.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v232.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v232.questions.Q002, { kind: 'text', values: ['live'] })).toBe(true);
    expect(grade(v232.questions.Q002, { kind: 'text', values: ['lives'] })).toBe(false);
    expect(grade(v232.questions.Q005, { kind: 'text', values: ['You were right about the weather.'] })).toBe(true);
    expect(grade(v232.questions.Q005, { kind: 'text', values: ['You was right about the weather.'] })).toBe(false);
    expect(grade(v232.questions.Q007, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v232.questions.Q010, { kind: 'text', values: ['My shorts are in the washing machine.'] })).toBe(true);
    expect(grade(v232.questions.Q011, { kind: 'text', values: ['have'] })).toBe(true);
    // Pages 2, 3 and 7 picture each example; page 5 each column.
    expect(pageBlockArt(v232.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v232.pages[2], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v232.pages[6], visuals).BLOCK011?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK008).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v232.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE007']);
  });

  it('fits lesson 2.3.3 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v233.id)).toBe('s2.3.03');
    expect(lessonForTopic('s2.3.03')?.id).toBe('2-3-3');
    const visuals = visualsFor(v233.id);
    const screens = lessonScreens(v233, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v233, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v233.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v233.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v233.questions.Q002, { kind: 'text', values: ['play'] })).toBe(true);
    expect(grade(v233.questions.Q002, { kind: 'text', values: ['plays'] })).toBe(false);
    expect(grade(v233.questions.Q009, { kind: 'text', values: ['Ravi and his sister walk to school.'] })).toBe(true);
    expect(grade(v233.questions.Q009, { kind: 'text', values: ['Ravi and his sister walks to school.'] })).toBe(false);
    expect(grade(v233.questions.Q011, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v233.questions.Q011, { kind: 'text', values: ['are'] })).toBe(false);
    // Page 5 pictures only its "one meal" column (the idli plate).
    expect(visuals?.comparisonArt?.BLOCK008?.map((a) => a !== null)).toEqual([false, true]);
    const pages = visuals?.pages ?? {};
    expect(v233.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
  });

  it('fits lesson 2.3.4 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v234.id)).toBe('s2.3.04');
    expect(lessonForTopic('s2.3.04')?.id).toBe('2-3-4');
    const visuals = visualsFor(v234.id);
    const screens = lessonScreens(v234, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v234, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v234.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v234.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v234.questions.Q002, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v234.questions.Q002, { kind: 'text', values: ['are'] })).toBe(false);
    expect(grade(v234.questions.Q007, { kind: 'text', values: ['The company is moving its office to Pune.'] })).toBe(true);
    expect(grade(v234.questions.Q007, { kind: 'text', values: ['The company is moving their office to Pune.'] })).toBe(false);
    expect(grade(v234.questions.Q009, { kind: 'text', values: ['are'] })).toBe(true);
    // Pages 3 and 5 picture each example; page 4 each column.
    expect(pageBlockArt(v234.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v234.pages[4], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK005).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v234.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE004', 'PAGE005']);
  });

  it('fits lesson 2.3.5 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v235.id)).toBe('s2.3.05');
    expect(lessonForTopic('s2.3.05')?.id).toBe('2-3-5');
    const visuals = visualsFor(v235.id);
    const screens = lessonScreens(v235, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v235, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // The plural-words dimension is one page (4); the "of" dimension runs pages 5–7.
    expect(v235.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE004', 'PAGE007']);
    expect(v235.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v235.questions.Q002, { kind: 'text', values: ['has'] })).toBe(true);
    expect(grade(v235.questions.Q002, { kind: 'text', values: ['have'] })).toBe(false);
    expect(grade(v235.questions.Q006, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v235.questions.Q006, { kind: 'text', values: ['are'] })).toBe(false);
    expect(grade(v235.questions.Q009, { kind: 'text', values: ['Everybody is ready for the photo.'] })).toBe(true);
    expect(grade(v235.questions.Q009, { kind: 'text', values: ['Everybody are ready for the photo.'] })).toBe(false);
    // Pages 2, 4 and 5 picture each rule example; page 6 each column.
    expect(pageBlockArt(v235.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v235.pages[3], visuals).BLOCK007?.examples).toHaveLength(2);
    expect(pageBlockArt(v235.pages[4], visuals).BLOCK008?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK009).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v235.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006']);
  });

  it('fits lesson 2.3.6 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v236.id)).toBe('s2.3.06');
    expect(lessonForTopic('s2.3.06')?.id).toBe('2-3-6');
    const visuals = visualsFor(v236.id);
    const screens = lessonScreens(v236, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v236, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v236.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v236.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v236.questions.Q002, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v236.questions.Q002, { kind: 'text', values: ['are'] })).toBe(false);
    expect(grade(v236.questions.Q005, { kind: 'text', values: ['Each of the girls has a ribbon.'] })).toBe(true);
    expect(grade(v236.questions.Q005, { kind: 'text', values: ['Each of the girls have a ribbon.'] })).toBe(false);
    expect(grade(v236.questions.Q009, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v236.questions.Q011, { kind: 'text', values: ['Every child in the class wants a turn.'] })).toBe(true);
    // Pages 2 and 4 picture each rule example; page 7 each column.
    expect(pageBlockArt(v236.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v236.pages[3], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK009).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v236.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE007']);
  });

  it('fits lesson 2.3.7 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v237.id)).toBe('s2.3.07');
    expect(lessonForTopic('s2.3.07')?.id).toBe('2-3-7');
    const visuals = visualsFor(v237.id);
    const screens = lessonScreens(v237, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v237, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v237.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v237.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v237.questions.Q002, { kind: 'text', values: ['was'] })).toBe(true);
    expect(grade(v237.questions.Q002, { kind: 'text', values: ['were'] })).toBe(false);
    expect(grade(v237.questions.Q006, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v237.questions.Q009, { kind: 'text', values: ['The luggage is in the car.'] })).toBe(true);
    expect(grade(v237.questions.Q009, { kind: 'text', values: ['The luggage are in the car.'] })).toBe(false);
    expect(grade(v237.questions.Q012, { kind: 'text', values: ['makes'] })).toBe(true);
    // Pages 2, 4, 5 and 6 picture each example; page 7 each column.
    expect(pageBlockArt(v237.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v237.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(pageBlockArt(v237.pages[4], visuals).BLOCK008?.examples).toHaveLength(2);
    expect(pageBlockArt(v237.pages[5], visuals).BLOCK009?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK010).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v237.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.3.8 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v238.id)).toBe('s2.3.08');
    expect(lessonForTopic('s2.3.08')?.id).toBe('2-3-8');
    const visuals = visualsFor(v238.id);
    const screens = lessonScreens(v238, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v238, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v238.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v238.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v238.questions.Q002, { kind: 'text', values: ['are'] })).toBe(true);
    expect(grade(v238.questions.Q002, { kind: 'text', values: ['is'] })).toBe(false);
    expect(grade(v238.questions.Q009, { kind: 'text', values: ['A fork or a spoon is next to your plate.'] })).toBe(true);
    expect(grade(v238.questions.Q009, { kind: 'text', values: ['A fork or a spoon are next to your plate.'] })).toBe(false);
    expect(grade(v238.questions.Q011, { kind: 'text', values: ['has'] })).toBe(true);
    // Pages 4 and 7 picture each example.
    expect(pageBlockArt(v238.pages[3], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v238.pages[6], visuals).BLOCK009?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v238.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE004', 'PAGE007']);
  });

  it('fits lesson 2.3.9 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v239.id)).toBe('s2.3.09');
    expect(lessonForTopic('s2.3.09')?.id).toBe('2-3-9');
    const visuals = visualsFor(v239.id);
    const screens = lessonScreens(v239, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v239, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v239.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v239.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v239.questions.Q003, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v239.questions.Q003, { kind: 'text', values: ['are'] })).toBe(false);
    expect(grade(v239.questions.Q006, { kind: 'text', values: ['Neither Tom nor Ali eats meat.'] })).toBe(true);
    expect(grade(v239.questions.Q006, { kind: 'text', values: ["Neither Tom nor Ali doesn't eat meat."] })).toBe(false);
    expect(grade(v239.questions.Q009, { kind: 'text', values: ['was'] })).toBe(true);
    // Page 5 pictures each example; page 7 each column.
    expect(pageBlockArt(v239.pages[4], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK008).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v239.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE005', 'PAGE007']);
  });

  it('fits lesson 2.3.10 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2310.id)).toBe('s2.3.10');
    expect(lessonForTopic('s2.3.10')?.id).toBe('2-3-10');
    const visuals = visualsFor(v2310.id);
    const screens = lessonScreens(v2310, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2310, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2310.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2310.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2310.questions.Q002, { kind: 'text', values: ['were'] })).toBe(true);
    expect(grade(v2310.questions.Q002, { kind: 'text', values: ['was'] })).toBe(false);
    expect(grade(v2310.questions.Q006, { kind: 'text', values: ['There are three apples on the table.'] })).toBe(true);
    expect(grade(v2310.questions.Q006, { kind: 'text', values: ["There's three apples on the table."] })).toBe(false);
    expect(grade(v2310.questions.Q009, { kind: 'text', values: ['is'] })).toBe(true);
    // Page 2 pictures both rule examples; page 7 only the students (its sugar example has no matching drawing).
    expect(pageBlockArt(v2310.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(visuals?.exampleArt?.BLOCK009?.map((a) => a !== null)).toEqual([true, false]);
    const pages = visuals?.pages ?? {};
    expect(v2310.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.3.11 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2311.id)).toBe('s2.3.11');
    expect(lessonForTopic('s2.3.11')?.id).toBe('2-3-11');
    const visuals = visualsFor(v2311.id);
    const screens = lessonScreens(v2311, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2311, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2311.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2311.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2311.questions.Q002, { kind: 'text', values: ['are'] })).toBe(true);
    expect(grade(v2311.questions.Q002, { kind: 'text', values: ['is'] })).toBe(false);
    expect(grade(v2311.questions.Q006, { kind: 'text', values: ['One of my shoes is missing.'] })).toBe(true);
    expect(grade(v2311.questions.Q006, { kind: 'text', values: ['One of my shoes are missing.'] })).toBe(false);
    expect(grade(v2311.questions.Q010, { kind: 'text', values: ['plays'] })).toBe(true);
    // Pages 2, 3 and 7 picture each example; page 4 each column.
    expect(pageBlockArt(v2311.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2311.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2311.pages[6], visuals).BLOCK008?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK005).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2311.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE007']);
  });

  it('fits lesson 2.3.12 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2312.id)).toBe('s2.3.12');
    expect(lessonForTopic('s2.3.12')?.id).toBe('2-3-12');
    const visuals = visualsFor(v2312.id);
    const screens = lessonScreens(v2312, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2312, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2312.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2312.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2312.questions.Q003, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v2312.questions.Q003, { kind: 'text', values: ['are'] })).toBe(false);
    expect(grade(v2312.questions.Q005, { kind: 'text', values: ['Twenty kilograms is the limit for each bag.'] })).toBe(true);
    expect(grade(v2312.questions.Q005, { kind: 'text', values: ['Twenty kilograms are the limit for each bag.'] })).toBe(false);
    expect(grade(v2312.questions.Q007, { kind: 'text', values: ['equals'] })).toBe(true);
    expect(grade(v2312.questions.Q012, { kind: 'text', values: ['The Arabian Nights is full of wonderful stories.'] })).toBe(true);
    // Pages 2 and 4 picture each example; page 3 only the Philippines; page 5 only the coins column.
    expect(pageBlockArt(v2312.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2312.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(visuals?.exampleArt?.BLOCK004?.map((a) => a !== null)).toEqual([true, false]);
    expect(visuals?.comparisonArt?.BLOCK007?.map((a) => a !== null)).toEqual([false, true]);
    const pages = visuals?.pages ?? {};
    expect(v2312.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE007']);
  });

  it('fits lesson 2.3.13 on screens, with a check after each dimension and a longer final check', () => {
    // Seven pages; the third dimension (the only one who) is a single page.
    expect(curriculumTopicId(v2313.id)).toBe('s2.3.13');
    expect(lessonForTopic('s2.3.13')?.id).toBe('2-3-13');
    const visuals = visualsFor(v2313.id);
    const screens = lessonScreens(v2313, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2313, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2313.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE006']);
    expect(v2313.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2313.questions.Q002, { kind: 'text', values: ['grow'] })).toBe(true);
    expect(grade(v2313.questions.Q002, { kind: 'text', values: ['grows'] })).toBe(false);
    expect(grade(v2313.questions.Q009, { kind: 'text', values: ['I know a shop that sells fresh coconuts.'] })).toBe(true);
    expect(grade(v2313.questions.Q009, { kind: 'text', values: ['I know a shop that sell fresh coconuts.'] })).toBe(false);
    expect(grade(v2313.questions.Q012, { kind: 'text', values: ['has'] })).toBe(true);
    // Pages 2 and 3 picture each example; page 5 each column.
    expect(pageBlockArt(v2313.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2313.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(visuals?.comparisonArt?.BLOCK006).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2313.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE005']);
  });

  it('fits lesson 2.3.14 on screens, with a check after each dimension and a longer final check', () => {
    // The last lesson of Chapter 2.3; its final check has six questions.
    expect(curriculumTopicId(v2314.id)).toBe('s2.3.14');
    expect(lessonForTopic('s2.3.14')?.id).toBe('2-3-14');
    const visuals = visualsFor(v2314.id);
    const screens = lessonScreens(v2314, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2314, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2314.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2314.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012', 'Q013']);
    expect(grade(v2314.questions.Q006, { kind: 'text', values: ['is'] })).toBe(true);
    expect(grade(v2314.questions.Q006, { kind: 'text', values: ['are'] })).toBe(false);
    expect(grade(v2314.questions.Q009, { kind: 'text', values: ['The flowers in the vase are beautiful.'] })).toBe(true);
    expect(grade(v2314.questions.Q009, { kind: 'text', values: ['The flowers in the vase is beautiful.'] })).toBe(false);
    expect(grade(v2314.questions.Q012, { kind: 'text', values: ['makes'] })).toBe(true);
    // Pages 2–7 picture each rule example.
    expect(pageBlockArt(v2314.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2314.pages[2], visuals).BLOCK004?.examples).toHaveLength(1);
    expect(pageBlockArt(v2314.pages[3], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(pageBlockArt(v2314.pages[4], visuals).BLOCK007?.examples).toHaveLength(2);
    expect(pageBlockArt(v2314.pages[5], visuals).BLOCK008?.examples).toHaveLength(2);
    expect(pageBlockArt(v2314.pages[6], visuals).BLOCK009?.examples).toHaveLength(1);
    const pages = visuals?.pages ?? {};
    expect(v2314.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.1 on screens, with a check after each dimension and a longer final check', () => {
    // The first lesson of Chapter 2.4 (sentence construction): nine pages; the building-blocks dimension runs 6–8.
    expect(curriculumTopicId(v241.id)).toBe('s2.4.01');
    expect(lessonForTopic('s2.4.01')?.id).toBe('2-4-1');
    const visuals = visualsFor(v241.id);
    const screens = lessonScreens(v241, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v241, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v241.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE008']);
    expect(v241.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v241.questions.Q007, { kind: 'text', values: ['his cows'] })).toBe(true);
    expect(grade(v241.questions.Q007, { kind: 'text', values: ['The farmer'] })).toBe(false);
    expect(grade(v241.questions.Q011, { kind: 'text', values: ['climbed'] })).toBe(true);
    expect(grade(v241.questions.Q011, { kind: 'text', values: ['tree'] })).toBe(false);
    expect(pageBlockArt(v241.pages[2], visuals).BLOCK006?.examples).toHaveLength(1);
    // The mockups cover pages 1–5; page 4 is a list, and pages 6–8 have no mockup.
    const pages = visuals?.pages ?? {};
    expect(v241.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE004', 'PAGE006', 'PAGE007', 'PAGE008']);
  });

  it('fits lesson 2.4.2 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v242.id)).toBe('s2.4.02');
    expect(lessonForTopic('s2.4.02')?.id).toBe('2-4-2');
    const visuals = visualsFor(v242.id);
    const screens = lessonScreens(v242, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v242, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v242.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v242.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v242.questions.Q001, { kind: 'text', values: ['the children in the back row'] })).toBe(true);
    expect(grade(v242.questions.Q001, { kind: 'text', values: ['the children'] })).toBe(false);
    expect(grade(v242.questions.Q004, { kind: 'text', values: ['elephant'] })).toBe(true);
    expect(grade(v242.questions.Q005, { kind: 'text', values: ['chopped'] })).toBe(true);
    expect(grade(v242.questions.Q007, { kind: 'text', values: ['my aunt'] })).toBe(true);
    expect(grade(v242.questions.Q007, { kind: 'text', values: ['On Fridays'] })).toBe(false);
    expect(grade(v242.questions.Q010, { kind: 'text', values: ['tells funny stories'] })).toBe(true);
    // Page 3 pictures each example; page 6 its rule example.
    expect(pageBlockArt(v242.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v242.pages[5], visuals).BLOCK009?.examples).toHaveLength(1);
    const pages = visuals?.pages ?? {};
    expect(v242.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE006']);
  });

  it('fits lesson 2.4.3 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v243.id)).toBe('s2.4.03');
    expect(lessonForTopic('s2.4.03')?.id).toBe('2-4-3');
    const visuals = visualsFor(v243.id);
    const screens = lessonScreens(v243, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v243, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v243.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v243.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v243.questions.Q001, { kind: 'text', values: ['a woolly scarf'] })).toBe(true);
    expect(grade(v243.questions.Q001, { kind: 'text', values: ['Grandma'] })).toBe(false);
    expect(grade(v243.questions.Q009, { kind: 'text', values: ['their project'] })).toBe(true);
    expect(grade(v243.questions.Q012, { kind: 'text', values: ['a new captain'] })).toBe(true);
    // Page 3 pictures each example, page 5 its rule example; pages 4 and 6 each column.
    expect(pageBlockArt(v243.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v243.pages[4], visuals).BLOCK006?.examples).toHaveLength(1);
    expect([visuals?.comparisonArt?.BLOCK005, visuals?.comparisonArt?.BLOCK008].map((a) => a?.length)).toEqual([2, 2]);
    const pages = visuals?.pages ?? {};
    expect(v243.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006']);
  });

  it('fits lesson 2.4.4 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v244.id)).toBe('s2.4.04');
    expect(lessonForTopic('s2.4.04')?.id).toBe('2-4-4');
    const visuals = visualsFor(v244.id);
    const screens = lessonScreens(v244, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v244, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v244.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v244.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v244.questions.Q001, { kind: 'text', values: ['the photos'] })).toBe(true);
    expect(grade(v244.questions.Q001, { kind: 'text', values: ['her friends'] })).toBe(false);
    expect(grade(v244.questions.Q002, { kind: 'text', values: ['Grandpa'] })).toBe(true);
    expect(grade(v244.questions.Q009, { kind: 'text', values: ['She offered her guest a biscuit.'] })).toBe(true);
    expect(grade(v244.questions.Q009, { kind: 'text', values: ['She offered a biscuit her guest.'] })).toBe(false);
    expect(grade(v244.questions.Q010, { kind: 'text', values: ['me'] })).toBe(true);
    // Pages 2 and 3 picture their one example (rule and example blocks); page 7 each example.
    expect(pageBlockArt(v244.pages[1], visuals).BLOCK003?.examples).toHaveLength(1);
    expect(pageBlockArt(v244.pages[2], visuals).BLOCK004?.examples).toHaveLength(1);
    expect(pageBlockArt(v244.pages[6], visuals).BLOCK009?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v244.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.5 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v245.id)).toBe('s2.4.05');
    expect(lessonForTopic('s2.4.05')?.id).toBe('2-4-5');
    const visuals = visualsFor(v245.id);
    const screens = lessonScreens(v245, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v245, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v245.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v245.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v245.questions.Q001, { kind: 'text', values: ['a chef'] })).toBe(true);
    expect(grade(v245.questions.Q001, { kind: 'text', values: ['Our new neighbour'] })).toBe(false);
    expect(grade(v245.questions.Q005, { kind: 'text', values: ['to fly a plane'] })).toBe(true);
    expect(grade(v245.questions.Q009, { kind: 'text', values: ['very quiet'] })).toBe(true);
    // Page 2 pictures each column; pages 3 and 5–7 have no matching mockup drawing.
    expect(visuals?.comparisonArt?.BLOCK003).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v245.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.6 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v246.id)).toBe('s2.4.06');
    expect(lessonForTopic('s2.4.06')?.id).toBe('2-4-6');
    const visuals = visualsFor(v246.id);
    const screens = lessonScreens(v246, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v246, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v246.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v246.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v246.questions.Q001, { kind: 'text', values: ['leader'] })).toBe(true);
    expect(grade(v246.questions.Q001, { kind: 'text', values: ['Rohan'] })).toBe(false);
    expect(grade(v246.questions.Q006, { kind: 'text', values: ['The noise made the neighbours angry.'] })).toBe(true);
    expect(grade(v246.questions.Q006, { kind: 'text', values: ['The noise made angry the neighbours.'] })).toBe(false);
    expect(grade(v246.questions.Q009, { kind: 'text', values: ['sleepy'] })).toBe(true);
    // Pages 2, 3 and 5 picture each example, pages 4 and 6 their rule example; page 7 each column.
    expect(pageBlockArt(v246.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v246.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v246.pages[3], visuals).BLOCK005?.examples).toHaveLength(1);
    expect(pageBlockArt(v246.pages[4], visuals).BLOCK006?.examples).toHaveLength(2);
    expect(pageBlockArt(v246.pages[5], visuals).BLOCK007?.examples).toHaveLength(1);
    expect(visuals?.comparisonArt?.BLOCK009).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v246.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.7 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v247.id)).toBe('s2.4.07');
    expect(lessonForTopic('s2.4.07')?.id).toBe('2-4-7');
    const visuals = visualsFor(v247.id);
    const screens = lessonScreens(v247, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v247, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v247.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v247.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v247.questions.Q001, { kind: 'text', values: ['on the hill'] })).toBe(true);
    expect(grade(v247.questions.Q001, { kind: 'text', values: ['The house'] })).toBe(false);
    expect(grade(v247.questions.Q005, { kind: 'text', values: ['We gave the cake with chocolate icing to the children.'] })).toBe(true);
    expect(grade(v247.questions.Q005, { kind: 'text', values: ['We gave the cake to the children with chocolate icing.'] })).toBe(false);
    expect(grade(v247.questions.Q009, { kind: 'text', values: ['holding the trophy'] })).toBe(true);
    // Only pages 1, 3 and the recap match the mockup's drawings.
    const pages = visuals?.pages ?? {};
    expect(v247.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.8 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v248.id)).toBe('s2.4.08');
    expect(lessonForTopic('s2.4.08')?.id).toBe('2-4-8');
    const visuals = visualsFor(v248.id);
    const screens = lessonScreens(v248, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v248, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v248.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v248.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    // Page 2 is the five-pattern list; every other page has its own mockup picture.
    const pages = visuals?.pages ?? {};
    expect(v248.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002']);
  });

  it('fits lesson 2.4.9 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v249.id)).toBe('s2.4.09');
    expect(lessonForTopic('s2.4.09')?.id).toBe('2-4-9');
    const visuals = visualsFor(v249.id);
    const screens = lessonScreens(v249, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v249, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v249.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v249.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v249.questions.Q008, { kind: 'text', values: ['roared'] })).toBe(true);
    expect(grade(v249.questions.Q008, { kind: 'text', values: ['crowd'] })).toBe(false);
    // Page 5 pictures each column, page 6 each example.
    expect(visuals?.comparisonArt?.BLOCK006).toHaveLength(2);
    expect(pageBlockArt(v249.pages[5], visuals).BLOCK008?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v249.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE005', 'PAGE006']);
  });

  it('fits lesson 2.4.10 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2410.id)).toBe('s2.4.10');
    expect(lessonForTopic('s2.4.10')?.id).toBe('2-4-10');
    const visuals = visualsFor(v2410.id);
    const screens = lessonScreens(v2410, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2410, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2410.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2410.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2410.questions.Q003, { kind: 'text', values: ['my banana'] })).toBe(true);
    expect(grade(v2410.questions.Q003, { kind: 'text', values: ['The monkey'] })).toBe(false);
    expect(grade(v2410.questions.Q009, { kind: 'text', values: ['Ramesh cleaned the windows.'] })).toBe(true);
    expect(grade(v2410.questions.Q009, { kind: 'text', values: ['The windows cleaned Ramesh.'] })).toBe(false);
    expect(grade(v2410.questions.Q010, { kind: 'text', values: ['my uncle'] })).toBe(true);
    // Page 2 pictures each column; every other page has its own scene.
    expect(visuals?.comparisonArt?.BLOCK003).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2410.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002']);
  });

  it('fits lesson 2.4.11 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2411.id)).toBe('s2.4.11');
    expect(lessonForTopic('s2.4.11')?.id).toBe('2-4-11');
    const visuals = visualsFor(v2411.id);
    const screens = lessonScreens(v2411, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2411, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2411.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2411.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2411.questions.Q003, { kind: 'text', values: ['very muddy'] })).toBe(true);
    expect(grade(v2411.questions.Q003, { kind: 'text', values: ['The road'] })).toBe(false);
    expect(grade(v2411.questions.Q005, { kind: 'text', values: ['My brothers are good swimmers.'] })).toBe(true);
    expect(grade(v2411.questions.Q005, { kind: 'text', values: ['My brothers are good swimmer.'] })).toBe(false);
    expect(grade(v2411.questions.Q010, { kind: 'text', values: ['are turning'] })).toBe(true);
    // Pages 2, 3 and 6 picture their examples; page 4 each column.
    expect(pageBlockArt(v2411.pages[1], visuals).BLOCK003?.examples).toHaveLength(1);
    expect(pageBlockArt(v2411.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2411.pages[5], visuals).BLOCK007?.examples).toHaveLength(1);
    expect(visuals?.comparisonArt?.BLOCK005).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2411.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE006']);
  });

  it('fits lesson 2.4.12 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2412.id)).toBe('s2.4.12');
    expect(lessonForTopic('s2.4.12')?.id).toBe('2-4-12');
    const visuals = visualsFor(v2412.id);
    const screens = lessonScreens(v2412, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2412, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2412.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2412.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2412.questions.Q005, { kind: 'text', values: ['I wrote a poem and read it to my class.'] })).toBe(true);
    expect(grade(v2412.questions.Q005, { kind: 'text', values: ['I wrote a poem and read my class it.'] })).toBe(false);
    expect(grade(v2412.questions.Q009, { kind: 'text', values: ['Ravi showed the photo to his friends.'] })).toBe(true);
    // Pages 2, 3, 5 and 6 picture their examples.
    expect(pageBlockArt(v2412.pages[1], visuals).BLOCK003?.examples).toHaveLength(1);
    expect(pageBlockArt(v2412.pages[2], visuals).BLOCK004?.examples).toHaveLength(2);
    expect(pageBlockArt(v2412.pages[4], visuals).BLOCK007?.examples).toHaveLength(2);
    expect(pageBlockArt(v2412.pages[5], visuals).BLOCK008?.examples).toHaveLength(1);
    const pages = visuals?.pages ?? {};
    expect(v2412.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE005', 'PAGE006']);
  });

  it('fits lesson 2.4.13 on screens, with a check after each dimension and a longer final check', () => {
    // The verb-group dimension spans pages 2–4; the last dimension is page 7 alone.
    expect(curriculumTopicId(v2413.id)).toBe('s2.4.13');
    expect(lessonForTopic('s2.4.13')?.id).toBe('2-4-13');
    const visuals = visualsFor(v2413.id);
    const screens = lessonScreens(v2413, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2413, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2413.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE004', 'PAGE006', 'PAGE007']);
    expect(v2413.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2413.questions.Q003, { kind: 'text', values: ['fascinating'] })).toBe(true);
    expect(grade(v2413.questions.Q003, { kind: 'text', values: ['the museum'] })).toBe(false);
    expect(grade(v2413.questions.Q007, { kind: 'text', values: ['The rain left the playground muddy.'] })).toBe(true);
    expect(grade(v2413.questions.Q007, { kind: 'text', values: ['The rain left muddy the playground.'] })).toBe(false);
    expect(grade(v2413.questions.Q012, { kind: 'text', values: ['the baby'] })).toBe(true);
    // Pages 2–4 and 7 picture each example, page 6 its one; page 5 each column.
    for (const [i, block, n] of [[1, 'BLOCK003', 2], [2, 'BLOCK004', 2], [3, 'BLOCK005', 2], [5, 'BLOCK007', 1], [6, 'BLOCK008', 2]] as const)
      expect(pageBlockArt(v2413.pages[i], visuals)[block]?.examples).toHaveLength(n);
    expect(visuals?.comparisonArt?.BLOCK006).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2413.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.14 on screens, with a check after each dimension and a longer final check', () => {
    // The last lesson of Chapter 2.4.
    expect(curriculumTopicId(v2414.id)).toBe('s2.4.14');
    expect(lessonForTopic('s2.4.14')?.id).toBe('2-4-14');
    const visuals = visualsFor(v2414.id);
    const screens = lessonScreens(v2414, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2414, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2414.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2414.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2414.questions.Q005, { kind: 'text', values: ['Rarely do we eat out on weekdays.'] })).toBe(true);
    expect(grade(v2414.questions.Q005, { kind: 'text', values: ['Rarely we eat out on weekdays.'] })).toBe(false);
    expect(grade(v2414.questions.Q010, { kind: 'text', values: ['can'] })).toBe(true);
    expect(grade(v2414.questions.Q010, { kind: 'text', values: ['do'] })).toBe(false);
    // Pages 4, 6 and 7's mockup sentences differ from the lesson's, so they have no picture.
    expect(pageBlockArt(v2414.pages[1], visuals).BLOCK003?.examples).toHaveLength(1);
    const pages = visuals?.pages ?? {};
    expect(v2414.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.15 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2415.id)).toBe('s2.4.15');
    expect(lessonForTopic('s2.4.15')?.id).toBe('2-4-15');
    const visuals = visualsFor(v2415.id);
    const screens = lessonScreens(v2415, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2415, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2415.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2415.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2415.questions.Q003, { kind: 'text', values: ['Grandpa reads the newspaper every morning.'] })).toBe(true);
    expect(grade(v2415.questions.Q003, { kind: 'text', values: ['Grandpa the newspaper reads every morning.'] })).toBe(false);
    expect(grade(v2415.questions.Q007, { kind: 'text', values: ["I don't know what this word means."] })).toBe(true);
    expect(grade(v2415.questions.Q012, { kind: 'text', values: ['Mum takes a walk every evening.'] })).toBe(true);
    // Pages 3, 5, 6 and 7 picture their examples.
    for (const [i, block, n] of [[2, 'BLOCK004', 1], [4, 'BLOCK007', 2], [5, 'BLOCK009', 1], [6, 'BLOCK011', 2]] as const)
      expect(pageBlockArt(v2415.pages[i], visuals)[block]?.examples).toHaveLength(n);
    const pages = visuals?.pages ?? {};
    expect(v2415.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE003', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.16 on screens, with a check after each dimension and a longer final check', () => {
    expect(curriculumTopicId(v2416.id)).toBe('s2.4.16');
    expect(lessonForTopic('s2.4.16')?.id).toBe('2-4-16');
    const visuals = visualsFor(v2416.id);
    const screens = lessonScreens(v2416, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2416, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2416.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2416.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2416.questions.Q003, { kind: 'text', values: ['did'] })).toBe(true);
    expect(grade(v2416.questions.Q003, { kind: 'text', values: ['do'] })).toBe(false);
    expect(grade(v2416.questions.Q005, { kind: 'text', values: ['Where did you put my glasses?'] })).toBe(true);
    expect(grade(v2416.questions.Q005, { kind: 'text', values: ['Where you put my glasses?'] })).toBe(false);
    expect(grade(v2416.questions.Q009, { kind: 'text', values: ['does'] })).toBe(true);
    expect(grade(v2416.questions.Q010, { kind: 'text', values: ['Why is the shop closed?'] })).toBe(true);
    // Pages 3, 4, 5 and 7's mockup sentences differ from the lesson's, so they have no picture.
    expect(pageBlockArt(v2416.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2416.pages[5], visuals).BLOCK007?.examples).toHaveLength(1);
    const pages = visuals?.pages ?? {};
    expect(v2416.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE003', 'PAGE004', 'PAGE005', 'PAGE006', 'PAGE007']);
  });

  it('fits lesson 2.4.17 on screens, with a check after each dimension and a longer final check', () => {
    // The last lesson of Chapter 2.4.
    expect(curriculumTopicId(v2417.id)).toBe('s2.4.17');
    expect(lessonForTopic('s2.4.17')?.id).toBe('2-4-17');
    const visuals = visualsFor(v2417.id);
    const screens = lessonScreens(v2417, visuals);
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v2417, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    expect(v2417.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE007']);
    expect(v2417.finalCheck?.questionIds).toEqual(['Q008', 'Q009', 'Q010', 'Q011', 'Q012']);
    expect(grade(v2417.questions.Q006, { kind: 'text', values: ["We didn't see anybody in the park."] })).toBe(true);
    expect(grade(v2417.questions.Q006, { kind: 'text', values: ["We didn't see nobody in the park."] })).toBe(false);
    expect(grade(v2417.questions.Q012, { kind: 'text', values: ["Grandpa doesn't drink coffee."] })).toBe(true);
    expect(grade(v2417.questions.Q012, { kind: 'text', values: ["Grandpa doesn't drinks coffee."] })).toBe(false);
    // Pages 2, 4 and 7 picture each example; every other page has its own picture.
    expect(pageBlockArt(v2417.pages[1], visuals).BLOCK003?.examples).toHaveLength(2);
    expect(pageBlockArt(v2417.pages[3], visuals).BLOCK005?.examples).toHaveLength(2);
    expect(pageBlockArt(v2417.pages[6], visuals).BLOCK009?.examples).toHaveLength(2);
    const pages = visuals?.pages ?? {};
    expect(v2417.pages.filter((p) => !pages[p.page_id]?.art).map((p) => p.page_id)).toEqual(['PAGE002', 'PAGE004', 'PAGE007']);
  });

  it("draws a rule's examples as an example card under the rule", () => {
    const page = v25.pages.find((p) => p.page_id === 'PAGE003')!;
    const [rule, examples] = screenBlocks(page);
    expect(rule).toMatchObject({ type: 'rule', block_id: 'BLOCK005' });
    expect(rule.type === 'rule' && rule.examples).toBeFalsy();
    expect(examples).toMatchObject({ type: 'example', block_id: 'BLOCK005' });
    expect(examples.type === 'example' && examples.examples.map((e) => e.highlight)).toEqual([['bottles'], ['sand']]);
    // Earlier lessons' rule examples are drawn too (1.2.2 page 5: "We met Neha outside the cinema.").
    const neha = v22.pages.find((p) => p.page_id === 'PAGE005')!;
    expect(lessonScreens(v22, visualsFor(v22.id)).filter((s) => s.page === neha).flatMap((s) => s.blocks.map((b) => b.type))).toContain('example');
  });

  it('fits lesson 1.1.5 on screens, with pictures in row comparisons', () => {
    const screens = lessonScreens(v5, visualsFor(v5.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect([s.page.page_number, packedHeight(v5, s) <= DEFAULT_BUDGET - titleLines(s.page.title) * 37]).toEqual([s.page.page_number, true]);
    // Each example block has its own pictures: page 7's "dry" block has none.
    const art = pageBlockArt(v5.pages[6], visualsFor(v5.id));
    expect([Boolean(art.BLOCK016?.examples), Boolean(art.BLOCK017)]).toEqual([true, false]);
    expect(v5.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE005', 'PAGE011', 'PAGE014', 'PAGE018']);
  });

  it('fits lesson 1.1.4 on screens', () => {
    const screens = lessonScreens(v4, visualsFor(v4.id));
    for (const s of screens.filter((x) => x.blockPart === 'all' && x.blocks.some((b) => b.type !== 'text')))
      expect(packedHeight(v4, s)).toBeLessThanOrEqual(DEFAULT_BUDGET - titleLines(s.page.title) * 37);
    // Summary list, then picture + takeaway; checks follow their dimensions' last pages.
    expect(screens.filter((s) => s.page.page_number === 15).at(-1)).toMatchObject({ blocks: [], showArt: true, showTakeaway: true });
    expect(v4.checkpoints.map((c) => c.afterPageId)).toEqual(['PAGE003', 'PAGE007', 'PAGE009', 'PAGE011', 'PAGE013', 'PAGE015']);
  });
});

describe('lesson flow', () => {
  it('places practice, quick checks and the final check in order', () => {
    const steps = buildSteps(v2, visualsFor(v2.id));
    const questions = steps.flatMap((s) => (s.kind === 'question' ? [`${s.context}:${s.questionId}`] : []));
    expect(questions).toEqual([
      'check:Q001',
      'check:Q002',
      'check:Q003',
      'check:Q004',
      'practice:Q013',
      'practice:Q014',
      'practice:Q015',
      'check:Q005',
      'final:Q016',
      'final:Q017',
      'final:Q018',
      'final:Q019',
      'final:Q020',
      'final:Q021',
    ]);
    // The first quick check follows page 2's last screen.
    const i = steps.findIndex((s) => s.kind === 'question');
    const before = steps[i - 1];
    expect(before.kind === 'screen' && before.screen.page.page_id).toBe('PAGE002');
    expect(steps.at(-1)?.kind).toBe('result');
  });

  it('names the assessment the footer button leads into', () => {
    const ctaAfter = (lesson: Lesson, match: (s: LessonStep) => boolean, last = false) => {
      const steps = buildSteps(lesson, visualsFor(lesson.id));
      const i = last ? steps.findLastIndex(match) : steps.findIndex(match);
      return nextCta(lesson, steps[i + 1]);
    };
    const isQ = (id: string) => (s: LessonStep) => s.kind === 'question' && s.questionId === id;
    const onPage = (n: number) => (s: LessonStep) => s.kind === 'screen' && s.screen.page.page_number === n;
    // 1.1.3: page 3 → quick check (Q001, Q002) → page 4 … page 15 → final check.
    expect(ctaAfter(v3, onPage(3), true)).toBe('check');
    expect(ctaAfter(v3, isQ('Q001'))).toBe('continue');
    expect(ctaAfter(v3, isQ('Q002'))).toBe('continue');
    expect(ctaAfter(v3, onPage(15), true)).toBe('final');
    // 1.1.2's last quick check follows its last page and runs straight into the final check.
    expect(ctaAfter(v2, onPage(16), true)).toBe('check');
    expect(ctaAfter(v2, isQ('Q005'))).toBe('final');
    // After the last final question comes the result; a lesson without a final check offers "Finish".
    expect(ctaAfter(v1, isQ('Q004'))).toBe('continue');
    expect(ctaAfter({ ...v1, finalCheck: null }, onPage(8), true)).toBe('finish');
  });

  it('blocks unanswered questions, locks answers and scores the final check', () => {
    const steps = buildSteps(v1, visualsFor(v1.id));
    const reduce = lessonFlowReducer(steps);
    const run = (state: LessonFlowState, n: number) => Array.from({ length: n }).reduce<LessonFlowState>((s) => reduce(s, { type: 'next' }), state);
    let s = run(initialLessonFlow, 16);
    const step = steps[s.index];
    expect(step.kind === 'question' && step.questionId).toBe('Q001');
    expect(reduce(s, { type: 'next' })).toBe(s); // answer first
    s = reduce(s, { type: 'answer', questionId: 'Q001', answer: { kind: 'choice', id: 'B' } });
    s = reduce(s, { type: 'answer', questionId: 'Q001', answer: { kind: 'choice', id: 'A' } });
    expect(s.answers.Q001).toEqual({ kind: 'choice', id: 'B' });
    s = reduce(s, { type: 'back' });
    expect(s.lastMove).toBe('back');
    expect(reduce(initialLessonFlow, { type: 'back' })).toBe(initialLessonFlow);
    expect(lessonScore(v1, { ...s.answers, Q003: { kind: 'bool', value: true } })).toEqual({ correct: 1, total: 4 });
    expect(reduce(s, { type: 'restart' })).toEqual(initialLessonFlow);
  });
});
