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
4. **Each question is asked once**: as an in-page practice question, in one dimension check, or in the final assessment.
   - A page's practice question is never also in the check that follows it.
   - Question explanations shouldn't start with a verdict ("Correct."). The app adds "Correct!" or "Not quite." based on the learner's answer and strips an authored one.
5. **Make assessments visible:**
   - The footer button before a quick check reads **"Quick Check"** (clipboard-check icon). The one before the final check reads **"Take Final Check"** (bullseye icon).
   - On quick-check questions, the header pill shows **"Check i/N"**, and a line under the title says **"Quick check · N questions"**.
   - Final-check questions show **"Quiz i/N"**.
6. **The loader enforces rules 1, 2 and 4.** `loadLesson` (`src/lessons/model.ts`) rejects a lesson where:
   - a dimension has no check,
   - a check is placed anywhere other than after its dimension's last page,
   - the final assessment is missing, or
   - a question is used more than once.
   Fix the content JSON; don't relax the check.

Schema 1.0 lessons (`1.1.1.EP001`) have no learning dimensions, only a final quiz, so rules 1 and 3 can't apply to them.

## Lesson content

1. **Check new lessons before building them.** Run `npm run lesson:overlap` on the workbench file. It reports:
   - repeated sentences, titles and takeaways (including sentences in question prompts and answer options)
   - re-taught concept pages
   - words an earlier lesson already showed doing more than one job
   - wrong answer keys
   - examples that don't use the word they demonstrate
   - assessment placement problems

   It ends with a fix list to paste into the generator.
   - If it finds repeats, show the user the summary first and let them decide whether to regenerate.
   - Never silently ship a lesson that re-teaches an earlier one.
2. **Keep the coverage brief current.** After adding a lesson, run `npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter1_Coverage_Brief.md"`. Only the part below the marker is regenerated.
3. **Fix content bugs in the app's copy and tell the user.** Examples: swapped answers, duplicate questions, a dimension check in the wrong place. Their source file (the workbench / generation prompt) is theirs to change.

## Lesson artwork

1. **Every lesson image has a transparent background.** Pictures cut from a mockup never keep the mockup's ivory page background.
   - Keep the drawing itself, including the pale mint blob behind a character and any white inside the drawing (a coat, a page, a speech bubble).
   - Save it as lossless WebP with alpha in `assets/lessons/<topic_id>/`.
2. **Make the cutout with `npm run art:cutout -- <crops…> --out assets/lessons/<topic_id>`** (needs ffmpeg).
   - It removes only the warm-ivory background connected to the image edge.
   - Look at the result over a dark or coloured background before using it.
3. **The tests enforce rule 1.** `lessons.test.ts` fails on any lesson image without transparency. `npm run art:cutout -- --check` lists them.

## Learner state

- **Saved state goes through `src/state/storage.ts` only** (expo-sqlite `localStorage`). Never call storage from screens.
- **Every saved value has a pure `restore…` function that validates it.** Invalid data falls back to defaults, and those functions are unit tested.
- **Change a key's version when a value's shape changes incompatibly** (`learn.progress.v1` → `v2`).
- **"Unlock all lessons" is a development-only tool.** It's honoured only when `__DEV__`, and it must never ship as a learner feature.
