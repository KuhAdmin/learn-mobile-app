# Learn Lesson v2.0 — Source Prompt Compliance Audit

**Basis:** Original Lesson Generation Prompt Workshop instruction set (uploaded source, 1,364 lines).  
**Target:** Proposed Learn Lesson JSON Schema v2.0.

## A. Requirement-by-requirement result

| Source section | Requirement | v2.0 status | Implementation / limitation |
|---|---|---|---|
| 1 | Preserve topic and optional identifiers | Implemented | `topic`; nullable IDs |
| 1 | Preserve audience, level, context, language | Implemented | `generation_context` and topic |
| 1 | Do not invent IDs/stages | Partial | Nullability supported; generation instruction still required |
| 2 | Accuracy, completeness, simplicity, application | Partial | Structures and audits; semantic quality cannot be guaranteed by schema |
| 2 | Self-contained without teacher | Partial | Page audit field; judgment remains semantic |
| 3 | Analyse relevant dimensions | Implemented | `learning_dimensions` |
| 3 | Objectives within each dimension | Implemented | Dimension objective references |
| 3 | Avoid forcing irrelevant dimensions | Implemented | Applicability and not_applicable |
| 3 | Dimension-level checks | Implemented | `dimension_assessments` |
| 3 | Final comprehensive check | Implemented | `final_assessment` |
| 3 | Mutual exclusion of checks | Partial | Separate lists; overlap validation is application-level |
| 3 | Scope control and cross-references | Implemented | `coverage.cross_references`; scope remains a generation rule |
| 4 | Pedagogical progression | Partial | `pedagogical_role`; semantic sequence needs QA |
| 4 | ELI5 readability | Partial | Context and audit; linguistic judgment remains external |
| 5 | Mobile page model | Implemented | Page contract |
| 5 | One objective per page | Partial | Objective refs and audit; meaning requires semantic validation |
| 5 | Density guidance | Partial | Page audit; guidelines are not hard limits |
| 5 | Logical progression | Partial | Sequential pages and optional transition; prerequisite logic needs QA |
| 6 | Examples and explanations | Implemented | Example block |
| 6 | Exact highlighted fragments | Partial | Field exists; exact match requires application validation |
| 6 | Correct/incorrect demonstrations | Implemented | Structured warning/mistake |
| 7 | Seven interaction types | Implemented | Seven question contracts |
| 7 | Multiple accepted answers | Implemented | Accepted-answer arrays where applicable |
| 7 | Plausible distractors | Partial | Options supported; plausibility is semantic |
| 7 | Explanations for all questions | Implemented | Required shared explanation |
| 7 | Test only taught material | Partial | Objective links; temporal alignment needs app validation |
| 8 | Grammar accuracy and exceptions | Partial | Rule scope, conditions, exception refs; linguistic validity needs QA |
| 8 | Form/function/usage distinctions | Partial | Comparison/rule blocks; topic-dependent, not mandatory fields |
| 9 | Lesson metadata | Implemented | `lesson` |
| 9 | Page metadata and page types | Implemented | `page` contract |
| 9 | Typed content blocks | Implemented | Eight block contracts |
| 9 | Question-specific answer fields | Implemented | Type-specific question contracts |
| 9 | Coverage statuses and page mapping | Implemented | Dimension registry; referential checks external |
| 9 | Cross-references | Implemented | `coverage.cross_references` |
| 10 | Unsupported fields prohibited | Implemented | `additionalProperties: false` |
| 10 | Empty arrays only where appropriate | Implemented | Explicit required/minimum array choices; report arrays may be empty |
| 11 | Accuracy/completeness/pedagogy/readability audits | Implemented as fields | Truth of status requires actual QA |
| 11 | Page-by-page density audit | Partial | Page audit fields; measurement requires renderer/estimator |
| 11 | Duplication checks | Partial | Audit status exists; detection algorithm is external |
| 11 | JSON syntax and structure | Implemented | Formal Draft 2020-12 schema |
| 11 | Unique IDs and valid references | Partial | Application-level integrity validation required |
| 12 | Correction/re-audit protocol | Partial | Corrections/issues recorded; process is procedural |
| 12 | Do not falsely pass unresolved issues | Partial | Status model supports failure/review; pipeline must enforce |
| 13 | Exactly one JSON object, no prose/fences | Not represented | Output-format instruction, not lesson payload |
| 13 | Prohibited video/marketing/teacher outputs | Not represented | Generation policy, not lesson data |

## B. Requirements that remain outside structural JSON Schema

These need generation instructions, model-assisted QA, or application validation:
1. Grammar correctness and avoidance of misleading simplification.
2. Whether all relevant objectives have actually been taught.
3. Whether examples are natural and unambiguous.
4. Whether distractors are plausible.
5. Whether a question is answerable from preceding pages.
6. Whether a page fits the actual mobile viewport.
7. Whether a dimension is meaningfully covered rather than mentioned.
8. Whether final questions collectively provide meaningful coverage.
9. Semantic rather than exact-text duplication detection.
10. Whether corrections fully resolve identified issues.

## C. Product decisions not specified by the source prompt

Scoring, pass thresholds, retries, answer reveal, randomisation, media/audio payloads, learner progress, analytics events, and adaptive sequencing are intentionally deferred to separate specifications.

## D. Audit conclusion

The proposed v2.0 architecture closes the principal structural gaps:
- Dimension checks and final checks are distinct.
- All seven interaction types have explicit contracts.
- All eight content-block types have explicit contracts.
- Dimensions connect objectives, pages, and assessments.
- Pedagogical role is separate from page type.
- Rules, exceptions, and common mistakes have structured representation.
- Input context is preserved.
- Assessment-specific audits are explicit.
- A formal JSON Schema is supplied.

**Release recommendation:** Accept as the v2.0 architecture baseline, subject to implementation of Layer B referential-integrity validation and Layer C pedagogical/linguistic QA. The schema alone is not a complete validation engine.
