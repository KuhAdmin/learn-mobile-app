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
  /**
   * block_id → small pictures inside an example card, one per shown example (examples that repeat a
   * sentence count once, see `groupExamples`), drawn beside the example's explanation. A rule block's id
   * pictures the rule's examples, drawn as an example card under it.
   */
  exampleArt?: Record<string, (LessonArt | null)[]>;
  /** block_id → one picture per comparison item (in item order; null = no picture for that item). */
  comparisonArt?: Record<string, (LessonArt | null)[]>;
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

const ART_115 = {
  wordjobs: require('../../assets/lessons/1-1-5/wordjobs.webp'),
  masks: require('../../assets/lessons/1-1-5/masks.webp'),
  ballboy: require('../../assets/lessons/1-1-5/ballboy.webp'),
  glass: require('../../assets/lessons/1-1-5/glass.webp'),
  watering: require('../../assets/lessons/1-1-5/watering.webp'),
  question: require('../../assets/lessons/1-1-5/question.webp'),
  handshake: require('../../assets/lessons/1-1-5/handshake.webp'),
  family: require('../../assets/lessons/1-1-5/family.webp'),
  poorman: require('../../assets/lessons/1-1-5/poorman.webp'),
  room: require('../../assets/lessons/1-1-5/room.webp'),
  cleaner: require('../../assets/lessons/1-1-5/cleaner.webp'),
  runnergirl: require('../../assets/lessons/1-1-5/runnergirl.webp'),
  fastgirl: require('../../assets/lessons/1-1-5/fastgirl.webp'),
  car: require('../../assets/lessons/1-1-5/car.webp'),
  train: require('../../assets/lessons/1-1-5/train.webp'),
  catbox: require('../../assets/lessons/1-1-5/catbox.webp'),
  sleepcat: require('../../assets/lessons/1-1-5/sleepcat.webp'),
  lamp: require('../../assets/lessons/1-1-5/lamp.webp'),
  feather: require('../../assets/lessons/1-1-5/feather.webp'),
  candle: require('../../assets/lessons/1-1-5/candle.webp'),
  tvboy: require('../../assets/lessons/1-1-5/tvboy.webp'),
  watch: require('../../assets/lessons/1-1-5/watch.webp'),
  runninggirl: require('../../assets/lessons/1-1-5/runninggirl.webp'),
} satisfies Record<string, ImageSource>;
type Art115 = keyof typeof ART_115;

const ART_116 = {
  jobtags: require('../../assets/lessons/1-1-6/jobtags.webp'),
  runboy: require('../../assets/lessons/1-1-6/runboy.webp'),
  smallbrown: require('../../assets/lessons/1-1-6/smallbrown.webp'),
  boxboy: require('../../assets/lessons/1-1-6/boxboy.webp'),
  friends: require('../../assets/lessons/1-1-6/friends.webp'),
  cheerboy: require('../../assets/lessons/1-1-6/cheerboy.webp'),
} satisfies Record<string, ImageSource>;
type Art116 = keyof typeof ART_116;

const ART_117 = {
  magnifytags: require('../../assets/lessons/1-1-7/magnifytags.webp'),
  pointgirl: require('../../assets/lessons/1-1-7/pointgirl.webp'),
  calendar: require('../../assets/lessons/1-1-7/calendar.webp'),
  chef: require('../../assets/lessons/1-1-7/chef.webp'),
  cheerbooks: require('../../assets/lessons/1-1-7/cheerbooks.webp'),
};
type Art117 = keyof typeof ART_117;

const ART_121 = {
  bird: require('../../assets/lessons/1-2-1/bird.webp'),
  wedding: require('../../assets/lessons/1-2-1/wedding.webp'),
  seasons: require('../../assets/lessons/1-2-1/seasons.webp'),
  nurse: require('../../assets/lessons/1-2-1/nurse.webp'),
  thinker: require('../../assets/lessons/1-2-1/thinker.webp'),
  lighthouse: require('../../assets/lessons/1-2-1/lighthouse.webp'),
  market: require('../../assets/lessons/1-2-1/market.webp'),
  magnifier: require('../../assets/lessons/1-2-1/magnifier.webp'),
  toolkit: require('../../assets/lessons/1-2-1/toolkit.webp'),
} satisfies Record<string, ImageSource>;
type Art121 = keyof typeof ART_121;

const ART_122 = {
  city: require('../../assets/lessons/1-2-2/city.webp'),
  doctor: require('../../assets/lessons/1-2-2/doctor.webp'),
  boycat: require('../../assets/lessons/1-2-2/boycat.webp'),
  dog: require('../../assets/lessons/1-2-2/dog.webp'),
  bruno: require('../../assets/lessons/1-2-2/bruno.webp'),
  neha: require('../../assets/lessons/1-2-2/neha.webp'),
  diwali: require('../../assets/lessons/1-2-2/diwali.webp'),
  films: require('../../assets/lessons/1-2-2/films.webp'),
  school: require('../../assets/lessons/1-2-2/school.webp'),
  lotuslake: require('../../assets/lessons/1-2-2/lotuslake.webp'),
  recap: require('../../assets/lessons/1-2-2/recap.webp'),
  clipboard: require('../../assets/lessons/1-2-2/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art122 = keyof typeof ART_122;

const ART_123 = {
  drummer: require('../../assets/lessons/1-2-3/drummer.webp'),
  soup: require('../../assets/lessons/1-2-3/soup.webp'),
  hug: require('../../assets/lessons/1-2-3/hug.webp'),
  cave: require('../../assets/lessons/1-2-3/cave.webp'),
  honesty: require('../../assets/lessons/1-2-3/honesty.webp'),
  victory: require('../../assets/lessons/1-2-3/victory.webp'),
  nurse: require('../../assets/lessons/1-2-3/nurse.webp'),
  recap: require('../../assets/lessons/1-2-3/recap.webp'),
  clipboard: require('../../assets/lessons/1-2-3/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art123 = keyof typeof ART_123;

const ART_124 = {
  team: require('../../assets/lessons/1-2-4/team.webp'),
  audience: require('../../assets/lessons/1-2-4/audience.webp'),
  bees: require('../../assets/lessons/1-2-4/bees.webp'),
  people: require('../../assets/lessons/1-2-4/people.webp'),
  animals: require('../../assets/lessons/1-2-4/animals.webp'),
  things: require('../../assets/lessons/1-2-4/things.webp'),
  doctors: require('../../assets/lessons/1-2-4/doctors.webp'),
  papers: require('../../assets/lessons/1-2-4/papers.webp'),
  recap: require('../../assets/lessons/1-2-4/recap.webp'),
  clipboard: require('../../assets/lessons/1-2-4/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art124 = keyof typeof ART_124;

const ART_125 = {
  mangorice: require('../../assets/lessons/1-2-5/mangorice.webp'),
  kittens: require('../../assets/lessons/1-2-5/kittens.webp'),
  pencils: require('../../assets/lessons/1-2-5/pencils.webp'),
  bottles: require('../../assets/lessons/1-2-5/bottles.webp'),
  sand: require('../../assets/lessons/1-2-5/sand.webp'),
  window: require('../../assets/lessons/1-2-5/window.webp'),
  salt: require('../../assets/lessons/1-2-5/salt.webp'),
  luggage: require('../../assets/lessons/1-2-5/luggage.webp'),
  furniture: require('../../assets/lessons/1-2-5/furniture.webp'),
  flour: require('../../assets/lessons/1-2-5/flour.webp'),
  advice: require('../../assets/lessons/1-2-5/advice.webp'),
  units: require('../../assets/lessons/1-2-5/units.webp'),
  coffeepot: require('../../assets/lessons/1-2-5/coffeepot.webp'),
  cup: require('../../assets/lessons/1-2-5/cup.webp'),
  books: require('../../assets/lessons/1-2-5/books.webp'),
  clipboard: require('../../assets/lessons/1-2-5/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art125 = keyof typeof ART_125;

const ART_126 = {
  doorlogs: require('../../assets/lessons/1-2-6/doorlogs.webp'),
  gold: require('../../assets/lessons/1-2-6/gold.webp'),
  potter: require('../../assets/lessons/1-2-6/potter.webp'),
  sources: require('../../assets/lessons/1-2-6/sources.webp'),
  window: require('../../assets/lessons/1-2-6/window.webp'),
  lemonade: require('../../assets/lessons/1-2-6/lemonade.webp'),
  tracks: require('../../assets/lessons/1-2-6/tracks.webp'),
  iron: require('../../assets/lessons/1-2-6/iron.webp'),
  dress: require('../../assets/lessons/1-2-6/dress.webp'),
  bench: require('../../assets/lessons/1-2-6/bench.webp'),
  plainring: require('../../assets/lessons/1-2-6/plainring.webp'),
  diamondring: require('../../assets/lessons/1-2-6/diamondring.webp'),
  recap: require('../../assets/lessons/1-2-6/recap.webp'),
  clipboard: require('../../assets/lessons/1-2-6/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art126 = keyof typeof ART_126;

const ART_127 = {
  toothbrush: require('../../assets/lessons/1-2-7/toothbrush.webp'),
  postman: require('../../assets/lessons/1-2-7/postman.webp'),
  busstop: require('../../assets/lessons/1-2-7/busstop.webp'),
  sunflower: require('../../assets/lessons/1-2-7/sunflower.webp'),
  classroom: require('../../assets/lessons/1-2-7/classroom.webp'),
  postoffice: require('../../assets/lessons/1-2-7/postoffice.webp'),
  icecream: require('../../assets/lessons/1-2-7/icecream.webp'),
  brother: require('../../assets/lessons/1-2-7/brother.webp'),
  medal: require('../../assets/lessons/1-2-7/medal.webp'),
  teacup: require('../../assets/lessons/1-2-7/teacup.webp'),
  schoolbus: require('../../assets/lessons/1-2-7/schoolbus.webp'),
  houseboat: require('../../assets/lessons/1-2-7/houseboat.webp'),
  boathouse: require('../../assets/lessons/1-2-7/boathouse.webp'),
  recap: require('../../assets/lessons/1-2-7/recap.webp'),
  clipboard: require('../../assets/lessons/1-2-7/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art127 = keyof typeof ART_127;

const ART_128 = {
  stars: require('../../assets/lessons/1-2-8/stars.webp'),
  parrot: require('../../assets/lessons/1-2-8/parrot.webp'),
  girl: require('../../assets/lessons/1-2-8/girl.webp'),
  parrots: require('../../assets/lessons/1-2-8/parrots.webp'),
  sisters: require('../../assets/lessons/1-2-8/sisters.webp'),
  cake: require('../../assets/lessons/1-2-8/cake.webp'),
  beans: require('../../assets/lessons/1-2-8/beans.webp'),
  bus: require('../../assets/lessons/1-2-8/bus.webp'),
  painter: require('../../assets/lessons/1-2-8/painter.webp'),
  glasses: require('../../assets/lessons/1-2-8/glasses.webp'),
  scissors: require('../../assets/lessons/1-2-8/scissors.webp'),
  jeans: require('../../assets/lessons/1-2-8/jeans.webp'),
  shorts: require('../../assets/lessons/1-2-8/shorts.webp'),
  news: require('../../assets/lessons/1-2-8/news.webp'),
  maths: require('../../assets/lessons/1-2-8/maths.webp'),
  recap: require('../../assets/lessons/1-2-8/recap.webp'),
  clipboard: require('../../assets/lessons/1-2-8/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art128 = keyof typeof ART_128;

const ART_129 = {
  kids: require('../../assets/lessons/1-2-9/kids.webp'),
  kites: require('../../assets/lessons/1-2-9/kites.webp'),
  gate: require('../../assets/lessons/1-2-9/gate.webp'),
  dishes: require('../../assets/lessons/1-2-9/dishes.webp'),
  fox: require('../../assets/lessons/1-2-9/fox.webp'),
  monkey: require('../../assets/lessons/1-2-9/monkey.webp'),
  leaves: require('../../assets/lessons/1-2-9/leaves.webp'),
  knife: require('../../assets/lessons/1-2-9/knife.webp'),
  produce: require('../../assets/lessons/1-2-9/produce.webp'),
  camera: require('../../assets/lessons/1-2-9/camera.webp'),
  geese: require('../../assets/lessons/1-2-9/geese.webp'),
  oxen: require('../../assets/lessons/1-2-9/oxen.webp'),
  sheep: require('../../assets/lessons/1-2-9/sheep.webp'),
  busstop: require('../../assets/lessons/1-2-9/busstop.webp'),
  boy: require('../../assets/lessons/1-2-9/boy.webp'),
  children: require('../../assets/lessons/1-2-9/children.webp'),
} satisfies Record<string, ImageSource>;
type Art129 = keyof typeof ART_129;

const ART_1210 = {
  classroom: require('../../assets/lessons/1-2-10/classroom.webp'),
  genders: require('../../assets/lessons/1-2-10/genders.webp'),
  kite: require('../../assets/lessons/1-2-10/kite.webp'),
  royals: require('../../assets/lessons/1-2-10/royals.webp'),
  prince: require('../../assets/lessons/1-2-10/prince.webp'),
  hens: require('../../assets/lessons/1-2-10/hens.webp'),
  people: require('../../assets/lessons/1-2-10/people.webp'),
  fireman: require('../../assets/lessons/1-2-10/fireman.webp'),
  firefighter: require('../../assets/lessons/1-2-10/firefighter.webp'),
  recap: require('../../assets/lessons/1-2-10/recap.webp'),
} satisfies Record<string, ImageSource>;
type Art1210 = keyof typeof ART_1210;

const ART_1211 = {
  bicycle: require('../../assets/lessons/1-2-11/bicycle.webp'),
  clinic: require('../../assets/lessons/1-2-11/clinic.webp'),
  dog: require('../../assets/lessons/1-2-11/dog.webp'),
  giraffe: require('../../assets/lessons/1-2-11/giraffe.webp'),
  hostel: require('../../assets/lessons/1-2-11/hostel.webp'),
  shirt: require('../../assets/lessons/1-2-11/shirt.webp'),
  park: require('../../assets/lessons/1-2-11/park.webp'),
  trophy: require('../../assets/lessons/1-2-11/trophy.webp'),
  james: require('../../assets/lessons/1-2-11/james.webp'),
  house: require('../../assets/lessons/1-2-11/house.webp'),
  phones: require('../../assets/lessons/1-2-11/phones.webp'),
  doormountain: require('../../assets/lessons/1-2-11/doormountain.webp'),
  cats: require('../../assets/lessons/1-2-11/cats.webp'),
  catbowl: require('../../assets/lessons/1-2-11/catbowl.webp'),
} satisfies Record<string, ImageSource>;
type Art1211 = keyof typeof ART_1211;

const ART_1212 = {
  boyblocks: require('../../assets/lessons/1-2-12/boyblocks.webp'),
  invitation: require('../../assets/lessons/1-2-12/invitation.webp'),
  family: require('../../assets/lessons/1-2-12/family.webp'),
  calmgirl: require('../../assets/lessons/1-2-12/calmgirl.webp'),
  fireplace: require('../../assets/lessons/1-2-12/fireplace.webp'),
  people: require('../../assets/lessons/1-2-12/people.webp'),
  street: require('../../assets/lessons/1-2-12/street.webp'),
  notepad: require('../../assets/lessons/1-2-12/notepad.webp'),
  recap: require('../../assets/lessons/1-2-12/recap.webp'),
  clipboard: require('../../assets/lessons/1-2-12/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art1212 = keyof typeof ART_1212;

const ART_1213 = {
  goalie: require('../../assets/lessons/1-2-13/goalie.webp'),
  grandpa: require('../../assets/lessons/1-2-13/grandpa.webp'),
  chef: require('../../assets/lessons/1-2-13/chef.webp'),
  doormat: require('../../assets/lessons/1-2-13/doormat.webp'),
  cyclists: require('../../assets/lessons/1-2-13/cyclists.webp'),
  lawyer: require('../../assets/lessons/1-2-13/lawyer.webp'),
  coach: require('../../assets/lessons/1-2-13/coach.webp'),
  kitten: require('../../assets/lessons/1-2-13/kitten.webp'),
  zoya: require('../../assets/lessons/1-2-13/zoya.webp'),
  mrsrao: require('../../assets/lessons/1-2-13/mrsrao.webp'),
  kabir: require('../../assets/lessons/1-2-13/kabir.webp'),
  girl: require('../../assets/lessons/1-2-13/girl.webp'),
  books: require('../../assets/lessons/1-2-13/books.webp'),
} satisfies Record<string, ImageSource>;
type Art1213 = keyof typeof ART_1213;

const ART_1214 = {
  girl: require('../../assets/lessons/1-2-14/girl.webp'),
  guide: require('../../assets/lessons/1-2-14/guide.webp'),
  girls: require('../../assets/lessons/1-2-14/girls.webp'),
  puddle: require('../../assets/lessons/1-2-14/puddle.webp'),
  friends: require('../../assets/lessons/1-2-14/friends.webp'),
  scissors: require('../../assets/lessons/1-2-14/scissors.webp'),
  bananas: require('../../assets/lessons/1-2-14/bananas.webp'),
  cars: require('../../assets/lessons/1-2-14/cars.webp'),
  taj: require('../../assets/lessons/1-2-14/taj.webp'),
  winkgirl: require('../../assets/lessons/1-2-14/winkgirl.webp'),
} satisfies Record<string, ImageSource>;
type Art1214 = keyof typeof ART_1214;

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
    exampleArt: {
      BLOCK008: [{ source: require('../../assets/lessons/1.1.1.EP001/dog.webp'), aspect: 262 / 290, label: 'A dog barking' }],
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
      PAGE002: { art: art113('girlread', 276 / 244, 'A girl happily reading a book') },
      PAGE003: { art: art113('boybook', 279 / 245, 'A boy holding a book and pointing up') },
      PAGE004: { art: art113('girlbook', 257 / 190, 'A smiling girl reading a book') },
      PAGE005: { art: art113('pointbook', 229 / 207, 'A boy with a book, pointing up') },
      PAGE006: { art: art113('girlopen', 305 / 283, 'A girl reading a book with a big smile') },
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
    exampleArt: {
      BLOCK004: [art113('maya', 262 / 205, 'A girl singing into a microphone')],
      BLOCK006: [art113('tablecat', 228 / 190, 'A cat sitting under a table')],
      BLOCK012: [
        art113('selfie', 220 / 190, 'A laptop showing the word selfie'),
        art113('google', 192 / 214, 'A phone showing the word google and a search bar'),
      ],
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
  // The 1.1.4 mockup is one small collage, so its characters reuse the matching (sharper) 1.1.3 artwork;
  // only the devices and word blocks are new.
  '1-1-4': {
    pages: {
      PAGE001: { art: art113('readboy', 285 / 305, 'A boy smiling as he reads a book') },
      PAGE002: { art: art113('girlopen', 305 / 283, 'A girl reading a book with a big smile') },
      PAGE003: { art: art113('thinkboy', 295 / 315, 'A boy thinking, with a question mark in a thought bubble') },
      PAGE010: {
        art: { source: require('../../assets/lessons/1-1-4/devices.webp'), aspect: 652 / 273, label: 'A laptop downloading a file next to a phone full of apps' },
      },
      PAGE011: {
        art: {
          source: require('../../assets/lessons/1-1-4/wordblocks.webp'),
          aspect: 288 / 366,
          label: 'A stack of word blocks: the, and, in, she',
        },
      },
      PAGE013: { art: art113('shortgirl', 310 / 304, 'A girl pointing up with a smile') },
      PAGE015: { art: art113('thumbs', 450 / 315, 'A boy and a girl giving thumbs up') },
    },
    exampleArt: {
      BLOCK004: [
        art113('google', 192 / 214, 'A phone showing the word google and a search bar'),
        art113('selfie', 220 / 190, 'A laptop showing the word selfie'),
      ],
    },
    comparisonArt: {
      BLOCK013: [
        art113('plant', 140 / 141, 'A small plant sprouting from the soil'),
        art113('lock', 135 / 125, 'A closed padlock'),
      ],
    },
    resultArt: art113('thumbs', 450 / 315, 'A boy and a girl giving thumbs up'),
  },
  // Characters that match 1.1.3 artwork reuse it; the objects and scenes are cut from the 1.1.5 mockups.
  '1-1-5': {
    pages: {
      PAGE001: { art: art115('wordjobs', 669 / 384, 'A boy wondering whether a word is a noun, a thing, or a verb, an action') },
      PAGE002: { art: art113('girlread', 276 / 244, 'A girl happily reading a book') },
      PAGE003: { art: art113('magnifier', 342 / 324, 'A boy looking through a magnifying glass') },
      PAGE012: { art: art113('thinkboy', 295 / 315, 'A boy thinking, with a question mark in a thought bubble') },
      PAGE015: { art: art113('books', 309 / 113, 'A stack of books') },
      PAGE016: { art: art115('runninggirl', 300 / 273, 'A girl running fast') },
      PAGE018: { art: art113('thumbs', 450 / 315, 'A boy and a girl giving thumbs up') },
    },
    exampleArt: {
      BLOCK008: [art115('masks', 233 / 158, 'Theatre masks on a stage'), art115('ballboy', 270 / 191, 'A boy playing football outside')],
      BLOCK013: [art115('family', 255 / 190, 'A grandfather, a child and a mother together'), art115('poorman', 180 / 174, 'A sad man in old clothes')],
      BLOCK016: [art115('room', 300 / 240, 'A clean, tidy room'), art115('cleaner', 324 / 255, 'A boy mopping the floor')],
      BLOCK019: [art115('runnergirl', 345 / 267, 'A girl ready to run'), art115('fastgirl', 332 / 270, 'A girl running fast')],
      BLOCK024: [art115('catbox', 283 / 276, 'A cat inside a box'), art115('sleepcat', 355 / 255, 'A cat curled up asleep indoors')],
      BLOCK033: [art115('tvboy', 375 / 255, 'A boy watching television'), art115('watch', 216 / 267, 'A wristwatch')],
    },
    comparisonArt: {
      BLOCK011: [
        art115('glass', 133 / 161, 'A glass of water'),
        art115('watering', 216 / 230, 'A watering can watering a plant'),
        art115('question', 197 / 152, 'A speech bubble with question marks'),
        art115('handshake', 193 / 176, 'Two people shaking hands, with a question in a speech bubble'),
      ],
      BLOCK022: [art115('car', 270 / 210, 'A yellow car'), null, art115('train', 294 / 225, 'A train'), null],
      BLOCK031: [
        art115('lamp', 216 / 216, 'A desk lamp'),
        art115('feather', 192 / 174, 'A light feather'),
        art115('candle', 168 / 186, 'A lit candle'),
      ],
    },
    resultArt: art113('thumbs', 450 / 315, 'A boy and a girl giving thumbs up'),
  },
  // The regenerated 1.1.6 came without mockups: its pages reuse artwork from earlier lessons and the first 1.1.6 mockups.
  '1-1-6': {
    pages: {
      PAGE001: { art: art116('jobtags', 643 / 236, 'A boy wondering about the labels noun, verb and adjective') },
      PAGE002: { art: art113('girlread', 276 / 244, 'A girl happily reading a book') },
      PAGE004: { art: art113('magnifier', 342 / 324, 'A boy looking through a magnifying glass') },
      PAGE005: { art: art116('runboy', 609 / 244, 'A boy running') },
      PAGE006: { art: art113('chingirl', 218 / 260, 'A girl resting her chin on her hand, thinking') },
      PAGE007: { art: art116('boxboy', 462 / 409, 'A child happily opening a box') },
      PAGE008: { art: art116('smallbrown', 657 / 219, 'A small dog and three brown birds on a branch') },
      PAGE009: { art: art116('friends', 564 / 318, 'A girl and a boy, friends, side by side') },
      PAGE010: {
        art: { source: require('../../assets/lessons/1-1-4/wordblocks.webp'), aspect: 288 / 366, label: 'A stack of word blocks: the, and, in, she' },
      },
      PAGE011: { art: art113('blocks', 852 / 392, 'A boy arranging word blocks while a little bird sings on a branch') },
      PAGE012: { art: art113('thinkboy', 295 / 315, 'A boy thinking, with a question mark in a thought bubble') },
      PAGE013: { art: art113('pointbook', 229 / 207, 'A boy with a book, pointing up') },
      PAGE014: { art: art113('spotboy', 281 / 248, 'A boy searching with a magnifying glass') },
      PAGE017: { art: art113('shortgirl', 310 / 304, 'A girl pointing up with a smile') },
      PAGE018: { art: art113('girlbook', 257 / 190, 'A smiling girl reading a book') },
      PAGE019: { art: art113('readboy', 285 / 305, 'A boy smiling as he reads a book') },
      PAGE020: { art: art116('cheerboy', 326 / 456, 'A boy cheering, with a tick in a speech bubble') },
    },
    exampleArt: {
      BLOCK022: [null, { source: require('../../assets/lessons/1-1-2/cups.webp'), aspect: 220 / 145, label: 'Two cups, one of tea and one of coffee' }],
    },
    comparisonArt: {
      BLOCK037: [art115('lamp', 216 / 216, 'A desk lamp'), null],
      BLOCK038: [
        art115('room', 300 / 240, 'A clean, tidy room'),
        art115('cleaner', 324 / 255, 'A boy mopping the floor'),
        art115('train', 294 / 225, 'A train'),
        null,
      ],
    },
    resultArt: art116('cheerboy', 326 / 456, 'A boy cheering, with a tick in a speech bubble'),
  },
  // The mockups were drawn for an earlier draft (watch, light, clean, fast, before): only art that still fits is used.
  '1-1-7': {
    pages: {
      PAGE001: { art: art117('magnifytags', 650 / 216, 'A boy with a magnifying glass, wondering whether a word is a noun, verb, adjective or adverb') },
      PAGE002: { art: art117('pointgirl', 299 / 336, 'A girl pointing up with a smile') },
      PAGE004: { art: art113('thinkboy', 295 / 315, 'A boy thinking, with a question mark in a thought bubble') },
      PAGE012: { art: art117('calendar', 158 / 307, 'A calendar') },
      PAGE014: { art: art117('chef', 472 / 230, 'A young cook stirring dinner at the stove') },
      PAGE016: { art: art113('readboy', 285 / 305, 'A boy smiling as he reads a book') },
      PAGE018: { art: art113('shortgirl', 310 / 304, 'A girl pointing up with a smile') },
      PAGE019: { art: art117('cheerbooks', 868 / 394, 'A boy cheering beside a stack of books and a light bulb') },
    },
    exampleArt: {
      BLOCK018: [art113('plant', 140 / 141, 'A small plant sprouting from the soil'), null],
    },
    resultArt: art113('thumbs', 450 / 315, 'A boy and a girl giving thumbs up'),
  },
  // Cut from the 1.2.1 mockups. Page 7 is a side-by-side comparison, so it has no picture.
  '1-2-1': {
    pages: {
      PAGE001: { art: art121('bird', 155 / 148, 'A little bird sitting on a stack of books') },
      PAGE002: { art: art121('wedding', 155 / 138, 'A bride and groom under an arch of flowers') },
      PAGE003: { art: art121('seasons', 166 / 135, 'A calendar showing spring, summer, autumn and winter') },
      PAGE004: { art: art121('nurse', 195 / 132, 'A nurse beside a History book') },
      PAGE005: { art: art121('thinker', 143 / 146, 'A boy wondering whether a word names a person or a place') },
      PAGE006: { art: art121('lighthouse', 84 / 175, 'A lighthouse on a rocky island') },
      PAGE008: { art: art121('market', 188 / 144, 'A baker handing bread to a tourist at a market stall') },
      PAGE009: { art: art121('magnifier', 132 / 133, 'A boy looking through a magnifying glass') },
      PAGE010: { art: art121('toolkit', 168 / 168, 'A toolbox labelled Noun Toolkit, with a wrench, a pencil and a checklist') },
    },
    resultArt: art121('toolkit', 168 / 168, 'A toolbox labelled Noun Toolkit, with a wrench, a pencil and a checklist'),
  },
  // Cut from the 1.2.2 mockups. Page 4's dogs sit in its comparison cards. Page 9's small lake pictures are
  // drawn on tinted cards, so that page uses the Lotus Lake scene instead.
  '1-2-2': {
    pages: {
      PAGE001: { art: art122('city', 184 / 144, 'A boy thinking of tall city buildings and of a pink palace') },
      PAGE002: { art: art122('doctor', 200 / 122, 'A doctor beside a hospital, and a puppy chewing a slipper') },
      PAGE003: { art: art122('boycat', 158 / 132, 'A boy sitting with his grey and white cat') },
      PAGE005: { art: art122('neha', 89 / 97, 'A smiling girl holding a book') },
      PAGE006: { art: art122('diwali', 197 / 114, 'A Diwali lamp beside a November calendar') },
      PAGE007: { art: art122('films', 214 / 123, 'A film clapperboard, a book called Jungle Friends, and children with a Green Club sign') },
      PAGE008: { art: art122('school', 208 / 123, 'A school building beside a Park Road sign') },
      PAGE009: { art: art122('lotuslake', 182 / 185, 'A lake with lotus flowers and a sign saying Lotus Lake') },
      PAGE010: { art: art122('recap', 155 / 166, 'A boy holding up a checklist with ticks') },
    },
    comparisonArt: {
      BLOCK007: [art122('dog', 107 / 86, 'A dog'), art122('bruno', 136 / 91, 'A dog with a bone-shaped tag saying Bruno')],
    },
    resultArt: art122('clipboard', 132 / 136, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.3 mockups. Pages 3, 5 and 7 draw their icons inside list rows and tinted cards, so they
  // have no picture of their own.
  '1-2-3': {
    pages: {
      PAGE001: { art: art123('drummer', 207 / 184, 'A boy playing a drum, thinking of the word courage') },
      PAGE002: { art: art123('soup', 197 / 158, 'A bowl of hot soup, and a thundercloud over a sleeping baby') },
      PAGE004: { art: art123('hug', 165 / 122, 'A mother with her hand on her son’s shoulder, and a heart in a speech bubble') },
      PAGE008: { art: art123('nurse', 222 / 114, 'A nurse talking kindly with an old woman') },
      PAGE009: { art: art123('recap', 134 / 125, 'A boy holding up a checklist with ticks') },
    },
    exampleArt: {
      BLOCK008: [null, art123('cave', 96 / 88, 'A child peeking out of a cave')],
      BLOCK012: [
        art123('honesty', 111 / 96, 'A boy with his hand on his heart'),
        art123('victory', 136 / 95, 'Three children cheering behind a gold trophy'),
      ],
    },
    resultArt: art123('clipboard', 138 / 132, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.4 mockups. Pages 3 and 7 draw their sailors and elephants inside comparison and mistake cards,
  // so they have no picture. Pages 4–6 start with a list, so their group pictures join the Key Takeaway.
  '1-2-4': {
    pages: {
      PAGE001: { art: art124('team', 206 / 158, 'A cricket team cheering around a gold trophy') },
      PAGE002: { art: art124('audience', 190 / 145, 'An audience clapping in their seats') },
      PAGE004: { art: art124('people', 156 / 177, 'Two students with school bags, three singers with song books, and two soldiers') },
      PAGE005: { art: art124('animals', 166 / 200, 'Elephants, sheep, wolves and fish, each in a group') },
      PAGE006: { art: art124('things', 177 / 218, 'Flowers, keys, books, clothes, a ship, a bus and a bundle of sticks') },
      PAGE009: { art: art124('recap', 160 / 133, 'A boy holding up a checklist with ticks') },
    },
    exampleArt: {
      BLOCK004: [null, art124('bees', 149 / 72, 'Bees flying around a hive')],
      BLOCK015: [
        art124('doctors', 149 / 92, 'Three doctors in white coats'),
        art124('papers', 110 / 90, 'A pile of newspapers tied with string'),
      ],
    },
    resultArt: art124('clipboard', 148 / 136, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.5 mockups. Page 5 draws its icons on tinted list rows, so it has no picture. Page 8's six tile
  // pictures are put together as one grid. Page 9's coffee pot and cup were cut from tinted comparison cards.
  '1-2-5': {
    pages: {
      PAGE001: { art: art125('mangorice', 174 / 125, 'A mango beside a bowl of rice') },
      PAGE002: { art: art125('kittens', 300 / 102, 'One kitten, and two kittens sitting together') },
      PAGE004: { art: art125('window', 192 / 116, 'Wind blowing in through an open window') },
      PAGE008: { art: art125('units', 312 / 140, 'A glass of milk, a loaf of bread, a bowl of rice, a bottle of oil, cheese and an armchair') },
      PAGE010: { art: art125('books', 80 / 68, 'A stack of two books') },
    },
    exampleArt: {
      BLOCK004: [null, art125('pencils', 80 / 82, 'Pencils in a pot')],
      BLOCK005: [art125('bottles', 74 / 75, 'Two water bottles'), art125('sand', 86 / 61, 'A pile of sand with a toy spade')],
      BLOCK007: [null, art125('salt', 84 / 86, 'A salt shaker')],
      BLOCK011: [
        art125('luggage', 113 / 90, 'A blue suitcase and an orange bag'),
        art125('furniture', 127 / 98, 'A chair, and a lamp on a bedside table'),
      ],
      BLOCK013: [
        art125('flour', 108 / 79, 'Two bags of flour'),
        art125('advice', 116 / 98, 'A note saying Advice, with a light bulb'),
      ],
    },
    comparisonArt: {
      BLOCK016: [art125('coffeepot', 100 / 81, 'A pot of hot coffee and coffee beans'), art125('cup', 98 / 81, 'A cup of hot coffee')],
    },
    resultArt: art125('clipboard', 86 / 68, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.6 mockups. Page 3's four source pictures (cut from tinted list tiles) are put together as one
  // grid. Pages 4 and 7 draw their pictures in tinted comparison cards, cut out the same way.
  '1-2-6': {
    pages: {
      PAGE001: { art: art126('doorlogs', 340 / 138, 'A wooden door beside a pile of logs') },
      PAGE003: { art: art126('sources', 312 / 148, 'Rocks, logs and cotton, a sheep with silk and leather, and a factory') },
      PAGE008: { art: art126('recap', 122 / 208, 'A boy thinking over a book, with a light bulb above him') },
    },
    exampleArt: {
      BLOCK004: [art126('gold', 110 / 77, 'Shining gold bars'), art126('potter', 140 / 80, 'Hands shaping a clay pot on a potter’s wheel')],
      BLOCK010: [art126('tracks', 110 / 70, 'A railway track'), art126('iron', 124 / 82, 'A clothes iron')],
      BLOCK012: [art126('dress', 98 / 107, 'A pink dress with white spots'), art126('bench', 167 / 71, 'A stone bench on grass')],
    },
    comparisonArt: {
      BLOCK008: [art126('window', 104 / 99, 'A window with four glass panes'), art126('lemonade', 89 / 87, 'A glass of lemonade')],
      BLOCK013: [art126('plainring', 117 / 78, 'A plain silver ring'), art126('diamondring', 107 / 74, 'A silver ring with a diamond')],
    },
    resultArt: art126('clipboard', 61 / 56, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.7 mockups. Pages 2–6 keep their pictures beside the examples (page 6's sit with the rule's
  // examples); page 7's houseboat and boathouse were cut from tinted comparison cards.
  '1-2-7': {
    pages: {
      PAGE001: { art: art127('toothbrush', 310 / 88, 'A toothbrush and a folded towel') },
      PAGE008: { art: art127('recap', 344 / 128, 'A toothbrush, a post office, a silver medal, a teacup, a houseboat and a boathouse') },
    },
    exampleArt: {
      BLOCK004: [art127('postman', 116 / 100, 'A postman holding a parcel'), art127('busstop', 160 / 73, 'A bus stop with a sign and a bench')],
      BLOCK006: [art127('sunflower', 112 / 97, 'A sunflower'), art127('classroom', 154 / 77, 'A classroom with a blackboard, desks and big windows')],
      BLOCK008: [art127('postoffice', 150 / 93, 'A post office building'), art127('icecream', 101 / 80, 'A strawberry ice cream cone')],
      BLOCK010: [art127('brother', 86 / 86, 'A smiling man'), art127('medal', 86 / 74, 'A silver medal with the number 2')],
      BLOCK012: [art127('teacup', 102 / 53, 'A teacup on a saucer'), art127('schoolbus', 120 / 51, 'A yellow school bus')],
    },
    comparisonArt: {
      BLOCK013: [
        art127('houseboat', 169 / 76, 'A houseboat on the water among palm trees'),
        art127('boathouse', 160 / 72, 'A boathouse with a boat inside'),
      ],
    },
    resultArt: art127('clipboard', 72 / 68, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.8 mockups. Page 3's two sisters come from a quiz explanation; page 9's row puts together the
  // four icons of the recap tiles (cut from tinted tiles).
  '1-2-8': {
    pages: {
      PAGE001: { art: art128('stars', 334 / 108, 'One star in a little cloud, and a cloud full of stars') },
      PAGE003: { art: art128('parrots', 318 / 118, 'Three parrots sitting on a branch') },
      PAGE009: { art: art128('recap', 383 / 62, 'A book, a stack of books, a pair of scissors and a newspaper') },
    },
    exampleArt: {
      BLOCK004: [art128('parrot', 150 / 116, 'A parrot sitting on a branch'), art128('girl', 162 / 122, 'A smiling girl')],
      BLOCK006: [null, art128('sisters', 132 / 106, 'Two smiling sisters')],
      BLOCK008: [art128('cake', 198 / 109, 'A cake with candles'), art128('beans', 150 / 117, 'Green bean pods')],
      BLOCK010: [art128('bus', 162 / 86, 'A yellow bus'), art128('painter', 158 / 118, 'A girl painting a picture on an easel')],
      BLOCK012: [art128('glasses', 184 / 68, 'A pair of glasses'), art128('scissors', 146 / 104, 'A pair of red scissors')],
      BLOCK014: [art128('jeans', 118 / 115, 'A pair of blue jeans'), art128('shorts', 218 / 82, 'Three pairs of shorts')],
      BLOCK016: [art128('news', 180 / 105, 'A newspaper'), art128('maths', 142 / 116, 'A maths book')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.9 mockups. Pages 2 and 10 open with a rule, so their main picture sits under the rule. Page 8's
  // children come from a quiz explanation. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-2-9': {
    pages: {
      PAGE001: { art: art129('kids', 330 / 110, 'A girl and a boy holding a box with a teddy bear in it') },
      PAGE002: { art: art129('kites', 316 / 113, 'Two kites flying over bushes, with clouds') },
      PAGE008: { art: art129('oxen', 347 / 126, 'Two oxen pulling a cart full of hay') },
      PAGE009: { art: art129('sheep', 355 / 108, 'Three sheep on the grass') },
      PAGE010: { art: art129('busstop', 347 / 115, 'A bus stop with a bench, between bushes') },
      PAGE011: { art: art129('boy', 108 / 228, 'A boy holding a book, with one finger raised') },
    },
    exampleArt: {
      BLOCK003: [null, art129('gate', 105 / 66, 'A gate between two posts')],
      BLOCK004: [art129('dishes', 182 / 102, 'A stack of plates and a cup'), art129('fox', 164 / 107, 'A fox peeping out of a bush')],
      BLOCK005: [null, art129('monkey', 88 / 90, 'A monkey holding bananas')],
      BLOCK006: [art129('leaves', 187 / 75, 'Autumn leaves'), art129('knife', 146 / 83, 'A kitchen knife')],
      BLOCK008: [art129('produce', 233 / 83, 'A tomato and some potatoes'), art129('camera', 116 / 87, 'A camera')],
      BLOCK011: [art129('geese', 134 / 142, 'Two geese walking on the grass')],
      BLOCK013: [null, art129('children', 142 / 118, 'A boy and a girl with school bags')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.10 mockups. Pages 2 and 9 put together the icons of their list tiles (cut from tinted tiles) as one
  // row. Pages 4 and 6 open with a list, so their pictures close the page with the takeaway.
  '1-2-10': {
    pages: {
      PAGE001: { art: art1210('classroom', 357 / 110, 'A boy and a girl carrying a chair to their teacher') },
      PAGE002: { art: art1210('genders', 369 / 72, 'A man, a woman, a boy and a girl, and a table') },
      PAGE003: { art: art1210('kite', 357 / 160, 'A man handing a kite to a boy') },
      PAGE004: { art: art1210('royals', 160 / 138, 'A king and a queen') },
      PAGE005: { art: art1210('prince', 357 / 106, 'A prince and a princess in front of a castle') },
      PAGE006: { art: art1210('hens', 170 / 148, 'A rooster and a hen') },
      PAGE007: { art: art1210('people', 352 / 104, 'A teacher, a doctor, a pilot and a student') },
      PAGE009: { art: art1210('recap', 297 / 68, 'A boy, a girl, a boy and a girl together, and a chair') },
    },
    comparisonArt: {
      BLOCK016: [art1210('fireman', 110 / 101, 'A man in a fire helmet'), art1210('firefighter', 98 / 86, 'A woman in a fire helmet')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.11 mockups. Pages 2, 4 and 5 open with a rule, so their main picture closes the page with the
  // takeaway; pages 7 and 9 draw theirs in their comparison cards.
  '1-2-11': {
    pages: {
      PAGE001: { art: art1211('bicycle', 355 / 144, 'A girl with her red bicycle') },
      PAGE002: { art: art1211('clinic', 350 / 100, 'A doctor beside a clinic') },
      PAGE003: { art: art1211('giraffe', 352 / 121, 'A giraffe with a long neck, and a baby’s sock') },
      PAGE004: { art: art1211('hostel', 366 / 106, 'Three girls beside a hostel') },
      PAGE005: { art: art1211('park', 360 / 106, 'A boy and a girl at the gate of a park') },
      PAGE006: { art: art1211('james', 306 / 128, 'Two boys talking; one wears a name tag that says James') },
      PAGE008: { art: art1211('doormountain', 336 / 80, 'A door with a handle, and a snowy mountain') },
    },
    exampleArt: {
      BLOCK003: [null, art1211('dog', 96 / 96, 'A puppy beside a red food bowl')],
      BLOCK006: [null, art1211('shirt', 84 / 62, 'A muddy blue football shirt')],
      BLOCK007: [null, art1211('trophy', 74 / 66, 'A gold trophy')],
    },
    comparisonArt: {
      BLOCK010: [art1211('house', 128 / 62, 'A house'), art1211('phones', 152 / 64, 'A boy and a girl, each with a phone')],
      BLOCK013: [art1211('cats', 156 / 74, 'Three cats'), art1211('catbowl', 138 / 84, 'A cat eating from its bowl')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.12 mockups. Pages 2, 3, 5 and 6 open with a list, so their picture closes the page with the
  // takeaway. Page 9's row puts together the five icons of the recap tiles (cut from tinted tiles); its clipboard is
  // also the Lesson Complete picture.
  '1-2-12': {
    pages: {
      PAGE001: { art: art1212('boyblocks', 355 / 113, 'A boy pointing at blocks that say enjoyment, darkness and artist') },
      PAGE002: { art: art1212('invitation', 140 / 122, 'An invitation card in an envelope') },
      PAGE003: { art: art1212('family', 202 / 143, 'A girl arriving at a door, where her family waves hello') },
      PAGE004: { art: art1212('calmgirl', 174 / 135, 'A calm girl with her eyes closed') },
      PAGE005: { art: art1212('fireplace', 154 / 140, 'A warm fire in a fireplace') },
      PAGE006: { art: art1212('people', 206 / 152, 'A teacher, an actor with a clapperboard, a scientist and a librarian') },
      PAGE007: { art: art1212('street', 166 / 142, 'Three friends in front of a house, with bunting') },
      PAGE008: { art: art1212('notepad', 228 / 142, 'A notepad listing laziness, creation and decision, with a pencil') },
      PAGE009: { art: art1212('recap', 380 / 58, 'A clipboard, a fiery mountain, a chef and a teacher, a handshake and a pencil') },
    },
    resultArt: art1212('clipboard', 50 / 55, 'A checklist on a clipboard'),
  },
  // Cut from the 1.2.13 mockups. Pages 2–6 keep one picture beside each example. The mockups have no clipboard, so the
  // Lesson Complete screen reuses 1.2.8's.
  '1-2-13': {
    pages: {
      PAGE001: { art: art1213('goalie', 345 / 97, 'A goalkeeper diving to stop a football') },
      PAGE007: { art: art1213('girl', 128 / 177, 'A girl holding a book, with one finger raised') },
      PAGE008: { art: art1213('books', 79 / 42, 'A stack of two books') },
    },
    exampleArt: {
      BLOCK004: [art1213('grandpa', 118 / 120, 'A grandfather with two children'), art1213('chef', 118 / 118, 'A girl in a chef’s hat holding a cake')],
      BLOCK006: [art1213('doormat', 166 / 97, 'A welcome mat with keys on it'), art1213('cyclists', 188 / 115, 'Two children cycling beside a river')],
      BLOCK008: [art1213('lawyer', 118 / 124, 'A woman in a suit holding a book'), art1213('coach', 174 / 126, 'A swimming coach with a whistle beside a pool')],
      BLOCK010: [art1213('kitten', 124 / 103, 'A smiling kitten with a red collar'), art1213('zoya', 132 / 112, 'A smiling girl wearing a badge')],
      BLOCK012: [art1213('mrsrao', 130 / 113, 'A teacher in a sari holding a book'), art1213('kabir', 144 / 102, 'A boy playing the flute')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.2.14 mockups. Pages that open with the mistake card (2, 4, 6, 7, 9) show their picture with the
  // takeaway. The recap uses the girl from the Lesson Complete mockup; the Lesson Complete screen reuses 1.2.8's clipboard.
  '1-2-14': {
    pages: {
      PAGE001: { art: art1214('girl', 154 / 195, 'A girl holding a book, with one finger raised') },
      PAGE002: { art: art1214('guide', 354 / 130, 'A tour guide showing children the mountains') },
      PAGE003: { art: art1214('girls', 300 / 90, 'Two girls chatting') },
      PAGE004: { art: art1214('puddle', 355 / 122, 'Three children splashing in a puddle') },
      PAGE005: { art: art1214('friends', 340 / 116, 'Three friends with their arms round each other') },
      PAGE006: { art: art1214('scissors', 352 / 124, 'A pair of scissors, a card with a heart and a bottle of glue') },
      PAGE007: { art: art1214('bananas', 356 / 140, 'A fruit stall with bananas and a sign saying Fresh bananas for sale!') },
      PAGE008: { art: art1214('cars', 354 / 78, 'Three cars parked outside a school') },
      PAGE009: { art: art1214('taj', 380 / 126, 'A boy pointing at the Taj Mahal') },
      PAGE010: { art: art1214('winkgirl', 166 / 202, 'A winking girl holding a book with a tick on it') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
};

/** Lesson 1.2.14 artwork, cut from its mockups (`assets/lessons/1-2-14`). */
function art1214(name: Art1214, aspect: number, label: string): LessonArt {
  return { source: ART_1214[name], aspect, label };
}

/** Lesson 1.2.13 artwork, cut from its mockups (`assets/lessons/1-2-13`). */
function art1213(name: Art1213, aspect: number, label: string): LessonArt {
  return { source: ART_1213[name], aspect, label };
}

/** Lesson 1.2.12 artwork, cut from its mockups (`assets/lessons/1-2-12`). */
function art1212(name: Art1212, aspect: number, label: string): LessonArt {
  return { source: ART_1212[name], aspect, label };
}

/** Lesson 1.2.11 artwork, cut from its mockups (`assets/lessons/1-2-11`). */
function art1211(name: Art1211, aspect: number, label: string): LessonArt {
  return { source: ART_1211[name], aspect, label };
}

/** Lesson 1.2.10 artwork, cut from its mockups (`assets/lessons/1-2-10`). */
function art1210(name: Art1210, aspect: number, label: string): LessonArt {
  return { source: ART_1210[name], aspect, label };
}

/** Lesson 1.2.9 artwork, cut from its mockups (`assets/lessons/1-2-9`). */
function art129(name: Art129, aspect: number, label: string): LessonArt {
  return { source: ART_129[name], aspect, label };
}

/** Lesson 1.2.8 artwork, cut from its mockups (`assets/lessons/1-2-8`). */
function art128(name: Art128, aspect: number, label: string): LessonArt {
  return { source: ART_128[name], aspect, label };
}

/** Lesson 1.2.7 artwork, cut from its mockups (`assets/lessons/1-2-7`). */
function art127(name: Art127, aspect: number, label: string): LessonArt {
  return { source: ART_127[name], aspect, label };
}

/** Lesson 1.2.6 artwork, cut from its mockups (`assets/lessons/1-2-6`). */
function art126(name: Art126, aspect: number, label: string): LessonArt {
  return { source: ART_126[name], aspect, label };
}

/** Lesson 1.2.5 artwork, cut from its mockups (`assets/lessons/1-2-5`). */
function art125(name: Art125, aspect: number, label: string): LessonArt {
  return { source: ART_125[name], aspect, label };
}

/** Lesson 1.2.4 artwork, cut from its mockups (`assets/lessons/1-2-4`). */
function art124(name: Art124, aspect: number, label: string): LessonArt {
  return { source: ART_124[name], aspect, label };
}

/** Lesson 1.2.3 artwork, cut from its mockups (`assets/lessons/1-2-3`). */
function art123(name: Art123, aspect: number, label: string): LessonArt {
  return { source: ART_123[name], aspect, label };
}

/** Lesson 1.2.2 artwork, cut from its mockups (`assets/lessons/1-2-2`). */
function art122(name: Art122, aspect: number, label: string): LessonArt {
  return { source: ART_122[name], aspect, label };
}

/** Lesson 1.2.1 artwork, cut from its mockups (`assets/lessons/1-2-1`). */
function art121(name: Art121, aspect: number, label: string): LessonArt {
  return { source: ART_121[name], aspect, label };
}

/** Lesson 1.1.7 artwork, cut from its mockups (`assets/lessons/1-1-7`). */
function art117(name: Art117, aspect: number, label: string): LessonArt {
  return { source: ART_117[name], aspect, label };
}

/** Lesson 1.1.6 artwork, cut from its mockups (`assets/lessons/1-1-6`). */
function art116(name: Art116, aspect: number, label: string): LessonArt {
  return { source: ART_116[name], aspect, label };
}

/** Lesson 1.1.5 artwork, cut from its mockups (`assets/lessons/1-1-5`). */
function art115(name: Art115, aspect: number, label: string): LessonArt {
  return { source: ART_115[name], aspect, label };
}

/** Lesson 1.1.3 artwork, cut from its mockups (`assets/lessons/1-1-3`); later lessons reuse it too. */
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
  'lexical verbs': 'run-fast',
  particles: 'star-four-points-outline',
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
