/**
 * The app's single internal lesson model. Content arrives in two schema versions:
 *   - 1.0 (`Content page json structure.md`): pages + `knowledge_check`.
 *   - 2.0 (`learn_lesson_schema_v2.json`): pages + `question_bank` + `assessments`
 *     (dimension checks placed after pages, and a final check).
 * `loadLesson` validates either version and converts it to this model, so the player, screens and
 * question views only ever deal with one shape. Content files themselves are never edited.
 */
import { parseLesson as parseV1 } from './schema';

/* ───────────── Content blocks ───────────── */

export interface ExampleItem {
  sentence: string;
  /** Exact fragments of `sentence` to highlight (a repeated word is listed once per use). */
  highlight: string[];
  explanation: string;
}

export interface ComparisonItem {
  label: string;
  description: string;
  example?: string;
}

export type ContentBlock =
  | { block_id: string; type: 'text'; text: string }
  | { block_id: string; type: 'note'; title?: string; text: string }
  | { block_id: string; type: 'example'; examples: ExampleItem[] }
  | {
      block_id: string;
      type: 'list';
      introduction?: string;
      list_style?: 'numbered' | 'bulleted';
      items: string[];
      /** Index of the first item. Set by `screens.ts` (never in content) when a long list continues on the next screen. */
      start?: number;
    }
  | {
      block_id: string;
      type: 'comparison';
      items: ComparisonItem[];
      comparison_points?: string[];
      conclusion?: string;
    }
  | {
      block_id: string;
      type: 'warning';
      title?: string;
      mistake: { incorrect: string; correct: string; reason: string };
    }
  | { block_id: string; type: 'rule'; rule_text: string; scope?: string; examples?: ExampleItem[] }
  | { block_id: string; type: 'question'; question_id: string };

export interface LessonPage {
  page_id: string;
  page_number: number;
  page_type: string;
  title: string;
  content: ContentBlock[];
  key_takeaway?: string;
}

/* ───────────── Questions ───────────── */

interface QuestionBase {
  id: string;
  prompt: string;
  explanation: string;
}

export type Question =
  | (QuestionBase & { type: 'multiple_choice'; options: { id: string; text: string }[]; correctIds: string[] })
  | (QuestionBase & { type: 'true_false'; correct: boolean })
  | (QuestionBase & { type: 'fill_blank'; blanks: { id: string; accepted: string[] }[] })
  | (QuestionBase & { type: 'identify'; target?: string; accepted: string[] })
  | (QuestionBase & { type: 'sentence_correction'; original: string; accepted: string[] })
  | (QuestionBase & {
      type: 'match_the_pair';
      left: { id: string; text: string }[];
      right: { id: string; text: string }[];
      /** left id → right id */
      pairs: Record<string, string>;
    })
  | (QuestionBase & { type: 'flash_card'; front: string; back: string });

export interface Checkpoint {
  id: string;
  title: string;
  afterPageId: string;
  questionIds: string[];
}

export interface Lesson {
  /** Content `topic_id`, e.g. `1.1.1.EP001` or `1-1-2`. Keys artwork in `presentation.ts`. */
  id: string;
  schemaVersion: '1.0' | '2.0';
  lessonTitle: string;
  pages: LessonPage[];
  questions: Record<string, Question>;
  /** Short checks shown right after a page (schema 2.0 dimension assessments). */
  checkpoints: Checkpoint[];
  finalCheck: { title: string; ctaLabel: string; questionIds: string[] } | null;
}

/* ───────────── Loading ───────────── */

type Obj = Record<string, unknown>;

class LessonError extends Error {}
const fail = (path: string, msg: string): never => {
  throw new LessonError(`Invalid lesson JSON at ${path}: ${msg}`);
};
const obj = (v: unknown, path: string): Obj =>
  v && typeof v === 'object' && !Array.isArray(v) ? (v as Obj) : fail(path, 'expected an object');
const str = (v: unknown, path: string): string =>
  typeof v === 'string' && v.trim() ? v : fail(path, 'expected a non-empty string');
const optStr = (v: unknown, path: string): string | undefined => (v === undefined || v === null ? undefined : str(v, path));
const arr = (v: unknown, path: string): unknown[] => (Array.isArray(v) ? v : fail(path, 'expected an array'));
const strs = (v: unknown, path: string) => arr(v, path).map((s, i) => str(s, `${path}[${i}]`));

/** Validates raw lesson JSON (schema 1.0 or 2.0) and returns the app model. Throws with the JSON path of a problem. */
export function loadLesson(raw: unknown): Lesson {
  const version = obj(raw, '$').schema_version;
  if (version === '1.0') return fromV1(raw);
  if (version === '2.0') return fromV2(raw);
  return fail('$.schema_version', `unsupported version ${String(version)}`);
}

function fromV1(raw: unknown): Lesson {
  const v1 = parseV1(raw);
  const questions: Record<string, Question> = {};
  for (const q of v1.knowledge_check.questions) {
    const base = { id: q.question_id, prompt: q.question, explanation: q.explanation };
    questions[q.question_id] =
      q.type === 'true_false'
        ? { ...base, type: 'true_false', correct: q.correct_answers[0] === 'TRUE' }
        : {
            ...base,
            type: 'multiple_choice',
            options: q.options.map((o) => ({ id: o.option_id, text: o.text })),
            correctIds: q.correct_answers,
          };
  }
  return {
    id: v1.topic.topic_id,
    schemaVersion: '1.0',
    lessonTitle: v1.lesson.lesson_title,
    pages: v1.pages,
    questions,
    checkpoints: [],
    finalCheck: v1.knowledge_check.questions.length
      ? {
          title: v1.knowledge_check.title,
          ctaLabel: v1.knowledge_check.title,
          questionIds: v1.knowledge_check.questions.map((q) => q.question_id),
        }
      : null,
  };
}

function parseExamples(v: unknown, path: string): ExampleItem[] {
  return arr(v, path).map((e, i) => {
    const p = `${path}[${i}]`;
    const ex = obj(e, p);
    const sentence = str(ex.sentence, `${p}.sentence`);
    const highlight = strs(ex.highlight ?? [], `${p}.highlight`);
    highlight.forEach((w, wi) => sentence.includes(w) || fail(`${p}.highlight[${wi}]`, `"${w}" is not in the sentence`));
    return { sentence, highlight, explanation: str(ex.explanation, `${p}.explanation`) };
  });
}

function parseBlock(b: unknown, path: string, questionIds: Set<string>): ContentBlock {
  const block = obj(b, path);
  const block_id = str(block.block_id, `${path}.block_id`);
  const type = block.type as ContentBlock['type'];
  switch (type) {
    case 'text':
      return { block_id, type, text: str(block.text, `${path}.text`) };
    case 'note':
      return { block_id, type, title: optStr(block.title, `${path}.title`), text: str(block.text, `${path}.text`) };
    case 'example':
      return { block_id, type, examples: parseExamples(block.examples, `${path}.examples`) };
    case 'list': {
      const style = block.list_style;
      if (style !== undefined && style !== 'numbered' && style !== 'bulleted') fail(`${path}.list_style`, String(style));
      return {
        block_id,
        type,
        introduction: optStr(block.introduction, `${path}.introduction`),
        list_style: style as 'numbered' | 'bulleted' | undefined,
        items: strs(block.items, `${path}.items`),
      };
    }
    case 'comparison':
      return {
        block_id,
        type,
        items: arr(block.items, `${path}.items`).map((it, i) => {
          const ip = `${path}.items[${i}]`;
          const item = obj(it, ip);
          return {
            label: str(item.label, `${ip}.label`),
            description: str(item.description, `${ip}.description`),
            example: optStr(item.example, `${ip}.example`),
          };
        }),
        comparison_points: block.comparison_points === undefined ? undefined : strs(block.comparison_points, `${path}.comparison_points`),
        conclusion: optStr(block.conclusion, `${path}.conclusion`),
      };
    case 'warning': {
      const m = obj(block.mistake, `${path}.mistake`);
      return {
        block_id,
        type,
        title: optStr(block.title, `${path}.title`),
        mistake: {
          incorrect: str(m.incorrect, `${path}.mistake.incorrect`),
          correct: str(m.correct, `${path}.mistake.correct`),
          reason: str(m.reason, `${path}.mistake.reason`),
        },
      };
    }
    case 'rule':
      return {
        block_id,
        type,
        rule_text: str(block.rule_text, `${path}.rule_text`),
        scope: optStr(block.scope, `${path}.scope`),
        examples: block.examples === undefined ? undefined : parseExamples(block.examples, `${path}.examples`),
      };
    case 'question': {
      const id = str(block.question_id, `${path}.question_id`);
      if (!questionIds.has(id)) fail(`${path}.question_id`, `unknown question ${id}`);
      return { block_id, type, question_id: id };
    }
    default:
      return fail(`${path}.type`, `unknown block type ${String(block.type)}`);
  }
}

function parseQuestion(q: unknown, path: string): Question {
  const raw = obj(q, path);
  const base = {
    id: str(raw.question_id, `${path}.question_id`),
    prompt: str(raw.prompt, `${path}.prompt`),
    explanation: str(raw.explanation, `${path}.explanation`),
  };
  const items = (v: unknown, p: string) =>
    arr(v, p).map((it, i) => {
      const o = obj(it, `${p}[${i}]`);
      return { id: str(o.option_id ?? o.item_id, `${p}[${i}].id`), text: str(o.text, `${p}[${i}].text`) };
    });
  switch (raw.type) {
    case 'multiple_choice': {
      const options = items(raw.options, `${path}.options`);
      const correctIds = strs(raw.correct_answers, `${path}.correct_answers`);
      if (correctIds.length !== 1) fail(`${path}.correct_answers`, 'exactly one correct option is supported');
      correctIds.forEach((id) => options.some((o) => o.id === id) || fail(`${path}.correct_answers`, `unknown option ${id}`));
      return { ...base, type: 'multiple_choice', options, correctIds };
    }
    case 'true_false':
      if (typeof raw.correct_answer !== 'boolean') fail(`${path}.correct_answer`, 'expected true or false');
      return { ...base, type: 'true_false', correct: raw.correct_answer as boolean };
    case 'fill_blank':
      return {
        ...base,
        type: 'fill_blank',
        blanks: arr(raw.blanks, `${path}.blanks`).map((b, i) => {
          const bl = obj(b, `${path}.blanks[${i}]`);
          return { id: str(bl.blank_id, `${path}.blanks[${i}].blank_id`), accepted: strs(bl.accepted_answers, `${path}.blanks[${i}].accepted_answers`) };
        }),
      };
    case 'identify':
      return { ...base, type: 'identify', target: optStr(raw.target, `${path}.target`), accepted: strs(raw.accepted_answers, `${path}.accepted_answers`) };
    case 'sentence_correction':
      return {
        ...base,
        type: 'sentence_correction',
        original: str(raw.original_sentence, `${path}.original_sentence`),
        accepted: [
          str(raw.corrected_sentence, `${path}.corrected_sentence`),
          ...(raw.accepted_corrections === undefined ? [] : strs(raw.accepted_corrections, `${path}.accepted_corrections`)),
        ],
      };
    case 'match_the_pair': {
      const left = items(raw.left_items, `${path}.left_items`);
      const right = items(raw.right_items, `${path}.right_items`);
      const pairs: Record<string, string> = {};
      arr(raw.correct_pairs, `${path}.correct_pairs`).forEach((p, i) => {
        const pp = obj(p, `${path}.correct_pairs[${i}]`);
        const l = str(pp.left_id, `${path}.correct_pairs[${i}].left_id`);
        const r = str(pp.right_id, `${path}.correct_pairs[${i}].right_id`);
        if (!left.some((x) => x.id === l)) fail(`${path}.correct_pairs[${i}].left_id`, `unknown item ${l}`);
        if (!right.some((x) => x.id === r)) fail(`${path}.correct_pairs[${i}].right_id`, `unknown item ${r}`);
        pairs[l] = r;
      });
      if (Object.keys(pairs).length !== left.length) fail(`${path}.correct_pairs`, 'every left item needs exactly one pair');
      return { ...base, type: 'match_the_pair', left, right, pairs };
    }
    case 'flash_card':
      return { ...base, type: 'flash_card', front: str(raw.front, `${path}.front`), back: str(raw.back, `${path}.back`) };
    default:
      return fail(`${path}.type`, `unknown question type ${String(raw.type)}`);
  }
}

/**
 * Rule (CLAUDE.md, "Lesson assessments"): every taught learning dimension is followed by its own short
 * assessment, placed right after the dimension's last page.
 */
function checkDimensionAssessments(root: Obj, pages: LessonPage[], checkpoints: Checkpoint[]) {
  const order = new Map(pages.map((p, i) => [p.page_id, i]));
  const byId = new Map(checkpoints.map((c) => [c.id, c]));
  arr(root.learning_dimensions ?? [], '$.learning_dimensions').forEach((d, i) => {
    const p = `$.learning_dimensions[${i}]`;
    const dim = obj(d, p);
    if (dim.applicability === 'not_applicable') return;
    const pageIds = strs(dim.page_ids ?? [], `${p}.page_ids`);
    if (!pageIds.length) return; // not taught in this lesson
    pageIds.forEach((id, k) => order.has(id) || fail(`${p}.page_ids[${k}]`, `unknown page ${id}`));
    const lastPage = pageIds.reduce((a, b) => (order.get(b)! > order.get(a)! ? b : a));
    if (typeof dim.assessment_id !== 'string' || !dim.assessment_id)
      fail(`${p}.assessment_id`, `every taught dimension needs a short assessment after ${lastPage}`);
    const id = dim.assessment_id as string;
    const check = byId.get(id) ?? fail(`${p}.assessment_id`, `unknown dimension assessment ${id}`);
    if (check.afterPageId !== lastPage)
      fail(`${p}.assessment_id`, `${id} must follow ${lastPage}, the dimension's last page (found after ${check.afterPageId})`);
  });
}

function fromV2(raw: unknown): Lesson {
  const root = obj(raw, '$');
  if (root.content_type !== 'grammar_lesson') fail('$.content_type', 'expected "grammar_lesson"');
  const topic = obj(root.topic, '$.topic');
  const lesson = obj(root.lesson, '$.lesson');

  const questions: Record<string, Question> = {};
  arr(root.question_bank, '$.question_bank').forEach((q, i) => {
    const question = parseQuestion(q, `$.question_bank[${i}]`);
    if (questions[question.id]) fail(`$.question_bank[${i}].question_id`, `duplicate ${question.id}`);
    questions[question.id] = question;
  });
  const questionIds = new Set(Object.keys(questions));

  const pages = arr(root.pages, '$.pages').map((pg, pi): LessonPage => {
    const p = `$.pages[${pi}]`;
    const page = obj(pg, p);
    if (page.page_number !== pi + 1) fail(`${p}.page_number`, `expected ${pi + 1}`);
    return {
      page_id: str(page.page_id, `${p}.page_id`),
      page_number: pi + 1,
      page_type: str(page.page_type, `${p}.page_type`),
      title: str(page.title, `${p}.title`),
      content: arr(page.content, `${p}.content`).map((b, bi) => parseBlock(b, `${p}.content[${bi}]`, questionIds)),
      key_takeaway: optStr(page.key_takeaway, `${p}.key_takeaway`),
    };
  });
  if (!pages.length) fail('$.pages', 'a lesson needs at least one page');
  if (lesson.total_pages !== pages.length) fail('$.lesson.total_pages', `says ${String(lesson.total_pages)}, found ${pages.length}`);
  const pageIds = new Set(pages.map((p) => p.page_id));

  const assessments = obj(root.assessments, '$.assessments');
  const knownQuestions = (v: unknown, path: string) =>
    strs(v, path).map((id, i) => (questionIds.has(id) ? id : fail(`${path}[${i}]`, `unknown question ${id}`)));
  const checkpoints = arr(assessments.dimension_assessments ?? [], '$.assessments.dimension_assessments').map((a, i): Checkpoint => {
    const p = `$.assessments.dimension_assessments[${i}]`;
    const da = obj(a, p);
    const afterPageId = str(da.after_page_id, `${p}.after_page_id`);
    if (!pageIds.has(afterPageId)) fail(`${p}.after_page_id`, `unknown page ${afterPageId}`);
    return {
      id: str(da.assessment_id, `${p}.assessment_id`),
      title: str(da.title, `${p}.title`),
      afterPageId,
      questionIds: knownQuestions(da.question_ids, `${p}.question_ids`),
    };
  });
  checkDimensionAssessments(root, pages, checkpoints);

  // Rule: the lesson ends with a longer final assessment (see CLAUDE.md, "Lesson assessments").
  const fa = obj(assessments.final_assessment, '$.assessments.final_assessment');
  const ids = knownQuestions(fa.question_ids, '$.assessments.final_assessment.question_ids');
  if (!ids.length) fail('$.assessments.final_assessment.question_ids', 'a lesson needs a final assessment');

  // Rule: each question is asked once — as in-page practice, in one dimension check, or in the final.
  const usedAt = new Map<string, string>();
  const use = (id: string, where: string, path: string) => {
    const before = usedAt.get(id);
    if (before) fail(path, `${id} is used more than once (${before} and ${where})`);
    usedAt.set(id, where);
  };
  pages.forEach((page, pi) =>
    page.content.forEach(
      (b, bi) => b.type === 'question' && use(b.question_id, `page ${page.page_id}`, `$.pages[${pi}].content[${bi}].question_id`),
    ),
  );
  checkpoints.forEach((c, ci) =>
    c.questionIds.forEach((id) => use(id, `dimension check ${c.id}`, `$.assessments.dimension_assessments[${ci}].question_ids`)),
  );
  ids.forEach((id) => use(id, 'the final assessment', '$.assessments.final_assessment.question_ids'));

  const finalCheck = { title: str(fa.title, '$.assessments.final_assessment.title'), ctaLabel: 'Take Final Check', questionIds: ids };

  return {
    id: str(topic.topic_id, '$.topic.topic_id'),
    schemaVersion: '2.0',
    lessonTitle: str(lesson.lesson_title, '$.lesson.lesson_title'),
    pages,
    questions,
    checkpoints,
    finalCheck,
  };
}
