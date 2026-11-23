/**
 * Lesson drafts waiting to be added to the app (`assets/Content generation/Chapter<n>/`): each must load in the
 * app's loader and pass the content rules the loader doesn't enforce. Repeats across lessons are checked by
 * `npm run lesson:overlap -- --all <dir> --strict`.
 */
import { describe, expect, it } from '@jest/globals';

import { loadLesson } from '../model';

interface Finding {
  kind: string;
  where: string;
  fix?: string;
}
interface OverlapTool {
  readDrafts(dir: string): { file: string; json: { topic: { topic_id: string } } }[];
  findOverlaps(candidate: unknown, earlier: unknown[]): { findings: Finding[] };
}
// Plain Node script (scripts/lesson-overlap.js); it reads the draft files.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tool: OverlapTool = require('../../../scripts/lesson-overlap');

const DRAFT_DIRS = ['assets/Content generation/Chapter2', 'assets/Content generation/Chapter3', 'assets/Content generation/Chapter4', 'assets/Content generation/Chapter5', 'assets/Content generation/Chapter6', 'assets/Content generation/Chapter7', 'assets/Content generation/Chapter8', 'assets/Content generation/Chapter9', 'assets/Content generation/Chapter10', 'assets/Content generation/Chapter11', 'assets/Content generation/Chapter12', 'assets/Content generation/Chapter13', 'assets/Content generation/Chapter14', 'assets/Content generation/Chapter15', 'assets/Content generation/Chapter16', 'assets/Content generation/Chapter17'];
const drafts = DRAFT_DIRS.flatMap((dir) => tool.readDrafts(dir));

// Rules about a lesson on its own: answer keys, examples, assessment placement and length, schema values.
const SELF_CHECKS = ['answer', 'content', 'assessment', 'schema'];

describe('lesson drafts', () => {
  it('load in the app and pass the single-lesson content rules', () => {
    for (const { file, json } of drafts) {
      try {
        loadLesson(json);
      } catch (e) {
        throw new Error(`${file}: ${(e as Error).message}`);
      }
      const problems = tool.findOverlaps(json, []).findings.filter((f) => SELF_CHECKS.includes(f.kind));
      expect([file, problems.map((f) => f.fix)]).toEqual([file, []]);
      // The file name is the topic id, so the batch stays in curriculum order.
      expect(file.replace(/\.(md|json)$/i, '')).toBe(json.topic.topic_id);
    }
  });
});
