/**
 * Flattens the curriculum into the Learning Path's list rows (banner → sub-stage → topics …),
 * and works out where the winding connector runs. Pure, so layout rules are unit tested.
 */
import { CURRICULUM, type CurriculumStage, type CurriculumSubStage } from '@/data/curriculum';

import { chapterNumber, findTopic, type TopicRef, type TopicStatus } from './progression';
import { topicIconFor, type TopicIconName } from './topic-icons';

/** Horizontal zig-zag of topic nodes (px either side of the centre line), repeating per sub-stage. */
export const PATH_ZIGZAG = [0, 44, 72, 44, 0, -44, -72, -44] as const;

/** Where the connector enters/leaves a row. `null` = the path starts/ends here (stage boundary). */
export interface PathSegment {
  /** Marker (or pass-through) offset for this row. */
  x: number;
  prevX: number | null;
  nextX: number | null;
  /** Line from the previous row is "travelled" (teal) vs not yet reached (dashed). */
  inReached: boolean;
  outReached: boolean;
}

export type PathRow =
  | { kind: 'banner'; key: string; stageNumber: number; stage: CurriculumStage }
  | { kind: 'legend'; key: string; stageNumber: number }
  | { kind: 'sub'; key: string; stageNumber: number; subStage: CurriculumSubStage; chapter: number; path: PathSegment }
  | {
      kind: 'topic';
      key: string;
      stageNumber: number;
      ref: TopicRef;
      status: TopicStatus;
      icon: TopicIconName;
      path: PathSegment;
    };

const reached = (s: TopicStatus | undefined) => s === 'completed' || s === 'current';

export function buildPathRows(statuses: Record<string, TopicStatus>): PathRow[] {
  const rows: PathRow[] = [];

  for (const stage of CURRICULUM) {
    rows.push({ kind: 'banner', key: stage.id, stageNumber: stage.number, stage });
    if (stage.number === 1) rows.push({ kind: 'legend', key: 'legend', stageNumber: 1 });

    // Path rows of this stage, before neighbours are linked.
    const pathRows: Extract<PathRow, { path: PathSegment }>[] = [];
    for (const subStage of stage.subStages) {
      let prevIcon: TopicIconName | undefined;
      const firstStatus = statuses[subStage.topics[0]?.id];
      pathRows.push({
        kind: 'sub',
        key: subStage.id,
        stageNumber: stage.number,
        subStage,
        chapter: chapterNumber(subStage.id),
        path: { x: 0, prevX: null, nextX: null, inReached: reached(firstStatus), outReached: false },
      });
      for (const topic of subStage.topics) {
        const status = statuses[topic.id] ?? 'locked';
        pathRows.push({
          kind: 'topic',
          key: topic.id,
          stageNumber: stage.number,
          ref: findTopic(topic.id)!,
          status,
          icon: (prevIcon = topicIconFor(topic.title, topic.order, prevIcon)),
          path: {
            x: PATH_ZIGZAG[(topic.order - 1) % PATH_ZIGZAG.length],
            prevX: null,
            nextX: null,
            inReached: reached(status),
            outReached: false,
          },
        });
      }
    }

    pathRows.forEach((row, i) => {
      const prev = pathRows[i - 1];
      const next = pathRows[i + 1];
      row.path.prevX = prev ? prev.path.x : null;
      row.path.nextX = next ? next.path.x : null;
      row.path.outReached = next ? next.path.inReached : false;
      // A sub-stage heading only counts as reached on its way in if the line arrives travelled.
      if (row.kind === 'sub' && !prev) row.path.inReached = false;
    });
    rows.push(...pathRows);
  }
  return rows;
}
