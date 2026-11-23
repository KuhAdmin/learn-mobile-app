# Chapter 11 (3.1 Tenses): coverage brief for lesson generation

The 21 Tenses lessons are generated one after another, but each generation can't see the others. Earlier chapters kept tense names out on purpose and sent them here, but they already taught many of the pieces:
- verb forms (2-1-6, 2-1-9)
- already, just and yet (2-2-3)
- still and no longer (2-2-8)
- do, does and did in questions and negatives (2-4-16, 2-4-17)
- stative verbs without -ing (2-1-8)

The chapter also overlaps itself in three places:
- **Questions and negatives:** 3-1-17 and every tense lesson.
- **The future:** 3-1-10, 3-1-18 and 3-1-19.
- **Errors:** 3-1-14, 3-1-15 and 3-1-21.

This brief gives each topic its own job.

## How to use it

1. Generate the topics in order, 3-1-1 to 3-1-21. For each one, give the generation prompt (`Prompt/_learn_lesson_generation_prompt_v2.md`):
   - the topic input, with `topic_id` `3-1-<n>`
   - that topic's **Scope** entry below
   - the **Rule to paste into the generation prompt** section
   - the whole **Already covered** section
2. Save the JSON as `assets/Content generation/Chapter11/3-1-<n>.md`. The file name must be the topic id.
3. Check the whole batch, and repeat the fix list until it is clean:
   `npm run lesson:overlap -- --all "assets/Content generation/Chapter11" --with "assets/Content generation/Chapter3" --with "assets/Content generation/Chapter4" --with "assets/Content generation/Chapter5" --with "assets/Content generation/Chapter6" --with "assets/Content generation/Chapter7" --with "assets/Content generation/Chapter8" --with "assets/Content generation/Chapter9" --with "assets/Content generation/Chapter10" --strict`
   `npx jest src/lessons/__tests__/drafts.test.ts`
   Each draft is compared with every app lesson, the Chapter 3–10 drafts, and the Chapter 11 drafts before it.
4. Refresh **Already covered**, so the next lesson sees this one:
   `npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter11_Coverage_Brief.md" --with "assets/Content generation/Chapter3" --with "assets/Content generation/Chapter4" --with "assets/Content generation/Chapter5" --with "assets/Content generation/Chapter6" --with "assets/Content generation/Chapter7" --with "assets/Content generation/Chapter8" --with "assets/Content generation/Chapter9" --with "assets/Content generation/Chapter10" --with "assets/Content generation/Chapter11"`

## What Chapters 1–10 already teach about tenses

- **2-1-2:** helping verbs (be, have, do, will) and the verb phrase.
- **2-1-6:** base, past and past participle; regular -ed spelling; irregular groups.
- **2-1-7:** finite verbs show tense.
- **2-1-8:** stative verbs don't take -ing ("I know", not "I am knowing"); verbs with two meanings (have, think, taste).
- **2-1-9:** the five verb forms; -s and -ing spelling.
- **2-1-14:** "did went" and "I am knowing" as mistakes.
- **2-2-3:** already, just and yet; their meaning and position, with no tense names.
- **2-2-5 and 2-2-8:** frequency adverbs; still, no longer, any more.
- **2-2-7:** probably won't.
- **2-3:** agreement in the present (-s after he, she, it), and was / were.
- **2-4-16 and 2-4-17:** question and negative order; do, does and did + base form.
- **2-5-6:** already → yet in negatives.

None of the Chapter 11 lessons re-teaches these. At most one short recap line, then the tense.

## Scope for each topic

Each entry says what the lesson owns, and what it must leave to another topic (record those in `coverage.cross_references`).

Each tense lesson (3-1-2 to 3-1-13) teaches the tense's **affirmative form, its uses and its time words**. Questions and negatives for all tenses are taught together in 3-1-17. A tense lesson may show one negative or question as a note at most.

**3-1-1 Introduction to Tense and Time**: tense is the verb form; time is when.
- Owns:
  - tense versus time (a present tense can talk about the future)
  - three times × four aspects: simple, continuous, perfect, perfect continuous
  - what each aspect adds: a plain fact, an action in progress, a link to a later moment, a duration up to a moment
  - time words as clues
  - a one-page map of the chapter
- Not here: each tense (3-1-2 to 3-1-13).

**3-1-2 Present Simple**: habits, facts and states.
- Owns:
  - form: base or -s (recall 2-3 and 2-1-9 in one line)
  - uses: habits and routines; facts and general truths; permanent situations; states
  - time words: every day, on Mondays, usually (2-2-5 recall)
- Not here: timetables for the future (3-1-18), questions and negatives (3-1-17).

**3-1-3 Present Continuous**: what's happening now.
- Owns:
  - form: am / is / are + -ing
  - uses: now; around now (this week, temporary); changing situations ("It's getting darker.")
  - present simple or present continuous? (habit or now; permanent or temporary)
  - time words: now, at the moment, today, these days
- Not here: stative verbs (2-1-8, 3-1-20), future arrangements (3-1-18).

**3-1-4 Present Perfect**: the past connected to now.
- Owns:
  - form: have / has + past participle (2-1-6 recall)
  - uses: experience with ever and never; a past action with a result now; unfinished time (today, this year)
  - for and since with states ("We have lived here for six years.")
  - been or gone ("She has gone to Delhi." / "She has been to Delhi.")
  - one recall line for already, just and yet (2-2-3)
- Not here: present perfect or past simple (3-1-6), for / since prepositions in depth (4.1).

**3-1-5 Present Perfect Continuous**: an activity up to now.
- Owns:
  - form: have / has been + -ing
  - uses: an activity that started in the past and is still going on (for, since, how long); a recent activity with a visible result ("Your hands are muddy — have you been gardening?")
  - present perfect continuous or present perfect? (the activity, or the result and the number)
- Not here: stative verbs in this tense (3-1-20).

**3-1-6 Past Simple**: finished actions at a finished time.
- Owns:
  - form: regular and irregular past (2-1-6 recall); was / were
  - uses: finished actions at a finished time; a sequence of past events; past habits
  - time words: yesterday, ago, last week, in 2019
  - past simple or present perfect? (a finished time, or a connection to now)
- Not here: used to (later stages), questions with did (2-4-16, 3-1-17).

**3-1-7 Past Continuous**: in progress in the past.
- Owns:
  - form: was / were + -ing
  - uses: in progress at a past time; background in a story; an action interrupted (when + past simple); two actions at the same time (while)
- Not here: sequence of tenses (3-1-16).

**3-1-8 Past Perfect**: the earlier past.
- Owns:
  - form: had + past participle
  - uses: something that happened before another past event; by the time…; already in the past
  - past perfect or past simple in sequences (one after another needs no past perfect)
- Not here: reported speech (3.5), third conditionals (4.5).

**3-1-9 Past Perfect Continuous**: duration before a past moment.
- Owns:
  - form: had been + -ing
  - uses: how long something had been going on before a past moment; the cause of a past result ("She was tired because she had been running.")
- Not here: reported speech (3.5).

**3-1-10 Future Simple**: will and shall.
- Owns:
  - form: will + base (won't in one note)
  - uses: predictions; decisions made at the moment of speaking; promises, offers and requests
  - Shall I / Shall we…? for offers and suggestions
  - I think … will; probably will (2-2-7, one recall line)
- Not here: going to (3-1-19), present tenses for the future (3-1-18), modals (3.3).

**3-1-11 Future Continuous**: in progress in the future.
- Owns:
  - form: will be + -ing
  - uses: in progress at a future time ("This time tomorrow, we'll be flying to Goa."); a polite question about plans ("Will you be using the laptop tonight?")
- Not here: future arrangements (3-1-18).

**3-1-12 Future Perfect**: finished before a future time.
- Owns:
  - form: will have + past participle
  - uses: something complete by a future time; by + time; by the time + present simple
- Not here: time clauses in depth (3-1-16).

**3-1-13 Future Perfect Continuous**: duration up to a future point.
- Owns:
  - form: will have been + -ing
  - uses: how long something will have been going on by a future point ("By June, Mrs Rao will have been teaching for twenty years.")
- Not here: stative verbs (3-1-20).

**3-1-14 Tense Identification and Selection**: naming and choosing tenses.
- Owns:
  - identifying the tense from its helper and verb form (a decoder: had + past participle = past perfect…)
  - choosing a tense from time words and meaning
  - choosing between close pairs, as a summary page (simple or continuous; perfect or simple)
- Not here: error correction (3-1-21).

**3-1-15 Tense Consistency**: staying in one time frame.
- Owns:
  - keep the same time frame in a paragraph or story
  - change tense only when the time really changes
  - spotting an unwanted shift (past story slipping into present)
- Not here: sequence of tenses (3-1-16).

**3-1-16 Sequence of Tenses**: how the tense in one clause affects another.
- Owns:
  - after a past main verb (knew, thought, hoped), the next clause usually shifts back ("I thought it would rain.")
  - would as the future in the past
  - time clauses: when / after / before / as soon as / until + present for the future ("When I get home, I'll call you.")
- Not here: reported speech (3.5), conditionals (4.5).

**3-1-17 Tenses in Questions and Negatives**: one rule for all tenses.
- Owns:
  - the first helper moves for a question and takes not for a negative, in every tense
  - do / does / did only in the simple tenses with no helper (2-4-16 and 2-4-17, one recall line)
  - short answers for each tense ("Yes, I have." / "No, they weren't.")
  - wh- questions with perfect and continuous tenses ("How long have you been waiting?")
- Not here: question tags (3.2).

**3-1-18 Present Tense for Future Arrangements**: present forms for the future.
- Owns:
  - present continuous for fixed arrangements ("We're meeting Asha at six.")
  - present simple for timetables and schedules ("The train leaves at 7.15.")
  - these forms or will?
- Not here: going to (3-1-19).

**3-1-19 Different Ways of Expressing the Future**: choosing a future form.
- Owns:
  - be going to for plans and intentions, and for predictions based on what we can see
  - will or going to?
  - be about to (very soon)
  - a comparison of will, going to, the present continuous and the present simple
- Not here: modals of possibility (3.3).

**3-1-20 Stative Verbs and Tense Restrictions**: stative verbs across the tenses.
- Owns:
  - one recall line: stative verbs don't take -ing (2-1-8)
  - in the perfect: "I have known her for years." (not have been knowing)
  - in the past: "I didn't understand." (not wasn't understanding)
  - in the future: "I'll need help." (not will be needing, in most cases)
  - be as an action: "You're being silly." (behaving)
- Not here: verbs with two meanings (2-1-8).

**3-1-21 Common Tense Errors**: fixing the mistakes learners make with tenses.
- Errors only, one kind per page, each with a correction; no re-teaching:
  - present perfect with a finished time ("I have seen him yesterday.")
  - since with a length of time ("since three years")
  - present simple for now ("Look! It rains.")
  - will in a time clause ("When I will arrive…")
  - present tense with since or for ("I live here since 2019.")
  - past perfect for a simple past event ("I had gone to school yesterday.")
- Not here: did went, I am knowing (2-1-14), agreement errors (2.3).

## Rule to paste into the generation prompt

> Do not reuse any sentence, focus word, page title or key takeaway listed under "Already covered", including Chapter 11 lessons generated before this one. Build on these lessons instead of re-teaching them, and choose new everyday example sentences. This also applies to question prompts and answer options: their sentences must be new too. Never demonstrate a word listed under "Words already shown doing more than one job" in more than one job again. Never highlight the same word (other than very short function words) in two different example sentences on one page.
>
> Highlight the whole verb group ("has been raining", "had left") rather than one word. In comparison blocks, don't start a comparison point with a word both examples share; start with "In the first sentence…". Don't use a dash, a colon or the word "as" in a comparison label. Since is on the "more than one job" list: highlight "since 2019", never "since" alone.
>
> Teach only what this topic's Scope entry owns. Leave everything under "Not here" to the topic named. Record it in `coverage.cross_references` as `{ "concept", "reason", "coverage" }`, with `coverage` one of `introduced_only`, `referenced_only`, `excluded`. Use no other fields.
>
> Learners already know the verb forms (2-1-6, 2-1-9), agreement (2.3), question and negative order with do / does / did (2-4-16, 2-4-17), already / just / yet (2-2-3) and stative verbs without -ing (2-1-8). Recall them in one short line at most.
>
> Every `quality_audit` entry (and every `assessment_audit` entry) is a plain string: `"passed"`, `"failed"` or `"review_required"`, not an object with notes.
>
> Every applicable learning dimension has `"applicability": "applicable"` and `"status": "covered"` (or `"introduced"`). It has its own dimension assessment of 2–4 questions, placed right after the dimension's last page (`after_page_id`).
>
> End with a final assessment of at least 4 questions across the lesson's objectives, longer than any dimension assessment. Ask each question once: as an in-page practice question, in one dimension assessment, or in the final assessment. Never use an in-page practice question in an assessment.
>
> Start explanations with the reason, not a verdict ("Correct. …"); the app shows "Correct!" or "Not quite." itself.
>
> In `identify` questions, `accepted_answers` must answer the prompt: the words themselves ("had left"), not "past perfect". Include natural variants.
>
> The app compares typed answers (`identify`, `fill_blank`, `sentence_correction`) without case, apostrophes or end punctuation, but hyphens must match exactly. Short forms (won't, hasn't) lose their apostrophe in typed answers, so ask for full forms in `fill_blank`, or use `multiple_choice`. Never test capital letters, apostrophes, commas or hyphens with a typed answer. A `sentence_correction` must change the words or their order, not only punctuation.
>
> Every `highlight` is an exact substring of its sentence.

<!-- GENERATED BELOW: npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter11_Coverage_Brief.md" --with "assets/Content generation/Chapter3" --with "assets/Content generation/Chapter4" --with "assets/Content generation/Chapter5" --with "assets/Content generation/Chapter6" --with "assets/Content generation/Chapter7" --with "assets/Content generation/Chapter8" --with "assets/Content generation/Chapter9" --with "assets/Content generation/Chapter10" --with "assets/Content generation/Chapter11" -->

## Already covered

Do not reuse any sentence, focus word, page title or key takeaway listed below. Build on these lessons instead of re-teaching them.

**Words already shown doing more than one job** (don't demonstrate them that way again): careful, after, text, book, play, water, answer, poor, clean, dry, fast, hard, early, inside, before, light, watch, patient, drink, help, dance, brush, plant, empty, straight, since, around, cook, late, glass, iron, silver, cousins, daily, will.

### 1.1.1 Discover Parts of Speech

- **Pages:** Words Are Everywhere · Words Have Different Jobs · Meet the Word Teams · Words Belong to Groups · Words Work Together · Grammar Helps Make Sense · A Word Can Change Its Job · What Have You Learned?
- **Key takeaways:** Sentences are built from words. · Different words do different jobs. · Parts of speech are grammatical word groups. · Words are grouped by their grammatical behaviour. · Words work together to express ideas. · Grammar helps us understand sentences. · A word's use helps determine its grammatical category. · Parts of speech help us understand how words work.
- **Example sentences:**
  - The little bird sings. _(focus: The, little, bird, sings)_
  - The happy girl dances. _(focus: girl, happy, dances)_
  - Dogs bark. _(focus: Dogs, bark)_
  - My brother plays football. _(focus: brother, plays, football)_
  - The cat chased the mouse. _(focus: cat, chased, mouse)_
  - I drink water. Please water the plant. _(focus: drink, water, plant)_

### 1.1.2 The Eight Parts of Speech

- **Pages:** Every Word Has a Job · What Are Parts of Speech? · Meet the Eight Parts · Noun – Naming Words · Pronoun – Replacement Words · Verb – Action and State Words · Adjective – Describing Words · Adverb – Modifying Words · Preposition – Relationship Words · Conjunction and Interjection · Find the Word's Job · Explore One Sentence · Adjective or Adverb? · Words Can Change Jobs · Let's Practise Together · You Know the Eight!
- **Words shown in more than one job:** careful
- **Key takeaways:** Words have different jobs in sentences. · The job of a word helps us identify its part of speech. · Remember all eight: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction and Interjection. · A noun names someone or something. · A pronoun can take the place of a noun or noun phrase. · Verbs express actions, states or help other verbs. · An adjective gives more information about a noun or pronoun. · An adverb modifies a verb, adjective or another adverb. · A preposition shows a relationship between words. · Conjunctions join. Interjections express feelings. · Look at the word's job in the sentence. · A sentence can contain several different parts of speech. · Adjective describes a noun or pronoun. Adverb modifies a verb, adjective or adverb. · Identify words by their function, not just their appearance. · Eight parts of speech help us understand how English sentences work.
- **Example sentences:**
  - Rita sings beautifully. _(focus: Rita, sings, beautifully)_
  - The small girl reads quietly. _(focus: The, small, girl, reads, quietly)_
  - Maya loves her school. _(focus: Maya, school)_
  - The dog plays with a ball. _(focus: dog, ball)_
  - Riya is my friend. She is kind. _(focus: Riya, She)_
  - The boys are playing. They are happy. _(focus: boys, They)_
  - Tom kicks the ball. _(focus: kicks)_
  - Sara is happy. _(focus: is)_
  - The beautiful flower smells sweet. _(focus: beautiful)_
  - He is clever. _(focus: clever)_
  - The girl sings beautifully. _(focus: beautifully)_
  - He is very tall. _(focus: very)_
  - The cat is under the table. _(focus: under)_
  - We play after lunch. _(focus: after)_
  - I like tea and coffee.
  - Wow! That is amazing.
  - The happy child laughs loudly. _(focus: happy, child, laughs, loudly)_
  - Wow! The tiny puppy races happily across the lawn. _(focus: Wow!, tiny, puppy, races, happily, across, the)_
  - She is a careful driver.
  - She drives carefully.
  - We played in the park.
  - Park the car here.
  - Every word ending in -ly is an adverb.

### 1.1.3 Content Words and Function Words

- **Pages:** Two Word Families · What Are Content Words? · What Are Function Words? · Four Common Content Words · Common Function Words · Open-Class Words · Closed-Class Words · Find Both Groups · The Two Groups Compared · Spot Words in Context · How They Work Together · Meaning and Sentence Structure · Short Does Not Mean Function · Context Can Change the Job · Remember the Difference
- **Words shown in more than one job:** after
- **Key takeaways:** English has two important word families. · Content words carry the main message. · Function words help build the sentence. · Nouns, main verbs, adjectives and adverbs are common content words. · Function words organise and connect information. · Open classes can welcome new words. · Content words are mostly open-class; function words are mostly closed-class. · One sentence can contain both word groups. · Both groups have different but important jobs. · Always check a word's job in its sentence. · Both word groups work together to make clear sentences. · Small words can carry important grammatical information. · Word length does not decide word type. · Context helps identify a word's grammatical job. · Meaning comes from content words; sentence organisation needs function words.
- **Example sentences:**
  - The little boy runs quickly. _(focus: little, boy, runs, quickly, The)_
  - Maya sings beautifully. _(focus: Maya, sings, beautifully)_
  - The cat is sitting under the table. _(focus: The, is, under)_
  - We use the word selfie for a type of photograph. _(focus: selfie)_
  - People now use the verb google. _(focus: google)_
  - Nouns: selfie, podcast.
  - Articles: a, an, the.
  - The happy girl is reading a book. _(focus: happy, girl, reading, book)_
  - Birds fly high.
  - The birds are in the garden.
  - Ravi quickly opened the door. _(focus: Ravi, quickly, opened, door)_
  - The children are playing in the park. _(focus: children, playing, park)_
  - She is going to school. _(focus: She, is, to)_
  - She going school. _(focus: going, school)_
  - Cows moo. _(focus: Cows, moo)_
  - Every short word is a function word.
  - Come after lunch.
  - Come after I leave.
  - Soon after, the rain stopped.
  - After is always a preposition.
  - Happy children play outside.
  - The children are in the garden.

### 1.1.4 Open and Closed Word Classes

- **Pages:** Two Groups of Words · What Is an Open Class? · What Is a Closed Class? · The Four Open Classes · The Closed Word Classes · Open Versus Closed · See Both Groups Together · How to Identify Them · Check What You Know · Why Are They Open? · Why Are They Closed? · Same Spelling, Different Class · Some Special Cases · Avoid This Mistake · Your Quick Revision
- **Words shown in more than one job:** text
- **Key takeaways:** English words belong to two main groups. · Open classes can easily gain new words. · Closed classes usually have a fixed set of words. · Nouns, lexical verbs, adjectives and adverbs are the main open classes. · Closed classes help words work together in sentences. · Open classes grow more easily than closed classes. · One sentence can contain words from both groups. · Identify a word by its job in the sentence. · Look at the word's grammatical job. · New ideas bring new open-class vocabulary. · Closed classes change slowly because their grammatical jobs are established. · A word's class depends on how it is used. · Some words need a closer look before classification. · Classify words by their use, not just their form. · Open classes grow. Closed classes provide grammatical structure.
- **Example sentences:**
  - The little dog runs quickly. _(focus: dog, little, runs, quickly)_
  - We can Google the answer. _(focus: Google)_
  - She posted a selfie. _(focus: selfie)_
  - She is sitting on the chair. _(focus: She, is, on, the)_
  - The happy child plays happily. _(focus: child, plays, happy, happily)_
  - Noun: selfie
  - Preposition: under
  - The clever boy ran into the garden. _(focus: clever, boy, ran, The, into, the)_
  - She sings beautifully. _(focus: She, sings, beautifully)_
  - A cat slept under the table. _(focus: A, cat, slept, under, the, table)_
  - He downloaded an app. _(focus: downloaded, app)_
  - She put the book on the table. _(focus: She, the, on)_
  - I received a text.
  - I will text you.
  - Oh! I dropped my pencil. _(focus: Oh)_
  - Text is always a noun.

### 1.1.5 One Word, Different Jobs

- **Pages:** One Word, Two Jobs! · What Is a Word's Job? · Look at the Sentence! · A Noun Can Become a Verb · More Noun and Verb Examples · An Adjective Can Become a Noun · An Adjective Can Become a Verb · An Adjective Can Become an Adverb · More Adjective and Adverb Examples · A Word Can Be a Preposition · A Word Can Be a Conjunction · How Can You Find the Job? · Same Word, Different Sentences · Try Identifying the Job · Common Mistake: Fixed Labels · Meaning Is Not Enough · Test Your Understanding · Remember These Rules
- **Words shown in more than one job:** book, play, water, answer, poor, clean, dry, fast, hard, early, inside, before, light, watch
- **Key takeaways:** One word can have different grammatical jobs. · A part of speech tells us what job a word does. · The sentence gives the clue. · Play can be a noun or a verb. · Water and answer can also change their jobs. · The same describing word can also name a group. · Clean and dry can be adjectives or verbs. · Fast can be an adjective or an adverb. · Hard and early can have different grammatical functions. · Inside can be a preposition or an adverb. · Before can be a preposition, conjunction or adverb. · Ask what job the word is doing. · Light can be a noun, adjective or verb. · Always use the complete sentence as your clue. · Never give a word one permanent part-of-speech label. · Check the word's grammatical function, not just its meaning. · Find the job before choosing the part of speech. · One word. Different jobs. The sentence tells you which one.
- **Example sentences:**
  - I have a book. _(focus: book)_
  - Please book a table. _(focus: book)_
  - Rita runs every morning. _(focus: Rita)_
  - Play
  - The play was funny.
  - The children play is starting. _(focus: play)_
  - The children play outside. _(focus: play)_
  - Please drink some water.
  - I water the plants.
  - Your answer is correct.
  - Please answer the question.
  - The poor need our support. _(focus: poor)_
  - The poor man needs help. _(focus: poor)_
  - The room is clean. _(focus: clean)_
  - Please clean the room. _(focus: clean)_
  - The floor is dry. _(focus: dry)_
  - Dry the floor. _(focus: Dry)_
  - She is a fast runner. _(focus: fast)_
  - She runs fast. _(focus: fast)_
  - This is a hard task.
  - She works hard.
  - It was an early train.
  - We arrived early.
  - The cat is inside the box. _(focus: inside)_
  - The cat is inside. _(focus: inside)_
  - I arrived before lunch.
  - I arrived before the show started.
  - I have seen this before.
  - Turn on the light.
  - This bag is light.
  - Light the candle.
  - The children watch television. _(focus: watch)_
  - I bought a new watch. _(focus: watch)_
  - Book is always a noun.
  - Fast is always an adjective.

### 1.1.6 Find the Job of Every Word

- **Pages:** Words Build Every Sentence · How Words Get Their Groups · A Quick Look at Eight Word Groups · Start with the Whole Sentence · Find the Main Action · Who or What Does It? · Find What Receives the Action · Find Words That Add Details · Find the Connecting Words · Look at Every Small Word · Put All the Clues Together · Use Questions to Find Word Jobs · Follow the Word Clues · Read a Sentence Like a Detective · When a Word Changes Its Role · Compare Different Uses of Words · Do Not Trust Word Endings · Separate Adjectives from Adverbs · Analyse a Sentence Word by Word · Your Parts of Speech Checklist
- **Words shown in more than one job:** light, clean, early, patient
- **Key takeaways:** A sentence works because its words work together. · Grammar groups words by their jobs. · You know the groups. Now find them at work. · Read the whole sentence before classifying words. · Find the verb to understand what is happening. · Find who or what the sentence is about. · Ask what or whom the action affects. · Find the word each describing word modifies. · Find words that connect or show relationships. · Even small words have important grammatical jobs. · Combine sentence clues to identify word classes. · Ask what grammatical job a word performs. · Use meaning and sentence relationships as clues. · Examine each word's function in context. · One word can perform different jobs. · Context determines grammatical classification. · A word's function matters more than its ending. · Identify what the describing word modifies. · Analyse words according to their sentence roles. · Understand the job before naming the word group.
- **Example sentences:**
  - Emma paints colourful pictures. _(focus: Emma, paints, colourful, pictures)_
  - The curious puppy chased a butterfly. _(focus: curious, puppy, chased, butterfly)_
  - The mechanic repaired the engine. _(focus: repaired)_
  - The garden looks beautiful. _(focus: looks)_
  - The little squirrel climbed the tree. _(focus: The little squirrel)_
  - Mira opened the wooden box. _(focus: the wooden box)_
  - The audience enjoyed the performance. _(focus: the performance)_
  - The brave firefighter acted quickly. _(focus: brave, quickly)_
  - The children played near the fountain. _(focus: near)_
  - Sam wanted tea but chose coffee. _(focus: but)_
  - She placed a cup beside him. _(focus: She, a, beside, him)_
  - Yesterday, the young explorer carefully crossed the narrow bridge. _(focus: Yesterday, young, explorer, carefully, crossed, narrow, bridge)_
  - Liam carefully opened the envelope. _(focus: carefully)_
  - Yesterday, my cheerful uncle cooked dinner outdoors. _(focus: Yesterday, my, cheerful, uncle, cooked, dinner, outdoors)_
  - The light is bright.
  - The guide will light a torch at dusk.
  - The clean kitchen looks lovely.
  - Please clean the kitchen.
  - We caught an early train.
  - The guests arrived early.
  - In 'The elderly man smiled', elderly is an adverb.
  - The patient teacher explained the lesson.
  - The teacher explained the lesson patiently.
  - Those excited children eagerly explored the museum. _(focus: Those, excited, children, eagerly, explored, museum)_

### 1.1.7 Word Classification Through Context

- **Pages:** One Word, Different Jobs · Context Gives the Clue · Same Word, Different Class · Discover the Word's Function · Use the Sentence Clues · Try the Sentence Clue · A Word Can Be a Noun or Verb · Brush Has Two Jobs · Plant Has Different Jobs · Empty Can Change Its Job · Straight Can Be Two Classes · Since Has Different Jobs · Round Can Be Three Classes · Noun or Verb? · Describing Words: Adjective or Adverb? · Read Before You Classify · Classify in Context · Avoid These Mistakes · The Context Rule
- **Words shown in more than one job:** drink, help, dance, brush, plant, empty, straight, since, around, cook, late
- **Key takeaways:** A word's grammatical role can change from sentence to sentence. · Look at the whole sentence, not just one word. · Word class depends on grammatical function. · Ask what the word does. · Sentence clues reveal grammatical function. · Use meaning and function together. · A noun can name an action as an activity. · Brush can name an object or show an action. · Plant can be a noun or a verb. · An adjective can also function as a verb. · A word's ending does not always reveal its class. · Since can be a preposition or a conjunction. · One spelling can perform several grammatical jobs. · Naming and doing are different grammatical jobs. · Check whether a word describes a noun or modifies an action. · Sentence first, word class second. · Classify each use independently. · Meaning and sentence function work together. · Context is the key to word classification.
- **Example sentences:**
  - They drink tea. _(focus: drink)_
  - Have a drink. _(focus: drink)_
  - The birds fly south. _(focus: fly)_
  - The children watched a play. _(focus: play)_
  - I need some help.
  - Please help me.
  - A small puppy sleeps. _(focus: small)_
  - The bird sings beautifully. _(focus: beautifully)_
  - The children dance together. _(focus: dance)_
  - The dance was wonderful. _(focus: dance)_
  - I brush my hair every morning. _(focus: brush)_
  - This brush has soft bristles. _(focus: brush)_
  - The plant needs sunlight. _(focus: plant)_
  - They plant roses in spring. _(focus: plant)_
  - The empty box is on the floor. _(focus: empty)_
  - Please empty the box. _(focus: empty)_
  - Draw a straight line. _(focus: straight)_
  - Walk straight ahead. _(focus: straight)_
  - I have lived here since 2020. _(focus: since)_
  - Since you arrived, everything has changed. _(focus: Since)_
  - We sat around the table. _(focus: around)_
  - The children stood around. _(focus: around)_
  - We played a round of chess. _(focus: round)_
  - The cook prepared dinner.
  - I cook dinner.
  - The late bus finally arrived.
  - The bus arrived late.
  - He explains patient.
  - Words ending in -ly are always adverbs.
  - Dance is always a verb because it means an activity.

### 1.2.1 Introduction to Nouns

- **Pages:** Nouns Are Everywhere · Nouns Name Events · Nouns Name Times · Nouns Name Jobs and Subjects · The Naming Question · Try the Frame Test · Does It Fit the Frame? · Test Every Word · The Noun Family · Your Noun Toolkit
- **Key takeaways:** Most sentences contain at least one noun. · Events have names, and those names are nouns. · Times and seasons are named by nouns. · Jobs and school subjects are nouns. · If a word names someone or something, it is a noun. · A word that fits the frame is usually a noun. · If the frame sounds wrong, the word is not a noun. · Check each word: one sentence can hold many nouns. · Nouns come in many kinds. · The naming question and the frame test find nouns.
- **Example sentences:**
  - Our bus reached the station at noon. _(focus: bus, station, noon)_
  - The wedding starts after lunch. _(focus: wedding)_
  - Our school won the quiz. _(focus: quiz)_
  - Grandpa visits us every summer. _(focus: summer)_
  - The bakery closes in the evening. _(focus: evening)_
  - Her cousin works as a nurse. _(focus: nurse)_
  - History is my favourite subject. _(focus: History, subject)_
  - The guide showed us the castle. _(focus: guide, castle)_
  - I can see the lighthouse. _(focus: lighthouse)_
  - I can see the bridge.
  - I can see the quickly.
  - The baker sold bread to a tourist at the market. _(focus: baker, bread, tourist, market)_

### 1.2.2 Common and Proper Nouns

- **Pages:** Any City or One City? · Common Nouns Are General Names · Proper Nouns Are Special Names · General Name or Special Name? · Proper Nouns Take Capitals · Days, Months and Festivals · Names of Films, Books and Clubs · When a Common Word Joins a Name · Any Lake or Lotus Lake? · Common or Proper: Recap
- **Key takeaways:** Some names are general; some are special. · A common noun names any one of a kind. · A proper noun names one particular person, place or thing. · Ask: could it be any one, or just this one? · Proper nouns always start with a capital letter. · Days, months and festivals start with capitals. · Titles and club names are proper nouns. · A common word inside a name gets a capital. · Part of a special name? Use a capital. · General names stay small; special names get capitals.
- **Example sentences:**
  - Jaipur is a busy city. _(focus: Jaipur, city)_
  - A doctor works at the hospital. _(focus: doctor, hospital)_
  - The puppy chewed my slipper. _(focus: puppy, slipper)_
  - Arjun lives in Pune. _(focus: Arjun, Pune)_
  - Our cat Biscuit sleeps all day. _(focus: Biscuit)_
  - The dog barked at the postman.
  - Bruno barked at the postman.
  - We met Neha outside the cinema. _(focus: Neha)_
  - We drove to agra on sunday.
  - Diwali comes in November this year. _(focus: Diwali, November)_
  - The library is closed on Mondays. _(focus: Mondays)_
  - We watched Jungle Friends at the cinema. _(focus: Jungle Friends)_
  - The Green Club planted fifty trees. _(focus: Green Club)_
  - Our school is near the main road. _(focus: school, road)_
  - Green Valley School is on Park Road. _(focus: Green Valley School, Park Road)_
  - We had a picnic by a lake.
  - We had a picnic by Lotus Lake.

### 1.2.3 Concrete and Abstract Nouns

- **Pages:** Can You Touch It? · Concrete Nouns Use the Senses · The Five-Senses Test · Abstract Nouns Name Ideas · Four Groups of Abstract Nouns · Abstract Nouns in Sentences · Hose or Strength? · Sort the Nouns in a Sentence · Concrete and Abstract: Recap
- **Key takeaways:** Some nouns you can sense; some you can only think. · If your senses can notice it, the noun is concrete. · One sense is enough to make a noun concrete. · Abstract nouns name things you can only think or feel. · Feelings, qualities, states and ideas are abstract. · An abstract noun can sit anywhere in a sentence. · Can a sense notice it? Then it is concrete. · Test each noun in the sentence separately. · Your senses decide: concrete or abstract.
- **Example sentences:**
  - The drummer showed great courage. _(focus: drummer, courage)_
  - The soup smells delicious. _(focus: soup)_
  - Thunder woke the baby. _(focus: Thunder, baby)_
  - Her kindness surprised everyone. _(focus: kindness)_
  - Curiosity led the children into the cave. _(focus: Curiosity)_
  - Honesty earned him many friends. _(focus: Honesty)_
  - The team celebrated their victory. _(focus: victory)_
  - The firefighter carried a heavy hose.
  - The firefighter showed real strength.
  - The nurse spoke with gentleness and respect. _(focus: nurse, gentleness, respect)_

### 1.2.4 Collective Nouns

- **Pages:** Many Members, One Name · What Is a Collective Noun? · Members or the Whole Group? · Groups of People · Groups of Animals · Groups of Things · Each Group Word Fits Its Members · Name a Group and Its Members · Collective Nouns: Recap
- **Key takeaways:** One word can name a whole group. · A collective noun names a group as one unit. · The group word replaces a list of members. · Class, choir and staff are groups of people. · Herd, flock and pack are animal groups. · Bunch, pile and fleet are groups of things. · Pick the group word that fits the members. · Use 'a … of' to name a group and its members. · One word, one whole group.
- **Example sentences:**
  - Our cricket team won the final. _(focus: team)_
  - The audience clapped for ten minutes. _(focus: audience)_
  - A swarm of bees circled the hive. _(focus: swarm)_
  - Three sailors waved from the deck.
  - The crew waved from the deck.
  - The choir sang at the temple fair. _(focus: choir)_
  - A herd of elephants crossed the road. _(focus: herd)_
  - She found a bunch of keys under the sofa. _(focus: bunch)_
  - We saw a bunch of elephants.
  - A team of doctors visited our village. _(focus: team)_
  - The class collected a pile of old newspapers. _(focus: class, pile)_

### 1.2.5 Countable and Uncountable Nouns

- **Pages:** Can You Count It? · Countable Nouns · The Count Test · Uncountable Nouns · Groups of Uncountable Nouns · Many Items, One Mass Word · Units Make a Mass Countable · Common Unit Words · Coffee or a Coffee? · Count It or Measure It
- **Key takeaways:** Some nouns can be counted; some cannot. · Countable nouns have a singular and a plural form. · If a number fits before it, the noun is countable. · Uncountable nouns have no plural form. · Liquids, powders, gases and ideas are often uncountable. · Some words for many items are still uncountable. · Count the unit, not the mass. · A unit word lets you count a mass noun. · Counting can change what a noun means. · Count the things; measure the mass.
- **Example sentences:**
  - We bought six mangoes and some rice. _(focus: mangoes, rice)_
  - Two kittens slept in the basket. _(focus: kittens)_
  - I need three pencils for the test. _(focus: pencils)_
  - I washed two bottles. _(focus: bottles)_
  - The children played in the sand. _(focus: sand)_
  - Fresh air came through the window. _(focus: air)_
  - Mum added salt to the curry. _(focus: salt)_
  - Our luggage filled the car boot. _(focus: luggage)_
  - The new furniture arrived on Monday. _(focus: furniture)_
  - Please buy two bags of flour. _(focus: bags, flour)_
  - She gave me a useful piece of advice. _(focus: piece, advice)_
  - Coffee keeps my father awake.
  - We ordered two coffees at the café.

### 1.2.6 Material Nouns

- **Pages:** What Is It Made Of? · Material Nouns · Where Materials Come From · Glass or a Glass? · The Stuff or the Thing? · A Material Before a Noun · The Long Way and the Short Way · Material Nouns: Recap
- **Words shown in more than one job:** glass, iron, silver
- **Key takeaways:** Everything around us is made of something. · A material noun names a substance things are made from. · Materials come from the earth, plants, animals or factories. · Glass is a material; a glass is a thing. · Ask: does the word name the stuff or the thing? · Material + noun tells what a thing is made of. · Say it short: a silver ring. · Ask: what is it made of?
- **Example sentences:**
  - This old door is made of wood. _(focus: wood)_
  - Gold shines in the sunlight. _(focus: Gold)_
  - The potter shaped the wet clay. _(focus: clay)_
  - Our windows are made of glass.
  - He drank a glass of lemonade.
  - Railway tracks are made of iron. _(focus: iron)_
  - She pressed her shirt with an iron. _(focus: iron)_
  - She wore a cotton dress to the fair. _(focus: cotton)_
  - We rested on a stone bench. _(focus: stone)_
  - The ring is made of silver.
  - She lost her silver ring.

### 1.2.7 Compound Nouns

- **Pages:** Two Words, One Noun · What Is a Compound Noun? · Closed Compounds · Open Compounds · Hyphenated Compounds · The Last Word Is the Main Word · Houseboat or Boathouse? · Compound Nouns: Recap
- **Key takeaways:** Two words can join to make one noun. · A compound noun names one thing with two or more words. · Closed compounds are written as one word. · Open compounds keep a space but name one thing. · Some compounds use hyphens to join their words. · The last word tells you what the thing is. · Change the order and you change the meaning. · Look at the last word to know what it is.
- **Example sentences:**
  - I packed my toothbrush and a towel. _(focus: toothbrush)_
  - The postman delivered a parcel. _(focus: postman)_
  - We waited at the bus stop. _(focus: bus stop)_
  - The sunflower turned towards the sky. _(focus: sunflower)_
  - Our classroom has big windows. _(focus: classroom)_
  - The post office was crowded today. _(focus: post office)_
  - We shared an ice cream after the match. _(focus: ice cream)_
  - My brother-in-law flies planes. _(focus: brother-in-law)_
  - The runner-up won a silver medal. _(focus: runner-up)_
  - A teacup is a small cup for tea. _(focus: teacup)_
  - Our school bus is painted yellow. _(focus: school bus)_
  - We stayed on a houseboat in Kerala.
  - The oars are kept in the boathouse.

### 1.2.8 Singular and Plural Nouns

- **Pages:** One or Many? · Singular Nouns · Plural Nouns · Clues for Plural Nouns · Not Every -s Means Plural · Nouns That Are Always Plural · Counting With A Pair Of · Singular Nouns Ending in -s · Singular and Plural: Recap
- **Key takeaways:** A noun can show one or more than one. · Singular means one. · Plural means more than one. · An -s ending and a number are plural clues. · Check the meaning, not just the -s. · Two-part items take plural nouns. · Count two-part items in pairs. · News and maths end in -s but are singular. · Ask: is it one, or more than one?
- **Example sentences:**
  - First one star appeared, then hundreds of stars. _(focus: star, stars)_
  - A parrot sat on the gate. _(focus: parrot)_
  - I have one younger sister. _(focus: sister)_
  - Three parrots sat on the gate. _(focus: parrots)_
  - I have two younger sisters. _(focus: sisters)_
  - Ten candles glowed on the cake. _(focus: candles)_
  - The farmer planted rows of beans. _(focus: rows, beans)_
  - The bus left at nine. _(focus: bus)_
  - She paints every Sunday. _(focus: paints)_
  - Grandpa lost his reading glasses. _(focus: glasses)_
  - Mum sharpened the scissors yesterday. _(focus: scissors)_
  - I bought a pair of jeans for the trip. _(focus: pair)_
  - She packed three pairs of shorts. _(focus: pairs)_
  - The news shocked the whole town. _(focus: news)_
  - Maths helped her win the science prize. _(focus: Maths)_

### 1.2.9 Regular and Irregular Plurals

- **Pages:** Spelling More Than One · Add -s to Most Nouns · Add -es After s, x, z, ch and sh · Nouns Ending in y · Nouns Ending in f or fe · Nouns Ending in o · Irregular: The Vowels Change · Irregular: Adding -en · Irregular: No Change at All · Plurals of Compound Nouns · Plural Spelling: Recap
- **Key takeaways:** Plural spelling follows rules, with a few exceptions. · Most nouns just add -s. · After s, x, z, ch or sh, add -es. · Consonant + y becomes -ies; vowel + y adds -s. · Many f and fe nouns change to -ves. · Some o nouns add -es; others add -s. · Some plurals change the vowels inside the word. · Child becomes children; ox becomes oxen. · Sheep, deer and fish don't change. · Make the main word plural. · Learn the rules, then remember the exceptions.
- **Example sentences:**
  - The babies played with the empty boxes. _(focus: babies, boxes)_
  - We flew two kites at the beach. _(focus: kites)_
  - Our school has four gates. _(focus: gates)_
  - Dad washed the dinner dishes. _(focus: dishes)_
  - The foxes hid in the bushes. _(focus: foxes, bushes)_
  - Two puppies chased the ball. _(focus: puppies)_
  - The monkeys stole our bananas. _(focus: monkeys)_
  - Autumn leaves covered the path. _(focus: leaves)_
  - Put the knives back in the drawer. _(focus: knives)_
  - Grandma grew tomatoes and potatoes. _(focus: tomatoes, potatoes)_
  - We took lots of photos at the zoo. _(focus: photos)_
  - Two geese waddled across the farm. _(focus: geese)_
  - The oxen pulled the heavy cart. _(focus: oxen)_
  - Six children waited for the ferry. _(focus: children)_
  - We spotted three deer in the forest. _(focus: deer)_
  - Both my sisters-in-law came to dinner. _(focus: sisters-in-law)_
  - Two passers-by helped the old man. _(focus: passers-by)_

### 1.2.10 Gender of Nouns

- **Pages:** Boy, Girl, Child, Chair · The Four Genders · Genders in a Sentence · Different Words for Male and Female · Feminine Nouns With -ess · Male and Female Animals · Words That Name Anyone · Older Word or Word for Everyone? · Gender of Nouns: Recap
- **Key takeaways:** Nouns can name male, female, either or neither. · Masculine, feminine, common and neuter. · Ask: male, female, either or neither? · Many pairs are completely different words. · Some feminine nouns add -ess. · Bull and cow, rooster and hen are animal pairs. · Common-gender words can name anyone. · Choose the word that fits everyone. · Ask who or what the noun names.
- **Example sentences:**
  - The boy and the girl carried a chair for their teacher. _(focus: boy, girl, chair, teacher)_
  - My uncle gave his cousin a kite. _(focus: uncle, cousin, kite)_
  - My nephew and my niece came for the holidays. _(focus: nephew, niece)_
  - The princess rode a white horse. _(focus: princess)_
  - The rooster crowed while the hen pecked at the grain. _(focus: rooster, hen)_
  - The police officer helped us cross the road. _(focus: police officer)_
  - Every parent got a letter from the school. _(focus: parent)_
  - The fireman climbed the ladder.
  - The firefighter climbed the ladder.

### 1.2.11 Possessive Nouns

- **Pages:** Whose Is It? · Add 's for One Owner · Belonging, Not Just Owning · Plural Owners Ending in s · Irregular Plural Owners · Names That End in s · Shared or Separate? · Things Usually Use Of · Plural or Possessive? · Possessive Nouns: Recap
- **Words shown in more than one job:** cousins
- **Key takeaways:** An apostrophe and s can show who owns something. · One owner: add 's. · 's links a thing to the one it belongs to. · Plural owners ending in s: add only '. · Children's and women's take 's. · A name ending in s usually adds 's. · Shared: one 's. Separate: 's on each name. · For things, use of. · No owner, no apostrophe. · Ask who owns it, then place the apostrophe.
- **Example sentences:**
  - Meera's bicycle has a red bell. _(focus: Meera's)_
  - The doctor's clinic opens at ten. _(focus: doctor's)_
  - Our dog's bowl was empty. _(focus: dog's)_
  - The giraffe's neck is very long. _(focus: giraffe's)_
  - We found a baby's sock in the car. _(focus: baby's)_
  - The girls' hostel is near the gate. _(focus: girls')_
  - The players' shirts were muddy. _(focus: players')_
  - The children's park reopened today. _(focus: children's)_
  - The women's team won the gold. _(focus: women's)_
  - James's cousin lives in Goa. _(focus: James's)_
  - Ravi and Asha's house is blue.
  - Ravi's and Asha's phones were new.
  - The handle of the door is loose. _(focus: handle of the door)_
  - The top of the mountain was white with snow. _(focus: top of the mountain)_
  - My cousins visited us last week.
  - My cousin's visit was too short.

### 1.2.12 Noun Formation and Word Building

- **Pages:** Building New Nouns · From Verbs: -ment and -tion · From Verbs: -ance, -ence and -al · From Adjectives: -ness · From Adjectives: -ity, -th and -dom · Nouns for People · -ship and -hood · Watch the Spelling · Noun Building: Recap
- **Key takeaways:** A suffix can turn a word into a noun. · -ment and -tion turn actions into nouns. · -ance, -ence and -al also make nouns from verbs. · -ness turns describing words into nouns. · -ity, -th and -dom also make nouns from adjectives. · -er, -or, -ist and -ian name people. · -ship and -hood name relationships and stages. · Check the spelling when you add a suffix. · Know the suffix and you can build the noun.
- **Example sentences:**
  - The darkness didn't spoil our enjoyment of the show. _(focus: darkness, enjoyment)_
  - We sent an invitation to every neighbour. _(focus: invitation)_
  - Her arrival surprised the whole family. _(focus: arrival)_
  - Sadness filled the empty hall. _(focus: Sadness)_
  - The warmth of the fire kept us cosy. _(focus: warmth)_
  - The librarian found the book in seconds. _(focus: librarian)_
  - Our neighbourhood held a street party. _(focus: neighbourhood)_
  - The captain's leadership won us the match. _(focus: leadership)_
  - Their laziness cost them the game. _(focus: laziness)_

### 1.2.13 Noun Functions in Sentences

- **Pages:** More Jobs for Nouns · The Indirect Object · The Object of a Preposition · The Subject Complement · The Object Complement · The Appositive · Name Every Noun's Job · Six Noun Jobs
- **Key takeaways:** Every noun in a sentence does a job. · The indirect object answers to whom or for whom. · A noun after a preposition is that preposition's object. · A subject complement renames the subject. · An object complement renames the object. · An appositive sits beside a noun and renames it. · Find the verb, then ask about each noun. · Ask questions to find each noun's job.
- **Example sentences:**
  - The goalie stopped the penalty. _(focus: goalie, penalty)_
  - Grandpa told the children a story. _(focus: children, story)_
  - Priya baked her brother a cake. _(focus: brother)_
  - The keys were under the doormat. _(focus: doormat)_
  - We cycled along the river. _(focus: river)_
  - My cousin became a lawyer. _(focus: lawyer)_
  - Mr Iyer was our swimming coach. _(focus: coach)_
  - They named the kitten Pepper. _(focus: Pepper)_
  - The class elected Zoya captain. _(focus: captain)_
  - Our teacher, Mrs Rao, loves poetry. _(focus: Mrs Rao)_
  - My friend Kabir plays the flute. _(focus: Kabir)_
  - Last week, Grandma gave my sister a book about birds. _(focus: Grandma, sister, book, birds)_

### 1.2.14 Noun Usage and Common Errors

- **Pages:** Spot and Fix Noun Mistakes · No -s on Uncountable Nouns · Counting News and Advice · Irregular Plurals, Not -s · One of My Friends · Two-Part Nouns Stay Plural · No Apostrophe in Plain Plurals · The Apostrophe Follows the Owner · Capital Letters for Names · Noun Mistake Checklist
- **Key takeaways:** Most noun mistakes fall into a few groups. · Never add -s to an uncountable noun. · Count news and advice with a piece of. · Irregular nouns keep their own plural forms. · After one of, use a plural noun. · Say a pair of scissors, not a scissor. · Plain plurals never need an apostrophe. · Place the apostrophe right after the owner word. · Names of places and days need capitals. · Check your nouns before you finish writing.
- **Example sentences:**
  - The guide gave us useful informations.
  - She shared a good news with us.
  - Three childs splashed in the puddle.
  - Raju is one of my best friend.
  - I need a scissor for this card.
  - Fresh banana's for sale!
  - All the teacher's cars were parked outside.
  - Our school trip to mysore is on friday.

### 1.3.1 Introduction to Pronouns

- **Pages:** Words That Stand In · With and Without Pronouns · Meet the Antecedent · One Pronoun, a Whole Phrase · How to Find the Antecedent · When the Pronoun Comes First · The Pronoun Family · Pronoun Basics: Recap
- **Key takeaways:** Pronouns save us from repeating nouns. · Name it once, then use a pronoun. · The antecedent is the noun a pronoun stands for. · One short pronoun can replace a long phrase. · Look back to find who or what a pronoun means. · Sometimes the antecedent comes just after the pronoun. · Pronouns come in several families. · Every pronoun points to someone or something.
- **Example sentences:**
  - Kiran fed his goldfish before he left. _(focus: his, he)_
  - The parcel came today, and Dad opened the parcel at once.
  - The parcel came today, and Dad opened it at once.
  - Aunt Meena phoned, and she sounded cheerful. _(focus: Aunt Meena, she)_
  - The bus was late because it broke down. _(focus: The bus, it)_
  - The girl with the yellow umbrella waved, and then she crossed the road. _(focus: The girl with the yellow umbrella, she)_
  - My grandparents planted a mango tree. They water it every evening. _(focus: They, it)_
  - When she reached the gate, Ishita turned and smiled. _(focus: she, Ishita)_

### 1.3.2 Personal Pronouns – Subject and Object

- **Pages:** Two Shapes for One Person · First, Second and Third Person · Subject Pronouns · Object Pronouns · Doer or Receiver? · You and It Stay the Same · I Is Always a Capital · Two People Joined by And · Personal Pronouns: Recap
- **Key takeaways:** A pronoun's shape depends on its job. · Person tells who; number tells how many. · The doer takes the subject form. · After a verb or preposition, use the object form. · Acting: subject form. Receiving: object form. · You and it never change shape. · The word I is always a capital letter. · Drop the other person to choose I or me. · Choose the pronoun's shape by its job.
- **Example sentences:**
  - She waved, and the whole crowd waved back at her. _(focus: She, her)_
  - We caught the early train to Pune. _(focus: We)_
  - They painted the classroom wall blue. _(focus: They)_
  - The coach picked me for the relay team. _(focus: me)_
  - Leena sat beside him on the ferry. _(focus: him)_
  - He pushed the swing.
  - The swing bumped him.
  - You look tired, so I will walk you home. _(focus: You)_
  - It rolled under the sofa, and Dad fished it out. _(focus: It)_
  - On Sundays I bake bread with Nani. _(focus: I)_
  - Mum and I planted tulips by the gate. _(focus: I)_
  - The librarian thanked Leo and me. _(focus: me)_

### 1.3.3 Possessive Pronouns

- **Pages:** That One Is Mine · Meet the Owner Words · No Noun After It · Answering Whose? · Owner Words Without Apostrophes · A Friend of Mine · Possessive Pronouns: Recap
- **Key takeaways:** Possessive pronouns show who owns something. · Mine, yours, his, hers, ours, theirs. · A possessive pronoun replaces the owner and the thing. · Answer whose with mine, his, hers and so on. · Hers, ours and theirs never have an apostrophe. · A friend of mine means one of my friends. · Use a possessive pronoun instead of owner plus thing.
- **Example sentences:**
  - The blue towel is mine, and the striped one is yours. _(focus: mine, yours)_
  - Your painting is bright, but ours is brighter. _(focus: ours)_
  - Grandpa's chair is by the window, and theirs is by the door. _(focus: theirs)_
  - Whose scarf is on the bench? It's his. _(focus: his)_
  - The last slice of pizza is yours. _(focus: yours)_
  - A neighbour of ours keeps bees in her garden. _(focus: ours)_

### 1.3.4 Possessive Adjectives / Determiners

- **Pages:** Words That Point to an Owner · One Owner Word for Each Person · A Noun Always Follows · My Umbrella or Mine? · His or Her? Follow the Owner · Its for Animals and Things · Owner Words: Recap
- **Key takeaways:** Possessive words before a noun show the owner. · My, your, his, her, its, our, their. · My and their always need a noun after them. · Noun after it: my. Nothing after it: mine. · Choose his or her by the owner. · Animals and things own with its. · Before a noun, use my, your, our or their.
- **Example sentences:**
  - Our kitchen smells of fresh cardamom. _(focus: Our)_
  - Please pass me your blue folder. _(focus: your)_
  - The twins packed their swimming bags. _(focus: their)_
  - That is my umbrella.
  - That umbrella is mine.
  - Raj walked his little sister to school. _(focus: his)_
  - Meera lent her brother a torch. _(focus: her)_
  - The tortoise pulled its head into its shell. _(focus: its)_

### 1.3.5 Reflexive Pronouns

- **Pages:** Doing Something to Yourself · The Self Family · One Self, Many Selves · Her or Herself? · Everyday Phrases With -self · By Myself Means Alone · Reflexive Pronouns: Recap
- **Key takeaways:** A -self word points back to the doer. · Every personal pronoun has a -self partner. · One takes -self; more than one takes -selves. · Same person? Use the -self word. · Enjoy, hurt and help often take a -self word. · By myself means alone. · Reflexive pronouns point back to the subject.
- **Example sentences:**
  - Priya looked at herself in the shop window. _(focus: herself)_
  - The kitten licked itself clean. _(focus: itself)_
  - We introduced ourselves to the new neighbours. _(focus: ourselves)_
  - Nisha blamed her for the broken vase.
  - Nisha blamed herself for the broken vase.
  - Help yourselves to the samosas! _(focus: yourselves)_
  - Did you enjoy yourself at the fair? _(focus: yourself)_
  - Grandpa built the garden shed by himself. _(focus: by himself)_

### 1.3.6 Emphatic Pronouns

- **Pages:** Adding Extra Force · Right After the Noun · At the End of the Clause · Same Word, Different Use · The Removal Test · Emphatic Pronouns: Recap
- **Key takeaways:** An emphatic pronoun stresses who did it. · Place it right after the noun to stress that noun. · It can also stand at the end for emphasis. · Reflexive is needed; emphatic adds force. · Remove it: still fine means emphatic. · Use a -self word to say 'this one and no other'.
- **Example sentences:**
  - The chef himself carried out our dessert. _(focus: himself)_
  - The mayor herself opened the new library. _(focus: herself)_
  - The walls themselves were made of mud. _(focus: themselves)_
  - I baked this lemon cake myself. _(focus: myself)_
  - You can fix the puncture yourself. _(focus: yourself)_
  - Tara taught herself the guitar.
  - Tara herself taught the guitar class.
  - The children themselves chose the song. _(focus: themselves)_

### 1.3.7 Demonstrative Pronouns

- **Pages:** Pointing Words · Near or Far, One or Many · Close By: This and These · Far Away: That and Those · Alone or Before a Noun? · Pointing Back at an Idea · Demonstrative Pronouns: Recap
- **Key takeaways:** Demonstrative pronouns point at things. · Near: this, these. Far: that, those. · This and these point at things close by. · That and those point at things farther away. · No noun after it? It's a demonstrative pronoun. · That can stand for a whole action. · Point with this, that, these or those.
- **Example sentences:**
  - That smells delicious! _(focus: That)_
  - This is my favourite spot in the park. _(focus: This)_
  - These are the keys to the garden shed. _(focus: These)_
  - Is that a hawk on the lamp post? _(focus: that)_
  - Those were the sweetest mangoes of the summer. _(focus: Those)_
  - This is heavy.
  - This box is heavy.
  - You carried my bags all the way home. That was kind of you. _(focus: That)_

### 1.3.8 Interrogative Pronouns

- **Pages:** Question Words That Stand In · Who Asks About the Doer · Whom Asks About the Receiver · Whose Asks About the Owner · Any Answer or a Choice? · Let the Answer Guide You · Question Pronouns: Recap
- **Key takeaways:** Question pronouns stand in for the missing answer. · Who asks which person did it. · Whom asks about the person receiving the action. · Whose asks who owns something. · What is open; which picks from a set. · Picture the answer, then pick the question word. · Each question pronoun asks about a different answer.
- **Example sentences:**
  - Who left the back gate open? _(focus: Who)_
  - Who scored the winning goal? _(focus: Who)_
  - Whom did the committee choose as captain? _(focus: Whom)_
  - Whose is this muddy football? _(focus: Whose)_
  - What did you buy at the market?
  - Which do you prefer, tea or lassi?
  - Which of these paintings is yours? _(focus: Which)_

### 1.3.9 Relative Pronouns

- **Pages:** Joining Extra Information · Who and Whom for People · Which for Things and Animals · That for People or Things · Whose for Owners · Look Just Before It · Question Word or Joining Word? · Relative Pronouns: Recap
- **Key takeaways:** A relative pronoun adds facts about a noun. · Who and whom join facts about people. · Which joins facts about things and animals. · That works for people and things. · Whose shows the noun owns something. · The noun sits just before the relative pronoun. · After a noun, who joins; at the start, who asks. · Pick the joining word that fits the noun.
- **Example sentences:**
  - I met the girl who won the spelling bee. _(focus: who)_
  - The dentist who checked my teeth was very gentle. _(focus: who)_
  - The singer whom we heard last night was brilliant. _(focus: whom)_
  - The bus which goes to the airport leaves at six. _(focus: which)_
  - The pie that Mum baked vanished in minutes. _(focus: that)_
  - We thanked the man whose dog found my ring. _(focus: whose)_
  - The tree which fell in the storm blocked our lane. _(focus: The tree, which)_
  - Who painted this mural?
  - The artist who painted this mural lives nearby.

### 1.3.10 Indefinite Pronouns

- **Pages:** Not Naming Anyone Exactly · People Words and Thing Words · Some- or Any-? · No- Words Already Mean Not · Every- Means All · Pronouns That Count Roughly · Indefinite Pronouns: Recap
- **Key takeaways:** Indefinite pronouns don't name exactly who. · -one and -body mean people; -thing means things. · Offers and positives: some-. Questions and not: any-. · With nobody or nothing, keep the verb positive. · Every- words include all of them. · Many, few, both and none tell roughly how many. · Talk about people and things in general.
- **Example sentences:**
  - Somebody left a bunch of marigolds on our doorstep. _(focus: Somebody)_
  - Would you like something cold to drink? _(focus: something)_
  - I can't find anything in this messy drawer. _(focus: anything)_
  - Nothing was left on the plate after dinner. _(focus: Nothing)_
  - Everyone clapped when the curtain rose. _(focus: Everyone)_
  - Many came to the mela, but few stayed for the fireworks. _(focus: Many, few)_

### 1.3.11 Distributive Pronouns

- **Pages:** One at a Time · Each: Every One, Separately · Either: One or the Other · Neither: Not This, Not That · Each Of, Either Of, Neither Of · Standing Alone or Before a Noun · Distributive Pronouns: Recap
- **Key takeaways:** Distributive pronouns take members one at a time. · Each means every one, one by one. · Either means one of two. · Neither means not one of the two. · Each of the… needs a plural after of. · No noun after it? It's a distributive pronoun. · Look at the group one member at a time.
- **Example sentences:**
  - Three cousins came to stay, and each brought a gift. _(focus: each)_
  - We tasted the five chutneys, and each was delicious. _(focus: each)_
  - You can borrow the red pen or the blue one. Either is fine. _(focus: Either)_
  - I tried on two raincoats, but neither fitted. _(focus: neither)_
  - Each of the parcels had a red label. _(focus: Each of)_
  - Neither of them wanted the last samosa. _(focus: Neither of)_
  - Either will do.
  - Either road will do.

### 1.3.12 Reciprocal Pronouns

- **Pages:** An Action That Goes Both Ways · Each Other and One Another · Each Other's Things · To the Other, or to Yourself? · It Takes at Least Two · Reciprocal Pronouns: Recap
- **Key takeaways:** Reciprocal pronouns show a two-way action. · Each other and one another mean the same. · Each other's shows two-way ownership. · Across to the other: each other. Back to yourself: -selves. · One person can't do it to each other. · Use each other when the action goes both ways.
- **Example sentences:**
  - Arjun and Zara waved at each other across the street. _(focus: each other)_
  - The two puppies chased each other round the garden. _(focus: each other)_
  - After the final, the whole team hugged one another. _(focus: one another)_
  - The twins often borrow each other's sandals. _(focus: each other's)_
  - Ravi and Sam blamed each other.
  - Ravi and Sam blamed themselves.
  - The old classmates recognised one another at once. _(focus: one another)_

### 1.3.13 Pronoun–Antecedent Agreement

- **Pages:** Pronouns Must Match · Matching Number · Matching Person and Gender · Two Antecedents Joined by And · They for One Person · Everyone and Their · Groups: Its or Their? · Agreement: Recap
- **Key takeaways:** A pronoun matches the noun it stands for. · One thing: it. More than one: they or them. · He, she or it follows the antecedent. · Two nouns joined by and take a plural pronoun. · They can mean one person. · Everyone usually takes their. · One unit: its. The members: their. · Check that each pronoun fits its antecedent.
- **Example sentences:**
  - The bakery closed early because it ran out of bread. _(focus: The bakery, it)_
  - My watch stopped, so I took it to the repair shop. _(focus: it)_
  - The new sandals pinch, so I hardly ever wear them. _(focus: them)_
  - Uncle Ravi phoned to say he would visit on Sunday. _(focus: he)_
  - Aunt Rekha promised she would bring the sweets. _(focus: she)_
  - Meena and her brother finished their project early. _(focus: their)_
  - Someone rang the bell, but they had gone by the time I opened the door. _(focus: they)_
  - Everyone packed their own lunch for the trip. _(focus: their)_
  - The committee announced its decision on Friday. _(focus: its)_
  - The team pulled on their boots in silence. _(focus: their)_

### 1.3.14 Pronoun Reference and Clarity

- **Pages:** Who Does It Mean? · Two Nouns, One Pronoun · Repeat the Noun or Rewrite · An It That Points Nowhere · Who Are They? · When the Noun Is Too Far Back · Clear Pronouns: Recap
- **Key takeaways:** Every pronoun needs one clear antecedent. · Two nouns before a pronoun can cause confusion. · If in doubt, use the noun again. · Name the source instead of a vague it. · Replace a vague they with the real source. · Keep the pronoun close to its noun. · Make sure each pronoun points one way.
- **Example sentences:**
  - Sam told Ali that he had won the quiz. _(focus: he)_
  - Mum chatted with Aunt Leela while she was cooking.
  - When the dog chased the cat, the cat shot up a tree. _(focus: the cat)_
  - In the newspaper, it says the main road will close.
  - They say it will rain all week.
  - The museum has a dinosaur skeleton and a moon rock. Visitors love the skeleton most. _(focus: the skeleton)_

### 1.3.15 Pronoun Usage and Common Errors

- **Pages:** Spot and Fix Pronoun Mistakes · Not Me and Arjun · Between You and Me · Its or It's? · No Hisself or Theirselves · Those Books, Not Them Books · Whom Is Not for the Doer · Don't Repeat the Subject · Me, Not Myself · Pronoun Mistake Checklist
- **Key takeaways:** Most pronoun mistakes come in a few kinds. · In a subject pair, say Arjun and I. · After between, use me, not I. · Its owns; it's means it is. · Say himself and themselves. · Before a noun, say those, not them. · The doer is who, never whom. · Name the subject once, not twice. · No I before it? Use me, not myself. · Read your pronouns once more before you finish.
- **Example sentences:**
  - Me and Arjun went to the stadium.
  - Keep this secret between you and I.
  - The parrot flapped it's wings.
  - The boys made the paper boats theirselves.
  - Can you pass me them books?
  - Whom is knocking at the door?
  - My sister she plays the sitar.
  - Please call Anita or myself if you need help.

### 1.4.1 Introduction to Articles

- **Pages:** Little Words Before Nouns · Which, How Many, Whose · Meet the Three Articles · Any One or a Particular One? · Determiner First, Describing Words After · The Determiner Family · Determiners: Recap
- **Key takeaways:** Determiners come before nouns. · A determiner tells which one, how many or whose. · The articles are a, an and the. · A means any one; the means that one. · The determiner leads the group of words. · Determiners come in several kinds. · Start a noun group with the right determiner.
- **Example sentences:**
  - A squirrel ran along the roof. _(focus: A, the)_
  - I found a key and an envelope on the doorstep. _(focus: a, an, the)_
  - Can I borrow a pencil?
  - Can I borrow the pencil?
  - We painted the tall wooden gate. _(focus: the)_

### 1.4.2 Indefinite Article – A

- **Pages:** One of Many · Saying It for the First Time · Only One, Only Countable · A for Jobs and Descriptions · A Meaning 'In Each' · The Article A: Recap
- **Key takeaways:** A means one, not a particular one. · Use a when you first mention something. · A goes with one countable thing. · She is a pilot, not she is pilot. · Twice a week means twice in each week. · Use a for one new, countable thing.
- **Example sentences:**
  - Look, there's a rainbow over the hills! _(focus: a rainbow)_
  - We adopted a kitten from the shelter last week. _(focus: a kitten)_
  - Rohan peeled a mango after school. _(focus: a mango)_
  - My aunt is a pilot. _(focus: a pilot)_
  - That was a brilliant match. _(focus: a brilliant match)_
  - We water the tulsi plant twice a day. _(focus: a day)_

### 1.4.3 Indefinite Article – An

- **Pages:** When A Becomes An · Vowel Sound or Consonant Sound? · The Silent H · Vowel Letters With Consonant Sounds · Letters Said One by One · The Very Next Word Decides · A or An: Recap
- **Key takeaways:** An makes vowel sounds easy to say. · Vowel sound: an. Consonant sound: a. · Silent h means a vowel sound: an hour. · Listen to the sound: a uniform, a one-way street. · Say the letter aloud to choose a or an. · Look at the very next word, not the noun. · Trust your ears, not the spelling.
- **Example sentences:**
  - She peeled an orange for her little brother. _(focus: an orange)_
  - Rahul found an earring under the sofa. _(focus: an earring)_
  - We watched a lizard on the kitchen wall. _(focus: a lizard)_
  - We waited an hour for the ferry. _(focus: an hour)_
  - Mr Das is an honest shopkeeper. _(focus: an honest shopkeeper)_
  - Our school has a uniform with a red tie. _(focus: a uniform)_
  - Turn left into a one-way street. _(focus: a one-way street)_
  - The doctor asked for an X-ray of my wrist. _(focus: an X-ray)_
  - Grandpa rides an old bicycle to the market. _(focus: an old bicycle)_
  - I bit into a huge apple. _(focus: a huge apple)_

### 1.4.4 Definite Article – The

- **Pages:** Pointing to a Particular One · From A to The · Things We Both Know · Only One in the World · A Phrase That Picks One Out · The Works With Every Noun · The Article The: Recap
- **Key takeaways:** The means a particular one. · First a, then the. · If we both know which one, use the. · Only one exists? Use the. · If a phrase shows which one, use the. · The fits singular, plural and uncountable nouns. · The tells the listener exactly which one.
- **Example sentences:**
  - Can you water the money plant on the balcony? _(focus: the money plant)_
  - I bought a notebook and a pen. The notebook cost more. _(focus: a notebook, The notebook)_
  - Switch off the fan before you leave. _(focus: the fan)_
  - The moon looked orange tonight. _(focus: The moon)_
  - The bag on the chair belongs to my cousin. _(focus: The bag on the chair)_
  - The biscuits in this tin are stale. _(focus: The biscuits)_
  - The water in the well is icy. _(focus: The water)_

### 1.4.5 Zero Article

- **Pages:** Sometimes No Article at All · Plurals and Uncountables in General · Names Usually Stand Alone · Meals, Languages, Subjects and Sports · Everyday Phrases Without Articles · Zero Article: Recap
- **Key takeaways:** Sometimes no article is right. · In general, plurals and uncountables stand alone. · Most names need no article. · Lunch, Tamil, history, hockey: no article. · Go to school, at home, by bus: no article. · Know when to leave the article out.
- **Example sentences:**
  - Children love puppet shows. _(focus: Children, puppet shows)_
  - Mangoes taste sweetest in May. _(focus: Mangoes)_
  - Honey never goes bad. _(focus: Honey)_
  - Zoya flew from Chennai to Japan. _(focus: Zoya, Chennai, Japan)_
  - Arjun goes to school by bus. _(focus: school, bus)_

### 1.4.6 General and Specific Reference

- **Pages:** All of Them, or Just These? · Talking About a Whole Kind · Talking About Particular Ones · Rice or The Rice? · A for Any One Member · General or Specific: Recap
- **Key takeaways:** The article shows general or particular. · A whole kind: no article. · Particular ones: the. · Ask: all of them, or these ones? · A koala can mean any koala. · Choose the article by what you mean.
- **Example sentences:**
  - Bees make honey, but the bees in our garden seem lazy. _(focus: Bees, the bees)_
  - Owls hunt at night. _(focus: Owls)_
  - The owls in the old temple hoot all night. _(focus: The owls)_
  - Rice grows well in wet fields.
  - The rice on my plate is burnt.
  - A koala sleeps most of the day. _(focus: A koala)_

### 1.4.7 Articles with Countable and Uncountable Nouns

- **Pages:** The Noun Decides the Article · One Countable Thing Needs a Partner · No A or An With Uncountable Nouns · No A or An With Plurals · Which Article With Which Noun · A Paper or Some Paper? · Articles and Noun Types: Recap
- **Key takeaways:** Countable or not decides the article. · Never leave one countable noun on its own. · Some help, never a help. · Plurals never take a or an. · Only one countable thing takes a or an. · The meaning decides countable or uncountable. · Check the noun before you choose the article.
- **Example sentences:**
  - Pack an umbrella and some sunscreen. _(focus: an umbrella, some sunscreen)_
  - Ishaan has a scooter. _(focus: a scooter)_
  - Could you give me some help with this box? _(focus: some help)_
  - We picked some guavas from the tree. _(focus: some guavas)_
  - Dad reads a paper every morning.
  - The printer has run out of paper.

### 1.4.8 Articles with Proper Nouns

- **Pages:** Names With and Without The · Names With No Article · Rivers, Seas, Oceans and Deserts · Ranges and Island Groups · Countries That Take The · Famous Buildings and Monuments · Names and Articles: Recap
- **Key takeaways:** The kind of name decides the article. · One mountain, one lake, one country: usually no the. · Rivers, seas and deserts take the. · Groups of mountains or islands take the. · Kingdom, States or a plural name: add the. · Famous monuments usually take the. · Learn which kinds of names take the.
- **Example sentences:**
  - We sailed down the Ganga to Varanasi. _(focus: the Ganga, Varanasi)_
  - Mount Everest is in Asia. _(focus: Mount Everest, Asia)_
  - The Thar Desert is scorching in May. _(focus: The Thar Desert)_
  - Fishing boats crowd the Arabian Sea. _(focus: the Arabian Sea)_
  - The Himalayas stretch across five countries. _(focus: The Himalayas)_
  - We spent a week in the Andaman Islands. _(focus: the Andaman Islands)_
  - My uncle works in the United Kingdom. _(focus: the United Kingdom)_
  - The Maldives has dazzling white beaches. _(focus: The Maldives)_
  - We climbed the ramparts of the Red Fort. _(focus: the Red Fort)_

### 1.4.9 Demonstrative Determiners

- **Pages:** Pointing Words Before Nouns · Match the Noun's Number · Near and Far in Time · A Describing Word in Between · This One, That One · The Same + Noun · Pointing Determiners: Recap
- **Key takeaways:** Before a noun, this and that are determiners. · This and that for one; these and those for many. · This week is now; those summers are past. · Demonstrative first, describing word next. · One or ones saves repeating the noun. · The same school, never same school. · Point at the noun with the matching word.
- **Example sentences:**
  - This jacket is warmer than that coat. _(focus: This jacket, that coat)_
  - These marbles belong to my brother. _(focus: These marbles)_
  - That milk smells sour. _(focus: That milk)_
  - We have a spelling test this week. _(focus: this week)_
  - Those summers at Nani's house were the best. _(focus: Those summers)_
  - Look at those tiny shells on the sand. _(focus: those tiny shells)_
  - Don't pick that mango; pick this one. _(focus: this one)_
  - These sandals pinch, so I'll wear the old ones. _(focus: the old ones)_
  - Priya and I go to the same school. _(focus: the same school)_

### 1.4.10 Possessive Determiners

- **Pages:** Starting a Noun Group With an Owner · Owner, Describing Word, Noun · Never Next to A or The · A Name as the Owner · Their Own · Body Parts and Clothes Take an Owner Word · Possessive Determiners: Recap
- **Key takeaways:** An owner word can start a noun group. · The owner word goes first. · My or a, never both together. · Tara's works like her: it shows the owner. · My own means mine and nobody else's. · My hand, your shoes, never the hand. · One owner word starts the noun group.
- **Example sentences:**
  - Ravi's kite got stuck in our mango tree. _(focus: Ravi's, our)_
  - Her bright red umbrella kept us dry. _(focus: Her bright red umbrella)_
  - I bumped into a my friend at the market.
  - Tara's lunchbox fell into the puddle. _(focus: Tara's)_
  - The twins finally have their own bedrooms. _(focus: their own)_
  - Kavya brushed her hair before school. _(focus: her hair)_
  - Take off your shoes at the temple door. _(focus: your shoes)_

### 1.4.11 Quantifiers

- **Pages:** How Much? How Many? · Many, Much, Some and Any · A Few or Few? · A Little or Little? · A Lot Of, Enough and No · Quantifiers: Recap
- **Key takeaways:** Quantifiers tell roughly how much or how many. · Many for countable, much for uncountable. · A few is some; few is not enough. · A little is some; little is hardly any. · A lot of fits both kinds of noun. · Pick the quantifier that fits the noun.
- **Example sentences:**
  - We have plenty of time but not many tickets. _(focus: plenty of, many)_
  - How many cousins do you have? _(focus: many)_
  - We don't have much petrol left. _(focus: much)_
  - A few neighbours came to help, so we finished quickly.
  - Few neighbours came to help, so we finished late.
  - There's a little rice left if you're still hungry. _(focus: a little)_
  - There is little hope of rain this week. _(focus: little)_
  - We have a lot of homework tonight. _(focus: a lot of)_
  - Is there enough paint for the whole wall? _(focus: enough)_

### 1.4.12 Distributive Determiners

- **Pages:** One at a Time, Before a Noun · A Singular Noun Follows · Each or Every? · Every for Repeated Times · Every Other, Every Single · Distributive Determiners: Recap
- **Key takeaways:** Distributive determiners go member by member. · Each player, not each players. · Each is one by one; every is all together. · Every Sunday tells how often. · Every other is every second one; every single stresses all. · Take the group one member at a time.
- **Example sentences:**
  - Every child got a sparkler at Diwali. _(focus: Every child)_
  - Each player wore a numbered shirt. _(focus: Each player)_
  - Neither shop had my size. _(focus: Neither shop)_
  - The teacher spoke to each student in turn.
  - Every student in our class passed the test.
  - We visit Nani every Sunday. _(focus: every Sunday)_
  - Take this syrup every six hours. _(focus: every six hours)_
  - Our cousins visit every other Sunday. _(focus: every other Sunday)_
  - I checked every single pocket for my keys. _(focus: every single)_

### 1.4.13 Numbers and Ordinal Determiners

- **Pages:** Exact Numbers Before Nouns · One, or Two and More · Hundred and Thousand Stay Singular · First, Second, Third · Ordinal Before Cardinal · Single, Double, Triple · Number Determiners: Recap
- **Key takeaways:** Numbers tell how many or which place. · One balcony; eleven saplings. · Three hundred, not three hundreds. · Ordinals tell position: the second floor. · The first three, not the three first. · Single is one, double is two, triple is three. · Count with cardinals; place with ordinals.
- **Example sentences:**
  - Two kittens dozed on the third step. _(focus: Two, the third)_
  - Our flat has one balcony. _(focus: one balcony)_
  - We planted eleven saplings by the lake. _(focus: eleven saplings)_
  - The new hall has three hundred seats. _(focus: three hundred seats)_
  - Our classroom is on the second floor. _(focus: the second floor)_
  - Read the first three pages tonight. _(focus: the first three pages)_
  - We booked a double room for Nani and Nanaji. _(focus: double)_
  - Our neighbour won gold in the triple jump. _(focus: triple)_

### 1.4.14 Interrogative Determiners

- **Pages:** Question Words With a Noun · What or Which Before a Noun · Whose + Noun: The Owner · What Kind Of, What Colour · Question Determiners: Recap
- **Key takeaways:** Question words can come before a noun. · Same rule as the pronouns: what is open, which picks. · Whose + noun asks about the owner. · What kind of asks about type. · Put the right question word before the noun.
- **Example sentences:**
  - Which bus goes to the old fort? _(focus: Which bus)_
  - Which kurta do you prefer, the yellow or the green? _(focus: Which kurta)_
  - Whose phone keeps ringing in the hall? _(focus: Whose phone)_
  - What sort of shoes do you need for the trek? _(focus: What sort of)_
  - What colour is the new school bus? _(focus: What colour)_

### 1.4.15 Other Determiners

- **Pages:** A Few More Determiners · Another, Other, The Other · Such a and What a · Both, All and Half · Whole or All? · Other Determiners: Recap
- **Key takeaways:** More words can start a noun group. · Another is one more; the other is the one left. · What a view! Such a long queue! · Both is two; all is the whole lot. · Whole for one thing; all for many. · These words also start noun groups.
- **Example sentences:**
  - Can I have another samosa, please? _(focus: another samosa)_
  - One sock is blue and the other sock is green. _(focus: the other sock)_
  - It was such a long queue at the ticket counter! _(focus: such a)_
  - What a view from the hilltop! _(focus: What a)_
  - Both teams played brilliantly in the final. _(focus: Both teams)_
  - All visitors must sign the register. _(focus: All visitors)_
  - The puppy ate the whole sandwich.
  - The puppy ate all the sandwiches.

### 1.4.16 Determiner Order and Combinations

- **Pages:** Stacking Determiners · First, Middle and Last Slots · Only One Middle Word · All the, Both My, Half the · Numbers Come After · Chapter Recap: Determiners
- **Key takeaways:** Determiners stack in a fixed order. · First slot, middle slot, last slot, then the noun. · Only one of a, the, this or my. · All the, never the all. · My first two, not first my two. · Stack determiners in the right slots.
- **Example sentences:**
  - Both my older brothers play the tabla. _(focus: Both my)_
  - These two kittens belong to Asha. _(focus: These two)_
  - All the mangoes in the crate were ripe. _(focus: All the)_
  - We finished half the cake before lunch. _(focus: half the)_
  - My first two attempts at the puzzle failed. _(focus: My first two)_

### 1.5.1 Introduction to Adjectives

- **Pages:** Words That Paint the Picture · Questions Adjectives Answer · Two Quick Adjective Tests · Before the Noun or After the Verb · Adjectives Never Go Plural · The Adjective Family · Adjectives: Recap
- **Key takeaways:** Adjectives help us picture the noun. · Adjectives answer what kind. · Try 'very ___' to test for an adjective. · Adjectives sit before nouns or after is. · Shy owls, never shys owls. · Adjectives come in several kinds. · Find adjectives by what they tell you.
- **Example sentences:**
  - A fluffy grey kitten slept on the warm windowsill. _(focus: fluffy, grey, warm)_
  - The rasam was very salty. _(focus: salty)_
  - Grandpa told us a funny story.
  - Grandpa's story was funny.
  - One shy owl and three shy owls peered down at us. _(focus: shy)_

### 1.5.2 Descriptive Adjectives

- **Pages:** Adjectives of Quality · Sorting by Meaning · Opinion or Fact? · Strong Adjectives · Say It Precisely · Descriptive Adjectives: Recap
- **Key takeaways:** Descriptive adjectives tell what something is like. · Group adjectives by what they describe. · Beautiful is an opinion; round is a fact. · Strong adjectives already mean 'very'. · Swap nice for a word that shows more. · Pick the adjective that paints the clearest picture.
- **Example sentences:**
  - A noisy green parrot landed on the mango tree. _(focus: noisy, green)_
  - The concert hall is beautiful.
  - The concert hall is round.
  - The water in the mountain stream was freezing. _(focus: freezing)_
  - The biryani smelled fragrant and tasted spicy. _(focus: fragrant, spicy)_

### 1.5.3 Determiners With Adjective Names

- **Pages:** Old Names for Familiar Words · Six Old Names · Why They Look Like Adjectives · Describing Word or Determiner? · Naming Them in a Sentence · Old Names: Recap
- **Key takeaways:** Some determiners have adjective names. · Six names, all for words you know from Chapter 1.4. · They sit before a noun and add information. · Very ripe, but never very several. · Name each word before the noun. · Know the old names; you already know the words.
- **Example sentences:**
  - Which two kites belong to your cousins? _(focus: Which, two, your)_
  - My sister picked several juicy guavas. _(focus: My, several)_
  - We bought ripe papayas.
  - We bought several papayas.
  - Every student brought their own steel tiffin. _(focus: Every, their)_

### 1.5.9 Proper Adjectives

- **Pages:** Adjectives From Names · From Place to Adjective · Common Endings · Always a Capital Letter · A Place Name Before a Noun · Proper Adjectives: Recap
- **Key takeaways:** Proper adjectives come from proper nouns. · Each place name has its own adjective. · Look for -an, -ese, -i and -ish. · Indian, not indian. · Darjeeling tea: a name used as a describing word. · Names make adjectives, and keep their capitals.
- **Example sentences:**
  - We slurped Japanese noodles at the food fair. _(focus: Japanese)_
  - My aunt teaches Italian cooking. _(focus: Italian)_
  - The Punjabi wedding lasted three days. _(focus: Punjabi)_
  - We bought Kashmiri shawls in Srinagar. _(focus: Kashmiri)_
  - Darjeeling tea is famous around the world. _(focus: Darjeeling tea)_

### 1.5.10 Compound Adjectives

- **Pages:** Two Words, One Adjective · Common Patterns · Describing How People Look · Numbers With No -s · Hyphens or Separate Words? · Compound Adjectives: Recap
- **Key takeaways:** Compound adjectives join words with hyphens. · Several patterns make compound adjectives. · Curly-haired, blue-eyed, long-legged. · A ten-year-old girl, never ten-years-old. · Hyphens before the noun, not after the verb. · Join the words, hyphen them, keep the number noun singular.
- **Example sentences:**
  - Ruskin Bond is a well-known writer. _(focus: well-known)_
  - A curly-haired girl won the spelling quiz. _(focus: curly-haired)_
  - Our school organised a three-day camp. _(focus: three-day)_
  - It is a five-minute walk to the park. _(focus: five-minute)_
  - Meena has a twelve-year-old brother.
  - Meena's brother is twelve years old.

### 1.5.11 Participial Adjectives

- **Pages:** Adjectives That End in -ing and -ed · -ing: What Causes the Feeling · -ed: How Someone Feels · Common Pairs · Boring or Bored? · Broken, Frozen, Fallen · -ing and -ed Adjectives: Recap
- **Key takeaways:** Some adjectives end in -ing or -ed. · -ing describes the cause. · -ed describes the feeling. · Most feeling words come in -ing/-ed pairs. · A film is boring; you feel bored. · Past forms such as broken can describe nouns. · Cause takes -ing; feeling takes -ed.
- **Example sentences:**
  - The thrilling final left the whole stadium thrilled. _(focus: thrilling, thrilled)_
  - The puppet show was amusing. _(focus: amusing)_
  - The children were amused by the puppets. _(focus: amused)_
  - The long speech was boring.
  - The audience felt bored.
  - A fallen tree blocked the hill road. _(focus: fallen)_
  - Mum keeps frozen peas for quick meals. _(focus: frozen)_

### 1.5.12 Attributive and Predicative Adjectives

- **Pages:** Two Homes for an Adjective · Attributive: Before the Noun · Predicative: After a Linking Verb · Only After the Verb · Only Before the Noun · Adjective Positions: Recap
- **Key takeaways:** Adjectives sit before a noun or after a verb. · Attributive adjectives come before the noun. · Predicative adjectives come after the linking verb. · The baby is asleep; not the asleep baby. · The main gate, not the gate is main. · Know which adjectives go where.
- **Example sentences:**
  - The sleepy kitten looked content. _(focus: sleepy, content)_
  - We waded into the chilly sea. _(focus: chilly)_
  - The dal tastes smoky. _(focus: smoky)_
  - The sky became stormy by evening. _(focus: stormy)_
  - The baby is asleep in her cot. _(focus: asleep)_
  - The main gate closes at eight. _(focus: main)_

### 1.5.13 Adjective Position and Order

- **Pages:** Lining Up Adjectives · The Usual Order · Opinion Before Fact · Size, Age, Colour · Something Spicy · Adjective Order: Recap
- **Key takeaways:** Several adjectives follow a natural order. · Opinion, size, age, shape, colour, origin, material, purpose. · What you think comes before what anyone can see. · Small old blue, not blue old small. · Something spicy, not spicy something. · Line adjectives up in the natural order.
- **Example sentences:**
  - She wore a lovely long silk dupatta. _(focus: lovely, long, silk)_
  - We found a beautiful round pebble on the shore. _(focus: beautiful round)_
  - Grandpa drives a small old blue car. _(focus: small old blue)_
  - Let's cook something spicy tonight. _(focus: something spicy)_

### 1.5.14 Adjectives Followed by Prepositions

- **Pages:** Adjectives With Partners · Pairs to Remember · Proud Of, Good At · Angry With or Angry About? · An -ing Verb After the Pair · Adjective Partners: Recap
- **Key takeaways:** Learn each adjective with its preposition. · Each adjective has its own preposition. · Proud of, good at. · Angry with someone, about something. · Good at swimming, not good at swim. · Learn the adjective and its preposition together.
- **Example sentences:**
  - My little brother is afraid of thunder. _(focus: afraid of)_
  - Nani is proud of her rose garden. _(focus: proud of)_
  - Leela is good at chess. _(focus: good at)_
  - Mum was angry with my brother.
  - Mum was angry about the broken vase.
  - Arjun is interested in collecting coins. _(focus: interested in collecting)_

### 1.5.15 Adjective Formation

- **Pages:** Building Adjectives · Full Of or Without? · More Adjective Endings · When the Spelling Changes · Opposites With Un-, Im- and Dis- · Adjective Building: Recap
- **Key takeaways:** Endings can turn words into adjectives. · -ful means full of; -less means without. · Many endings build adjectives. · Check the spelling when you add an ending. · Un-, in-, im- and dis- make opposites. · Know the ending and you can build the adjective.
- **Example sentences:**
  - Colourful kites made the sky look cheerful. _(focus: Colourful, cheerful)_
  - The puppy was playful all morning.
  - The homeless kitten found a kind family.
  - It was a sunny morning in Ooty. _(focus: sunny)_
  - The young singer became famous overnight. _(focus: famous)_
  - It was unkind to laugh at his drawing. _(focus: unkind)_
  - Climbing that slippery wall is impossible. _(focus: impossible)_

### 1.5.16 Adjective Usage and Common Errors

- **Pages:** Spot and Fix Adjective Mistakes · No -s on Adjectives · Not Ten-Years-Old · Capital Letters for Proper Adjectives · Bored or Boring? · The Right Preposition · Adjectives in the Wrong Order · Asleep Comes After the Verb · Something Nice, Not Nice Something · Adjective Mistake Checklist
- **Key takeaways:** Adjective mistakes come in three kinds. · Red apples, never reds apples. · A ten-year-old boy, with no -s. · Adjectives from names keep their capital. · People feel bored; things are boring. · Good at, afraid of, interested in. · Opinion, size, age, shape, colour, origin, material. · The baby is asleep; the sleeping baby. · Something nice, someone kind. · Check your adjectives before you finish.
- **Example sentences:**
  - We picked some reds apples.
  - He is a ten-years-old boy.
  - We tried some tibetan momos.
  - The film was so long that I was boring.
  - My sister is good in painting.
  - Dad bought a plastic new bucket.
  - Don't wake the asleep baby.
  - Let's buy a nice something for Mum.

### 2.1.1 Introduction to Verbs

- **Pages:** The Engine of a Sentence · No Verb, No Sentence · How to Find the Verb · Verbs With More Than One Word · The Verb Family · Verbs: Recap
- **Key takeaways:** The verb drives the sentence. · No verb, no sentence. · The verb is the word that changes with time. · A verb can be more than one word. · Verbs come in several kinds. · Find the verb first, then the rest makes sense.
- **Example sentences:**
  - The ferry leaves at noon. _(focus: leaves)_
  - The kites over the beach.
  - The kites soared over the beach.
  - Grandma knits scarves every winter. _(focus: knits)_
  - Our neighbour is a firefighter. _(focus: is)_
  - The baby is giggling at the puppy. _(focus: is giggling)_

### 2.1.2 Main Verbs and Helping Verbs

- **Pages:** A Verb With a Helper · The Main Verb Carries the Meaning · Common Helping Verbs · Helpers Jump to the Front · Helper or Main Verb? · Main and Helping Verbs: Recap
- **Key takeaways:** Helping verbs team up with main verbs. · The last verb in the team carries the meaning. · Be, have, do and can are common helpers. · In questions, the helper comes first. · No other verb after it? Then it is the main verb. · Find the main verb, then its helpers.
- **Example sentences:**
  - We have painted the garden fence. _(focus: have, painted)_
  - The chef is chopping onions. _(focus: chopping)_
  - My cousins will arrive tomorrow. _(focus: arrive)_
  - Does your brother like mangoes? _(focus: Does, like)_
  - Riya has finished her homework.
  - Riya has a pet tortoise.

### 2.1.3 Action Verbs and Stative Verbs

- **Pages:** Doing or Being? · Action Verbs · Kinds of Stative Verbs · States in Sentences · Is Something Happening? · Action and State: Recap
- **Key takeaways:** Verbs show actions or states. · Actions can be of the body or the mind. · States are feelings, thoughts, having, senses and being. · Stative verbs describe how things are. · Happening means action; simply true means state. · Sort verbs into doing and being.
- **Example sentences:**
  - The toddler giggles because she loves the swing. _(focus: giggles, loves)_
  - The goalkeeper dived for the ball. _(focus: dived)_
  - Mira decided to join the choir. _(focus: decided)_
  - This jar contains wild honey. _(focus: contains)_
  - Arjun believes in ghosts. _(focus: believes)_
  - The orchestra owns three grand pianos. _(focus: owns)_

### 2.1.4 Linking Verbs

- **Pages:** Verbs That Join · Three Groups of Linking Verbs · The Is Test · Verbs of Change · Linking or Action? · Linking Verbs: Recap
- **Key takeaways:** Linking verbs join, they don't act. · Being, senses and change. · If is fits, the verb is linking. · Turn, get and grow can mean become. · Same verb, two jobs: test with is. · Test with is to find a linking verb.
- **Example sentences:**
  - Mum became a teacher in 2010. _(focus: became)_
  - The puppy seems hungry. _(focus: seems)_
  - Your plan sounds brilliant. _(focus: sounds)_
  - The milk turned sour overnight. _(focus: turned)_
  - My little brother is getting taller. _(focus: getting)_
  - The curry tasted spicy.
  - Dad tasted the curry.

### 2.1.5 Transitive and Intransitive Verbs

- **Pages:** Does the Action Pass On? · Transitive: The Action Passes On · Intransitive: Complete on Its Own · Verbs That Can Be Both · Transitive and Intransitive: Recap
- **Key takeaways:** Some verbs need an object; some don't. · Ask what? or whom? to find the object. · Intransitive verbs stand without an object. · Read, eat and win can take an object or not. · Check whether the action passes to an object.
- **Example sentences:**
  - Kavya bought a kite, and her brother laughed. _(focus: bought, laughed)_
  - The cat caught a moth. _(focus: caught)_
  - Our coach praised the whole team. _(focus: praised)_
  - The train arrived at platform two. _(focus: arrived)_
  - Everyone in the hall clapped. _(focus: clapped)_
  - Ravi is reading a comic.
  - Ravi is reading in his room.

### 2.1.6 Regular and Irregular Verbs

- **Pages:** Three Forms of Every Verb · The Three Key Forms · Regular Verbs Add -ed · Spelling Changes With -ed · Three Kinds of Irregular Verbs · Irregular Verbs in Sentences · Regular and Irregular: Recap
- **Key takeaways:** Base, past, past participle. · Learn each verb in three forms. · Regular verbs add -ed. · Watch the spelling when you add -ed. · Irregular verbs must be learned by heart. · Past alone; past participle after has. · Add -ed, or learn the irregular form.
- **Example sentences:**
  - I often swim here, I swam yesterday, and I have swum here since May. _(focus: swim, swam, swum)_
  - Grandpa fixed the wall clock. _(focus: fixed)_
  - The bus stopped and we hurried on board. _(focus: stopped, hurried)_
  - The choir sang three songs last night. _(focus: sang)_
  - Mum has bought fresh marigolds. _(focus: has bought)_

### 2.1.7 Finite and Non-Finite Verbs – Introduction

- **Pages:** Verbs That Change and Verbs That Don't · Finite Verbs Show Time · Three Non-Finite Forms · Finite or Non-Finite? · Every Sentence Needs a Finite Verb · Finite and Non-Finite: Recap
- **Key takeaways:** Finite verbs change; non-finite forms don't. · Finite verbs show now or past. · To swim, swimming, swum never show time. · Change the time to find the finite verb. · No finite verb, no sentence. · Find the verb that shows time.
- **Example sentences:**
  - Asha wants to paint a mural. _(focus: wants, to paint)_
  - My brother cycles to school. _(focus: cycles)_
  - Last year we lived in Pune. _(focus: lived)_
  - We went to the lake to swim. _(focus: to swim)_
  - Neha sings in the school choir.
  - Neha loves singing in the choir.
  - We trained hard to win the relay. _(focus: trained)_

### 2.1.8 Dynamic and Stative Verb Usage

- **Pages:** States Stay Simple · No -ing for States · Have: Owning or Doing? · Think: Opinion or Activity? · Decide the Meaning First · Using States and Actions: Recap
- **Key takeaways:** States usually stay simple. · I know, not I am knowing. · Having lunch, yes; having a garden, no. · Opinion: think. Activity: is thinking. · The meaning decides whether -ing fits. · Check the meaning before adding -ing.
- **Example sentences:**
  - Rahul understands French perfectly. _(focus: understands)_
  - I need a sharp pencil right now. _(focus: need)_
  - Meena prefers tea to coffee. _(focus: prefers)_
  - We have a big garden.
  - We are having lunch in the garden.
  - I think this plan will work. _(focus: think)_
  - Grandpa is thinking about his old school. _(focus: is thinking)_
  - The doctor is seeing patients until five. _(focus: is seeing)_

### 2.1.9 Verb Forms

- **Pages:** One Verb, Five Shapes · The Five Forms · Spelling the -s Form · Spelling the -ing Form · Which Form Goes Where? · Verb Forms: Recap
- **Key takeaways:** A verb has several forms. · Base, -s, past, past participle, -ing. · Fixes, carries, goes. · Making, running, lying. · The word before the verb picks its form. · Choose the form the sentence needs.
- **Example sentences:**
  - Kabir jogs around the lake. _(focus: jogs)_
  - Nani fixes old clocks and carries them to the fair. _(focus: fixes, carries)_
  - The kids were running and making a racket. _(focus: running, making)_
  - Isha has written two poems and wants to write a third. _(focus: has written, to write)_

### 2.1.10 Verb Complements

- **Pages:** Finishing the Verb's Thought · Kinds of Complement · Verbs That Need Two Parts · Verbs That Need a Preposition · Complete or Not? · Verb Complements: Recap
- **Key takeaways:** Complements finish what the verb starts. · Objects, describing words, places, prepositions and clauses can complete a verb. · Put needs what and where. · Learn depend on, listen to, wait for as pairs. · Missing where or what? Add the complement. · Give each verb everything it needs.
- **Example sentences:**
  - Please put the milk in the fridge. _(focus: put, the milk, in the fridge)_
  - Arjun placed the vase on the windowsill. _(focus: placed)_
  - We waited for the ferry in the rain. _(focus: waited for)_
  - Puppies depend on their mothers. _(focus: depend on)_
  - Riya put the books.
  - Riya put the books on the top shelf.

### 2.1.11 Verb Patterns and Verb Combinations

- **Pages:** Which Form Comes Next? · Verb + To + Base · Verb + -ing · Verb + Someone + To + Base · Let and Make: No To · Either Pattern Works · Verb Patterns: Recap
- **Key takeaways:** The first verb picks the pattern. · Decide to, hope to, plan to. · Enjoy, finish and avoid take -ing. · Ask someone to do something. · Let me go, not let me to go. · Start, begin and like take either pattern. · Learn each verb with its pattern.
- **Example sentences:**
  - Leena wants to learn the guitar, and she enjoys practising. _(focus: to learn, practising)_
  - We decided to stay home during the storm. _(focus: decided to stay)_
  - My cousin hopes to become a vet. _(focus: hopes to become)_
  - Have you finished packing for the trip? _(focus: finished packing)_
  - Please avoid shouting in the reading room. _(focus: avoid shouting)_
  - The teacher asked us to line up quietly. _(focus: asked us to line up)_
  - Mum let me stay up for the fireworks. _(focus: let me stay)_
  - It started to drizzle at noon.
  - It started drizzling at noon.

### 2.1.12 Phrasal Verbs – Introduction

- **Pages:** A Verb Plus a Small Word · Ordinary Meaning or New Meaning? · Everyday Phrasal Verbs · Moving the Small Word · Pronouns Go in the Middle · Phrasal Verbs: Recap
- **Key takeaways:** Verb + small word can mean something new. · Look up can mean search. · Learn phrasal verbs with their meanings. · A noun can go in the middle or at the end. · Turn it down, never turn down it. · Learn the meaning and where the object goes.
- **Example sentences:**
  - Please don't give up on the puzzle now. _(focus: give up)_
  - The boy looked up at the stars.
  - The boy looked up the word in a dictionary.
  - Please switch the fan off before you leave. _(focus: switch the fan off)_
  - The radio is too loud, so turn it down. _(focus: turn it down)_

### 2.1.13 Common Verb Confusions

- **Pages:** Verbs That Look Alike · Borrow or Lend? · Bring or Take? · Say or Tell? · Make or Do? · Hear or Listen, See or Look? · Lie or Lay? · Verb Confusions: Recap
- **Key takeaways:** Similar verbs need a quick test. · Borrow takes; lend gives. · Bring here; take there. · Tell someone; say something. · Make things; do tasks. · Listen to and look at need attention. · Lay and raise need an object. · Use the test for each pair.
- **Example sentences:**
  - Could you lend me your umbrella? _(focus: lend)_
  - Can I borrow your scooter?
  - Can you lend me your scooter?
  - Please bring your notebook to class tomorrow.
  - Take an umbrella when you go out.
  - Tell Grandpa the good news. _(focus: Tell)_
  - She said that the shop was shut. _(focus: said)_
  - I made a mistake, but I did my best. _(focus: made, did)_
  - We heard thunder in the night. _(focus: heard)_
  - Look at that rainbow over the hills! _(focus: Look at)_
  - The cat likes to lie in the sun. _(focus: lie)_
  - Please lay the plates on the mat. _(focus: lay)_

### 2.1.14 Verb Usage and Common Errors

- **Pages:** Spot and Fix Verb Mistakes · Don't Leave Out the Verb · Bought, Not Buyed · Did You Go, Not Did You Went · Not I Am Knowing · The Wrong Verb Pattern · No Extra Preposition · Pronoun in the Middle · Verb Mistake Checklist
- **Key takeaways:** Verb mistakes come in a few kinds. · Check that the sentence has its verb. · Irregular verbs don't add -ed. · After did, use the base form. · States stay simple: I know. · Let us use, not let us to use. · Discuss the trip, not discuss about it. · Turn it down, pick them up. · Check your verbs before you finish.
- **Example sentences:**
  - My sister very tall.
  - We buyed fresh guavas at the market.
  - Did you went to the book fair?
  - I am knowing the answer to this riddle.
  - Dad let us to use his laptop.
  - We discussed about the school trip.
  - The television is noisy, so please turn down it.

### 2.2.1 Introduction to Adverbs

- **Pages:** The Detail Givers · A Fourth Target: the Whole Sentence · Two Adverbs, Two Targets · The Take-Away Test · One Word or a Group · Adverbs Sorted by Question · More Kinds Ahead · Adverbs: Recap
- **Key takeaways:** Adverbs fill in how, where and when. · Some adverbs comment on the whole sentence. · Ask what each adverb is attached to. · Remove it; the sentence still stands. · A group of words can work as an adverb. · Each kind answers its own question. · Later lessons cover each kind. · Find the adverb, then ask its question.
- **Example sentences:**
  - The baby giggled happily in her cot this morning. _(focus: happily, in her cot, this morning)_
  - Luckily, the rain stopped before the match. _(focus: Luckily)_
  - The very old clock ticked loudly. _(focus: very, loudly)_
  - Meena wrapped the gift neatly. _(focus: neatly)_
  - We met yesterday. _(focus: yesterday)_
  - We met on Sunday afternoon. _(focus: on Sunday afternoon)_

### 2.2.2 Adverbs of Manner

- **Pages:** How Did It Happen? · Common Manner Adverbs · Well and Badly · Right After the Verb · After the Object · Plain or Precise? · Adverbs Show Feelings · Manner Adverbs: Recap
- **Key takeaways:** Manner adverbs tell how. · Many manner adverbs end in -ly. · Well and badly tell how well something went. · No object? Put it after the verb. · Keep the verb and its object together. · A stronger verb can hold the manner. · The adverb can show how someone feels. · Tell how, after the verb or object.
- **Example sentences:**
  - The nurse lifted the newborn gently. _(focus: gently)_
  - Rahul plays the flute well. _(focus: well)_
  - I slept badly on the train. _(focus: badly)_
  - The tortoise crawled slowly across the path. _(focus: slowly)_
  - She folded the letter neatly. _(focus: neatly)_
  - The boy walked slowly to the gate.
  - The boy trudged to the gate.
  - Priya closed the door softly. _(focus: softly)_
  - Priya closed the door angrily. _(focus: angrily)_

### 2.2.3 Adverbs of Time

- **Pages:** When Does It Happen? · Everyday Time Adverbs · Time Phrases · Already and Just · Yet at the End · Time Usually Comes Last · End or Start? · Time Adverbs: Recap
- **Key takeaways:** Time adverbs tell when. · Learn the common time words. · A phrase can tell when, too. · Already: sooner than expected. Just: a moment ago. · Yet waits at the end of questions and negatives. · Put the time at the end. · Start with the time to set the scene. · Tell when, usually at the end.
- **Example sentences:**
  - The plumber is coming tomorrow. _(focus: tomorrow)_
  - Our cousins visited last weekend. _(focus: last weekend)_
  - The vegetable seller comes in the morning. _(focus: in the morning)_
  - The film has already started. _(focus: already)_
  - Dad has just left for work. _(focus: just)_
  - Has the school bus come yet? _(focus: yet)_
  - Mum starts her new job next month. _(focus: next month)_
  - We had a picnic by the lake on Sunday.
  - On Sunday, we had a picnic by the lake.

### 2.2.4 Adverbs of Place

- **Pages:** Where Does It Happen? · Everyday Place Adverbs · Go Home, Not Go to Home · Which Way? · Somewhere, Anywhere, Everywhere · After the Verb or Object · Here Comes the Bus! · Place Adverbs: Recap
- **Key takeaways:** Place adverbs tell where. · Learn the common place words. · No to before home or abroad. · Direction adverbs show which way. · Some- in statements, any- in questions. · Place usually follows the verb or object. · Here comes + noun; here it comes. · Tell where, after the verb or object.
- **Example sentences:**
  - The twins are playing outside. _(focus: outside)_
  - It's getting dark, so let's go home. _(focus: home)_
  - Step back from the edge of the platform. _(focus: back)_
  - The lift is going down. _(focus: down)_
  - I can't find my house keys anywhere. _(focus: anywhere)_
  - There were balloons everywhere at the party. _(focus: everywhere)_
  - Please put the boxes downstairs. _(focus: downstairs)_
  - Here comes the bus! _(focus: Here comes)_
  - There goes our kite! _(focus: There goes)_

### 2.2.5 Adverbs of Frequency

- **Pages:** How Often? · The Frequency Scale · Rarely and Never · Before the Main Verb · After Am, Is and Are · After the First Helper · Daily, Weekly, Twice a Week · Frequency Adverbs: Recap
- **Key takeaways:** Frequency adverbs tell how often. · From always down to never. · Never already means not. · Frequency goes before the main verb. · With be, frequency comes after it. · Helper, then frequency, then main verb. · Exact frequency goes at the end. · Know the scale and the three places.
- **Example sentences:**
  - My grandmother usually wakes up at five. _(focus: usually)_
  - We rarely eat at restaurants. _(focus: rarely)_
  - Our dog never barks at the postman. _(focus: never)_
  - Arun often forgets his lunch box. _(focus: often)_
  - The library is always quiet. _(focus: always)_
  - You can sometimes see dolphins from the pier. _(focus: sometimes)_
  - The newspaper arrives daily. _(focus: daily)_
  - Our class has art twice a week. _(focus: twice a week)_

### 2.2.6 Adverbs of Degree

- **Pages:** How Much? · From a Little to a Lot · Before an Adjective or Adverb · Very or Too? · Too Before the Adjective · Enough Comes After · So for Strong Feeling · Degree Adverbs: Recap
- **Key takeaways:** Degree adverbs tell how much. · Pick the degree that fits. · Degree comes before the word it changes. · Very is a lot; too is a problem. · Too + adjective, then for or to. · Old enough, not enough old. · So adds feeling; too adds a problem. · Choose the strength, then the place.
- **Example sentences:**
  - The tea is extremely hot. _(focus: extremely)_
  - The maths puzzle was fairly easy. _(focus: fairly)_
  - Our new ceiling fan runs really quietly. _(focus: really)_
  - The box is very heavy, but I can lift it.
  - The box is too heavy for me to lift.
  - The river is too cold for a swim. _(focus: too cold)_
  - Is the rope long enough? _(focus: long enough)_
  - The sunset was so beautiful! _(focus: so)_

### 2.2.7 Adverbs of Certainty and Probability

- **Pages:** How Sure Are You? · The Certainty Scale · Probably or Possibly? · After Be, Before the Main Verb · Probably Won't · Perhaps and Maybe Go First · One-Word Answers · Certainty Adverbs: Recap
- **Key takeaways:** Certainty adverbs show how sure you are. · From sure to not sure. · Probably is likely; possibly is only maybe. · Probably goes where always goes. · Put the adverb before won't or don't. · Start with maybe or perhaps. · Certainly means yes; maybe means not sure. · Choose how sure, then place it.
- **Example sentences:**
  - It will probably rain this evening. _(focus: probably)_
  - Our cricket team will probably win on Saturday.
  - Our cricket team will possibly win on Saturday.
  - She will definitely enjoy the puppet show. _(focus: definitely)_
  - The chemist is probably closed by now. _(focus: probably)_
  - Raju probably won't finish his project tonight. _(focus: probably won't)_
  - Maybe the bakery opens at ten. _(focus: Maybe)_
  - "Could you pass the salt?" "Certainly!" _(focus: Certainly)_
  - "Will the train be late?" "Perhaps." _(focus: Perhaps)_

### 2.2.8 Adverbs of Duration

- **Pages:** How Long Did It Last? · Words for How Long · Briefly or Permanently · Still: It Hasn't Stopped · Where Still Goes · It Has Stopped · Middle or End? · Duration Adverbs: Recap
- **Key takeaways:** Duration adverbs tell how long. · From a moment to forever. · Short time or all time. · Still means it is continuing. · Still sits before the main verb. · No longer and any more mean it stopped. · No longer in the middle; any more at the end. · Tell how long, or whether it stopped.
- **Example sentences:**
  - We waited for the ferry all morning. _(focus: all morning)_
  - The principal spoke briefly at assembly. _(focus: briefly)_
  - The old bridge has closed permanently. _(focus: permanently)_
  - It's nine o'clock, and Ravi is still asleep. _(focus: still)_
  - My grandfather still rides a bicycle. _(focus: still rides)_
  - Mrs Rao no longer teaches at our school. _(focus: no longer)_
  - The corner shop doesn't sell kites any more. _(focus: any more)_
  - We don't live in Chennai any more. _(focus: any more)_

### 2.2.9 Adverbs of Purpose and Reason

- **Pages:** Why Did It Happen? · Words That Give a Result · Punctuating Therefore · To + Verb Answers Why · In Order To · On Purpose or By Accident? · Deliberately and Accidentally · Purpose and Reason: Recap
- **Key takeaways:** Some adverbs answer why. · Therefore and that's why link cause and result. · Full stop or semicolon before; comma after. · To + verb can give the purpose. · In order to is a careful way to show purpose. · On purpose is meant; by accident is not. · One-word partners: deliberately, accidentally. · Give the reason, the purpose, or whether it was meant.
- **Example sentences:**
  - The roads were flooded. Therefore, the school stayed shut. _(focus: Therefore)_
  - The match was cancelled; therefore, we went to the cinema. _(focus: therefore)_
  - We left at six to catch the ferry. _(focus: to catch the ferry)_
  - Nikhil saved his pocket money to buy a cricket bat. _(focus: to buy a cricket bat)_
  - She whispered in order not to wake the baby. _(focus: in order not to wake the baby)_
  - Tom knocked over the tower on purpose.
  - Tom knocked over the tower by accident.
  - The goalkeeper deliberately wasted time. _(focus: deliberately)_
  - I accidentally deleted the holiday photos. _(focus: accidentally)_

### 2.2.10 Interrogative Adverbs

- **Pages:** Asking About Time, Place and Reason · Four Question Adverbs · Matching Question and Answer · How + Another Word · How Far and How Often · The Question Shapes the Answer · When or How Long? · Question Adverbs: Recap
- **Key takeaways:** Question adverbs ask when, where, why, how. · Each one asks for a different answer. · Listen to the question word, then answer. · How joins other words to ask more. · The second word says what you want to know. · How asks for a way, not a time. · When is a point; how long is a stretch. · Pick the question word for the answer you need.
- **Example sentences:**
  - Where did you park the scooter? _(focus: Where)_
  - When does the concert start? _(focus: When)_
  - Why are you laughing? _(focus: Why)_
  - How far is the beach from your house? _(focus: How far)_
  - How often do you visit your grandparents? _(focus: How often)_
  - "How did you get to the stadium?" "On the metro." _(focus: How)_
  - When did the storm stop?
  - How long did the storm last?

### 2.2.11 Relative Adverbs

- **Pages:** Joining Words for Places and Times · The Place Where · The Day When, the Reason Why · Question or Joining Word? · Find the Noun First · Where Means In Which · When Means On Which · Relative Adverbs: Recap
- **Key takeaways:** Where, when and why can join information to a noun. · A place noun takes where. · Time nouns take when; reason takes why. · A noun before it means it is joining. · Find the noun, then the joining word. · Where = in which, but simpler. · When = on which, or in which. · Place where, time when, reason why.
- **Example sentences:**
  - This is the park where we learned to cycle. _(focus: where)_
  - Kochi is the city where my mother grew up. _(focus: where)_
  - I remember the day when our puppy arrived. _(focus: when)_
  - Nobody knows the reason why the lights went out. _(focus: why)_
  - Where did Grandpa grow up?
  - This is the village where Grandpa grew up.
  - We visited the shop where Dad bought his first watch. _(focus: the shop where)_
  - This is the tin where I keep my stamps. _(focus: where)_
  - Sunday is the day when the market is busiest. _(focus: when)_

### 2.2.12 Focusing Adverbs

- **Pages:** Pointing to One Part · Common Focusing Adverbs · Even and Especially · Moving Only · Only Next to Its Part · Also Before the Main Verb · Too and As Well at the End · Focusing Adverbs: Recap
- **Key takeaways:** Focusing adverbs make one part stand out. · Each focus word adds its own meaning. · Even surprises; especially singles out. · Move only and the meaning moves too. · Keep only beside the words it limits. · Also goes where always goes. · Too and as well come last. · Choose the focus word, then its place.
- **Example sentences:**
  - Even the teacher laughed at the joke. _(focus: Even the teacher)_
  - My grandmother even uses a smartphone. _(focus: even uses)_
  - I love fruit, especially mangoes. _(focus: especially mangoes)_
  - Only Mina ate the cake.
  - Mina ate only the cake.
  - We have only ten minutes left. _(focus: only ten minutes)_
  - Priya also plays the tabla. _(focus: also plays)_
  - Karan sings in the choir too. _(focus: too)_
  - His sister sings in the choir as well. _(focus: as well)_

### 2.2.13 Sentence Adverbs

- **Pages:** Comments on the Whole Sentence · Common Sentence Adverbs · Good News, Surprising News · At the Start, With a Comma · Commas in the Middle · Whole Sentence or Just the Action? · The Comma Clue · Sentence Adverbs: Recap
- **Key takeaways:** Sentence adverbs give the speaker's view. · Good news, bad news, or the speaker's view. · The adverb sets the mood. · Sentence adverb, comma, then the rest. · In the middle, put commas on both sides. · Same adverb, different job. · Front and comma: a comment on the sentence. · Comment first, comma next.
- **Example sentences:**
  - Unfortunately, the last train had gone. _(focus: Unfortunately)_
  - Fortunately, nobody was hurt in the fall. _(focus: Fortunately)_
  - Surprisingly, the shy boy won the speech contest. _(focus: Surprisingly)_
  - Hopefully, the rain will stop by lunchtime. _(focus: Hopefully)_
  - The puzzle, obviously, was too easy for Leela. _(focus: obviously)_
  - Sadly, the old banyan tree fell down.
  - The girl waved sadly from the bus.
  - Honestly, I don't know the answer. _(focus: Honestly)_

### 2.2.14 Adverb Position in Sentences

- **Pages:** Front, Middle and End · Who Lives Where? · The Middle Position · Manner, Place, Time · Place Before Time · Never Between Verb and Object · Moving to the Front for Effect · Adverb Position: Recap
- **Key takeaways:** Adverbs have three main homes. · Know the home of each kind. · Middle means after the first helper. · At the end: how, where, when. · Where comes before when. · Verb and object stay side by side. · Move an adverb forward to build a mood. · Front, middle or end: choose the home.
- **Example sentences:**
  - Suddenly, the dog began to bark. _(focus: Suddenly)_
  - My aunt has always lived by the sea. _(focus: has always lived)_
  - She sang sweetly at the concert last night. _(focus: sweetly, at the concert, last night)_
  - We are going to the zoo tomorrow. _(focus: to the zoo, tomorrow)_
  - Anil speaks Tamil fluently. _(focus: fluently)_
  - Slowly, the old door creaked open. _(focus: Slowly)_

### 2.2.15 Adverbs vs Adjectives

- **Pages:** The Tricky Cases · Good or Well? · Well Meaning Healthy · One Form, Two Jobs · High in Two Jobs · Hard and Hardly Are Different · Friendly Has No Adverb · Adverb or Adjective: Recap
- **Words shown in more than one job:** daily
- **Key takeaways:** Most choices are easy; a few need care. · Good describes a noun; well describes an action. · Feel well: not ill. Feel good: happy. · Daily can describe a noun or an action. · Find what high is describing. · Adding -ly can change the meaning. · Say in a friendly way. · Check the tricky words twice.
- **Example sentences:**
  - The music was loud, so Dad spoke loudly. _(focus: loud, loudly)_
  - Kavya is a good chess player.
  - Kavya plays chess well.
  - Grandpa had a cold, but he feels well now. _(focus: well)_
  - We take a daily walk by the river.
  - We walk daily by the river.
  - The wall is too high to climb. _(focus: too high)_
  - The eagle flew high over the hills. _(focus: flew high)_
  - I could hardly hear the radio. _(focus: hardly)_
  - The shopkeeper smiled in a friendly way. _(focus: in a friendly way)_

### 2.2.16 Formation of Adverbs

- **Pages:** Building Adverbs · Just Add -ly · Y Becomes I · Endings That Change · -wards Shows Direction · -wise for Direction or Manner · Adverbs With No Ending · Building Adverbs: Recap
- **Key takeaways:** Adjective + -ly makes most adverbs. · Most adjectives just add -ly. · Consonant + y: change y to i, add -ly. · Watch -le, -ll, -ic and true. · -wards means in that direction. · Clockwise: the way a clock turns. · Some adverbs are not built from anything. · Know the rule, then the changes.
- **Example sentences:**
  - The sea was calm, and the boat moved calmly. _(focus: calm, calmly)_
  - The puppy wagged its tail happily. _(focus: happily)_
  - The car rolled backwards down the slope. _(focus: backwards)_
  - After the match, the fans headed homewards. _(focus: homewards)_
  - Turn the lid clockwise to close the jar. _(focus: clockwise)_
  - The guests will arrive soon. _(focus: soon)_

### 2.2.17 Adverb Usage and Common Errors

- **Pages:** Spot and Fix Adverb Mistakes · Sings Well, Not Sings Good · An Adjective Instead of an Adverb · Smells Fresh, Not Smells Freshly · Don't Split the Verb and Object · Frequency in the Wrong Place · Hard or Hardly? · Happily, Not Happyly · Adverb Mistake Checklist
- **Key takeaways:** Adverb mistakes come in a few kinds. · How someone does it: well. · Describe the action with the -ly form. · After a linking verb, use the adjective. · Speaks English well, not speaks well English. · Always go, not go always. · Hardly means almost not. · Consonant + y: change y to i. · Check your adverbs before you finish.
- **Example sentences:**
  - She sings good in the school choir.
  - Uncle Joe drove careless on the wet road.
  - The bread from the bakery smells freshly.
  - Tanvi speaks very well English.
  - I go always to the library on Saturdays.
  - Sunil worked hardly for his exams.
  - Everyone at the party clapped happyly.

### 2.3.1 Introduction to Subject–Verb Agreement

- **Pages:** Matching Subject and Verb · One or More Than One · Where Agreement Shows · The First Helper Agrees · Verbs That Never Change · Find the Subject First · Subjects in This Chapter · Subject and Verb: Recap
- **Key takeaways:** The verb matches its subject. · A plural verb has no -s. · Watch -s, be, have and do. · Only the first helper changes. · Can, will and must stay the same. · Ask who or what does the action. · Each lesson takes one kind of subject. · Find the subject, then match the verb.
- **Example sentences:**
  - My uncle grows tomatoes on the roof. _(focus: My uncle grows)_
  - The temple bell rings at six.
  - The temple bells ring at six.
  - My sister is learning to swim. _(focus: is learning)_
  - Does your dog like bones? _(focus: Does)_
  - Our grandfather can juggle three oranges. _(focus: can juggle)_
  - Every morning, my grandparents walk to the temple. _(focus: my grandparents walk)_

### 2.3.2 Singular and Plural Subjects

- **Pages:** Nouns and Pronouns as Subjects · One Noun, One -s · Plurals Without -s · Pronouns and Their Verbs · One You or Many, Still Are · Always-Plural Nouns · News and Physics Take Singular Verbs · Noun and Pronoun Subjects: Recap
- **Key takeaways:** Noun or pronoun, the verb matches it. · Singular noun: -s. Plural noun: no -s. · Children and people are plural. · Only he, she and it add -s. · You always takes are and were. · Jeans and scissors take plural verbs. · News and physics: singular verb. · Check the number, then the verb.
- **Example sentences:**
  - The postman delivers letters before noon. _(focus: The postman delivers)_
  - The kettle whistles on the stove. _(focus: The kettle whistles)_
  - The kites fly above the field. _(focus: The kites fly)_
  - The children want ice cream after lunch. _(focus: The children want)_
  - People queue outside the bakery every morning. _(focus: People queue)_
  - Rahul, you are late again!
  - Children, you are all invited.
  - My new jeans are too long. _(focus: My new jeans are)_
  - The news from the village makes Grandma smile. _(focus: makes)_
  - Physics seems hard at first. _(focus: Physics seems)_

### 2.3.3 Agreement with Compound Subjects

- **Pages:** Two Subjects Joined by And · And Means Plural · Pronoun Pairs · Two Words, One Dish · One Meal or Two Things? · Two Titles, One Person · One The or Two? · Compound Subjects: Recap
- **Key takeaways:** A and B usually make a plural. · One plus one is more than one. · You and I are; my friend and I have. · A dish named by two words is one thing. · Served apart: plural. One meal: singular. · One person with two roles: singular. · Repeat the to show two people. · Count the things, not the words.
- **Example sentences:**
  - Riya and her brother are at the fair. _(focus: Riya and her brother are)_
  - The cat and the dog sleep by the fire. _(focus: sleep)_
  - You and I are in the same relay team. _(focus: You and I are)_
  - My friend and I have a plan for the holidays. _(focus: My friend and I have)_
  - Rice and dal is my favourite lunch. _(focus: Rice and dal is)_
  - Bread and butter makes a quick breakfast. _(focus: Bread and butter makes)_
  - The idli and the sambar are on separate plates.
  - Idli and sambar is a popular breakfast.
  - My neighbour and best friend is coming to dinner. _(focus: is coming)_
  - The singer and dancer is on stage now.
  - The singer and the dancer are on stage now.

### 2.3.4 Agreement with Collective Nouns

- **Pages:** Groups as Subjects · One Group, One Verb · More Groups Acting as One · The Group or Its Members? · Police and Cattle Are Plural · Match the Verb and the Pronoun · Don't Mix Singular and Plural · Group Words: Recap
- **Key takeaways:** How the group acts decides the verb. · Acting together: singular verb. · Committee meets; herd crosses. · Members acting separately can take a plural verb. · Police and cattle take plural verbs. · Is goes with its; are goes with their. · Pick one number and keep it. · One unit, one verb; then match the pronoun.
- **Example sentences:**
  - Our class is going on a trip to the zoo. _(focus: Our class is going)_
  - The orchestra plays every Friday evening. _(focus: The orchestra plays)_
  - The committee meets in the library. _(focus: The committee meets)_
  - The herd crosses the road at dusk. _(focus: The herd crosses)_
  - The jury has reached a decision.
  - The jury are still arguing among themselves.
  - The police are searching the park. _(focus: The police are)_
  - The cattle are grazing by the canal. _(focus: The cattle are grazing)_
  - The team is proud of its new kit. _(focus: its)_
  - The family is packing their bags.

### 2.3.5 Agreement with Indefinite Pronouns

- **Pages:** Everyone, Both and Some · -one, -body and -thing Are Singular · Many People, Singular Verb · Both, Few, Many, Several · Look at the Noun After Of · All of the Cake or All of the Cakes? · None: Singular or Plural? · Everyone, Both and Some: Recap
- **Key takeaways:** Singular, plural, or it depends. · Everybody loves; nothing tastes. · Everyone means many, but it is singular. · These four take plural verbs. · Some of the milk is; some of the guests are. · One amount: singular. Many things: plural. · In careful writing, none is singular. · Know the group, then choose the verb.
- **Example sentences:**
  - Everyone knows the new rule. _(focus: Everyone knows)_
  - Everybody loves Grandma's mango pickle. _(focus: Everybody loves)_
  - Nothing tastes better than a cold drink in summer. _(focus: Nothing tastes)_
  - Everyone has a seat on the school bus. _(focus: Everyone has)_
  - Both of my sisters play the veena. _(focus: Both of my sisters play)_
  - Many were waiting at the gate. _(focus: Many were)_
  - Some of the milk is sour. _(focus: Some of the milk is)_
  - Some of the guests are late. _(focus: Some of the guests are)_
  - All of the cake has gone.
  - All of the cakes have gone.
  - None of the tickets was left by Friday. _(focus: None of the tickets was)_

### 2.3.6 Agreement with Each, Every, Either and Neither

- **Pages:** Singular Verbs for One-by-One Words · Each and Every + Singular Noun · Every … and … · A Plural Noun, a Singular Verb · Speech and Writing · Plural Subject + Each · Each Before or After? · Each and Every: Recap
- **Key takeaways:** Each, every, either, neither: singular. · Each player gets; every shop closes. · Every boy and girl has. · A plural noun, but a singular verb. · In writing, keep either of singular. · The twins each have: plural verb. · Find the real subject first. · Look one at a time, unless the subject is plural.
- **Example sentences:**
  - Every seat has a number. _(focus: Every seat has)_
  - Each player gets a medal. _(focus: Each player gets)_
  - Every shop closes at nine on Sundays. _(focus: Every shop closes)_
  - Every boy and girl has a library card. _(focus: has)_
  - Each of the rooms has a ceiling fan. _(focus: Each of the rooms has)_
  - Neither of my uncles drives a car. _(focus: Neither of my uncles drives)_
  - Either of the buses goes to the station. _(focus: Either of the buses goes)_
  - The twins each have a bicycle. _(focus: The twins each have)_
  - Each child carries a lunch box.
  - The children each carry a lunch box.

### 2.3.7 Agreement with Uncountable Nouns

- **Pages:** Uncountable Nouns as Subjects · One Form, Singular Verb · Nouns That Trick Learners · A Piece Of, Pieces Of · Other Counting Words · Money and Time · Paper or Papers? · Uncountable Subjects: Recap
- **Key takeaways:** No plural, so a singular verb. · Fresh air helps; traffic moves. · Advice, luggage, homework: singular. · Piece or pieces decides the verb. · A bottle costs; three slices are. · Money is; time passes. · The meaning decides the verb. · Uncountable means singular.
- **Example sentences:**
  - This furniture looks very old. _(focus: This furniture looks)_
  - Fresh air helps you sleep. _(focus: Fresh air helps)_
  - The traffic moves slowly after six. _(focus: The traffic moves)_
  - A piece of the jigsaw is missing. _(focus: A piece of the jigsaw is)_
  - Two pieces of luggage are still on the belt. _(focus: Two pieces of luggage are)_
  - A bottle of water costs twenty rupees. _(focus: A bottle of water costs)_
  - Three slices of bread are enough for me. _(focus: Three slices of bread are)_
  - Money is tight this month. _(focus: Money is)_
  - Time passes quickly at the fair. _(focus: Time passes)_
  - Paper comes from trees.
  - The morning papers are on the doorstep.

### 2.3.8 Agreement with Subjects Joined by Or and Nor

- **Pages:** Subjects Joined by Or · Singular Or Singular · Plural Or Plural · The Nearer Subject Decides · Put the Plural Last · Or in Questions · Is or Are in a Question? · Or and Nor: Recap
- **Key takeaways:** Or picks one, so the verb doesn't just go plural. · One or one: singular verb. · Many or many: plural verb. · Mixed? Match the closer one. · Plural last sounds natural. · The helper matches the subject after it. · Two singulars: is. A plural first: are. · Same number is easy; mixed, match the nearer.
- **Example sentences:**
  - Tea or coffee is served after dinner. _(focus: Tea or coffee is served)_
  - A pen or a pencil works for this test. _(focus: works)_
  - Apples or bananas make a good snack. _(focus: make)_
  - My brother or my cousins are coming to pick me up. _(focus: my cousins are)_
  - My cousins or my brother is coming to pick me up. _(focus: my brother is)_
  - A sandwich or some biscuits are fine for the trip. _(focus: some biscuits are)_
  - Are the twins or Asha joining us? _(focus: Are the twins)_
  - Is Grandpa or Grandma picking us up? _(focus: Is Grandpa)_
  - Are your parents or your grandparents coming to the show? _(focus: Are your parents)_

### 2.3.9 Agreement with Either…Or and Neither…Nor

- **Pages:** Paired Joining Words · Either … Or · Neither … Nor · Either You or I Am · Neither She Nor They · Neither … Nor Is Already Negative · Both … And or Either … Or? · Either and Neither: Recap
- **Key takeaways:** The nearer subject still decides. · One or the other; match the nearer. · Not one and not the other. · Match the nearer pronoun: I am, you are. · Swap the order and the verb changes. · No not after neither … nor. · Both … and is always plural. · Match the nearer subject; add no extra not.
- **Example sentences:**
  - Either Priya or her brothers feed the cat. _(focus: her brothers feed)_
  - Either the bus or the train stops at our village. _(focus: the train stops)_
  - Neither the shops nor the bank is open on Sunday. _(focus: the bank is)_
  - Either you or I am going to carry the bags. _(focus: I am)_
  - Neither she nor they were at the meeting. _(focus: they were)_
  - Neither they nor she was at the meeting. _(focus: she was)_
  - Neither my sister nor I don't like spinach.
  - Both the coach and the captain are pleased.
  - Either the coach or the captain is speaking next.

### 2.3.10 Agreement with There Is and There Are

- **Pages:** When the Subject Comes After · There Is or There Are · There Was and There Were · Is There? Are There? · A List After There · There's With a Plural · How Many and How Much · There Is and There Are: Recap
- **Key takeaways:** Look after there for the subject. · Singular or uncountable: is. Plural: are. · The same rule in the past. · In questions, the verb comes first. · The first item in the list decides. · In writing, plural nouns need there are. · How many … are there; how much … is there. · Look past there to the real subject.
- **Example sentences:**
  - There is a lizard on the ceiling. _(focus: There is a lizard)_
  - There is some rice in the pot. _(focus: There is some rice)_
  - There are three kittens under the porch. _(focus: There are three kittens)_
  - There was a storm last night. _(focus: There was a storm)_
  - There were puddles everywhere this morning. _(focus: There were puddles)_
  - Is there a chemist near here? _(focus: Is there a chemist)_
  - Are there any seats left? _(focus: Are there any seats)_
  - There is a pen and two pencils in my bag. _(focus: There is a pen)_
  - There's two buses to the city every hour.
  - How many students are there in your class? _(focus: are there)_
  - How much sugar is there in this tea? _(focus: is there)_

### 2.3.11 Agreement with Expressions of Quantity

- **Pages:** Quantity Words as Subjects · A Lot Of: The Noun Decides · Half, Thirds and Per Cent · A Number Of or The Number Of? · The Majority Of · One Of + Plural Noun · More One Of Sentences · Quantity Words: Recap
- **Key takeaways:** Usually, the noun after of decides. · A lot of rain falls; lots of children play. · Half of the cake was; ten per cent of the students walk. · A number of: plural. The number of: singular. · The majority of + plural noun: plural verb. · One of my friends lives: singular verb. · Plural noun, singular verb. · Check the noun after of, or the word one.
- **Example sentences:**
  - A lot of people visit the fort in winter. _(focus: A lot of people visit)_
  - A lot of rain falls in July. _(focus: A lot of rain falls)_
  - Lots of children play in the park after school. _(focus: Lots of children play)_
  - Half of the cake was eaten before lunch. _(focus: Half of the cake was)_
  - Ten per cent of the students walk to school. _(focus: Ten per cent of the students walk)_
  - A number of students are absent today.
  - The number of students is falling.
  - The majority of voters want a new park. _(focus: The majority of voters want)_
  - One of my friends lives in Mysuru. _(focus: One of my friends lives)_
  - One of the tyres is flat. _(focus: One of the tyres is)_
  - One of our hens lays two eggs a day. _(focus: One of our hens lays)_

### 2.3.12 Agreement with Titles, Names and Measurements

- **Pages:** One Name, One Amount · Titles Are Singular · Names That Look Plural · One Amount, Singular Verb · One Amount or Separate Things? · Sums Take a Singular Verb · Times and Divided By · Titles and Amounts: Recap
- **Key takeaways:** Looks plural, means one: singular verb. · One book or film: singular verb. · One country, one verb. · Five hundred rupees is; ten kilometres is. · An amount: singular. Separate items: plural. · Two plus three is five. · Times and divided by work the same way. · One title, one place, one amount: singular.
- **Example sentences:**
  - Little Women is my favourite novel. _(focus: Little Women is)_
  - Gulliver's Travels is a funny book. _(focus: Gulliver's Travels is)_
  - The Three Musketeers tells the story of four friends. _(focus: The Three Musketeers tells)_
  - The Philippines is a country of many islands. _(focus: The Philippines is)_
  - The United States has fifty states. _(focus: The United States has)_
  - Five hundred rupees is too much for a T-shirt. _(focus: Five hundred rupees is)_
  - Ten kilometres is a long way to walk. _(focus: Ten kilometres is)_
  - Fifty rupees is the price of the ticket.
  - Fifty one-rupee coins are in the jar.
  - Two plus three is five. _(focus: Two plus three is)_
  - Ten minus four equals six. _(focus: Ten minus four equals)_
  - Six times seven is forty-two. _(focus: Six times seven is)_
  - Twenty divided by five equals four. _(focus: Twenty divided by five equals)_

### 2.3.13 Agreement with Relative Pronoun Subjects

- **Pages:** Who, Which and That as Subjects · Look at the Noun Before Who · Which and That Work the Same · One of the … Who · Two Verbs, Two Subjects · The Only One Who · Who, Which and That: Recap
- **Key takeaways:** Who borrows its number from the noun before. · Singular noun before who: singular verb. · Mango which looks; bags that hold. · Who refers to the plural noun: plural verb. · Each verb has its own subject. · The only one … who: singular verb. · Find what who stands for.
- **Example sentences:**
  - I have a friend who speaks four languages. _(focus: a friend who speaks)_
  - The girl who sits next to me draws well. _(focus: The girl who sits)_
  - The shops that sell kites are near the beach. _(focus: The shops that sell)_
  - Pick the mango which looks ripest. _(focus: the mango which looks)_
  - We need bags that hold a lot. _(focus: bags that hold)_
  - Ali is one of the students who play in the band. _(focus: the students who play)_
  - One of the girls sings in the choir.
  - Meera is one of the girls who sing in the choir.
  - Ravi is the only one of my friends who owns a dog. _(focus: the only one of my friends who owns)_

### 2.3.14 Tricky Subject–Verb Agreement Cases

- **Pages:** When the Subject Hides · Skip the Words in Between · As Well As and Along With · Questions: Look After the Helper · Here Come the Twins · -ing Subjects Are Singular · A Pair Of · Tricky Subjects: Recap
- **Key takeaways:** Find the real subject before the verb. · Find the main noun, then the verb. · Extra people don't make the subject plural. · In questions, the subject follows the helper. · After here or there, look ahead. · An activity is one thing: singular verb. · A pair of socks is. · Find the real subject every time.
- **Example sentences:**
  - The box of crayons is on the shelf. _(focus: The box of crayons is)_
  - The leaves on that tree are turning yellow. _(focus: The leaves on that tree are)_
  - The colour of the curtains is lovely. _(focus: The colour of the curtains is)_
  - The captain, as well as the players, is ready. _(focus: The captain, as well as the players, is)_
  - Where are my house keys? _(focus: are my house keys)_
  - Where does your uncle work? _(focus: does your uncle)_
  - Here come the twins! _(focus: Here come the twins)_
  - There goes the last ferry! _(focus: There goes the last ferry)_
  - Swimming in the sea is fun. _(focus: Swimming in the sea is)_
  - Eating vegetables keeps you healthy. _(focus: Eating vegetables keeps)_
  - A pair of socks is missing from the line. _(focus: A pair of socks is)_

### 2.4.1 Introduction to Sentence Construction

- **Pages:** What Makes a Sentence? · Two Parts You Always Need · Complete Sense · Three Kinds of Fragment · Fixing a Fragment · Five Building Blocks · Blocks in One Sentence · The Path Through This Chapter · Building Sentences: Recap
- **Key takeaways:** Subject, verb, complete sense. · No subject or no verb: no sentence. · If you're left waiting, it isn't finished. · A fragment is missing something. · Join the fragment to its sentence. · Subject, verb, object, complement, adverbial. · Label each block in turn. · Parts first, then patterns, then order. · Check every sentence has what it needs.
- **Example sentences:**
  - The monsoon reached Kerala on Monday. _(focus: The monsoon, reached)_
  - Thunder rumbled. _(focus: Thunder, rumbled)_
  - When the bell rings, we line up. _(focus: When the bell rings, we line up)_
  - We stayed inside. Because it was raining.
  - My cousin painted a mural at school last week. _(focus: My cousin, painted, a mural, at school last week)_

### 2.4.2 Subject and Predicate

- **Pages:** Two Halves of a Sentence · The Predicate Starts With the Verb · Long Subjects, Long Predicates · Simple and Complete Subject · Simple and Complete Predicate · Commands Hide You · When the Subject Isn't First · Subject and Predicate: Recap
- **Key takeaways:** Who it is about, and what is said about it. · Find the verb, then cut. · Either half can be long. · The main noun is the simple subject. · The verb is the simple predicate. · In a command, the subject is you. · Skip the opener to find the subject. · Find the verb, then split.
- **Example sentences:**
  - The old fisherman mended his net. _(focus: The old fisherman, mended his net)_
  - My little brother collects shiny stones. _(focus: collects shiny stones)_
  - The boy in the blue jacket laughed. _(focus: The boy in the blue jacket)_
  - Parrots chatter all day in the guava tree. _(focus: chatter all day in the guava tree)_
  - The tall, smiling teacher waved. _(focus: teacher)_
  - The puppy chewed my new slipper. _(focus: chewed)_
  - Please shut the gate. _(focus: shut the gate)_
  - After lunch, the whole class played kabaddi. _(focus: the whole class)_

### 2.4.3 Verb and Object

- **Pages:** The Object Slot · What Can Fill the Object Slot? · Long Objects and -ing Objects · Object or Adverbial? · The Move-to-the-Front Test · Object or Complement? · The Same-Person Test · Objects: Recap
- **Key takeaways:** The object follows the verb. · Nouns, pronouns, phrases, -ing and to + base. · The whole group is the object. · A thing is an object; a time or place is not. · Adverbials move; objects stay. · Someone else: object. The same person: complement. · Same as the subject? Then it's a complement. · Find it, then test it.
- **Example sentences:**
  - Meera fed the hungry ducks. _(focus: the hungry ducks)_
  - We bought the biggest watermelon in the market. _(focus: the biggest watermelon in the market)_
  - Raju enjoys flying kites. _(focus: flying kites)_
  - Arjun left his umbrella.
  - Arjun left after lunch.
  - Near the temple, the bus stopped. _(focus: Near the temple)_
  - Priya met a doctor.
  - Priya became a doctor.
  - The stray puppy became my best friend. _(focus: my best friend)_

### 2.4.4 Direct and Indirect Objects

- **Pages:** Two Objects After One Verb · The Thing and the Person · Animals Can Get Things Too · Person First, Then Thing · Never an Indirect Object Alone · Verbs That Take Two Objects · Two Objects Every Day · Two Objects: Recap
- **Key takeaways:** A thing, and someone who gets it. · Direct: the thing. Indirect: who gets it. · The indirect object can be an animal. · Indirect object before direct object. · Give someone something, not just give someone. · Give, send, show, tell, buy, make. · Spot the person and the thing. · Person first, thing second.
- **Example sentences:**
  - Nani posted my cousin a birthday card. _(focus: my cousin, a birthday card)_
  - The waiter brought us the menu. _(focus: us, the menu)_
  - Leela threw the parrot a green chilli. _(focus: the parrot, a green chilli)_
  - Dad bought my brother a cricket bat. _(focus: my brother, a cricket bat)_
  - I gave her my old bicycle. _(focus: her, my old bicycle)_
  - Our teacher told us a funny story. _(focus: us, a funny story)_
  - Can you lend Arun your pencil? _(focus: Arun, your pencil)_

### 2.4.5 Subject Complements

- **Pages:** Completing the Subject · Renaming or Describing? · More Complements · It's Me or It Is I? · -ing and To + Base Complements · Describing or Saying Where? · The What-Like Test · Subject Complements: Recap
- **Key takeaways:** After a linking verb, the complement completes the subject. · A noun renames; an adjective describes. · A complement can be a phrase. · In everyday English, say it's me. · An activity can complete the subject. · Where or when after be is an adverbial. · What is it, or what is it like? Complement. · Rename or describe the subject.
- **Example sentences:**
  - The old lighthouse is a museum now. _(focus: a museum)_
  - Aunt Rekha is a dentist.
  - Aunt Rekha is very calm.
  - The winner was a girl from Class 4. _(focus: a girl from Class 4)_
  - The sky looks stormy. _(focus: stormy)_
  - "Who's at the door?" "It's me!" _(focus: me)_
  - Her hobby is collecting stamps. _(focus: collecting stamps)_
  - The plan is to leave at dawn. _(focus: to leave at dawn)_
  - The kitten is sleepy.
  - The kitten is under the sofa.
  - The concert was on Saturday. _(focus: on Saturday)_

### 2.4.6 Object Complements

- **Pages:** Completing the Object · Noun Object Complements · Adjective Object Complements · The Object-Is Test · Testing Two Sentences · Right After the Object · Object Complement or Adverbial? · Object Complements: Recap
- **Key takeaways:** An object complement completes the object. · A noun after the object renames it. · An adjective after the object describes it. · Object + is + complement must make sense. · Run the test every time. · Object first, complement next. · Describes the object, or tells when? · Object, then what it is or is like.
- **Example sentences:**
  - The heavy rain made the roads slippery. _(focus: slippery)_
  - The class elected Asha captain. _(focus: captain)_
  - We call our grandfather Dadu. _(focus: Dadu)_
  - The good news made Grandpa happy. _(focus: happy)_
  - Please keep the windows open. _(focus: open)_
  - The judges declared Kiran the winner. _(focus: Kiran the winner)_
  - Long walks make me hungry. _(focus: me hungry)_
  - They painted the fence green. _(focus: the fence green)_
  - The children found the puzzle easy. _(focus: the puzzle easy)_
  - Sonu left her room tidy.
  - Sonu left her room at seven.

### 2.4.7 Modifiers and Their Placement

- **Pages:** Words That Describe Other Words · Kinds of Modifier · Keep It Close · A Modifier in the Wrong Place · One Move, a New Meaning · An -ing Opener Describes the Subject · A Dangling Opener · Modifiers: Recap
- **Key takeaways:** A modifier describes another part. · Adjectives, adverbs and phrases. · Put the modifier next to its word. · Move it next to the word it describes. · Where the phrase sits changes who has it. · Who is doing the -ing? The subject after the comma. · The subject must do the -ing action. · Keep describers beside what they describe.
- **Example sentences:**
  - The girl with the red kite waved at us. _(focus: with the red kite)_
  - The man in the white cap sells peanuts. _(focus: in the white cap)_
  - She served cake to the guests on paper plates.
  - The boy with a broken arm hugged his dog.
  - The boy hugged his dog with a broken arm.
  - Walking to school, I saw a rainbow. _(focus: Walking to school)_
  - Walking to the bus stop, the rain started.

### 2.4.8 Basic Sentence Patterns

- **Pages:** Five Ways to Build a Sentence · The Five Patterns · The Verb Decides · Adverbials Are Extras · Same Pattern, More Detail · Find the Pattern in Four Steps · Pattern Detective · Sentence Patterns: Recap
- **Key takeaways:** Five patterns cover most sentences. · SV, SVO, SVC, SVOO, SVOC. · Find the verb, then ask what it needs. · How, where and when don't change the pattern. · Strip the extras to see the pattern. · Verb, subject, remove extras, look after the verb. · Work through the steps in order. · Find the verb and what it needs.
- **Example sentences:**
  - The pressure cooker hissed. _(focus: The pressure cooker hissed)_
  - Rahul seems nervous. _(focus: seems)_
  - The baby giggled happily in her pram. _(focus: happily in her pram)_
  - Every evening, Grandpa reads the newspaper on the porch. _(focus: Grandpa reads the newspaper)_
  - After school, my brother made me a sandwich. _(focus: my brother made me a sandwich)_

### 2.4.9 Subject–Verb Pattern

- **Pages:** The Shortest Pattern · Extras Keep It SV · Long but Still SV · Verbs That Need a Place · Can You Drop the Place? · Two-Word Sentences · Commands Can Be SV · SV Pattern: Recap
- **Key takeaways:** SV: a subject and a verb are enough. · How, where and when don't change SV. · Find the subject and the verb. · Live, stay, lie: the place must stay. · Most places are extras; some are needed. · A subject and a verb can be the whole sentence. · You is hidden; the verb stands alone. · Subject, verb, and any extras.
- **Example sentences:**
  - The tired toddler yawned. _(focus: The tired toddler yawned)_
  - The old ceiling fan creaked noisily all night. _(focus: The old ceiling fan creaked)_
  - The children in the back seat giggled for the whole journey. _(focus: The children in the back seat giggled)_
  - My grandparents live in a small village near Udupi. _(focus: live in a small village near Udupi)_
  - The dog barked in the yard.
  - The dog lives in the yard.
  - Volcanoes erupt. _(focus: Volcanoes erupt)_
  - Our visitors have left. _(focus: Our visitors have left)_
  - Please listen to the bell. _(focus: listen)_

### 2.4.10 Subject–Verb–Object Pattern

- **Pages:** Who Did What to What · Swap Them, Change the Story · Subject, Verb, Object · Grow the Subject and Object · Add Adverbials · Two SVO Sentences With And · Sharing a Subject · SVO Pattern: Recap
- **Key takeaways:** SVO: subject, verb, object. · Order shows who does what. · Keep the three in that order. · Describing words keep the pattern. · Extras don't change SVO. · And joins two complete sentences. · One subject, two verbs with objects. · Keep the order, then build it up.
- **Example sentences:**
  - The goat ate my homework! _(focus: The goat, my homework)_
  - The hen pecked the rooster.
  - The rooster pecked the hen.
  - Grandma feeds the sparrows every morning. _(focus: Grandma, feeds, the sparrows)_
  - The small boy in the red cap caught the heavy cricket ball. _(focus: The small boy in the red cap, the heavy cricket ball)_
  - Yesterday, our class planted twenty saplings near the gate. _(focus: our class planted twenty saplings)_
  - Asha washed the cups, and Ravi dried them. _(focus: Asha washed the cups, Ravi dried them)_
  - Mum peeled the mangoes and cut them into slices. _(focus: peeled the mangoes, cut them into slices)_

### 2.4.11 Subject–Verb–Complement Pattern

- **Pages:** Subject, Linking Verb, Complement · Build With Be, Seem and Look · Build With Change Verbs · A Noun or an Adjective? · A Noun Complement Matches the Subject · Add an Adverbial · Still SVC · SVC Pattern: Recap
- **Key takeaways:** SVC: the verb links the subject to its complement. · Be, seem, look + complement. · Become, get, turn, grow show a change. · A noun says what; an adjective says what like. · Two girls became friends, not friend. · Extras don't change SVC. · Cross out the extras to find SVC. · Subject, linking verb, complement.
- **Example sentences:**
  - The rooftop garden looks beautiful. _(focus: The rooftop garden looks beautiful)_
  - The new library seems huge. _(focus: seems huge)_
  - The puppy grew strong on the farm. _(focus: grew strong)_
  - The sky got dark at four o'clock. _(focus: got dark)_
  - Our neighbour became a police officer.
  - Our neighbour became famous.
  - The two girls became best friends. _(focus: became best friends)_
  - Grandma felt tired after the long wedding. _(focus: Grandma felt tired)_
  - In winter, the lake turns icy every night. _(focus: the lake turns icy)_

### 2.4.12 Subject–Verb–Indirect Object–Direct Object Pattern

- **Pages:** Two Ways to Say It · Move the Person After To · To or For? · Give It to Me · Them and It · Explain, Describe, Suggest, Say · Describe It to Me · SVOO Pattern: Recap
- **Key takeaways:** Person first, or thing first with to or for. · Thing, then to + person. · Goes to someone: to. Done for someone: for. · Thing is a pronoun? Use to or for. · Pronoun first, person after. · These verbs always use to. · Describe something to someone. · Know when to switch to to or for.
- **Example sentences:**
  - Nikhil lent his neighbour a ladder. _(focus: his neighbour a ladder)_
  - Nikhil lent a ladder to his neighbour. _(focus: a ladder to his neighbour)_
  - The coach threw the ball to Arjun. _(focus: the ball to Arjun)_
  - Ammu sent a letter to her pen pal. _(focus: to her pen pal)_
  - Papa cooked dinner for the guests. _(focus: for the guests)_
  - Please pass it to Grandpa. _(focus: it to Grandpa)_
  - I bought them for my sister. _(focus: them for my sister)_
  - Can you show it to the class? _(focus: it to the class)_
  - Could you explain the rule to me? _(focus: the rule to me)_
  - Please describe me the thief.

### 2.4.13 Subject–Verb–Object–Complement Pattern

- **Pages:** Building With Make, Keep and Call · Make, Keep, Leave, Find + Adjective · Name, Call, Elect, Appoint + Noun · Consider and Think · Made Her Captain or Made Her a Cake? · The Is-Test Decides · Build Your Own · SVOC Pattern: Recap
- **Key takeaways:** Some verbs take an object and a complement. · These verbs often take an adjective. · These verbs take a noun. · Consider and think take either kind. · Same verb, two patterns. · Object is complement? SVOC. If not, SVOO. · Verb, object, complement. · Pick the verb, then test with is.
- **Example sentences:**
  - The warm blanket kept the puppy cosy. _(focus: the puppy cosy)_
  - The long queue made everyone grumpy. _(focus: everyone grumpy)_
  - Leave the gate shut, please. _(focus: the gate shut)_
  - The villagers elected Mrs Iyer their leader. _(focus: Mrs Iyer their leader)_
  - Everyone calls my uncle Bablu. _(focus: my uncle Bablu)_
  - The teachers consider Arjun a true artist. _(focus: Arjun a true artist)_
  - We thought the film brilliant. _(focus: the film brilliant)_
  - They made her captain.
  - They made her a cake.
  - Dad bought Meena a new dress. _(focus: Meena a new dress)_
  - The bright sun turned the white walls golden. _(focus: the white walls golden)_
  - The class voted Tara the best singer. _(focus: Tara the best singer)_

### 2.4.14 Normal and Inverted Word Order

- **Pages:** Subject First, or Verb First? · Normal Order · Inversion You Already Know · Never, Rarely, Seldom at the Start · Not Only … But Also · So Do I · Neither Can Ravi · Inverted Order: Recap
- **Key takeaways:** Inverted order puts a verb before the subject. · Most statements: subject, then verb. · Questions and here or there invert. · Negative opener, then helper, then subject. · Not only + helper + subject. · Agree with a positive: so + helper + subject. · Agree with a negative: neither or nor + helper + subject. · Know when the helper jumps ahead.
- **Example sentences:**
  - Never have I seen such a big kite! _(focus: have I)_
  - The postwoman delivers our letters at ten. _(focus: The postwoman delivers)_
  - Is your brother at home? _(focus: Is your brother)_
  - Rarely does Grandpa miss his evening walk. _(focus: does Grandpa miss)_
  - Never have we had so much rain. _(focus: have we had)_
  - Not only did Meera win the race, but she also broke the record. _(focus: did Meera win)_
  - "I love mango ice cream." "So do I!" _(focus: So do I)_
  - "I can't whistle." "Neither can Ravi." _(focus: Neither can Ravi)_

### 2.4.15 Word Order in Statements

- **Pages:** Statements Keep the Subject First · The Statement Order · Putting the Parts Together · Don't Leave Out I or We · Don't Drop the Subject · A Question Inside a Statement · Can You Tell Me …? · Statement Order: Recap
- **Key takeaways:** Statement order: subject, verb, the rest. · Who, does what, to what, then how, where, when. · Line the parts up in order. · Only commands leave out the subject. · For weather, time and distance, use it. · Inside a statement, no question order. · Polite questions use statement order too. · Subject first, once, every time.
- **Example sentences:**
  - My cousin bought a scooter last month. _(focus: My cousin bought a scooter)_
  - Our class visited the planetarium by bus on Friday. _(focus: Our class visited the planetarium)_
  - Went to the beach on Sunday.
  - It is raining in Mumbai. _(focus: It is raining)_
  - It is a long way to the station. _(focus: It is a long way)_
  - I know where Priya lives. _(focus: where Priya lives)_
  - Can you tell me what time the shop opens? _(focus: what time the shop opens)_
  - I wonder why the puppy is whimpering. _(focus: why the puppy is whimpering)_

### 2.4.16 Word Order in Questions

- **Pages:** Building a Question · Helper, Subject, Verb · No Helper? Use Do, Does or Did · Question Word First · Don't Forget the Helper · Asking About the Subject · Who Called? Or Who Did You Call? · Question Order: Recap
- **Key takeaways:** In most questions, the helper comes first. · Move the helper to the front. · Do, does, did + base form. · Question word, helper, subject, verb. · Wh- questions need a helper too. · Who or what is the subject? No do. · Subject question: no do. Object question: do. · Helper first, unless who is the subject.
- **Example sentences:**
  - Can your sister ride a bicycle? _(focus: Can your sister ride)_
  - Is the library open on Sundays? _(focus: Is the library)_
  - Have the guests arrived? _(focus: Have the guests arrived)_
  - Does your cat like fish? _(focus: Does your cat like)_
  - Did you finish the puzzle? _(focus: Did you finish)_
  - Where are you taking the puppy? _(focus: Where are you taking)_
  - When does the next ferry leave? _(focus: When does the next ferry leave)_
  - Where you bought this kite?
  - Who ate the last samosa? _(focus: Who ate)_
  - Who called Grandma?
  - Who did Grandma call?

### 2.4.17 Word Order in Negative Sentences

- **Pages:** Saying No · Not After the First Helper · Not After Be · No Helper? Use Don't, Doesn't or Didn't · Short Forms · No Double Negatives · Nobody, Nothing, Never · Negative Order: Recap
- **Key takeaways:** Not goes in one fixed place. · Helper, then not, then the main verb. · Am, is, are, was, were + not. · Do-word + not + base form. · Short forms are normal in speech. · One not is enough. · These words are already negative. · Put not in its place, and use it once.
- **Example sentences:**
  - The baby is not asleep yet. _(focus: is not)_
  - We have not finished our project. _(focus: have not finished)_
  - Tara will not forget your birthday. _(focus: will not forget)_
  - The shops were not crowded today. _(focus: were not crowded)_
  - My brother doesn't like okra. _(focus: doesn't like)_
  - We didn't hear the doorbell. _(focus: didn't hear)_
  - I don't know nothing about the trip.
  - Nobody was at the bus stop. _(focus: Nobody was)_
  - We have never seen a real tiger. _(focus: have never seen)_

### 2.5.1 Introduction to Sentence Classification

- **Pages:** Three Ways to Sort Sentences · Four Jobs a Sentence Can Do · The End Mark Shows the Kind · Saying Yes or Saying No · Four Ways to Build a Sentence · The Map of This Chapter · Sorting Sentences: Recap
- **Key takeaways:** Purpose, form and structure. · Tell, ask, command, exclaim. · Full stop, question mark, exclamation mark. · Affirmative says yes; negative says no. · Simple, compound, complex, compound-complex. · Purpose, form, structure, then fixing. · Every sentence can be sorted three ways.
- **Example sentences:**
  - Please pass the pickle jar. _(focus: Please pass the pickle jar)_
  - The guest room is ready.
  - The guest room is not ready.

### 2.5.2 Declarative Sentences

- **Pages:** Sentences That Tell · Facts, Opinions, Feelings and Plans · A Full Stop at the End · Statements That Ask for Things · In Writing, Use Question Order · Statement or Exclamation? · Statements: Recap
- **Key takeaways:** A statement tells something. · Statements tell four kinds of thing. · Short or long, a statement ends with a full stop. · A statement can be a request or a hint. · Speech can ask with a rising voice; writing can't. · A statement tells calmly. · Tell it, then end with a full stop.
- **Example sentences:**
  - The museum is closed on Mondays. _(focus: The museum is closed on Mondays)_
  - My grandmother still walks to the market every morning at six. _(focus: every morning at six.)_
  - I'd like a glass of water, please. _(focus: I'd like a glass of water)_
  - It's chilly in here. _(focus: It's chilly in here)_
  - Are you coming to the party? _(focus: Are you coming)_
  - The view from the hill is beautiful.
  - What a beautiful view this is!

### 2.5.3 Interrogative Sentences

- **Pages:** Sentences That Ask · Three Kinds of Question · Choice Questions · Short Answers Use the Helper · Short Answers With No · A Question Mark for Direct Questions Only · Direct or Inside a Statement? · Questions: Recap
- **Key takeaways:** Questions ask and end with a question mark. · Yes / no, wh-, and choice. · A choice question offers options with or. · Yes or no + pronoun + helper. · No + pronoun + helper + not. · A question inside a statement takes a full stop. · Only a direct question gets a question mark. · Know the kind, answer short, mark it right.
- **Example sentences:**
  - Have you fed the goldfish? _(focus: Have you fed the goldfish?)_
  - Shall we walk or take the bus? _(focus: walk or take the bus)_
  - "Does Ravi like football?" "Yes, he does." _(focus: Yes, he does)_
  - "Is the chemist open?" "No, it isn't." _(focus: No, it isn't)_
  - "Can your brother skate?" "No, he can't." _(focus: No, he can't)_
  - I wonder where the cat is hiding. _(focus: I wonder where the cat is hiding.)_
  - Where is the cat hiding?
  - Tell me where the cat is hiding.

### 2.5.4 Imperative Sentences

- **Pages:** Sentences That Tell Someone to Act · What Commands Do · Instructions in Order · Don't + Base · Let's for Suggestions · Add Please · Command or Polite Request? · Commands: Recap
- **Key takeaways:** Commands start with the base form. · Orders, instructions, advice and more. · Recipes and directions are commands. · Negative command: Don't + base. · Let's + base includes you and me. · Please makes a command polite. · Could you…? sounds softer. · Base verb first; add please to be polite.
- **Example sentences:**
  - Stir the dal gently. _(focus: Stir)_
  - Fold the paper in half, then cut along the line. _(focus: Fold, cut)_
  - Don't feed the monkeys. _(focus: Don't feed)_
  - Let's play carrom after dinner. _(focus: Let's play)_
  - Please wait here for a moment. _(focus: Please wait)_
  - Carry these bags upstairs.
  - Could you carry these bags upstairs, please?

### 2.5.5 Exclamatory Sentences

- **Pages:** Sentences That Show Strong Feeling · What a / an + Adjective + Noun · What + Plural or Uncountable Noun · How + Adjective or Adverb · Not Question Order · One Exclamation Mark · Other Ways to Exclaim · Exclamations: Recap
- **Key takeaways:** Exclamations show surprise, joy or wonder. · Singular noun: What a or What an. · No a or an with plurals or uncountables. · How + describing word, then subject and verb. · Subject before verb in exclamations. · One mark is enough. · Short phrases and strong commands can exclaim. · What or How, statement order, one mark.
- **Example sentences:**
  - What a noisy market this is! _(focus: What a noisy market)_
  - What an enormous watermelon! _(focus: What an enormous watermelon)_
  - What delicious mangoes these are! _(focus: What delicious mangoes)_
  - What awful weather we're having! _(focus: What awful weather)_
  - How quickly the holidays went! _(focus: How quickly)_
  - How beautiful is the sunset!
  - What a lucky escape we had! _(focus: What a lucky escape)_

### 2.5.6 Affirmative and Negative Sentences

- **Pages:** Yes-Sentences and No-Sentences · Negatives of Every Kind · Negative Questions · Some Becomes Any · Too Becomes Either; Already Becomes Yet · Nearly Negative Words · No Not With Hardly · Affirmative and Negative: Recap
- **Key takeaways:** Affirmative says it is so; negative says it isn't. · Statements, questions, commands, suggestions. · A negative question often expects yes. · Negative: any, not some. · Negative: either and yet. · Hardly, rarely, few: almost no. · Hardly is already nearly negative. · Change the sentence, and the words that go with it.
- **Example sentences:**
  - Our team didn't lose the match. _(focus: didn't lose)_
  - Isn't that your cousin over there? _(focus: Isn't that your cousin)_
  - Didn't you hear the doorbell? _(focus: Didn't you hear)_
  - We don't have any milk left. _(focus: any milk)_
  - I don't like bitter gourd either. _(focus: either)_
  - The guests haven't arrived yet. _(focus: yet)_
  - I could hardly see the stage from the back row. _(focus: hardly)_
  - Few shops stay open after ten. _(focus: Few shops)_
  - I can't hardly hear you.

### 2.5.7 Simple Sentences

- **Pages:** One Clause, One Sentence · Count the Subject–Verb Pairs · Short and Simple · Two Subjects, One Verb · One Subject, Two Verbs · Long but Simple · Simple or Not? · Simple Sentences: Recap
- **Key takeaways:** A simple sentence has one clause. · One pair: one clause. · A clause can be very short. · Two subjects sharing a verb: still simple. · Two verbs sharing a subject: still simple. · Phrases add length, not clauses. · A second subject means a second clause. · Count the pairs to check.
- **Example sentences:**
  - The peacock spread its feathers. _(focus: The peacock, spread)_
  - My uncle drives a tractor on the farm. _(focus: My uncle drives)_
  - Our neighbour's rooster crows at dawn. _(focus: Our neighbour's rooster crows)_
  - Ravi and Asha sang at the festival. _(focus: Ravi and Asha sang)_
  - The children laughed and clapped. _(focus: laughed and clapped)_
  - After a long day at the fair, the tired children fell asleep in the car. _(focus: the tired children fell asleep)_
  - Dad and I washed and dried the dishes.
  - Dad washed the dishes, and I dried them.

### 2.5.8 Compound Sentences

- **Pages:** Two Sentences Joined as Equals · Seven Joining Words · A Comma Before the Joining Word · A Semicolon Can Join Them · Compound or Simple? · Each Half Can Stand Alone · Compound Sentences: Recap
- **Key takeaways:** Two independent clauses make a compound sentence. · For, and, nor, but, or, yet, so. · Clause, comma, joining word, clause. · A semicolon joins two close ideas. · A second subject means compound. · Cover the joining word and test both halves. · Two equal clauses, joined.
- **Example sentences:**
  - The bus was late, so we took an auto. _(focus: The bus was late, we took an auto)_
  - Nisha practised every day, yet she felt nervous. _(focus: yet she felt nervous)_
  - The lights went out; everyone gasped. _(focus: The lights went out; everyone gasped)_
  - Arun cooked, and Meera washed up.
  - Arun cooked and washed up.
  - We can take the train, or we can drive. _(focus: we can drive)_

### 2.5.9 Complex Sentences

- **Pages:** A Main Clause and a Dependent Clause · Words That Start a Dependent Clause · It Can't Stand Alone · Dependent Clause First: Add a Comma · Dependent Clause Last: Usually No Comma · Who and Which Clauses · Complex or Compound? · Complex Sentences: Recap
- **Key takeaways:** One clause leans on the other. · Because, when, if, although, while, until. · A dependent clause leaves you waiting. · Dependent first? Comma after it. · Dependent last? Usually no comma. · A who or which clause can be dependent too. · Equal halves: compound. A leaning clause: complex. · A main clause and a dependent clause.
- **Example sentences:**
  - The match stopped because the floodlights failed. _(focus: because the floodlights failed)_
  - If it rains tomorrow, the picnic is off. _(focus: If it rains tomorrow)_
  - When the guests arrive, we will serve the snacks. _(focus: When the guests arrive,)_
  - We will serve the snacks when the guests arrive. _(focus: when the guests arrive)_
  - The girl who won the quiz lives next door. _(focus: who won the quiz)_
  - It was cold, so we lit a fire.
  - Because it was cold, we lit a fire.

### 2.5.10 Compound-Complex Sentences

- **Pages:** Two Main Clauses and a Dependent Clause · The Recipe · Four Structures Side by Side · Count the Clauses · Spot the Type · Add a Dependent Clause · Add a Main Clause · Compound-Complex: Recap
- **Key takeaways:** Compound plus complex. · At least two main clauses, at least one dependent. · Count main and dependent clauses. · Find each pair, then test it. · Two that stand, one that leans. · Compound + dependent clause. · Complex + another main clause. · Count, test, then build.
- **Example sentences:**
  - When the bell rang, the students packed up, and the teacher wiped the board. _(focus: When the bell rang, the students packed up, the teacher wiped the board)_
  - I wanted to swim, but the pool was closed because it was being cleaned. _(focus: because it was being cleaned)_
  - Ravi stayed home because he was ill, so Asha brought him his homework. _(focus: because he was ill)_
  - If it rains, we will stay in, or we will visit the museum. _(focus: If it rains)_
  - After the storm passed, the shops opened, and people came out. _(focus: After the storm passed)_
  - Although the film was long, the children loved it, and they asked to watch it again. _(focus: and they asked to watch it again)_

### 2.5.11 Sentence Fragments

- **Pages:** Pieces That Break Off · -ing Fragments · Fixing an -ing Fragment · Add-On Fragments · Fixing an Add-On Fragment · Two Ways to Fix a Fragment · Speech or Writing? · Fragments: Recap
- **Key takeaways:** Some fragments break off from their sentence. · An -ing phrase alone is not a sentence. · Join the -ing phrase to its sentence. · Such as, especially, for example: watch out. · Join the add-on with a comma. · Join it, or give it a subject and verb. · Short answers are fine when talking. · Find the piece that broke off and fix it.
- **Example sentences:**
  - We waited at the gate. Hoping to see the elephants. _(focus: Hoping to see the elephants.)_
  - Searching everywhere for the lost key. _(focus: Searching everywhere for the lost key.)_
  - Meera practised every evening. Hoping to win the prize.
  - Such as kites and marbles. _(focus: Such as kites and marbles.)_
  - Especially on Sundays. _(focus: Especially on Sundays.)_
  - We grow many fruits. Such as mangoes and guavas.
  - "Where are you going?" "To the library."
  - I am going to the library.

### 2.5.12 Run-on Sentences

- **Pages:** Two Sentences Squashed Together · Fused Sentences · Comma Splices · Fix 1: A Full Stop · Fix 2: A Comma and a Joining Word · Fix 3: A Semicolon · Fix 4: Make One Part Depend · Run-ons: Recap
- **Key takeaways:** A run-on joins sentences the wrong way. · No mark at all between two sentences. · A comma alone can't join two sentences. · Split it into two sentences. · Comma + and, but or so. · A semicolon joins two close sentences. · Because, when or although turns one half into a dependent clause. · Spot the squash, then choose a fix.
- **Example sentences:**
  - The rain stopped the children ran outside. _(focus: The rain stopped, the children ran outside)_
  - My brother loves cricket he plays every evening. _(focus: he plays every evening)_
  - The bakery was shut, we went home hungry. _(focus: The bakery was shut, we went home hungry.)_
  - The milkman rang the bell. Mum opened the door. _(focus: The milkman rang the bell. Mum opened the door.)_
  - The library was full, so we sat on the steps. _(focus: so we sat on the steps)_
  - The road was flooded; the buses stopped running. _(focus: The road was flooded; the buses stopped running.)_
  - Because the alarm didn't ring, I overslept. _(focus: Because the alarm didn't ring)_

### 2.5.13 Complete and Incomplete Sentences

- **Pages:** Is the Sentence Complete? · The Completeness Checklist · Checking a Sentence · A Missing Helper · To + Verb Alone · A Missing Complement · A Missing Object · Complete Sentences: Recap
- **Key takeaways:** A complete sentence has everything it needs. · Four checks for every sentence. · Run every check. · -ing needs is, am or are. · To + verb isn't a finite verb. · A linking verb needs a complement. · Some verbs need an object. · Check all four before you finish.
- **Example sentences:**
  - The farmer is planting rice. _(focus: The farmer, is planting, rice)_
  - Grandma is knitting a sweater for me. _(focus: is knitting)_
  - My cousin going to Delhi tomorrow.
  - To win the cup next year.
  - The soup tastes.
  - Ravi really enjoys.

### 2.5.14 Sentence Construction and Transformation – Introduction

- **Pages:** Changing One Kind Into Another · Statement to Question · Statement to Exclamation · Two Sentences Into One · More Ways to Combine · Simple to Compound · Compound to Complex · Transforming Sentences: Recap
- **Key takeaways:** Change the kind, keep the meaning. · Move the helper, or add do, does or did. · What a… or How…, then statement order. · Turn one sentence into a describing word. · A phrase can carry a whole sentence. · Join two simple sentences with so, and or but. · Swap so for because. · Pick the kind you need, then rebuild.
- **Example sentences:**
  - Does the museum open at ten? _(focus: Does the museum open)_
  - Has the plumber fixed the tap? _(focus: Has the plumber)_
  - What a beautiful day it is! _(focus: What a beautiful day)_
  - How cold the water is! _(focus: How cold)_
  - The tall boy plays basketball. _(focus: The tall boy)_
  - My cousin, a doctor, lives in Pune. _(focus: a doctor)_
  - The shop on the corner sells kites. _(focus: on the corner)_
  - It started to rain, so we went inside. _(focus: so we went inside)_
  - Because the drizzle turned to rain, we went indoors. _(focus: Because the drizzle turned to rain)_

### 3.1.1 Introduction to Tense and Time

- **Pages:** When Did It Happen? · Tense Isn't Always Time · Three Times · Four Aspects · Twelve Tenses · Time Words as Clues · What Lies Ahead in Tenses · Tense and Time: Recap
- **Key takeaways:** Tense shows time with the verb form. · A present form can talk about the future. · Past, present and future. · Simple, continuous, perfect, perfect continuous. · Three times times four aspects. · Time words point to a tense. · Tenses first, then choosing and fixing. · Form, aspect, then time words.
- **Example sentences:**
  - My grandmother visited the old temple yesterday. _(focus: visited)_
  - The school bus leaves at 7.30 tomorrow. _(focus: leaves)_

### 3.1.2 Present Simple

- **Pages:** Habits, Facts and States · Habits and Routines · Time Words for Habits · Facts and General Truths · Permanent Situations · States · Present Simple: Recap
- **Key takeaways:** Base form, or -s after he, she, it. · Things we do again and again. · Usually, every day, on Saturdays. · Things that are always true. · Long-term situations use the present simple. · Know, love, own: present simple. · Habits, facts and states.
- **Example sentences:**
  - Ravi delivers newspapers every morning. _(focus: delivers)_
  - Our family eats idli on Sundays. _(focus: eats)_
  - My aunt usually walks to the office. _(focus: usually walks)_
  - Dad cooks dinner on Saturdays. _(focus: cooks dinner on Saturdays)_
  - Water freezes at zero degrees Celsius. _(focus: freezes)_
  - My uncle works at a bank in Pune. _(focus: works)_
  - Ananya loves spicy food. _(focus: loves)_
  - I understand the question now. _(focus: understand)_

### 3.1.3 Present Continuous

- **Pages:** Happening Now · Right Now · Around Now: Just for a While · Changing Situations · Habit or Now? · Long-Term or Just for Now? · Present Continuous: Recap
- **Key takeaways:** Am, is or are + -ing. · In progress at this moment. · Temporary situations use the continuous. · Getting, growing, rising: change in progress. · Habit: simple. Now: continuous. · Long-term: simple. Temporary: continuous. · Now, around now, and changing.
- **Example sentences:**
  - Look, the monkeys are stealing our bananas! _(focus: are stealing)_
  - Grandpa is feeding the parrots right now. _(focus: is feeding)_
  - My cousin is staying with us this week. _(focus: is staying)_
  - Arun is learning to drive these days. _(focus: is learning)_
  - The days are getting shorter. _(focus: are getting shorter)_
  - Our little town is growing fast. _(focus: is growing)_
  - Meera walks to school.
  - Meera is walking to school.
  - My father works in Chennai.
  - My father is working in Chennai this month.

### 3.1.4 Present Perfect

- **Pages:** The Past Connected to Now · Experiences: Ever and Never · A Result Now · Unfinished Time · For and Since · Been or Gone? · Present Perfect: Recap
- **Key takeaways:** Have or has + past participle. · Ever and never: in your life so far. · Past action, present result. · Today, this week, this year: not over yet. · For a length; since a starting point. · Gone: still there. Been: and back again. · Past actions that matter now.
- **Example sentences:**
  - Oh no, I have lost my house key! _(focus: have lost)_
  - Have you ever eaten jackfruit? _(focus: Have you ever eaten)_
  - My grandmother has never flown in a plane. _(focus: has never flown)_
  - Someone has broken the classroom window. _(focus: has broken)_
  - I have drunk three glasses of water today. _(focus: have drunk)_
  - We have lived in this flat for six years. _(focus: have lived, for six years)_
  - Asha has known Meera since 2019. _(focus: has known, since 2019)_
  - Aunt Rekha has gone to Delhi.
  - Aunt Rekha has been to Delhi.

### 3.1.5 Present Perfect Continuous

- **Pages:** An Activity Up to Now · Started in the Past, Still Going On · How Long…? · A Recent Activity, a Visible Result · The Activity or the Result? · How Many? Use the Present Perfect · Present Perfect Continuous: Recap
- **Key takeaways:** Have / has been + -ing. · For or since + an activity that continues. · How long asks about the duration. · We can see the effect now. · Activity: continuous. Result: simple. · Counting? No continuous. · An activity up to now.
- **Example sentences:**
  - It has been drizzling since the morning. _(focus: has been drizzling, since the morning)_
  - Nikhil has been tuning his guitar for twenty minutes. _(focus: has been tuning, for twenty minutes)_
  - How long have you been waiting for the bus? _(focus: have you been waiting)_
  - Your hands are muddy. Have you been gardening? _(focus: Have you been gardening)_
  - I'm out of breath because I have been running. _(focus: have been running)_
  - I have been reading the novel all afternoon.
  - I have read three chapters of the novel.
  - Dad has written four emails this morning. _(focus: has written four emails)_

### 3.1.6 Past Simple

- **Pages:** Finished and Done · Finished Time, Finished Action · One Thing After Another · Past Time Words · Past Habits · Finished Time or Connected to Now? · No Present Perfect With a Past Time · Past Simple: Recap
- **Key takeaways:** A finished action at a finished time. · Regular -ed, or an irregular form. · A sequence uses the past simple. · These words point to the past simple. · The past simple can show a past habit. · A past time: past simple. Now: present perfect. · Yesterday, ago, last week: past simple only. · Finished time, past simple.
- **Example sentences:**
  - The Diwali fair ended on Sunday night. _(focus: ended)_
  - Grandpa planted this mango tree in 1990. _(focus: planted)_
  - We took the night train to Kolkata. _(focus: took)_
  - She opened the box, smiled and hugged her brother. _(focus: opened, smiled, hugged)_
  - As children, we walked to school every day. _(focus: walked)_
  - I lost my bus pass last week.
  - I have lost my bus pass.
  - We saw the new film on Saturday. _(focus: saw)_

### 3.1.7 Past Continuous

- **Pages:** In Progress in the Past · At a Past Moment · Setting the Scene · Interrupted Actions · When or While? · Two Things at the Same Time · Past Continuous: Recap
- **Key takeaways:** Was or were + -ing. · At noon, at eight: in progress then. · Stories use it for the background. · Long action: continuous. Short interruption: simple. · When + the short action; while + the long one. · While + two past continuous verbs. · In progress in the past.
- **Example sentences:**
  - At eight o'clock last night, I was doing my homework. _(focus: was doing)_
  - At noon, the farmers were resting under the trees. _(focus: were resting)_
  - The wind was howling and the rain was beating on the roof. _(focus: was howling, was beating)_
  - I was having a bath when the doorbell rang. _(focus: was having a bath, rang)_
  - When the lights went out, we were eating dinner.
  - While we were eating dinner, the lights went out.
  - While Dad was cooking, Mum was setting the table. _(focus: was cooking, was setting)_

### 3.1.8 Past Perfect

- **Pages:** The Past Before the Past · Two Past Events · Explaining the Past · By the Time… · Already and Never Before · At That Moment or Before? · Past Perfect: Recap
- **Key takeaways:** Had + past participle: the earlier event. · The earlier one takes had. · Had + past participle gives the reason. · By the time + past simple, then had + past participle. · Had already; had never … before. · Had changes the order. · Had + past participle: what came first.
- **Example sentences:**
  - When we reached the station, the train had left. _(focus: had left)_
  - Meena had finished her lunch before the bell rang. _(focus: had finished)_
  - I recognised the man because I had seen him on TV. _(focus: had seen)_
  - By the time the doctor arrived, the fever had gone down. _(focus: had gone down)_
  - The guests had already eaten when we got home. _(focus: had already eaten)_
  - Asha had never seen the sea before that trip. _(focus: had never seen)_
  - When we arrived, the film started.
  - When we arrived, the film had already started.

### 3.1.9 Past Perfect Continuous

- **Pages:** How Long Before Then? · Up to a Past Moment · How Long Had…? · The Cause of a Past Result · Clues in the Past · Activity or Finished Result? · Past Perfect Continuous: Recap
- **Key takeaways:** Had been + -ing. · An activity that led up to a past moment. · How long had you been…? · Why was it so? Had been + -ing. · A past clue, and its cause. · Activity: continuous. Result: past perfect. · Duration and cause in the past.
- **Example sentences:**
  - We had been waiting for an hour when the bus finally came. _(focus: had been waiting, for an hour)_
  - The baby had been crying all morning before she fell asleep. _(focus: had been crying)_
  - How long had you been living in Shimla before you moved? _(focus: had you been living)_
  - Asha was tired because she had been running. _(focus: had been running)_
  - His eyes were sore because he had been reading in the dark. _(focus: had been reading)_
  - She had been painting the room, so her hands were blue.
  - She had painted the room, so it looked fresh.

### 3.1.10 Future Simple

- **Pages:** Will for the Future · Predictions · I Think … Will · Decisions Made Now · Promises and Offers · Shall I? Shall We? · Future Simple: Recap
- **Key takeaways:** Will + base form. · Will says what we expect. · I think and probably often come before will. · I'll…: a decision as you speak. · I'll help; I will call. · Shall I / we for offers and suggestions. · Will for predictions, decisions and offers.
- **Example sentences:**
  - The new metro line will open next year. _(focus: will open)_
  - Our team will win the final, I'm sure. _(focus: will win)_
  - I think Grandma will love this shawl. _(focus: will love)_
  - "The phone is ringing." "I'll answer it." _(focus: I'll answer it)_
  - I'll help you carry those bags. _(focus: I'll help)_
  - I promise I will call you tonight. _(focus: will call)_
  - Shall I open the window? _(focus: Shall I open)_
  - Shall we go for a walk after dinner? _(focus: Shall we go)_

### 3.1.11 Future Continuous

- **Pages:** In Progress in the Future · At a Future Moment · Around a Future Event · Asking About Plans Politely · A Request or a Question About Plans? · Will or Will Be + -ing? · Future Continuous: Recap
- **Key takeaways:** Will be + -ing. · At nine tonight, this time tomorrow. · Already happening when something else occurs. · Will you be + -ing…? sounds polite. · Will you…? asks; will you be…? checks plans. · One action: will. In progress: will be + -ing. · Will be + -ing for the future in progress.
- **Example sentences:**
  - This time tomorrow, we'll be flying to Goa. _(focus: we'll be flying)_
  - At nine tonight, Dad will be driving home from work. _(focus: will be driving)_
  - When you arrive, I will be waiting at the gate. _(focus: will be waiting)_
  - Will you be using the laptop tonight? _(focus: Will you be using)_
  - Will you lend me your bicycle?
  - Will you be using your bicycle tomorrow?
  - I will call you at six.
  - I will be cooking dinner at six.

### 3.1.12 Future Perfect

- **Pages:** Done Before a Future Time · By + a Future Time · Looking Back From the Future · By the Time + Present Simple · No Will After By the Time · Finished by Then or Happening Then? · Future Perfect: Recap
- **Words shown in more than one job:** will
- **Key takeaways:** Will have + past participle. · By Friday, by 2030, by noon. · Imagine the future, then look back. · By the time you get home…. · By the time + present, not will. · Will have: before. Will: at that time. · Finished before a future time.
- **Example sentences:**
  - By Friday, I will have finished my science project. _(focus: will have finished)_
  - By 2030, the city will have built a new airport. _(focus: will have built)_
  - By the end of the trip, we will have visited five forts. _(focus: will have visited)_
  - By the time you get home, I will have cooked dinner. _(focus: you get home, will have cooked)_
  - By the time you will arrive, the show will have started.
  - At ten, the film will have ended.
  - At ten, the film will end.

### 3.1.13 Future Perfect Continuous

- **Pages:** How Long by Then? · Up to a Future Point · Counting the Time Ahead · Building the Form · How Long or How Much? · Use It Sparingly · Future Perfect Continuous: Recap
- **Key takeaways:** Will have been + -ing. · For + a length, by + a future point. · A milestone in the future. · Four parts in a fixed order. · How long: continuous. How much: perfect. · A rare tense, for stressing duration. · How long, up to a future point.
- **Example sentences:**
  - By June, Mrs Rao will have been teaching for twenty years. _(focus: will have been teaching, for twenty years)_
  - At six, the players will have been training for three hours. _(focus: will have been training)_
  - Next month, my grandparents will have been living in this village for fifty years. _(focus: will have been living)_
  - By noon, I will have been typing for three hours.
  - By noon, I will have typed ten pages.
  - By midnight, the wedding guests will have been dancing for five hours. _(focus: will have been dancing)_

### 3.1.14 Tense Identification and Selection

- **Pages:** Name It, Then Choose It · The Tense Decoder · Decoding a Sentence · Time Words Point the Way · Choosing From the Clue · Four Choices to Remember · Naming and Choosing Tenses: Recap
- **Key takeaways:** Form names it; time and meaning choose it. · Helper + verb form = tense. · Find the helper, then the verb form. · Let the time word guide you. · Look! means now. · Most tense choices are one of these four. · Decode the form, read the clues, choose.
- **Example sentences:**
  - The guests had already gone home when we arrived. _(focus: had already gone)_
  - My sister has been learning karate since March. _(focus: has been learning)_
  - Look! The puppy is chasing its tail. _(focus: is chasing)_

### 3.1.15 Tense Consistency

- **Pages:** Stay in One Time Frame · A Past Story Stays in the Past · A Description Stays in the Present · Slipping Into the Present · Slipping Into the Past · Change Tense When the Time Changes · Tense Consistency: Recap
- **Key takeaways:** Pick a time and keep it. · Story in the past: every action in the past. · Describing what is true now: keep it present. · Don't let a past story jump to now. · Don't let a present habit jump to the past. · A new time, a new tense. · One time frame unless the time changes.
- **Example sentences:**
  - We reached the beach, spread our mat and opened the picnic basket. _(focus: reached, spread, opened)_
  - The bell rang, the doors opened, and the students rushed out. _(focus: rang, opened, rushed)_
  - Our village has a big pond, and children swim in it every summer. _(focus: has, swim)_
  - Yesterday we went to the market, and Mum buys mangoes.
  - Every evening Grandpa sits on the porch and counted the birds.
  - As a child I lived in Pune, but now I live in Chennai. _(focus: lived in Pune, now I live)_

### 3.1.16 Sequence of Tenses

- **Pages:** One Clause Affects the Other · After a Past Main Verb, Shift Back · Realised, Hoped, Felt · Would: the Future in the Past · When, After, As Soon As + Present · No Will in the Time Clause · Sequence of Tenses: Recap
- **Key takeaways:** Clauses work together in time. · Knew, thought, hoped: shift the next verb back. · Earlier events shift to the past perfect. · Will looked at from the past becomes would. · Future time clause: present simple. · Until the storm passes, not will pass. · Let the main clause guide the other.
- **Example sentences:**
  - I thought it would rain, so I took an umbrella. _(focus: would rain)_
  - Asha knew that the shop closed at nine. _(focus: closed at nine)_
  - I realised that I had left my bag on the bus. _(focus: had left)_
  - We hoped the storm would pass by evening. _(focus: would pass)_
  - Back then, nobody knew that the tiny shop would become famous. _(focus: would become)_
  - As soon as the rain stops, we'll go out. _(focus: As soon as the rain stops)_
  - Please stay inside until the storm will pass.

### 3.1.17 Tenses in Questions and Negatives

- **Pages:** One Rule for Every Tense · The First Helper in Each Tense · Only the First Helper Moves · Do, Does, Did: Simple Tenses Only · Short Answers Use the Same Helper · Wh- Questions in Every Tense · Questions and Negatives: Recap
- **Key takeaways:** The first helper moves or takes not. · Find the first helper, then move it. · The other helpers stay put. · No helper? Add do. A helper already? No do. · Answer with the helper from the question. · Question word, first helper, subject, rest. · Find the first helper every time.
- **Example sentences:**
  - Have the twins packed their bags? _(focus: Have the twins packed)_
  - Have you been waiting long? _(focus: Have you been waiting)_
  - Did the postman come today? _(focus: Did the postman come)_
  - "Have you seen my glasses?" "No, I haven't." _(focus: No, I haven't)_
  - "Were they sleeping?" "Yes, they were." _(focus: Yes, they were)_
  - How long have you been learning the guitar? _(focus: have you been learning)_
  - Where had they parked the car? _(focus: had they parked)_

### 3.1.18 Present Tense for Future Arrangements

- **Pages:** Present Forms, Future Times · Fixed Arrangements · Diary Plans · Timetables and Schedules · Fixed Times · Arranged or Just Decided? · Present for the Future: Recap
- **Key takeaways:** Present forms can talk about the future. · Arranged plans: present continuous + a time. · If it's in the diary, use the continuous. · Trains, films, lessons: present simple. · Starts, opens, begins, lands. · Arranged: continuous. Just decided: will. · Arrangements and timetables use present forms.
- **Example sentences:**
  - We're meeting Asha at the café at six. _(focus: We're meeting)_
  - My cousins are arriving on Friday morning. _(focus: are arriving)_
  - I'm seeing the dentist on Tuesday. _(focus: I'm seeing)_
  - We're having a party next Saturday. _(focus: We're having)_
  - The train to Mysuru leaves at 7.15. _(focus: leaves)_
  - The exam starts at ten tomorrow. _(focus: starts)_
  - The film begins at 8.30 tonight. _(focus: begins)_
  - I'm playing badminton with Ravi tomorrow.
  - I'll play badminton with you tomorrow, then.

### 3.1.19 Different Ways of Expressing the Future

- **Pages:** Many Ways to Talk About the Future · Going To for Plans · Going To for What We Can See Coming · Will or Going To? · About To: Very Soon · Choosing a Future Form · Future Forms: Recap
- **Key takeaways:** Choose the future form that fits. · Decided before: going to. · Evidence now: going to. · Decided now: will. Decided before: going to. · Be about to + base: any second now. · Match the form to the meaning. · Plan, prediction, arrangement or timetable?
- **Example sentences:**
  - I'm going to learn to swim this summer. _(focus: I'm going to learn)_
  - Priya is going to study medicine. _(focus: is going to study)_
  - Watch out! That glass is going to fall. _(focus: is going to fall)_
  - I'll pick up some onions on the way home.
  - I'm going to buy a new bicycle with my savings.
  - Hurry, the film is about to start! _(focus: is about to start)_

### 3.1.20 Stative Verbs and Tense Restrictions

- **Pages:** States Across the Tenses · Present Perfect, Not Perfect Continuous · More States With For and Since · Past Simple, Not Past Continuous · Will, Not Will Be + -ing · Is or Is Being? · Stative Verbs: Recap
- **Key takeaways:** No -ing for states, in any tense. · Has owned, not has been owning. · Have had, has loved: perfect, not continuous. · Didn't understand, not wasn't understanding. · Will need, not will be needing. · Is: usually like that. Is being: acting that way now. · States stay simple in every tense.
- **Example sentences:**
  - I have known Meena since we were six. _(focus: have known)_
  - Grandpa has owned this shop for forty years. _(focus: has owned)_
  - She has always loved dancing. _(focus: has always loved)_
  - I have had this bicycle for three years. _(focus: have had)_
  - At that moment, I didn't understand the joke. _(focus: didn't understand)_
  - You will need a jacket tonight. _(focus: will need)_
  - My brother is silly.
  - My brother is being silly today.

### 3.1.21 Common Tense Errors

- **Pages:** Spot and Fix Tense Mistakes · A Finished Time Needs the Past Simple · Past Perfect Only for the Earlier Past · For a Length, Since a Start · Since Needs the Present Perfect · Now Needs the Continuous · No Will After When · Tense Mistake Checklist
- **Key takeaways:** Tense mistakes come in a few kinds. · Yesterday: past simple, not present perfect. · One past event: past simple. · For three years; since 2019. · Has worked since, not works since. · Look! is smiling, not smiles. · When the rain stops, not will stop. · Check the time, then the tense.
- **Example sentences:**
  - I have seen Ravi at the market yesterday.
  - I had gone to the cinema last night.
  - We have lived here since three years.
  - My uncle works at the bank since 2018.
  - Look! The baby smiles at you.
  - When the rain will stop, we will go out.

