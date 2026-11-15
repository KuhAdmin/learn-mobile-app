# LEARN — Learning Path: UI/UX & Implementation Specification

**Document type:** Product + frontend implementation brief for Claude Code  
**Feature:** Learning Path (Duolingo-inspired grammar learning journey)  
**Curriculum source:** `Master_Grammar_Curriculum_Level_1_to_3(2).xlsx` supplied with this task  
**Primary focus:** English Grammar (70%)  
**Secondary focus:** Vocabulary (30%)

---

## 1. Objective

Build the **Learning Path** screen for Learn. The screen should present the learner's English-learning journey as a visually engaging, connected path, inspired by the progression model used by Duolingo, while retaining Learn's own visual identity.

The Learning Path is primarily a grammar-learning experience. Grammar is the main structured journey; vocabulary is a supporting learning stream and must not visually or structurally displace grammar.

### Core product principles

- Make the next lesson obvious.
- Show learners where they are, what they have completed, and what is coming next.
- Unlock lessons progressively, while allowing completed lessons to be revisited.
- Preserve the approved curriculum hierarchy exactly: **Level 1 Stage → Level 2 Sub-stage → Level 3 Grammar Topic**.
- Do not flatten the curriculum into one undifferentiated list.
- Do not invent, rename, merge, reorder, or silently remove curriculum items.
- Keep the interface friendly and motivating, but not childish.

## 2. Curriculum source of truth

The supplied workbook contains five sheets, one for each Level-1 stage. Each sheet has three curriculum columns:

| Curriculum level | Meaning | UI representation |
|---|---|---|
| Level 1 | Stage | Stage banner / section |
| Level 2 | Sub-stage | Group heading within a stage |
| Level 3 | Grammar Topic | Individual lesson node on the path |

### Verified workbook inventory

| Level 1 stage | Level 2 sub-stages | Level 3 topics |
|---|---:|---:|
| Stage 1 – Grammar Foundations | 5 | 68 |
| Stage 2 – Sentence Building | 5 | 76 |
| Stage 3 – Verb Mastery and Sentence Control | 5 | 98 |
| Stage 4 – Connecting and Expanding Ideas | 5 | 141 |
| Stage 5 – Advanced Grammar and Fluent Expression | 5 | 124 |
| **Total** | **25** | **507** |

**Important:** Use the exact titles and ordering below. The workbook's blank repeated cells mean that subsequent Level-2/Level-3 rows belong to the most recently named parent row; the hierarchy has been reconstructed using that convention.

## 3. Complete approved curriculum inventory

### Stage 1 – Grammar Foundations
*Workbook level descriptor: Level: Beginner    |    Hierarchy: Level 1 → Level 2 → Level 3*

#### 1.1 Parts of Speech
- Introduction to Parts of Speech
- The Eight Parts of Speech
- Content Words and Function Words
- Open and Closed Word Classes
- Words Functioning as Different Parts of Speech
- Identifying Parts of Speech in Sentences
- Word Classification Through Context

#### 1.2 Nouns
- Introduction to Nouns
- Common and Proper Nouns
- Concrete and Abstract Nouns
- Collective Nouns
- Countable and Uncountable Nouns
- Material Nouns
- Compound Nouns
- Singular and Plural Nouns
- Regular and Irregular Plurals
- Gender of Nouns
- Possessive Nouns
- Noun Formation and Word Building
- Noun Functions in Sentences
- Noun Usage and Common Errors

#### 1.3 Pronouns
- Introduction to Pronouns
- Personal Pronouns – Subject and Object
- Possessive Pronouns
- Possessive Adjectives / Determiners
- Reflexive Pronouns
- Emphatic Pronouns
- Demonstrative Pronouns
- Interrogative Pronouns
- Relative Pronouns
- Indefinite Pronouns
- Distributive Pronouns
- Reciprocal Pronouns
- Pronoun–Antecedent Agreement
- Pronoun Reference and Clarity
- Pronoun Usage and Common Errors

#### 1.4 Articles and Determiners
- Introduction to Articles
- Indefinite Article – A
- Indefinite Article – An
- Definite Article – The
- Zero Article
- General and Specific Reference
- Articles with Countable and Uncountable Nouns
- Articles with Proper Nouns
- Demonstrative Determiners
- Possessive Determiners
- Quantifiers
- Distributive Determiners
- Numbers and Ordinal Determiners
- Interrogative Determiners
- Other Determiners
- Determiner Order and Combinations

#### 1.5 Adjectives
- Introduction to Adjectives
- Descriptive Adjectives
- Quantitative Adjectives
- Numeral Adjectives
- Demonstrative Adjectives
- Possessive Adjectives
- Interrogative Adjectives
- Distributive Adjectives
- Proper Adjectives
- Compound Adjectives
- Participial Adjectives
- Attributive and Predicative Adjectives
- Adjective Position and Order
- Adjectives Followed by Prepositions
- Adjective Formation
- Adjective Usage and Common Errors

### Stage 2 – Sentence Building
*Workbook level descriptor: Level: Beginner–Elementary    |    Hierarchy: Level 1 → Level 2 → Level 3*

#### 2.1 Verbs
- Introduction to Verbs
- Main Verbs and Helping Verbs
- Action Verbs and Stative Verbs
- Linking Verbs
- Transitive and Intransitive Verbs
- Regular and Irregular Verbs
- Finite and Non-Finite Verbs – Introduction
- Dynamic and Stative Verb Usage
- Verb Forms
- Verb Complements
- Verb Patterns and Verb Combinations
- Phrasal Verbs – Introduction
- Common Verb Confusions
- Verb Usage and Common Errors

#### 2.2 Adverbs
- Introduction to Adverbs
- Adverbs of Manner
- Adverbs of Time
- Adverbs of Place
- Adverbs of Frequency
- Adverbs of Degree
- Adverbs of Certainty and Probability
- Adverbs of Duration
- Adverbs of Purpose and Reason
- Interrogative Adverbs
- Relative Adverbs
- Focusing Adverbs
- Sentence Adverbs
- Adverb Position in Sentences
- Adverbs vs Adjectives
- Formation of Adverbs
- Adverb Usage and Common Errors

#### 2.3 Subject–Verb Agreement
- Introduction to Subject–Verb Agreement
- Singular and Plural Subjects
- Agreement with Compound Subjects
- Agreement with Collective Nouns
- Agreement with Indefinite Pronouns
- Agreement with Each, Every, Either and Neither
- Agreement with Uncountable Nouns
- Agreement with Subjects Joined by Or and Nor
- Agreement with Either...Or and Neither...Nor
- Agreement with There Is and There Are
- Agreement with Expressions of Quantity
- Agreement with Titles, Names and Measurements
- Agreement with Relative Pronoun Subjects
- Tricky Subject–Verb Agreement Cases

#### 2.4 Sentence Structure and Word Order
- Introduction to Sentence Construction
- Subject and Predicate
- Verb and Object
- Direct and Indirect Objects
- Subject Complements
- Object Complements
- Modifiers and Their Placement
- Basic Sentence Patterns
- Subject–Verb Pattern
- Subject–Verb–Object Pattern
- Subject–Verb–Complement Pattern
- Subject–Verb–Indirect Object–Direct Object Pattern
- Subject–Verb–Object–Complement Pattern
- Normal and Inverted Word Order
- Word Order in Statements
- Word Order in Questions
- Word Order in Negative Sentences

#### 2.5 Types of Sentences
- Introduction to Sentence Classification
- Declarative Sentences
- Interrogative Sentences
- Imperative Sentences
- Exclamatory Sentences
- Affirmative and Negative Sentences
- Simple Sentences
- Compound Sentences
- Complex Sentences
- Compound-Complex Sentences
- Sentence Fragments
- Run-on Sentences
- Complete and Incomplete Sentences
- Sentence Construction and Transformation – Introduction

### Stage 3 – Verb Mastery and Sentence Control
*Workbook level descriptor: Level: Elementary–Intermediate    |    Hierarchy: Level 1 → Level 2 → Level 3*

#### 3.1 Tenses
- Introduction to Tense and Time
- Present Simple
- Present Continuous
- Present Perfect
- Present Perfect Continuous
- Past Simple
- Past Continuous
- Past Perfect
- Past Perfect Continuous
- Future Simple
- Future Continuous
- Future Perfect
- Future Perfect Continuous
- Tense Identification and Selection
- Tense Consistency
- Sequence of Tenses
- Tenses in Questions and Negatives
- Present Tense for Future Arrangements
- Different Ways of Expressing the Future
- Stative Verbs and Tense Restrictions
- Common Tense Errors

#### 3.2 Auxiliary and Helping Verbs
- Introduction to Auxiliary Verbs
- Primary Auxiliary – Be
- Primary Auxiliary – Have
- Primary Auxiliary – Do
- Auxiliary Verbs in Questions
- Auxiliary Verbs in Negative Sentences
- Auxiliary Verbs in Short Answers
- Auxiliary Verbs for Emphasis
- Auxiliary Verbs in Question Tags
- Auxiliary Verb Combinations
- Main Verbs vs Auxiliary Verbs
- Do-Support and Its Functions
- Auxiliary Omission and Ellipsis

#### 3.3 Modal Verbs
- Introduction to Modal Verbs
- Can
- Could
- May
- Might
- Must
- Shall
- Should
- Will
- Would
- Ought To
- Need and Needn't
- Dare and Daren't
- Have To and Has To
- Had Better
- Be Able To
- Be Allowed To
- Modals for Ability
- Modals for Permission
- Modals for Possibility and Probability
- Modals for Obligation and Necessity
- Modals for Advice and Suggestions
- Modals for Requests and Offers
- Modal Perfects
- Modal Verb Combinations and Common Errors

#### 3.4 Active and Passive Voice
- Introduction to Voice
- Identifying Subject and Object for Voice Transformation
- Active Voice
- Passive Voice
- Passive Voice in Present Tenses
- Passive Voice in Past Tenses
- Passive Voice in Future Structures
- Passive Voice with Modal Verbs
- Passive Voice in Questions
- Passive Voice in Negative Sentences
- Passive Voice with Two Objects
- Passive Voice without Mentioning the Agent
- Get-Passive Constructions
- Passive Reporting Structures
- Stative Passive and Dynamic Passive
- Verbs That Cannot Normally Be Passivized
- Active–Passive Transformation
- Common Errors in Passive Voice

#### 3.5 Direct and Indirect Speech
- Introduction to Direct and Indirect Speech
- Reporting Statements
- Reporting Verbs
- Tense Changes in Reported Speech
- Pronoun Changes
- Changes in Time Expressions
- Changes in Place Expressions
- Changes in Demonstratives
- Reporting Yes/No Questions
- Reporting WH Questions
- Reporting Commands
- Reporting Requests
- Reporting Advice and Suggestions
- Reporting Orders and Instructions
- Reporting Exclamations
- Reporting Wishes and Expressions
- Reporting Modals
- Reporting Universal Truths
- When Backshift Is Not Necessary
- Direct–Indirect Speech Transformation
- Common Errors in Reported Speech

### Stage 4 – Connecting and Expanding Ideas
*Workbook level descriptor: Level: Intermediate    |    Hierarchy: Level 1 → Level 2 → Level 3*

#### 4.1 Prepositions
- Introduction to Prepositions
- Prepositions of Place
- Prepositions of Position
- Prepositions of Time
- Prepositions of Direction
- Prepositions of Movement
- Prepositions of Origin and Source
- Prepositions of Destination
- Prepositions of Distance
- Prepositions of Duration
- Prepositions of Cause and Reason
- Prepositions of Purpose
- Prepositions of Manner
- Prepositions of Means and Instrument
- Prepositions of Agent
- Prepositions of Possession and Relationship
- Prepositions of Comparison
- Prepositions of Exception and Inclusion
- Prepositions of Support and Opposition
- Prepositions of Topic and Reference
- Simple Prepositions
- Compound Prepositions
- Complex Prepositions
- Prepositional Phrases
- Prepositions at the End of Sentences
- Prepositions in Questions
- Prepositions Followed by Nouns and Pronouns
- Prepositions Followed by Gerunds
- Adjective + Preposition Combinations
- Verb + Preposition Combinations
- Noun + Preposition Combinations
- Preposition vs Adverb
- Preposition vs Conjunction
- Commonly Confused Prepositions
- Preposition Usage and Common Errors

#### 4.2 Conjunctions
- Introduction to Conjunctions
- Coordinating Conjunctions
- And
- But
- Or
- Nor
- For
- So
- Yet
- Subordinating Conjunctions
- Because
- Although and Though
- Even Though
- While and Whereas
- If and Unless
- Since
- As
- Before and After
- Until and Till
- When and Whenever
- As Soon As
- Once
- Whether
- So That
- In Order That
- Provided That and Providing That
- As Long As
- Even If
- Correlative Conjunctions
- Both...And
- Either...Or
- Neither...Nor
- Not Only...But Also
- Whether...Or
- Rather...Than
- No Sooner...Than
- Hardly/Scarcely...When
- Conjunctions vs Prepositions
- Conjunctions vs Relative Pronouns
- Conjunction Placement and Punctuation
- Conjunction Usage and Common Errors

#### 4.3 Phrases
- Introduction to Phrases
- Noun Phrases
- Verb Phrases
- Adjective Phrases
- Adverb Phrases
- Prepositional Phrases
- Infinitive Phrases
- Gerund Phrases
- Participial Phrases
- Appositive Phrases
- Absolute Phrases
- Phrases by Function and Position
- Phrase Modifiers
- Phrase Expansion and Construction
- Phrases vs Clauses
- Identifying Phrases in Sentences
- Common Errors in Phrase Construction

#### 4.4 Clauses
- Introduction to Clauses
- Independent Clauses
- Dependent Clauses
- Main Clauses and Subordinate Clauses
- Noun Clauses
- Adjective Clauses
- Relative Clauses
- Defining Relative Clauses
- Non-Defining Relative Clauses
- Adverb Clauses of Time
- Adverb Clauses of Place
- Adverb Clauses of Reason
- Adverb Clauses of Purpose
- Adverb Clauses of Result
- Adverb Clauses of Condition
- Adverb Clauses of Concession
- Adverb Clauses of Comparison
- Adverb Clauses of Manner
- Relative Pronouns and Relative Adverbs in Clauses
- Reduced Relative Clauses
- Reduced Adverb Clauses
- Clause Position and Punctuation
- Clause Combining
- Phrases vs Clauses
- Clause Identification and Common Errors

#### 4.5 Conditionals
- Introduction to Conditional Sentences
- The Structure of Conditional Sentences
- Zero Conditional
- First Conditional
- Second Conditional
- Third Conditional
- Mixed Conditionals
- Real and Unreal Conditions
- Unless
- Provided That and Providing That
- As Long As
- Even If
- Only If
- Whether or Not
- In Case
- Suppose and Supposing
- What If
- If Only
- Wish and If Only in Conditional Contexts
- Conditional Inversion
- Implied and Unstated Conditions
- Conditional Modals
- Common Conditional Errors

### Stage 5 – Advanced Grammar and Fluent Expression
*Workbook level descriptor: Level: Upper Intermediate–Advanced    |    Hierarchy: Level 1 → Level 2 → Level 3*

#### 5.1 Non-Finite Verbs
- Introduction to Finite and Non-Finite Verbs
- Finite vs Non-Finite Verb Forms
- Bare Infinitives
- To-Infinitives
- Infinitives as Nouns
- Infinitives as Adjectives
- Infinitives as Adverbs
- Infinitive Phrases
- Gerunds
- Gerunds as Subjects
- Gerunds as Objects
- Gerunds after Prepositions
- Gerund Phrases
- Present Participles
- Past Participles
- Participles as Adjectives
- Participial Phrases
- Perfect Participles
- Dangling Participles
- Verbs Followed by Infinitives
- Verbs Followed by Gerunds
- Verbs Followed by Both with Different Meanings
- Infinitive vs Gerund
- Participles vs Gerunds
- Non-Finite Clauses
- Common Errors with Non-Finite Verbs

#### 5.2 Comparison and Degree
- Introduction to Comparison
- Positive Degree
- Comparative Degree
- Superlative Degree
- Regular Comparison
- Irregular Comparison
- One-Syllable Adjective Comparisons
- Multi-Syllable Adjective Comparisons
- Comparison of Adverbs
- As...As
- Not As...As
- So...As
- More...Than
- Less...Than
- The...The Comparative
- Comparative Structures with Much, Far and Even
- Double Comparatives
- Double Superlatives
- Comparative Intensifiers
- Equality and Inequality
- Comparison of Quantities
- Comparison with Like and Unlike
- Comparison of Nouns and Verbs
- Common Errors in Comparison

#### 5.3 Modifiers and Emphasis
- Introduction to Modifiers
- Adjective Modifiers
- Adverb Modifiers
- Premodifiers and Postmodifiers
- Intensifiers
- Downtoners and Qualifiers
- Degree Modifiers
- Limiting Modifiers
- Focus Modifiers
- Restrictive and Non-Restrictive Modifiers
- Misplaced Modifiers
- Dangling Modifiers
- Squinting Modifiers
- Ambiguous Modifiers
- Modifier Placement and Meaning
- Emphasis through Word Order
- Emphatic Do
- Cleft Sentences
- Pseudo-Cleft Sentences
- Fronting
- Inversion for Emphasis
- Negative Inversion
- Repetition and Parallel Emphasis
- Common Errors in Modifier Usage

#### 5.4 Linking Words and Discourse Markers
- Introduction to Linking Words
- Addition
- Contrast
- Concession
- Cause and Reason
- Result
- Purpose
- Example and Illustration
- Clarification
- Restatement
- Comparison
- Sequence
- Time Relationships
- Summarising
- Conclusion
- Emphasis
- Topic Introduction
- Topic Shifts
- Conversation Fillers
- Hesitation and Thinking Expressions
- Agreement and Disagreement Markers
- Turn-Taking Expressions
- Discourse Markers in Spoken English
- Discourse Markers in Formal Writing
- Common Errors in Linking and Discourse Markers

#### 5.5 Punctuation, Capitalization and Writing Mechanics
- Introduction to English Punctuation
- Full Stop / Period
- Comma
- Semicolon
- Colon
- Question Mark
- Exclamation Mark
- Apostrophe
- Quotation Marks
- Single and Double Quotation Marks
- Parentheses
- Brackets
- Dash and Hyphen
- Ellipsis
- Capitalization Rules
- Capital Letters in Names and Titles
- Capitalization of Days, Months and Languages
- Sentence Boundaries
- Comma Splices
- Run-on Sentences
- Punctuation in Direct Speech
- Punctuation in Lists
- Punctuation with Clauses and Conjunctions
- Punctuation in Formal and Informal Writing
- Common Punctuation Mistakes

---

## 4. Learning Path screen layout

### 4.1 Overall composition

Create a mobile-first screen. The reference visual is a vertical, winding learning journey with lesson nodes connected by a path. The screen may scroll vertically because the complete curriculum is long; keep the top learning context and bottom navigation clear and usable.

**Visual direction**
- Background: warm beige / cream (use the app's existing design token if available; otherwise use a soft warm off-white such as `#F8F4EA`).
- Primary foreground: near-black (`#111111`).
- Accent palette: muted teal / aqua for active and completed learning states; soft coral for small decorative illustration accents; pale neutral grey for locked or inactive states.
- Cards and lesson nodes: light cream or subtly tinted surfaces, thin dark outlines, rounded corners, restrained shadows.
- Illustrations: use the existing Learn/PIP illustration assets where available. Do not substitute unrelated stock imagery.
- Typography: use the project's existing font system. Use a confident display face for stage titles if already available, and a highly legible sans-serif for controls and lesson labels.
- Keep generous negative space. Avoid crowding the path with decorative elements.
- Avoid heavy gradients, excessive badges, excessive animation, and unnecessary explanatory paragraphs.

### 4.2 Screen structure (top to bottom)

1. **System status area** — respect the device safe area.
2. **Page heading** — `Your Learning Path`.
3. **Stage progress** — show the current stage, e.g. `Stage 1 of 5`, plus a horizontal progress indicator. This is stage-level progress, not total curriculum completion.
4. **Current stage banner** — show stage number, exact stage name, a short stage description, and a relevant illustration.
5. **Hierarchy cue** — a small, optional visual label showing `STAGE → SUB-STAGE → TOPIC`. Keep it secondary; it should not dominate the page.
6. **Learning path** — render sub-stage headings and their Level-3 topic nodes in workbook order. Connect lesson nodes using a winding vertical path.
7. **Bottom navigation** — preserve the app's existing primary navigation and active-tab styling. If the product already uses `Words`, `Topics`, `Journey`, `Practice`, `Profile`, retain those labels and route conventions rather than introducing a competing navigation system.

### 4.3 Stage banner

Each Level-1 stage should have a banner containing:
- Stage number and exact stage title.
- A concise stage description. Descriptions may be authored as UI copy, but must not change the curriculum title or imply content not in the stage.
- A stage-specific illustration or existing PIP asset.
- Optional stage completion percentage, calculated from actual lesson progress.

Use these exact stage titles:

- Stage 1 – Grammar Foundations
- Stage 2 – Sentence Building
- Stage 3 – Verb Mastery and Sentence Control
- Stage 4 – Connecting and Expanding Ideas
- Stage 5 – Advanced Grammar and Fluent Expression

### 4.4 Sub-stage groups

- Each Level-2 sub-stage appears as a distinct group heading, for example `1.1 Parts of Speech`.
- Preserve the exact numbering and title from the workbook.
- Place all Level-3 topics belonging to that sub-stage beneath the heading.
- Keep groups visually distinct without placing every group inside a large heavy card.
- The next sub-stage heading should appear naturally after the previous group's topic nodes.

### 4.5 Level-3 topic nodes

Each Level-3 topic is an actionable lesson node on the path. A node should contain:
- A circular status marker on the path.
- The exact Level-3 topic title.
- Optional small topic icon or illustration, if a suitable asset exists.
- A visual state: current, completed, available, or locked.

**Recommended states**

| State | Appearance | Behaviour |
|---|---|---|
| Current / next | Teal-filled or teal-outlined prominent node; play/start affordance | Opens the lesson |
| Completed | Teal check mark; subdued completed styling | Opens lesson for review |
| Available | Neutral outlined node | Opens if progression rules allow it |
| Locked | Muted neutral node with lock icon | Disabled; show a concise unlock explanation if tapped |

Do not infer completion from the node's position. Read it from learner progress data.

### 4.6 Path connector

- Connect topic nodes in their displayed order with a continuous, gently winding line.
- Use teal for the active/completed portion and a pale neutral dashed line for the not-yet-reached portion.
- Keep the connector behind the nodes and prevent it from crossing lesson labels.
- The winding direction may alternate left/right slightly to create a journey feel, but the layout must remain readable and predictable.
- On narrow screens, keep the topic text area wide enough to avoid awkward wrapping.

## 5. Progression and interaction rules

Implement the following as configurable product rules rather than hard-coding them into presentation components:

1. The first topic in the first sub-stage is available to a new learner, unless onboarding or placement logic specifies another entry point.
2. The learner's current/next topic is visually prominent.
3. Completing a topic updates its progress state and recalculates relevant sub-stage and stage progress.
4. The next topic becomes available according to the product's progression rules.
5. Locked topics remain visible so learners can understand the journey ahead.
6. Completed topics remain accessible for revision unless a later product rule explicitly restricts them.
7. Stage progress should be derived from lesson completion records, not manually maintained percentages.
8. A learner's progress must persist across sessions and devices through the existing backend/state architecture.
9. Tapping a topic node opens the existing lesson/episode entry route. Do not invent a new lesson route if one already exists in the codebase.
10. If a lesson has multiple Level-4 episodes, the Level-3 topic node should open that topic's episode/lesson experience; do not display Level-4 episodes as additional Level-3 topics.

**Progress calculation (recommended default)**

- Topic completion: completed Level-3 topics ÷ total Level-3 topics in the relevant group.
- Sub-stage completion: completed topics in that sub-stage ÷ total topics in that sub-stage.
- Stage completion: completed topics in that stage ÷ total topics in that stage.
- Overall completion: completed topics across all five stages ÷ total topics across all five stages.
- If the product tracks partial lesson completion, define a separate progress model; do not mix partial and completed states without an explicit rule.

## 6. Vocabulary (30%) relationship to the grammar path

- The main Learning Path described here is the **Grammar Path (70%)**.
- Vocabulary should be represented as a secondary learning area, separate from the five-stage grammar hierarchy.
- Do not insert vocabulary topics into the grammar workbook hierarchy.
- Link to vocabulary learning through the existing Words/Topics area, a secondary card, or an explicitly separate vocabulary path if that product area already exists.
- Keep grammar visually primary on this screen.

## 7. Responsive behaviour

### Mobile
- Design for a narrow portrait viewport first.
- Respect top and bottom safe areas.
- Keep the stage title, stage progress, and stage banner compact enough that the learner can see the start of the path without excessive initial scrolling.
- Use a single-column path.
- Keep bottom navigation fixed/sticky only if that matches the existing app navigation implementation; ensure it does not cover the final visible lesson node.

### Tablet / desktop
- Keep the same hierarchy and order.
- Use a constrained content width rather than stretching lesson nodes across the entire viewport.
- The path can remain single-column and centred; do not turn it into a dashboard grid.
- Keep all interactions usable with mouse, keyboard, and touch.

## 8. Motion and accessibility

- Use subtle entrance/selection transitions only; motion must not delay access to content.
- Do not make the pencil mascot jump or perform a jumping-jack motion. If used, keep it stationary and limit animation to facial/limb gestures already approved for the mascot.
- Respect `prefers-reduced-motion`.
- Provide accessible names for icon-only controls.
- Ensure text and controls meet WCAG AA contrast where practical.
- Do not rely on colour alone to communicate state; use check, play, and lock symbols plus accessible text/state.
- Make focus states visible and preserve logical keyboard navigation.

## 9. Suggested frontend component breakdown

Adapt names to the existing codebase; avoid creating duplicate components if equivalents already exist.

```text
LearningPathPage
├── LearningPathHeader
│   ├── PageTitle
│   └── StageProgressBar
├── CurrentStageBanner
├── CurriculumHierarchyLegend (optional)
├── LearningPath
│   ├── SubStageSection
│   │   ├── SubStageHeading
│   │   └── TopicPath
│   │       └── TopicNode
│   └── PathConnector
└── AppBottomNavigation
```

### Component responsibilities

- `LearningPathPage`: loads curriculum and learner progress; determines current stage and next topic.
- `LearningPathHeader`: displays page title and stage-level progress.
- `CurrentStageBanner`: displays current Level-1 stage metadata.
- `SubStageSection`: groups Level-3 topics under one Level-2 sub-stage.
- `TopicPath`: lays out the ordered topic nodes and connector.
- `TopicNode`: renders one topic and its state; handles activation/disabled state.
- `AppBottomNavigation`: reuses the existing app-wide navigation.

## 10. Data model guidance

Use the workbook-derived hierarchy as curriculum configuration. Keep curriculum metadata separate from user progress.

### Curriculum structure (conceptual TypeScript)

```ts
type CurriculumTopic = {
  id: string;
  title: string;
  order: number;
};

type CurriculumSubStage = {
  id: string;
  code: string;       // e.g. 1.1
  title: string;
  order: number;
  topics: CurriculumTopic[];
};

type CurriculumStage = {
  id: string;
  code: string;       // e.g. Stage 1
  title: string;
  levelDescriptor: string;
  order: number;
  subStages: CurriculumSubStage[];
};

type LearnerTopicProgress = {
  learnerId: string;
  topicId: string;
  status: 'locked' | 'available' | 'current' | 'completed';
  completedAt?: string;
  // Add score/attempt fields only if supported by the existing product.
};
```

**Data requirements**
- Generate stable IDs; do not use visible titles as database primary keys.
- Preserve `order` from the workbook.
- Preserve stage and sub-stage codes.
- Store progress per learner and topic, independently of curriculum definitions.
- Do not store derived stage percentages as the only source of truth.
- Avoid duplicating curriculum topic titles in multiple frontend components.

## 11. Engineering instructions for Claude Code

Before coding:

1. Inspect the existing repository, routing, design tokens, navigation, asset library, lesson routes, and progress APIs.
2. Identify the current framework and conventions. Reuse the existing stack and patterns; do not migrate frameworks or introduce a new state-management library without a demonstrated need.
3. Locate existing Learn illustrations/PIP assets and reuse them. Do not generate placeholder artwork if suitable assets already exist.
4. Inspect how lesson/topic IDs and learner progress are currently represented.
5. Confirm how the existing app navigates from a topic to its lesson or episode.

Implementation:

1. Implement the Learning Path screen using the supplied curriculum inventory in this document or an equivalent structured data module.
2. Keep curriculum data separate from UI components.
3. Build reusable components for stages, sub-stages, topic nodes, and path connectors.
4. Integrate actual learner progress if the API exists. If not, create a clearly isolated mock-data adapter for UI development; do not present mock progress as production data.
5. Ensure the first screen load has a sensible empty/new-learner state.
6. Implement loading, error, and empty states.
7. Ensure the fixed/sticky navigation does not obscure content.
8. Do not change unrelated screens or the existing onboarding flow.

After coding:

- Run the project's lint, type-check, and relevant tests.
- Test a new learner with no progress.
- Test a learner with completed, current, available, and locked topics.
- Test long topic titles and the largest sub-stage.
- Test scrolling and bottom navigation on a small mobile viewport.
- Report changed files, assumptions, API dependencies, and any incomplete integration.

## 12. Acceptance criteria

- [ ] The Learning Path clearly communicates the learner's current position.
- [ ] The five Level-1 stages appear in the approved order.
- [ ] All 25 Level-2 sub-stages appear under the correct stage.
- [ ] All Level-3 topics from the workbook appear under the correct sub-stage and in the correct order.
- [ ] No topic is duplicated, omitted, renamed, or moved to another parent.
- [ ] Grammar remains the primary learning journey; vocabulary remains secondary and separate.
- [ ] Topic nodes have clear current/completed/available/locked states.
- [ ] The path connector visually links nodes without obscuring content.
- [ ] Tapping an accessible topic opens the existing lesson route.
- [ ] Progress indicators are calculated from learner progress data.
- [ ] The UI follows the Learn cream/black/teal/coral visual language.
- [ ] Responsive layout, safe areas, scrolling, and bottom navigation work correctly.
- [ ] Accessibility and reduced-motion requirements are respected.
- [ ] Existing application flows outside this feature remain unaffected.

## 13. Explicit non-goals

- Do not redesign the entire Learn application.
- Do not redesign onboarding, profile, practice, or vocabulary screens as part of this task.
- Do not create or modify the Master Grammar Curriculum hierarchy.
- Do not generate Level-4 episode inventories in this implementation task.
- Do not mix vocabulary entries into the grammar stage/sub-stage/topic hierarchy.
- Do not invent backend endpoints or claim persistence if no supporting API exists.
- Do not replace existing app navigation with a new navigation model.

---

**End of implementation specification.**