/**
 * Grammar lesson content, schema_version 1.0 (see "Content page json structure.md").
 * Content JSON is produced by the content pipeline and shipped as-is; `parseLesson` checks it at load
 * time so a malformed file fails loudly in development instead of rendering a broken lesson.
 */

export interface LessonObjective {
  objective_id: string;
  description: string;
}

export interface ExampleItem {
  sentence: string;
  /** Words of `sentence` to highlight, in sentence order (a repeated word is listed once per use). */
  highlight: string[];
  explanation: string;
}

export type ContentBlock =
  | { block_id: string; type: 'text'; text: string }
  | { block_id: string; type: 'note'; text: string }
  | { block_id: string; type: 'example'; examples: ExampleItem[] }
  | { block_id: string; type: 'list'; items: string[] };

export type PageType = 'introduction' | 'concept' | 'application' | 'summary';

export interface LessonPage {
  page_id: string;
  page_number: number;
  page_type: PageType;
  learning_objective_ids: string[];
  title: string;
  content: ContentBlock[];
  key_takeaway?: string;
}

export interface QuizOption {
  option_id: string;
  text: string;
}

export interface QuizQuestion {
  question_id: string;
  type: 'multiple_choice' | 'true_false';
  learning_objective_ids: string[];
  question: string;
  options: QuizOption[];
  correct_answers: string[];
  explanation: string;
}

export interface GrammarLesson {
  schema_version: '1.0';
  content_type: 'grammar_lesson';
  topic: {
    /** e.g. `1.1.1.EP001` = sub-stage 1.1, topic 1, episode 1. */
    topic_id: string;
    title: string;
    learning_stage: string;
    learner_level: string;
    language: string;
  };
  lesson: {
    lesson_title: string;
    lesson_summary: string;
    learning_objectives: LessonObjective[];
    estimated_duration_minutes: number;
    total_pages: number;
  };
  pages: LessonPage[];
  knowledge_check: { title: string; questions: QuizQuestion[] };
  // `coverage` and `quality_audit` are authoring metadata; the app does not read them.
}

const BLOCK_TYPES = ['text', 'note', 'example', 'list'] as const;
const QUESTION_TYPES = ['multiple_choice', 'true_false'] as const;

type Obj = Record<string, unknown>;

/** Validates raw lesson JSON and returns it typed. Throws with the JSON path of the first problem. */
export function parseLesson(raw: unknown): GrammarLesson {
  const fail = (path: string, msg: string): never => {
    throw new Error(`Invalid lesson JSON at ${path}: ${msg}`);
  };
  const obj = (v: unknown, path: string): Obj =>
    v && typeof v === 'object' && !Array.isArray(v) ? (v as Obj) : fail(path, 'expected an object');
  const str = (v: unknown, path: string): string =>
    typeof v === 'string' && v.trim() ? v : fail(path, 'expected a non-empty string');
  const arr = (v: unknown, path: string): unknown[] => (Array.isArray(v) ? v : fail(path, 'expected an array'));
  const strs = (v: unknown, path: string) => arr(v, path).map((s, i) => str(s, `${path}[${i}]`));

  const root = obj(raw, '$');
  if (root.schema_version !== '1.0') fail('$.schema_version', `unsupported version ${String(root.schema_version)}`);
  if (root.content_type !== 'grammar_lesson') fail('$.content_type', 'expected "grammar_lesson"');

  const topic = obj(root.topic, '$.topic');
  ['topic_id', 'title', 'learning_stage', 'learner_level', 'language'].forEach((k) => str(topic[k], `$.topic.${k}`));

  const lesson = obj(root.lesson, '$.lesson');
  str(lesson.lesson_title, '$.lesson.lesson_title');
  str(lesson.lesson_summary, '$.lesson.lesson_summary');
  const objectiveIds = new Set(
    arr(lesson.learning_objectives, '$.lesson.learning_objectives').map((o, i) => {
      const p = `$.lesson.learning_objectives[${i}]`;
      str(obj(o, p).description, `${p}.description`);
      return str(obj(o, p).objective_id, `${p}.objective_id`);
    }),
  );
  const checkObjectives = (v: unknown, path: string) =>
    strs(v, path).forEach((id, i) => objectiveIds.has(id) || fail(`${path}[${i}]`, `unknown objective ${id}`));

  const pages = arr(root.pages, '$.pages');
  if (!pages.length) fail('$.pages', 'a lesson needs at least one page');
  if (lesson.total_pages !== pages.length) fail('$.lesson.total_pages', `says ${String(lesson.total_pages)}, found ${pages.length}`);

  pages.forEach((pg, pi) => {
    const p = `$.pages[${pi}]`;
    const page = obj(pg, p);
    str(page.page_id, `${p}.page_id`);
    str(page.title, `${p}.title`);
    if (page.page_number !== pi + 1) fail(`${p}.page_number`, `expected ${pi + 1}`);
    checkObjectives(page.learning_objective_ids, `${p}.learning_objective_ids`);
    if (page.key_takeaway !== undefined) str(page.key_takeaway, `${p}.key_takeaway`);

    arr(page.content, `${p}.content`).forEach((b, bi) => {
      const bp = `${p}.content[${bi}]`;
      const block = obj(b, bp);
      str(block.block_id, `${bp}.block_id`);
      const type = block.type as (typeof BLOCK_TYPES)[number];
      if (!BLOCK_TYPES.includes(type)) fail(`${bp}.type`, `unknown block type ${String(block.type)}`);
      if (type === 'text' || type === 'note') str(block.text, `${bp}.text`);
      if (type === 'list') strs(block.items, `${bp}.items`);
      if (type === 'example') {
        arr(block.examples, `${bp}.examples`).forEach((e, ei) => {
          const ep = `${bp}.examples[${ei}]`;
          const ex = obj(e, ep);
          const sentence = str(ex.sentence, `${ep}.sentence`);
          str(ex.explanation, `${ep}.explanation`);
          strs(ex.highlight, `${ep}.highlight`).forEach((w, wi) => {
            if (!new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(sentence))
              fail(`${ep}.highlight[${wi}]`, `"${w}" is not in the sentence`);
          });
        });
      }
    });
  });

  const check = obj(root.knowledge_check, '$.knowledge_check');
  str(check.title, '$.knowledge_check.title');
  arr(check.questions, '$.knowledge_check.questions').forEach((q, qi) => {
    const p = `$.knowledge_check.questions[${qi}]`;
    const question = obj(q, p);
    str(question.question_id, `${p}.question_id`);
    str(question.question, `${p}.question`);
    str(question.explanation, `${p}.explanation`);
    if (!QUESTION_TYPES.includes(question.type as (typeof QUESTION_TYPES)[number]))
      fail(`${p}.type`, `unknown question type ${String(question.type)}`);
    checkObjectives(question.learning_objective_ids, `${p}.learning_objective_ids`);
    const optionIds = arr(question.options, `${p}.options`).map((o, oi) => {
      str(obj(o, `${p}.options[${oi}]`).text, `${p}.options[${oi}].text`);
      return str(obj(o, `${p}.options[${oi}]`).option_id, `${p}.options[${oi}].option_id`);
    });
    const correct = strs(question.correct_answers, `${p}.correct_answers`);
    if (correct.length !== 1) fail(`${p}.correct_answers`, 'exactly one correct answer is supported');
    correct.forEach((id) => optionIds.includes(id) || fail(`${p}.correct_answers`, `unknown option ${id}`));
  });

  return raw as GrammarLesson;
}
