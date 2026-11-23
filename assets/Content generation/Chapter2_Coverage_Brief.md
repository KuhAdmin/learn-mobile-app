# Chapter 2 (1.2 Nouns): coverage brief for lesson generation

The 14 Nouns lessons are generated one after another, but each generation can't see the others. Without a plan, every lesson re-teaches the basics: the first 1-2-1 draft also taught noun functions, noun phrases, plurals and verb agreement, which belong to 1-2-8, 1-2-9, 1-2-13 and Stage 2.3. This brief divides the chapter between the topics and lists what learners have already seen.

## How to use it

1. Generate the topics in order, 1-2-1 to 1-2-14. For each one, give the generation prompt (`Prompt/_learn_lesson_generation_prompt_v2.md`):
   - the topic input, with `topic_id` `1-2-<n>`
   - that topic's **Scope** entry below
   - the **Rule to paste into the generation prompt** section
   - the whole **Already covered** section
2. Save the JSON as `assets/Content generation/Chapter2/1-2-<n>.md`. The file name must be the topic id.
3. Check the whole batch, and repeat the fix list until it is clean:
   `npm run lesson:overlap -- --all "assets/Content generation/Chapter2" --strict`
   `npx jest src/lessons/__tests__/drafts.test.ts`
   Each draft is compared with every app lesson and with the drafts before it.
4. Refresh **Already covered**, so the next lesson sees this one:
   `npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter2_Coverage_Brief.md" --with "assets/Content generation/Chapter2"`

## What Chapter 1 already teaches about nouns

- **1.1.2 p4:** a noun names a person, place, animal, thing or idea, with the list "People: teacher, mother · Places: school, Kolkata · Animals: tiger, cat · Things: book, phone · Ideas: love, happiness".
- **1.1.6 p6–p7:** the subject answers "who or what does it?"; the object receives the action.
- **1.1.5:** one word can do different jobs (a noun in one sentence, a verb in another).
- **1.1.7:** context clues, including "a word after *a* or *the* is usually a noun".

None of the Chapter 2 lessons re-teaches these. At most one short recap line.

## Scope for each topic

Each entry says what the lesson owns, and what it must leave to another topic (record those in `coverage.cross_references`).

**1-2-1 Introduction to Nouns**: why nouns matter and how to spot one.
- Owns:
  - nouns name more than objects: events (party, match), times (Monday, morning), jobs, school subjects, amounts
  - spotting tests: the frame test ("I can see the ___", "The ___ was here") and asking "who or what?"
  - a one-page map of the chapter: the kinds of nouns, one line each, as a preview
- Not here: common/proper (1-2-2), concrete/abstract (1-2-3), plurals (1-2-8, 1-2-9), noun functions (1-2-13), noun phrases (4.3), verb agreement (2.3). No page per kind of noun.

**1-2-2 Common and Proper Nouns**: general names vs the name of one particular person, place or thing.
- Owns:
  - the distinction
  - proper nouns start with a capital letter: people, places, days, months, festivals, brands, book and film titles
  - one common noun (river, school) vs a proper name that contains it ("Hill Road School")
- Not here: full capitalization rules (5.5), articles with proper nouns (1-4-8).

**1-2-3 Concrete and Abstract Nouns**: things you can see, touch, hear, smell or taste, vs ideas, feelings and qualities.
- Owns:
  - the five-senses test
  - kinds of abstract nouns: feelings, qualities, states, ideas, events of the mind
  - abstract nouns in sentences
- Not here: building abstract nouns with -ness or -ment (1-2-12), countability (1-2-5).

**1-2-4 Collective Nouns**: one word for a group.
- Owns:
  - common collectives: team, family, class, crowd, audience, crew
  - animal groups: herd, flock, swarm, pack
  - thing groups: bunch, set, pile
  - a collective names one group, not each member
- Not here: singular or plural verbs with collective nouns (2.3 "Agreement with Collective Nouns"); mention only that this comes later.

**1-2-5 Countable and Uncountable Nouns**: what we can count, and what we can't.
- Owns:
  - the count test (one ___, two ___s)
  - uncountable groups: liquids, powders and grains, gases, abstract ideas, mass words (furniture, luggage, information, advice)
  - units that make them countable ("a piece of", "a glass of", "a bag of")
  - nouns that are both, with a change in meaning (a coffee / coffee)
- Not here:
  - articles with countable/uncountable nouns (1-4-7)
  - much, many, few, little and other quantifiers (1-4-11)
  - agreement (2.3)
  - material nouns as a category (1-2-6)

**1-2-6 Material Nouns**: names of substances things are made from (gold, wood, cotton, wool, glass, clay, steel).
- Owns:
  - material vs the object made from it (glass vs a glass of juice)
  - materials are usually uncountable (one line; 1-2-5 owns the count test)
  - a material noun before another noun ("a cotton shirt")
- Not here: adjectives like wooden or woollen (1-5-15), compounds in general (1-2-7).

**1-2-7 Compound Nouns**: one noun made from two or more words.
- Owns:
  - closed (toothbrush), open (bus stop) and hyphenated (mother-in-law) compounds
  - the last word is the main noun
  - a noun used before another noun to form a compound (school bus, phone case)
- Not here: plurals of compounds (1-2-9), compound adjectives (1-5-10), hyphen rules (5.5).

**1-2-8 Singular and Plural Nouns**: the idea of number.
- Owns:
  - singular means one, plural means more than one
  - spotting plural nouns in sentences
  - regular -s as the usual sign (no spelling rules)
  - plural-only nouns (scissors, trousers, glasses for the eyes)
  - nouns that end in -s but are singular (news)
- Not here: spelling rules and irregular forms (1-2-9), verb agreement (2.3), countability (1-2-5).

**1-2-9 Regular and Irregular Plurals**: how to spell plurals.
- Owns:
  - spelling rules: -es after s, x, z, ch, sh; consonant + y → -ies; vowel + y → -s; f/fe → -ves, with exceptions (roof, chief); -o → -es or -s
  - irregular plurals: vowel change (man/men, foot/feet, mouse/mice), -en (ox/oxen), unchanged (sheep, deer, fish)
  - plurals of compound nouns (mothers-in-law, passers-by)
- Not here: the idea of singular/plural (1-2-8).

**1-2-10 Gender of Nouns**: masculine, feminine, common and neuter nouns.
- Owns:
  - the four genders
  - pairs: king/queen, uncle/aunt, nephew/niece
  - -ess forms (lioness, princess)
  - animal pairs (bull/cow, rooster/hen)
  - common-gender and modern neutral words (teacher, parent, firefighter, police officer)
- Not here: choosing he/she/it for a noun (1-3-13 Pronoun–Antecedent Agreement).

**1-2-11 Possessive Nouns**: showing who owns or has something.
- Owns:
  - 's for singular nouns (the girl's bag)
  - s' for plurals ending in s (the girls' bags)
  - 's for irregular plurals (children's)
  - names ending in s (James's)
  - joint vs separate ownership (Ravi and Asha's house / Ravi's and Asha's phones)
  - "of" for things (the leg of the table)
  - possessive vs plural (apples / apple's)
- Not here:
  - possessive pronouns and determiners (my, mine, its: 1-3-3, 1-3-4, 1-4-10)
  - contraction apostrophes (5.5)

**1-2-12 Noun Formation and Word Building**: making nouns from other words.
- Owns:
  - suffixes from verbs: -ment, -tion/-sion, -ance/-ence, -al (arrival)
  - suffixes from adjectives: -ness, -ity, -th (wide/width), -dom (free/freedom)
  - people nouns: -er/-or, -ist, -ian
  - -ship and -hood
  - spelling changes when adding a suffix
- Not here: the same word as noun and verb without a suffix (1.1.5 already did that), gerunds (5.1), adjective formation (1-5-15).

**1-2-13 Noun Functions in Sentences**: the jobs a noun does, at recognition level.
- Owns a quick recap of subject and direct object (1.1.6 taught them), then recognising:
  - the indirect object
  - the object of a preposition
  - the subject complement
  - the object complement ("They named the kitten Pepper")
  - the appositive
  - identifying each function in mixed sentences
- Not here:
  - sentence patterns and the full treatment of objects and complements (2.4)
  - appositive phrases and noun phrases (4.3)
  - nouns as modifiers (1-2-7)
- Use `introduced_only` cross-references to 2.4 and 4.3.

**1-2-14 Noun Usage and Common Errors**: fixing the mistakes learners make with nouns.
- Errors only, one kind per page, each with a correction; no re-teaching of the rules:
  - plural -s on uncountable nouns (informations, advices)
  - wrong irregular plurals (childs, mouses)
  - apostrophe for plurals (banana's for sale)
  - possessive apostrophe in the wrong place
  - missing capitals on proper nouns
  - "one of my friend"
  - "a news"
  - plural-only nouns used as singular ("a scissor")
- Not here: errors in verb agreement (2.3), articles (1.4), pronouns (1.3).

## Rule to paste into the generation prompt

> Do not reuse any sentence, focus word, page title or key takeaway listed under "Already covered", including Chapter 2 lessons generated before this one. Build on these lessons instead of re-teaching them, and choose new everyday example sentences. This also applies to question prompts and answer options: their sentences must be new too. Never demonstrate a word listed under "Words already shown doing more than one job" in more than one job again.
>
> Teach only what this topic's Scope entry owns. Leave everything under "Not here" to the topic named. Record it in `coverage.cross_references` as `{ "concept", "reason", "coverage" }`, with `coverage` one of `introduced_only`, `referenced_only`, `excluded`. Use no other fields.
>
> Learners already know what a noun is (1.1.2), and the subject and the object (1.1.6). Recall them in one short line at most. Do not give each kind of noun or each part of speech its own recap page.
>
> Every `quality_audit` entry (and every `assessment_audit` entry) is a plain string: `"passed"`, `"failed"` or `"review_required"`, not an object with notes.
>
> Every applicable learning dimension has `"applicability": "applicable"` and `"status": "covered"` (or `"introduced"`). It has its own dimension assessment of 2–4 questions, placed right after the dimension's last page (`after_page_id`).
>
> End with a final assessment of at least 4 questions across the lesson's objectives, longer than any dimension assessment. Ask each question once: as an in-page practice question, in one dimension assessment, or in the final assessment. Never use an in-page practice question in an assessment.
>
> Start explanations with the reason, not a verdict ("Correct. …"); the app shows "Correct!" or "Not quite." itself.
>
> In `identify` questions, `accepted_answers` must answer the prompt. "Identify the noun in 'The gardener watered the roses.'" is answered with the word ("gardener"), not with "noun". Include natural variants such as "the plates" and "plates".
>
> The app compares typed answers (`identify`, `fill_blank`, `sentence_correction`) without case, apostrophes or end punctuation. Never test capital letters or apostrophes with a typed answer: "my friend sana" would match "My friend Sana". Use `multiple_choice` with the correct and incorrect versions instead.
>
> When an example demonstrates a word ("Clean – Adjective"), its sentence must use that word. Every `highlight` is an exact substring of its sentence.

<!-- GENERATED BELOW: npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter2_Coverage_Brief.md" --with "assets/Content generation/Chapter2" -->

## Already covered

Do not reuse any sentence, focus word, page title or key takeaway listed below. Build on these lessons instead of re-teaching them.

**Words already shown doing more than one job** (don't demonstrate them that way again): careful, after, text, book, play, water, answer, poor, clean, dry, fast, hard, early, inside, before, light, watch, patient, drink, help, dance, brush, plant, empty, straight, since, around, cook, late, glass, iron, silver, cousins.

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

