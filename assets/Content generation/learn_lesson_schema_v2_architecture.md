# Learn Lesson JSON Schema v2.0 — Architecture Specification

**Status:** Proposed implementation baseline  
**Purpose:** Structured, paginated grammar lessons for the Learn English Mobile App CMS  
**Schema dialect:** JSON Schema Draft 2020-12

## 1. Design principles

1. Preserve the v1.0 lesson-generation philosophy and mobile-first page model.
2. Separate teaching content, question definitions, and assessment placement.
3. Make learning dimensions the traceability layer connecting objectives, pages, and assessments.
4. Use typed content-block and question contracts so the CMS can render each interaction consistently.
5. Use JSON Schema for structural validation and application-level validation for cross-object references and pedagogical rules.
6. Do not force every possible dimension, block, exception, or interaction into every lesson.

## 2. Top-level object

| Property | Type | Required | Purpose |
|---|---|---:|---|
| schema_version | string, const `2.0` | Yes | Contract version |
| content_type | string, const `grammar_lesson` | Yes | Artifact identity |
| generation_context | object | Yes | Preserves supplied audience and generation settings |
| topic | object | Yes | Topic identity and learner level |
| lesson | object | Yes | Metadata and measurable objectives |
| learning_dimensions | array | Yes | Dimension registry and traceability |
| pages | array | Yes | Ordered mobile learning pages |
| question_bank | array | Yes | Canonical question definitions |
| assessments | object | Yes | Dimension checks and final check |
| coverage | object | Yes | Cross-reference tracking |
| quality_audit | object | Yes | Generation-time audit results |
| requirement_traceability | array | No | Optional mapping to stable prompt requirement IDs |

## 3. Metadata and objectives

`generation_context` preserves `target_audience`, `language_level`, `learning_context`, and ISO-style `content_language`. `topic` retains `topic_id`, `title`, `learning_stage`, `learner_level`, and `language`.

Each learning objective has a unique `objective_id`, measurable `description`, and observable `success_criteria`. The lesson includes a title, summary, estimated duration, and actual page count.

## 4. Learning dimension registry

Each dimension contains:
- `dimension_id` and human-readable `dimension`.
- `applicability`: `applicable` or `not_applicable`.
- `status`: `covered`, `introduced`, or `not_applicable`.
- `learning_objective_ids`: objectives taught under the dimension.
- `page_ids`: pages that meaningfully teach the dimension.
- `assessment_id`: associated dimension assessment, or null when not applicable.

A not-applicable dimension must have no objective/page references and a null assessment. A covered or introduced dimension must reference at least one page. Referential integrity must be checked by the application.

## 5. Page model

Each page contains a unique ID, sequential page number, page type, pedagogical role, objective references, title, and one or more typed content blocks. `page_type` describes content category; `pedagogical_role` describes teaching purpose. They are deliberately separate.

The original page types are retained. Pedagogical roles include introduction, explanation, decomposition, recognition, rule application, demonstration, guided practice, comparison, error analysis, independent practice, and reinforcement.

`page_audit` can record primary objective count, estimated visible word count, density status, and standalone-understanding status. The original word-count and viewport targets remain guidelines, not hard limits.

## 6. Content block contracts

| Type | Required content | Intended rendering |
|---|---|---|
| text | `text` | Explanatory text |
| example | `examples[]` with sentence, highlight, explanation | Example panel |
| rule | `rule_id`, `rule_text`, `scope`; optional conditions, exception page refs, examples | Rule card |
| comparison | `items[]`; optional comparison points and conclusion | Side-by-side or stacked comparison |
| note | `text`; optional title | Note callout |
| warning | structured incorrect/correct/reason mistake | Error/caution callout |
| list | `items[]`; optional introduction and list style | Bulleted/numbered list |
| question | `question_id` | Reference to a canonical question |

Highlight fragments must exactly match the example sentence. This requires application-level validation.

## 7. Question bank: seven interaction contracts

All questions share `question_id`, `type`, `learning_objective_ids`, `prompt`, and `explanation`. Optional assessment metadata supports difficulty, cognitive level, and assessment purpose.

| Type | Type-specific fields | Answer representation |
|---|---|---|
| multiple_choice | `options[]` | `correct_answers[]` of option IDs; supports multiple correct options |
| true_false | — | `correct_answer` boolean |
| fill_blank | `blanks[]` | Accepted answer strings per blank |
| identify | `target` | `accepted_answers[]` |
| sentence_correction | `original_sentence`, `corrected_sentence` | Optional `accepted_corrections[]` |
| match_the_pair | `left_items[]`, `right_items[]` | `correct_pairs[]` mapping item IDs |
| flash_card | `front`, `back` | Reveal content; not necessarily scored |

The schema validates shape. Application validation must check that answer IDs refer to existing options/items and that matching pairs reference valid left/right items.

## 8. Assessment architecture

Questions are defined once in `question_bank`. Assessment objects reference question IDs and do not duplicate question content.

A dimension assessment contains `assessment_id`, `dimension_id`, `title`, `after_page_id`, and `question_ids`. The referenced page must exist and belong to the relevant dimension's teaching sequence.

The final assessment contains `assessment_id`, `title`, and `question_ids`. It assesses lesson-wide objectives. Its question IDs must not overlap with dimension-assessment question IDs. Practice questions embedded in pages are distinct from the assessment membership rule unless deliberately reused by the product.

## 9. Coverage and cross-references

`learning_dimensions` is the canonical dimension registry. `coverage.cross_references` records related concepts requiring separate lessons, with concept, reason, and coverage status (`introduced_only`, `referenced_only`, `excluded`). Cross-references must not replace teaching of concepts belonging within the supplied topic.

## 10. Quality audit

Statuses are `passed`, `failed`, and `review_required`. The audit retains the v1.0 quality dimensions and adds a dedicated `assessment_audit` for dimension coverage, final coverage, objective alignment, duplicate questions, answer keys, and interaction structures.

`overall_status` must not be passed if a mandatory audit failed or a known issue remains unresolved. Use `review_required` when human judgment is genuinely needed.

Empty `issues_found` and `corrections_made` arrays are allowed when there is nothing to report. This intentionally resolves the v1.0 conflict between optional arrays and the blanket instruction against empty arrays.

## 11. Validation layers

### Layer A — JSON Schema
Checks data types, required fields, allowed values, object shapes, and local constraints.

### Layer B — Referential integrity
The application must check:
1. IDs are unique within their namespaces.
2. `lesson.total_pages` equals the page count.
3. Page numbers are consecutive from 1.
4. Page objective IDs exist.
5. Dimension objective/page/assessment references exist.
6. Question objective IDs exist.
7. Assessment question IDs exist in `question_bank`.
8. Page question blocks reference existing questions.
9. Rule exception page IDs exist.
10. MCQ correct-answer IDs refer to existing options.
11. Match-pair references point to existing left/right items.
12. Dimension and final assessment question sets do not overlap.
13. Assessment questions test objectives already taught.
14. Every applicable taught dimension has an assessment, unless explicitly justified and flagged for review.
15. Final assessment questions meaningfully cover the relevant lesson objectives.

### Layer C — Pedagogical and linguistic QA
Checks grammar accuracy, scope, exceptions, natural examples, ELI5 readability, one primary objective per page, mobile density, logical progression, and whether practice tests only taught material.

JSON Schema cannot guarantee cross-object relationships, semantic grammar correctness, exact highlight matching, pedagogical completeness, or semantic question uniqueness. These require application validation and/or model-assisted QA.

## 12. Requirement traceability

Optional `requirement_traceability` maps stable requirement IDs to implementation status and relevant page/assessment IDs. It supports QA and prompt regression testing without repeating the entire prompt in each lesson.

## 13. Migration and compatibility

- Increment `schema_version` to `2.0`.
- Preserve lesson concepts, allowed page types, valid page IDs, page numbers, content, objective IDs, and cross-references.
- Migrate v1.0 final questions into `question_bank` and `assessments.final_assessment.question_ids`.
- Build `learning_dimensions` from v1.0 `coverage.dimensions`, then enrich with objective and assessment references.
- Convert legacy blocks into typed contracts.
- Flag incomplete legacy questions for review; do not guess missing answer data.
- Report unsupported legacy fields rather than silently discarding them.

## 14. Deliberately deferred product decisions

The source prompt does not define scoring weights, pass thresholds, retry limits, answer-reveal timing, randomisation, media/audio payloads, learner progress state, or adaptive sequencing algorithms. These belong in separate product/API specifications.
