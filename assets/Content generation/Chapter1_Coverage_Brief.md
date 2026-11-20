# Chapter 1 (Parts of Speech): coverage brief for lesson generation

Each lesson is generated without seeing the others, so new lessons tend to re-teach earlier ones. Lesson 1.1.6 first came back with the eight parts of speech again (from 1.1.2) and "one word, two jobs" again (from 1.1.5). This brief tells the generator what learners already know.

## How to use it

1. When generating a lesson, add the **Scope** entry for that topic and the whole **Already covered** section to the generation prompt's input, after the topic.
   - When regenerating a lesson that's already listed (1.1.6 now), leave its own entry out. The overlap check ignores it automatically.
2. Run the check on the result before making mockups:
   `npm run lesson:overlap -- "assets/Content generation/ContentWorkbench.md"`
   It reports:
   - sentences, page titles and key takeaways that repeat an earlier lesson
   - pages that re-teach the parts of speech one per page, as an earlier lesson did
   - answer keys that don't answer their question
   - comparison examples that don't use the word they demonstrate
   - dimension assessments in the wrong place, and questions used twice

   It ends with a numbered fix list under "Paste below into the lesson generator". Paste that, with the lesson JSON, into the generator and repeat until the check is clean.
3. After a lesson is added to the app, refresh the generated part of this file:
   `npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter1_Coverage_Brief.md"`

## Scope for the remaining Chapter 1 topics

**1.1.6 Identifying Parts of Speech in Sentences**: the skill of analysing a whole sentence, word by word.
- Assume learners already know the eight parts (1.1.2) and that a word can change its job (1.1.5).
- At most one short recap list of the eight parts. No page per part of speech.
- No "one word, two jobs" pages.
- Focus on method and practice, with new sentences:
  - read the whole sentence
  - find the verb first
  - find who or what does it
  - then the describing, joining and relationship words
  - check what each word connects to
  - longer sentences with several parts of speech

**1.1.7 Word Classification Through Context**: using clues around a word to decide its job.
- For example: a word after "the" or "a", a word before a noun, a word after "to", or a word that answers how or when.
- Use new words only: none of the "Words already shown doing more than one job" listed under "Already covered" below.
- No page per word ("Watch Can Do Two Jobs", "Fast Can Be Two Classes"): 1.1.5 already does that. Each page teaches one kind of clue, shown with new words.

## Rule to paste into the generation prompt

> Do not reuse any sentence, focus word, page title or key takeaway listed under "Already covered". Build on these lessons instead of re-teaching them. Choose new everyday example sentences.
>
> This also applies to question prompts and answer options: their sentences must be new too. Never demonstrate a word listed under "Words already shown doing more than one job" in more than one job again.
>
> Do not give each part of speech its own page: lesson 1.1.2 already does that. If learners need a reminder, use one short recap list.
>
> In `identify` questions, `accepted_answers` must answer the prompt. "Identify the noun in 'The gardener watered the roses.'" is answered with the word ("gardener"), not with "noun". Only "What part of speech is 'gardener' …?" is answered with "noun".
>
> When an example demonstrates a word ("Clean – Adjective"), its sentence must use that word. Don't swap in a synonym to avoid a repeat; choose a new sentence that still uses the word.
>
> Start explanations with the reason, not a verdict ("Correct. …"); the app shows "Correct!" or "Not quite." itself.
>
> Every taught learning dimension needs its own dimension assessment, placed right after the dimension's last page. Use each question once: as in-page practice, in one dimension assessment, or in the final assessment.

<!-- GENERATED BELOW: npm run lesson:overlap -- --write-brief "assets/Content generation/Chapter1_Coverage_Brief.md" -->

## Already covered

Do not reuse any sentence, focus word, page title or key takeaway listed below. Build on these lessons instead of re-teaching them.

**Words already shown doing more than one job** (don't demonstrate them that way again): careful, before, text, book, play, water, answer, poor, clean, dry, fast, hard, early, inside, light, watch, patient, drink, help, dance, brush, plant, empty, straight, since, around, cook, late.

### 1.1.1 Discover Parts of Speech

- **Pages:** Words Are Everywhere · Words Have Different Jobs · What Are Parts of Speech? · Words Belong to Groups · Words Work Together · Grammar Helps Make Sense · A Word Can Change Its Job · What Have You Learned?
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
  - The little boy runs quickly. _(focus: The, little, boy, runs, quickly)_
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
  - Wow! The little boy runs quickly through the garden. _(focus: Wow!, little, boy, runs, quickly, through, the)_
  - She is a careful driver.
  - She drives carefully.
  - I have a book.
  - Please book a table.
  - Every word ending in -ly is an adverb.

### 1.1.3 Content Words and Function Words

- **Pages:** Two Word Families · What Are Content Words? · What Are Function Words? · Four Common Content Words · Common Function Words · Open-Class Words · Closed-Class Words · Find Both Groups · The Two Groups Compared · Spot Words in Context · How They Work Together · Meaning and Sentence Structure · Short Does Not Mean Function · Context Can Change the Job · Remember the Difference
- **Words shown in more than one job:** before
- **Key takeaways:** English has two important word families. · Content words carry the main message. · Function words help build the sentence. · Nouns, main verbs, adjectives and adverbs are common content words. · Function words organise and connect information. · Open classes can welcome new words. · Content words are mostly open-class; function words are mostly closed-class. · One sentence can contain both word groups. · Both groups have different but important jobs. · Always check a word's job in its sentence. · Both word groups work together to make clear sentences. · Small words can carry important grammatical information. · Word length does not decide word type. · Context helps identify a word's grammatical job. · Meaning comes from content words; sentence organisation needs function words.
- **Example sentences:**
  - The little boy runs quickly. _(focus: little, boy, runs, quickly, The)_
  - Maya sings beautifully. _(focus: Maya, sings, beautifully)_
  - The cat is under the table. _(focus: The, is, under)_
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
  - Dogs bark. _(focus: Dogs, bark)_
  - Every short word is a function word.
  - Come before lunch.
  - Come before I leave.
  - I have seen this before.
  - Before is always a preposition.
  - Happy children play outside.
  - The children are in the garden.

### 1.1.4 Open and Closed Word Classes

- **Pages:** Two Groups of Words · What Is an Open Class? · What Is a Closed Class? · The Four Open Classes · The Closed Word Classes · Open Versus Closed · See Both Groups Together · How to Identify Them · Check What You Know · Why Are They Open? · Why Are They Closed? · One Word, Two Jobs · Some Special Cases · Avoid This Mistake · Your Quick Revision
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
  - Wow! That is amazing! _(focus: Wow)_
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

