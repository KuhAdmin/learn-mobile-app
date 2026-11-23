# Chapter 19 (4.4 Clauses): coverage brief for lesson generation

The 25 Clauses lessons are generated one after another, but each generation can't see the others. Earlier lessons already teach much of this chapter's ground:
- independent and dependent clauses, commas, fragments, run-ons, combining (2.5.8 to 2.5.14)
- every subordinating conjunction, one by one, and one joining word only (Chapter 17, 4-2-10 to 4-2-28)
- relative pronouns, relative adverbs, "Where Means In Which" (1-3-9, 2-2-11); "the room in which we sleep" (4-1-25); that and when as conjunction or relative (4-2-39)
- a question inside a statement (2.4.15); asked if / whether (3.5.9); whether (4-2-23)
- by the time (3.1); than I do (3.2)
- participial phrases (4-3-9); phrases vs clauses, "a girl with green eyes / who has green eyes" (4-3-15)

Never show after, before, since, because, so, as, even, if or except in a new job. In this chapter each appears only in a job it already has.

The chapter titles overlap heavily:
- the adverb-clause topics (4-4-10 to 4-4-18) and the Chapter 17 conjunction lessons
- Adjective, Relative, Defining and Non-Defining Clauses, and Relative Pronouns and Adverbs
- Reduced Relative Clauses and Participial Phrases (4-3-9)
- Phrases vs Clauses (4-4-24) and Phrases vs Clauses (4-3-15)

So each adverb-clause lesson owns connectors that Chapter 17 did not teach, and recalls the old ones in one line. This brief gives each topic its own job.

## How to use it

1. Generate the topics in order, 4-4-1 to 4-4-25. For each one, give the generation prompt (`Prompt/_learn_lesson_generation_prompt_v2.md`):
   - the topic input, with `topic_id` `4-4-<n>`
   - that topic's **Scope** entry below
   - the **Rule to paste into the generation prompt** section
   - the whole **Already covered** section
2. Save the JSON as `assets/Content generation/Chapter19/4-4-<n>.md`. The file name must be the topic id.
3. Check the whole batch, and repeat the fix list until it is clean:
   `npm run lesson:overlap -- --all "assets/Content generation/Chapter19" --with "assets/Content generation/Chapter3" --with "assets/Content generation/Chapter4" --with "assets/Content generation/Chapter5" --with "assets/Content generation/Chapter6" --with "assets/Content generation/Chapter7" --with "assets/Content generation/Chapter8" --with "assets/Content generation/Chapter9" --with "assets/Content generation/Chapter10" --with "assets/Content generation/Chapter11" --with "assets/Content generation/Chapter12" --with "assets/Content generation/Chapter13" --with "assets/Content generation/Chapter14" --with "assets/Content generation/Chapter15" --with "assets/Content generation/Chapter16" --with "assets/Content generation/Chapter17" --with "assets/Content generation/Chapter18" --strict`
   `npx jest src/lessons/__tests__/drafts.test.ts`
   Each draft is compared with every app lesson, the Chapter 3–18 drafts, and the Chapter 19 drafts before it.
4. Refresh **Already covered**, so the next lesson sees this one:
   `npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter19_Coverage_Brief.md" --with "assets/Content generation/Chapter3" --with "assets/Content generation/Chapter4" --with "assets/Content generation/Chapter5" --with "assets/Content generation/Chapter6" --with "assets/Content generation/Chapter7" --with "assets/Content generation/Chapter8" --with "assets/Content generation/Chapter9" --with "assets/Content generation/Chapter10" --with "assets/Content generation/Chapter11" --with "assets/Content generation/Chapter12" --with "assets/Content generation/Chapter13" --with "assets/Content generation/Chapter14" --with "assets/Content generation/Chapter15" --with "assets/Content generation/Chapter16" --with "assets/Content generation/Chapter17" --with "assets/Content generation/Chapter18" --with "assets/Content generation/Chapter19"`

## What Chapters 1–18 already teach about clauses

- **1-3-9, 2-2-11:** who, whom, which, that, whose; where, when, why; Where Means In Which.
- **2.4.2, 2.4.15:** subjects, commands hide you; a question inside a statement.
- **2.5.8 to 2.5.14:** compound, complex, compound-complex; commas; fragments; run-ons; combining.
- **3.1:** by the time; time clauses with the present.
- **4-1-25:** the room we sleep in / in which we sleep.
- **Chapter 17:** each conjunction, one joining word only, punctuation with however and that.
- **4-3-9, 4-3-15:** participial phrases; phrase or clause, the same idea both ways.

None of the Chapter 19 lessons re-teaches these. At most one short recap line, then the new step.

## Scope for each topic

Each entry says what the lesson owns, and what it must leave to another topic (record those in `coverage.cross_references`).

**4-4-1 Introduction to Clauses**: subject + finite verb; independent or dependent; a map by job (noun, adjective, adverb clauses).
**4-4-2 Independent Clauses**: the stand-alone test; questions and commands are independent; three independent clauses in a row.
**4-4-3 Dependent Clauses**: the three kinds of starter (subordinator, relative word, that / wh- / whether); a dependent clause inside another.
**4-4-4 Main Clauses and Subordinate Clauses**: remove the subordinate clauses to find the main one; put the main idea in the main clause; more than one subordinate clause.
**4-4-5 Noun Clauses**: a noun clause as the subject (What he said surprised us); after be (The problem is that …); after an adjective (I'm sure that …). Not here: that after verbs (4-2-39), whether (4-2-23), embedded questions (2.4.15).
**4-4-6 Adjective Clauses**: right after the noun it describes; after a pronoun (anyone who, something that, those who); keep it next to its noun.
**4-4-7 Relative Clauses**: the relative word as subject or object of its clause; the object pronoun can be dropped (the cake Mum baked); no extra pronoun (the book that I read, not … read it).
**4-4-8 Defining Relative Clauses**: tells which one; no commas; that, who or which; removing it changes the meaning.
**4-4-9 Non-Defining Relative Clauses**: extra information between commas; never that; which for a whole idea (He passed, which surprised everyone).
**4-4-10 Adverb Clauses of Time**: the moment / the minute; every time / each time; ever since. By the time (3.1) and Chapter 17 time words are recalled only.
**4-4-11 Adverb Clauses of Place**: where + clause; wherever; everywhere + clause; where after a verb or after a place noun.
**4-4-12 Adverb Clauses of Reason**: now that; seeing that / given that; in that (formal). Because, since and as are recalled only.
**4-4-13 Adverb Clauses of Purpose**: negative purpose with so that … won't / couldn't; lest (formal); for fear that. So that and in order that are recalled only.
**4-4-14 Adverb Clauses of Result**: so + adjective / adverb + that; such (a) + adjective + noun + that; so many / so much … that.
**4-4-15 Adverb Clauses of Condition**: the two halves (condition and result); a map of condition words (recall only); the comma, and the optional then. Not here: conditional types (Stage 4.5).
**4-4-16 Adverb Clauses of Concession**: however + adjective / adverb; no matter how / what / who; whatever / whoever / wherever. Although and even though are recalled only.
**4-4-17 Adverb Clauses of Comparison**: than + a full clause (than we expected); than usual / than ever / than expected; the more …, the more ….
**4-4-18 Adverb Clauses of Manner**: as if / as though; as if + past for something not true; the way (that).
**4-4-19 Relative Pronouns and Relative Adverbs in Clauses**: whose for things; no that after a preposition (in which, not in that); what is never a relative after a noun.
**4-4-20 Reduced Relative Clauses**: drop who / which + be (the man standing …); passive (written in …); with a prepositional phrase (the books on the shelf); an object relative can't be reduced.
**4-4-21 Reduced Adverb Clauses**: while / when + -ing; once / if / unless + past participle (once opened, if needed); the same-subject rule.
**4-4-22 Clause Position and Punctuation**: a clause in the middle, with commas on both sides; no commas around a noun clause; two dependent clauses in one sentence.
**4-4-23 Clause Combining**: combine with a relative clause; with a noun clause; choose the joiner that fits the meaning.
**4-4-24 Phrases vs Clauses**: turning a clause into a phrase (although → despite, when → on + -ing, so that → to + verb, who-clause → participle) and back. Not here: the test itself, or "the same idea both ways" (4-3-15).
**4-4-25 Clause Identification and Common Errors**: a method (count finite verbs, mark the clauses); naming each clause by its job; errors: an extra subject after a relative clause; a noun + relative clause with no main verb.

## Rule to paste into the generation prompt

> Do not reuse any sentence, focus word, page title or key takeaway listed under "Already covered", including Chapter 19 lessons generated before this one. Build on these lessons instead of re-teaching them, and choose new everyday example sentences. This also applies to question prompts and answer options: their sentences must be new too. Never demonstrate a word listed under "Words already shown doing more than one job" in more than one job again. Never highlight the same word (other than very short function words) in two different example sentences on one page.
>
> Highlight the whole clause ("who lives next door", "the moment the bell rang") rather than one word. In comparison blocks, don't start a comparison point with a word both examples share; start with "In the first sentence…". Don't use a dash, a colon or the word "as" in a comparison label, and a one-word label must appear in its example.
>
> Teach only what this topic's Scope entry owns. Leave everything under "Not here" to the topic named. Record it in `coverage.cross_references` as `{ "concept", "reason", "coverage" }`, with `coverage` one of `introduced_only`, `referenced_only`, `excluded`. Use no other fields.
>
> Learners already know complex sentences (2.5.9), every Chapter 17 conjunction, relative pronouns and adverbs (1-3-9, 2-2-11) and phrases vs clauses (4-3-15). Recall them in one short line at most.
>
> Every `quality_audit` entry (and every `assessment_audit` entry) is a plain string: `"passed"`, `"failed"` or `"review_required"`, not an object with notes.
>
> Every applicable learning dimension has `"applicability": "applicable"` and `"status": "covered"` (or `"introduced"`). It has its own dimension assessment of 2–4 questions, placed right after the dimension's last page (`after_page_id`).
>
> End with a final assessment of at least 4 questions across the lesson's objectives, longer than any dimension assessment. Ask each question once: as an in-page practice question, in one dimension assessment, or in the final assessment. Never use an in-page practice question in an assessment.
>
> Start explanations with the reason, not a verdict ("Correct. …"); the app shows "Correct!" or "Not quite." itself.
>
> In `identify` questions, `accepted_answers` must answer the prompt: the clause itself ("who lives next door"), not "adjective clause". Include natural variants.
>
> The app compares typed answers (`identify`, `fill_blank`, `sentence_correction`) without case, apostrophes or end punctuation, so commas can't be tested in typed answers. Use `multiple_choice` for comma questions.
>
> Every `highlight` is an exact substring of its sentence.

<!-- GENERATED BELOW: npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter19_Coverage_Brief.md" --with "assets/Content generation/Chapter3" --with "assets/Content generation/Chapter4" --with "assets/Content generation/Chapter5" --with "assets/Content generation/Chapter6" --with "assets/Content generation/Chapter7" --with "assets/Content generation/Chapter8" --with "assets/Content generation/Chapter9" --with "assets/Content generation/Chapter10" --with "assets/Content generation/Chapter11" --with "assets/Content generation/Chapter12" --with "assets/Content generation/Chapter13" --with "assets/Content generation/Chapter14" --with "assets/Content generation/Chapter15" --with "assets/Content generation/Chapter16" --with "assets/Content generation/Chapter17" --with "assets/Content generation/Chapter18" --with "assets/Content generation/Chapter19" -->

## Already covered

Do not reuse any sentence, focus word, page title or key takeaway listed below. Build on these lessons instead of re-teaching them.

**Words already shown doing more than one job** (don't demonstrate them that way again): careful, after, text, book, play, water, answer, poor, clean, dry, fast, hard, early, inside, before, light, watch, patient, drink, help, dance, brush, plant, empty, straight, since, around, cook, late, glass, iron, silver, cousins, daily, will, must, because, so, as, even, if, except.

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

### 3.2.1 Introduction to Auxiliary Verbs

- **Pages:** Verbs That Help · Primary and Modal Auxiliaries · Primary or Modal? · Four Jobs of a Helper · One Helper, Many Jobs · What This Chapter Covers · Auxiliary Verbs: Recap
- **Key takeaways:** A helper works with a main verb. · Be, have, do; and the modals. · Is, has and does are primary; must is modal. · Tenses, questions, not, and standing in. · The same helper can do several jobs. · Each helper, then each job. · Helpers build, ask, deny and stand in.
- **Example sentences:**
  - The children have finished their lunch. _(focus: have finished)_
  - My grandmother is knitting a shawl. _(focus: is knitting)_
  - You must wear a helmet on the scooter. _(focus: must wear)_
  - "Has Ravi called?" "No, he hasn't." _(focus: Has Ravi called, No, he hasn't)_

### 3.2.2 Primary Auxiliary – Be

- **Pages:** Be as a Helper · Eight Forms of Be · Be, Been and Being · Two Jobs: -ing and Past Participle · Be + To for Formal Plans · Short Forms of Be · 's for Is or Has? · Helper Be: Recap
- **Key takeaways:** Be helps make continuous tenses and more. · Am, is, are, was, were, be, been, being. · Will be, has been, is being. · Be + -ing: continuous. Be + past participle: passive. · Is to, are to: arranged or instructed. · I'm, you're, she's, they're. · Look at the next word. · Eight forms, three jobs, two meanings of 's.
- **Example sentences:**
  - The guests are waiting in the hall. _(focus: are waiting)_
  - The road will be closed tomorrow. _(focus: will be closed)_
  - Grandpa has been sleeping all afternoon. _(focus: has been sleeping)_
  - The old bridge is being repaired. _(focus: is being repaired)_
  - Fresh bread is baked here every morning. _(focus: is baked)_
  - The prime minister is to visit our city next month. _(focus: is to visit)_
  - All students are to wear their ID cards. _(focus: are to wear)_
  - She's reading a comic.
  - She's read that comic twice.

### 3.2.3 Primary Auxiliary – Have

- **Pages:** Have as a Helper · Have + Past Participle · Have Got for Owning · Have Got for Illnesses · Do You Have or Have You Got? · Short Forms of Have · 'd for Had or Would? · Helper Have: Recap
- **Key takeaways:** Have + past participle, and have got. · Have and has for perfect tenses. · Has got, have got: owning. · I've got a cold. · Both are correct. · I've, she's, they'd. · Look at the next verb. · Perfect tenses, have got, and short forms.
- **Example sentences:**
  - Grandma has baked a cake for us. _(focus: has baked)_
  - Our class has planted fifty saplings this year. _(focus: has planted)_
  - My cousin has got a new scooter. _(focus: has got)_
  - We've got three goats on the farm. _(focus: We've got)_
  - I've got a sore throat. _(focus: I've got)_
  - Do you have a spare pencil?
  - Have you got a spare pencil?
  - She'd already eaten.
  - She'd love a cup of tea.

### 3.2.4 Primary Auxiliary – Do

- **Pages:** Do in the Simple Tenses · Do, Does or Did? · Matching the Subject · Only the Base Form After Do · Don't Be… · No Do With Be Anywhere Else · Helper Do: Recap
- **Key takeaways:** No other helper? Do helps. · Subject and time decide. · Do the twins; did your team. · Do carries the -s and the past. · Negative commands with be use don't. · Are you ready?, not Do you be ready? · Do carries the time; the verb stays plain.
- **Example sentences:**
  - Does your uncle grow vegetables? _(focus: Does your uncle grow)_
  - Do the twins walk to school? _(focus: Do the twins walk)_
  - Did your team win the match? _(focus: Did your team win)_
  - She doesn't eat mushrooms. _(focus: doesn't eat)_
  - Don't be late for the bus. _(focus: Don't be late)_
  - Don't be scared of the dog. _(focus: Don't be scared)_
  - Are you ready for the test? _(focus: Are you ready)_

### 3.2.5 Auxiliary Verbs in Questions

- **Pages:** Which Helper Makes the Question? · Three Steps to the Right Helper · Steps One and Two · Step Three: Add Do · Reply Questions Show Interest · More Reply Questions · Helpers in Questions: Recap
- **Key takeaways:** Find the helper, or add one. · Helper? Be? Otherwise do. · Move the helper, or move be. · No helper and no be: add do. · Helper + pronoun: Oh, have you? · Use do when there is no helper. · Choose the helper in three steps.
- **Example sentences:**
  - Has the electrician come yet? _(focus: Has the electrician come)_
  - Can your cousin speak Tamil? _(focus: Can your cousin speak)_
  - Is the museum far from here? _(focus: Is the museum)_
  - Does the bakery sell samosas? _(focus: Does the bakery sell)_
  - "I've been to Japan." "Oh, have you?" _(focus: Oh, have you)_
  - "My aunt keeps bees." "Does she? How interesting!" _(focus: Does she)_
  - "We weren't at home." "Weren't you?" _(focus: Weren't you)_

### 3.2.6 Auxiliary Verbs in Negative Sentences

- **Pages:** Short Forms and Choices · Two Ways to Shorten · Both Are Correct · I'm Not, Never Amn't · Aren't I? in Questions · Haven't Got · Haven't Got or Don't Have? · Helpers in Negatives: Recap
- **Key takeaways:** Negative short forms can vary. · Shorten the helper, or shorten not. · He's not or he isn't. · Am not has only one short form. · I am becomes aren't I in questions. · Have got: haven't got. · With got: haven't. Without got: don't. · Know the short forms and the have choices.
- **Example sentences:**
  - Our team isn't playing today. _(focus: isn't playing)_
  - She's not coming to the party. _(focus: She's not)_
  - She isn't coming to the party. _(focus: She isn't)_
  - I'm not sleepy at all. _(focus: I'm not)_
  - Aren't I lucky to have you as a friend? _(focus: Aren't I)_
  - We haven't got any bread for breakfast. _(focus: haven't got)_
  - Arjun hasn't got a bicycle.
  - Arjun doesn't have a bicycle.

### 3.2.7 Auxiliary Verbs in Short Answers

- **Pages:** Answering With a Helper · No Short Form in a Yes-Answer · No-Answers Can Be Short · Short Answers With There · Short Answers With Have Got · Agreeing: I Do Too · Disagreeing: I Don't · Short Answers: Recap
- **Key takeaways:** Short answers repeat the helper. · Yes, I am; never Yes, I'm. · No, it isn't is fine. · Yes, there is; no, there aren't. · Yes, I have; no, she hasn't. · Helper + too to agree. · Change the helper to disagree. · The helper does the answering.
- **Example sentences:**
  - "Have you fed the cat?" "Yes, I have." _(focus: Yes, I have)_
  - "Are you ready?" "Yes, I am." _(focus: Yes, I am)_
  - "Is the lift working?" "No, it isn't." _(focus: No, it isn't)_
  - "Is there any rice left?" "Yes, there is." _(focus: Yes, there is)_
  - "Are there any buses tonight?" "No, there aren't." _(focus: No, there aren't)_
  - "Has Meena got a sister?" "No, she hasn't." _(focus: No, she hasn't)_
  - "I enjoy rainy days." "I do too!" _(focus: I do too)_
  - "I like bitter gourd." "Really? I don't." _(focus: I don't)_
  - "We can't swim." "Oh, we can." _(focus: Oh, we can)_

### 3.2.8 Auxiliary Verbs for Emphasis

- **Pages:** Stress the Helper · Do, Does, Did + Base for Emphasis · Answering a Doubt · Stressing Other Helpers · Emphasis for Contrast · Polite Emphatic Commands · Emphasis: Recap
- **Key takeaways:** A stressed helper makes a point stronger. · Add do, and use the base form. · Emphatic do answers someone who doubts you. · Already a helper? Just stress it. · Didn't this, but did that. · Do + base: a warm invitation. · Add do, or stress the helper.
- **Example sentences:**
  - I do like your drawing! _(focus: I do like)_
  - She does work very long hours. _(focus: does work)_
  - We did try to call you. _(focus: did try)_
  - "You never help at home." "I do help! I washed the dishes." _(focus: I do help)_
  - I am listening, I promise! _(focus: I am listening)_
  - We have finished, honestly! _(focus: We have finished)_
  - I didn't break the vase, but I did move it. _(focus: did move)_
  - Do sit down and have some tea. _(focus: Do sit down)_
  - Do come again soon! _(focus: Do come)_

### 3.2.9 Auxiliary Verbs in Question Tags

- **Pages:** A Small Question at the End · Positive Sentence, Negative Tag · Negative Sentence, Positive Tag · No Helper? Use Do · Special Tags · Asking or Checking? · Question Tags: Recap
- **Key takeaways:** A tag turns a statement into a question. · Yes-sentence, no-tag. · No-sentence, yes-tag. · Plays → doesn't she? Went → didn't they? · Aren't I, shall we, will you. · Voice up: asking. Voice down: checking. · Flip the sentence; keep the helper.
- **Example sentences:**
  - The tea is too sweet, isn't it? _(focus: isn't it)_
  - You've met my uncle, haven't you? _(focus: haven't you)_
  - Ravi can't swim, can he? _(focus: can he)_
  - Your sister plays the flute, doesn't she? _(focus: doesn't she)_
  - They went home early, didn't they? _(focus: didn't they)_
  - The ferry leaves at five, doesn't it?
  - The film was brilliant, wasn't it?

### 3.2.10 Auxiliary Verb Combinations

- **Pages:** Two or Three Helpers Together · The Order of Helpers · Helpers in Order · Each Helper Chooses the Next Form · Following the Chain · Only the First Helper Shows Tense · Helper Combinations: Recap
- **Key takeaways:** Helpers line up in a fixed order. · Modal, have, be, be. · Must have; may be. · Base, past participle, -ing. · Each link sets the next. · The first helper agrees; the rest don't change. · Order, form, and the first helper.
- **Example sentences:**
  - By noon, we will have been hiking for three hours. _(focus: will have been hiking)_
  - You must have seen the comet last night. _(focus: must have seen)_
  - The children may be sleeping now. _(focus: may be sleeping)_
  - She should have been practising more. _(focus: should have been practising)_
  - My brother has been learning judo. _(focus: has been learning)_

### 3.2.11 Main Verbs vs Auxiliary Verbs

- **Pages:** Two Roles for Be, Have and Do · Is There Another Verb? · Do as a Main Verb · Double Do · Double Have · Main-Verb Be: No Do · Main-Verb Have and Do: Add Do · Main Verb or Helper: Recap
- **Key takeaways:** Be, have and do play two roles. · Another verb after it? It's a helper. · Do the dishes: do is the main verb. · Did you do…? Two jobs, two dos. · Have you had…? Helper + main verb. · Is your sister…?, not Does your sister be…? · Does your school have…? What do you do? · Check for another verb.
- **Example sentences:**
  - Dad has a cold, but he has gone to work. _(focus: has a cold, has gone)_
  - The twins are playing in the garden. _(focus: are playing)_
  - Ravi does the dishes after dinner. _(focus: does the dishes)_
  - Did you do the crossword today? _(focus: Did you do)_
  - Have you had your lunch yet? _(focus: Have you had)_
  - Is your sister a nurse? _(focus: Is your sister)_
  - Does your school have a pool? _(focus: Does your school have)_
  - What do you do on Sundays? _(focus: do you do)_

### 3.2.12 Do-Support and Its Functions

- **Pages:** When English Needs Do · Five Jobs of Do · Do in Comparisons · No Do With a Modal · No Do With Be or Another Helper · No Do in Subject Questions · Do-Support: Recap
- **Key takeaways:** No helper? Do steps in. · Questions, negatives, answers, tags, emphasis. · Than I do; than my dog does. · Can you…?, not Do you can…? · Is she…?, not Does she is…? · Who ate it?, not Who did eat it? · Do only where no other helper exists.
- **Example sentences:**
  - "Does Asha drive?" "Yes, she does, and she loves it." _(focus: Does Asha drive, she does)_
  - Meera runs faster than I do. _(focus: than I do)_
  - My cat sleeps more than my dog does. _(focus: than my dog does)_
  - Do you can play chess?
  - Does she is your teacher?
  - Who did eat the last ladoo?

### 3.2.13 Auxiliary Omission and Ellipsis

- **Pages:** Saying It Once · End on the Helper · With Do and Will · And So Has She · One Helper for Two Verbs · Casual Speech or Writing? · Leaving Words Out: Recap
- **Key takeaways:** A helper can stand in for the rest. · Ravi hasn't: the rest is understood. · No helper? End on do. · And so + helper + subject; and neither + helper + subject. · Has cooked and cleaned. · Drop helpers in chat; keep them in writing. · Let the helper stand in.
- **Example sentences:**
  - I can whistle a tune, but my brother can't. _(focus: my brother can't)_
  - Asha has finished her project, but Ravi hasn't. _(focus: Ravi hasn't)_
  - I didn't enjoy the film, but my sister did. _(focus: my sister did)_
  - "Will you help with the stall?" "I will if I can." _(focus: I will)_
  - Meena has seen the comet, and so has her brother. _(focus: so has her brother)_
  - We weren't invited, and neither were they. _(focus: neither were they)_
  - She has cooked and cleaned all morning. _(focus: has cooked and cleaned)_
  - You coming to the match?
  - Are you coming to the match?

### 3.3.1 Introduction to Modal Verbs

- **Pages:** Verbs That Change the Meaning · The Modal Verbs · Four Grammar Facts · The Facts in Action · What Modals Do · Semi-Modals and the Chapter Ahead · Modal Verbs: Recap
- **Key takeaways:** A modal adds meaning to the main verb. · Ten modals to know. · Base form, no -s, no do, no to or -ing. · Modal + base; modal first in questions. · Six jobs, many modals. · Semi-modals fill the gaps. · Modal + base form, always.
- **Example sentences:**
  - Visitors must sign the register at the gate. _(focus: must sign)_
  - My little sister can count to a hundred. _(focus: can count)_
  - Should we wait for the others? _(focus: Should we wait)_

### 3.3.2 Can

- **Pages:** Can Does Many Jobs · Ability Now · Can't for Lack of Ability · Can I…? Informal Permission · Can You…? Informal Requests · What Can Happen · Can: Recap
- **Key takeaways:** Ability, permission, requests, possibility. · Can + base: what someone is able to do. · Can't or cannot. · Can I…? asks if it is all right. · Can you…? asks someone to do something. · Can: possible in general. · Can + base for four jobs.
- **Example sentences:**
  - Meera can juggle five balls. _(focus: can juggle)_
  - My grandfather can speak four languages. _(focus: can speak)_
  - Our puppy can't climb the stairs yet. _(focus: can't climb)_
  - Can I sit next to you? _(focus: Can I sit)_
  - Can you pass me the chutney? _(focus: Can you pass)_
  - It can get very hot in Delhi in May. _(focus: can get)_
  - Mosquito bites can be very itchy. _(focus: can be)_

### 3.3.3 Could

- **Pages:** Could: Past, Polite and Possible · General Ability in the Past · Could You…? Polite Requests · Could for Suggestions · Could for Possibility · Past Ability or Possibility Now? · Could: Recap
- **Key takeaways:** Could has four main jobs. · Could and couldn't for past ability. · Could you…? is softer than Can you…? · We could… offers an idea. · It could happen. · The time words tell you which. · Past ability, politeness, ideas, possibility.
- **Example sentences:**
  - I could read when I was four. _(focus: could read)_
  - My grandmother could climb coconut trees as a girl. _(focus: could climb)_
  - We couldn't see the stage from the back row. _(focus: couldn't see)_
  - Could you close the gate behind you? _(focus: Could you close)_
  - We could take the ferry instead of the bus. _(focus: could take)_
  - Take a jacket; it could get cold tonight. _(focus: could get)_
  - Asha could swim when she was six.
  - Asha could be at the pool right now.

### 3.3.4 May

- **Pages:** May: Formal Permission and Possibility · May I…? Formal Permission · You May: Giving Permission · May for Possibility · Two Meanings of May Not · May Is Formal · May: Recap
- **Key takeaways:** May asks politely or shows a maybe. · May I…? sounds polite and formal. · You may… gives permission. · May: it is possible. · Not allowed, or perhaps not. · In everyday speech, can is more common. · Formal permission, and possibility.
- **Example sentences:**
  - May I leave the room, please? _(focus: May I leave)_
  - May I speak to the manager? _(focus: May I speak)_
  - You may start writing now. _(focus: may start)_
  - The train may be late because of the fog. _(focus: may be late)_
  - You may not use phones during the exam.
  - Ravi may not come to the party.
  - "Can I join you?" "Of course!" _(focus: Can I join you)_

### 3.3.5 Might

- **Pages:** Might: A Small Chance · Might for Possibility · May or Might? · Might Not · You Might Try… · Might in Formal Questions · Might: Recap
- **Key takeaways:** Might: perhaps, perhaps not. · Might + base: it is possible. · Very close; might is a little less sure. · Perhaps not. · Might makes a gentle suggestion. · Might I…? is very formal. · Might: possible, not sure.
- **Example sentences:**
  - We might go camping next month. _(focus: might go)_
  - The parcel might arrive today. _(focus: might arrive)_
  - The match may be cancelled.
  - The match might be cancelled.
  - Asha might not finish the race. _(focus: might not finish)_
  - You might try the shop near the station. _(focus: might try)_
  - Might I suggest a different plan? _(focus: Might I suggest)_

### 3.3.6 Must

- **Pages:** Must: Strong and Sure · Must: What the Speaker Feels · Must for Strong Rules · Mustn't: Not Allowed · Must for Being Sure · Rule or Sure Guess? · Must: Recap
- **Words shown in more than one job:** must
- **Key takeaways:** Must is for duties and sure guesses. · I must: my own sense of duty. · Signs and rules use must. · Mustn't means don't do it. · Must be: I'm sure it's true. · Must has two different jobs. · Strong duty, no, or sure.
- **Example sentences:**
  - I must finish this painting today. _(focus: must finish)_
  - I must call Grandma tonight. _(focus: must call)_
  - Passengers must keep their seat belts on. _(focus: must keep)_
  - You mustn't swim in this lake. _(focus: mustn't swim)_
  - You must be tired after the long trip. _(focus: must be tired)_
  - Visitors must leave their bags at the counter.
  - That must be Ravi's car; it has his sticker.

### 3.3.7 Shall

- **Pages:** Shall: Offers, Advice and Rules · Asking What to Do · Where and When Shall We…? · Shall in Formal Rules · Shall in Documents · Shall I or Will You? · Shall: Recap
- **Key takeaways:** Shall asks, offers and sets rules. · What shall I…? asks for advice. · Making plans together. · Rules and laws can use shall. · Everyday English uses must instead. · Shall I offers; will you asks. · Ask, offer, or set a formal rule.
- **Example sentences:**
  - Shall we share a taxi to the station? _(focus: Shall we share)_
  - What shall I bring to the picnic? _(focus: What shall I bring)_
  - Where shall we meet after school? _(focus: Where shall we meet)_
  - What time shall I come over? _(focus: shall I come)_
  - Members shall pay the fee by June. _(focus: shall pay)_
  - The tenant shall keep the garden tidy. _(focus: shall keep)_
  - Shall I carry the shopping?
  - Will you carry the shopping?

### 3.3.8 Should

- **Pages:** Should: Good Ideas and Expectations · Should for Advice · Shouldn't and I Think You Should · What Is Right · What We Expect · Advice or Expectation? · Should: Recap
- **Key takeaways:** Should advises and expects. · Should + base: a good idea. · Shouldn't: not a good idea. · Should: the right thing to do. · Should: it will probably happen. · A good idea, or a likely event. · Advice, right, and expected.
- **Example sentences:**
  - You should drink more water in summer. _(focus: should drink)_
  - You should wear sunscreen at the beach. _(focus: should wear)_
  - You shouldn't eat so many sweets. _(focus: shouldn't eat)_
  - I think you should see a doctor. _(focus: should see)_
  - Children should be kind to animals. _(focus: should be kind)_
  - The parcel should arrive tomorrow. _(focus: should arrive)_
  - You should leave at seven to avoid the traffic.
  - The bus should be here in five minutes.

### 3.3.9 Will

- **Pages:** Will Beyond the Future · Won't: Refusing · Will: Willing to Help · Will for Typical Behaviour · That Will Be…: Sure About Now · The Future or Now? · Will: Recap
- **Key takeaways:** Will does more than predict. · Won't: refuses to. · Will: happy to do it. · Will: what someone usually does. · That will be…: a confident guess. · Will can look ahead or guess now. · Willing, refusing, typical, sure.
- **Example sentences:**
  - The old car won't start this morning. _(focus: won't start)_
  - My little brother won't eat his vegetables. _(focus: won't eat)_
  - The window won't open; it's stuck. _(focus: won't open)_
  - Ask Grandpa; he will fix your kite. _(focus: will fix)_
  - Our cat will sleep in the sun for hours. _(focus: will sleep)_
  - "Someone's at the door." "That will be the plumber." _(focus: That will be)_
  - The electrician will come tomorrow.
  - That will be the electrician at the door.

### 3.3.10 Would

- **Pages:** Would: Polite and Thoughtful · Would You…? Polite Requests · Would You Like…? Offers · I'd Like · I'd Rather · Would for Past Habits · Would in Imagined Situations · Would: Recap
- **Key takeaways:** Would softens and imagines. · Would you…? asks politely. · Would you like + noun or to + base. · I'd like: a polite way to say I want. · I'd rather + base: my preference. · We would…: what we used to do. · Would imagines what isn't real. · Polite, preferring, remembering, imagining.
- **Example sentences:**
  - Would you like some more rice? _(focus: Would you like)_
  - Would you open the window, please? _(focus: Would you open)_
  - Would you like a lift to the station? _(focus: a lift to the station)_
  - I'd like a window seat, please. _(focus: I'd like)_
  - I'd rather walk than take the bus. _(focus: I'd rather walk)_
  - Every summer, we would swim in the river. _(focus: would swim)_
  - With more money, I would travel the world. _(focus: would travel)_

### 3.3.11 Ought To

- **Pages:** Ought To: The Right Thing · Ought To for Advice · Ought To for Duty · Ought Not To · Ought To for Expectation · Ought To or Should? · Ought To: Recap
- **Key takeaways:** Ought to: like should, with to. · Ought to + base: a good idea. · Ought to: what people should do. · Not comes after ought. · Ought to: it is expected. · Same meaning; should is more common. · Ought to + base, like should.
- **Example sentences:**
  - You ought to apologise to your sister. _(focus: ought to apologise)_
  - We ought to leave before the rain starts. _(focus: ought to leave)_
  - Every adult ought to vote. _(focus: ought to vote)_
  - You ought not to waste food. _(focus: ought not to waste)_
  - The guests ought to be here by now. _(focus: ought to be)_
  - You ought to rest now.
  - You should rest now.

### 3.3.12 Need and Needn't

- **Pages:** Is It Necessary? · Needn't: Not Necessary · Needn't Gives a Choice · Need To as a Main Verb · Don't Need To · Asking About Necessity · Need and Needn't: Recap
- **Key takeaways:** Needn't: not necessary. · Needn't + base. · You can if you want, but you don't have to. · Need to, needs to. · Don't need to = needn't. · Do I need to…? Need I…? (formal) · Needn't and don't need to: not necessary.
- **Example sentences:**
  - You needn't bring anything to the party. _(focus: needn't bring)_
  - We needn't hurry; the film starts at nine. _(focus: needn't hurry)_
  - You needn't wait for me. _(focus: needn't wait)_
  - I need to buy a new notebook. _(focus: need to buy)_
  - She needs to rest after the match. _(focus: needs to rest)_
  - You don't need to call; just send a message. _(focus: don't need to call)_
  - Need I bring my passport? _(focus: Need I bring)_

### 3.3.13 Dare and Daren't

- **Pages:** Brave Enough? · Daren't + Base · Dare I…? · Didn't Dare To · Dare in Everyday Speech · Fixed Phrases With Dare · Dare: Recap
- **Key takeaways:** Dare: brave enough to do something. · Daren't + base: not brave enough. · Dare I…? asks nervously. · Main-verb dare uses do and to. · Dared to is common. · Three phrases to know. · Modal, main verb, or fixed phrase.
- **Example sentences:**
  - I daren't tell Dad about the broken vase. _(focus: daren't tell)_
  - Ravi daren't climb the tall tree. _(focus: daren't climb)_
  - Dare I ask what happened? _(focus: Dare I ask)_
  - She didn't dare to look down from the bridge. _(focus: didn't dare to look)_
  - Nobody dared to touch the snake. _(focus: dared to touch)_

### 3.3.14 Have To and Has To

- **Pages:** Rules From Outside · Has To After He, She, It · Everyday Obligations · Have To in Every Tense · Past and Future · Questions and Negatives Use Do · Have To: Recap
- **Key takeaways:** Have to: a rule or a duty from outside. · Have to changes with the subject. · Jobs, chores and rules. · Had to, will have to, have had to. · Had to and will have to. · Do you have to…? / doesn't have to. · Outside rules, every tense, with do.
- **Example sentences:**
  - Students have to wear ID cards in school. _(focus: have to wear)_
  - My father has to start work at seven. _(focus: has to start)_
  - I have to feed the goats every morning. _(focus: have to feed)_
  - Meena has to practise the violin every day. _(focus: has to practise)_
  - We had to walk home because the bus broke down. _(focus: had to walk)_
  - You will have to show your ticket at the gate. _(focus: will have to show)_
  - Do we have to bring lunch? _(focus: Do we have to bring)_
  - She doesn't have to work on Sundays. _(focus: doesn't have to work)_

### 3.3.15 Had Better

- **Pages:** Advice With a Warning · Had Better + Base · 'd Better in Speech · Had Better Not · Should or Had Better? · Now or Later, Not the Past · Had Better: Recap
- **Key takeaways:** Had better: do it, or else. · Had better + base, no to. · You'd better, we'd better. · Not comes after better. · Had better adds a warning. · Had here doesn't mean the past. · Strong advice, now or later.
- **Example sentences:**
  - You'd better take an umbrella. _(focus: You'd better take)_
  - We had better leave now, or we'll miss the train. _(focus: had better leave)_
  - You'd better hurry up. _(focus: You'd better hurry)_
  - You'd better not forget your passport. _(focus: better not forget)_
  - You should check the tyres.
  - You'd better check the tyres, or you might get a puncture.
  - I'd better call Mum tonight. _(focus: I'd better call)_

### 3.3.16 Be Able To

- **Pages:** Ability in Every Form · Where Can Can't Go · Be Able To in Use · Am, Is, Are Able To · Not Able To and Unable To · Not Will Can · Be Able To: Recap
- **Key takeaways:** Be able to fills the gaps. · Future, perfect, after a modal, after to. · Haven't been able to; to be able to. · Formal; can is more common. · Not able to, unable to. · Will be able to, never will can. · Be able to where can can't.
- **Example sentences:**
  - Soon, my baby brother will be able to walk. _(focus: will be able to walk)_
  - I haven't been able to sleep this week. _(focus: haven't been able to sleep)_
  - I hope to be able to visit you soon. _(focus: to be able to visit)_
  - The new robot is able to climb stairs. _(focus: is able to climb)_
  - Grandpa is unable to walk far. _(focus: unable to walk)_
  - We weren't able to find a taxi. _(focus: weren't able to find)_
  - Next year I will can drive.

### 3.3.17 Be Allowed To

- **Pages:** Permission in Every Tense · Be Allowed To in Every Tense · Past and Future Permission · Not Allowed To: Rules · Let or Be Allowed To? · Questions With Be Allowed To · Be Allowed To: Recap
- **Key takeaways:** Be allowed to: permission, any time. · Am, was, will be allowed to. · Was allowed to; will be allowed to. · Not allowed to: a rule says no. · Let: the giver first. Allowed to: the receiver first. · Are we allowed to…? · Permission in any tense.
- **Example sentences:**
  - Visitors are allowed to take photos in the garden. _(focus: are allowed to take)_
  - As a child, I was allowed to stay up on Fridays. _(focus: was allowed to stay)_
  - Next year, we will be allowed to choose our subjects. _(focus: will be allowed to choose)_
  - We aren't allowed to use phones in class. _(focus: aren't allowed to use)_
  - My parents let me go to the concert.
  - I was allowed to go to the concert.
  - Are we allowed to swim here? _(focus: Are we allowed to swim)_

### 3.3.18 Modals for Ability

- **Pages:** Choosing an Ability Form · Ability Across Time · One Skill, Two Times · Could or Was Able To? · Managed To · Couldn't Works for Both · Ability: Recap
- **Key takeaways:** Time and meaning decide. · Could, can, will be able to. · The form follows the time. · General: could. One success: was able to. · Managed to: succeeded after trying. · Couldn't: general or one time. · Match the form to the time and meaning.
- **Example sentences:**
  - Last summer I couldn't swim, but now I can. _(focus: couldn't swim, now I can)_
  - At five, Riya could count to ten. _(focus: could count)_
  - Next year, she will be able to do long division. _(focus: will be able to do)_
  - Dad could climb trees when he was young.
  - The firefighter was able to rescue the cat.
  - After three tries, I managed to open the jar. _(focus: managed to open)_
  - We couldn't find the hotel in the dark. _(focus: couldn't find)_

### 3.3.19 Modals for Permission

- **Pages:** Asking for Permission · From Friendly to Formal · Choosing for the Listener · Saying Yes · Saying No Politely · Asking About Rules · Permission: Recap
- **Key takeaways:** Choose the modal for the person you ask. · Can, could, may. · Match the modal to the person. · Of course; sure; you may. · I'm afraid not. · Are we allowed to…? asks about rules. · Friendly, polite or formal.
- **Example sentences:**
  - Could I leave a little early today? _(focus: Could I leave)_
  - Could I use your charger for a minute? _(focus: Could I use)_
  - May I take a seat, Doctor? _(focus: May I take)_
  - Are visitors allowed to feed the deer? _(focus: Are visitors allowed to feed)_

### 3.3.20 Modals for Possibility and Probability

- **Pages:** Working It Out · The Certainty Ladder · Moving Along the Scale · Must Be: Sure It's True · Can't Be: Sure It Isn't · Can't or Mustn't? · Possibility: Recap
- **Key takeaways:** Modals show how sure we are. · Must, should, may, can't. · Expected or just possible. · From the clues: must be. · From the clues: can't be. · Sure-not: can't. Not allowed: mustn't. · Choose how sure you are.
- **Example sentences:**
  - The lights are off, so they must be asleep. _(focus: must be asleep)_
  - Asha should be at school by now. _(focus: should be)_
  - Asha might be at the library. _(focus: might be)_
  - He's been running for an hour; he must be thirsty. _(focus: must be thirsty)_
  - That can't be Ravi; he's in Delhi this week. _(focus: can't be Ravi)_
  - That story can't be true.
  - You mustn't tell lies.

### 3.3.21 Modals for Obligation and Necessity

- **Pages:** Choosing an Obligation Form · Must or Have To? · Rules You Make and Rules You Follow · Mustn't or Don't Have To? · Needn't = Don't Have To · Had To for the Past · Obligation: Recap
- **Key takeaways:** Who decides, and is it allowed? · Must: my view. Have to: a rule from outside. · Personal duty or outside rule. · Mustn't: not allowed. Don't have to: not necessary. · Needn't and don't have to match. · Must has no past: use had to. · Who decides, allowed or necessary, and when.
- **Example sentences:**
  - I must remember Mum's birthday, and we have to wear uniforms. _(focus: must remember, have to wear)_
  - I must get more sleep.
  - I have to be at school by eight.
  - We must visit Grandma more often. _(focus: must visit)_
  - Nurses have to work at night sometimes. _(focus: have to work)_
  - You mustn't touch the wires.
  - You don't have to bring a gift.
  - We needn't book a table; the café is never full. _(focus: needn't book)_
  - We had to queue for an hour at the bank. _(focus: had to queue)_

### 3.3.22 Modals for Advice and Suggestions

- **Pages:** Choosing How Strongly to Advise · From Gentle to Strong · Three Strengths · Ways to Suggest · Suggestions in Use · If I Were You, I'd… · Advice: Recap
- **Key takeaways:** Gentle, normal or strong. · Could → should → had better. · Same situation, different strength. · We could, shall we, let's, why don't we. · Why don't we + base; how about + -ing. · Imagine you are them, then advise. · Pick the strength that fits.
- **Example sentences:**
  - You'd better put a plaster on that cut. _(focus: You'd better put)_
  - You could try the new bakery. _(focus: could try)_
  - You should get more exercise. _(focus: should get)_
  - You'd better hurry, or you'll miss the bus. _(focus: 'd better hurry)_
  - Why don't we have a picnic by the lake? _(focus: Why don't we have)_
  - How about going to the museum? _(focus: How about going)_
  - If I were you, I'd apologise. _(focus: I'd apologise)_

### 3.3.23 Modals for Requests and Offers

- **Pages:** Asking and Offering · From Casual to Very Polite · Would You Mind + -ing · Ways to Offer · Offers in Use · Replying to Requests and Offers · Requests and Offers: Recap
- **Key takeaways:** Choose how politely to ask. · Can, could, would, would you mind. · Would you mind + -ing. · Shall I, can I, would you like, I'll. · Can I help? I'll carry it. · Polite answers. · Ask politely, offer kindly, reply well.
- **Example sentences:**
  - Would you mind closing the door? _(focus: Would you mind closing)_
  - Would you mind moving your bag? _(focus: Would you mind moving)_
  - Can I help you with those boxes? _(focus: Can I help)_
  - I'll carry the water bottles. _(focus: I'll carry)_

### 3.3.24 Modal Perfects

- **Pages:** Modals About the Past · Must Have: Sure It Happened · Can't Have: Sure It Didn't · May, Might, Could Have · Should Have: Regret and Criticism · Could Have: A Chance Not Taken · Needn't Have: Done, but Not Necessary · Modal Perfects: Recap
- **Key takeaways:** Modal + have + past participle. · Must have + past participle. · Can't have + past participle. · Perhaps it happened. · Should have: it was a good idea, but… · Could have: it was possible, but didn't happen. · Needn't have: you did it, but it wasn't needed. · Look back with modal + have.
- **Example sentences:**
  - The ground is wet; it must have rained last night. _(focus: must have rained)_
  - Ravi isn't here; he must have missed the bus. _(focus: must have missed)_
  - She can't have finished already; she only started at noon. _(focus: can't have finished)_
  - The parcel might have gone to the wrong address. _(focus: might have gone)_
  - Asha could have left her phone at school. _(focus: could have left)_
  - I should have studied more for the test. _(focus: should have studied)_
  - You shouldn't have shouted at him. _(focus: shouldn't have shouted)_
  - We could have won, but we gave up. _(focus: could have won)_
  - You needn't have brought a gift; it isn't my birthday! _(focus: needn't have brought)_

### 3.3.25 Modal Verb Combinations and Common Errors

- **Pages:** Spot and Fix Modal Mistakes · No To After a Modal · No -s on a Modal · Not Allowed or Not Needed? · Never Two Modals · Must Has No Past · Should Have, Not Should Of · Modal Mistake Checklist
- **Key takeaways:** Modal mistakes come in a few kinds. · Can speak, not can to speak. · He can, not he cans. · Free means don't have to. · Will be able to, not will can. · Had to, not must, for the past. · Should have, could have, would have. · Check every modal before you finish.
- **Example sentences:**
  - My sister can to speak Japanese.
  - He cans fix bicycles.
  - The museum is free on Sundays, so visitors mustn't buy tickets.
  - We will can see the eclipse from the roof.
  - I must leave early yesterday.
  - You should of asked me first.

### 3.4.1 Introduction to Voice

- **Pages:** Who Does It, and Who Gets It? · Active or Passive? · Spotting the Passive · Why Use the Passive? · When the Doer Is Unknown · The Road Through Voice · Voice: Recap
- **Key takeaways:** Voice shows who does the action. · Doer first: active. Receiver first: passive. · Be + past participle. · When the doer doesn't matter. · We don't know who, so we use the passive. · Form, tenses, uses and errors. · Active does; passive receives.
- **Example sentences:**
  - A storm damaged the old temple roof. _(focus: A storm damaged)_
  - Grandpa planted the neem tree.
  - The neem tree was planted by Grandpa.
  - The letters were delivered at noon. _(focus: were delivered)_
  - Our car was scratched in the car park. _(focus: was scratched)_

### 3.4.2 Identifying Subject and Object for Voice Transformation

- **Pages:** Find the Parts First · Three Parts · Longer Sentences · No Object, No Passive · Object or Not? · Object Pronouns Become Subject Pronouns · Doer and Receiver: Recap
- **Key takeaways:** Doer, action, receiver. · Who did it, what was done, to what. · Skip the extras to find the parts. · The passive needs a receiver. · An object means a passive is possible. · Them → they; him → he. · Find the parts, check the object, fix the pronoun.
- **Example sentences:**
  - Uncle Ravi repaired the ceiling fan. _(focus: Uncle Ravi, repaired, the ceiling fan)_
  - The puppy chewed my sandal. _(focus: The puppy, chewed, my sandal)_
  - Every summer, the farmers harvest the mangoes by hand. _(focus: the farmers, harvest, the mangoes)_
  - The train left on time. _(focus: left)_
  - Asha painted the gate.
  - Asha smiled at the baby.
  - They were praised by the teacher. _(focus: They were praised)_

### 3.4.3 Active Voice

- **Pages:** The Doer Comes First · Clear and Direct · Shorter and Clearer · When the Doer Matters · Stories and Instructions · Intransitive Verbs Are Always Active · Active Voice: Recap
- **Key takeaways:** Active: the doer leads. · Active sentences are easy to follow. · The active is usually shorter. · Important doer: active. · Action-packed writing is active. · No object, so active only. · Active is the default.
- **Example sentences:**
  - Our school band won the state trophy. _(focus: Our school band won)_
  - Meena painted the classroom door. _(focus: Meena painted)_
  - The chef prepared a delicious lunch.
  - A delicious lunch was prepared by the chef.
  - My grandmother built this house with her own hands. _(focus: My grandmother built)_
  - The monkey grabbed the banana and swung away. _(focus: grabbed, swung)_
  - Mix the flour and add the milk slowly. _(focus: Mix, add)_
  - The baby laughed at the puppet. _(focus: laughed)_

### 3.4.4 Passive Voice

- **Pages:** Building the Passive · Be + Past Participle · Irregular Participles · By + the Doer · Be Agrees With the New Subject · Was or Were? · Passive Voice: Recap
- **Key takeaways:** Be + past participle, then by. · Be shows the tense; the participle stays. · Sung, written, made. · By names the agent. · Singular: was. Plural: were. · Count the new subject. · Be + past participle (+ by).
- **Example sentences:**
  - The parcel was delivered by a courier. _(focus: was delivered)_
  - The windows are cleaned every month. _(focus: are cleaned)_
  - The song was sung by the whole class. _(focus: was sung)_
  - The letters were written in Hindi. _(focus: were written)_
  - The bridge was designed by a young engineer. _(focus: by a young engineer)_
  - The cookies were baked by Grandma. _(focus: were baked)_
  - The window was broken by a cricket ball.
  - The windows were broken by the storm.

### 3.4.5 Passive Voice in Present Tenses

- **Pages:** The Passive Now · Am, Is, Are + Past Participle · Facts and Routines · Is Being + Past Participle · Has Been + Past Participle · Being or Been? · Present Passives: Recap
- **Key takeaways:** Is made, is being made, has been made. · Present simple passive. · Regular actions and facts. · Present continuous passive. · Present perfect passive. · Being: in progress. Been: done. · Three present passives to choose from.
- **Example sentences:**
  - Thousands of kites are sold here every January. _(focus: are sold)_
  - Malayalam is spoken in Kerala. _(focus: is spoken)_
  - The post is collected at four every day. _(focus: is collected)_
  - These toys are made from bamboo. _(focus: are made)_
  - A new metro station is being built near our school. _(focus: is being built)_
  - All the tickets have been sold. _(focus: have been sold)_
  - The library roof is being repaired.
  - The library roof has been repaired.

### 3.4.6 Passive Voice in Past Tenses

- **Pages:** The Passive in the Past · Was, Were + Past Participle · Past Events · Was Being + Past Participle · Had Been + Past Participle · Was or Had Been? · Past Passives: Recap
- **Key takeaways:** Was made, was being made, had been made. · Past simple passive. · Finished events in the passive. · Past continuous passive. · Past perfect passive. · At that time, or before it. · Past be + the same participle.
- **Example sentences:**
  - This fort was built by a king in 1650. _(focus: was built)_
  - The final was cancelled because of the rain. _(focus: was cancelled)_
  - The prizes were handed out after lunch. _(focus: were handed out)_
  - Penicillin was discovered in 1928. _(focus: was discovered)_
  - When we arrived, the stage was being decorated. _(focus: was being decorated)_
  - By the time we arrived, all the food had been eaten. _(focus: had been eaten)_
  - The gate was locked at ten.
  - The gate had been locked before we got home.

### 3.4.7 Passive Voice in Future Structures

- **Pages:** The Passive in the Future · Will Be + Past Participle · Plans and Promises · Going to Be + Past Participle · Will Have Been + Past Participle · Will Be or Will Have Been? · Future Passives: Recap
- **Key takeaways:** Will be made, going to be made. · Will be never changes. · Will be met; will be served. · Is going to be turned into. · Done and dusted by then. · At a time, or before it. · Will be, going to be, will have been.
- **Example sentences:**
  - The results will be announced on Friday. _(focus: will be announced)_
  - The new park will be opened next month. _(focus: will be opened)_
  - You will be met at the airport by our driver. _(focus: will be met)_
  - The old cinema is going to be turned into a mall. _(focus: is going to be turned)_
  - By June, the new bridge will have been finished. _(focus: will have been finished)_
  - The house will be painted on Saturday.
  - The house will have been painted by Saturday.

### 3.4.8 Passive Voice with Modal Verbs

- **Pages:** Modals in the Passive · Modal + Be + Past Participle · More Modal Passives · Modal + Have Been + Past Participle · Past Possibility in the Passive · Have To Be + Past Participle · Modal Passives: Recap
- **Key takeaways:** Modal + be + past participle. · Must be kept, should be signed. · Should be, may be. · Should have been told. · Might have been sent. · Have to be fed. · Modal + be, modal + have been.
- **Example sentences:**
  - Plastic bottles can be recycled. _(focus: can be recycled)_
  - Medicines must be kept away from children. _(focus: must be kept)_
  - The form should be signed by a parent. _(focus: should be signed)_
  - This side door may be locked at night. _(focus: may be locked)_
  - We should have been told about the change. _(focus: should have been told)_
  - The letter might have been sent to the old address. _(focus: might have been sent)_
  - The goats have to be fed twice a day. _(focus: have to be fed)_

### 3.4.9 Passive Voice in Questions

- **Pages:** Asking in the Passive · Move the First Helper · Longer Passive Questions · Wh- Word First · Where and Why · Who … By? · Passive Questions: Recap
- **Key takeaways:** The first helper moves. · Is it…? Was it…? Has it been…? · Only the first helper moves. · Question word + helper + subject + participle. · Where are…made? Why was…cancelled? · By goes at the end. · Move the first helper; by can go last.
- **Example sentences:**
  - Was the window broken by the ball? _(focus: Was the window broken)_
  - Is the shop cleaned every night? _(focus: Is the shop cleaned)_
  - Has the classroom been painted yet? _(focus: Has the classroom been painted)_
  - Will the results be posted online? _(focus: Will the results be posted)_
  - When was this temple built? _(focus: When was this temple built)_
  - Where are these carpets made? _(focus: Where are these carpets made)_
  - Why was the concert postponed? _(focus: Why was the concert postponed)_
  - Who was this song written by? _(focus: Who was this song written by)_

### 3.4.10 Passive Voice in Negative Sentences

- **Pages:** Saying No in the Passive · Where Not Goes in a Passive · In Different Tenses · Passive Negative Short Forms · Negative Passives Without an Agent · Common Negative Passives · Passive Negatives: Recap
- **Key takeaways:** Not after the first helper. · Was not signed; has not been fixed. · The first helper always takes not. · Isn't, wasn't, hasn't been, won't be. · Who didn't do it isn't the point. · Aren't allowed; won't be finished. · Find the first helper, then add not.
- **Example sentences:**
  - The gate wasn't locked last night. _(focus: wasn't locked)_
  - The form was not signed. _(focus: was not signed)_
  - The dishes haven't been washed yet. _(focus: haven't been washed)_
  - This door can't be opened from outside. _(focus: can't be opened)_
  - We weren't told about the change. _(focus: weren't told)_
  - Dogs aren't allowed in the café. _(focus: aren't allowed)_
  - The road won't be finished until May. _(focus: won't be finished)_

### 3.4.11 Passive Voice with Two Objects

- **Pages:** Two Objects, Two Passives · Person First or Thing First? · The Person as Subject · Thing First: Add To · Verbs With Two Objects · More Examples · Passives With Two Objects: Recap
- **Key takeaways:** Either object can become the subject. · Two ways to say the same thing. · People usually come first. · Thing + passive + to + person. · Give, send, show, offer, tell, teach, lend. · Was offered; were taught. · Person first, or thing + to.
- **Example sentences:**
  - Our class was shown a film about the ocean. _(focus: was shown)_
  - Asha was given a prize.
  - A prize was given to Asha.
  - The tourists were told the way to the fort. _(focus: were told)_
  - The keys were handed to the new owner. _(focus: were handed to)_
  - Meera was offered a place in the team. _(focus: was offered)_
  - The children were taught a new song. _(focus: were taught)_

### 3.4.12 Passive Voice without Mentioning the Agent

- **Pages:** Do We Need By? · When to Leave Out the Agent · No Agent Needed · Keep the Agent When It Matters · With or Without By? · By Someone Adds Nothing · Leaving Out the Agent: Recap
- **Key takeaways:** Most passives have no by. · Unknown, obvious, unimportant. · The action is the point. · Important doer: keep by. · Add by when the doer is news. · Drop empty agents. · Name the doer only when it matters.
- **Example sentences:**
  - My phone was stolen on the bus. _(focus: was stolen)_
  - Our bins are emptied on Tuesdays. _(focus: are emptied)_
  - This painting was made by a nine-year-old girl. _(focus: by a nine-year-old girl)_
  - The new bridge was finished in 2019.
  - The new bridge was finished by a team of women engineers.
  - My bag was taken by someone.

### 3.4.13 Get-Passive Constructions

- **Pages:** Get Instead of Be · Get + Past Participle · Accidents and Changes · Fixed Phrases · Fixed Phrases in Speech · Be or Get? · Get-Passive: Recap
- **Key takeaways:** Got stuck, got hurt. · Get changes; the participle stays. · Get-passives often describe surprises. · Get married, get dressed, get lost. · These phrases use get, not be. · Be: neutral. Get: informal. · Get + past participle, informally.
- **Example sentences:**
  - My kite got stuck in the tree. _(focus: got stuck)_
  - Our new van got dented in the car park. _(focus: got dented)_
  - Ravi got hurt during the match. _(focus: got hurt)_
  - The rotis got burnt on the tawa. _(focus: got burnt)_
  - We got lost in the old market. _(focus: got lost)_
  - My aunt got married in December. _(focus: got married)_
  - The window was broken during the storm.
  - The window got broken during the storm.

### 3.4.14 Passive Reporting Structures

- **Pages:** Reporting Without Naming · It Is Said / Believed That… · Other Reporting Verbs · Someone Is Said To Be… · Two Ways to Report · A Formal, News-Like Style · Passive Reporting: Recap
- **Key takeaways:** It is said that…: people say. · It + passive reporting verb + that. · Reported, thought, expected. · Subject + is said to + base. · It is said that, or is said to. · News reports love these patterns. · Report what people say, without naming them.
- **Example sentences:**
  - It is said that the old fort is haunted. _(focus: It is said)_
  - It is believed that the temple is a thousand years old. _(focus: It is believed)_
  - It is reported that the river has flooded two villages. _(focus: It is reported)_
  - It was thought that the comet would be visible. _(focus: It was thought)_
  - The old banyan tree is said to be two hundred years old. _(focus: is said to be)_
  - It is said that the corner shop sells the best ladoos.
  - The corner shop is said to sell the best ladoos.
  - The minister is expected to arrive at noon. _(focus: is expected to arrive)_

### 3.4.15 Stative Passive and Dynamic Passive

- **Pages:** An Action or a State? · Dynamic Passive: An Action · Stative Passive: A State · Action or State? · Common State Phrases · State Phrases in Use · State or Action: Recap
- **Key takeaways:** A passive can show either. · Someone did it at a time. · How it was. · Did someone do it then, or was it just like that? · Made of, located in, known for. · Learn the preposition with each. · Action: done then. State: how it is.
- **Example sentences:**
  - The shop was closed when we arrived. _(focus: was closed)_
  - The gate was locked by the guard at nine. _(focus: was locked by the guard)_
  - The windows were all closed, so the room felt stuffy. _(focus: were all closed)_
  - The shop was closed by the owner at six.
  - The shop was closed all day on Sunday.
  - This statue is made of marble. _(focus: is made of)_
  - Our town is known for its sweets. _(focus: is known for)_

### 3.4.16 Verbs That Cannot Normally Be Passivized

- **Pages:** Verbs With No Passive · Intransitive Verbs Stay Active · Common Verbs With No Passive · Some State Verbs Stay Active · Resemble, Suit, Fit · Not Was Happened · No Passive: Recap
- **Key takeaways:** Not every verb has a passive. · Intransitive verbs stay active. · Happen, occur, arrive, die. · Have (own) stays active. · These verbs stay active. · Happened, never was happened. · No object, or a state verb: stay active.
- **Example sentences:**
  - The accident happened near the bridge. _(focus: happened)_
  - The wedding guests arrived after midnight. _(focus: arrived)_
  - Raju has a red scooter. _(focus: has)_
  - Meena resembles her grandmother. _(focus: resembles)_
  - That green kurta suits you. _(focus: suits)_
  - The accident was happened at night.

### 3.4.17 Active–Passive Transformation

- **Pages:** Changing the Voice · Four Steps to the Passive · Following the Steps · Same Tense, Different Voice · Changing a Perfect Tense · Passive to Active · Transformation: Recap
- **Key takeaways:** Same meaning, different focus. · Object, be, participle, by. · Step by step. · Be carries the tense. · Has watered → have been watered. · Bring the agent to the front. · Move, keep the tense, add by.
- **Example sentences:**
  - The rangoli was drawn by my sister. _(focus: was drawn)_
  - The ice cream was eaten by the children. _(focus: was eaten)_
  - The plants have been watered by Grandpa. _(focus: have been watered)_
  - The farmer milks the cows every morning. _(focus: The farmer milks)_

### 3.4.18 Common Errors in Passive Voice

- **Pages:** Spot and Fix Passive Mistakes · Don't Forget Be · Use the Past Participle · Be Must Agree · No Passive Without an Object · The Passive When It's Needed · With for a Tool, By for a Doer · Passive Mistake Checklist
- **Key takeaways:** Passive mistakes come in a few kinds. · Was built, not built. · Was written, not was wrote. · The invitations were, not was. · Occurred, not was occurred. · My bicycle was stolen, not stole. · Cut with scissors; cut by Asha. · Check be, the participle and the voice.
- **Example sentences:**
  - The house built in 1990.
  - The letter was wrote by my aunt.
  - The invitations was sent last week.
  - The power cut was occurred at noon.
  - My bicycle stole last night.
  - The paper was cut by scissors.

### 3.5.1 Introduction to Direct and Indirect Speech

- **Pages:** Two Ways to Report Words · Direct Speech: The Exact Words · Who Said It? · Indirect Speech: The Meaning · Direct or Indirect? · What Can Change · The Chapter Ahead · Direct and Indirect: Recap
- **Key takeaways:** Exact words, or the meaning. · Quotation marks hold the exact words. · The reporting verb names the speaker. · No quotation marks; the words change. · Quotation marks or not. · Pronouns, tense, time and place. · Statements, questions, commands and more. · Exact words, or reported meaning.
- **Example sentences:**
  - Ravi said, "I am starving." _(focus: Ravi said)_
  - "The school bus is stuck in traffic," said Meena. _(focus: "The school bus is stuck in traffic,")_
  - Grandpa asked, "Where are my reading glasses?" _(focus: Grandpa asked)_
  - Meena said that the school bus was stuck in traffic. _(focus: said that)_
  - Arjun said, "I adore this old Hindi film song."
  - Arjun said that he adored the old Hindi film song.

### 3.5.2 Reporting Statements

- **Pages:** Retelling What Someone Said · Said (That) + Clause · That Can Go · Said To + Person · Punctuating Direct Speech · Reporter First or Last · Reporting Statements: Recap
- **Key takeaways:** Said + that + what they said. · Said that + subject + verb. · Said she…, without that. · Said to me, never said me. · Comma inside, quotation marks around. · Said can come before or after the words. · Said (that) + clause.
- **Example sentences:**
  - Our teacher said that the quiz was easy. _(focus: said that)_
  - Ravi said that he was ready to leave. _(focus: said that)_
  - Asha said she was coming to the fair. _(focus: said she was coming)_
  - My aunt said to me that she missed us. _(focus: said to me)_
  - "I'm going to the vegetable market," said Mum. _(focus: "I'm going to the vegetable market,")_
  - Mum said, "I'll be back by six." _(focus: Mum said,)_

### 3.5.3 Reporting Verbs

- **Pages:** Choosing a Reporting Verb · Said or Told? · Told + Person + That · More Verbs for Reporting · Reporting Verbs in Action · Verbs That Show Feeling · Reporting Verbs: Recap
- **Key takeaways:** Said, told, and many more. · Told needs a person. · Told us that, told her that. · Explained, replied, announced. · Pick the verb that fits the situation. · Complained, admitted. · Choose the verb that tells the most.
- **Example sentences:**
  - The doctor told me that I needed rest. _(focus: told me that)_
  - Meera said that she was late.
  - Meera told me that she was late.
  - The guard told us that the gate was locked. _(focus: told us that)_
  - The principal announced that school would close at noon. _(focus: announced that)_
  - When I asked, Asha replied that she was busy. _(focus: replied that)_
  - My brother complained that the soup was cold. _(focus: complained that)_
  - Ravi admitted that he had broken the vase. _(focus: admitted that)_

### 3.5.4 Tense Changes in Reported Speech

- **Pages:** Shifting the Tense Back · Present Becomes Past · Past Becomes Past Perfect · Continuous Tenses Shift Back · Present Perfect Becomes Past Perfect · Will Becomes Would · The Backshift Table · Backshift: Recap
- **Key takeaways:** After said, the tense steps back. · Like → liked; am → was. · Lost → had lost. · Am cooking → was cooking. · Have played → had played. · Will visit → would visit. · Each tense steps back one place. · Step each tense back.
- **Example sentences:**
  - Asha said that she was exhausted. _(focus: was exhausted)_
  - Ravi said that he liked cricket. _(focus: liked)_
  - Meena said that she had lost her keys. _(focus: had lost)_
  - Dad said that he was cooking dinner. _(focus: was cooking)_
  - The coach said that we had played well. _(focus: had played)_
  - Grandma said that she would visit us soon. _(focus: would visit)_

### 3.5.5 Pronoun Changes

- **Pages:** Who Is Speaking Now? · I Becomes He or She · My Becomes His or Her · We Becomes They · You Depends on the Listener · Reporting to Someone Else · Pronoun Changes: Recap
- **Key takeaways:** Pronouns change to fit the reporter. · The speaker becomes he or she. · My brother → her brother. · We → they; our → their. · You → I, me, he or she. · Who heard it decides the pronoun. · Change pronouns to fit the reporter.
- **Example sentences:**
  - Meena said that she needed her umbrella. _(focus: she needed her umbrella)_
  - Ravi said that he was ready for the trip. _(focus: he was ready)_
  - Asha said that her brother was unwell. _(focus: her brother)_
  - The girls said that they had won their match. _(focus: they had won their match)_
  - Dad told me that I was late. _(focus: I was late)_
  - She told me that I was right.
  - She told Ravi that he was right.

### 3.5.6 Changes in Time Expressions

- **Pages:** When Was Then? · Time Words That Change · Now and Today · Yesterday and Tomorrow · Last Week, Next Week, Ago · No Change if the Time Is the Same · Time Words: Recap
- **Key takeaways:** Time words change when time has passed. · Learn the pairs. · Then and that day. · The day before; the next day. · The week before; the following week; before. · Same day? Keep today. · Change them only if time has passed.
- **Example sentences:**
  - Ravi said that he would call me the next day. _(focus: the next day)_
  - Meena said that she was busy then. _(focus: then)_
  - Dad said that the shop was shut that day. _(focus: that day)_
  - Asha said that she had seen the film the day before. _(focus: the day before)_
  - The coach said that the final would be the following week. _(focus: the following week)_
  - Grandpa said that he had moved there twenty years before. _(focus: twenty years before)_
  - At lunch, I said that Leela would be late today. _(focus: today)_

### 3.5.7 Changes in Place Expressions

- **Pages:** Where Are You Now? · Here Becomes There · Same Place, No Change · Come Becomes Go · Bring Becomes Take · Change or Keep? · Place Words: Recap
- **Key takeaways:** Place words depend on where you report. · Somewhere else: there. · Still here? Keep here. · Not there yourself? Use go. · Bring here; take there (2-1-13). · Where is the reporter? · Change them only if the place has changed.
- **Example sentences:**
  - Asha said that she loved it there. _(focus: there)_
  - Mum said that she had left her keys there. _(focus: there)_
  - Standing in the hall, Ravi said the party would be here. _(focus: here)_
  - Meena said that she would go to the wedding. _(focus: would go)_
  - Dad said that he would take some sweets to the party. _(focus: would take)_
  - She said she would go there.
  - She said she would come here.

### 3.5.8 Changes in Demonstratives

- **Pages:** Near Words Move Away · This Becomes That · These Becomes Those · This Morning, This Week · This One Becomes That One or The · No Change When It's Still Here · This and That: Recap
- **Key takeaways:** Near words become far words. · This bike → that bike. · These mangoes → those mangoes. · That morning; that week. · This one → that one, or the. · Still holding it? Keep this. · This → that, unless it's still here.
- **Example sentences:**
  - Leela said that she liked that dress. _(focus: that dress)_
  - Ravi said that bike was his. _(focus: that bike)_
  - Grandma said those mangoes were from her garden. _(focus: those mangoes)_
  - Dad said he had been busy that morning. _(focus: that morning)_
  - Asha said she wanted the blue one. _(focus: the blue one)_
  - Holding up the notebook, Meena said this notebook was hers. _(focus: this notebook)_

### 3.5.9 Reporting Yes/No Questions

- **Pages:** Reporting a Yes / No Question · Asked + If or Whether · Asked + Person + If · Statement Order, No Do · No Question Mark · Wanted to Know and Wondered · Yes/No Questions: Recap
- **Key takeaways:** Asked if + statement. · If and whether mean the same here. · Asked me if, asked her whether. · If the shop was open, not if was the shop open. · A reported question ends with a full stop. · Other ways to report a question. · Asked if + statement order.
- **Example sentences:**
  - Mum asked if I had finished my homework. _(focus: asked if)_
  - The teacher asked whether we were ready. _(focus: asked whether)_
  - Ravi asked me if I liked cricket. _(focus: asked me if)_
  - Asha asked if the chemist was open. _(focus: if the chemist was open)_
  - She asked if I was coming?
  - Grandpa wanted to know if the train was on time. _(focus: wanted to know if)_
  - I wondered whether it would rain. _(focus: wondered whether)_

### 3.5.10 Reporting WH Questions

- **Pages:** Reporting a Wh- Question · Question Word, Then Statement Order · Different Question Words · Who Broke It? Who Had Broken It · Wanted to Know + Wh- · No Question Order · Wh- Questions: Recap
- **Key takeaways:** Asked + question word + statement. · What time the film started. · Why, how, when, where. · Subject questions keep their order. · Wanted to know where. · Where I lived, not where did I live. · Question word + statement order.
- **Example sentences:**
  - The tourist asked where the station was. _(focus: where the station was)_
  - Ravi asked me what time the film started. _(focus: what time the film started)_
  - Mum asked why I was late. _(focus: why I was late)_
  - The doctor asked how I felt. _(focus: how I felt)_
  - Dad asked who had broken the window. _(focus: who had broken the window)_
  - The inspector wanted to know where we had been. _(focus: wanted to know where)_
  - She asked where did I live.

### 3.5.11 Reporting Commands

- **Pages:** Reporting What Someone Was Told to Do · Told + Person + To + Base · Everyday Commands · Don't… Becomes Not To · Not To, Not Don't · Name the Person · Reported Commands: Recap
- **Key takeaways:** Told + person + to + base. · The command becomes to + base. · Teachers, parents, coaches. · Told … not to + base. · Told me not to, never told me don't. · Told always needs a listener. · Told + person + (not) to + base.
- **Example sentences:**
  - The coach told us to run three laps. _(focus: told us to run)_
  - Mum told me to tidy my room. _(focus: told me to tidy)_
  - The teacher told the class to open their books. _(focus: told the class to open)_
  - Dad told us not to touch the wires. _(focus: told us not to touch)_
  - She told me don't shout.
  - The guard told the visitors to wait outside. _(focus: told the visitors to wait)_

### 3.5.12 Reporting Requests

- **Pages:** Reporting a Polite Request · Could You…? Becomes Asked … To · Please Disappears · Asked For + Noun · Asked To or Asked For? · Asked … Not To · Requests: Recap
- **Key takeaways:** Asked + person + to + base. · The question becomes to + base. · Asked already shows it was polite. · A request for a thing. · An action, or a thing. · Please don't → asked … not to. · Asked to, asked for, asked not to.
- **Example sentences:**
  - Asha asked me to hold her bag. _(focus: asked me to hold)_
  - My neighbour asked me to water her plants. _(focus: asked me to water)_
  - The librarian asked us to speak quietly. _(focus: asked us to speak)_
  - The child asked for a glass of milk. _(focus: asked for a glass of milk)_
  - Ravi asked me to pass the salt.
  - Ravi asked for the salt.
  - Our neighbour asked us not to play loud music at night. _(focus: asked us not to play)_

### 3.5.13 Reporting Advice and Suggestions

- **Pages:** Reporting Advice and Ideas · Should Becomes Advised … To · Advised … Not To · Suggested + -ing · Suggested That We (Should) · Recommended · Advice and Suggestions: Recap
- **Key takeaways:** Advised, suggested, recommended. · Advised + person + to + base. · Shouldn't → advised … not to. · Let's go → suggested going. · Suggested that we…, never suggested us to. · Recommended + noun or -ing. · Advised to; suggested -ing; recommended.
- **Example sentences:**
  - The doctor advised me to drink more water. _(focus: advised me to drink)_
  - My teacher advised me to read more. _(focus: advised me to read)_
  - Dad advised us not to swim after lunch. _(focus: advised us not to swim)_
  - Ravi suggested going to the beach. _(focus: suggested going)_
  - Asha suggested that we should leave at six. _(focus: suggested that we should leave)_
  - The waiter recommended the fish curry. _(focus: recommended the fish curry)_
  - The guide recommended visiting the fort at sunrise. _(focus: recommended visiting)_

### 3.5.14 Reporting Orders and Instructions

- **Pages:** Orders, Warnings and Reminders · Verbs for Orders and Instructions · Warned and Reminded · Several Steps in One Report · Reporting Signs and Rules · Instructions on Labels · Orders and Instructions: Recap
- **Key takeaways:** Pick a verb that shows the kind of order. · Ordered, instructed, warned, reminded. · Danger, or something to remember. · One to can cover two steps. · The sign said that…. · The label said to…. · Choose the exact verb.
- **Example sentences:**
  - The officer ordered the crowd to move back. _(focus: ordered the crowd to move)_
  - The lifeguard warned us not to swim near the rocks. _(focus: warned us not to swim)_
  - Mum reminded me to take my lunch box. _(focus: reminded me to take)_
  - The chef told us to wash the rice and soak it for an hour. _(focus: to wash the rice and soak it)_
  - The sign said that visitors must not feed the animals. _(focus: The sign said that)_
  - The label said to take one tablet after meals. _(focus: The label said to take)_

### 3.5.15 Reporting Exclamations

- **Pages:** Reporting Strong Feelings · What a…! → Exclaimed That It Was… · How…! → Said That … Was Very… · Report the Feeling With a Verb · Report the Feeling With an Adjective · Wow! and Oh No! Disappear · Reported Exclamations: Recap
- **Key takeaways:** An exclamation becomes a statement. · It was a…, in statement order. · How + adjective becomes very + adjective. · Complained, cried, cheered. · Was amazed, was delighted. · Report the feeling, not the sound. · Turn the feeling into a statement.
- **Example sentences:**
  - Asha exclaimed that the view was beautiful. _(focus: exclaimed that)_
  - Ravi exclaimed that it was a brilliant goal. _(focus: exclaimed that it was a brilliant goal)_
  - Leela said that the puppy was very cute. _(focus: was very cute)_
  - Meena complained that the room was freezing. _(focus: complained that)_
  - Dad was amazed that the tree had grown so tall. _(focus: was amazed that)_
  - Kiran was delighted when he saw the snow. _(focus: was delighted)_

### 3.5.16 Reporting Wishes and Expressions

- **Pages:** Reporting Set Phrases · Wished + Person + Noun · More Wishes · Thank You Becomes Thanked · Sorry Becomes Apologised · Congratulations and Hello · Wishes and Expressions: Recap
- **Key takeaways:** Each phrase has its own verb. · Good luck! → wished me luck. · Happy Diwali, a safe journey. · Thanked someone for something. · Apologised for + -ing or noun. · Congratulated on; greeted. · Wished, thanked, apologised, congratulated, greeted.
- **Example sentences:**
  - Grandpa wished me a happy birthday. _(focus: wished me a happy birthday)_
  - My friends wished me luck before the exam. _(focus: wished me luck)_
  - Our neighbours wished us a happy Diwali. _(focus: wished us a happy Diwali)_
  - Leela thanked me for the present. _(focus: thanked me for the present)_
  - Ravi apologised for keeping us waiting. _(focus: apologised for keeping us waiting)_
  - The principal congratulated the team on their win. _(focus: congratulated the team on their win)_
  - The host greeted the guests at the door. _(focus: greeted the guests)_

### 3.5.17 Modals in Reported Speech

- **Pages:** Reporting Can, May and Must · Can, May and Shall Shift Back · The Modal Shift Table · Must Stays or Becomes Had To · Modals That Never Change · Shall I…? Becomes Offered To · Reported Modals: Recap
- **Key takeaways:** Some modals shift; some stay. · Can → could, may → might, shall → should. · Four modals change. · Must or had to, both correct. · Could, would, should, might, ought to stay. · An offer uses offered to. · Shift some, keep others.
- **Example sentences:**
  - Nisha said that she could play the tabla. _(focus: she could play)_
  - The forecaster said that it might snow in the hills. _(focus: it might snow)_
  - Uncle Raj asked what time we should leave for the airport. _(focus: we should leave)_
  - The coach said that the team had to train every morning. _(focus: had to train)_
  - My aunt said that I ought to learn to cook. _(focus: I ought to learn)_
  - The shopkeeper offered to wrap the gift for us. _(focus: offered to wrap)_

### 3.5.18 Reporting Universal Truths

- **Pages:** Facts That Are Always True · Keep the Present for a Fact · Science and Geography · Backshift Is Also Correct · A Fact or a Passing Situation? · Sayings Stay Present · Universal Truths: Recap
- **Key takeaways:** A fact can stay present. · Said that + present. · Facts about nature and places. · Correct, but it can sound odd. · Facts may stay; situations shift. · A proverb is always true. · Always true? Keep the present.
- **Example sentences:**
  - Our teacher told us that sound travels faster in water than in air. _(focus: sound travels faster)_
  - Grandpa explained that the moon has no light of its own. _(focus: the moon has no light)_
  - The guide said that the Ganges flows into the Bay of Bengal. _(focus: the Ganges flows)_
  - The scientist said that plants need sunlight to make food. _(focus: plants need sunlight)_
  - Miss Rao said that the heart pumped blood round the body. _(focus: the heart pumped blood)_
  - Rohan said that bats sleep upside down.
  - Rohan said that he was sleepy.
  - My grandmother often said that a stitch in time saves nine. _(focus: a stitch in time saves nine)_

### 3.5.19 When Backshift Is Not Necessary

- **Pages:** No Need to Shift Back · Says, Tells and Has Said · Passing On a Message Now · Still True Now · Lives or Lived? · Past Simple Can Stay · No Backshift: Recap
- **Key takeaways:** Sometimes the tense stays. · Present reporting verb, no shift. · Messages, notes and phone calls. · If nothing has changed, the tense can stay. · Both can be right. · Went can stay went. · Present verb, still true, or past simple.
- **Example sentences:**
  - Asha says that the bus is running late. _(focus: says that the bus is running)_
  - The weather app says that it will rain this evening. _(focus: says that it will rain)_
  - Mum has said that we can stay up till ten. _(focus: has said that we can stay)_
  - Ravi tells me that he wants a new cricket bat. _(focus: tells me that he wants)_
  - Kabir told me that he lives near the railway station. _(focus: he lives near)_
  - Leena said that her brother works in Chennai.
  - Leena said that her brother worked in Chennai.
  - Meena said that she missed the first bus. _(focus: she missed the first bus)_

### 3.5.20 Direct and Indirect Transformation

- **Pages:** Putting It All Together · The Five-Step Checklist · A Sentence Step by Step · Statement, Question or Command? · Three Types Side by Side · From Reported Back to Direct · Direct to Indirect: Recap
- **Key takeaways:** One checklist for every sentence. · Verb, link, pronouns, tense, time and place. · Apply each step in turn. · The sentence type picks the pattern. · Same speaker, three patterns. · Reverse each step. · Check every step, every time.
- **Example sentences:**
  - Anil told me that he would bring his camera the next day. _(focus: told me that he would bring)_
  - Riya said that she was waiting there for her cousin. _(focus: she was waiting there)_
  - Coach Singh said that the match was cancelled. _(focus: said that the match was)_
  - Coach Singh asked whether we had our boots. _(focus: asked whether we had)_
  - Coach Singh told us to go home early. _(focus: told us to go)_
  - Kavya said, "I am returning these library books now." _(focus: "I am returning these library books now.")_

### 3.5.21 Common Errors in Reported Speech

- **Pages:** Six Errors to Watch For · Told Needs Someone · Asked Me, Not Asked to Me · Keep the Tenses Matching · Change the Pronouns Too · No Quotation Marks in Reported Speech · No That Before a Question Word · Reported Speech Errors: Recap
- **Key takeaways:** Spot it, then fix it. · Told + person + that. · No to after asked. · Shift every verb, not just one. · I becomes he or she. · Reported words lose their quotes. · Asked where, not asked that where. · Check verb, tense, pronoun and punctuation.
- **Example sentences:**
  - Neha told her mother that the milk had gone sour. _(focus: told her mother that)_
  - Vikram told that the lift on our floor had stopped working.
  - The stranger asked to me where the bank was.
  - Sunil said that he is hungry and wanted a sandwich.
  - Mira said that I was going to the dentist.
  - Farah said that "she was busy that evening."
  - The driver asked that which road we wanted.

### 4.1.1 Introduction to Prepositions

- **Pages:** Small Words That Link · What a Preposition Links · Preposition + Object · A Map of the Kinds · Three Kinds in One Sentence · Ask Where, When or How · Prepositions: Recap
- **Key takeaways:** A preposition links a noun to the sentence. · It shows how two things are connected. · The noun after it is its object. · Place, time, movement and more. · One sentence can have several. · The answer often starts with a preposition. · Preposition + object shows a relationship.
- **Example sentences:**
  - The kitten is hiding behind the curtain. _(focus: behind the curtain)_
  - Meera left her umbrella on the bus. _(focus: on the bus)_
  - Grandpa walked to the temple with us. _(focus: to the temple, with us)_
  - On Saturday morning we cycled across the bridge to the market. _(focus: On Saturday morning, across the bridge, to the market)_
  - The parcel arrived during the storm. _(focus: during the storm)_

### 4.1.2 Prepositions of Place

- **Pages:** Where Is It? · At for a Point · In for Inside · On for a Surface · Inside or On Top? · Home, Town and Road · Place: Recap
- **Key takeaways:** At, in and on show where. · A stop, a door, a desk. · A box, a room, a town. · A wall, a table, a floor. · In means inside; on means on a surface. · At home, in Hubballi, on Lamington Road. · At a point, in a space, on a surface.
- **Example sentences:**
  - Nani is waiting at the bus stop. _(focus: at the bus stop)_
  - Someone is knocking at the back door. _(focus: at the back door)_
  - There are six eggs in the basket. _(focus: in the basket)_
  - Ravi stuck a poster on his bedroom wall. _(focus: on his bedroom wall)_
  - The new kitten is curled up in the shoebox.
  - The new kitten is sitting on the shoebox.
  - Our new dentist works in Hubballi, on Lamington Road. _(focus: in Hubballi, on Lamington Road)_
  - Dad is still at work. _(focus: at work)_

### 4.1.3 Prepositions of Position

- **Pages:** Where Is It Compared With Something Else? · Under and Below · Over and Above · Beside and Next To · At the Back or Ahead? · Opposite and Near · Position: Recap
- **Key takeaways:** Position words compare two things. · Lower than something. · Higher than something. · At the side of something. · Behind or in front of. · Facing across, or a short way away. · Higher, lower, side, back, front, facing.
- **Example sentences:**
  - The lamp hangs above the dining table. _(focus: above the dining table)_
  - Our dog hides under the bed during thunderstorms. _(focus: under the bed)_
  - The temperature fell below zero. _(focus: below zero)_
  - Grandpa hung a mirror over the sink. _(focus: over the sink)_
  - The kites were high above the rooftops. _(focus: above the rooftops)_
  - Asha always sits next to the window. _(focus: next to the window)_
  - A tall palm grows beside our gate. _(focus: beside our gate)_
  - The cyclist is waiting behind the van.
  - The cyclist is waiting in front of the van.
  - The pharmacy is opposite the post office. _(focus: opposite the post office)_
  - We live near a big lake. _(focus: near a big lake)_

### 4.1.4 Prepositions of Time

- **Pages:** Pinning Down the Time · At for Clock Times · On for Days and Dates · In for Months, Years and Seasons · Any Morning or One Morning? · No Preposition Before Next and Every · Time: Recap
- **Key takeaways:** At, on and in show when. · At half past eight, at dusk. · On Friday, on the tenth. · In July, in 1998, in winter. · Name the day, and use on. · Next week, not on next week. · At a time, on a day, in a month.
- **Example sentences:**
  - The magic show begins at seven on Friday. _(focus: at seven, on Friday)_
  - We had dinner at half past eight. _(focus: at half past eight)_
  - The street lights come on at dusk. _(focus: at dusk)_
  - My birthday falls on the tenth of May. _(focus: on the tenth of May)_
  - The school was built in 1998. _(focus: in 1998)_
  - It rains a lot here in July. _(focus: in July)_
  - Grandpa does yoga in the morning.
  - Grandpa missed his yoga on Monday morning.
  - We are visiting Ooty next week. _(focus: next week)_
  - The dentist sees patients every Tuesday. _(focus: every Tuesday)_

### 4.1.5 Prepositions of Direction

- **Pages:** Pointing the Way · Towards · To or Towards? · Throw At or Throw To? · Pointing and Shouting · To the Left, in the Direction Of · Direction: Recap
- **Key takeaways:** Direction words point the way. · The direction, not the end point. · To shows the end; towards shows the way. · At aims; to passes. · Point at, shout at, bark at. · Name the way. · Towards, at, to the left.
- **Example sentences:**
  - The goat wandered towards the river. _(focus: towards the river)_
  - A big wave rolled towards the boat. _(focus: towards the boat)_
  - Uncle Joe drove to the toll booth.
  - Uncle Joe drove towards the toll booth.
  - Kabir threw the ball to his little sister. _(focus: to his little sister)_
  - The angry monkey threw a mango at the tourist. _(focus: at the tourist)_
  - The guide pointed at the old fort on the hill. _(focus: at the old fort)_
  - Please don't shout at the puppy. _(focus: at the puppy)_
  - Take the second road to the right. _(focus: to the right)_
  - The birds flew off in the direction of the sea. _(focus: in the direction of the sea)_

### 4.1.6 Prepositions of Movement

- **Pages:** The Path Something Takes · Across · Across or Through? · Along · Past · Over, Up, Down and Round · Movement: Recap
- **Key takeaways:** Movement words show the route. · From one side to the other. · Through means inside something. · Following a line. · Going by without stopping. · Above, higher, lower, in a circle. · Across, through, along, past, over, round.
- **Example sentences:**
  - A squirrel dashed across the lawn. _(focus: across the lawn)_
  - We rowed across the lake to the island. _(focus: across the lake)_
  - The cows wandered across the field.
  - The path winds through the forest.
  - We strolled along the beach at sunset. _(focus: along the beach)_
  - The school bus drove past our house. _(focus: past our house)_
  - The pony leapt over the low hedge. _(focus: over the low hedge)_
  - The children raced up the hill. _(focus: up the hill)_
  - The earth moves round the sun. _(focus: round the sun)_

### 4.1.7 Prepositions of Origin and Source

- **Pages:** Where Does It Come From? · From for Origin · From for a Source · Made Of · Made Of or Made From? · Made Out Of · Origin and Source: Recap
- **Key takeaways:** From shows the starting point. · Come from, be from. · A letter from, news from. · You can still see the material. · Made from: the material has changed. · Something made from a reused thing. · From, made of, made from, made out of.
- **Example sentences:**
  - These sweet oranges come from Nagpur. _(focus: from Nagpur)_
  - Our new classmate is from Shillong. _(focus: from Shillong)_
  - I got a long letter from my pen friend. _(focus: from my pen friend)_
  - We heard the news from our neighbour. _(focus: from our neighbour)_
  - This old table is made of teak. _(focus: made of teak)_
  - This basket is made of bamboo.
  - Paper is made from wood.
  - Riya made a pencil stand out of an old tin. _(focus: out of an old tin)_

### 4.1.8 Prepositions of Destination

- **Pages:** Where Does the Journey End? · To for the End Point · Into and Onto · Arrive At, Arrive In · One Building or a Whole City? · Reach and Leave For · Destination: Recap
- **Key takeaways:** Destination words show the end point. · Go to, travel to. · To the inside, or to a surface. · At a building; in a city. · Never arrive to. · Reach the top; leave for Delhi. · To, into, onto; arrive at or in; reach.
- **Example sentences:**
  - Next month we are flying to Guwahati. _(focus: to Guwahati)_
  - Grandma takes the ferry to the island every week. _(focus: to the island)_
  - The frog jumped into the bucket. _(focus: into the bucket)_
  - The cat sprang onto the kitchen counter. _(focus: onto the kitchen counter)_
  - Our train arrived at the station late. _(focus: arrived at the station)_
  - We arrived in Jaipur at dawn. _(focus: arrived in Jaipur)_
  - The guests arrived at the hotel.
  - The guests arrived in Shimla.
  - The climbers reached the summit by noon. _(focus: reached the summit)_
  - Dad leaves for Delhi tomorrow. _(focus: leaves for Delhi)_

### 4.1.9 Prepositions of Distance

- **Pages:** How Far Is It? · Far From · Near and Close To · Away From · Within · From … To and a Number + From · Distance: Recap
- **Key takeaways:** Distance words show how far. · A long way. · A short way. · Keeping a distance. · Inside a distance. · Measure the distance. · Far, near, away, within, from … to.
- **Example sentences:**
  - The airport is far from the city centre. _(focus: far from the city centre)_
  - Hostel students live far from their families. _(focus: far from their families)_
  - Our flat is close to the metro station. _(focus: close to the metro station)_
  - There's a good bakery near the clinic. _(focus: near the clinic)_
  - Keep the matches away from the children. _(focus: away from the children)_
  - Three schools are within walking distance of our home. _(focus: within walking distance)_
  - It is a long drive from Bengaluru to Chennai. _(focus: from Bengaluru to Chennai)_
  - The beach is two kilometres from our hotel. _(focus: two kilometres from our hotel)_

### 4.1.10 Prepositions of Duration

- **Pages:** A Stretch of Time · During · Throughout · For + a Length of Time · How Long or Which Period? · From … To and Over · Duration: Recap
- **Key takeaways:** Duration words show a period. · Inside a period or event. · From start to end. · For tells how long. · For + a length; during + a period. · Start and end; across a period. · During, throughout, for, from … to, over.
- **Example sentences:**
  - Nobody spoke during the long drive. _(focus: during the long drive)_
  - The power went off during the cricket match. _(focus: during the cricket match)_
  - It drizzled throughout the wedding. _(focus: throughout the wedding)_
  - Arjun practised the violin for forty minutes. _(focus: for forty minutes)_
  - We stayed in Goa for a week.
  - We stayed in Goa during the holidays.
  - The museum is open from ten to five. _(focus: from ten to five)_
  - We painted the fence over the weekend. _(focus: over the weekend)_

### 4.1.11 Prepositions of Cause and Reason

- **Pages:** Giving the Reason · Because Of + Noun · Due To and Owing To · Thanks To · Out Of + a Feeling · Die Of, Suffer From, Jump For · Cause and Reason: Recap
- **Key takeaways:** Cause words give a reason. · A reason as a noun. · More formal reasons. · A reason for something good. · Out of curiosity, out of kindness. · Each verb has its own preposition. · Because of, due to, thanks to, out of.
- **Example sentences:**
  - The match was stopped because of bad light. _(focus: because of bad light)_
  - We stayed indoors because of the heatwave. _(focus: because of the heatwave)_
  - The exam was postponed owing to the floods. _(focus: owing to the floods)_
  - Our train was late due to a signal fault. _(focus: due to a signal fault)_
  - Thanks to your help, we finished early. _(focus: Thanks to your help)_
  - Meera opened the box out of curiosity. _(focus: out of curiosity)_
  - Grandpa suffers from back pain. _(focus: suffers from back pain)_
  - The winners jumped for joy on stage. _(focus: jumped for joy)_

### 4.1.12 Prepositions of Purpose

- **Pages:** What Is It For? · For + Noun · Everyday Purposes · For + -ing for a Use · Never For To · For + Noun or To + Verb? · Purpose: Recap
- **Key takeaways:** For shows purpose. · For a walk, for lunch. · Lunch, an interview, a check-up. · What a thing is used for. · To + verb, or for + noun. · Both show purpose. · For + noun, for + -ing, to + verb.
- **Example sentences:**
  - Let's go for a swim this evening. _(focus: for a swim)_
  - Grandpa went out for his evening walk. _(focus: for his evening walk)_
  - We stopped at a dhaba for lunch. _(focus: for lunch)_
  - Aunt Mala came to the city for an interview. _(focus: for an interview)_
  - This brush is for painting walls. _(focus: for painting walls)_
  - We need a knife for cutting the cake. _(focus: for cutting the cake)_
  - She went to the shop for to buy bread.
  - Mum sent me to the bakery for bread.
  - Mum sent me to the bakery to buy bread.

### 4.1.13 Prepositions of Manner

- **Pages:** The Way It Was Done · With + a Noun · Feelings With With · In + a Noun · In a Whisper, In Pairs · By Mistake, By Heart, Like · Manner: Recap
- **Key takeaways:** Manner words show the way. · With care, with confidence. · A smile, some fear. · In a hurry, in silence. · A voice, a group. · Fixed phrases and likeness. · With, in, by and like.
- **Example sentences:**
  - The nurse lifted the baby with great care. _(focus: with great care)_
  - Ravi answered the question with confidence. _(focus: with confidence)_
  - The shopkeeper greeted us with a warm smile. _(focus: with a warm smile)_
  - Leela climbed the ladder with some fear. _(focus: with some fear)_
  - Dad left the house in a hurry. _(focus: in a hurry)_
  - The class sat in silence. _(focus: in silence)_
  - Grandma told the secret in a whisper. _(focus: in a whisper)_
  - The students worked in pairs. _(focus: in pairs)_
  - I took your umbrella by mistake. _(focus: by mistake)_
  - Meena knows the whole poem by heart. _(focus: by heart)_
  - The puppy howled like a wolf. _(focus: like a wolf)_

### 4.1.14 Prepositions of Means and Instrument

- **Pages:** What Was Used? · By + Transport · By Email, By Post · On Foot · With + a Tool · In Ink, In Tamil · Means and Instrument: Recap
- **Key takeaways:** Means words show the way or tool. · By train, with no article. · Methods of sending. · On foot, not by foot. · The instrument used. · The medium of writing or speaking. · By, on foot, with, in.
- **Example sentences:**
  - Most of my classmates come to school by bus. _(focus: by bus)_
  - We travelled to Madurai by overnight train. _(focus: by overnight train)_
  - Please send the form by email. _(focus: by email)_
  - The invitation came by post. _(focus: by post)_
  - The village is so small that everyone gets around on foot. _(focus: on foot)_
  - Grandma cut the cloth with sharp scissors. _(focus: with sharp scissors)_
  - He opened the coconut with a heavy knife. _(focus: with a heavy knife)_
  - Sign your name in blue ink. _(focus: in blue ink)_
  - The guide explained everything in Tamil. _(focus: in Tamil)_

### 4.1.15 Prepositions of Agent

- **Pages:** Who Did It? · The Agent After a Passive Verb · People and Things as Doers · A Noun + By · Songs and Paintings · The Doer or the Tool? · Agent: Recap
- **Key takeaways:** By names the doer. · After a passive verb. · The doer can be a thing. · A novel by, a song by. · By + the artist. · By + doer; with + tool. · By for the doer or creator.
- **Example sentences:**
  - This lovely mural was painted by our art teacher. _(focus: by our art teacher)_
  - The injured bird was rescued by two schoolgirls. _(focus: by two schoolgirls)_
  - The new library was opened by the mayor. _(focus: by the mayor)_
  - Our roof was damaged by the cyclone. _(focus: by the cyclone)_
  - We are reading a novel by R. K. Narayan. _(focus: by R. K. Narayan)_
  - The concert ended with a song by A. R. Rahman. _(focus: by A. R. Rahman)_
  - Have you seen this painting by Amrita Sher-Gil? _(focus: by Amrita Sher-Gil)_
  - The letter was written by Priya.
  - The letter was written with a fountain pen.

### 4.1.16 Prepositions of Possession and Relationship

- **Pages:** Parts, Roles and Features · Of for a Part · Tops, Roofs and Ends · Of for a Role · Members and Leaders · With and Without · Possession: Recap
- **Key takeaways:** Of, with and without show belonging. · One thing is part of another. · Part + of + whole. · Captain of, principal of. · Role + of + group. · What it has, or lacks. · Of, with, without.
- **Example sentences:**
  - The handle of this suitcase is broken. _(focus: The handle of this suitcase)_
  - We sat at the end of the jetty. _(focus: the end of the jetty)_
  - The roof of the bus shelter leaks. _(focus: The roof of the bus shelter)_
  - Write your name at the top of the page. _(focus: the top of the page)_
  - Kavya is the captain of the hockey team. _(focus: the captain of the hockey team)_
  - Mr Bose is the principal of our school. _(focus: the principal of our school)_
  - The members of the choir wore white. _(focus: The members of the choir)_
  - I want a room with a balcony. _(focus: with a balcony)_
  - Grandpa drinks his coffee without sugar. _(focus: without sugar)_

### 4.1.17 Prepositions of Comparison

- **Pages:** Same or Different? · Like + Noun · Unlike + Noun · As + a Role · A Real Role or Just Similar? · Compared With · Comparison: Recap
- **Key takeaways:** Comparison words link two things. · Similar to. · Different from. · A real job or use. · As for a role; like for a likeness. · Two things side by side. · Like, unlike, as, compared with.
- **Example sentences:**
  - Your laugh sounds just like your mother's. _(focus: like your mother's)_
  - This fruit tastes like a pear. _(focus: like a pear)_
  - Unlike his brother, Arun loves maths. _(focus: Unlike his brother)_
  - My aunt works as a pilot. _(focus: as a pilot)_
  - Rahul worked as a waiter during the summer.
  - Rahul carried the plates like a waiter.
  - Compared with last year, this summer is cooler. _(focus: Compared with last year)_

### 4.1.18 Prepositions of Exception and Inclusion

- **Pages:** In or Out? · Except · But Meaning Except · Apart From · Besides, Not Beside · Including and Excluding · Exception and Inclusion: Recap
- **Key takeaways:** These words leave out or add in. · Leaves something out. · After all, every, nobody, nothing. · Except, or in addition to. · Besides means in addition to. · Add in, or leave out. · Except, but, apart from, besides, including.
- **Example sentences:**
  - Everyone came to the party except Neel. _(focus: except Neel)_
  - The shop is open every day except Monday. _(focus: except Monday)_
  - Nobody but Grandpa knew the password. _(focus: Nobody but Grandpa)_
  - Apart from the rain, the trip was perfect. _(focus: Apart from the rain)_
  - Apart from tennis, Riya plays the sitar. _(focus: Apart from tennis)_
  - Besides English, Arjun speaks Telugu and Hindi. _(focus: Besides English)_
  - Five of us, including my cousin, went rafting. _(focus: including my cousin)_
  - The ticket costs 500 rupees, excluding lunch. _(focus: excluding lunch)_

### 4.1.19 Prepositions of Support and Opposition

- **Pages:** Taking Sides · For and Against · Supporting or Opposing? · In Favour Of · With You · Despite and In Spite Of · Support and Opposition: Recap
- **Key takeaways:** For, against, despite. · Support or opposition. · For and against are opposites. · Supporting a choice. · With can mean on your side. · Even though something was against it. · For, against, in favour of, despite.
- **Example sentences:**
  - Most of the class voted for a trip to the zoo. _(focus: for a trip to the zoo)_
  - The villagers protested against the new factory. _(focus: against the new factory)_
  - Are you for the new school timetable?
  - Are you against the new school timetable?
  - The judges decided in favour of the younger team. _(focus: in favour of the younger team)_
  - Whatever you decide, the whole family is with you. _(focus: with you)_
  - We played on despite the drizzle. _(focus: despite the drizzle)_
  - In spite of feeling tired, Nisha finished the race. _(focus: In spite of feeling tired)_

### 4.1.20 Prepositions of Topic and Reference

- **Pages:** What Is It About? · About + a Topic · About or On? · Regarding and Concerning · As For · According To a Source · Topic and Reference: Recap
- **Key takeaways:** Topic words name the subject. · Stories, talk and feelings. · On suits talks and studies. · Formal words for about. · Moving to a new topic. · Where the information comes from. · About, on, regarding, as for, according to.
- **Example sentences:**
  - We watched a short film about honeybees. _(focus: about honeybees)_
  - Grandpa told us a funny tale about his first bicycle. _(focus: about his first bicycle)_
  - Asha wrote a poem about the monsoon.
  - The professor gave a lecture on the monsoon.
  - The school sent a notice regarding the sports day. _(focus: regarding the sports day)_
  - I have a question concerning the fees. _(focus: concerning the fees)_
  - The cake was lovely. As for the samosas, they were gone in minutes. _(focus: As for the samosas)_
  - According to the forecast, it will be sunny tomorrow. _(focus: According to the forecast)_

### 4.1.21 Simple Prepositions

- **Pages:** The Shortest Prepositions · A Single Word · Common Simple Prepositions · One Word, Several Uses · Three Uses in One Sentence · Finding Simple Prepositions · Simple Prepositions: Recap
- **Key takeaways:** Simple means one word. · At, by, for, from, in, of, on, to, with. · Sorted by relationship. · On can show place, time or topic. · Read the object to find the use. · One small word before a noun or pronoun. · One word, many uses.
- **Example sentences:**
  - Put the letter in the drawer by the door. _(focus: in the drawer, by the door)_
  - The cat slept on the warm windowsill. _(focus: on the warm windowsill)_
  - On Sunday we found a book on birds on the top shelf. _(focus: On Sunday, on birds, on the top shelf)_
  - Leena waved to us from the balcony. _(focus: to us, from the balcony)_

### 4.1.22 Compound Prepositions

- **Pages:** Two Parts, One Word · Two Parts Joined · How They Are Built · Within, Without, Throughout · Underneath and Upon · Into, Not In To · Compound Prepositions: Recap
- **Key takeaways:** Compound means joined. · In + to = into. · Part + part = one word. · More common compounds. · Under + neath; up + on. · Write the compound as one word. · Two parts, one word.
- **Example sentences:**
  - The ducklings waddled into the pond. _(focus: into the pond)_
  - The lizard ran onto the warm rock. _(focus: onto the warm rock)_
  - Please reply within two days. _(focus: within two days)_
  - The cat hid underneath the parked car. _(focus: underneath the parked car)_
  - The old book was placed upon the altar. _(focus: upon the altar)_
  - The cat jumped in to the basket.

### 4.1.23 Complex Prepositions

- **Pages:** Prepositions Made of Several Words · Two-Word Groups · Two-Word Groups at Work · Three-Word Groups · Three-Word Groups at Work · One Group, One Object · Complex Prepositions: Recap
- **Key takeaways:** Complex means a group. · Because of, next to, instead of. · Next to, out of. · In front of, on top of. · In addition to, by means of. · Treat the group like one word. · A group that works as one.
- **Example sentences:**
  - We waited in front of the cinema for an hour. _(focus: in front of the cinema)_
  - Let's have rice instead of chapatis tonight. _(focus: instead of chapatis)_
  - The bus stop is next to the clock tower. _(focus: next to the clock tower)_
  - The goats wandered out of the shed. _(focus: out of the shed)_
  - Someone left a parcel on top of the fridge. _(focus: on top of the fridge)_
  - In addition to the prize, she got a medal. _(focus: In addition to the prize)_
  - The boxes were lifted by means of a crane. _(focus: by means of a crane)_
  - Because of the traffic jam on the highway, we missed the start. _(focus: Because of the traffic jam)_

### 4.1.24 Prepositional Phrases

- **Pages:** A Preposition and Its Group · Preposition + Object + Describers · Short and Long Phrases · A Phrase After a Noun · Which One? · Where, When or How · Prepositional Phrases: Recap
- **Key takeaways:** The phrase is one unit. · Everything up to the object. · Two words or many. · It describes the noun. · The phrase answers which one. · The phrase can work like an adverb. · One unit, two jobs.
- **Example sentences:**
  - The parrot in the cage can whistle a tune. _(focus: in the cage)_
  - We swam in the cool blue water. _(focus: in the cool blue water)_
  - Grandpa sat on the old wooden bench. _(focus: on the old wooden bench)_
  - The house on the hill belongs to my uncle. _(focus: on the hill)_
  - The boy with the blue backpack is my cousin. _(focus: with the blue backpack)_
  - I loved the book about the haunted ship. _(focus: about the haunted ship)_
  - The kittens played under the table in the evening. _(focus: under the table, in the evening)_

### 4.1.25 Prepositions at the End of Sentences

- **Pages:** Finishing With a Preposition · At the End of a Relative Clause · Everyday or Formal? · In a Passive · After To + Verb · Not Twice · End Prepositions: Recap
- **Key takeaways:** The preposition can come last. · The bench we sat on. · At the end or before which. · Was cared for, was talked about. · A pen to write with. · Before which or at the end, not both. · Last is fine; once only.
- **Example sentences:**
  - This is the flat my grandparents lived in. _(focus: lived in)_
  - That's the bench we sat on yesterday. _(focus: sat on)_
  - This is the room we sleep in.
  - This is the room in which we sleep.
  - The stray dog was finally cared for. _(focus: cared for)_
  - Our idea was talked about for weeks. _(focus: talked about)_
  - I need a pen to write with. _(focus: to write with)_
  - There's nothing to sit on in this room. _(focus: nothing to sit on)_
  - This is the house in which I live in.

### 4.1.26 Prepositions in Questions

- **Pages:** Questions That End With a Preposition · Question Word … Preposition · Where From? What For? · Preposition First, With Whom · Who … To or To Whom? · What For? and What … Like? · Prepositions in Questions: Recap
- **Key takeaways:** The preposition often goes last. · Which … on? Who … with? · Origin and purpose questions. · Formal: To whom …? · After a preposition, use whom. · Short replies and descriptions. · At the end, or first with whom.
- **Example sentences:**
  - Who are you going to the market with? _(focus: Who are you going to the market with)_
  - Which shelf did you put the jam on? _(focus: Which shelf did you put the jam on)_
  - Where does your new teacher come from? _(focus: Where does your new teacher come from)_
  - What is this little hook for? _(focus: What is this little hook for)_
  - To whom should I send the report? _(focus: To whom)_
  - Who did you give the keys to?
  - To whom did you give the keys?
  - "I need some money." "What for?" _(focus: What for)_
  - What is your new school like? _(focus: What is your new school like)_

### 4.1.27 Prepositions Followed by Nouns and Pronouns

- **Pages:** What Comes After a Preposition? · A Whole Noun Phrase · Long Objects · Object Pronouns After a Preposition · Reflexive Pronouns · A Wh- Clause · Nouns and Pronouns: Recap
- **Key takeaways:** A noun, a pronoun or a clause. · The noun and its describers. · Find the noun at the end. · Towards us, not towards we. · By herself, for myself. · About where to put it. · Phrase, pronoun or clause.
- **Example sentences:**
  - The cat sat next to my grandmother's old rocking chair. _(focus: next to my grandmother's old rocking chair)_
  - We hiked across the wide, dusty plain. _(focus: across the wide, dusty plain)_
  - Dad hid the gift behind the big blue curtain. _(focus: behind the big blue curtain)_
  - The puppy ran towards us. _(focus: towards us)_
  - Anu built the model by herself. _(focus: by herself)_
  - I bought this scarf for myself. _(focus: for myself)_
  - We argued about where to put the sofa. _(focus: about where to put the sofa)_
  - It depends on how much it costs. _(focus: on how much it costs)_

### 4.1.28 Prepositions Followed by Gerunds

- **Pages:** A Verb After a Preposition · Preposition + -ing · No Base Form After a Preposition · Look Forward To + -ing · Be Used To, Object To · Without and Instead Of + -ing · Prepositions + -ing: Recap
- **Key takeaways:** Add -ing. · About joining, not about join. · Talked about going. · Here, to is a preposition. · To + -ing again. · Not doing; doing something else. · Preposition + -ing, always.
- **Example sentences:**
  - Thank you for carrying the heavy boxes. _(focus: for carrying)_
  - Nisha is thinking about joining the drama club. _(focus: about joining)_
  - We talked about go to the zoo.
  - We are looking forward to meeting our new cousins. _(focus: looking forward to meeting)_
  - Grandpa is used to waking up at five. _(focus: is used to waking)_
  - My sister objects to sharing her room. _(focus: objects to sharing)_
  - Kabir left the party without saying goodbye. _(focus: without saying goodbye)_
  - Let's walk instead of taking the bus. _(focus: instead of taking)_

### 4.1.29 Adjective + Preposition Combinations

- **Pages:** More Adjective Partners · Adjectives With Of · Adjectives With With · Adjectives With To and For · Adjectives With From · Sorry For or Sorry About? · Adjective Pairs: Recap
- **Key takeaways:** Learn the adjective with its preposition. · Aware of, full of, capable of. · Pleased with, familiar with. · Similar to, famous for. · Different from, absent from. · A person, or a thing. · Learn each pair together.
- **Example sentences:**
  - Our cat is very fond of warm milk. _(focus: fond of warm milk)_
  - Are you aware of the new library rules? _(focus: aware of the new library rules)_
  - The jar was full of old coins. _(focus: full of old coins)_
  - The teacher was pleased with our science project. _(focus: pleased with our science project)_
  - Are you familiar with this old song? _(focus: familiar with this old song)_
  - Your schoolbag is similar to mine. _(focus: similar to mine)_
  - Agra is famous for the Taj Mahal. _(focus: famous for the Taj Mahal)_
  - This puzzle is different from the last one. _(focus: different from the last one)_
  - Ravi was absent from school yesterday. _(focus: absent from school)_
  - I felt sorry for the lost puppy. _(focus: sorry for the lost puppy)_
  - We are sorry about the mess. _(focus: sorry about the mess)_
  - Swimming is good for your back. _(focus: good for your back)_

### 4.1.30 Verb + Preposition Combinations

- **Pages:** More Verb Partners · Fixed Partners · Believe In, Consist Of, Laugh At · Agree With or Agree On · Think Of or Think About? · Verb + Object + Preposition · Verb Pairs: Recap
- **Key takeaways:** Learn the verb with its preposition. · Belong to, apply for, rely on. · More fixed partners. · A person, or a decision. · An idea, or a plan in your mind. · Blame X for, remind X of. · Learn each verb with its partner.
- **Example sentences:**
  - This red umbrella belongs to my aunt. _(focus: belongs to my aunt)_
  - My brother applied for a job at the bank. _(focus: applied for a job)_
  - You can always rely on Meena. _(focus: rely on Meena)_
  - Grandma believes in hard work. _(focus: believes in hard work)_
  - The kit consists of six brushes and a palette. _(focus: consists of six brushes)_
  - Nobody laughed at his joke. _(focus: laughed at his joke)_
  - I completely agree with Kavya. _(focus: agree with Kavya)_
  - We finally agreed on a name for the puppy. _(focus: agreed on a name)_
  - Can you think of a good title?
  - I am thinking about the school trip.
  - Don't blame Raju for the spilt paint. _(focus: blame Raju for)_
  - This song reminds me of summer. _(focus: reminds me of summer)_
  - Sunscreen protects your skin from the sun. _(focus: protects your skin from)_

### 4.1.31 Noun + Preposition Combinations

- **Pages:** Nouns With Partners · Nouns With For · Nouns With Of · Nouns With In · Nouns With To · Nouns With With · Noun Pairs: Recap
- **Key takeaways:** Learn the noun with its preposition. · Reason for, demand for, need for. · Cause of, advantage of. · Interest in, rise in. · Answer to, key to, invitation to. · Problem with, relationship with. · Learn each noun with its partner.
- **Example sentences:**
  - Nobody knows the reason for the sudden power cut. _(focus: reason for)_
  - There is a huge demand for mangoes in summer. _(focus: demand for mangoes)_
  - Burnt toast was the cause of the fire alarm. _(focus: cause of the fire alarm)_
  - One advantage of cycling is the fresh air. _(focus: advantage of cycling)_
  - Riya has a keen interest in astronomy. _(focus: interest in astronomy)_
  - There has been a rise in vegetable prices. _(focus: rise in vegetable prices)_
  - We got an invitation to their housewarming. _(focus: invitation to their housewarming)_
  - I lost the key to the garden shed. _(focus: key to the garden shed)_
  - Is there a problem with the printer? _(focus: problem with the printer)_
  - She has a good relationship with her neighbours. _(focus: relationship with her neighbours)_

### 4.1.32 Preposition vs Adverb

- **Pages:** Same Word, Different Job · Is There an Object? · Behind With and Without an Object · Below in Two Jobs · Along in Two Jobs · The Move Test for Particles · Preposition or Adverb: Recap
- **Key takeaways:** Look at what follows the word. · Object: preposition. No object: adverb. · Look for an object. · Below the surface; the notes below. · Along the canal; come along. · If it can move, it is a particle. · Object test and move test.
- **Example sentences:**
  - The children waited below the bridge. _(focus: below the bridge)_
  - The kitten crawled underneath the sofa. _(focus: underneath the sofa)_
  - Ravi hid behind the door.
  - Ravi stayed behind to help the teacher.
  - The divers swam below the surface. _(focus: below the surface)_
  - Please read the notes below. _(focus: the notes below)_
  - We walked along the canal. _(focus: along the canal)_
  - Can my little brother come along? _(focus: come along)_
  - Please put away your toys. _(focus: put away)_
  - The ball rolled under the car. _(focus: under the car)_

### 4.1.33 Preposition vs Conjunction

- **Pages:** A Noun or a Clause? · The Noun-or-Clause Test · Until in Two Jobs · Because Of or Because? · During or While? · Despite or Although? · Preposition or Conjunction: Recap
- **Words shown in more than one job:** because
- **Key takeaways:** What follows decides the job. · Noun: preposition. Clause: conjunction. · Same word, two jobs. · Because of + noun; because + clause. · During + noun; while + clause. · Despite + noun; although + clause. · Noun or clause?
- **Example sentences:**
  - The temple fireworks went on until dawn. _(focus: until dawn)_
  - We played cricket till sunset. _(focus: till sunset)_
  - The library stays open until eight.
  - Stay in the library until your mother arrives.
  - We left early because of the long queue.
  - We left early because the queue was long.
  - Dad fell asleep during the film.
  - Dad fell asleep while we were watching the film.
  - Despite the cold, we went swimming.
  - Although it was cold, we went swimming.

### 4.1.34 Commonly Confused Prepositions

- **Pages:** Pairs That Look Alike · Between or Among? · In the Car or On the Bus? · On Time or In Time? · At the End or In the End? · By or Until? · Confused Pairs: Recap
- **Key takeaways:** Small changes, different meanings. · Between for two; among for a group. · In a car; on a bus, train or plane. · Punctual, or early enough. · The last part, or finally. · A deadline, or something that continues. · Check the meaning before you choose.
- **Example sentences:**
  - Our guests arrived just in time for dinner. _(focus: in time for dinner)_
  - Share the sweets between the twins.
  - Share the sweets among all the children.
  - Mum is waiting in the car.
  - We chatted all the way on the bus.
  - The express train left on time.
  - We reached the station in time to buy snacks.
  - At the end of the film, everyone clapped.
  - In the end, we chose the blue paint.
  - Please return the book by Friday.
  - You can keep the book until Friday.

### 4.1.35 Preposition Usage and Common Errors

- **Pages:** Six Preposition Slips · Comprises, Not Comprises Of · Cope With, Not Cope Up With · Senior To, Not Senior Than · Prefer One Thing To Another · Married To, Not Married With · In My Opinion, Not According to Me · Preposition Errors: Recap
- **Key takeaways:** Check the word that comes with the preposition. · Comprises, or consists of. · No up. · Senior, junior, superior + to. · Prefer X to Y. · Married takes to. · According to names another source. · Check the partner word.
- **Example sentences:**
  - This tool kit comprises a hammer, pliers and a saw. _(focus: comprises a hammer)_
  - The house comprises of three bedrooms.
  - Nikhil could not cope up with the heat.
  - My cousin is senior than me.
  - I prefer walking than cycling.
  - My aunt is married with a doctor.
  - According to me, the film was too long.

### 4.2.1 Introduction to Conjunctions

- **Pages:** Words That Join · Words, Phrases or Clauses · Phrases and Clauses Joined · Three Families · One From Each Family · Spotting a Conjunction · Conjunctions: Recap
- **Key takeaways:** A conjunction joins parts of a sentence. · Conjunctions join all three. · Small parts or whole clauses. · Coordinating, subordinating, correlative. · Three ways to join. · Look for the word that links two parts. · Join words, phrases and clauses.
- **Example sentences:**
  - Kiran packed sandwiches and lemonade for the trek. _(focus: sandwiches and lemonade)_
  - The dosa was crisp but a little salty. _(focus: crisp but a little salty)_
  - We can meet in the library or at the canteen. _(focus: in the library or at the canteen)_
  - The power failed while Grandma was baking. _(focus: while Grandma was baking)_
  - Asha sang, and her brother played the drum. _(focus: and her brother played the drum)_
  - Asha sang although she had a sore throat. _(focus: although she had a sore throat)_
  - Both Asha and her brother performed. _(focus: Both Asha and her brother)_
  - Ravi smiled when the results came out. _(focus: when the results came out)_

### 4.2.2 Coordinating Conjunctions

- **Pages:** Joining Equal Parts · Same Kind on Each Side · Phrases and Adjectives Joined · Keep the Same Form · Not Painting and To Sing · Two Words or Two Clauses? · Coordinating Conjunctions: Recap
- **Key takeaways:** Coordinators join parts of the same kind. · Two nouns, two adjectives, two verbs. · Or joins phrases; but joins adjectives. · Run, stretch and rest. · Match the forms. · Comma only between clauses. · Equal parts, same form.
- **Example sentences:**
  - The old fan is noisy yet reliable. _(focus: noisy yet reliable)_
  - Grandpa grows tomatoes and chillies. _(focus: tomatoes and chillies)_
  - You can pay at the counter or on the app. _(focus: at the counter or on the app)_
  - The puppy was tiny but brave. _(focus: tiny but brave)_
  - Our coach wants us to run, stretch and rest. _(focus: run, stretch and rest)_
  - Leela likes painting and to sing.
  - Nikhil swept the floor and mopped it.
  - Nikhil swept the floor, and his sister dusted the shelves.

### 4.2.3 And

- **Pages:** The Adding Word · And Adds an Idea · Adding a Whole Clause · And Then · Which Came First? · And in a List · And: Recap
- **Key takeaways:** And adds. · One idea plus another. · And can join two clauses. · Show what happened next. · With and, order often shows time. · Commas, then and before the last. · Add, show order, finish a list.
- **Example sentences:**
  - Priya plays the veena and sings in the temple choir. _(focus: and sings in the temple choir)_
  - Our flat has two bedrooms and a tiny balcony. _(focus: two bedrooms and a tiny balcony)_
  - The monsoon arrived, and the fields turned green. _(focus: and the fields turned green)_
  - Raju locked the door and then switched off the lights. _(focus: and then switched off the lights)_
  - We had a bath and ate dinner.
  - We ate dinner and had a bath.
  - Pack a towel, a torch, a water bottle and a cap. _(focus: a towel, a torch, a water bottle and a cap)_

### 4.2.4 But

- **Pages:** The Contrast Word · But Shows Contrast · And or But? · A Result You Did Not Expect · Plans That Went Wrong · Not X But Y · But: Recap
- **Key takeaways:** But joins ideas that pull apart. · Two ideas that differ. · Use but when the second idea pulls the other way. · But introduces a surprise. · But for disappointments. · Correct one idea with another. · Contrast, surprise, correction.
- **Example sentences:**
  - The test was long but easy. _(focus: long but easy)_
  - My brother loves spicy food, but I prefer mild curries. _(focus: but I prefer mild curries)_
  - The hotel was cheap and clean.
  - The hotel was cheap but dirty.
  - Tara studied hard, but she still failed the spelling test. _(focus: but she still failed)_
  - We reached the station early, but the train had already left. _(focus: but the train had already left)_
  - The parcel is not for me but for my neighbour. _(focus: not for me but for my neighbour)_

### 4.2.5 Or

- **Pages:** The Choosing Word · Or Gives a Choice · Choices in Questions · Or Meaning Otherwise · Or Else · Or After Not · Or: Recap
- **Key takeaways:** Or gives options. · Two or more options. · Or in a question. · After a command, or warns. · A stronger warning. · Doesn't eat onions or garlic. · Choice, warning, negatives.
- **Example sentences:**
  - Would you like mango or litchi juice? _(focus: mango or litchi juice)_
  - We can take the ferry or the bus to the island. _(focus: the ferry or the bus)_
  - Shall we paint the wall yellow, green or pale blue? _(focus: yellow, green or pale blue)_
  - Hold the railing, or you might slip. _(focus: or you might slip)_
  - Finish your vegetables, or else there will be no dessert. _(focus: or else there will be no dessert)_
  - Grandma doesn't eat onions or garlic. _(focus: onions or garlic)_

### 4.2.6 Nor

- **Pages:** A Second No · Nor Joins Two Negatives · No Call, No Message · Helper Verb Before Subject · Nor Was, Nor Were · Nor or Or? · Nor: Recap
- **Key takeaways:** Nor adds another negative. · After a negative clause. · Two missing actions. · Nor can our cousins. · Be also comes first. · Nor starts a clause; or joins words. · Negative, then nor + helper + subject.
- **Example sentences:**
  - I haven't seen the film, nor do I want to. _(focus: nor do I want to)_
  - The kiosk doesn't sell stamps, nor does it sell envelopes. _(focus: nor does it sell envelopes)_
  - Meena didn't call, nor did she send a message. _(focus: nor did she send a message)_
  - We can't swim, nor can our cousins. _(focus: nor can our cousins)_
  - The tap wasn't leaking, nor was the pipe. _(focus: nor was the pipe)_
  - Arjun won't eat the curry, nor will his sister.
  - Arjun won't eat curry or rice.

### 4.2.7 For

- **Pages:** A Formal Reason Word · For Means Because · For in a Story · In the Middle, After a Comma · Never Start With For · For or Because? · For: Recap
- **Key takeaways:** For can mean because. · Formal or story-like. · Reasons in story language. · For joins two clauses. · Put for after the first clause. · Because is more common. · Formal because, after a comma.
- **Example sentences:**
  - The farmers were happy, for the rains had come early. _(focus: for the rains had come early)_
  - The travellers rested, for they had walked all day. _(focus: for they had walked all day)_
  - Grandpa kept the old letters, for they reminded him of his youth. _(focus: for they reminded him of his youth)_
  - The lake was silent, for the birds had flown south. _(focus: for the birds had flown south)_
  - For the sea was rough, the fishermen stayed ashore.
  - We left early because the road was flooded.
  - We left early, for the road was flooded.

### 4.2.8 So

- **Pages:** The Result Word · So Introduces a Result · Everyday Results · Because or So? · A Fever and a Missed Play · A Comma Before So · So: Recap
- **Key takeaways:** So shows what happened next because of it. · Cause first, result after so. · Forgot, so got wet. · Because + cause; so + result. · Cause, then so, then result. · Two clauses, one comma. · Cause, comma, so, result.
- **Example sentences:**
  - The mangoes were ripe, so Mum made mango lassi. _(focus: so Mum made mango lassi)_
  - The road was blocked, so the bus took a long detour. _(focus: so the bus took a long detour)_
  - I forgot my umbrella, so I got soaked. _(focus: so I got soaked)_
  - We lit the lamps because the power had gone.
  - The power had gone, so we lit the lamps.
  - Leela had a fever, so she missed the school play. _(focus: so she missed the school play)_
  - The ice cream was melting, so we ate it quickly. _(focus: so we ate it quickly)_

### 4.2.9 Yet

- **Pages:** A Contrast That Surprises · Yet Joins a Surprise · But or Yet? · And Yet · A First Try That Worked · A Comma Before Yet · Yet: Recap
- **Key takeaways:** Yet joins a surprising second idea. · The second idea is unexpected. · Yet is stronger than but. · And yet adds the surprise. · Never cooked, and yet perfect. · Comma, then yet. · A stronger but.
- **Example sentences:**
  - The puzzle looked simple, yet nobody could solve it. _(focus: yet nobody could solve it)_
  - Arjun is only seven, yet he plays chess like an expert. _(focus: yet he plays chess like an expert)_
  - The flat is small but comfortable.
  - The flat is tiny, yet six people live in it.
  - The shop was crowded, and yet the service was quick. _(focus: and yet the service was quick)_
  - She had never cooked before, and yet the biryani was perfect. _(focus: and yet the biryani was perfect)_
  - The road was icy, yet the drivers raced on. _(focus: yet the drivers raced on)_

### 4.2.10 Subordinating Conjunctions

- **Pages:** Words That Make a Clause Depend · Sorted by Meaning · Condition and Contrast · One Joining Word Is Enough · Not Because … So · Equal or Dependent? · Subordinating Conjunctions: Recap
- **Key takeaways:** A subordinator starts a dependent clause. · Five meaning groups. · The meaning comes from the conjunction. · Do not add so or but. · Drop the extra word. · Coordinators join equals. · Meaning, one word, dependence.
- **Example sentences:**
  - We will start the game when Kabir arrives. _(focus: when Kabir arrives)_
  - Unless you hurry, we'll miss the start. _(focus: Unless you hurry)_
  - Although the hall was cold, nobody left. _(focus: Although the hall was cold)_
  - As the escalator had stopped, we used the stairs. _(focus: As the escalator had stopped)_
  - Because the bridge was closed, so we went the long way.
  - The bell rang, and we went inside.
  - When the bell rang, we went inside.

### 4.2.11 Because

- **Pages:** The Reason Word · Because + Clause · Because at the Start · A Short Answer in Speech · A Because-Clause Alone in Writing · When Not … Because Is Unclear · Because: Recap
- **Key takeaways:** Because gives the reason. · The reason for the main idea. · The reason can come first. · Because … alone is fine when talking. · Join it to the main clause. · Put the reason first. · Reason first or second; clear and complete.
- **Example sentences:**
  - The baby is crying because her toy fell under the cot. _(focus: because her toy fell under the cot)_
  - Kabir wore gloves because the handles were hot. _(focus: because the handles were hot)_
  - Because the river had flooded, the ferry stopped running. _(focus: Because the river had flooded)_
  - "Why are you late?" "Because the bus broke down." _(focus: Because the bus broke down)_
  - I took an umbrella. Because the sky was grey.
  - Because the bike was cheap, he didn't buy it. _(focus: Because the bike was cheap)_

### 4.2.12 Although and Though

- **Pages:** True Anyway · Although + Clause · Although at the Start · Though Means Although · Though at the End · Not Although … But · Although and Though: Recap
- **Key takeaways:** Although shows a contrast. · The main idea is true anyway. · Contrast first, then the main idea. · A little less formal. · In speech, it can end the sentence. · One contrast word is enough. · Contrast with one word.
- **Example sentences:**
  - Although the shop was tiny, it sold everything. _(focus: Although the shop was tiny)_
  - We enjoyed the trip although it rained every day. _(focus: although it rained every day)_
  - Although Nani is eighty, she walks to the market every morning. _(focus: Although Nani is eighty)_
  - Though the tea was strong, Dad drank two cups. _(focus: Though the tea was strong)_
  - The film was long. It was funny, though. _(focus: funny, though)_
  - Although the bus was late, but we reached on time.

### 4.2.13 Even Though

- **Pages:** A Stronger Although · Even Though + a Fact · Early but Still Late · Plain or Strong? · Ninety and Still Cycling · Even Though, Not Even · Even Though: Recap
- **Key takeaways:** Even though adds force. · The fact is true, and still … · A fact that did not help. · Even though is stronger. · A strong surprise at the end. · Even alone cannot join clauses. · A fact, and a strong contrast.
- **Example sentences:**
  - Even though it was midnight, the market was busy. _(focus: Even though it was midnight)_
  - Kiran went to school even though he had a cold. _(focus: even though he had a cold)_
  - Even though we left early, we missed the ferry. _(focus: Even though we left early)_
  - Although the exam was hard, Tara passed.
  - Even though the exam was very hard, Tara got full marks.
  - Grandpa still cycles to the farm even though he is ninety. _(focus: even though he is ninety)_
  - Even it was raining, we played outside.

### 4.2.14 While and Whereas

- **Pages:** At the Same Time, or in Contrast · While for Time · While in Requests · Whereas for Contrast · Same Time or Contrast? · A Comma Before Whereas · While and Whereas: Recap
- **Key takeaways:** While has two uses. · During the time that. · Hold it while I … · Two facts side by side. · Read both clauses. · Comma for contrast. · Time or contrast.
- **Example sentences:**
  - The milk boiled over while Mum was on the phone. _(focus: while Mum was on the phone)_
  - Ravi hummed a tune while he was painting the gate. _(focus: while he was painting the gate)_
  - Please hold the ladder while I change the bulb. _(focus: while I change the bulb)_
  - My sister loves maths, whereas I prefer history. _(focus: whereas I prefer history)_
  - Dad cooked while we laid the table.
  - Dad likes rice, while Mum prefers rotis.
  - Coffee keeps me awake, whereas tea calms me down. _(focus: whereas tea calms me down)_

### 4.2.15 If and Unless

- **Pages:** Words for Conditions · If + Condition · If for Facts · Unless Means If Not · If … Not or Unless? · No Not After Unless · If and Unless: Recap
- **Key takeaways:** If and unless set a condition. · The main idea depends on it. · Always true when the condition is met. · One word for if … not. · Same meaning. · Unless is already negative. · If for a condition; unless for if not.
- **Example sentences:**
  - If the chemist is still open, pick up some cough syrup. _(focus: If the chemist is still open)_
  - We'll fly the kite if the wind picks up. _(focus: if the wind picks up)_
  - If you mix blue and yellow paint, you get green. _(focus: If you mix blue and yellow paint)_
  - You can't enter the pool unless you wear a cap. _(focus: unless you wear a cap)_
  - If it doesn't rain, the match will go ahead.
  - Unless it rains, the match will go ahead.
  - Unless you don't water the plants, they will die.

### 4.2.16 Since

- **Pages:** Since Joining Clauses · Since for a Reason · A Birthday Treat · Since for a Starting Time · Since We Last Met · Since or Because? · Since: Recap
- **Key takeaways:** Since can give a reason or a starting time. · A reason the listener knows. · Since at the start. · Present perfect + since + past. · Change from a starting point. · Because for a new reason. · Reason or starting time.
- **Example sentences:**
  - Since you're already up, could you feed the goldfish? _(focus: Since you're already up)_
  - Since the shop was shut, we bought snacks at the station. _(focus: Since the shop was shut)_
  - Since it's your birthday, you can choose the film. _(focus: Since it's your birthday)_
  - We have lived here since I was five. _(focus: since I was five)_
  - Arjun has grown a lot since we last met. _(focus: since we last met)_
  - Since we all know the way, let's walk.
  - We walked because the bus never came.

### 4.2.17 As

- **Pages:** A Small Word, Three Meanings · As for a Reason · As You Are the Oldest · As for the Same Moment · As the Curtain Rose · As for Manner · As: Recap
- **Key takeaways:** Reason, time or manner. · Often at the start. · A reason everyone can see. · As = while, when. · Two things together. · In the way that. · Reason, time, manner.
- **Example sentences:**
  - As the hall was full, some people stood outside. _(focus: As the hall was full)_
  - As it was getting dark, the children headed home. _(focus: As it was getting dark)_
  - As you are the oldest, you can carry the keys. _(focus: As you are the oldest)_
  - The phone rang just as I was leaving. _(focus: just as I was leaving)_
  - As the curtain rose, the audience fell silent. _(focus: As the curtain rose)_
  - Fold the paper as I showed you. _(focus: as I showed you)_
  - Do as your coach says. _(focus: as your coach says)_

### 4.2.18 Before and After

- **Pages:** Putting Events in Order · Before + Clause · Before at the Start · After + Clause · After + Had Finished · Ate First or Left First? · Before and After: Recap
- **Key takeaways:** Before and after join clauses in time order. · The main action comes earlier. · Before-clause first, then a comma. · The main action comes later. · Stress that it was finished first. · Before and after give opposite orders. · Order of events.
- **Example sentences:**
  - Rinse the spinach before you chop it. _(focus: before you chop it)_
  - Switch off the geyser before you leave the house. _(focus: before you leave the house)_
  - Before the guests arrived, Mum lit the diyas. _(focus: Before the guests arrived)_
  - We went for a walk after the rain stopped. _(focus: after the rain stopped)_
  - After Leela had finished her homework, she watched TV. _(focus: After Leela had finished her homework)_
  - Ravi ate before he left.
  - Ravi ate after he left.

### 4.2.19 Until and Till

- **Pages:** Up to That Moment · Until + Clause · Until Your Name Is Called · Not … Until · Understanding Came Later · Till · Until and Till: Recap
- **Key takeaways:** Until marks the end point. · The action goes on up to that time. · Present for the future. · Only at that time, not before. · Not before then. · Same as until, more informal. · Up to that time.
- **Example sentences:**
  - Keep stirring the milk until it thickens. _(focus: until it thickens)_
  - We sheltered under the bridge until the storm passed. _(focus: until the storm passed)_
  - Please wait here until your name is called. _(focus: until your name is called)_
  - The baby didn't sleep until we sang to her. _(focus: until we sang to her)_
  - I didn't understand the joke until Ravi explained it. _(focus: until Ravi explained it)_
  - Let's play till it gets dark. _(focus: till it gets dark)_

### 4.2.20 When and Whenever

- **Pages:** One Time or Every Time? · When for One Time · Interrupted by When · Whenever Means Every Time · One Visit or Every Visit? · Whenever Means Any Time · When and Whenever: Recap
- **Key takeaways:** When and whenever give time. · At the time that. · A longer action, then a short one. · Every time it happens. · Whenever = every time. · Whenever you like. · One time, every time, any time.
- **Example sentences:**
  - Call me when you reach the station. _(focus: when you reach the station)_
  - The crowd cheered when the captain walked out. _(focus: when the captain walked out)_
  - Grandpa was napping on the sofa when the parcel arrived. _(focus: when the parcel arrived)_
  - Whenever it rains, our roof leaks. _(focus: Whenever it rains)_
  - When I visited Nani, she made kheer.
  - Whenever I visit Nani, she makes kheer.
  - Come round whenever you like. _(focus: whenever you like)_

### 4.2.21 As Soon As

- **Pages:** Right Away · Immediately After · The Tin and the Cat · When or As Soon As? · Asleep Straight Away · At the Start or the End · As Soon As: Recap
- **Key takeaways:** As soon as means immediately. · No delay. · One thing straight after another. · As soon as is faster. · A quick reaction. · Comma after it at the start. · Immediately after.
- **Example sentences:**
  - As soon as the bell rang, the children rushed out. _(focus: As soon as the bell rang)_
  - Dad called the plumber as soon as he saw the leak. _(focus: as soon as he saw the leak)_
  - As soon as I opened the tin, the cat appeared. _(focus: As soon as I opened the tin)_
  - Tell me when you finish.
  - Tell me as soon as you finish.
  - The baby fell asleep as soon as the car started moving. _(focus: as soon as the car started moving)_
  - As soon as you land, send us a message. _(focus: As soon as you land)_

### 4.2.22 Once

- **Pages:** After That Happens · Once Means As Soon As · Once It Found Its Basket · Once You Have Signed · Once Everyone Has Finished · A Comma After a Once-Clause · Once: Recap
- **Key takeaways:** Once can join a time clause. · As soon as, or after. · Once at the end. · Finished first, then the next step. · Wait for the first action to end. · At the start, add a comma. · As soon as, after, finished first.
- **Example sentences:**
  - Once the paint dries, we can hang the pictures. _(focus: Once the paint dries)_
  - Once the guests had left, we sat down to eat. _(focus: Once the guests had left)_
  - The puppy calmed down once it found its basket. _(focus: once it found its basket)_
  - Once you have signed the form, give it to the clerk. _(focus: Once you have signed the form)_
  - We'll order dessert once everyone has finished the main course. _(focus: once everyone has finished)_
  - Once the rain stops, the ferry will sail. _(focus: Once the rain stops)_

### 4.2.23 Whether

- **Pages:** A Yes-or-No Question Inside a Sentence · Whether After Wonder and Decide · Still Deciding · Whether After a Preposition · Depends On Whether · Whether at the Start · Whether: Recap
- **Key takeaways:** Whether holds the question. · A yes-or-no question inside. · Whether after decide. · About whether, not about if. · Not depends on if. · Whether can be the subject. · Yes-or-no, after prepositions, as a subject.
- **Example sentences:**
  - I'm not sure whether the museum is open today. _(focus: whether the museum is open today)_
  - Nisha wondered whether the parcel had arrived. _(focus: whether the parcel had arrived)_
  - We haven't decided whether we should repaint the kitchen. _(focus: whether we should repaint the kitchen)_
  - We argued about whether the shop would deliver. _(focus: about whether the shop would deliver)_
  - It depends on if the bus is on time.
  - Whether the match goes ahead depends on the weather. _(focus: Whether the match goes ahead)_

### 4.2.24 So That

- **Pages:** Saying Why With a Clause · So That + Clause · A Note on My Hand · Can and Will, Could and Would · Good Seats · Purpose or Result? · So That: Recap
- **Words shown in more than one job:** so
- **Key takeaways:** So that gives the purpose. · Why someone does something. · Purpose in the past. · A modal often follows so that. · Could for the past. · So that = purpose; so = result. · Purpose with a clause.
- **Example sentences:**
  - Speak louder so that the back row can hear you. _(focus: so that the back row can hear you)_
  - Dad fixed a lock on the gate so that the goats can't get out. _(focus: so that the goats can't get out)_
  - I wrote the date on my hand so that I wouldn't forget. _(focus: so that I wouldn't forget)_
  - Leave the porch light on so that we can find the door. _(focus: so that we can find the door)_
  - We left early so that we could get good seats. _(focus: so that we could get good seats)_
  - We left early so that we could catch the bus.
  - We left early, so we caught the bus.

### 4.2.25 In Order That

- **Pages:** A Formal Purpose Clause · In Order That + Clause · Notices and Signs · May and Might · Might in the Past · In Order That or In Order To? · In Order That: Recap
- **Key takeaways:** In order that is formal. · More formal than so that. · Formal purposes. · Formal modals after in order that. · Might after a past verb. · Clause or base verb. · Formal purpose with a clause.
- **Example sentences:**
  - The road was closed in order that repairs could be done. _(focus: in order that repairs could be done)_
  - The school sent letters home in order that parents would know about the trip. _(focus: in order that parents would know)_
  - Notices were put up in order that visitors could find the exit. _(focus: in order that visitors could find the exit)_
  - Seats are numbered in order that guests may find them quickly. _(focus: in order that guests may find them quickly)_
  - The meeting was moved in order that everyone might attend. _(focus: in order that everyone might attend)_
  - We spoke slowly in order that everyone could follow.
  - We spoke slowly in order to help everyone follow.

### 4.2.26 Provided That and Providing That

- **Pages:** On One Condition · Provided That Means Only If · Camping by the Lake · Providing, With or Without That · Provided the Chairs Are Back · Present for the Future · Provided That: Recap
- **Key takeaways:** Provided that sets a strict condition. · Nothing happens without the condition. · Provided that at the start. · Same meaning; that can go. · Provided without that. · No will after provided that. · Only if, with the present.
- **Example sentences:**
  - You can borrow my bike provided that you bring it back by six. _(focus: provided that you bring it back by six)_
  - The trip will go ahead provided that twenty pupils sign up. _(focus: provided that twenty pupils sign up)_
  - Provided that the weather is fine, we'll camp by the lake. _(focus: Provided that the weather is fine)_
  - Providing you water it every day, the plant will flower. _(focus: Providing you water it every day)_
  - You may use the hall provided the chairs are put back. _(focus: provided the chairs are put back)_
  - The shop will deliver provided that the order is over 500 rupees. _(focus: provided that the order is over 500 rupees)_

### 4.2.27 As Long As

- **Pages:** Only If, or the Whole Time · As Long As Means Only If · Beating the Traffic · For the Whole Time That · While the Car Moved · The Whole Time or Right After? · As Long As: Recap
- **Words shown in more than one job:** as
- **Key takeaways:** As long as has two meanings. · Less formal than provided that. · A condition at the start. · As long as I live. · The whole time, then it stops. · Long is not soon. · Only if, or the whole time.
- **Example sentences:**
  - You can stay up late as long as you're quiet. _(focus: as long as you're quiet)_
  - Dogs are allowed in the park as long as they are on a lead. _(focus: as long as they are on a lead)_
  - As long as we leave by seven, we'll beat the traffic. _(focus: As long as we leave by seven)_
  - I'll remember this day as long as I live. _(focus: as long as I live)_
  - The puppy slept as long as the car was moving. _(focus: as long as the car was moving)_
  - The baby smiled as long as the music played.
  - The baby smiled as soon as the music played.

### 4.2.28 Even If

- **Pages:** True Either Way · Even If + a Possibility · Too Late to Catch It · Maybe or Really? · Even If He Wins · Depends On It, or True Anyway? · Even If: Recap
- **Words shown in more than one job:** even, if
- **Key takeaways:** Even if: it does not matter. · Whether or not it happens. · Even if at the start. · Even if = maybe; even though = it is true. · An unlikely possibility. · If = depends; even if = anyway. · Possibility, true anyway.
- **Example sentences:**
  - Even if it rains, the parade will go ahead. _(focus: Even if it rains)_
  - I'll finish the painting even if it takes all night. _(focus: even if it takes all night)_
  - Even if you run, you won't catch the bus now. _(focus: Even if you run)_
  - Even if the shop is closed, we'll still have a nice walk.
  - Even though the shop was closed, we had a nice walk.
  - Even if Grandpa wins the lottery, he won't leave his village. _(focus: Even if Grandpa wins the lottery)_
  - If it's cold, we'll light a fire.
  - Even if it's cold, we'll swim.

### 4.2.29 Correlative Conjunctions

- **Pages:** Joining Words That Work in Pairs · Five Pairs · Pairs at Work · Fixed Halves · Not Neither … Or · Match the Parts · Correlative Conjunctions: Recap
- **Key takeaways:** Correlatives come in pairs. · Each pair has its own meaning. · Neither … nor; not only … but also. · Neither with nor; either with or. · Neither needs nor. · The same form after each half. · Fixed pairs, matching parts.
- **Example sentences:**
  - We can either walk or cycle to the lake. _(focus: either walk or cycle)_
  - Neither the map nor the guidebook showed the path. _(focus: Neither the map nor the guidebook)_
  - Not only the kids but also their parents loved the show. _(focus: Not only the kids but also their parents)_
  - Either Amma or Appa will pick you up. _(focus: Either Amma or Appa)_
  - Neither Ravi or Leela came to practice.
  - You can either call me or an email.

### 4.2.30 Both...And

- **Pages:** This One and That One · Both … And With Nouns · Loved by Both · Both … And With Adjectives · Both Cooks and Cleans · Both … And, Not Both … As Well As · Both … And: Recap
- **Key takeaways:** Both … and stresses two together. · Two things, both included. · Both … and after a verb. · Both light and waterproof. · Both … and with verbs. · Both pairs with and. · Two together, with and.
- **Example sentences:**
  - Both Kavya and her cousin play the sitar. _(focus: Both Kavya and her cousin)_
  - Both rice and wheat grow in this valley. _(focus: Both rice and wheat)_
  - The film was loved by both children and grown-ups. _(focus: both children and grown-ups)_
  - This raincoat is both light and waterproof. _(focus: both light and waterproof)_
  - Grandpa both cooks and cleans on Sundays. _(focus: both cooks and cleans)_
  - She speaks both Tamil as well as Hindi.

### 4.2.31 Either...Or

- **Pages:** One or the Other · Either … Or Gives a Choice · Either at the Start · Either … Or With Verbs · Two Possible Reasons · Either … Or as a Warning · Either … Or: Recap
- **Key takeaways:** Either … or offers two choices. · One of two. · Two people, one will do it. · Either call or text. · Either … or with clauses. · Do this, or that will happen. · A choice, or a warning.
- **Example sentences:**
  - You can have either idli or dosa for breakfast. _(focus: either idli or dosa)_
  - We'll meet either at the gate or in the canteen. _(focus: either at the gate or in the canteen)_
  - Either Kiran or Tara will read the poem. _(focus: Either Kiran or Tara)_
  - You can either call or text me. _(focus: either call or text)_
  - Either the shop has closed, or the owner is on holiday. _(focus: Either the shop has closed, or the owner is on holiday)_
  - Either you tidy your room, or you stay home tonight. _(focus: Either you tidy your room, or you stay home tonight)_

### 4.2.32 Neither...Nor

- **Pages:** Not This and Not That · None of the Two · Nothing Found · Neither … Nor or Not … Or? · Neither Stamps Nor Envelopes · Neither … Nor With Verbs and Adjectives · Neither … Nor: Recap
- **Key takeaways:** Neither … nor: none of two. · Neither one, nor the other. · Neither … nor after a verb. · Same meaning, two forms. · A shop that sells neither. · Neither read nor write. · None of two.
- **Example sentences:**
  - Neither the fridge nor the oven was working. _(focus: Neither the fridge nor the oven)_
  - Neither Arun nor Kavya knew the answer. _(focus: Neither Arun nor Kavya)_
  - We found neither the keys nor the wallet. _(focus: neither the keys nor the wallet)_
  - I like neither tea nor coffee.
  - I don't like tea or coffee.
  - The kiosk sells neither stamps nor envelopes. _(focus: neither stamps nor envelopes)_
  - The old farmer could neither read nor write. _(focus: neither read nor write)_
  - The room was neither warm nor cold. _(focus: neither warm nor cold)_

### 4.2.33 Not Only...But Also

- **Pages:** And Something More · Adding a Stressed Second Idea · Players and Coach · But … As Well · But … Too · Put Not Only in the Right Place · Not Only … But Also: Recap
- **Key takeaways:** Not only … but also adds with force. · Stress the second idea. · With nouns. · Too or as well can replace also. · Too at the end. · Just before the part it adds to. · Add, stress, match.
- **Example sentences:**
  - Tara not only paints but also writes poems. _(focus: not only paints but also writes poems)_
  - The new library is not only bigger but also quieter. _(focus: not only bigger but also quieter)_
  - Not only the players but also the coach got a medal. _(focus: Not only the players but also the coach)_
  - Ravi not only fixed the bike but cleaned it as well. _(focus: not only fixed the bike but cleaned it as well)_
  - He not only baked the bread but sliced it too. _(focus: not only baked the bread but sliced it too)_
  - Priya not only plays the piano but also the violin.

### 4.2.34 Whether...Or

- **Pages:** This or That? · Whether … Or for Two Choices · Drive or Take the Train? · It Doesn't Matter Which · Sunny or Cloudy · Whether or Not · Whether … Or: Recap
- **Key takeaways:** Whether … or names two choices. · Two options inside a sentence. · Whether + to + verb. · Whether … or at the start. · The main idea is true either way. · No matter if it happens. · Two choices, either way.
- **Example sentences:**
  - I can't decide whether to stay or go. _(focus: whether to stay or go)_
  - Meena asked whether we wanted tea or coffee. _(focus: whether we wanted tea or coffee)_
  - We haven't decided whether to drive or take the train. _(focus: whether to drive or take the train)_
  - Whether you win or lose, enjoy the game. _(focus: Whether you win or lose)_
  - Whether it's sunny or cloudy, the market opens at six. _(focus: Whether it's sunny or cloudy)_
  - Whether or not you agree, the rule stays. _(focus: Whether or not you agree)_
  - We'll go whether it rains or not. _(focus: whether it rains or not)_

### 4.2.35 Rather...Than

- **Pages:** Saying What You Prefer · Would Rather + Verb + Than + Verb · A Comic or TV? · Rather Than = Instead Of · Cycle Rather Than Drive · Would Rather Stay, Not Would Rather To Stay · Rather … Than: Recap
- **Key takeaways:** Rather … than shows preference. · Two base verbs. · One choice over another. · Two nouns or two verbs. · Two verbs. · No to after would rather. · Preference with base verbs.
- **Example sentences:**
  - I'd rather walk than wait for the bus. _(focus: I'd rather walk than wait)_
  - Grandma would rather cook at home than eat out. _(focus: would rather cook at home than eat out)_
  - Nikhil would rather read a comic than watch TV. _(focus: would rather read a comic than watch TV)_
  - Let's have juice rather than fizzy drinks. _(focus: juice rather than fizzy drinks)_
  - She chose to cycle rather than drive. _(focus: cycle rather than drive)_
  - I would rather to stay home.

### 4.2.36 No Sooner...Than

- **Pages:** The Moment One Thing Ended · No Sooner … Than · The Phone Again · No Sooner Had + Subject · A Bird Flew In · Than, Not When · No Sooner … Than: Recap
- **Key takeaways:** No sooner … than: right after. · One thing right after another. · Normal word order. · Had comes before the subject. · Inverted order. · No sooner pairs with than. · Right after; had first; than.
- **Example sentences:**
  - No sooner had we sat down than the lights went out. _(focus: No sooner had we sat down than)_
  - I had no sooner reached the stop than the bus pulled away. _(focus: had no sooner reached the stop than)_
  - She had no sooner hung up than the phone rang again. _(focus: had no sooner hung up than)_
  - No sooner had the guests left than it began to pour. _(focus: No sooner had the guests left)_
  - No sooner had Ravi opened the window than a sparrow flew in. _(focus: No sooner had Ravi opened the window)_
  - No sooner had I arrived when the meeting began.

### 4.2.37 Hardly/Scarcely...When

- **Pages:** Just After · Hardly … When · Scarcely … When · Hardly Had + Subject · Normal or Inverted? · When, Not Than · Hardly … When: Recap
- **Key takeaways:** Hardly … when: almost at once. · One thing just after another. · Scarcely means the same. · Inverted at the start. · Both correct; inverted is formal. · Hardly pairs with when. · Just after; when, not than.
- **Example sentences:**
  - We had hardly started eating when the guests arrived. _(focus: had hardly started eating when)_
  - I had hardly closed my eyes when the alarm went off. _(focus: had hardly closed my eyes when)_
  - The farmer had scarcely sown the seeds when it began to rain. _(focus: had scarcely sown the seeds when)_
  - Hardly had the match begun when it was called off. _(focus: Hardly had the match begun)_
  - She had scarcely left the house when it began to snow.
  - Scarcely had she left the house when it began to snow.
  - Hardly had I sat down than the bus moved.

### 4.2.38 Conjunctions vs Prepositions

- **Pages:** More Noun-or-Clause Pairs · Like Before a Noun · Like or As? · In Case Of + Noun · In Case Of or In Case? · Except or Except That? · Conjunction or Preposition: Recap
- **Words shown in more than one job:** except
- **Key takeaways:** The same test, three new pairs. · Like is a preposition. · Like + noun; as + clause. · A preposition. · Of before a noun. · That before a clause. · Noun or clause decides.
- **Example sentences:**
  - Pack a sweater in case the evening turns cold. _(focus: in case the evening turns cold)_
  - Riya swims like a dolphin. _(focus: like a dolphin)_
  - The new boy dances like his father.
  - The new boy dances as his father taught him.
  - In case of fire, use the stairs. _(focus: In case of fire)_
  - Call this number in case of an emergency.
  - Keep this number in case you need help.
  - The trip was perfect except the long queue.
  - The trip was perfect except that the queue was long.

### 4.2.39 Conjunctions vs Relative Pronouns

- **Pages:** Joining Word or Relative Word? · That as a Conjunction · Two Jobs for That · The Which Test · When Which Does Not Fit · Two Jobs for When · Conjunction or Relative: Recap
- **Key takeaways:** That and when can do two jobs. · A complete clause follows. · Complete clause, or stands for a noun. · Can which or who replace it? · Then that is a conjunction. · After a time noun, when is relative. · Test what the word does.
- **Example sentences:**
  - I know that the chemist opens at ten. _(focus: that the chemist opens at ten)_
  - Leena said that the bus was full. _(focus: that the bus was full)_
  - I heard that the singer was ill.
  - I heard the song that the singer wrote.
  - This is the kite that Grandpa made. _(focus: the kite that Grandpa made)_
  - We think that the kite will fly. _(focus: that the kite will fly)_
  - Call me when the letter arrives.
  - I remember the day when the letter arrived.

### 4.2.40 Conjunction Placement and Punctuation

- **Pages:** Where Conjunctions Go, and the Marks Around Them · And or But at the Start · But It Worked · However and Therefore · Not a Comma Before However · No Comma Before That · Placement and Punctuation: Recap
- **Key takeaways:** Placement changes punctuation. · Fine in stories; join in formal writing. · A short, strong sentence. · Semicolon before, comma after. · A comma cannot join with however. · Said that, not said, that. · Three more punctuation points.
- **Example sentences:**
  - We searched the beach for an hour. But nobody found the ring. _(focus: But nobody found the ring)_
  - The cave was dark and cold. And then we heard a growl. _(focus: And then we heard a growl)_
  - Everyone said the plan would fail. But it worked. _(focus: But it worked)_
  - The road was icy; however, the bus kept running. _(focus: however, the bus kept running)_
  - The shop was closed, however we found another one.
  - Ravi told me, that the match was cancelled.

### 4.2.41 Conjunction Usage and Common Errors

- **Pages:** Six Joining-Word Slips · Unless or Until, Not Both · Though Without Yet · Such a … That, Not So a … That · The Reason Is That · Supposing, Not Supposing If · Whether or Not, Not If or Not · Conjunction Errors: Recap
- **Key takeaways:** One joining idea, said once. · Say it once. · Drop the extra contrast word. · Such before a + adjective + noun. · Not the reason is because. · Supposing already means if. · Only whether takes or not. · Say each joining idea once.
- **Example sentences:**
  - It was such a hot day that we stayed indoors. _(focus: such a hot day that)_
  - Unless and until you finish, you cannot go out.
  - Though he is rich, yet he lives simply.
  - It was so a long film that I fell asleep.
  - The reason I am late is because the bus broke down.
  - Supposing if it rains, what will we do?
  - I don't know if or not she will come.

### 4.3.1 Introduction to Phrases

- **Pages:** Words That Travel Together · One Unit, No Subject and Verb · Two Phrases in One Sentence · The Head Word · Heads of Different Kinds · A Map of Phrases · Phrases: Recap
- **Key takeaways:** A phrase is a unit of words. · A phrase has no subject-and-verb pair. · A sentence can hold several phrases. · The head word names the phrase. · An adjective head, a verb head. · Named by the head word. · A unit with a head word.
- **Example sentences:**
  - The little brown sparrow hopped onto the sill. _(focus: The little brown sparrow)_
  - We waited near the old banyan tree. _(focus: near the old banyan tree)_
  - A tiny grey kitten slept in the laundry basket. _(focus: A tiny grey kitten, in the laundry basket)_
  - The children were singing very loudly. _(focus: very loudly)_
  - Our neighbour's dog is extremely friendly. _(focus: extremely friendly)_
  - The school bus has been waiting. _(focus: has been waiting)_

### 4.3.2 Noun Phrases

- **Pages:** A Noun and Its Company · The Parts of a Noun Phrase · A Phrase After the Noun · The Head Noun · Not the Last Noun · The Pronoun Test · Noun Phrases: Recap
- **Key takeaways:** A noun phrase grows around a noun. · Determiner, describers, noun, phrase after. · The phrase can continue after the noun. · The main noun. · The head can come before another noun. · One pronoun for the whole phrase. · Head noun plus its words.
- **Example sentences:**
  - My grandmother's old sewing machine still works. _(focus: My grandmother's old sewing machine)_
  - We bought a large wooden bookshelf for the hall. _(focus: a large wooden bookshelf)_
  - The cyclist in the orange helmet won the race. _(focus: The cyclist in the orange helmet)_
  - Three tiny brass bells hung over the door. _(focus: Three tiny brass bells)_
  - The lid of the biscuit tin is stuck. _(focus: The lid of the biscuit tin)_
  - The new teacher from Shillong speaks four languages. _(focus: The new teacher from Shillong)_

### 4.3.3 Verb Phrases

- **Pages:** More Than One Verb Word · Helpers + Main Verb · Three-Word Verb Phrases · Words That Sit Inside · Not in the Middle · Split by the Subject · Verb Phrases: Recap
- **Key takeaways:** A verb phrase can have several words. · The main verb comes last. · Modal + have + participle. · Not and never are not part of it. · Leave not out of the verb phrase. · Questions put the subject inside. · Helpers + main verb.
- **Example sentences:**
  - The guests have been waiting for an hour. _(focus: have been waiting)_
  - Our team will be playing in the final. _(focus: will be playing)_
  - The parcel should have arrived by now. _(focus: should have arrived)_
  - Arun has never tasted dragon fruit. _(focus: has never tasted)_
  - The baby was not sleeping well. _(focus: was not sleeping)_
  - Has your brother finished his exams? _(focus: Has your brother finished)_

### 4.3.4 Adjective Phrases

- **Pages:** An Adjective and Its Company · A Degree Word Before · Slightly Easier · A Prepositional Phrase After · To + Verb After · A Long Phrase Goes After the Noun · Adjective Phrases: Recap
- **Key takeaways:** An adjective can head a phrase. · How much of the quality. · Degree words with comparatives. · Keen on cricket. · Eager to open. · A basket full of guavas. · Before, head, after.
- **Example sentences:**
  - The water in the old bucket was surprisingly warm. _(focus: surprisingly warm)_
  - Our new puppy is incredibly playful. _(focus: incredibly playful)_
  - The second test was slightly easier. _(focus: slightly easier)_
  - Kiran is very keen on cricket. _(focus: very keen on cricket)_
  - The children were eager to open their presents. _(focus: eager to open their presents)_
  - We found a basket full of ripe guavas. _(focus: full of ripe guavas)_

### 4.3.5 Adverb Phrases

- **Pages:** An Adverb and Its Company · Degree Word Plus Adverb · Quite Often · Too + Adverb · Adverb + Enough · More … Than · Adverb Phrases: Recap
- **Key takeaways:** An adverb can head a phrase. · How much of the manner. · Degree words with frequency. · More than is good. · Enough comes after. · Comparing two actions. · Degree word + adverb.
- **Example sentences:**
  - The old bus climbed the hill very slowly. _(focus: very slowly)_
  - Meera finished the puzzle surprisingly quickly. _(focus: surprisingly quickly)_
  - We visit the farm quite often. _(focus: quite often)_
  - The speaker talked much too quickly. _(focus: much too quickly)_
  - Ravi didn't pedal quickly enough to reach the ferry. _(focus: quickly enough)_
  - Tara writes more neatly than her brother. _(focus: more neatly than her brother)_

### 4.3.6 Prepositional Phrases

- **Pages:** Three More Uses · After Be · In a Good Mood · A Phrase Inside a Phrase · Three Phrases Deep · A Phrase at the Start · More Phrase Uses: Recap
- **Key takeaways:** After be, nested, at the start. · The phrase completes the sentence. · A state after be. · The object has its own phrase. · Phrases can keep nesting. · Comma after a long one. · After be, nested, first.
- **Example sentences:**
  - The spare key is under the flowerpot. _(focus: under the flowerpot)_
  - Our school trip is on Friday. _(focus: on Friday)_
  - Everyone was in a cheerful mood after the match. _(focus: in a cheerful mood)_
  - We stayed at the hotel near the lake. _(focus: at the hotel near the lake)_
  - Grandma lives in the house at the end of the lane. _(focus: in the house at the end of the lane)_
  - In the middle of the night, the dog began to bark. _(focus: In the middle of the night)_

### 4.3.7 Infinitive Phrases

- **Pages:** To + Verb and Its Words · The Whole Unit · Longer Infinitive Phrases · It … To · Phrase First or It First? · After a Noun · Infinitive Phrases: Recap
- **Key takeaways:** The infinitive brings words with it. · To + verb + its words. · Include the time words too. · It stands in for the phrase. · The It form sounds more natural. · Something to read. · A unit, a subject, a describer.
- **Example sentences:**
  - My dream is to sail around the world. _(focus: to sail around the world)_
  - Kavya hopes to open a small bakery. _(focus: to open a small bakery)_
  - We need to finish the poster by Monday. _(focus: to finish the poster by Monday)_
  - It is fun to camp under the stars. _(focus: to camp under the stars)_
  - To climb that cliff would be dangerous.
  - It would be dangerous to climb that cliff.
  - I need something to read on the train. _(focus: something to read on the train)_
  - Mum gave me a list of jobs to do. _(focus: jobs to do)_

### 4.3.8 Gerund Phrases

- **Pages:** An -ing Phrase Doing a Noun Job · A Gerund Phrase as Subject · Leela's Job · A Gerund Phrase After Be · The Hardest Part · My or His Before -ing · Gerund Phrases: Recap
- **Key takeaways:** A gerund phrase acts like a noun. · The -ing phrase comes first. · A gerund phrase before is. · Saying what something is. · Another gerund after be. · Careful English uses a possessive. · An -ing phrase doing a noun job.
- **Example sentences:**
  - Growing tomatoes on the balcony takes time. _(focus: Growing tomatoes on the balcony)_
  - Learning a new language opens many doors. _(focus: Learning a new language)_
  - Feeding the stray cats is Leela's job. _(focus: Feeding the stray cats)_
  - Her favourite hobby is making paper boats. _(focus: making paper boats)_
  - The hardest part was waiting for the results. _(focus: waiting for the results)_
  - Do you mind my opening the window? _(focus: my opening the window)_
  - We were surprised by his winning the chess match. _(focus: his winning the chess match)_

### 4.3.9 Participial Phrases

- **Pages:** Verb Phrases That Describe · An -ing Phrase After a Noun · The Train on the Bridge · An -ed Phrase · Doing It or Done to It? · Having + Past Participle · Participial Phrases: Recap
- **Key takeaways:** A participial phrase does an adjective job. · It describes the doer. · What the noun is doing. · Something had the action done to it. · -ing for the doer; -ed for the receiver. · Finished first. · -ing, -ed, having.
- **Example sentences:**
  - The boy sitting by the window is my classmate. _(focus: sitting by the window)_
  - The woman selling flowers at the gate is very kind. _(focus: selling flowers at the gate)_
  - Can you see the train crossing the bridge? _(focus: crossing the bridge)_
  - We read a letter written in 1947. _(focus: written in 1947)_
  - The girl painting the mural is Asha.
  - The mural painted by Asha is huge.
  - Having finished their lunch, the workers went back to the field. _(focus: Having finished their lunch)_

### 4.3.10 Appositive Phrases

- **Pages:** A Second Name for a Noun · A Noun Phrase That Renames · In the Middle · Commas for Extra Information · Extra or Which One? · An Appositive at the Start · Appositive Phrases: Recap
- **Key takeaways:** An appositive renames. · Next to the noun it renames. · Between two commas. · No commas when it tells which one. · Commas only for extra information. · A comma follows it. · Rename, with the right commas.
- **Example sentences:**
  - Mr Joshi, the owner of the corner shop, gave us free sweets. _(focus: the owner of the corner shop)_
  - We visited Hampi, a town full of old temples. _(focus: a town full of old temples)_
  - My uncle, a pilot with a big airline, flies to Dubai every week. _(focus: a pilot with a big airline)_
  - Our neighbour, a retired doctor, plays chess with Grandpa. _(focus: a retired doctor)_
  - My only sister, Riya, loves dancing.
  - My cousin Tara paints, and my cousin Mohan sings.
  - A keen gardener, Nani grows twenty kinds of roses. _(focus: A keen gardener)_

### 4.3.11 Absolute Phrases

- **Pages:** A Detail With Its Own Noun · Noun + -ing · At the End · Noun + -ed · Homework Finished · Noun + a Phrase · Absolute Phrases: Recap
- **Key takeaways:** An absolute phrase describes the whole scene. · It has its own noun, so it does not dangle. · An absolute after a comma at the end. · Often something finished. · Then the next thing. · Hands in his pockets. · Own noun, comma, detail.
- **Example sentences:**
  - Her hair blowing in the wind, Priya cycled down the hill. _(focus: Her hair blowing in the wind)_
  - The sun setting behind the hills, we walked back to camp. _(focus: The sun setting behind the hills)_
  - Grandpa dozed in his chair, his newspaper sliding to the floor. _(focus: his newspaper sliding to the floor)_
  - The work done, the children ran outside to play. _(focus: The work done)_
  - Her homework finished, Leela switched on the radio. _(focus: Her homework finished)_
  - Dad stood at the gate, hands in his pockets. _(focus: hands in his pockets)_
  - The toddler napped on the mat, her cheeks pink from the sun. _(focus: her cheeks pink from the sun)_

### 4.3.12 Phrases by Function and Position

- **Pages:** What It Is and What It Does · Type by Head, Job by Use · One Type, Two Jobs · Adverb-Job Phrases Can Move · Start or End? · Adjective-Job Phrases Stay Put · Function and Position: Recap
- **Key takeaways:** Type and job are different. · Noun, adjective or adverb job. · Same type, different job. · Where, when, how, why. · A comma when it comes first. · Next to the noun they describe. · Type, job, position.
- **Example sentences:**
  - On the shelf, the book about dinosaurs caught my eye. _(focus: On the shelf, about dinosaurs)_
  - To win the trophy was our goal. _(focus: To win the trophy)_
  - We need a box to store the toys in. _(focus: to store the toys in)_
  - She saved money to buy a scooter. _(focus: to buy a scooter)_
  - Every evening, Grandpa feeds the pigeons. _(focus: Every evening)_
  - With a loud crash, the shelf fell down.
  - The shelf fell down with a loud crash.
  - The girl in the green sari is the bride's sister. _(focus: in the green sari)_

### 4.3.13 Phrase Modifiers

- **Pages:** Words That Sharpen a Phrase · Right, Directly, Halfway · Halfway Up the Hill · A Measure Before an Adjective · Older and Shorter · Almost and Nearly · Phrase Modifiers: Recap
- **Key takeaways:** A modifier can change a whole phrase. · More exact places. · The middle point. · Exactly how much. · A measure with a comparative. · Not quite there. · Exact, measured, nearly.
- **Example sentences:**
  - The ball landed right in the middle of the pond. _(focus: right in the middle of the pond)_
  - The bakery is directly opposite the temple. _(focus: directly opposite the temple)_
  - We stopped for tea halfway up the hill. _(focus: halfway up the hill)_
  - The pool is three metres deep at this end. _(focus: three metres deep)_
  - Kiran is two years older than Mira. _(focus: two years older)_
  - The new road is a kilometre shorter. _(focus: a kilometre shorter)_
  - We were almost at the top when it started to rain. _(focus: almost at the top)_
  - The car is nearly out of petrol. _(focus: nearly out of petrol)_

### 4.3.14 Phrase Expansion and Construction

- **Pages:** Growing a Sentence · Before and After the Noun · A Kite, Step by Step · Growing the Predicate · Object, Manner, Place · Too Many Phrases · Phrase Expansion: Recap
- **Key takeaways:** Phrases add detail. · Adjectives before, phrases after. · One addition at a time. · Add after the verb. · Several additions in a row. · Split an overloaded sentence. · Add detail, but stay clear.
- **Example sentences:**
  - The big brown dog with a red collar barked at the postman. _(focus: The big brown dog with a red collar)_
  - A small wooden boat painted blue bobbed on the lake. _(focus: A small wooden boat painted blue)_
  - Nani sang softly to the baby in the hammock. _(focus: sang softly to the baby in the hammock)_
  - The fishermen pulled the heavy net slowly onto the boat. _(focus: pulled the heavy net slowly onto the boat)_
  - The thin old man with the long grey beard in the faded blue coat from the village near the river waved.

### 4.3.15 Phrases vs Clauses

- **Pages:** Two Kinds of Word Group · Subject + Finite Verb · At Sunrise or When the Sun Rose? · Describing a Person Two Ways · Purpose Two Ways · Counting Clauses · Phrase or Clause: Recap
- **Key takeaways:** Phrases and clauses. · A clause has both. · Look for a subject and a verb. · With green eyes, or who has green eyes. · To save time, or so that we could save time. · Count the subject-and-verb pairs. · Subject + verb makes a clause.
- **Example sentences:**
  - We met at the station when the train arrived. _(focus: at the station, when the train arrived)_
  - The puppy slept in its basket. _(focus: in its basket)_
  - We left at sunrise.
  - We left when the sun rose.
  - I know a girl with green eyes.
  - I know a girl who has green eyes.
  - We took a shortcut to save time.
  - We took a shortcut so that we could save time.
  - During the storm, the children who were outside ran into the hall. _(focus: During the storm, who were outside, into the hall)_

### 4.3.16 Identifying Phrases in Sentences

- **Pages:** Finding Every Phrase · Five Steps · The Method at Work · To + Noun or To + Verb? · Both in One Sentence · Three Jobs for -ing · Identifying Phrases: Recap
- **Key takeaways:** A sentence is built from phrases. · Verb phrase first. · Every part has a job. · Look at the word after to. · Two different to-phrases. · Verb phrase, gerund or participle. · Method, to, -ing.
- **Example sentences:**
  - The old fisherman in the yellow boat is mending his net. _(focus: The old fisherman in the yellow boat, is mending, his net)_
  - Every morning my grandfather strolls slowly to the temple. _(focus: Every morning, my grandfather, strolls slowly, to the temple)_
  - Leena went to the library.
  - Leena went out to borrow a book.
  - Ravi wants to go to the zoo. _(focus: to go, to the zoo)_
  - Asha is dancing in the courtyard. _(focus: is dancing)_
  - Gardening relaxes Grandma. _(focus: Gardening)_
  - The boy flying the kite is Arjun. _(focus: flying the kite)_

### 4.3.17 Common Errors in Phrase Construction

- **Pages:** Six Phrase Slips · No Comma Before the Verb · Close the Appositive · It Being a Holiday · Having Finished, Not Having Finish · Written, Not Writing · To Buy, Not To Buying · Phrase Errors: Recap
- **Key takeaways:** Check commas, openers and forms. · However long the subject. · A comma on both sides. · Give the opener its own subject. · Having + past participle. · -ed when it was done to it. · To + base verb. · Commas, openers, forms.
- **Example sentences:**
  - Our new neighbour, a cheerful nurse, waved from her balcony. _(focus: a cheerful nurse)_
  - The tall man in the blue coat, is my uncle.
  - Mrs Pillai, our music teacher plays the veena.
  - Being a holiday, the shops were shut.
  - Having finish the work, we went out.
  - I found a note writing in pencil.
  - Ravi went to the market to buying vegetables.

### 4.4.1 Introduction to Clauses

- **Pages:** Sentences Built From Clauses · Two Parts Every Clause Needs · Two Clauses in One Sentence · Independent or Dependent? · Complete or Waiting? · Three Jobs · Clauses: Recap
- **Key takeaways:** A clause has a subject and a verb. · Every clause has both. · Two pairs make two clauses. · One stands alone; one needs help. · A dependent clause leaves us waiting. · Noun, adjective, adverb. · Subject, verb, job.
- **Example sentences:**
  - The kettle whistled while Mum was chopping onions. _(focus: The kettle whistled, while Mum was chopping onions)_
  - The monkeys on the roof stole our bananas. _(focus: The monkeys on the roof stole our bananas)_
  - The rain stopped, and the frogs started croaking. _(focus: The rain stopped, the frogs started croaking)_
  - We stayed indoors until the dust storm ended. _(focus: We stayed indoors, until the dust storm ended)_
  - The night train pulled in.
  - until the night train pulled in …

### 4.4.2 Independent Clauses

- **Pages:** Clauses That Stand Alone · Complete on Its Own · Two Independent Clauses · Questions Are Clauses Too · Commands and the Hidden You · Three in a Row · Independent Clauses: Recap
- **Key takeaways:** An independent clause is complete. · It can be a full sentence. · Each half stands alone. · A question can stand alone. · You is understood. · Commas, then and. · Complete on its own.
- **Example sentences:**
  - The ferry left the jetty at dawn. _(focus: The ferry left the jetty at dawn)_
  - Meena repaired the broken kite. _(focus: Meena repaired the broken kite)_
  - The baby giggled, and her brother pulled a face. _(focus: The baby giggled, her brother pulled a face)_
  - Did you feed the goldfish? _(focus: Did you feed the goldfish)_
  - Bolt the back door before bed. _(focus: Bolt the back door before bed)_
  - Asha sang, Ravi beat the drum, and Meena clapped. _(focus: Asha sang, Ravi beat the drum, Meena clapped)_

### 4.4.3 Dependent Clauses

- **Pages:** Clauses That Lean on Others · Three Kinds of Starter · One of Each · When the Starter Is Left Out · The Film We Watched · A Clause Inside a Clause · Dependent Clauses: Recap
- **Key takeaways:** A dependent clause needs a main clause. · Conjunction, relative word, noun-clause starter. · Three starters at work. · That can disappear. · A relative left out. · One dependent clause inside another. · Starters, hidden starters, nesting.
- **Example sentences:**
  - The parcel that Grandpa sent arrived late. _(focus: that Grandpa sent)_
  - We'll start when everyone arrives. _(focus: when everyone arrives)_
  - The girl whose bag was lost is crying. _(focus: whose bag was lost)_
  - Nobody knows what happened to the key. _(focus: what happened to the key)_
  - I think it will rain later. _(focus: it will rain later)_
  - The film we watched was far too long. _(focus: we watched)_
  - I know that the shop which sells kites is closed. _(focus: that the shop which sells kites is closed)_

### 4.4.4 Main Clauses and Subordinate Clauses

- **Pages:** The Core and the Extras · Cross Out the Subordinate Clauses · A Clause in the Middle · Which Idea Gets the Stress? · Seats on a Crowded Bus · Several Subordinate Clauses · Main and Subordinate: Recap
- **Key takeaways:** Main clause plus subordinate clauses. · What is left is the main clause. · Cross out the middle part. · The main clause carries the main idea. · The good news goes in the main clause. · One main clause, many helpers. · Cross out, stress, count.
- **Example sentences:**
  - If the dairy is still open, Dad will buy some curd. _(focus: Dad will buy some curd)_
  - Although the path was muddy, the hikers reached the top. _(focus: the hikers reached the top)_
  - The tourists who came by bus took photos of the fort. _(focus: who came by bus)_
  - Although the team won, the captain was injured.
  - Although the captain was injured, the team won.
  - Though the bus was crowded, we found two seats. _(focus: we found two seats)_
  - When we got home, we found the parcel that Asha had sent. _(focus: When we got home, that Asha had sent)_

### 4.4.5 Noun Clauses

- **Pages:** A Clause Doing a Noun Job · A Noun Clause as Subject · That … at the Start · A Noun Clause After Be · My Worry Is Whether · After an Adjective · Noun Clauses: Recap
- **Key takeaways:** A noun clause acts like a noun. · The clause comes first. · A that-clause as subject. · What the problem is. · Whether after be. · Sure that, glad that. · Subject, after be, after an adjective.
- **Example sentences:**
  - What the coach said made everyone laugh. _(focus: What the coach said)_
  - Where the treasure is buried remains a mystery. _(focus: Where the treasure is buried)_
  - That Ravi forgot his lines surprised nobody. _(focus: That Ravi forgot his lines)_
  - The problem is that the bridge is closed. _(focus: that the bridge is closed)_
  - My worry is whether the shop will be open. _(focus: whether the shop will be open)_
  - I'm sure that I switched off the geyser. _(focus: that I switched off the geyser)_
  - We were glad that the rain had stopped. _(focus: that the rain had stopped)_

### 4.4.6 Adjective Clauses

- **Pages:** A Clause That Describes · Straight After Its Noun · Which Puppy? · After a Pronoun · Those Who and Something That · Keep It Next to Its Noun · Adjective Clauses: Recap
- **Key takeaways:** An adjective clause describes a noun. · Which one, or what kind. · The clause picks one out. · Anyone who, something that. · More pronouns with clauses. · Or the meaning changes. · Describe, after the noun, close by.
- **Example sentences:**
  - The tailor who stitched my kurta lives nearby. _(focus: who stitched my kurta)_
  - We stayed in a cottage that had a red roof. _(focus: that had a red roof)_
  - The puppy which Leela adopted is very shy. _(focus: which Leela adopted)_
  - Anyone who finishes early can help the others. _(focus: who finishes early)_
  - Those who forget their tickets must pay again. _(focus: who forget their tickets)_
  - Is there something that I can carry? _(focus: that I can carry)_
  - I bought a bike from the shop that has a bell.

### 4.4.7 Relative Clauses

- **Pages:** Inside a Relative Clause · Subject or Object Inside the Clause · Who Helped, or Whom Ravi Helped? · Leaving Out an Object Relative · The Umbrella You Lost · No Extra It or Him · Relative Clauses: Recap
- **Key takeaways:** The relative word has a job inside its clause. · Who did it, or who it was done to. · Whom for the object. · The sandals I bought. · No that, no which. · The relative word already stands for the noun. · Subject or object; drop or keep.
- **Example sentences:**
  - The mechanic who repaired our scooter charged very little. _(focus: who repaired our scooter)_
  - The neighbour who feeds our cat is on holiday. _(focus: who feeds our cat)_
  - The girl who helped Ravi is new.
  - The girl whom Ravi helped is new.
  - The sandals I bought last week are already torn. _(focus: I bought last week)_
  - Is this the umbrella you lost at the station? _(focus: you lost at the station)_
  - This is the book that I borrowed it from Meena.

### 4.4.8 Defining Relative Clauses

- **Pages:** Clauses That Pick One Out · Telling Us Which One · The Overdue Book · No Commas · Who for a Person · Remove It and See · Defining Clauses: Recap
- **Key takeaways:** A defining clause identifies. · Without it, we would not know. · One book out of many. · That, who or which. · Still no commas. · The meaning changes. · Which one, no commas.
- **Example sentences:**
  - The students who scored full marks got a medal. _(focus: who scored full marks)_
  - The road that leads to the beach is closed. _(focus: that leads to the beach)_
  - I returned the library book that was overdue. _(focus: that was overdue)_
  - Pass me the knife that has a red handle. _(focus: that has a red handle)_
  - The uncle who lives in Delhi is visiting us. _(focus: who lives in Delhi)_
  - People who exercise every day sleep better. _(focus: who exercise every day)_

### 4.4.9 Non-Defining Relative Clauses

- **Pages:** Clauses That Add a Detail · Extra Information Between Commas · Whose in a Non-Defining Clause · Never That · Commas Change the Meaning · Which for a Whole Idea · Non-Defining Clauses: Recap
- **Key takeaways:** Extra information between commas. · We already know who or what. · Whose works too. · Who, which or whose only. · Which brother, or extra detail? · A comma, then which. · Commas, no that, whole ideas.
- **Example sentences:**
  - My grandfather, who is eighty, still swims every morning. _(focus: who is eighty)_
  - The Taj Mahal, which took about twenty years to build, is in Agra. _(focus: which took about twenty years to build)_
  - Our class teacher, whose son plays cricket, gave us match tickets. _(focus: whose son plays cricket)_
  - My bicycle, which is ten years old, still runs well. _(focus: which is ten years old)_
  - My brother who lives in Pune is a chef.
  - Ravi passed his driving test, which surprised everyone. _(focus: which surprised everyone)_

### 4.4.10 Adverb Clauses of Time

- **Pages:** More Ways to Say When · The Moment and the Minute · The Moment at the End · Every Time and Each Time · Each Time We Visit · Ever Since · Time Clauses: Recap
- **Key takeaways:** New time connectors. · As soon as. · It can end the sentence too. · Whenever. · A repeated event. · From then until now. · The moment, every time, ever since.
- **Example sentences:**
  - The moment the curtain rose, the audience went quiet. _(focus: The moment the curtain rose)_
  - The minute I got home, the phone rang. _(focus: The minute I got home)_
  - Call me the moment you hear any news. _(focus: the moment you hear any news)_
  - Every time Grandpa sneezes, the cat jumps. _(focus: Every time Grandpa sneezes)_
  - Each time we visit Ooty, it rains. _(focus: Each time we visit Ooty)_
  - Ever since Leela learnt to swim, she has loved the sea. _(focus: Ever since Leela learnt to swim)_

### 4.4.11 Adverb Clauses of Place

- **Pages:** Clauses That Say Where · Where + Clause · Where You Can See · Wherever · Wherever at the Start · After a Verb or After a Place Noun? · Place Clauses: Recap
- **Key takeaways:** Where can start an adverb clause. · The place of the action. · A place you choose. · Any place or every place. · Any place at all. · Check the word before where. · Where, wherever.
- **Example sentences:**
  - Put the plant where it can get morning sun. _(focus: where it can get morning sun)_
  - We set up our tent where the river bends. _(focus: where the river bends)_
  - Sit where you can see the stage. _(focus: where you can see the stage)_
  - Our puppy follows Asha wherever she goes. _(focus: wherever she goes)_
  - Wherever you travel, carry a map. _(focus: Wherever you travel)_
  - Park where the sign says.
  - This is the car park where we met.

### 4.4.12 Adverb Clauses of Reason

- **Pages:** More Ways to Give a Reason · Now That · Now That at the End · Seeing That · Given That · In That · Reason Clauses: Recap
- **Key takeaways:** New reason connectors. · Just became true. · It can end the sentence. · A fact everyone can see. · Taking a fact into account. · Formal: in what way. · Now that, given that, in that.
- **Example sentences:**
  - Now that the exams are over, we can relax. _(focus: Now that the exams are over)_
  - Now that Kabir has a bike, he rides to school. _(focus: Now that Kabir has a bike)_
  - We can play outside now that the rain has stopped. _(focus: now that the rain has stopped)_
  - Seeing that you're free, will you sort these photos? _(focus: Seeing that you're free)_
  - Given that the roads were icy, the bus was surprisingly punctual. _(focus: Given that the roads were icy)_
  - The plan is risky in that nobody has tried it before. _(focus: in that nobody has tried it before)_

### 4.4.13 Adverb Clauses of Purpose

- **Pages:** Purpose: Avoiding Something · So That … Won't · Labelled Jars · Lest · Lest in a Story · For Fear That · Purpose Clauses: Recap
- **Key takeaways:** Say what you want to avoid. · A negative purpose. · Would not in the past. · Formal; already negative. · Lest + base verb. · Afraid that it might happen. · Avoiding something.
- **Example sentences:**
  - We spoke in whispers so that the baby wouldn't wake. _(focus: so that the baby wouldn't wake)_
  - Cover the sweets so that flies can't land on them. _(focus: so that flies can't land on them)_
  - Grandpa labelled every jar so that nobody would mix them up. _(focus: so that nobody would mix them up)_
  - Hold the rail lest you should slip. _(focus: lest you should slip)_
  - The soldiers marched quietly lest the enemy hear them. _(focus: lest the enemy hear them)_
  - She kept the letter hidden for fear that her brother would read it. _(focus: for fear that her brother would read it)_

### 4.4.14 Adverb Clauses of Result

- **Pages:** So Much That Something Happened · So + Adjective + That · So + Adverb + That · Such (a) + Adjective + Noun + That · So or Such? · So Many, So Much · Result Clauses: Recap
- **Key takeaways:** A result clause follows that. · Because of how much. · With an adverb. · With a noun. · So + adjective; such + adjective + noun. · Results about quantity. · So, such, so many, so much.
- **Example sentences:**
  - The soup was so salty that nobody could finish it. _(focus: so salty that nobody could finish it)_
  - The wind was so strong that the tent blew away. _(focus: so strong that the tent blew away)_
  - Arjun ran so quickly that he lost a shoe. _(focus: so quickly that he lost a shoe)_
  - It was such a funny film that we laughed all evening. _(focus: such a funny film that)_
  - The tea was so hot that I waited.
  - It was such hot tea that I waited.
  - There were so many people that we couldn't see the stage. _(focus: so many people that)_
  - I ate so much rice that I felt sleepy. _(focus: so much rice that)_

### 4.4.15 Adverb Clauses of Condition

- **Pages:** If This, Then That · Condition and Result · Result First · Condition Words · Only on That Condition · The Comma and Then · Condition Clauses: Recap
- **Key takeaways:** A condition and its result. · The result depends on the condition. · The order can change. · A map of the family. · Provided that. · Comma after a front condition. · Condition, comma, result.
- **Example sentences:**
  - If the river rises, the village floods. _(focus: If the river rises, the village floods)_
  - Unless the ferry runs, we will stay on the island. _(focus: Unless the ferry runs, we will stay on the island)_
  - The alarm sounds if anyone opens the door. _(focus: The alarm sounds, if anyone opens the door)_
  - Provided that the tickets are cheap, we will go. _(focus: Provided that the tickets are cheap)_
  - If you are hungry, then help yourself to the fruit. _(focus: If you are hungry, then help yourself to the fruit)_

### 4.4.16 Adverb Clauses of Concession

- **Pages:** It Makes No Difference · However + Adjective · However + Adverb · No Matter What · No Matter How Often · Whatever, Whoever, Wherever · Concession Clauses: Recap
- **Key takeaways:** The main idea stays true. · It does not matter how much. · Carefully or not, no difference. · The result does not change. · Frequency makes no difference. · It does not matter what, who or where. · No difference.
- **Example sentences:**
  - However much he pulled, the jar would not open. _(focus: However much he pulled)_
  - However tired she is, Nani always reads us a story. _(focus: However tired she is)_
  - However carefully I fold it, the map tears. _(focus: However carefully I fold it)_
  - No matter what you say, I won't change my mind. _(focus: No matter what you say)_
  - No matter how often I practise, that high note escapes me. _(focus: No matter how often I practise)_
  - Whoever wins, we will celebrate together. _(focus: Whoever wins)_
  - Whatever happens, stay calm. _(focus: Whatever happens)_

### 4.4.17 Adverb Clauses of Comparison

- **Pages:** Comparing With a Clause · Than + a Full Clause · Than Last Year · Than Usual · Than Expected and Than Ever · The More …, the More … · Comparison Clauses: Recap
- **Key takeaways:** Than can start a clause. · Its own subject and verb. · Comparing with the past. · A shortened clause. · More shortened forms. · Two things change together. · Than, than usual, the more.
- **Example sentences:**
  - The exam was easier than we had feared. _(focus: than we had feared)_
  - The river was deeper than it looked. _(focus: than it looked)_
  - Leela sings better than she did last year. _(focus: than she did last year)_
  - The bus was more crowded than usual. _(focus: than usual)_
  - The repairs cost more than expected. _(focus: than expected)_
  - Our team is stronger than ever. _(focus: than ever)_
  - The more you practise, the better you become. _(focus: The more you practise, the better you become)_
  - The longer we waited, the angrier Dad got. _(focus: The longer we waited, the angrier Dad got)_

### 4.4.18 Adverb Clauses of Manner

- **Pages:** How It Seems · As If and As Though · It Sounds As If · As If He Were · Maybe True or Not True? · The Way · Manner Clauses: Recap
- **Key takeaways:** Manner clauses describe how. · How something seems. · With sound and look verbs. · A past form for something not true. · Past form for not true. · The way Grandma showed us. · As if, as though, the way.
- **Example sentences:**
  - Dad smiled as if he knew a secret. _(focus: as if he knew a secret)_
  - The clouds look as though a storm is coming. _(focus: as though a storm is coming)_
  - It sounds as if the guests have arrived. _(focus: as if the guests have arrived)_
  - He talks as if he were the boss. _(focus: as if he were the boss)_
  - She looks as if she is tired.
  - She acts as if she were a queen.
  - Fold the napkins the way Grandma showed us. _(focus: the way Grandma showed us)_

### 4.4.19 Relative Pronouns and Relative Adverbs in Clauses

- **Pages:** Finer Points About Relative Words · Whose for Things and Animals · A Bird Whose Wing Was Hurt · Preposition + Which or Whom · In Which, Not In That · That, Not What, After a Noun · Relative Words: Recap
- **Key takeaways:** Whose, in which, not what. · Not only for people. · Whose for an animal. · Never that after a preposition. · That cannot follow a preposition. · What is not a relative after a noun. · Whose, in which, that.
- **Example sentences:**
  - We stayed in a hotel whose pool was on the roof. _(focus: whose pool was on the roof)_
  - They live in a village whose only road is unpaved. _(focus: whose only road is unpaved)_
  - I found a bird whose wing was hurt. _(focus: whose wing was hurt)_
  - The friend with whom I travelled is from Assam. _(focus: with whom I travelled)_
  - This is the drawer in that I keep my stamps.
  - The book what I borrowed is overdue.

### 4.4.20 Reduced Relative Clauses

- **Pages:** Making a Relative Clause Shorter · Drop Who + Be · Other Verbs Become -ing · Passive Becomes -ed · Be + a Place · When You Cannot Shorten · Reduced Relative Clauses: Recap
- **Key takeaways:** A clause can shrink to a phrase. · Who are waiting → waiting. · Who needs → needing. · Which are sold → sold. · That are on → on. · Not when the relative is the object. · Drop who + be.
- **Example sentences:**
  - The woman standing by the gate is our principal. _(focus: standing by the gate)_
  - The children waiting outside are cold. _(focus: waiting outside)_
  - Anyone needing help should raise a hand. _(focus: needing help)_
  - The cakes sold at this stall are homemade. _(focus: sold at this stall)_
  - The books on the top shelf are mine. _(focus: on the top shelf)_
  - The kite that Ravi made flew highest. _(focus: that Ravi made)_

### 4.4.21 Reduced Adverb Clauses

- **Pages:** Shorter Adverb Clauses · When + -ing · While at the End · Once + Past Participle · If Needed, Unless Told · Keep the Same Subject · Reduced Adverb Clauses: Recap
- **Key takeaways:** Drop the subject and be. · Same subject, drop it. · It can come last. · Once opened. · Instructions and notices. · Or it dangles. · Same subject, shorter clause.
- **Example sentences:**
  - While waiting for the bus, I read a comic. _(focus: While waiting for the bus)_
  - When crossing the road, look both ways. _(focus: When crossing the road)_
  - Nisha hummed while washing the dishes. _(focus: while washing the dishes)_
  - Once opened, keep the jar in the fridge. _(focus: Once opened)_
  - If needed, call the helpline. _(focus: If needed)_
  - Unless told otherwise, wait here. _(focus: Unless told otherwise)_
  - While reading the newspaper, the tea went cold.

### 4.4.22 Clause Position and Punctuation

- **Pages:** Where the Clause Sits · Commas on Both Sides · A Relative Clause in the Middle · No Commas Round a Noun Clause · Not Whoever Broke It, Must · Two Dependent Clauses · Clause Punctuation: Recap
- **Key takeaways:** Position decides the commas. · An interrupting clause. · Extra detail between commas. · It is part of the main clause. · No comma before the verb. · A comma after each front clause. · Middle, noun, two clauses.
- **Example sentences:**
  - The plan, although it was risky, worked perfectly. _(focus: although it was risky)_
  - Our neighbour, when she heard the news, rushed over. _(focus: when she heard the news)_
  - The old bridge, which was built in 1890, is closed for repairs. _(focus: which was built in 1890)_
  - What Nani baked last night was delicious. _(focus: What Nani baked last night)_
  - Whoever broke the vase, must tell the truth.
  - When we got to the station, although it was late, the café was still open. _(focus: When we got to the station, although it was late)_

### 4.4.23 Clause Combining

- **Pages:** Joining With Clauses · Share a Noun, Use a Relative · With Whose · Know, Think, Wonder · Everyone Knows That · Choose the Joiner by Meaning · Clause Combining: Recap
- **Key takeaways:** Turn one into a dependent clause. · The second sentence becomes a relative clause. · His kite → whose kite. · One sentence becomes a noun clause. · A that-clause. · Time, reason, contrast, condition. · Relative, noun or adverb clause.
- **Example sentences:**
  - I met a girl who speaks five languages. _(focus: who speaks five languages)_
  - We visited a temple which is a thousand years old. _(focus: which is a thousand years old)_
  - The boy whose kite won is my neighbour. _(focus: whose kite won)_
  - I wonder where Ravi has gone. _(focus: where Ravi has gone)_
  - Everyone knows that the shop shuts at noon on Sundays. _(focus: that the shop shuts at noon on Sundays)_
  - Although the tickets were expensive, we bought them. _(focus: Although the tickets were expensive)_

### 4.4.24 Phrases vs Clauses

- **Pages:** Shrinking and Growing · Clause to Phrase · So That → To + Verb · Phrase to Clause · A Participle Grows · Shorter or Clearer? · Phrase to Clause: Recap
- **Key takeaways:** Convert in both directions. · Although → despite; when → on + -ing. · A purpose clause shrinks. · Add a subject and a finite verb. · Holding → who was holding. · A clause for different subjects. · Shrink, grow, choose.
- **Example sentences:**
  - Despite the heavy traffic, we arrived on time. _(focus: Despite the heavy traffic)_
  - On hearing the news, Asha burst into tears. _(focus: On hearing the news)_
  - We left early to avoid the crowds. _(focus: to avoid the crowds)_
  - Since the bridge was closed, we took the ferry. _(focus: Since the bridge was closed)_
  - The man who was holding the umbrella waved. _(focus: who was holding the umbrella)_
  - Although the shop was closed, the owner let us in. _(focus: Although the shop was closed)_

### 4.4.25 Clause Identification and Common Errors

- **Pages:** Every Clause, Found and Named · Five Steps to Find Clauses · Five Steps in Practice · Name It by Its Job · All Three in One Sentence · No Extra Subject · Add the Main Verb · Clause Check: Recap
- **Key takeaways:** Find, name, fix. · Start with the finite verbs. · Three verbs, three clauses. · What, which one, when or why. · One of each kind. · The main clause already has one. · A noun + relative clause is not a sentence. · Verbs first, then jobs.
- **Example sentences:**
  - When the guests arrived, Mum served the snacks that she had made. _(focus: When the guests arrived, Mum served the snacks, that she had made)_
  - The man who sells mangoes says that the season has ended. _(focus: who sells mangoes, that the season has ended)_
  - Whoever finds my wallet, which is brown, will get a reward when they return it. _(focus: Whoever finds my wallet, which is brown, when they return it)_
  - The girl who sits next to me she is new.
  - The bag that I bought from the market last Sunday.

