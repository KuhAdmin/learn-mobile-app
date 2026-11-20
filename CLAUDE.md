# Learn: project rules

Tooling and Expo rules are in `AGENTS.md`. This file holds product rules that every lesson must follow.

## Lesson assessments

1. **Every taught learning dimension ends with its own short assessment.**
   - In schema 2.0 content, each applicable dimension in `learning_dimensions` has an `assessment_id`.
   - That dimension assessment's `after_page_id` is the dimension's **last** page.
   - The learner answers it before the next dimension's pages start.
2. **The lesson ends with one longer final assessment**, after the last page (usually the summary).
   - Its questions never repeat a dimension-assessment question.
3. **Never move assessments to the end.** Dimension checks stay interleaved with the pages they test.
4. **Make assessments visible:**
   - The footer button before a quick check reads **"Quick Check"** (clipboard-check icon). The one before the final check reads **"Take Final Check"** (bullseye icon).
   - On quick-check questions, the header pill shows **"Check i/N"**, and a line under the title says **"Quick check · N questions"**.
   - Final-check questions show **"Quiz i/N"**.
5. **The loader enforces rules 1 and 2.** `loadLesson` (`src/lessons/model.ts`) rejects a lesson where:
   - a dimension has no check,
   - a check is placed anywhere other than after its dimension's last page, or
   - the final assessment is missing.
   Fix the content JSON; don't relax the check.

Schema 1.0 lessons (`1.1.1.EP001`) have no learning dimensions, only a final quiz, so rules 1 and 3 can't apply to them.

## Learner state

- **Saved state goes through `src/state/storage.ts` only** (expo-sqlite `localStorage`). Never call storage from screens.
- **Every saved value has a pure `restore…` function that validates it.** Invalid data falls back to defaults, and those functions are unit tested.
- **Change a key's version when a value's shape changes incompatibly** (`learn.progress.v1` → `v2`).
- **"Unlock all lessons" is a development-only tool.** It's honoured only when `__DEV__`, and it must never ship as a learner feature.
