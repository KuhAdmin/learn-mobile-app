/**
 * App-side presentation for lessons: illustrations and layout per page, keyed by the content ids.
 * Kept out of the content JSON on purpose: the JSON is approved teaching content, this file is design.
 * A lesson (or page) with no entry here still renders, text-only.
 */
import type { ImageSource } from 'expo-image';

export interface LessonArt {
  source: ImageSource;
  /** width / height of the artwork. */
  aspect: number;
  /** Screen-reader description. */
  label: string;
}

export interface PageVisual {
  art?: LessonArt;
  /** `wide` (default): art centred under the intro text. `side`: art beside it (not used by current UI rules). */
  layout?: 'side' | 'wide';
  /**
   * Small pictures inside the example card, one per shown example (examples that repeat a sentence
   * count once, see `groupExamples`). Drawn beside the example's explanation.
   */
  exampleArts?: LessonArt[];
  /** One picture per sentence of the example ("I drink water." / "Please water the plant."). */
  sentenceArt?: LessonArt[];
}

/** Phrase chips with a role label under each, replacing word-by-word chips for that example block. */
export interface PhraseAnnotation {
  text: string;
  label: string;
  note?: string;
}

export interface LessonVisuals {
  pages: Record<string, PageVisual>;
  /** block_id → phrases. Phrases must spell out the example sentence in order. */
  annotations?: Record<string, PhraseAnnotation[]>;
  /** block_id → one picture per comparison item (in item order). */
  comparisonArt?: Record<string, LessonArt[]>;
  resultArt?: LessonArt;
}

// Metro needs literal require paths, so each file is listed once here.
const ART_113 = {
  blocks: require('../../assets/lessons/1-1-3/blocks.webp'),
  girlread: require('../../assets/lessons/1-1-3/girlread.webp'),
  maya: require('../../assets/lessons/1-1-3/maya.webp'),
  boybook: require('../../assets/lessons/1-1-3/boybook.webp'),
  tablecat: require('../../assets/lessons/1-1-3/tablecat.webp'),
  girlbook: require('../../assets/lessons/1-1-3/girlbook.webp'),
  pointbook: require('../../assets/lessons/1-1-3/pointbook.webp'),
  girlopen: require('../../assets/lessons/1-1-3/girlopen.webp'),
  selfie: require('../../assets/lessons/1-1-3/selfie.webp'),
  google: require('../../assets/lessons/1-1-3/google.webp'),
  boyclosed: require('../../assets/lessons/1-1-3/boyclosed.webp'),
  plant: require('../../assets/lessons/1-1-3/plant.webp'),
  lock: require('../../assets/lessons/1-1-3/lock.webp'),
  magnifier: require('../../assets/lessons/1-1-3/magnifier.webp'),
  chingirl: require('../../assets/lessons/1-1-3/chingirl.webp'),
  books: require('../../assets/lessons/1-1-3/books.webp'),
  puzzle: require('../../assets/lessons/1-1-3/puzzle.webp'),
  spotboy: require('../../assets/lessons/1-1-3/spotboy.webp'),
  teamgirl: require('../../assets/lessons/1-1-3/teamgirl.webp'),
  readboy: require('../../assets/lessons/1-1-3/readboy.webp'),
  shortgirl: require('../../assets/lessons/1-1-3/shortgirl.webp'),
  thinkboy: require('../../assets/lessons/1-1-3/thinkboy.webp'),
  thumbs: require('../../assets/lessons/1-1-3/thumbs.webp'),
} satisfies Record<string, ImageSource>;
type Art113 = keyof typeof ART_113;

export const LESSON_VISUALS: Record<string, LessonVisuals> = {
  '1.1.1.EP001': {
    pages: {
      PAGE001: {
        layout: 'wide',
        art: {
          source: require('../../assets/lessons/1.1.1.EP001/bird.webp'),
          aspect: 390 / 350,
          label: 'A little bird singing on a stack of books',
        },
      },
      PAGE002: {
        layout: 'wide',
        art: {
          source: require('../../assets/lessons/1.1.1.EP001/girl.webp'),
          aspect: 420 / 350,
          label: 'A happy girl reading a book',
        },
      },
      PAGE003: {
        layout: 'wide',
        art: {
          source: require('../../assets/lessons/1.1.1.EP001/teams.webp'),
          aspect: 960 / 400,
          label: 'Three teams of smiling word cards, each team with its own flag',
        },
      },
      PAGE004: {
        layout: 'wide',
        art: {
          source: require('../../assets/lessons/1.1.1.EP001/cards.webp'),
          aspect: 445 / 400,
          label: 'Two cards: Noun, which names people, places or things, and Verb, which expresses action',
        },
        exampleArts: [
          {
            source: require('../../assets/lessons/1.1.1.EP001/dog.webp'),
            aspect: 262 / 290,
            label: 'A dog barking',
          },
        ],
      },
      PAGE005: {
        layout: 'wide',
        art: {
          source: require('../../assets/lessons/1.1.1.EP001/puzzle.webp'),
          aspect: 520 / 440,
          label:
            'Three puzzle pieces fitting together: Who or what (a person or thing), What happens (an action) and More detail (extra information)',
        },
      },
      PAGE006: {
        layout: 'wide',
        art: {
          source: require('../../assets/lessons/1.1.1.EP001/chase.webp'),
          aspect: 900 / 318,
          label: 'A cat chasing a mouse, with the sentence: The cat chased the mouse.',
        },
      },
      PAGE007: {
        sentenceArt: [
          {
            source: require('../../assets/lessons/1.1.1.EP001/drink.webp'),
            aspect: 270 / 192,
            label: 'A boy drinking a glass of water',
          },
          {
            source: require('../../assets/lessons/1.1.1.EP001/water.webp'),
            aspect: 330 / 192,
            label: 'A boy watering a plant',
          },
        ],
      },
      PAGE008: {
        art: {
          source: require('../../assets/lessons/1.1.1.EP001/pencil.webp'),
          aspect: 246 / 420,
          label: 'A smiling pencil giving a thumbs up on a stack of books',
        },
      },
    },
    annotations: {
      BLOCK010: [
        { text: 'My brother', label: 'tells who', note: 'the subject' },
        { text: 'plays', label: 'tells what happens', note: 'the action' },
        { text: 'football.', label: 'tells what', note: 'the object' },
      ],
      BLOCK012: [
        { text: 'The cat', label: 'Who chased?' },
        { text: 'chased', label: 'What happened?' },
        { text: 'the mouse.', label: 'Who was chased?' },
      ],
    },
    resultArt: {
      source: require('../../assets/lessons/1.1.1.EP001/pencil.webp'),
      aspect: 246 / 420,
      label: 'A smiling pencil giving a thumbs up on a stack of books',
    },
  },
  '1-1-2': {
    pages: {
      PAGE001: { art: {
          source: require('../../assets/lessons/1-1-2/thinking.webp'),
          aspect: 640 / 224,
          label: 'A boy thinking about a school, a ball, a tree and a book',
        } },
      PAGE002: { art: {
          source: require('../../assets/lessons/1-1-2/reading.webp'),
          aspect: 183 / 178,
          label: 'A girl happily reading a book',
        } },
      PAGE003: { art: {
          source: require('../../assets/lessons/1-1-2/bookkid.webp'),
          aspect: 215 / 153,
          label: 'A boy laughing as he reads a book',
        } },
      PAGE004: { art: {
          source: require('../../assets/lessons/1-1-2/nouns.webp'),
          aspect: 650 / 150,
          label: 'A boy, a school, a football and a light bulb',
        } },
      PAGE005: { art: {
          source: require('../../assets/lessons/1-1-2/pointer.webp'),
          aspect: 158 / 143,
          label: 'A boy pointing up as he talks',
        } },
      PAGE006: { art: {
          source: require('../../assets/lessons/1-1-2/verbs.webp'),
          aspect: 660 / 195,
          label: 'A boy kicking a football and a girl daydreaming happily',
        } },
      PAGE007: { art: {
          source: require('../../assets/lessons/1-1-2/apple.webp'),
          aspect: 210 / 160,
          label: 'A shiny red apple',
        } },
      PAGE008: { art: {
          source: require('../../assets/lessons/1-1-2/runner.webp'),
          aspect: 245 / 205,
          label: 'A boy running fast',
        } },
      PAGE009: { art: {
          source: require('../../assets/lessons/1-1-2/tablecat.webp'),
          aspect: 255 / 195,
          label: 'A cat sitting under a table',
        } },
      PAGE010: { art: {
          source: require('../../assets/lessons/1-1-2/bulbgirl.webp'),
          aspect: 212 / 285,
          label: 'A girl with an idea, pointing up under a light bulb',
        } },
      PAGE016: { art: {
          source: require('../../assets/lessons/1-1-2/cheer.webp'),
          aspect: 233 / 320,
          label: 'A boy cheering, with a speech bubble saying Wow!',
        } },
    },
    comparisonArt: {
      BLOCK027: [
        {
          source: require('../../assets/lessons/1-1-2/cups.webp'),
          aspect: 220 / 145,
          label: 'Two cups, one of tea and one of coffee',
        },
        {
          source: require('../../assets/lessons/1-1-2/gift.webp'),
          aspect: 175 / 135,
          label: 'A wrapped gift box',
        },
      ],
    },
    resultArt: {
          source: require('../../assets/lessons/1-1-2/cheer.webp'),
          aspect: 233 / 320,
          label: 'A boy cheering, with a speech bubble saying Wow!',
        },
  },
  '1-1-3': {
    pages: {
      PAGE001: { art: art113('blocks', 852 / 392, 'A boy arranging word blocks while a little bird sings on a branch') },
      PAGE002: {
        art: art113('girlread', 276 / 244, 'A girl happily reading a book'),
        exampleArts: [art113('maya', 262 / 205, 'A girl singing into a microphone')],
      },
      PAGE003: {
        art: art113('boybook', 279 / 245, 'A boy holding a book and pointing up'),
        exampleArts: [art113('tablecat', 228 / 190, 'A cat sitting under a table')],
      },
      PAGE004: { art: art113('girlbook', 257 / 190, 'A smiling girl reading a book') },
      PAGE005: { art: art113('pointbook', 229 / 207, 'A boy with a book, pointing up') },
      PAGE006: {
        art: art113('girlopen', 305 / 283, 'A girl reading a book with a big smile'),
        exampleArts: [
          art113('selfie', 220 / 190, 'A laptop showing the word selfie'),
          art113('google', 192 / 214, 'A phone showing the word google and a search bar'),
        ],
      },
      PAGE007: { art: art113('boyclosed', 280 / 345, 'A boy with a book, pointing up with an idea') },
      PAGE008: { art: art113('magnifier', 342 / 324, 'A boy looking through a magnifying glass') },
      PAGE009: { art: art113('chingirl', 218 / 260, 'A girl resting her chin on her hand, thinking') },
      PAGE010: { art: art113('spotboy', 281 / 248, 'A boy searching with a magnifying glass') },
      PAGE011: { art: art113('teamgirl', 325 / 248, 'A girl pointing up as she explains') },
      PAGE012: { art: art113('readboy', 285 / 305, 'A boy smiling as he reads a book') },
      PAGE013: { art: art113('shortgirl', 310 / 304, 'A girl pointing up with a smile') },
      PAGE014: { art: art113('thinkboy', 295 / 315, 'A boy thinking, with a question mark in a thought bubble') },
      PAGE015: { art: art113('thumbs', 450 / 315, 'A boy and a girl giving thumbs up') },
    },
    comparisonArt: {
      BLOCK014: [
        art113('plant', 140 / 141, 'A small plant sprouting from the soil'),
        art113('lock', 135 / 125, 'A closed padlock'),
      ],
      BLOCK017: [art113('books', 309 / 113, 'A stack of books'), art113('puzzle', 354 / 113, 'Two puzzle pieces fitting together')],
    },
    resultArt: art113('thumbs', 450 / 315, 'A boy and a girl giving thumbs up'),
  },
};

/** Lesson 1.1.3 artwork, cut from its mockups (`assets/lessons/1-1-3`). */
function art113(name: Art113, aspect: number, label: string): LessonArt {
  return { source: ART_113[name], aspect, label };
}

/**
 * Icons for list tiles, by tile label (lower case). Generic across lessons; a label without an entry
 * gets a tile without an icon.
 */
export const LIST_ICONS: Record<string, string> = {
  noun: 'book-open-variant',
  pronoun: 'account',
  verb: 'run-fast',
  adjective: 'palette-outline',
  adverb: 'timer-outline',
  nouns: 'book-open-variant',
  'main verbs': 'run-fast',
  adjectives: 'palette-outline',
  adverbs: 'timer-outline',
  articles: 'format-letter-case',
  determiners: 'hand-pointing-right',
  pronouns: 'account',
  prepositions: 'map-marker-outline',
  'auxiliary verbs': 'cog-outline',
  preposition: 'map-marker-outline',
  conjunction: 'link-variant',
  interjection: 'exclamation-thick',
  conjunctions: 'link-variant',
  interjections: 'exclamation-thick',
  people: 'account-group-outline',
  places: 'home-city-outline',
  animals: 'paw',
  things: 'cube-outline',
  ideas: 'lightbulb-on-outline',
  action: 'run-fast',
  state: 'heart-outline',
  helping: 'handshake-outline',
  quality: 'star-outline',
  size: 'arrow-expand-all',
  colour: 'palette-outline',
  color: 'palette-outline',
  number: 'numeric',
  condition: 'wrench-outline',
  how: 'cog-outline',
  when: 'calendar-month-outline',
  where: 'map-marker-outline',
  'how often': 'sync',
  'to what degree': 'gauge',
  place: 'map-marker-outline',
  time: 'clock-outline',
  direction: 'arrow-right-bold-outline',
  position: 'cube-outline',
};

export const visualsFor = (contentTopicId: string): LessonVisuals | undefined => LESSON_VISUALS[contentTopicId];
