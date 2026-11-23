# Chapter 4 (1.4 Articles and Determiners): coverage brief for lesson generation

The 16 Articles and Determiners lessons are generated one after another, but each generation can't see the others. Without a plan, every lesson re-teaches "a before consonants, an before vowels" and the countable/uncountable test, and topics slide back into Chapter 1.3 (the same words used as pronouns) or forward into Chapter 1.5 (the same words named as adjectives). This brief divides the chapter between the topics and lists what learners have already seen.

## How to use it

1. Generate the topics in order, 1-4-1 to 1-4-16. For each one, give the generation prompt (`Prompt/_learn_lesson_generation_prompt_v2.md`):
   - the topic input, with `topic_id` `1-4-<n>`
   - that topic's **Scope** entry below
   - the **Rule to paste into the generation prompt** section
   - the whole **Already covered** section
2. Save the JSON as `assets/Content generation/Chapter4/1-4-<n>.md`. The file name must be the topic id.
3. Check the whole batch, and repeat the fix list until it is clean:
   `npm run lesson:overlap -- --all "assets/Content generation/Chapter4" --with "assets/Content generation/Chapter3" --strict`
   `npx jest src/lessons/__tests__/drafts.test.ts`
   Each draft is compared with every app lesson, the Chapter 3 drafts and the Chapter 4 drafts before it.
4. Refresh **Already covered**, so the next lesson sees this one:
   `npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter4_Coverage_Brief.md" --with "assets/Content generation/Chapter3" --with "assets/Content generation/Chapter4"`

## What Chapters 1–3 already teach about articles and determiners

- **1.1.3:** articles (a, an, the) are function words.
- **1.1.7:** a context clue: "a word after *a* or *the* is usually a noun".
- **1-2-2:** proper nouns and capital letters; it left articles with proper nouns to 1-4-8.
- **1-2-5:** the count test, uncountable groups and units ("a piece of", "a glass of"); it left articles and quantifiers to 1-4-7 and 1-4-11.
- **1-3-4:** my, your, his, her, its, our, their before a noun, and my vs mine; it left their place among other determiners to 1-4-10 and 1-4-16.
- **1-3-7, 1-3-8, 1-3-10, 1-3-11:** this/that, which/what, all/many/few/both/none and each/either/neither standing alone as pronouns. Chapter 4 teaches the same words before a noun. Contrast with the pronoun use in one line at most.

None of the Chapter 4 lessons re-teaches these. At most one short recap line.

**Looking ahead:** older books give some of these words adjective names (quantitative, numeral, demonstrative, possessive, interrogative, distributive adjectives). The curriculum merged those six 1.5 topics into one, 1-5-3 Determiners With Adjective Names, which only names them. Chapter 4 owns the words and every skill that goes with them, including the extras listed below.

## Scope for each topic

Each entry says what the lesson owns, and what it must leave to another topic (record those in `coverage.cross_references`).

**1-4-1 Introduction to Articles**: what articles and determiners are.
- Owns:
  - a determiner comes before a noun and tells which one, how many or whose
  - the articles a, an and the are the most common determiners
  - a/an = not a particular one; the = a particular one (overview only)
  - a determiner comes before any describing words ("the tall red gate")
  - a one-page map of the chapter: kinds of determiners, one line each
- Not here: a vs an (1-4-3), the uses of the (1-4-4), zero article (1-4-5), each kind of determiner (1-4-9 to 1-4-15).

**1-4-2 Indefinite Article – A**: a for one, not a particular one.
- Owns:
  - a means one, any one (first mention, not a particular one)
  - a only with singular countable nouns
  - a for jobs and descriptions ("She is a pilot.")
  - a meaning "per" ("twice a week", "fifty rupees a kilo")
- Not here: a vs an by sound (1-4-3), uncountable nouns (1-4-7).

**1-4-3 Indefinite Article – An**: an before a vowel sound.
- Owns:
  - an before a vowel sound, a before a consonant sound
  - sound, not spelling: an hour, an honest girl, a uniform, a one-way street, an MRI
  - the next word decides, even an adjective ("an old car", "a huge apple")
- Not here: the meaning of a/an (1-4-2).

**1-4-4 Definite Article – The**: the for a particular one.
- Owns:
  - second mention ("a cat … the cat")
  - something both speakers know ("Close the door.")
  - only one exists (the sun, the sky, the internet)
  - a phrase that picks one out ("the bag on the chair")
  - the works with singular, plural and uncountable nouns
- Not here: the with names of rivers, seas and some countries (1-4-8); general vs specific in depth (1-4-6).

**1-4-5 Zero Article**: when no article is needed.
- Owns:
  - plural and uncountable nouns used in general ("Mangoes are sweet.")
  - names of people, most cities and countries (one line; 1-4-8 owns the details)
  - meals, languages, school subjects, sports, days and months
  - fixed phrases: go to school, go to bed, at home, by bus
- Not here: proper-noun exceptions with the (1-4-8).

**1-4-6 General and Specific Reference**: talking about things in general vs particular ones.
- Owns:
  - general: zero article with plurals and uncountables ("Bees make honey.")
  - specific: the ("The bees in our garden are busy.")
  - a for any one member of a group ("A koala sleeps most of the day.")
  - choosing by meaning: "Rice is cheap" vs "The rice is burnt"
- Not here: the rules for each article on their own (1-4-2 to 1-4-5).

**1-4-7 Articles with Countable and Uncountable Nouns**: which articles go with which nouns.
- Owns:
  - a singular countable noun always needs a determiner ("I have a bike", not "I have bike")
  - uncountable nouns never take a/an; use some, a piece of, or the
  - plural nouns take the or no article, never a
  - nouns that are both (a light / light) only as an article choice
- Not here: the count test and units (1-2-5 owns them); quantifiers (1-4-11).

**1-4-8 Articles with Proper Nouns**: names with and without the.
- Owns:
  - no article: people, most towns, cities, countries, continents, single mountains and lakes
  - the: rivers, seas, oceans, deserts, mountain ranges, groups of islands
  - the: countries with Republic, Kingdom, States or a plural name (the UAE, the Maldives)
  - the: some buildings and famous places (the Taj Mahal, the Red Fort)
- Not here: capital letters (1-2-2).

**1-4-9 Demonstrative Determiners**: this, that, these, those before a noun.
- Owns:
  - matching the noun's number (this kite / these kites)
  - near and far in time as well as place ("this week", "that summer")
  - with an adjective in between ("those tiny shells")
- Also owns: one/ones to avoid repeating a noun ("I'll take that one"), and the same + noun.
- Not here: the words standing alone (1-3-7, contrast in one line).

**1-4-10 Possessive Determiners**: my, your, his, her, its, our, their, and possessive nouns, inside a noun phrase.
- Owns:
  - possessive + adjective + noun ("my new bike")
  - never with another article or demonstrative ("the my bike" ✗; use "my bike" or "a friend of mine")
  - a possessive noun as a determiner ("Ravi's bike", "the girl's bag")
  - own after a possessive ("their own garden")
- Also owns: a possessive with body parts and clothes ("She hurt her knee", "Take off your shoes").
- Not here: my vs mine (1-3-4), possessive nouns' spelling (1-2-11).

**1-4-11 Quantifiers**: how much or how many.
- Owns:
  - many/few/a few with countable nouns; much/little/a little with uncountable
  - some and any: recall the 1-3-10 rule in one line (no page of its own)
  - a lot of, lots of, plenty of, enough, no
  - few vs a few, little vs a little
- Not here: all, both, half (1-4-15, 1-4-16); every and each (1-4-12); the pronoun use (1-3-10).

**1-4-12 Distributive Determiners**: each, every, either, neither before a noun.
- Owns:
  - each and every + a singular noun
  - each (one by one, two or more) vs every (all together, three or more)
  - either/neither + a singular noun (their meanings: one line recalling 1-3-11)
  - every + time ("every Monday", "every two hours")
- Also owns: every other (every second one), every single (emphasis), on either side (both sides).
- Not here: the pronoun use (1-3-11); verb agreement (2.3).

**1-4-13 Numbers and Ordinal Determiners**: cardinal and ordinal numbers before a noun.
- Owns:
  - cardinal numbers: one + singular, two or more + plural
  - ordinal numbers: first, second, third; usually after the ("the third floor")
  - order: ordinal before cardinal ("the first two chapters")
  - hundred, thousand with no -s after a number ("three hundred seats")
- Also owns: single, double, triple; a dozen. (A pair of belongs to 1-2-8.)
- Not here: writing numbers in words or digits (5.5), quantifiers (1-4-11).

**1-4-14 Interrogative Determiners**: which, what and whose before a noun in questions.
- Owns:
  - what or which + noun: one page recalling the 1-3-8 rule (open answer vs choice from a few)
  - whose + noun for the owner ("Whose phone is ringing?")
- Also owns: what kind of / what sort of + noun; what colour, what size, what time.
- Not here: the pronoun use (1-3-8); relative whose (1-3-9).

**1-4-15 Other Determiners**: another, other, such, what (exclamations), both, all, half.
- Owns:
  - another + singular noun; other + plural noun; the other(s)
  - such a + noun; what a + noun in exclamations ("What a view!")
  - both + plural noun; all + plural or uncountable; half + noun
- Also owns: whole vs all ("the whole cake" / "all the cakes").
- Not here: how all, both and half combine with the and my (1-4-16).

**1-4-16 Determiner Order and Combinations**: putting several determiners together.
- Owns:
  - three slots: all/both/half → the/this/my → numbers and many/few
  - only one word from the middle slot ("my the book" ✗)
  - common combinations: "all the", "both my", "these two", "the first three", "my many friends"
  - a summary page of the whole chapter's determiners
- Not here: adjective order (1-5-13).

## Rule to paste into the generation prompt

> Do not reuse any sentence, focus word, page title or key takeaway listed under "Already covered", including Chapter 4 lessons generated before this one. Build on these lessons instead of re-teaching them, and choose new everyday example sentences. This also applies to question prompts and answer options: their sentences must be new too. Never demonstrate a word listed under "Words already shown doing more than one job" in more than one job again, and never highlight the same word (other than a, an, the and other very short function words) in two different example sentences on one page.
>
> Teach only what this topic's Scope entry owns. Leave everything under "Not here" to the topic named. Record it in `coverage.cross_references` as `{ "concept", "reason", "coverage" }`, with `coverage` one of `introduced_only`, `referenced_only`, `excluded`. Use no other fields.
>
> Learners already know nouns, countable and uncountable nouns (Chapter 1.2) and pronouns (Chapter 1.3). Recall them in one short line at most.
>
> Every `quality_audit` entry (and every `assessment_audit` entry) is a plain string: `"passed"`, `"failed"` or `"review_required"`, not an object with notes.
>
> Every applicable learning dimension has `"applicability": "applicable"` and `"status": "covered"` (or `"introduced"`). It has its own dimension assessment of 2–4 questions, placed right after the dimension's last page (`after_page_id`).
>
> End with a final assessment of at least 4 questions across the lesson's objectives, longer than any dimension assessment. Ask each question once: as an in-page practice question, in one dimension assessment, or in the final assessment. Never use an in-page practice question in an assessment.
>
> Start explanations with the reason, not a verdict ("Correct. …"); the app shows "Correct!" or "Not quite." itself.
>
> In `identify` questions, `accepted_answers` must answer the prompt: the word itself ("those"), not "determiner". Include natural variants.
>
> The app compares typed answers (`identify`, `fill_blank`, `sentence_correction`) without case, apostrophes or end punctuation. Never test capital letters or apostrophes with a typed answer. A `sentence_correction` must change at least one word.
>
> Every `highlight` is an exact substring of its sentence.

<!-- GENERATED BELOW: npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter4_Coverage_Brief.md" --with "assets/Content generation/Chapter3" --with "assets/Content generation/Chapter4" -->

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

