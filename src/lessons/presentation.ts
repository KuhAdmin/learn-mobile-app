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

const ART_131 = {
  kiran: require('../../assets/lessons/1-3-1/kiran.webp'),
  parcel: require('../../assets/lessons/1-3-1/parcel.webp'),
  antecedents: require('../../assets/lessons/1-3-1/antecedents.webp'),
  umbrella: require('../../assets/lessons/1-3-1/umbrella.webp'),
  ishita: require('../../assets/lessons/1-3-1/ishita.webp'),
  pencil: require('../../assets/lessons/1-3-1/pencil.webp'),
} satisfies Record<string, ImageSource>;
type Art131 = keyof typeof ART_131;

const ART_132 = {
  crowd: require('../../assets/lessons/1-3-2/crowd.webp'),
  persons: require('../../assets/lessons/1-3-2/persons.webp'),
  train: require('../../assets/lessons/1-3-2/train.webp'),
  painter: require('../../assets/lessons/1-3-2/painter.webp'),
  coach: require('../../assets/lessons/1-3-2/coach.webp'),
  ferry: require('../../assets/lessons/1-3-2/ferry.webp'),
  pushing: require('../../assets/lessons/1-3-2/pushing.webp'),
  bumped: require('../../assets/lessons/1-3-2/bumped.webp'),
  walkers: require('../../assets/lessons/1-3-2/walkers.webp'),
  sofa: require('../../assets/lessons/1-3-2/sofa.webp'),
  nani: require('../../assets/lessons/1-3-2/nani.webp'),
  tulips: require('../../assets/lessons/1-3-2/tulips.webp'),
  librarian: require('../../assets/lessons/1-3-2/librarian.webp'),
  trophy: require('../../assets/lessons/1-3-2/trophy.webp'),
  clipboard: require('../../assets/lessons/1-3-2/clipboard.webp'),
} satisfies Record<string, ImageSource>;
type Art132 = keyof typeof ART_132;

const ART_133 = {
  towels: require('../../assets/lessons/1-3-3/towels.webp'),
  owners: require('../../assets/lessons/1-3-3/owners.webp'),
  easels: require('../../assets/lessons/1-3-3/easels.webp'),
  whose: require('../../assets/lessons/1-3-3/whose.webp'),
  nosign: require('../../assets/lessons/1-3-3/nosign.webp'),
  pizza: require('../../assets/lessons/1-3-3/pizza.webp'),
  bees: require('../../assets/lessons/1-3-3/bees.webp'),
} satisfies Record<string, ImageSource>;
type Art133 = keyof typeof ART_133;

const ART_134 = {
  kitchen: require('../../assets/lessons/1-3-4/kitchen.webp'),
  pointer: require('../../assets/lessons/1-3-4/pointer.webp'),
  folder: require('../../assets/lessons/1-3-4/folder.webp'),
  bags: require('../../assets/lessons/1-3-4/bags.webp'),
  yellow: require('../../assets/lessons/1-3-4/yellow.webp'),
  pink: require('../../assets/lessons/1-3-4/pink.webp'),
  raj: require('../../assets/lessons/1-3-4/raj.webp'),
  meera: require('../../assets/lessons/1-3-4/meera.webp'),
  tortoise: require('../../assets/lessons/1-3-4/tortoise.webp'),
} satisfies Record<string, ImageSource>;
type Art134 = keyof typeof ART_134;

const ART_135 = {
  mirror: require('../../assets/lessons/1-3-5/mirror.webp'),
  kitten: require('../../assets/lessons/1-3-5/kitten.webp'),
  family: require('../../assets/lessons/1-3-5/family.webp'),
  blamed: require('../../assets/lessons/1-3-5/blamed.webp'),
  blamedself: require('../../assets/lessons/1-3-5/blamedself.webp'),
  party: require('../../assets/lessons/1-3-5/party.webp'),
  shed: require('../../assets/lessons/1-3-5/shed.webp'),
} satisfies Record<string, ImageSource>;
type Art135 = keyof typeof ART_135;

const ART_136 = {
  chef: require('../../assets/lessons/1-3-6/chef.webp'),
  mayor: require('../../assets/lessons/1-3-6/mayor.webp'),
  hut: require('../../assets/lessons/1-3-6/hut.webp'),
  baker: require('../../assets/lessons/1-3-6/baker.webp'),
  bike: require('../../assets/lessons/1-3-6/bike.webp'),
  guitar: require('../../assets/lessons/1-3-6/guitar.webp'),
  teacher: require('../../assets/lessons/1-3-6/teacher.webp'),
  singers: require('../../assets/lessons/1-3-6/singers.webp'),
} satisfies Record<string, ImageSource>;
type Art136 = keyof typeof ART_136;

const ART_137 = {
  dish: require('../../assets/lessons/1-3-7/dish.webp'),
  distance: require('../../assets/lessons/1-3-7/distance.webp'),
  park: require('../../assets/lessons/1-3-7/park.webp'),
  keys: require('../../assets/lessons/1-3-7/keys.webp'),
  hawk: require('../../assets/lessons/1-3-7/hawk.webp'),
  mangoes: require('../../assets/lessons/1-3-7/mangoes.webp'),
  box: require('../../assets/lessons/1-3-7/box.webp'),
  boxnoun: require('../../assets/lessons/1-3-7/boxnoun.webp'),
  boys: require('../../assets/lessons/1-3-7/boys.webp'),
} satisfies Record<string, ImageSource>;
type Art137 = keyof typeof ART_137;

const ART_138 = {
  gate: require('../../assets/lessons/1-3-8/gate.webp'),
  goal: require('../../assets/lessons/1-3-8/goal.webp'),
  committee: require('../../assets/lessons/1-3-8/committee.webp'),
  whose: require('../../assets/lessons/1-3-8/whose.webp'),
  basket: require('../../assets/lessons/1-3-8/basket.webp'),
  drinks: require('../../assets/lessons/1-3-8/drinks.webp'),
  paintings: require('../../assets/lessons/1-3-8/paintings.webp'),
} satisfies Record<string, ImageSource>;
type Art138 = keyof typeof ART_138;

const ART_139 = {
  bee: require('../../assets/lessons/1-3-9/bee.webp'),
  dentist: require('../../assets/lessons/1-3-9/dentist.webp'),
  singer: require('../../assets/lessons/1-3-9/singer.webp'),
  bus: require('../../assets/lessons/1-3-9/bus.webp'),
  pie: require('../../assets/lessons/1-3-9/pie.webp'),
  dog: require('../../assets/lessons/1-3-9/dog.webp'),
  tree: require('../../assets/lessons/1-3-9/tree.webp'),
  asker: require('../../assets/lessons/1-3-9/asker.webp'),
  artist: require('../../assets/lessons/1-3-9/artist.webp'),
} satisfies Record<string, ImageSource>;
type Art139 = keyof typeof ART_139;

const ART_1310 = {
  wonder: require('../../assets/lessons/1-3-10/wonder.webp'),
  kinds: require('../../assets/lessons/1-3-10/kinds.webp'),
  juice: require('../../assets/lessons/1-3-10/juice.webp'),
  drawer: require('../../assets/lessons/1-3-10/drawer.webp'),
  nothing: require('../../assets/lessons/1-3-10/nothing.webp'),
  cheer: require('../../assets/lessons/1-3-10/cheer.webp'),
  apples: require('../../assets/lessons/1-3-10/apples.webp'),
} satisfies Record<string, ImageSource>;
type Art1310 = keyof typeof ART_1310;

const ART_1311 = {
  cousins: require('../../assets/lessons/1-3-11/cousins.webp'),
  chutney: require('../../assets/lessons/1-3-11/chutney.webp'),
  pens: require('../../assets/lessons/1-3-11/pens.webp'),
  raincoats: require('../../assets/lessons/1-3-11/raincoats.webp'),
  parcels: require('../../assets/lessons/1-3-11/parcels.webp'),
  samosa: require('../../assets/lessons/1-3-11/samosa.webp'),
  thumbs: require('../../assets/lessons/1-3-11/thumbs.webp'),
  roads: require('../../assets/lessons/1-3-11/roads.webp'),
} satisfies Record<string, ImageSource>;
type Art1311 = keyof typeof ART_1311;

const ART_1312 = {
  wave: require('../../assets/lessons/1-3-12/wave.webp'),
  puppies: require('../../assets/lessons/1-3-12/puppies.webp'),
  team: require('../../assets/lessons/1-3-12/team.webp'),
  twins: require('../../assets/lessons/1-3-12/twins.webp'),
  blameother: require('../../assets/lessons/1-3-12/blameother.webp'),
  blameself: require('../../assets/lessons/1-3-12/blameself.webp'),
} satisfies Record<string, ImageSource>;
type Art1312 = keyof typeof ART_1312;

const ART_1313 = {
  bakery: require('../../assets/lessons/1-3-13/bakery.webp'),
  watch: require('../../assets/lessons/1-3-13/watch.webp'),
  sandals: require('../../assets/lessons/1-3-13/sandals.webp'),
  relatives: require('../../assets/lessons/1-3-13/relatives.webp'),
  meena: require('../../assets/lessons/1-3-13/meena.webp'),
  door: require('../../assets/lessons/1-3-13/door.webp'),
  lunch: require('../../assets/lessons/1-3-13/lunch.webp'),
  committee: require('../../assets/lessons/1-3-13/committee.webp'),
  team: require('../../assets/lessons/1-3-13/team.webp'),
} satisfies Record<string, ImageSource>;
type Art1313 = keyof typeof ART_1313;

const ART_1314 = {
  boys: require('../../assets/lessons/1-3-14/boys.webp'),
  cooks: require('../../assets/lessons/1-3-14/cooks.webp'),
  chase: require('../../assets/lessons/1-3-14/chase.webp'),
  news: require('../../assets/lessons/1-3-14/news.webp'),
  weather: require('../../assets/lessons/1-3-14/weather.webp'),
  museum: require('../../assets/lessons/1-3-14/museum.webp'),
} satisfies Record<string, ImageSource>;
type Art1314 = keyof typeof ART_1314;

const ART_1315 = {
  magnifier: require('../../assets/lessons/1-3-15/magnifier.webp'),
  stadium: require('../../assets/lessons/1-3-15/stadium.webp'),
  whisper: require('../../assets/lessons/1-3-15/whisper.webp'),
  parrot: require('../../assets/lessons/1-3-15/parrot.webp'),
  boats: require('../../assets/lessons/1-3-15/boats.webp'),
  books: require('../../assets/lessons/1-3-15/books.webp'),
  door: require('../../assets/lessons/1-3-15/door.webp'),
  sitar: require('../../assets/lessons/1-3-15/sitar.webp'),
} satisfies Record<string, ImageSource>;
type Art1315 = keyof typeof ART_1315;

const ART_141 = {
  squirrel: require('../../assets/lessons/1-4-1/squirrel.webp'),
  questions: require('../../assets/lessons/1-4-1/questions.webp'),
  doorstep: require('../../assets/lessons/1-4-1/doorstep.webp'),
  pencils: require('../../assets/lessons/1-4-1/pencils.webp'),
  pencil: require('../../assets/lessons/1-4-1/pencil.webp'),
  gate: require('../../assets/lessons/1-4-1/gate.webp'),
  tree: require('../../assets/lessons/1-4-1/tree.webp'),
} satisfies Record<string, ImageSource>;
type Art141 = keyof typeof ART_141;

const ART_142 = {
  rainbow: require('../../assets/lessons/1-4-2/rainbow.webp'),
  kitten: require('../../assets/lessons/1-4-2/kitten.webp'),
  mango: require('../../assets/lessons/1-4-2/mango.webp'),
  pilot: require('../../assets/lessons/1-4-2/pilot.webp'),
  tulsi: require('../../assets/lessons/1-4-2/tulsi.webp'),
} satisfies Record<string, ImageSource>;
type Art142 = keyof typeof ART_142;

const ART_143 = {
  oranges: require('../../assets/lessons/1-4-3/oranges.webp'),
  earring: require('../../assets/lessons/1-4-3/earring.webp'),
  lizard: require('../../assets/lessons/1-4-3/lizard.webp'),
  ferry: require('../../assets/lessons/1-4-3/ferry.webp'),
  shopkeeper: require('../../assets/lessons/1-4-3/shopkeeper.webp'),
  uniform: require('../../assets/lessons/1-4-3/uniform.webp'),
  oneway: require('../../assets/lessons/1-4-3/oneway.webp'),
  xray: require('../../assets/lessons/1-4-3/xray.webp'),
  bicycle: require('../../assets/lessons/1-4-3/bicycle.webp'),
  apple: require('../../assets/lessons/1-4-3/apple.webp'),
} satisfies Record<string, ImageSource>;
type Art143 = keyof typeof ART_143;

const ART_144 = {
  plant: require('../../assets/lessons/1-4-4/plant.webp'),
  notebook: require('../../assets/lessons/1-4-4/notebook.webp'),
  fan: require('../../assets/lessons/1-4-4/fan.webp'),
  moon: require('../../assets/lessons/1-4-4/moon.webp'),
  bag: require('../../assets/lessons/1-4-4/bag.webp'),
  biscuits: require('../../assets/lessons/1-4-4/biscuits.webp'),
  water: require('../../assets/lessons/1-4-4/water.webp'),
} satisfies Record<string, ImageSource>;
type Art144 = keyof typeof ART_144;

const ART_145 = {
  puppets: require('../../assets/lessons/1-4-5/puppets.webp'),
  mangoes: require('../../assets/lessons/1-4-5/mangoes.webp'),
  honey: require('../../assets/lessons/1-4-5/honey.webp'),
  travel: require('../../assets/lessons/1-4-5/travel.webp'),
  school: require('../../assets/lessons/1-4-5/school.webp'),
} satisfies Record<string, ImageSource>;
type Art145 = keyof typeof ART_145;

const ART_146 = {
  bees: require('../../assets/lessons/1-4-6/bees.webp'),
  night: require('../../assets/lessons/1-4-6/night.webp'),
  temple: require('../../assets/lessons/1-4-6/temple.webp'),
  field: require('../../assets/lessons/1-4-6/field.webp'),
  burnt: require('../../assets/lessons/1-4-6/burnt.webp'),
  koala: require('../../assets/lessons/1-4-6/koala.webp'),
} satisfies Record<string, ImageSource>;
type Art146 = keyof typeof ART_146;

const ART_147 = {
  umbrella: require('../../assets/lessons/1-4-7/umbrella.webp'),
  scooter: require('../../assets/lessons/1-4-7/scooter.webp'),
  box: require('../../assets/lessons/1-4-7/box.webp'),
  guavas: require('../../assets/lessons/1-4-7/guavas.webp'),
  newspaper: require('../../assets/lessons/1-4-7/newspaper.webp'),
  paper: require('../../assets/lessons/1-4-7/paper.webp'),
} satisfies Record<string, ImageSource>;
type Art147 = keyof typeof ART_147;

const ART_148 = {
  ganga: require('../../assets/lessons/1-4-8/ganga.webp'),
  everest: require('../../assets/lessons/1-4-8/everest.webp'),
  water: require('../../assets/lessons/1-4-8/water.webp'),
  islands: require('../../assets/lessons/1-4-8/islands.webp'),
  countries: require('../../assets/lessons/1-4-8/countries.webp'),
  fort: require('../../assets/lessons/1-4-8/fort.webp'),
} satisfies Record<string, ImageSource>;
type Art148 = keyof typeof ART_148;

const ART_149 = {
  jackets: require('../../assets/lessons/1-4-9/jackets.webp'),
  marbles: require('../../assets/lessons/1-4-9/marbles.webp'),
  milk: require('../../assets/lessons/1-4-9/milk.webp'),
  time: require('../../assets/lessons/1-4-9/time.webp'),
  beach: require('../../assets/lessons/1-4-9/beach.webp'),
  mangoes: require('../../assets/lessons/1-4-9/mangoes.webp'),
  school: require('../../assets/lessons/1-4-9/school.webp'),
} satisfies Record<string, ImageSource>;
type Art149 = keyof typeof ART_149;

const ART_1410 = {
  kite: require('../../assets/lessons/1-4-10/kite.webp'),
  umbrella: require('../../assets/lessons/1-4-10/umbrella.webp'),
  friends: require('../../assets/lessons/1-4-10/friends.webp'),
  twins: require('../../assets/lessons/1-4-10/twins.webp'),
  shoes: require('../../assets/lessons/1-4-10/shoes.webp'),
} satisfies Record<string, ImageSource>;
type Art1410 = keyof typeof ART_1410;

const ART_1411 = {
  tickets: require('../../assets/lessons/1-4-11/tickets.webp'),
  cousins: require('../../assets/lessons/1-4-11/cousins.webp'),
  petrol: require('../../assets/lessons/1-4-11/petrol.webp'),
  afew: require('../../assets/lessons/1-4-11/afew.webp'),
  few: require('../../assets/lessons/1-4-11/few.webp'),
  rice: require('../../assets/lessons/1-4-11/rice.webp'),
  cloud: require('../../assets/lessons/1-4-11/cloud.webp'),
  homework: require('../../assets/lessons/1-4-11/homework.webp'),
} satisfies Record<string, ImageSource>;
type Art1411 = keyof typeof ART_1411;

const ART_1413 = {
  kittens: require('../../assets/lessons/1-4-13/kittens.webp'),
  balcony: require('../../assets/lessons/1-4-13/balcony.webp'),
  saplings: require('../../assets/lessons/1-4-13/saplings.webp'),
  hall: require('../../assets/lessons/1-4-13/hall.webp'),
  school: require('../../assets/lessons/1-4-13/school.webp'),
  book: require('../../assets/lessons/1-4-13/book.webp'),
  sets: require('../../assets/lessons/1-4-13/sets.webp'),
} satisfies Record<string, ImageSource>;
type Art1413 = keyof typeof ART_1413;

const ART_1414 = {
  bus: require('../../assets/lessons/1-4-14/bus.webp'),
  kurta: require('../../assets/lessons/1-4-14/kurta.webp'),
  thinker: require('../../assets/lessons/1-4-14/thinker.webp'),
} satisfies Record<string, ImageSource>;
type Art1414 = keyof typeof ART_1414;

const ART_1415 = {
  samosa: require('../../assets/lessons/1-4-15/samosa.webp'),
  others: require('../../assets/lessons/1-4-15/others.webp'),
  queue: require('../../assets/lessons/1-4-15/queue.webp'),
  hilltop: require('../../assets/lessons/1-4-15/hilltop.webp'),
  teams: require('../../assets/lessons/1-4-15/teams.webp'),
  museum: require('../../assets/lessons/1-4-15/museum.webp'),
  whole: require('../../assets/lessons/1-4-15/whole.webp'),
  all: require('../../assets/lessons/1-4-15/all.webp'),
} satisfies Record<string, ImageSource>;
type Art1415 = keyof typeof ART_1415;

const ART_1416 = {
  tabla: require('../../assets/lessons/1-4-16/tabla.webp'),
  slots: require('../../assets/lessons/1-4-16/slots.webp'),
  kittens: require('../../assets/lessons/1-4-16/kittens.webp'),
  mangoes: require('../../assets/lessons/1-4-16/mangoes.webp'),
  cake: require('../../assets/lessons/1-4-16/cake.webp'),
  puzzle: require('../../assets/lessons/1-4-16/puzzle.webp'),
} satisfies Record<string, ImageSource>;
type Art1416 = keyof typeof ART_1416;

const ART_151 = {
  kitten: require('../../assets/lessons/1-5-1/kitten.webp'),
  words: require('../../assets/lessons/1-5-1/words.webp'),
  rasam: require('../../assets/lessons/1-5-1/rasam.webp'),
  grandpa: require('../../assets/lessons/1-5-1/grandpa.webp'),
  owls: require('../../assets/lessons/1-5-1/owls.webp'),
} satisfies Record<string, ImageSource>;
type Art151 = keyof typeof ART_151;

const ART_152 = {
  parrot: require('../../assets/lessons/1-5-2/parrot.webp'),
  opinion: require('../../assets/lessons/1-5-2/opinion.webp'),
  fact: require('../../assets/lessons/1-5-2/fact.webp'),
  stream: require('../../assets/lessons/1-5-2/stream.webp'),
  biryani: require('../../assets/lessons/1-5-2/biryani.webp'),
} satisfies Record<string, ImageSource>;
type Art152 = keyof typeof ART_152;

const ART_153 = {
  kites: require('../../assets/lessons/1-5-3/kites.webp'),
  guavas: require('../../assets/lessons/1-5-3/guavas.webp'),
  ripe: require('../../assets/lessons/1-5-3/ripe.webp'),
  several: require('../../assets/lessons/1-5-3/several.webp'),
  tiffin: require('../../assets/lessons/1-5-3/tiffin.webp'),
} satisfies Record<string, ImageSource>;
type Art153 = keyof typeof ART_153;

const ART_159 = {
  fair: require('../../assets/lessons/1-5-9/fair.webp'),
  cooking: require('../../assets/lessons/1-5-9/cooking.webp'),
  wedding: require('../../assets/lessons/1-5-9/wedding.webp'),
  shawls: require('../../assets/lessons/1-5-9/shawls.webp'),
  tea: require('../../assets/lessons/1-5-9/tea.webp'),
} satisfies Record<string, ImageSource>;
type Art159 = keyof typeof ART_159;

const ART_1510 = {
  author: require('../../assets/lessons/1-5-10/author.webp'),
  curly: require('../../assets/lessons/1-5-10/curly.webp'),
  tent: require('../../assets/lessons/1-5-10/tent.webp'),
  path: require('../../assets/lessons/1-5-10/path.webp'),
  girl: require('../../assets/lessons/1-5-10/girl.webp'),
  boy: require('../../assets/lessons/1-5-10/boy.webp'),
} satisfies Record<string, ImageSource>;
type Art1510 = keyof typeof ART_1510;

const ART_1511 = {
  stadium: require('../../assets/lessons/1-5-11/stadium.webp'),
  puppets: require('../../assets/lessons/1-5-11/puppets.webp'),
  audience: require('../../assets/lessons/1-5-11/audience.webp'),
  speech: require('../../assets/lessons/1-5-11/speech.webp'),
  sleepy: require('../../assets/lessons/1-5-11/sleepy.webp'),
  tree: require('../../assets/lessons/1-5-11/tree.webp'),
  peas: require('../../assets/lessons/1-5-11/peas.webp'),
} satisfies Record<string, ImageSource>;
type Art1511 = keyof typeof ART_1511;

const ART_1512 = {
  kitten: require('../../assets/lessons/1-5-12/kitten.webp'),
  beach: require('../../assets/lessons/1-5-12/beach.webp'),
  dal: require('../../assets/lessons/1-5-12/dal.webp'),
  baby: require('../../assets/lessons/1-5-12/baby.webp'),
  gate: require('../../assets/lessons/1-5-12/gate.webp'),
} satisfies Record<string, ImageSource>;
type Art1512 = keyof typeof ART_1512;

const ART_1513 = {
  dupatta: require('../../assets/lessons/1-5-13/dupatta.webp'),
  pebble: require('../../assets/lessons/1-5-13/pebble.webp'),
  car: require('../../assets/lessons/1-5-13/car.webp'),
  spicy: require('../../assets/lessons/1-5-13/spicy.webp'),
} satisfies Record<string, ImageSource>;
type Art1513 = keyof typeof ART_1513;

const ART_1514 = {
  thunder: require('../../assets/lessons/1-5-14/thunder.webp'),
  rose: require('../../assets/lessons/1-5-14/rose.webp'),
  chess: require('../../assets/lessons/1-5-14/chess.webp'),
  angry: require('../../assets/lessons/1-5-14/angry.webp'),
  vase: require('../../assets/lessons/1-5-14/vase.webp'),
  coins: require('../../assets/lessons/1-5-14/coins.webp'),
} satisfies Record<string, ImageSource>;
type Art1514 = keyof typeof ART_1514;

const ART_1515 = {
  kites: require('../../assets/lessons/1-5-15/kites.webp'),
  puppy: require('../../assets/lessons/1-5-15/puppy.webp'),
  kitten: require('../../assets/lessons/1-5-15/kitten.webp'),
  sun: require('../../assets/lessons/1-5-15/sun.webp'),
  star: require('../../assets/lessons/1-5-15/star.webp'),
  opposites: require('../../assets/lessons/1-5-15/opposites.webp'),
} satisfies Record<string, ImageSource>;
type Art1515 = keyof typeof ART_1515;

const ART_1516 = {
  writer: require('../../assets/lessons/1-5-16/writer.webp'),
  apples: require('../../assets/lessons/1-5-16/apples.webp'),
  boy: require('../../assets/lessons/1-5-16/boy.webp'),
  momos: require('../../assets/lessons/1-5-16/momos.webp'),
  cinema: require('../../assets/lessons/1-5-16/cinema.webp'),
  painting: require('../../assets/lessons/1-5-16/painting.webp'),
  bucket: require('../../assets/lessons/1-5-16/bucket.webp'),
  baby: require('../../assets/lessons/1-5-16/baby.webp'),
} satisfies Record<string, ImageSource>;
type Art1516 = keyof typeof ART_1516;

const ART_211 = {
  ferry: require('../../assets/lessons/2-1-1/ferry.webp'),
  kites: require('../../assets/lessons/2-1-1/kites.webp'),
  grandma: require('../../assets/lessons/2-1-1/grandma.webp'),
  firefighter: require('../../assets/lessons/2-1-1/firefighter.webp'),
  giggle: require('../../assets/lessons/2-1-1/giggle.webp'),
} satisfies Record<string, ImageSource>;
type Art211 = keyof typeof ART_211;

const ART_212 = {
  painting: require('../../assets/lessons/2-1-2/painting.webp'),
  chef: require('../../assets/lessons/2-1-2/chef.webp'),
  cousins: require('../../assets/lessons/2-1-2/cousins.webp'),
  helpers: require('../../assets/lessons/2-1-2/helpers.webp'),
  mangoes: require('../../assets/lessons/2-1-2/mangoes.webp'),
  homework: require('../../assets/lessons/2-1-2/homework.webp'),
  tortoise: require('../../assets/lessons/2-1-2/tortoise.webp'),
} satisfies Record<string, ImageSource>;
type Art212 = keyof typeof ART_212;

const ART_213 = {
  swing: require('../../assets/lessons/2-1-3/swing.webp'),
  goalkeeper: require('../../assets/lessons/2-1-3/goalkeeper.webp'),
  choir: require('../../assets/lessons/2-1-3/choir.webp'),
  honey: require('../../assets/lessons/2-1-3/honey.webp'),
  ghost: require('../../assets/lessons/2-1-3/ghost.webp'),
  orchestra: require('../../assets/lessons/2-1-3/orchestra.webp'),
} satisfies Record<string, ImageSource>;
type Art213 = keyof typeof ART_213;

const ART_214 = {
  teacher: require('../../assets/lessons/2-1-4/teacher.webp'),
  puppy: require('../../assets/lessons/2-1-4/puppy.webp'),
  idea: require('../../assets/lessons/2-1-4/idea.webp'),
  milk: require('../../assets/lessons/2-1-4/milk.webp'),
  taller: require('../../assets/lessons/2-1-4/taller.webp'),
  curry: require('../../assets/lessons/2-1-4/curry.webp'),
  dad: require('../../assets/lessons/2-1-4/dad.webp'),
} satisfies Record<string, ImageSource>;
type Art214 = keyof typeof ART_214;

const ART_215 = {
  kite: require('../../assets/lessons/2-1-5/kite.webp'),
  cat: require('../../assets/lessons/2-1-5/cat.webp'),
  coach: require('../../assets/lessons/2-1-5/coach.webp'),
  train: require('../../assets/lessons/2-1-5/train.webp'),
  hall: require('../../assets/lessons/2-1-5/hall.webp'),
  comic: require('../../assets/lessons/2-1-5/comic.webp'),
  room: require('../../assets/lessons/2-1-5/room.webp'),
} satisfies Record<string, ImageSource>;
type Art215 = keyof typeof ART_215;

const ART_216 = {
  swimmer: require('../../assets/lessons/2-1-6/swimmer.webp'),
  stones: require('../../assets/lessons/2-1-6/stones.webp'),
  clock: require('../../assets/lessons/2-1-6/clock.webp'),
  bus: require('../../assets/lessons/2-1-6/bus.webp'),
  choir: require('../../assets/lessons/2-1-6/choir.webp'),
  marigolds: require('../../assets/lessons/2-1-6/marigolds.webp'),
} satisfies Record<string, ImageSource>;
type Art216 = keyof typeof ART_216;

const ART_217 = {
  mural: require('../../assets/lessons/2-1-7/mural.webp'),
  bike: require('../../assets/lessons/2-1-7/bike.webp'),
  pune: require('../../assets/lessons/2-1-7/pune.webp'),
  lake: require('../../assets/lessons/2-1-7/lake.webp'),
  sings: require('../../assets/lessons/2-1-7/sings.webp'),
  choir: require('../../assets/lessons/2-1-7/choir.webp'),
} satisfies Record<string, ImageSource>;
type Art217 = keyof typeof ART_217;

const ART_218 = {
  french: require('../../assets/lessons/2-1-8/french.webp'),
  pencil: require('../../assets/lessons/2-1-8/pencil.webp'),
  tea: require('../../assets/lessons/2-1-8/tea.webp'),
  garden: require('../../assets/lessons/2-1-8/garden.webp'),
  lunch: require('../../assets/lessons/2-1-8/lunch.webp'),
  idea: require('../../assets/lessons/2-1-8/idea.webp'),
  grandpa: require('../../assets/lessons/2-1-8/grandpa.webp'),
  doctor: require('../../assets/lessons/2-1-8/doctor.webp'),
} satisfies Record<string, ImageSource>;
type Art218 = keyof typeof ART_218;

const ART_219 = {
  jogger: require('../../assets/lessons/2-1-9/jogger.webp'),
  board: require('../../assets/lessons/2-1-9/board.webp'),
  clocks: require('../../assets/lessons/2-1-9/clocks.webp'),
  racket: require('../../assets/lessons/2-1-9/racket.webp'),
  poems: require('../../assets/lessons/2-1-9/poems.webp'),
} satisfies Record<string, ImageSource>;
type Art219 = keyof typeof ART_219;

const ART_2110 = {
  fridge: require('../../assets/lessons/2-1-10/fridge.webp'),
  vase: require('../../assets/lessons/2-1-10/vase.webp'),
  ferry: require('../../assets/lessons/2-1-10/ferry.webp'),
  puppy: require('../../assets/lessons/2-1-10/puppy.webp'),
  wonder: require('../../assets/lessons/2-1-10/wonder.webp'),
  shelf: require('../../assets/lessons/2-1-10/shelf.webp'),
} satisfies Record<string, ImageSource>;
type Art2110 = keyof typeof ART_2110;

const ART_2111 = {
  guitar: require('../../assets/lessons/2-1-11/guitar.webp'),
  storm: require('../../assets/lessons/2-1-11/storm.webp'),
  vet: require('../../assets/lessons/2-1-11/vet.webp'),
  packing: require('../../assets/lessons/2-1-11/packing.webp'),
  quiet: require('../../assets/lessons/2-1-11/quiet.webp'),
  teacher: require('../../assets/lessons/2-1-11/teacher.webp'),
  fireworks: require('../../assets/lessons/2-1-11/fireworks.webp'),
  drizzle: require('../../assets/lessons/2-1-11/drizzle.webp'),
} satisfies Record<string, ImageSource>;
type Art2111 = keyof typeof ART_2111;

const ART_2112 = {
  puzzle: require('../../assets/lessons/2-1-12/puzzle.webp'),
  stars: require('../../assets/lessons/2-1-12/stars.webp'),
  dictionary: require('../../assets/lessons/2-1-12/dictionary.webp'),
  fan: require('../../assets/lessons/2-1-12/fan.webp'),
  radio: require('../../assets/lessons/2-1-12/radio.webp'),
} satisfies Record<string, ImageSource>;
type Art2112 = keyof typeof ART_2112;

const ART_2113 = {
  umbrella: require('../../assets/lessons/2-1-13/umbrella.webp'),
  borrow: require('../../assets/lessons/2-1-13/borrow.webp'),
  lend: require('../../assets/lessons/2-1-13/lend.webp'),
  bring: require('../../assets/lessons/2-1-13/bring.webp'),
  take: require('../../assets/lessons/2-1-13/take.webp'),
  tell: require('../../assets/lessons/2-1-13/tell.webp'),
  said: require('../../assets/lessons/2-1-13/said.webp'),
  makedo: require('../../assets/lessons/2-1-13/makedo.webp'),
  thunder: require('../../assets/lessons/2-1-13/thunder.webp'),
  rainbow: require('../../assets/lessons/2-1-13/rainbow.webp'),
  cat: require('../../assets/lessons/2-1-13/cat.webp'),
  plates: require('../../assets/lessons/2-1-13/plates.webp'),
} satisfies Record<string, ImageSource>;
type Art2113 = keyof typeof ART_2113;

const ART_2114 = {
  magnifier: require('../../assets/lessons/2-1-14/magnifier.webp'),
  tall: require('../../assets/lessons/2-1-14/tall.webp'),
  guavas: require('../../assets/lessons/2-1-14/guavas.webp'),
  bookfair: require('../../assets/lessons/2-1-14/bookfair.webp'),
  riddle: require('../../assets/lessons/2-1-14/riddle.webp'),
  laptop: require('../../assets/lessons/2-1-14/laptop.webp'),
  trip: require('../../assets/lessons/2-1-14/trip.webp'),
  tv: require('../../assets/lessons/2-1-14/tv.webp'),
  reader: require('../../assets/lessons/2-1-14/reader.webp'),
} satisfies Record<string, ImageSource>;
type Art2114 = keyof typeof ART_2114;

const ART_221 = {
  baby: require('../../assets/lessons/2-2-1/baby.webp'),
  rain: require('../../assets/lessons/2-2-1/rain.webp'),
  clock: require('../../assets/lessons/2-2-1/clock.webp'),
  meena: require('../../assets/lessons/2-2-1/meena.webp'),
  sunday: require('../../assets/lessons/2-2-1/sunday.webp'),
  map: require('../../assets/lessons/2-2-1/map.webp'),
} satisfies Record<string, ImageSource>;
type Art221 = keyof typeof ART_221;

const ART_222 = {
  nurse: require('../../assets/lessons/2-2-2/nurse.webp'),
  drawings: require('../../assets/lessons/2-2-2/drawings.webp'),
  feelings: require('../../assets/lessons/2-2-2/feelings.webp'),
  writer: require('../../assets/lessons/2-2-2/writer.webp'),
} satisfies Record<string, ImageSource>;
type Art222 = keyof typeof ART_222;

const ART_223 = {
  plumber: require('../../assets/lessons/2-2-3/plumber.webp'),
  cousins: require('../../assets/lessons/2-2-3/cousins.webp'),
  seller: require('../../assets/lessons/2-2-3/seller.webp'),
  bus: require('../../assets/lessons/2-2-3/bus.webp'),
  job: require('../../assets/lessons/2-2-3/job.webp'),
} satisfies Record<string, ImageSource>;
type Art223 = keyof typeof ART_223;

const ART_224 = {
  twins: require('../../assets/lessons/2-2-4/twins.webp'),
  home: require('../../assets/lessons/2-2-4/home.webp'),
  back: require('../../assets/lessons/2-2-4/back.webp'),
  lift: require('../../assets/lessons/2-2-4/lift.webp'),
  keys: require('../../assets/lessons/2-2-4/keys.webp'),
  balloons: require('../../assets/lessons/2-2-4/balloons.webp'),
  boxes: require('../../assets/lessons/2-2-4/boxes.webp'),
  bus: require('../../assets/lessons/2-2-4/bus.webp'),
  kite: require('../../assets/lessons/2-2-4/kite.webp'),
} satisfies Record<string, ImageSource>;
type Art224 = keyof typeof ART_224;

const ART_225 = {
  grandma: require('../../assets/lessons/2-2-5/grandma.webp'),
  restaurant: require('../../assets/lessons/2-2-5/restaurant.webp'),
  dog: require('../../assets/lessons/2-2-5/dog.webp'),
  lunchbox: require('../../assets/lessons/2-2-5/lunchbox.webp'),
  library: require('../../assets/lessons/2-2-5/library.webp'),
  dolphins: require('../../assets/lessons/2-2-5/dolphins.webp'),
  newspaper: require('../../assets/lessons/2-2-5/newspaper.webp'),
  easel: require('../../assets/lessons/2-2-5/easel.webp'),
} satisfies Record<string, ImageSource>;
type Art225 = keyof typeof ART_225;

const ART_226 = {
  tea: require('../../assets/lessons/2-2-6/tea.webp'),
  puzzle: require('../../assets/lessons/2-2-6/puzzle.webp'),
  fan: require('../../assets/lessons/2-2-6/fan.webp'),
  very: require('../../assets/lessons/2-2-6/very.webp'),
  too: require('../../assets/lessons/2-2-6/too.webp'),
  river: require('../../assets/lessons/2-2-6/river.webp'),
  rope: require('../../assets/lessons/2-2-6/rope.webp'),
  sunset: require('../../assets/lessons/2-2-6/sunset.webp'),
} satisfies Record<string, ImageSource>;
type Art226 = keyof typeof ART_226;

const ART_227 = {
  rain: require('../../assets/lessons/2-2-7/rain.webp'),
  cricket: require('../../assets/lessons/2-2-7/cricket.webp'),
  puppet: require('../../assets/lessons/2-2-7/puppet.webp'),
  chemist: require('../../assets/lessons/2-2-7/chemist.webp'),
  raju: require('../../assets/lessons/2-2-7/raju.webp'),
  bakery: require('../../assets/lessons/2-2-7/bakery.webp'),
} satisfies Record<string, ImageSource>;
type Art227 = keyof typeof ART_227;

const ART_228 = {
  ferry: require('../../assets/lessons/2-2-8/ferry.webp'),
  principal: require('../../assets/lessons/2-2-8/principal.webp'),
  bridge: require('../../assets/lessons/2-2-8/bridge.webp'),
  asleep: require('../../assets/lessons/2-2-8/asleep.webp'),
  grandpa: require('../../assets/lessons/2-2-8/grandpa.webp'),
  teacher: require('../../assets/lessons/2-2-8/teacher.webp'),
  shop: require('../../assets/lessons/2-2-8/shop.webp'),
  chennai: require('../../assets/lessons/2-2-8/chennai.webp'),
} satisfies Record<string, ImageSource>;
type Art228 = keyof typeof ART_228;

const ART_229 = {
  flood: require('../../assets/lessons/2-2-9/flood.webp'),
  popcorn: require('../../assets/lessons/2-2-9/popcorn.webp'),
  ferry: require('../../assets/lessons/2-2-9/ferry.webp'),
  savings: require('../../assets/lessons/2-2-9/savings.webp'),
  whisper: require('../../assets/lessons/2-2-9/whisper.webp'),
  purpose: require('../../assets/lessons/2-2-9/purpose.webp'),
  accident: require('../../assets/lessons/2-2-9/accident.webp'),
  goalie: require('../../assets/lessons/2-2-9/goalie.webp'),
  deleted: require('../../assets/lessons/2-2-9/deleted.webp'),
} satisfies Record<string, ImageSource>;
type Art229 = keyof typeof ART_229;

const ART_2210 = {
  wonder: require('../../assets/lessons/2-2-10/wonder.webp'),
  concert: require('../../assets/lessons/2-2-10/concert.webp'),
  glasses: require('../../assets/lessons/2-2-10/glasses.webp'),
  pointing: require('../../assets/lessons/2-2-10/pointing.webp'),
  calendar: require('../../assets/lessons/2-2-10/calendar.webp'),
  hourglass: require('../../assets/lessons/2-2-10/hourglass.webp'),
} satisfies Record<string, ImageSource>;
type Art2210 = keyof typeof ART_2210;

const ART_2211 = {
  park: require('../../assets/lessons/2-2-11/park.webp'),
  kochi: require('../../assets/lessons/2-2-11/kochi.webp'),
  puppy: require('../../assets/lessons/2-2-11/puppy.webp'),
  lights: require('../../assets/lessons/2-2-11/lights.webp'),
  asking: require('../../assets/lessons/2-2-11/asking.webp'),
  village: require('../../assets/lessons/2-2-11/village.webp'),
  watchshop: require('../../assets/lessons/2-2-11/watchshop.webp'),
  tin: require('../../assets/lessons/2-2-11/tin.webp'),
  sunday: require('../../assets/lessons/2-2-11/sunday.webp'),
} satisfies Record<string, ImageSource>;
type Art2211 = keyof typeof ART_2211;

const ART_2212 = {
  teacher: require('../../assets/lessons/2-2-12/teacher.webp'),
  grandma: require('../../assets/lessons/2-2-12/grandma.webp'),
  mangoes: require('../../assets/lessons/2-2-12/mangoes.webp'),
  onlymina: require('../../assets/lessons/2-2-12/onlymina.webp'),
  onlycake: require('../../assets/lessons/2-2-12/onlycake.webp'),
  clock: require('../../assets/lessons/2-2-12/clock.webp'),
  tabla: require('../../assets/lessons/2-2-12/tabla.webp'),
  karan: require('../../assets/lessons/2-2-12/karan.webp'),
  sister: require('../../assets/lessons/2-2-12/sister.webp'),
} satisfies Record<string, ImageSource>;
type Art2212 = keyof typeof ART_2212;

const ART_2213 = {
  train: require('../../assets/lessons/2-2-13/train.webp'),
  fall: require('../../assets/lessons/2-2-13/fall.webp'),
  trophy: require('../../assets/lessons/2-2-13/trophy.webp'),
  hopeful: require('../../assets/lessons/2-2-13/hopeful.webp'),
  puzzle: require('../../assets/lessons/2-2-13/puzzle.webp'),
  tree: require('../../assets/lessons/2-2-13/tree.webp'),
  bus: require('../../assets/lessons/2-2-13/bus.webp'),
  honest: require('../../assets/lessons/2-2-13/honest.webp'),
} satisfies Record<string, ImageSource>;
type Art2213 = keyof typeof ART_2213;

const ART_2214 = {
  dog: require('../../assets/lessons/2-2-14/dog.webp'),
  sea: require('../../assets/lessons/2-2-14/sea.webp'),
  concert: require('../../assets/lessons/2-2-14/concert.webp'),
  zoo: require('../../assets/lessons/2-2-14/zoo.webp'),
  anil: require('../../assets/lessons/2-2-14/anil.webp'),
  door: require('../../assets/lessons/2-2-14/door.webp'),
} satisfies Record<string, ImageSource>;
type Art2214 = keyof typeof ART_2214;

const ART_2215 = {
  music: require('../../assets/lessons/2-2-15/music.webp'),
  goodplayer: require('../../assets/lessons/2-2-15/goodplayer.webp'),
  playswell: require('../../assets/lessons/2-2-15/playswell.webp'),
  grandpa: require('../../assets/lessons/2-2-15/grandpa.webp'),
  dailywalk: require('../../assets/lessons/2-2-15/dailywalk.webp'),
  walkdaily: require('../../assets/lessons/2-2-15/walkdaily.webp'),
  wall: require('../../assets/lessons/2-2-15/wall.webp'),
  eagle: require('../../assets/lessons/2-2-15/eagle.webp'),
  radio: require('../../assets/lessons/2-2-15/radio.webp'),
  shopkeeper: require('../../assets/lessons/2-2-15/shopkeeper.webp'),
} satisfies Record<string, ImageSource>;
type Art2215 = keyof typeof ART_2215;

const ART_2216 = {
  boat: require('../../assets/lessons/2-2-16/boat.webp'),
  puppy: require('../../assets/lessons/2-2-16/puppy.webp'),
  car: require('../../assets/lessons/2-2-16/car.webp'),
  fans: require('../../assets/lessons/2-2-16/fans.webp'),
  jar: require('../../assets/lessons/2-2-16/jar.webp'),
  guests: require('../../assets/lessons/2-2-16/guests.webp'),
} satisfies Record<string, ImageSource>;
type Art2216 = keyof typeof ART_2216;

const ART_2217 = {
  pointing: require('../../assets/lessons/2-2-17/pointing.webp'),
  choir: require('../../assets/lessons/2-2-17/choir.webp'),
  driving: require('../../assets/lessons/2-2-17/driving.webp'),
  bakery: require('../../assets/lessons/2-2-17/bakery.webp'),
  tanvi: require('../../assets/lessons/2-2-17/tanvi.webp'),
  library: require('../../assets/lessons/2-2-17/library.webp'),
  sunil: require('../../assets/lessons/2-2-17/sunil.webp'),
  party: require('../../assets/lessons/2-2-17/party.webp'),
} satisfies Record<string, ImageSource>;
type Art2217 = keyof typeof ART_2217;

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
  // Cut from the 1.3.1 mockups. The parcel sits with the "Without pronouns" side of page 2's comparison, as in the
  // mockup. The mockup draws pages 3, 4 and 6's pictures beside the examples; beside them the examples outgrow a
  // screen, so they sit under the intro text instead (page 3's two are put together as one row). Pages 5 and 7 have
  // none in the mockup. The Lesson Complete screen reuses 1.2.8's clipboard.
  '1-3-1': {
    pages: {
      PAGE001: { art: art131('kiran', 158 / 162, 'A boy holding fish food beside his goldfish bowl') },
      PAGE003: { art: art131('antecedents', 210 / 85, 'A smiling woman in glasses and a sari, and a yellow bus') },
      PAGE004: { art: art131('umbrella', 122 / 177, 'A girl in a yellow raincoat with a yellow umbrella, crossing the road') },
      PAGE006: { art: art131('ishita', 96 / 165, 'A smiling girl with a ponytail and a school bag') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK003: [art131('parcel', 92 / 102, 'A cardboard parcel'), null],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.2 mockups. Page 2's row puts together the three person icons of its list rows (cut from tinted
  // rows); it opens with the list, so the row closes the page with the takeaway. Pages 3, 4, 6, 7 and 8 keep a picture
  // beside each example (7 and 8 with the rule's examples). The recap's trophy closes page 9; the boy with the
  // clipboard is the Lesson Complete picture.
  '1-3-2': {
    pages: {
      PAGE001: { art: art132('crowd', 150 / 149, 'A girl waving to a crowd') },
      PAGE002: { art: art132('persons', 241 / 54, 'A boy pointing at himself, a girl pointing ahead, and a boy and a girl together') },
      PAGE009: { art: art132('trophy', 250 / 270, 'A gold trophy on a stack of books') },
    },
    exampleArt: {
      BLOCK006: [
        art132('train', 188 / 86, 'Three children laughing beside a yellow train'),
        art132('painter', 176 / 72, 'A boy painting a wall blue with a roller'),
      ],
      BLOCK008: [
        art132('coach', 165 / 93, 'A coach with his hand on a boy’s shoulder'),
        art132('ferry', 197 / 77, 'A girl and a boy sitting by the rail of a ferry'),
      ],
      BLOCK011: [
        art132('walkers', 176 / 84, 'A boy and a girl walking hand in hand'),
        art132('sofa', 140 / 78, 'A ball under an orange sofa'),
      ],
      BLOCK012: [art132('nani', 174 / 144, 'A girl and her grandmother mixing dough in a bowl')],
      BLOCK013: [
        art132('tulips', 180 / 77, 'A mother and her son planting tulips'),
        art132('librarian', 160 / 72, 'A librarian holding a book, talking to a boy'),
      ],
    },
    comparisonArt: {
      BLOCK009: [
        art132('pushing', 145 / 92, 'A boy pushing a girl on a swing'),
        art132('bumped', 118 / 90, 'A girl on a swing, swinging back'),
      ],
    },
    resultArt: art132('clipboard', 262 / 252, 'A boy holding a ticked checklist and giving a thumbs up'),
  },
  // Cut from the 1.3.3 mockups. Page 2's row puts together the six owner icons of its list tiles (cut from cream
  // tiles); it opens with the list, so the row closes the page with the takeaway, as does page 5's no-apostrophe sign
  // (the page opens with its rule). The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard,
  // so the Lesson Complete screen reuses 1.2.8's.
  '1-3-3': {
    pages: {
      PAGE001: { art: art133('towels', 272 / 152, 'A boy holding up a blue towel and a striped orange towel') },
      PAGE002: { art: art133('owners', 482 / 58, 'Six children pointing to show who owns something: one boy, one girl, a boy in a cap, a girl, and two pairs') },
      PAGE003: { art: art133('easels', 278 / 124, 'Two paintings on easels: a mountain and a sunset over the sea') },
      PAGE004: { art: art133('whose', 318 / 155, 'A puzzled boy asking “Whose?” about a striped scarf on a bench') },
      PAGE005: { art: art133('nosign', 97 / 76, 'An apostrophe crossed out in a red circle') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK009: [art133('pizza', 112 / 79, 'A slice of pizza on a plate')],
      BLOCK011: [art133('bees', 222 / 165, 'A grandfather and a boy beside a beehive among flowers, with bees flying')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.4 mockups. Page 2 opens with its list, so the pointing boy closes the page with the takeaway.
  // Pages 3 and 5 keep a picture beside each of the rule's examples, page 4's umbrellas sit in the comparison and
  // page 6's tortoise beside its example. The recap's pencil is the same drawing as 1.3.1's. The mockups have no
  // clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-3-4': {
    pages: {
      PAGE001: { art: art134('kitchen', 297 / 173, 'A boy pointing at a kitchen with a pot on the stove') },
      PAGE002: { art: art134('pointer', 111 / 188, 'A smiling boy holding up one finger') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [art134('folder', 72 / 62, 'A blue folder'), art134('bags', 104 / 68, 'A yellow bag and a purple bag')],
      BLOCK006: [
        art134('raj', 150 / 79, 'A boy with a school bag beside his little sister'),
        art134('meera', 175 / 80, 'A girl handing a torch to her brother'),
      ],
      BLOCK008: [art134('tortoise', 182 / 170, 'A smiling tortoise')],
    },
    comparisonArt: {
      BLOCK005: [art134('yellow', 98 / 92, 'A yellow umbrella'), art134('pink', 90 / 86, 'A pink umbrella')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.5 mockups. Page 2's row icons are too small to reuse, so the list stands alone. Page 3 keeps a
  // picture beside each of the rule's examples and page 4's two scenes sit in the comparison. Page 5's party sits under
  // the intro text (the mockup draws it beside the first example). The recap's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-3-5': {
    pages: {
      PAGE001: { art: art135('mirror', 207 / 167, 'A girl looking at herself in a mirror') },
      PAGE005: { art: art135('party', 186 / 165, 'Three friends at a party, sharing a plate of samosas') },
      PAGE006: { art: art135('shed', 372 / 147, 'A grandfather with a hammer beside the wooden shed he built') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art135('kitten', 135 / 102, 'A kitten licking its paw'),
        art135('family', 150 / 106, 'A boy, his father and his mother saying hello'),
      ],
    },
    comparisonArt: {
      BLOCK005: [
        art135('blamed', 154 / 94, 'One girl pointing at another girl'),
        art135('blamedself', 118 / 96, 'A girl with her hand on her chest, eyes closed'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.6 mockups. Pages 2 and 3 keep a picture beside each example, page 4's two scenes sit in the
  // comparison and page 5's singers beside the rule's example. The recap's pencil is the same drawing as 1.3.1's. The
  // mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-3-6': {
    pages: {
      PAGE001: { art: art136('chef', 222 / 163, 'A chef carrying out a strawberry cake') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art136('mayor', 177 / 131, 'A mayor cutting a ribbon outside a library'),
        art136('hut', 172 / 113, 'A mud hut with a thatched roof'),
      ],
      BLOCK006: [
        art136('baker', 190 / 129, 'A girl holding a lemon cake she baked'),
        art136('bike', 216 / 130, 'A boy fixing his bicycle tyre'),
      ],
      BLOCK008: [art136('singers', 145 / 122, 'Three children singing')],
    },
    comparisonArt: {
      BLOCK007: [
        art136('guitar', 148 / 110, 'A girl playing the guitar'),
        art136('teacher', 156 / 111, 'A teacher showing a class a picture of a guitar'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.7 mockups. Page 2's grid puts together the four icons of its list tiles (cut from cream tiles) in
  // the mockup's order: near on top, far below. It opens with the list, so the grid closes the page with the takeaway.
  // Pages 3, 4 and 6 keep a picture beside each example and page 5's boxes sit in the comparison. The recap's pencil
  // is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-3-7': {
    pages: {
      PAGE001: { art: art137('dish', 288 / 138, 'A boy pointing at a steaming bowl of food') },
      PAGE002: { art: art137('distance', 290 / 116, 'A cup and a pile of books close by; a house and hills far away') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [art137('park', 162 / 96, 'A bench under a tree in a park'), art137('keys', 108 / 95, 'Two keys on a ring')],
      BLOCK007: [art137('hawk', 140 / 114, 'A hawk sitting on top of a lamp post'), art137('mangoes', 136 / 80, 'Two ripe mangoes')],
      BLOCK010: [art137('boys', 205 / 133, 'Two boys with school bags, one thanking the other')],
    },
    comparisonArt: {
      BLOCK008: [art137('box', 134 / 77, 'A cardboard box'), art137('boxnoun', 130 / 77, 'A cardboard box')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.8 mockups. Pages 1–4 show their scene under the intro text and page 5's basket and drinks sit in
  // the comparison. Page 6 opens with its rule, so the girl and the paintings close the page with the takeaway (the
  // picture is too wide to sit beside the rule's example). The recap's pencil is the same drawing as 1.3.1's. The
  // mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-3-8': {
    pages: {
      PAGE001: { art: art138('gate', 312 / 133, 'A puzzled boy wondering who left a garden gate open') },
      PAGE002: { art: art138('goal', 333 / 162, 'A boy kicking a football into a goal') },
      PAGE003: { art: art138('committee', 342 / 163, 'A school committee at a table, thinking about a boy') },
      PAGE004: { art: art138('whose', 340 / 153, 'A boy asking “Whose?” about a muddy football, and a girl smiling') },
      PAGE006: { art: art138('paintings', 368 / 120, 'A girl looking at three paintings on easels') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK009: [
        art138('basket', 160 / 86, 'A basket of vegetables and fruit'),
        art138('drinks', 172 / 86, 'A cup of tea and a glass of lassi'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.9 mockups. Pages 2–5 keep a picture beside each example, page 6's fallen tree sits beside the
  // rule's example (its "which refers to the tree" callout is left out) and page 7's two scenes sit in the comparison.
  // The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen
  // reuses 1.2.8's.
  '1-3-9': {
    pages: {
      PAGE001: { art: art139('bee', 320 / 160, 'A boy and a girl with a trophy under a Spelling Bee banner') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art139('dentist', 160 / 104, 'A dentist checking a boy’s teeth'),
        art139('singer', 148 / 102, 'A girl singing into a microphone'),
      ],
      BLOCK006: [art139('bus', 172 / 194, 'A bus to the airport')],
      BLOCK008: [art139('pie', 205 / 200, 'A mother holding a freshly baked pie')],
      BLOCK010: [art139('dog', 166 / 162, 'A grandfather and his dog beside a ring the dog found')],
      BLOCK011: [art139('tree', 185 / 90, 'A tree fallen across a lane')],
    },
    comparisonArt: {
      BLOCK012: [
        art139('asker', 145 / 87, 'A boy wondering, with a question mark in a thought bubble'),
        art139('artist', 155 / 79, 'A girl painting a mural of the sun over hills'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.10 mockups. Page 2's row puts together the pictures of its two list tiles (people, and a box for
  // things); it opens with the list, so the row closes the page with the takeaway. Page 3 keeps a picture beside each
  // of the rule's examples. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the
  // Lesson Complete screen reuses 1.2.8's.
  '1-3-10': {
    pages: {
      PAGE001: { art: art1310('wonder', 288 / 165, 'A boy wondering about some people he can’t name') },
      PAGE002: { art: art1310('kinds', 229 / 96, 'A family of four, and an empty cardboard box') },
      PAGE004: { art: art1310('nothing', 309 / 228, 'A girl saying “Nothing was left!” beside an empty plate') },
      PAGE005: { art: art1310('cheer', 380 / 121, 'Three children waving and cheering') },
      PAGE006: { art: art1310('apples', 330 / 75, 'Four red apples') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [art1310('juice', 102 / 100, 'A glass of orange juice'), art1310('drawer', 118 / 96, 'A drawer stuffed with clothes')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.11 mockups. Pages 1–4 show their scene under the intro text, page 5 keeps a picture beside each
  // of the rule's examples and page 6's two pictures sit in the comparison. The recap's pencil is the same drawing as
  // 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-3-11': {
    pages: {
      PAGE001: { art: art1311('cousins', 335 / 146, 'Three cousins, each holding a gift') },
      PAGE002: { art: art1311('chutney', 345 / 144, 'A girl tasting from a row of five bowls of chutney') },
      PAGE003: { art: art1311('pens', 285 / 163, 'A boy holding up a red pen and a blue pen') },
      PAGE004: { art: art1311('raincoats', 340 / 150, 'A girl frowning at a yellow raincoat and a blue raincoat') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK009: [
        art1311('parcels', 198 / 105, 'Three parcels, each with a red label'),
        art1311('samosa', 180 / 83, 'Two boys politely refusing a samosa on a plate'),
      ],
    },
    comparisonArt: {
      BLOCK010: [
        art1311('thumbs', 150 / 100, 'A boy giving a thumbs up'),
        art1311('roads', 214 / 103, 'A road splitting in two, with signs to A and B'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.12 mockups. Pages 2 and 3 keep a picture beside each example and page 4's two scenes sit in the
  // comparison. The mockup's page 5 pictures show other examples than the approved content (and page 3's books
  // picture a note the content doesn't have), so they are left out. The recap's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-3-12': {
    pages: {
      PAGE001: { art: art1312('wave', 448 / 156, 'A boy and a girl waving to each other across a street') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art1312('puppies', 246 / 100, 'Two puppies chasing each other on the grass'),
        art1312('team', 232 / 102, 'Three football players hugging'),
      ],
      BLOCK006: [art1312('twins', 240 / 124, 'A boy and a girl passing a sandal between them')],
    },
    comparisonArt: {
      BLOCK007: [
        art1312('blameother', 195 / 93, 'Two angry boys pointing at each other'),
        art1312('blameself', 192 / 93, 'Two sad boys, each with his hands on his own chest'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.13 mockups. Pages 2, 5, 6 and 7 keep a picture beside each example (2 with the rule's examples).
  // Beside page 3's two long examples Uncle Ravi and Aunt Rekha outgrow a screen, so they are put together as one row
  // under the intro text. Page 4 opens with its rule and its picture is too wide to sit beside the example, so it closes the page with the
  // takeaway. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete
  // screen reuses 1.2.8's.
  '1-3-13': {
    pages: {
      PAGE001: { art: art1313('bakery', 325 / 143, 'A bakery with a striped awning and bread in the window') },
      PAGE003: { art: art1313('relatives', 318 / 115, 'A man in glasses on the phone, and a woman in a sari holding a plate of sweets') },
      PAGE004: { art: art1313('meena', 318 / 158, 'A girl and her brother working on a laptop beside a pile of books') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [art1313('watch', 100 / 82, 'A wristwatch with a blue strap'), art1313('sandals', 131 / 100, 'A pair of blue sandals')],
      BLOCK008: [art1313('door', 145 / 160, 'A boy at an open door watching someone with a backpack walk away')],
      BLOCK010: [art1313('lunch', 220 / 160, 'Three children, each with a lunch bag')],
      BLOCK012: [
        art1313('committee', 170 / 88, 'A committee of three sitting behind a sign'),
        art1313('team', 191 / 92, 'Three football players pulling on their boots'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.14 mockups. Every page but the recap has one scene. Pages 2 and 4 open with the mistake card and
  // page 3 with its rule, so their picture closes the page with the takeaway. The recap's pencil is the same drawing
  // as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-3-14': {
    pages: {
      PAGE001: { art: art1314('boys', 290 / 168, 'A boy talking while his puzzled friend wonders “he?”') },
      PAGE002: { art: art1314('cooks', 332 / 120, 'A girl stirring a pot while her aunt chats beside her') },
      PAGE003: { art: art1314('chase', 330 / 188, 'A dog chasing a cat up a tree') },
      PAGE004: { art: art1314('news', 290 / 118, 'A newspaper called The Daily News with a picture of a road barrier') },
      PAGE005: { art: art1314('weather', 380 / 152, 'A puzzled boy wondering “They? Who?” beside a weather forecast on TV') },
      PAGE006: { art: art1314('museum', 438 / 158, 'Two children at a museum looking at a dinosaur skeleton and a moon rock') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.3.15 mockups. Pages 2–8 open with the mistake card (page 4 after one line), so like 1.2.14 they show
  // their picture with the takeaway. Page 9's mockup picture belongs to a different example than the approved content,
  // so it is left out. The checklist's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the
  // Lesson Complete screen reuses 1.2.8's.
  '1-3-15': {
    pages: {
      PAGE001: { art: art1315('magnifier', 148 / 170, 'A boy looking through a magnifying glass') },
      PAGE002: { art: art1315('stadium', 160 / 205, 'Two boys with backpacks outside a stadium') },
      PAGE003: { art: art1315('whisper', 160 / 158, 'A girl whispering a secret to her friend') },
      PAGE004: { art: art1315('parrot', 170 / 190, 'A parrot flapping its wings on a branch') },
      PAGE005: { art: art1315('boats', 145 / 170, 'Two boys sailing paper boats they made') },
      PAGE006: { art: art1315('books', 168 / 138, 'A girl passing a pile of books to a boy') },
      PAGE007: { art: art1315('door', 152 / 188, 'A boy looking at a door as someone knocks') },
      PAGE008: { art: art1315('sitar', 175 / 195, 'A girl playing the sitar') },
      PAGE010: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.1 mockups. Page 2's row puts together the three icons of its question rows (cut from white
  // cards). Pages 2 and 6 open with a list and page 5 with its rule, so their picture closes the page with the
  // takeaway. Page 4's pencils sit in the comparison (the single pencil was cut from a mint tile). The recap's pencil
  // is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-1': {
    pages: {
      PAGE001: { art: art141('squirrel', 330 / 132, 'A squirrel holding an acorn on a red roof') },
      PAGE002: { art: art141('questions', 468 / 70, 'A boy pointing at a book, three apples, and a boy pointing at a school bag labelled Ravi’s') },
      PAGE003: { art: art141('doorstep', 340 / 175, 'A key and an envelope on a doormat in front of a door') },
      PAGE005: { art: art141('gate', 430 / 148, 'A boy painting a tall wooden gate') },
      PAGE006: { art: art141('tree', 160 / 215, 'A tree with a sign saying Determiner Family') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK006: [art141('pencils', 150 / 66, 'Three coloured pencils'), art141('pencil', 125 / 60, 'One yellow pencil')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.2 mockups. Pages 1, 2, 4 and 5 show their scene under the intro text. Page 3 opens with its rule,
  // so the mango and chair close the page with the takeaway. The recap's pencil is the same drawing as 1.3.1's. The
  // mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-2': {
    pages: {
      PAGE001: { art: art142('rainbow', 383 / 182, 'A boy pointing at a rainbow over green hills') },
      PAGE002: { art: art142('kitten', 380 / 170, 'A girl smiling at a kitten beside a pet carrier') },
      PAGE003: { art: art142('mango', 345 / 128, 'A mango and a wooden chair') },
      PAGE004: { art: art142('pilot', 385 / 185, 'A pilot, a plane in the sky, and two boys playing football') },
      PAGE005: { art: art142('tulsi', 370 / 194, 'A girl watering a tulsi plant beside a calendar saying Twice a day') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.3 mockups. Pages 2, 3, 4 and 6 keep a picture beside each example (2 and 6 with the rule's
  // examples); pages 1 and 5 show their scene under the intro text. The recap's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-3': {
    pages: {
      PAGE001: { art: art143('oranges', 315 / 153, 'A boy peeling an orange beside two more oranges') },
      PAGE005: { art: art143('xray', 262 / 160, 'A doctor pointing at an X-ray of a hand') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [art143('earring', 108 / 76, 'A gold earring with a pink stone'), art143('lizard', 172 / 86, 'A green lizard on a rock')],
      BLOCK005: [
        art143('ferry', 198 / 118, 'A clock and a ferry on the sea'),
        art143('shopkeeper', 156 / 135, 'A smiling shopkeeper in front of his shelves'),
      ],
      BLOCK007: [
        art143('uniform', 170 / 110, 'A school shirt with a red tie'),
        art143('oneway', 172 / 124, 'A blue One-Way sign with an arrow'),
      ],
      BLOCK010: [art143('bicycle', 205 / 84, 'A blue bicycle'), art143('apple', 190 / 84, 'A big red apple')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.4 mockups. Pages 1–5 show their scene under the intro text; page 6 keeps a picture beside each
  // example (the biscuit tin and the glass of water). The recap's pencil is the same drawing as 1.3.1's. The mockups
  // have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-4': {
    pages: {
      PAGE001: { art: art144('plant', 362 / 158, 'A boy watering a money plant on a balcony') },
      PAGE002: { art: art144('notebook', 358 / 146, 'A girl writing in a notebook beside books and a pen pot') },
      PAGE003: { art: art144('fan', 360 / 148, 'A boy pointing at a ceiling fan while his mother smiles') },
      PAGE004: { art: art144('moon', 356 / 158, 'A big orange moon in a starry night sky') },
      PAGE005: { art: art144('bag', 450 / 148, 'A pink bag on a chair beside a table with books and a plant') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK012: [art144('biscuits', 146 / 98, 'A red tin full of biscuits'), art144('water', 134 / 84, 'A glass of water')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.5 mockups. Pages 1, 3 and 5 show their scene under the intro text; page 2's mangoes and honey sit
  // beside the rule's two examples. Page 4's tiles draw their icons from LIST_ICONS (meals, languages, subjects,
  // sports, days and months), matching the mockup's tile pictures. The recap's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-5': {
    pages: {
      PAGE001: { art: art145('puppets', 370 / 194, 'A boy and a girl with lion and rabbit hand puppets at a puppet theatre') },
      PAGE003: { art: art145('travel', 370 / 212, 'A girl with a map beside signs to Chennai and Japan, with a plane overhead') },
      PAGE005: { art: art145('school', 200 / 238, 'A boy outside his school with a yellow school bus') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [art145('mangoes', 190 / 170, 'A basket of mangoes'), art145('honey', 162 / 168, 'A jar of honey with a honey dipper')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.6 mockups. Pages 1, 3 and 5 show their scene under the intro text; page 2 opens with its rule,
  // so the night owls close the page with the takeaway. Page 4's rice field and burnt rice sit in the comparison (cut
  // from tinted cards). The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the
  // Lesson Complete screen reuses 1.2.8's.
  '1-4-6': {
    pages: {
      PAGE001: { art: art146('bees', 365 / 168, 'Bees flying round flowers near a beehive') },
      PAGE002: { art: art146('night', 378 / 172, 'Owls flying and perching under a full moon') },
      PAGE003: { art: art146('temple', 378 / 206, 'Two owls on a wall in front of an old stone temple') },
      PAGE005: { art: art146('koala', 355 / 182, 'A koala asleep on a branch') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK006: [art146('field', 184 / 108, 'A rice field with hills behind'), art146('burnt', 180 / 100, 'A plate of burnt rice')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.7 mockups. Pages 1 and 4 show their scene under the intro text; pages 2 and 3 open with a rule,
  // so their scene closes the page with the takeaway. Page 5's tiles draw icons from LIST_ICONS (a pen, a pencil box,
  // a bottle), standing in for the mockup's pen, pens and ink. Page 6's newspaper and paper stack sit in the
  // comparison (cut from tinted cards). The recap's pencil is the same drawing as 1.3.1's. The mockups have no
  // clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-7': {
    pages: {
      PAGE001: { art: art147('umbrella', 290 / 195, 'A boy packing an umbrella and sunscreen into his bag') },
      PAGE002: { art: art147('scooter', 270 / 170, 'A boy with his blue scooter') },
      PAGE003: { art: art147('box', 286 / 168, 'A girl and a boy carrying a box together') },
      PAGE004: { art: art147('guavas', 268 / 200, 'A girl picking guavas from a tree into a basket') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK008: [art147('newspaper', 150 / 72, 'A folded newspaper'), art147('paper', 150 / 90, 'A stack of blank paper')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.8 mockups. Every page but the recap shows one scene under its intro text; page 3 opens with its
  // rule, so the river, sea and desert panels close the page with the takeaway. The recap's pencil is the same drawing
  // as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-8': {
    pages: {
      PAGE001: { art: art148('ganga', 366 / 140, 'A boy rowing a boat on the Ganga past the temples of Varanasi') },
      PAGE002: { art: art148('everest', 345 / 118, 'A snowy mountain beside a globe showing Asia') },
      PAGE003: { art: art148('water', 354 / 103, 'A river, a sailing boat on the sea, and a desert with a cactus') },
      PAGE004: { art: art148('islands', 352 / 98, 'A mountain range and a small island with palm trees') },
      PAGE005: { art: art148('countries', 458 / 122, 'A globe beside a signpost to the United Kingdom and the Maldives') },
      PAGE006: { art: art148('fort', 450 / 130, 'The Red Fort with an Indian flag') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.9 mockups. Pages 1, 4 and 6 show their scene under the intro text. Page 2 keeps a picture beside
  // each of the rule's examples. Beside page 3's two examples the calendar and memory bubble outgrow a screen, so they
  // are put together as one row under the intro text. Page 5's sandals overlap the mango basket in the mockup, so the
  // pointing hand, mangoes and sandals stay one picture; the page opens with its rule, so it closes the page with the
  // takeaway. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete
  // screen reuses 1.2.8's.
  '1-4-9': {
    pages: {
      PAGE001: { art: art149('jackets', 312 / 164, 'A boy pointing at a yellow jacket nearby and a blue coat farther away') },
      PAGE003: { art: art149('time', 310 / 150, 'A desk calendar saying This Week, and a memory of two children laughing outside a house') },
      PAGE004: { art: art149('beach', 300 / 176, 'A girl on the beach pointing at small shells in the sand') },
      PAGE005: { art: art149('mangoes', 380 / 122, 'A hand pointing at a basket of mangoes, with a pair of pink sandals') },
      PAGE006: { art: art149('school', 392 / 210, 'Two girls with school bags outside their school') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [art149('marbles', 138 / 116, 'A glass bowl of marbles'), art149('milk', 126 / 126, 'A carton of milk and a glass of milk')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.10 mockups. Pages 1, 3 and 5 show their scene under the intro text; page 2 opens with its rule, so
  // the umbrella closes the page with the takeaway. The mockup's page 4 picture
  // shows "Tara's Book" but the approved example is Tara's lunchbox, and its hurt-ankle boy on page 6 belongs to a
  // different example, so both are left out; page 6 keeps the shoes beside the shoes example. The recap's pencil is the
  // same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-10': {
    pages: {
      PAGE001: { art: art1410('kite', 354 / 150, 'A boy flying a kite beside a mango tree') },
      PAGE002: { art: art1410('umbrella', 358 / 146, 'A girl under a bright red umbrella in the rain') },
      PAGE003: { art: art1410('friends', 356 / 98, 'Two girls chatting, one introducing the other') },
      PAGE005: { art: art1410('twins', 444 / 120, 'Twin boys giving a thumbs up in their bedroom') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK011: [null, art1410('shoes', 224 / 134, 'A girl holding up her blue shoes')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.11 mockups. Pages 1 and 5 show their scene under the intro text. Pages 2 and 4 keep a picture
  // beside each example (2 with the rule's examples), and page 3's helpers and lone digger sit in the comparison (cut
  // from tinted cards). The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson
  // Complete screen reuses 1.2.8's.
  '1-4-11': {
    pages: {
      PAGE001: { art: art1411('tickets', 374 / 180, 'A boy pointing at a clock and two tickets') },
      PAGE005: { art: art1411('homework', 384 / 122, 'A girl doing homework beside a tin of paint and an empty egg box') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [art1411('cousins', 232 / 145, 'Three smiling cousins'), art1411('petrol', 112 / 140, 'A red petrol can')],
      BLOCK007: [art1411('rice', 186 / 130, 'A bowl with a little rice in it'), art1411('cloud', 175 / 130, 'A grey cloud over dry, cracked land')],
    },
    comparisonArt: {
      BLOCK005: [art1411('afew', 186 / 132, 'Three children ready to help'), art1411('few', 176 / 132, 'One boy digging alone')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.13 mockups. Pages 1, 3, 4 and 6 show their scene under the intro text (page 6's hotel room, triple
  // jump and dozen eggs stay one row, as in the mockup). Page 2 keeps a picture beside each of the rule's examples; page
  // 5 opens with its rule, so the book closes the page with the takeaway. The recap's pencil is the same drawing as
  // 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-13': {
    pages: {
      PAGE001: { art: art1413('kittens', 350 / 140, 'Two kittens sitting on stone steps') },
      PAGE003: { art: art1413('hall', 348 / 142, 'A hall full of red seats facing a screen saying 300 seats') },
      PAGE004: { art: art1413('school', 356 / 156, 'A school beside a sign for the 1st, 2nd and 3rd floors') },
      PAGE005: { art: art1413('book', 452 / 138, 'An open book with chapters 1 to 3 ticked off, beside two books and a plant') },
      PAGE006: { art: art1413('sets', 466 / 122, 'A hotel double room, a boy doing the triple jump, and a dozen eggs') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [art1413('balcony', 163 / 108, 'A balcony with a flower pot'), art1413('saplings', 192 / 108, 'Three young saplings')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.14 mockups. Pages 1, 2 and 4 show a scene under the intro text. The mockup's page 3 picture asks
  // "Whose bag is this?", but the approved example is about a ringing phone, so page 3 has none. The recap's pencil is
  // the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-14': {
    pages: {
      PAGE001: { art: art1414('bus', 490 / 178, 'A girl at a bus stop, thinking about a bus') },
      PAGE002: { art: art1414('kurta', 476 / 124, 'A boy and a girl choosing between a yellow kurta and a green kurta') },
      PAGE004: { art: art1414('thinker', 135 / 222, 'A boy with one finger raised') },
      PAGE005: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.15 mockups. Page 1 shows its scene under the intro text. Page 2's row puts together the cup,
  // children and gloves of its list tiles (cut from white cards); it opens with the list, so the row closes the page
  // with the takeaway. Pages 3 and 4 keep a picture beside each example and page 5's puppies sit in the comparison. The
  // mockup's pizza "Half" card is not in the approved content. The recap's pencil is the same drawing as 1.3.1's. The
  // mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-4-15': {
    pages: {
      PAGE001: { art: art1415('samosa', 376 / 188, 'A boy asking for another samosa') },
      PAGE002: { art: art1415('others', 342 / 92, 'A teacup, three children, and a pair of pink gloves') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK006: [
        art1415('queue', 182 / 178, 'A long queue at a ticket counter'),
        art1415('hilltop', 184 / 178, 'A girl gazing at a view of mountains'),
      ],
      BLOCK008: [
        art1415('teams', 190 / 140, 'Two footballers in different team shirts, arm in arm'),
        art1415('museum', 183 / 140, 'Visitors queuing to enter a museum'),
      ],
    },
    comparisonArt: {
      BLOCK010: [art1415('whole', 152 / 104, 'A puppy eating a sandwich'), art1415('all', 172 / 104, 'A happy puppy beside an empty plate')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.4.16 mockups. Pages 1 and 5 show their scene under the intro text. Pages 2 (a list) and 3 (a rule)
  // open with their card, so the slot-order picture and the kittens close the page with the takeaway. Page 4 keeps the
  // mangoes and the cake beside their examples; the mockup's "Both my grandparents" row is not in the approved content.
  // The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen
  // reuses 1.2.8's.
  '1-4-16': {
    pages: {
      PAGE001: { art: art1416('tabla', 382 / 190, 'A boy pointing at his two older brothers playing the tabla') },
      PAGE002: { art: art1416('slots', 372 / 166, 'First, middle, last and noun in order, with a girl pointing at them') },
      PAGE003: { art: art1416('kittens', 376 / 122, 'Two kittens and a girl smiling at them') },
      PAGE005: { art: art1416('puzzle', 372 / 190, 'A boy with an idea, working on a jigsaw puzzle') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK006: [art1416('mangoes', 172 / 86, 'A crate of ripe mangoes'), art1416('cake', 172 / 88, 'A chocolate cake with half of it gone')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.1 mockups. Page 1 shows its scene under the intro text. Pages 2–5 open with a list, rule or
  // comparison, so their scene closes the page with the takeaway (page 2 keeps the boy and the word tiles; its
  // question rows are drawn by the list itself). Page 6's tile icons are too small to reuse. The recap's pencil is the
  // same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-5-1': {
    pages: {
      PAGE001: { art: art151('kitten', 356 / 146, 'A grey kitten asleep on a cushion by a sunny window') },
      PAGE002: { art: art151('words', 352 / 252, 'A thinking boy behind word tiles saying spicy, yellow, tiny and soft') },
      PAGE003: { art: art151('rasam', 354 / 134, 'A boy tasting a bowl of rasam') },
      PAGE004: { art: art151('grandpa', 356 / 132, 'A grandfather telling a story to a smiling boy') },
      PAGE005: { art: art151('owls', 452 / 152, 'One shy owl, and three shy owls on a branch') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.2 mockups. Pages 1, 4 and 5 show their scene under the intro text and page 3's two concert halls
  // sit in the comparison. Page 2's tiles draw their icons from LIST_ICONS (an elephant-sized arrow, a ball, a palette,
  // a temple, a hand, a lemon, a megaphone and a smiley), matching the mockup's tile pictures. The recap's pencil is the
  // same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-5-2': {
    pages: {
      PAGE001: { art: art152('parrot', 370 / 196, 'A green parrot on a mango tree branch') },
      PAGE004: { art: art152('stream', 370 / 132, 'A boy with a backpack beside a rushing mountain stream') },
      PAGE005: { art: art152('biryani', 252 / 192, 'A steaming bowl of biryani with raita and sliced onion') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK004: [
        art152('opinion', 176 / 134, 'A girl admiring a concert hall'),
        art152('fact', 172 / 134, 'A round concert hall'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.3 mockups. Pages 1, 3 and 5 show their scene under the intro text and page 4's papayas sit in the
  // comparison (cut from cream cards). Page 2's six names are too long for tiles, so they show as rows and the mockup's
  // tile icons are not used. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the
  // Lesson Complete screen reuses 1.2.8's.
  '1-5-3': {
    pages: {
      PAGE001: { art: art153('kites', 380 / 190, 'A boy and a girl flying kites') },
      PAGE003: { art: art153('guavas', 380 / 186, 'A girl picking guavas into a basket') },
      PAGE005: { art: art153('tiffin', 370 / 192, 'A boy with his school bag beside a steel tiffin') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK006: [art153('ripe', 144 / 80, 'A ripe papaya cut in half'), art153('several', 128 / 64, 'Two papayas')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.9 mockups (a plain white page, so `art:cutout --page white`). Pages 1 and 5 show their scene
  // under the intro text, page 3's two examples each show their picture beside the explanation, and page 4's rule
  // card is followed by its scene. Page 2's place → adjective pairs show as chips, so the mockup's landmark icons are
  // not used, and page 4's Indian / indian marks aren't in the content. The recap's pencil is the same drawing as
  // 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-5-9': {
    pages: {
      PAGE001: { art: art159('fair', 379 / 224, 'A boy and a girl slurping noodles at a food fair') },
      PAGE004: { art: art159('shawls', 378 / 154, 'A boy holding up a patterned shawl at a stall in Srinagar') },
      PAGE005: { art: art159('tea', 380 / 197, 'A cup of tea in front of green tea gardens and a Darjeeling Tea sign') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [
        art159('cooking', 170 / 134, 'A woman stirring a pot of food'),
        art159('wedding', 170 / 162, 'A smiling bride and groom in wedding clothes'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.10 mockups (a plain white page, so `art:cutout --page white`). Pages 1 and 3 show their scene
  // under the intro text, page 4's rule examples each show their picture (a tent, a path to the park), and page 5's
  // girl and boy sit in the comparison (the boy's hair overlapped the purple header, which was painted out first).
  // Page 2's pattern names are too long for tiles, so they show as rows and the mockup's tile icons are not used. The
  // recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen
  // reuses 1.2.8's.
  '1-5-10': {
    pages: {
      PAGE001: { art: art1510('author', 379 / 220, 'An old writer with glasses at his desk beside a Ruskin Bond sign and books') },
      PAGE003: { art: art1510('curly', 382 / 241, 'A smiling girl with long curly hair and a backpack') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK006: [
        art1510('tent', 202 / 104, 'A yellow tent among trees'),
        art1510('path', 188 / 92, 'A path winding between trees to a park'),
      ],
    },
    comparisonArt: {
      BLOCK007: [
        art1510('girl', 152 / 104, 'Meena pointing and smiling'),
        art1510('boy', 150 / 113, "Meena's brother smiling"),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.11 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows its scene under the
  // intro text, pages 2 and 3 follow their rule card with the puppet show, page 5's speaker and sleepy audience sit in
  // the comparison, and page 6's two examples each show their picture (a fallen tree, frozen peas). Page 4's pairs
  // show as chips, so the mockup's row icons are not used. The recap's pencil is the same drawing as 1.3.1's. The
  // mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-5-11': {
    pages: {
      PAGE001: { art: art1511('stadium', 359 / 181, 'A boy and a girl with painted faces cheering at a stadium final') },
      PAGE002: { art: art1511('puppets', 353 / 179, 'Children laughing at a clown and a princess puppet on a stage') },
      PAGE003: { art: art1511('audience', 354 / 197, 'Three children clapping and laughing in front of a puppet stage') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK006: [
        art1511('speech', 208 / 100, 'A man giving a speech at a podium'),
        art1511('sleepy', 204 / 99, 'A yawning boy and a sleepy girl in the audience'),
      ],
    },
    exampleArt: {
      BLOCK008: [
        art1511('tree', 218 / 118, 'A fallen tree lying across a road'),
        art1511('peas', 219 / 118, 'A bag of frozen peas beside a bowl of peas'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.12 mockups (a plain white page, so `art:cutout --page white`). Pages 1, 2, 3 and 5 show their
  // scene under the intro text (page 3's one scene pictures both examples: the dal and the stormy sky), and page 4's
  // rule card is followed by its sleeping baby. The beach's pale surf and wet sand run into the picture's edges, so
  // it was filled from the top only and its bottom corners rounded by hand. The recap's pencil is the same drawing
  // as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-5-12': {
    pages: {
      PAGE001: { art: art1512('kitten', 372 / 189, 'A striped kitten asleep on a pink cushion') },
      PAGE002: { art: art1512('beach', 372 / 187, 'A boy in a straw hat smiling at the sea') },
      PAGE003: { art: art1512('dal', 376 / 182, 'A steaming bowl of dal under a dark, stormy sky') },
      PAGE004: { art: art1512('baby', 371 / 177, 'A baby asleep in a wooden cot under a starry blanket') },
      PAGE005: { art: art1512('gate', 375 / 179, 'A school building behind a closed gate with a Main Gate sign') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.13 mockups (a plain white page, so `art:cutout --page white`; the pebble beach's surf runs into
  // its sides, so those edges were kept). Pages 1, 4 and 5 show their scene under the intro text and page 3's rule
  // card is followed by its pebble beach. Page 2's eight groups show as tiles with icons from LIST_ICONS (a thumb, an
  // arrow, a temple, a ball, a palette, a flag, a texture and a steaming pot), standing in for the mockup's pictures.
  // Page 4's right/wrong chips aren't in the content. The recap's pencil is the same drawing as 1.3.1's. The mockups
  // have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-5-13': {
    pages: {
      PAGE001: { art: art1513('dupatta', 378 / 228, 'A girl holding up a purple silk dupatta in a cloth shop') },
      PAGE003: { art: art1513('pebble', 380 / 203, 'A boy on a beach holding up a smooth round pebble') },
      PAGE004: { art: art1513('car', 377 / 185, 'A smiling grandfather driving a small old blue car') },
      PAGE005: { art: art1513('spicy', 378 / 175, 'A happy boy making an OK sign over a steaming bowl of curry') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.14 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows its scene under the
  // intro text, page 3's two examples each show their picture (Nani's rose, Leela's chess), page 4's angry mum and
  // broken vase sit in the comparison (their pale blue and pink column tints were painted out first, and the hole in
  // the vase's handle cleared), and page 5's rule card is followed by Arjun's coin jar. Page 2's tiles draw their
  // icons from LIST_ICONS (a heart, a trophy, binoculars, a handshake, a globe and a star), as in the mockup. The
  // recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen
  // reuses 1.2.8's.
  '1-5-14': {
    pages: {
      PAGE001: { art: art1514('thunder', 380 / 199, 'A startled boy at a window watching a thunderstorm') },
      PAGE005: { art: art1514('coins', 386 / 140, 'A smiling boy dropping a coin into a jar of coins') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [
        art1514('rose', 190 / 205, 'A smiling grandmother holding a red rose in her garden'),
        art1514('chess', 181 / 210, 'A girl in glasses thinking over a chessboard'),
      ],
    },
    comparisonArt: {
      BLOCK006: [
        art1514('angry', 196 / 124, 'An angry mother pointing at her sulking son'),
        art1514('vase', 170 / 125, 'A cracked blue vase'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.15 mockups (a plain white page, so `art:cutout --page white`; the kite scene's word clouds touch
  // its sides, so those edges were kept). Pages 1 and 5 show their scene under the intro text, page 2's puppy and
  // kitten sit in the comparison, and page 4's rule examples each show their picture (a sun, a star; their cream and
  // lavender card tints were painted out first). Page 3's endings show as tiles with icons from LIST_ICONS (rain, a
  // warning sign, a runner, a shirt, a leaf, a child, a medal and gold), as in the mockup. The recap's pencil is the
  // same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-5-15': {
    pages: {
      PAGE001: { art: art1515('kites', 379 / 200, 'A boy flying colourful kites beside clouds saying colourful and homeless') },
      PAGE005: { art: art1515('opposites', 366 / 160, 'A boy and a girl saying unkind means not kind and impossible means not possible') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK003: [
        art1515('puppy', 172 / 130, 'A playful puppy chasing a ball'),
        art1515('kitten', 172 / 135, 'A small grey kitten sitting alone by a doorway'),
      ],
    },
    exampleArt: {
      BLOCK005: [art1515('sun', 118 / 76, 'A bright sun'), art1515('star', 122 / 74, 'A shining star')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 1.5.16 mockups (a plain white page, so `art:cutout --page white`). The mockups cover pages 1–8:
  // page 1 shows the boy writing (cut left of the mockup's Form / Choice / Position tiles, which aren't in the content;
  // his open book runs off the crop, so those edges were kept), and each mistake page 2–8 shows its scene with the
  // warning card. Page 9 has no mockup, so it has no picture. The checklist's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '1-5-16': {
    pages: {
      PAGE001: { art: art1516('writer', 172 / 193, 'A smiling boy writing in an open book') },
      PAGE002: { art: art1516('apples', 330 / 143, 'A basket of red apples') },
      PAGE003: { art: art1516('boy', 331 / 150, 'A smiling boy with a school bag') },
      PAGE004: { art: art1516('momos', 334 / 132, 'A steamer of momos with a bowl of chutney and a palace in the mountains') },
      PAGE005: { art: art1516('cinema', 334 / 146, 'A bored boy slumped in a cinema seat with popcorn') },
      PAGE006: { art: art1516('painting', 331 / 148, 'A girl painting a mountain picture on an easel') },
      PAGE007: { art: art1516('bucket', 331 / 127, 'A new blue plastic bucket') },
      PAGE008: { art: art1516('baby', 334 / 120, 'A baby asleep under a starry blanket with a teddy bear') },
      PAGE010: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.1 mockups (a plain white page, so `art:cutout --page white`; the ferry's wake and the beach's
  // clouds touch their sides, so those edges were kept). Pages 1 and 4 show their scene under the intro text, page 2's
  // comparison is followed by the boy flying kites, and page 3's rule examples each show their picture (Grandma
  // knitting, the firefighter). Page 5's verb kinds are too long for tiles, so they show as rows and the mockup's tile
  // icons are not used. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson
  // Complete screen reuses 1.2.8's.
  '2-1-1': {
    pages: {
      PAGE001: { art: art211('ferry', 370 / 175, 'A red and white ferry speeding across the water') },
      PAGE002: { art: art211('kites', 360 / 186, 'A boy flying two kites over a beach') },
      PAGE004: { art: art211('giggle', 371 / 170, 'A baby giggling and clapping at a puppy') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art211('grandma', 156 / 125, 'A grandmother knitting a pink scarf'),
        art211('firefighter', 156 / 135, 'A smiling firefighter in front of a fire engine'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.2 mockups (a plain white page, so `art:cutout --page white`). Pages 1 and 4 show their scene under
  // the intro text (the white fence runs into every edge of page 1's picture, so its corners were rounded by hand),
  // page 2's rule examples each show their picture (the chef, the cousins), page 3's tiles are followed by the three
  // friends, and page 5's comparison shows Riya with her homework and with her tortoise (the cream column tint was
  // painted out first). Page 3's tiles take icons from LIST_ICONS; "Others" has none, since 1.4.1 uses that label for
  // determiners. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson
  // Complete screen reuses 1.2.8's.
  '2-1-2': {
    pages: {
      PAGE001: { art: art212('painting', 374 / 179, 'A boy painting a white garden fence') },
      PAGE003: { art: art212('helpers', 370 / 163, 'Three friends putting their hands together') },
      PAGE004: { art: art212('mangoes', 374 / 185, 'A girl asking "Does your brother like mangoes?" beside a basket of mangoes') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [
        art212('chef', 142 / 133, 'A chef chopping onions'),
        art212('cousins', 144 / 142, 'Two cousins with school bags beside a bus'),
      ],
    },
    comparisonArt: {
      BLOCK007: [
        art212('homework', 176 / 114, 'Riya writing in her homework book'),
        art212('tortoise', 182 / 112, 'Riya smiling at her pet tortoise'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.3 mockups (a plain white page, so `art:cutout --page white`; the swing's clouds touch its sides, so
  // those edges were kept, and Mira's thought bubble touches every edge, so her corners were rounded by hand). Page 1
  // shows its scene under the intro text, pages 2 and 4 each show one picture per example (the goalkeeper and Mira; the
  // honey jar and Arjun), and page 5's rule card is followed by the orchestra's pianos. Page 3's tiles take icons from
  // LIST_ICONS (a smiley, a brain, a house, an eye and a link), standing in for the mockup's. The recap's pencil is the
  // same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-3': {
    pages: {
      PAGE001: { art: art213('swing', 370 / 218, 'A toddler laughing on a swing under a tree') },
      PAGE005: { art: art213('orchestra', 382 / 156, 'Three grand pianos on a stage under an Orchestra sign') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art213('goalkeeper', 199 / 147, 'A goalkeeper diving for a football'),
        art213('choir', 200 / 158, 'A girl thinking about singing in a choir'),
      ],
      BLOCK007: [
        art213('honey', 196 / 148, 'A jar of honey between two flowers'),
        art213('ghost', 199 / 163, 'A boy thinking about a ghost'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.4 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows its scene under the intro
  // text, pages 3 and 4 picture each example (the puppy and the girl with an idea; the milk and the height chart), and
  // page 5's comparison shows the curry and Dad tasting it (their mint and pink column tints were painted out first).
  // Where white in the drawing runs into the frame (the puppy's fur, the height chart, the curry's steam, Dad's bowl) the
  // edges were kept and the corners rounded by hand. Page 2's tiles take icons from LIST_ICONS (a link, an eye and a
  // sprout), standing in for the mockup's pictures. The recap's pencil is the same drawing as 1.3.1's. The mockups have no
  // clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-4': {
    pages: {
      PAGE001: { art: art214('teacher', 373 / 194, 'A teacher pointing at a blackboard that says Teacher') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art214('puppy', 157 / 124, 'A hungry puppy with its tongue out'),
        art214('idea', 160 / 135, 'A girl with a light bulb idea'),
      ],
      BLOCK006: [
        art214('milk', 179 / 130, 'A bottle and a glass of milk'),
        art214('taller', 177 / 126, 'A boy beside a height chart with an arrow pointing up'),
      ],
    },
    comparisonArt: {
      BLOCK007: [art214('curry', 176 / 124, 'A steaming bowl of curry'), art214('dad', 182 / 132, 'A man tasting curry from a spoon')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.5 mockups (a plain white page, so `art:cutout --page white`; the cat's white body and Ravi's pillow
  // touch their frames, so those edges were kept and the cat's corners rounded by hand). Page 1 shows its scene under
  // the intro text, pages 2 and 3 picture each example (the cat and the coach; the train and the clapping hall), and
  // page 4's comparison shows Ravi reading a comic and reading in his room. The recap's pencil is the same drawing as
  // 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-5': {
    pages: {
      PAGE001: { art: art215('kite', 371 / 211, 'A girl holding a kite beside her laughing brother') },
      PAGE005: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [
        art215('cat', 191 / 142, 'A cat leaping at a moth'),
        art215('coach', 195 / 143, 'A coach giving a thumbs up beside his smiling team'),
      ],
      BLOCK005: [
        art215('train', 198 / 149, 'A train pulling in at platform two'),
        art215('hall', 203 / 136, 'Three children clapping in a hall'),
      ],
    },
    comparisonArt: {
      BLOCK006: [art215('comic', 180 / 137, 'Ravi reading a comic'), art215('room', 183 / 137, 'Ravi reading a book in his bedroom')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.6 mockups (a plain white page, so `art:cutout --page white`; the swimmer's splash touches both sides,
  // so those edges were kept and the corners rounded by hand). Pages 1–4 each show their scene (the swimmer, the
  // Base / Past / Past Participle stepping stones, Grandpa fixing the clock, the children at the bus), page 5's three
  // patterns show as tiles with icons from LIST_ICONS (scissors, a shopping bag, a microphone), as in the mockup, and
  // page 6 pictures each example (the choir, Mum's marigolds). The recap's pencil is the same drawing as 1.3.1's. The
  // mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-6': {
    pages: {
      PAGE001: { art: art216('swimmer', 308 / 132, 'A boy in goggles swimming happily') },
      PAGE002: { art: art216('stones', 312 / 204, 'A boy stepping across stones labelled Base, Past and Past Participle') },
      PAGE003: { art: art216('clock', 309 / 158, 'A grandfather fixing a wall clock with a screwdriver') },
      PAGE004: { art: art216('bus', 321 / 111, 'Two children hurrying to a yellow bus') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK009: [
        art216('choir', 216 / 144, 'Three children singing in a choir'),
        art216('marigolds', 218 / 139, 'A mother holding a bunch of marigolds'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.7 mockups (a plain white page, so `art:cutout --page white`; the bike's and Pune's clouds touch their
  // frames, so those edges were kept and the corners rounded by hand). Page 1 shows Asha painting, page 2's rule examples
  // each show their picture (the brother cycling, the family in Pune), page 3's tiles are followed by the lake, and page
  // 4's comparison shows Neha singing and Neha in the choir. Page 3's tiles take the verb-form icons from LIST_ICONS
  // (shared with 2.1.9), not the mockup's swimmers. Page 5's mockup pictures a different example ("I read a book in the library"), so
  // that page has no picture. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the
  // Lesson Complete screen reuses 1.2.8's.
  '2-1-7': {
    pages: {
      PAGE001: { art: art217('mural', 370 / 171, 'A girl painting a flower on an easel') },
      PAGE003: { art: art217('lake', 373 / 123, 'A boy and a girl in life jackets pointing at a lake') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [
        art217('bike', 184 / 148, 'A boy cycling to school'),
        art217('pune', 194 / 144, 'Two children in front of a building that says Pune'),
      ],
    },
    comparisonArt: {
      BLOCK006: [art217('sings', 177 / 122, 'Neha singing into a microphone'), art217('choir', 176 / 123, 'Neha singing in a choir')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.8 mockups (a plain white page, so `art:cutout --page white`). White clouds, Grandpa's thought bubble
  // and the doctor's coat run into their frames, so those edges were kept and the corners rounded by hand (Grandpa's
  // bubble loses the few pixels that rose above his frame). Pages 1 and 5 show their scene (Rahul with his French book,
  // the doctor), pages 2 and 4 picture each example (the pencil and Meena's tea; the idea and Grandpa), and page 3's
  // comparison shows the garden and the family having lunch. The recap's pencil is the same drawing as 1.3.1's. The
  // mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-8': {
    pages: {
      PAGE001: { art: art218('french', 370 / 193, 'A boy reading a French book, thinking of the French flag') },
      PAGE005: { art: art218('doctor', 374 / 166, 'A doctor with a clipboard seeing a boy and his mother') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK003: [art218('pencil', 182 / 147, 'A boy writing with a sharp pencil'), art218('tea', 182 / 132, 'A girl enjoying a cup of tea')],
      BLOCK006: [
        art218('idea', 186 / 154, 'A boy with a light bulb idea'),
        art218('grandpa', 189 / 157, 'A grandfather thinking about his old school'),
      ],
    },
    comparisonArt: {
      BLOCK004: [
        art218('garden', 171 / 132, 'A house with a big flower garden'),
        art218('lunch', 195 / 133, 'A family eating lunch in the garden'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.9 mockups (a plain white page, so `art:cutout --page white`; Isha's open book runs off the bottom of
  // her frame, so that edge was kept and the corners rounded by hand). Pages 1–4 each show their scene (Kabir jogging,
  // the "Verb Forms" board, Nani with her clock at the fair, the kids running), and page 5's example shows Isha writing.
  // Page 2's five forms show as tiles with icons from LIST_ICONS shared with 2.1.7 (text, an S, history, a double tick
  // and a clock); the mockup draws plain coloured labels. The recap's pencil is the same drawing as 1.3.1's. The mockups
  // have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-9': {
    pages: {
      PAGE001: { art: art219('jogger', 372 / 214, 'A boy jogging beside a lake') },
      PAGE002: { art: art219('board', 373 / 118, 'A girl pointing at a board that says Verb Forms') },
      PAGE003: { art: art219('clocks', 377 / 152, 'A grandmother fixing a clock near a fair') },
      PAGE004: { art: art219('racket', 372 / 119, 'A boy and a girl running and laughing') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK010: [art219('poems', 206 / 158, 'A girl writing poems in a notebook')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.10 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows Riya at the fridge,
  // page 3's rule card is followed by Arjun placing the vase, page 4 pictures each example (the ferry in the rain, the
  // puppy), and page 5's comparison shows Riya wondering and Riya at the bookshelf (her rose column tint was painted out
  // first; the shelf's clouds touch its frame top, so that edge was kept). Page 2's kinds are too long for tiles, so they
  // show as rows and the mockup's icons are not used. The recap's pencil is the same drawing as 1.3.1's. The mockups
  // have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-10': {
    pages: {
      PAGE001: { art: art2110('fridge', 374 / 183, 'A girl putting a carton of milk in the fridge') },
      PAGE003: { art: art2110('vase', 369 / 181, 'A boy placing a vase of flowers on a windowsill') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK006: [art2110('ferry', 197 / 88, 'A ferry on the water in the rain'), art2110('puppy', 180 / 87, 'A happy puppy')],
    },
    comparisonArt: {
      BLOCK007: [
        art2110('wonder', 178 / 158, 'A girl wondering, with a question mark'),
        art2110('shelf', 188 / 150, 'A girl putting books on the top shelf'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.11 mockups (a plain white page, so `art:cutout --page white`). Pages 1 and 4 show their scene under
  // the intro text (Leena with her guitar, the teacher and the line of children), pages 2 and 3 picture each example
  // (the storm and the vet; packing and the reading room), page 5's rule card is followed by the fireworks, and page 6's
  // comparison is followed by the boy feeling the drizzle (the mockup draws one picture for both sentences). The recap's
  // pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-11': {
    pages: {
      PAGE001: { art: art2111('guitar', 338 / 113, 'A girl singing and playing the guitar') },
      PAGE004: { art: art2111('teacher', 336 / 141, 'A teacher asking a line of children to line up') },
      PAGE005: { art: art2111('fireworks', 396 / 140, 'A mother and son watching fireworks at night') },
      PAGE006: { art: art2111('drizzle', 204 / 165, 'A boy in a raincoat holding out his hand to feel the drizzle') },
      PAGE007: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [art2111('storm', 204 / 116, 'A boy indoors watching a rainstorm'), art2111('vet', 204 / 127, 'A girl with a puppy and a paw sign')],
      BLOCK006: [
        art2111('packing', 210 / 118, 'A boy packing a suitcase'),
        art2111('quiet', 212 / 125, 'A girl with a finger to her lips beside a Reading Room sign'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.12 mockups (a plain white page, so `art:cutout --page white`; the "give up?" and radio speech
  // bubbles touch their frames, so every edge was kept and the corners rounded by hand). Page 1 shows the girl with her
  // puzzle, page 2's comparison shows the boy looking up at the stars and looking up a word (cropped above the mockup's
  // caption strips), page 4's rule example shows the fan, and page 5's rule card is followed by the girl and the radio.
  // Page 3's phrasal verbs show as tiles with icons from LIST_ICONS, standing in for the mockup's pictures. The recap's
  // pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-12': {
    pages: {
      PAGE001: { art: art2112('puzzle', 372 / 194, 'A girl at a jigsaw puzzle wondering whether to give up') },
      PAGE005: { art: art2112('radio', 366 / 163, 'A girl pointing at a loud radio, saying turn it down') },
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK003: [
        art2112('stars', 209 / 113, 'A boy looking up at the night sky'),
        art2112('dictionary', 210 / 129, 'A boy reading a dictionary'),
      ],
    },
    exampleArt: {
      BLOCK005: [art2112('fan', 122 / 148, 'A desk fan')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.13 mockups (a plain white page, so `art:cutout --page white`). Pages 2 and 3's comparisons and page
  // 5's make / do pictures sat on tinted columns (rose, cream, aqua), painted out first, with the column border lines
  // cleared. Page 1 shows the umbrella scene, pages 2 and 3 picture each column (borrow / lend, bring / take), pages 4,
  // 6 and 7 picture each example (Grandpa and the closed shop; thunder and the rainbow; the cat and the plates), and
  // page 5's girl baking and boy doing homework are joined into one picture under its two tiles. Page 7's rise / raise
  // note has no picture (the note block takes none). The recap's pencil is the same drawing as 1.3.1's. The mockups have
  // no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-1-13': {
    pages: {
      PAGE001: { art: art2113('umbrella', 337 / 143, 'A boy asking a girl to lend him her umbrella') },
      PAGE005: { art: art2113('makedo', 345 / 128, 'A girl making a cake, and a boy doing his homework') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    comparisonArt: {
      BLOCK003: [art2113('borrow', 164 / 129, 'A boy asking for a scooter'), art2113('lend', 162 / 132, 'A boy offering his scooter')],
      BLOCK004: [
        art2113('bring', 168 / 128, 'A boy bringing his notebook to his teacher'),
        art2113('take', 163 / 126, 'A boy walking away under an umbrella'),
      ],
    },
    exampleArt: {
      BLOCK005: [
        art2113('tell', 214 / 102, 'A boy telling his grandfather some news'),
        art2113('said', 217 / 108, 'A girl saying the shop is closed'),
      ],
      BLOCK009: [art2113('thunder', 219 / 100, 'A boy hearing thunder in a storm'), art2113('rainbow', 220 / 112, 'A girl looking at a rainbow')],
      BLOCK011: [art2113('cat', 167 / 102, 'A cat asleep in the sun'), art2113('plates', 162 / 103, 'A boy laying plates on a table')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.1.14 mockups (two sheets: pages 1–8, and the page 9 checklist; a plain white page, so
  // `art:cutout --page white`). Page 1 shows the boy checking for verbs, each mistake page 2–8 shows its scene with the
  // warning card (page 2's thought bubble rises above its frame, so the crop starts above it), and the checklist shows the
  // girl reading that its mockup draws instead of the usual pencil (cut free of the checklist rows beside her; the pale
  // glow under her desk is part of the drawing). The mockups have no clipboard, so the Lesson Complete screen reuses
  // 1.2.8's.
  '2-1-14': {
    pages: {
      PAGE001: { art: art2114('magnifier', 342 / 134, 'A boy with a magnifying glass checking a list of verbs') },
      PAGE002: { art: art2114('tall', 338 / 159, 'A girl thinking about her tall sister') },
      PAGE003: { art: art2114('guavas', 341 / 148, 'A boy holding a guava at a fruit stall') },
      PAGE004: { art: art2114('bookfair', 343 / 151, 'A boy arriving at a book fair') },
      PAGE005: { art: art2114('riddle', 341 / 154, 'A girl with an idea beside a riddle board') },
      PAGE006: { art: art2114('laptop', 341 / 166, 'A father letting two children use his laptop') },
      PAGE007: { art: art2114('trip', 342 / 163, 'Three children beside a School Trip poster') },
      PAGE008: { art: art2114('tv', 343 / 154, 'A boy turning down a noisy television with the remote') },
      PAGE009: { art: art2114('reader', 400 / 660, 'A girl with a pen, thinking over an open book') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.1 mockups (a plain white page, so `art:cutout --page white`). Pages 1, 2, 3 and 5 show their scene
  // (the giggling baby, the rain stopping before the match, the old clock, Sunday afternoon), page 4's rule example shows
  // Meena with the gift, and page 7's kinds are followed by the boy with the Adverbs Map (cut clear of the list rows beside
  // him in the mockup). Page 6's items each hold a question ("Manner – how? gently, well"), so they show as question rows
  // with answer chips, and the mockup's icons are not used. The recap's pencil is the same drawing as 1.3.1's. The mockups
  // have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-1': {
    pages: {
      PAGE001: { art: art221('baby', 341 / 127, 'A baby giggling in her cot beside a teddy bear') },
      PAGE002: { art: art221('rain', 338 / 126, 'Two children cheering as the rain clears over a football pitch') },
      PAGE003: { art: art221('clock', 341 / 139, 'An old mantel clock between books and a potted plant') },
      PAGE005: { art: art221('sunday', 341 / 110, 'Two children meeting beside a Sun Afternoon sign') },
      PAGE007: { art: art221('map', 152 / 322, 'A boy thinking over an open Adverbs Map') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK007: [art221('meena', 158 / 152, 'Meena with a neatly wrapped gift')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.2 mockups (a plain white page, so `art:cutout --page white`; the nurse's white uniform touches her
  // frame, so its edges were kept). Page 1 shows the nurse with the newborn, page 3 the boys drawing a house well and
  // badly, and page 7 three faces showing feelings (cropped above the mockup's adverb labels, which differ from the
  // content's). Pages 4–6 picture other sentences than the content's (a girl reading, a cake, a girl walking), so they
  // have no picture. The recap shows the boy writing that its mockup draws instead of the pencil (cut clear of the list
  // beside him). The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-2': {
    pages: {
      PAGE001: { art: art222('nurse', 341 / 152, 'A nurse gently holding a newborn baby') },
      PAGE003: { art: art222('drawings', 343 / 134, 'One boy proud of his house drawing, another unhappy with his scribble') },
      PAGE007: { art: art222('feelings', 340 / 118, 'A cheerful boy, a nervous girl and an angry boy') },
      PAGE008: { art: art222('writer', 152 / 246, 'A boy with a pen, smiling over an open book') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.3 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows the plumber with the
  // Tomorrow sign, page 3 pictures each time phrase (the cousins; the vegetable seller), page 5's rule example shows the
  // school bus, and page 6 shows Mum with her Next Month calendar under the rule, where its mockup draws it. Page 5's
  // paint pot pictures its note ("The paint isn't dry yet."), and the note block takes no picture. Page 2's books and
  // clock are decoration, and pages 4 and 7 have no pictures in the mockup. The recap's pencil is the same drawing as
  // 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-3': {
    pages: {
      PAGE001: { art: art223('plumber', 346 / 177, 'A plumber with a toolbox waving beside a Tomorrow sign') },
      PAGE006: { art: art223('job', 343 / 181, 'Mum happy about her new job, beside a Next Month calendar') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [
        art223('cousins', 216 / 130, 'Three smiling cousins'),
        art223('seller', 206 / 137, 'A vegetable seller with crates of greens and tomatoes'),
      ],
      BLOCK008: [art223('bus', 210 / 116, 'A yellow school bus')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.4 mockups (a plain white page, so `art:cutout --page white`; the keys and kite pictures have white
  // clouds on their right edge, so they were cropped just inside it and cut with `--keep-edge right`). Page 1 shows the
  // twins playing outside, page 3 the boy heading home at dusk under the rule (cropped below the rule card's tail), pages
  // 4, 5 and 7 picture each example (stepping back from the platform, the lift going down; the lost keys, the party
  // balloons; the bus arriving, the kite flying off), and page 6's rule example shows the boy carrying a box (cut clear of
  // the mockup's speech bubble, which repeats the example sentence). Page 6's put + the boxes + downstairs chips aren't
  // used: annotations must spell out the whole sentence ("Please" too) and replace the example's picture. Page 2's icons
  // are decoration. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson
  // Complete screen reuses 1.2.8's.
  '2-2-4': {
    pages: {
      PAGE001: { art: art224('twins', 340 / 188, 'A boy and a girl playing football outside') },
      PAGE003: { art: art224('home', 339 / 98, 'A boy with a school bag walking home as the sun sets') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK007: [
        art224('back', 181 / 100, 'A boy stepping back from the railway track'),
        art224('lift', 181 / 104, 'Lift doors with a down arrow'),
      ],
      BLOCK009: [
        art224('keys', 200 / 91, 'A worried boy thinking about his keys'),
        art224('balloons', 204 / 96, 'A girl waving at a party, with balloons and bunting'),
      ],
      BLOCK011: [art224('boxes', 150 / 132, 'A boy carrying a cardboard box')],
      BLOCK013: [
        art224('bus', 212 / 98, 'A boy waving as a yellow bus arrives'),
        art224('kite', 208 / 93, 'A girl waving as her kite flies away'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.5 mockups (a plain white page, so `art:cutout --page white`). The grandmother's pillow, the boy's
  // white shirt (page 4) and the dog's white chest run into the bottom of their frames, so those three were cropped just
  // inside it and cut with `--keep-edge bottom`. Page 1 shows the grandmother waking at five, and pages 4, 5 and 6 show
  // their scene under the rule, where the mockups draw it (Arun and his forgotten lunch box, the girl reading in the
  // library, the boy watching dolphins from the pier). Pages 3 and 7 picture each example (the restaurant, the dog and
  // the postman; the newspaper boy, the girl at her easel). Page 2's scale shows as tiles (always – every time …), and its
  // arrow and pages 4–6's word chips aren't used. The recap's pencil is the same drawing as 1.3.1's. The mockups have no
  // clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-5': {
    pages: {
      PAGE001: { art: art225('grandma', 340 / 160, 'A grandmother stretching in bed beside a clock showing five') },
      PAGE004: { art: art225('lunchbox', 340 / 151, 'A boy at school remembering his lunch box') },
      PAGE005: { art: art225('library', 340 / 138, 'A girl reading quietly in a library') },
      PAGE006: { art: art225('dolphins', 340 / 133, 'A boy with binoculars watching dolphins jump from the sea') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art225('restaurant', 212 / 111, 'A boy eating a meal at a restaurant table'),
        art225('dog', 212 / 104, 'A calm dog in the garden as the postman brings a letter'),
      ],
      BLOCK009: [
        art225('newspaper', 198 / 100, 'A newspaper boy holding the news'),
        art225('easel', 198 / 115, 'A girl painting a flower at an easel'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.6 mockups (a plain white page, so `art:cutout --page white`). Page 3's puzzle and fan sat on pale
  // blue example cards and page 4's boys on the mint (very) and pink (too) columns: that tint was flood-filled to white
  // from the crop edge first, then cut as usual (the boys and the puzzle with `--keep-edge bottom`, as the text cards
  // below cut through them). Page 1 shows the boy with his hot tea, page 3 pictures each example, page 4 each column, and
  // pages 5, 6 and 7 show their scene where the mockups draw it (the boy shivering by the river, the girl measuring the
  // rope, the boy at the sunset). Page 2's scale shows as tiles, and its arrow isn't used. The recap's pencil is the
  // same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-6': {
    pages: {
      PAGE001: { art: art226('tea', 342 / 188, 'A happy boy holding a steaming cup of tea') },
      PAGE005: { art: art226('river', 342 / 133, 'A boy shivering beside a cold river') },
      PAGE006: { art: art226('rope', 341 / 131, 'A girl holding a rope up to a measuring post') },
      PAGE007: { art: art226('sunset', 341 / 128, 'A delighted boy watching the sun set over a lake') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [art226('puzzle', 130 / 77, 'Three jigsaw puzzle pieces'), art226('fan', 166 / 80, 'A ceiling fan turning')],
    },
    comparisonArt: {
      BLOCK006: [
        art226('very', 150 / 118, 'A smiling boy carrying a heavy box'),
        art226('too', 160 / 117, 'A boy straining under a box that is too heavy'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.7 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows the boy thinking about
  // rain, page 3 the boy dreaming of the cricket match (the page's one picture, drawn with its comparison), page 4 each
  // rule example (the girl at the puppet show, the chemist outside his shop), and pages 5 and 6 their scene under the
  // rule (Raju at his laptop, the girl outside the bakery). Cut edges: the cricket dream bubble and Raju's desk run into
  // their frames (`--keep-edge top,bottom` / `bottom`); the chemist's white coat joins the page under his frame, so his
  // crop stops inside it (`--keep-edge bottom,left`). Page 7's pictures are two children whose speech bubbles hold the
  // dialogue itself, so that page has none; page 5's crossed-out "won't probably" row and page 2's scale arrow aren't
  // used (the scale shows as tiles). The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard,
  // so the Lesson Complete screen reuses 1.2.8's.
  '2-2-7': {
    pages: {
      PAGE001: { art: art227('rain', 340 / 168, 'A boy thinking about a rain cloud') },
      PAGE003: { art: art227('cricket', 344 / 124, 'A boy in a cricket cap dreaming of a match at the stadium') },
      PAGE005: { art: art227('raju', 338 / 128, 'A boy working at his laptop') },
      PAGE006: { art: art227('bakery', 338 / 140, 'A girl wondering outside a bakery') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [
        art227('puppet', 165 / 82, 'A smiling girl beside a puppet'),
        art227('chemist', 162 / 72, 'A chemist outside his shop'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.8 mockups (a plain white page, so `art:cutout --page white`; Ravi's pale pillow runs into the left
  // of his frame, so that picture was cropped just inside it and cut with `--keep-edge left`). Page 1 shows the children
  // waiting for the ferry, page 4 Ravi asleep at nine, and pages 5 and 7 their scene under the rule, where the mockups
  // draw it (the grandfather on his bicycle, cropped below the rule card; the boy outside Chennai station). Pages 3 and 6
  // picture each example (the principal at assembly, the closed bridge; Mrs Rao at the school, the corner shop's No Kites
  // sign). Page 2's words show as tiles, and their icons aren't used. The recap's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-8': {
    pages: {
      PAGE001: { art: art228('ferry', 341 / 173, 'Two children by the railing, watching a ferry arrive') },
      PAGE004: { art: art228('asleep', 339 / 141, 'A boy asleep in bed beside a clock showing nine') },
      PAGE005: { art: art228('grandpa', 341 / 171, 'A grandfather riding a red bicycle') },
      PAGE007: { art: art228('chennai', 341 / 114, 'A boy in front of a Chennai sign and a red station building') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [
        art228('principal', 197 / 117, 'A principal speaking at a microphone to the school'),
        art228('bridge', 197 / 110, 'A bridge blocked by a Bridge Closed sign'),
      ],
      BLOCK010: [
        art228('teacher', 201 / 89, 'Mrs Rao in front of the school'),
        art228('shop', 201 / 88, 'A corner shop with a No Kites sign'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.9 mockups (a plain white page, so `art:cutout --page white`). Page 6's boys sat on the cream (on
  // purpose) and pink (by accident) columns: that tint was flood-filled to white from the crop edge first, then cut as
  // usual. Page 1 shows the boy outside the flooded school, page 3's rule example the popcorn and clapperboard beside it,
  // page 4 and 7 picture each example (the ferry, Nikhil's savings jar; the goalkeeper, the deleted photos), page 5 the
  // girl hushing beside the sleeping baby, and page 6 each column. Page 3's "semicolon before / comma after" labels and
  // page 4's "Why?" tags aren't used. Page 2's words show as tiles. The recap's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-9': {
    pages: {
      PAGE001: { art: art229('flood', 340 / 172, 'A boy in the rain outside a flooded school with a School Closed sign') },
      PAGE005: { art: art229('whisper', 338 / 133, 'A girl with a finger to her lips beside a sleeping baby') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [art229('popcorn', 90 / 79, 'Popcorn and a film clapperboard')],
      BLOCK008: [
        art229('ferry', 197 / 112, 'A boy with a backpack watching a ferry'),
        art229('savings', 197 / 134, 'A boy holding a savings jar and dreaming of a cricket bat'),
      ],
      BLOCK013: [
        art229('goalie', 200 / 92, 'A goalkeeper waving in front of the goal'),
        art229('deleted', 203 / 92, 'A worried girl looking at a tablet that says Deleted'),
      ],
    },
    comparisonArt: {
      BLOCK011: [
        art229('purpose', 152 / 106, 'A smiling boy pushing over a tower of blocks'),
        art229('accident', 156 / 106, 'A surprised boy as a tower of blocks topples'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.10 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows the girl wondering, with
  // her When? Where? Why? How? bubbles (cropped from above the thought bubble, which rises over the frame, so its white
  // stays). Page 3 draws four question rows where the content has two, so only the askers of its two questions are used
  // (the boy for the concert, the boy in glasses for why). Page 4 shows the boy pointing, cut clear of the mockup's chip
  // list, which repeats the page's tiles (its clouds run into the page above the frame, so the crop starts below and is
  // cut with `--keep-edge top`). Page 7's calendar and hourglass sat on the blue and pink columns, painted white first.
  // Page 5 pictures other questions (a hill, practising) and page 6 has no picture, so neither has one. Page 2's icons
  // aren't used. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete
  // screen reuses 1.2.8's.
  '2-2-10': {
    pages: {
      PAGE001: { art: art2210('wonder', 339 / 155, 'A girl wondering, beside When, Where, Why and How bubbles') },
      PAGE004: { art: art2210('pointing', 157 / 227, 'A boy with a backpack pointing up with an idea') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [art2210('concert', 74 / 78, 'A smiling boy asking a question'), art2210('glasses', 74 / 80, 'A boy in glasses asking a question')],
    },
    comparisonArt: {
      BLOCK009: [art2210('calendar', 77 / 64, 'A calendar page showing December 10'), art2210('hourglass', 52 / 68, 'An hourglass with sand running')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.11 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows the boy cycling in the
  // park (cropped below the text card above it), page 2 the girl at Kochi under the rule, page 3 each example (the
  // puppy, the lights going out), page 5 the boy outside the watch shop under the rule, and pages 6 and 7 their example
  // scene (the stamp tin, the Sunday calendar). Page 4's question boy and Grandpa's village sat on the pink and mint
  // columns, painted white first; the boy's "?" bubble runs off the right of his crop, so it was cut with
  // `--keep-edge right`, and the big speech bubbles beside both are left out (they repeat the example sentences). Pages
  // 6 and 7's "in which / on which" rows aren't used. The recap's pencil is the same drawing as 1.3.1's. The mockups
  // have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-11': {
    pages: {
      PAGE001: { art: art2211('park', 342 / 137, 'A boy on his bike in the park, beside a Park sign') },
      PAGE002: { art: art2211('kochi', 338 / 150, 'A girl by the water at Kochi, with a houseboat behind her') },
      PAGE005: { art: art2211('watchshop', 340 / 136, 'A boy outside a watch shop') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK005: [
        art2211('puppy', 181 / 98, 'A happy boy hugging his new puppy'),
        art2211('lights', 181 / 101, 'A puzzled girl beside a lamp in the dark'),
      ],
      BLOCK008: [art2211('tin', 340 / 118, 'A boy opening a tin full of stamps')],
      BLOCK010: [art2211('sunday', 340 / 115, 'A girl pointing at a calendar showing Sunday')],
    },
    comparisonArt: {
      BLOCK006: [
        art2211('asking', 128 / 86, 'A puzzled boy with a question mark'),
        art2211('village', 178 / 100, 'Grandpa beside a village house'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.12 mockups (a plain white page, so `art:cutout --page white`). Each example's drawing runs into its
  // speech bubble (which repeats the sentence), so every crop stops just left of the bubble's tail; Karan's sky cloud
  // touches that edge, so his was cut with `--keep-edge right`. Page 1 shows the teacher laughing with the children,
  // page 3 each example (the grandmother's smartphone, the mangoes), page 4 each column (Mina with the cake, Mina eating
  // only the cake), page 5 the boy at the 10:00 clock under the rule, and pages 6 and 7 their rule examples (Priya with
  // the tabla; Karan and his sister singing). Page 6's school-band picture belongs to its note, which takes no picture,
  // so it isn't used. The recap's pencil is the same drawing as 1.3.1's. The mockups have no clipboard, so
  // the Lesson Complete screen reuses 1.2.8's.
  '2-2-12': {
    pages: {
      PAGE001: { art: art2212('teacher', 340 / 155, 'A teacher laughing with two children in front of a blackboard') },
      PAGE005: { art: art2212('clock', 338 / 143, 'A boy pointing at a clock showing 10:00') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art2212('grandma', 149 / 106, 'A grandmother smiling at her smartphone'),
        art2212('mangoes', 188 / 112, 'A girl eating a mango beside a plate of mangoes'),
      ],
      BLOCK007: [art2212('tabla', 183 / 109, 'A girl playing the tabla')],
      BLOCK009: [
        art2212('karan', 173 / 109, 'A boy singing into a microphone'),
        art2212('sister', 166 / 114, 'A girl singing into a microphone'),
      ],
    },
    comparisonArt: {
      BLOCK005: [
        art2212('onlymina', 173 / 104, 'A girl smiling with a slice of cake'),
        art2212('onlycake', 196 / 108, 'A girl eating a slice of cake'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.13 mockups (a plain white page, so `art:cutout --page white`). As in 2.2.12, each example's drawing
  // runs into a speech or thought bubble that repeats the sentence, so the crops stop short of it. Page 4's girl points
  // up at her thought bubble: the bubble's edge above her finger was painted over with the sky beside it, and she was
  // cut with `--keep-edge right`; page 3's two pictures were cropped short (sky and confetti above, the medal below) so
  // the page fits one screen, and cut with `--keep-edge top,bottom` (the knee bandage runs off the bottom). Page 1
  // shows the boy at the station, page 3 each example (the boy after his fall, the shy boy's trophy), page 4 the girl in
  // the rain under the rule, page 5 Leela with the puzzle, page 6 each column (the fallen banyan tree, the girl waving
  // from the bus), and page 7's rule example the boy answering honestly. Page 7's form picture belongs to its note,
  // which takes no picture, and page 2's icons aren't used (its words show as tiles). The recap's pencil is the same
  // drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-13': {
    pages: {
      PAGE001: { art: art2213('train', 340 / 140, 'A worried boy on a station platform beside a train') },
      PAGE004: { art: art2213('hopeful', 174 / 186, 'A girl in the rain pointing up hopefully') },
      PAGE005: { art: art2213('puzzle', 340 / 125, 'A girl holding a jigsaw piece over a finished puzzle') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK004: [
        art2213('fall', 164 / 116, 'A smiling boy with a bandaged knee giving a thumbs up'),
        art2213('trophy', 172 / 112, 'A smiling boy holding a trophy'),
      ],
      BLOCK009: [art2213('honest', 136 / 80, 'A boy raising his hand')],
    },
    comparisonArt: {
      BLOCK008: [
        art2213('tree', 182 / 94, 'A sad boy beside a fallen banyan tree'),
        art2213('bus', 180 / 102, 'A girl waving from a bus window'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.14 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows the boy and the barking
  // dog (the dog's white chest runs off the bottom, so `--keep-edge bottom`), page 3 the girl by the sea, page 4 the girl
  // singing at the concert under the rule, page 5 the boy at the zoo gate under the rule, page 6's rule example Anil
  // with his thumb up, and page 7 the boy before the creaking door. Anil sat on the mint "right" card beside a check
  // icon: the icon was blanked and the green card painted white before the cut. Page 6's wrong-way boy belongs to its
  // note, which takes no picture; the How? / Where? / When? and Place / Time chips under pages 4 and 5's sentences
  // aren't used. Page 2's kinds show as tiles, without the icons. The recap's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-14': {
    pages: {
      PAGE001: { art: art2214('dog', 342 / 134, 'A boy pointing up as his dog barks happily') },
      PAGE003: { art: art2214('sea', 345 / 113, 'A girl smiling by the sea, with a lighthouse behind her') },
      PAGE004: { art: art2214('concert', 345 / 132, 'A girl singing into a microphone outside a concert hall') },
      PAGE005: { art: art2214('zoo', 345 / 137, 'A boy pointing at the zoo gate, with an elephant inside') },
      PAGE007: { art: art2214('door', 345 / 120, 'A startled boy watching an old wooden door creak open') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK008: [art2214('anil', 126 / 94, 'A boy in glasses giving a thumbs up')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.15 mockups (a larger 1774×887 sheet; a plain white page, so `art:cutout --page white`). Each
  // drawing runs into a speech bubble that repeats its sentence, so the crops stop short of it; Grandpa's thumb and the
  // shopkeeper's hand reach under their bubbles, so the bubble's edge above them was painted over with the scenery
  // beside it (Grandpa then cut with `--keep-edge top,right`, keeping the pale window and sky). Page 1 shows the girl,
  // the loud radio and Dad; pages 2 and 4 each column (Kavya and her chess; the boy on his daily walk); page 3 Grandpa
  // feeling well; page 5 each example (the high wall, the eagle); page 6's example the boy straining to hear the radio;
  // page 7's rule example the friendly shopkeeper (the girl he speaks to sits under his bubble, so she is left out).
  // Page 3's feel good / feel well icons belong to its note, and page 6's pairs show as rows. The recap's pencil is
  // the same drawing as 1.3.1's. The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-15': {
    pages: {
      PAGE001: { art: art2215('music', 420 / 105, 'A girl and her dad beside a loud radio') },
      PAGE003: { art: art2215('grandpa', 225 / 136, 'A smiling grandfather in a blanket giving a thumbs up') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK008: [art2215('wall', 155 / 90, 'A boy looking up at a high stone wall'), art2215('eagle', 155 / 90, 'An eagle flying over green hills')],
      BLOCK011: [art2215('radio', 182 / 76, 'A boy leaning in to hear a radio')],
      BLOCK012: [art2215('shopkeeper', 212 / 165, 'A smiling shopkeeper reaching out a friendly hand')],
    },
    comparisonArt: {
      BLOCK003: [
        art2215('goodplayer', 120 / 92, 'A girl smiling beside a chess board'),
        art2215('playswell', 120 / 84, 'A girl moving a chess piece'),
      ],
      BLOCK007: [
        art2215('dailywalk', 133 / 96, 'A boy walking along a riverside path'),
        art2215('walkdaily', 133 / 92, 'A boy walking by the river'),
      ],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.16 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows the boy watching the
  // boat on a calm sea, page 3's example the happy puppy (cut from beside the word list, which covers the rest of its
  // scene), page 5 each example (the car rolling backwards, the fans heading home), page 6's example the hand turning
  // the jar lid, and page 7 the boy arriving as the guests wait. Several crops cut through white parts of the drawing
  // (the road's edge line, the fans' bunting and collars, the puppy's chest and clouds), so those edges were kept out of
  // the fill (`--keep-edge`). The crops stop short of the speech bubbles, which repeat the sentences. Pages 2–4's word
  // lists show as chips or rows, without the mockup's check marks. The recap's pencil is the same drawing as 1.3.1's.
  // The mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-16': {
    pages: {
      PAGE001: { art: art2216('boat', 342 / 144, 'A boy smiling at a boat on a calm blue sea') },
      PAGE007: { art: art2216('guests', 340 / 112, 'A boy arriving at a house where two guests are waiting') },
      PAGE008: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    exampleArt: {
      BLOCK006: [art2216('puppy', 122 / 176, 'A happy puppy with its tongue out')],
      BLOCK010: [
        art2216('car', 190 / 93, 'A red car rolling down a slope'),
        art2216('fans', 190 / 80, 'Cheering fans in caps with painted faces'),
      ],
      BLOCK013: [art2216('jar', 202 / 134, 'A hand turning the lid of a jam jar')],
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // Cut from the 2.2.17 mockups (a plain white page, so `art:cutout --page white`). Page 1 shows the boy pointing (cut
  // clear of the Watch out for board beside him, which repeats the page's list), and each common-mistake page 2–8 its
  // scene (the choir, Uncle Joe driving in the rain, the bakery, Tanvi at English Club, the library, Sunil studying, the
  // party). Pages 3 and 4 have two-line titles, so their frames start lower. Mistake pages open with their warning card,
  // so the picture sits with the Key Takeaway, as in 2.1.14. The checklist page has no mockup picture, so it uses
  // 1.3.1's pencil, and the mockups have no clipboard, so the Lesson Complete screen reuses 1.2.8's.
  '2-2-17': {
    pages: {
      PAGE001: { art: art2217('pointing', 168 / 195, 'A boy with a backpack pointing up') },
      PAGE002: { art: art2217('choir', 346 / 153, 'A girl singing into a microphone in front of the school choir') },
      PAGE003: { art: art2217('driving', 346 / 128, 'Uncle Joe driving on a wet road in the rain') },
      PAGE004: { art: art2217('bakery', 346 / 131, 'A girl smelling fresh bread outside a bakery') },
      PAGE005: { art: art2217('tanvi', 346 / 133, 'A girl beside an English Club blackboard') },
      PAGE006: { art: art2217('library', 346 / 133, 'A boy with a backpack outside the library') },
      PAGE007: { art: art2217('sunil', 346 / 133, 'A boy writing at his desk under a lamp, beside a pile of books') },
      PAGE008: { art: art2217('party', 346 / 133, 'Three friends clapping at a party with balloons') },
      PAGE009: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
  // 1.4.12's own pictures are still to be cut from its mockup; for now the recap uses 1.3.1's pencil and the Lesson
  // Complete screen 1.2.8's clipboard.
  '1-4-12': {
    pages: {
      PAGE006: { art: art131('pencil', 123 / 240, 'A smiling pencil giving a thumbs up, standing on two books') },
    },
    resultArt: art128('clipboard', 67 / 64, 'A checklist on a clipboard, with a pencil'),
  },
};

/** Lesson 2.2.17 artwork, cut from its mockups (`assets/lessons/2-2-17`). */
function art2217(name: Art2217, aspect: number, label: string): LessonArt {
  return { source: ART_2217[name], aspect, label };
}

/** Lesson 2.2.16 artwork, cut from its mockups (`assets/lessons/2-2-16`). */
function art2216(name: Art2216, aspect: number, label: string): LessonArt {
  return { source: ART_2216[name], aspect, label };
}

/** Lesson 2.2.15 artwork, cut from its mockups (`assets/lessons/2-2-15`). */
function art2215(name: Art2215, aspect: number, label: string): LessonArt {
  return { source: ART_2215[name], aspect, label };
}

/** Lesson 2.2.14 artwork, cut from its mockups (`assets/lessons/2-2-14`). */
function art2214(name: Art2214, aspect: number, label: string): LessonArt {
  return { source: ART_2214[name], aspect, label };
}

/** Lesson 2.2.13 artwork, cut from its mockups (`assets/lessons/2-2-13`). */
function art2213(name: Art2213, aspect: number, label: string): LessonArt {
  return { source: ART_2213[name], aspect, label };
}

/** Lesson 2.2.12 artwork, cut from its mockups (`assets/lessons/2-2-12`). */
function art2212(name: Art2212, aspect: number, label: string): LessonArt {
  return { source: ART_2212[name], aspect, label };
}

/** Lesson 2.2.11 artwork, cut from its mockups (`assets/lessons/2-2-11`). */
function art2211(name: Art2211, aspect: number, label: string): LessonArt {
  return { source: ART_2211[name], aspect, label };
}

/** Lesson 2.2.10 artwork, cut from its mockups (`assets/lessons/2-2-10`). */
function art2210(name: Art2210, aspect: number, label: string): LessonArt {
  return { source: ART_2210[name], aspect, label };
}

/** Lesson 2.2.9 artwork, cut from its mockups (`assets/lessons/2-2-9`). */
function art229(name: Art229, aspect: number, label: string): LessonArt {
  return { source: ART_229[name], aspect, label };
}

/** Lesson 2.2.8 artwork, cut from its mockups (`assets/lessons/2-2-8`). */
function art228(name: Art228, aspect: number, label: string): LessonArt {
  return { source: ART_228[name], aspect, label };
}

/** Lesson 2.2.7 artwork, cut from its mockups (`assets/lessons/2-2-7`). */
function art227(name: Art227, aspect: number, label: string): LessonArt {
  return { source: ART_227[name], aspect, label };
}

/** Lesson 2.2.6 artwork, cut from its mockups (`assets/lessons/2-2-6`). */
function art226(name: Art226, aspect: number, label: string): LessonArt {
  return { source: ART_226[name], aspect, label };
}

/** Lesson 2.2.5 artwork, cut from its mockups (`assets/lessons/2-2-5`). */
function art225(name: Art225, aspect: number, label: string): LessonArt {
  return { source: ART_225[name], aspect, label };
}

/** Lesson 2.2.4 artwork, cut from its mockups (`assets/lessons/2-2-4`). */
function art224(name: Art224, aspect: number, label: string): LessonArt {
  return { source: ART_224[name], aspect, label };
}

/** Lesson 2.2.3 artwork, cut from its mockups (`assets/lessons/2-2-3`). */
function art223(name: Art223, aspect: number, label: string): LessonArt {
  return { source: ART_223[name], aspect, label };
}

/** Lesson 2.2.2 artwork, cut from its mockups (`assets/lessons/2-2-2`). */
function art222(name: Art222, aspect: number, label: string): LessonArt {
  return { source: ART_222[name], aspect, label };
}

/** Lesson 2.2.1 artwork, cut from its mockups (`assets/lessons/2-2-1`). */
function art221(name: Art221, aspect: number, label: string): LessonArt {
  return { source: ART_221[name], aspect, label };
}

/** Lesson 2.1.14 artwork, cut from its mockups (`assets/lessons/2-1-14`). */
function art2114(name: Art2114, aspect: number, label: string): LessonArt {
  return { source: ART_2114[name], aspect, label };
}

/** Lesson 2.1.13 artwork, cut from its mockups (`assets/lessons/2-1-13`). */
function art2113(name: Art2113, aspect: number, label: string): LessonArt {
  return { source: ART_2113[name], aspect, label };
}

/** Lesson 2.1.12 artwork, cut from its mockups (`assets/lessons/2-1-12`). */
function art2112(name: Art2112, aspect: number, label: string): LessonArt {
  return { source: ART_2112[name], aspect, label };
}

/** Lesson 2.1.11 artwork, cut from its mockups (`assets/lessons/2-1-11`). */
function art2111(name: Art2111, aspect: number, label: string): LessonArt {
  return { source: ART_2111[name], aspect, label };
}

/** Lesson 2.1.10 artwork, cut from its mockups (`assets/lessons/2-1-10`). */
function art2110(name: Art2110, aspect: number, label: string): LessonArt {
  return { source: ART_2110[name], aspect, label };
}

/** Lesson 2.1.9 artwork, cut from its mockups (`assets/lessons/2-1-9`). */
function art219(name: Art219, aspect: number, label: string): LessonArt {
  return { source: ART_219[name], aspect, label };
}

/** Lesson 2.1.8 artwork, cut from its mockups (`assets/lessons/2-1-8`). */
function art218(name: Art218, aspect: number, label: string): LessonArt {
  return { source: ART_218[name], aspect, label };
}

/** Lesson 2.1.7 artwork, cut from its mockups (`assets/lessons/2-1-7`). */
function art217(name: Art217, aspect: number, label: string): LessonArt {
  return { source: ART_217[name], aspect, label };
}

/** Lesson 2.1.6 artwork, cut from its mockups (`assets/lessons/2-1-6`). */
function art216(name: Art216, aspect: number, label: string): LessonArt {
  return { source: ART_216[name], aspect, label };
}

/** Lesson 2.1.5 artwork, cut from its mockups (`assets/lessons/2-1-5`). */
function art215(name: Art215, aspect: number, label: string): LessonArt {
  return { source: ART_215[name], aspect, label };
}

/** Lesson 2.1.4 artwork, cut from its mockups (`assets/lessons/2-1-4`). */
function art214(name: Art214, aspect: number, label: string): LessonArt {
  return { source: ART_214[name], aspect, label };
}

/** Lesson 2.1.3 artwork, cut from its mockups (`assets/lessons/2-1-3`). */
function art213(name: Art213, aspect: number, label: string): LessonArt {
  return { source: ART_213[name], aspect, label };
}

/** Lesson 2.1.2 artwork, cut from its mockups (`assets/lessons/2-1-2`). */
function art212(name: Art212, aspect: number, label: string): LessonArt {
  return { source: ART_212[name], aspect, label };
}

/** Lesson 2.1.1 artwork, cut from its mockups (`assets/lessons/2-1-1`). */
function art211(name: Art211, aspect: number, label: string): LessonArt {
  return { source: ART_211[name], aspect, label };
}

/** Lesson 1.5.16 artwork, cut from its mockups (`assets/lessons/1-5-16`). */
function art1516(name: Art1516, aspect: number, label: string): LessonArt {
  return { source: ART_1516[name], aspect, label };
}

/** Lesson 1.5.15 artwork, cut from its mockups (`assets/lessons/1-5-15`). */
function art1515(name: Art1515, aspect: number, label: string): LessonArt {
  return { source: ART_1515[name], aspect, label };
}

/** Lesson 1.5.14 artwork, cut from its mockups (`assets/lessons/1-5-14`). */
function art1514(name: Art1514, aspect: number, label: string): LessonArt {
  return { source: ART_1514[name], aspect, label };
}

/** Lesson 1.5.13 artwork, cut from its mockups (`assets/lessons/1-5-13`). */
function art1513(name: Art1513, aspect: number, label: string): LessonArt {
  return { source: ART_1513[name], aspect, label };
}

/** Lesson 1.5.12 artwork, cut from its mockups (`assets/lessons/1-5-12`). */
function art1512(name: Art1512, aspect: number, label: string): LessonArt {
  return { source: ART_1512[name], aspect, label };
}

/** Lesson 1.5.11 artwork, cut from its mockups (`assets/lessons/1-5-11`). */
function art1511(name: Art1511, aspect: number, label: string): LessonArt {
  return { source: ART_1511[name], aspect, label };
}

/** Lesson 1.5.10 artwork, cut from its mockups (`assets/lessons/1-5-10`). */
function art1510(name: Art1510, aspect: number, label: string): LessonArt {
  return { source: ART_1510[name], aspect, label };
}

/** Lesson 1.5.9 artwork, cut from its mockups (`assets/lessons/1-5-9`). */
function art159(name: Art159, aspect: number, label: string): LessonArt {
  return { source: ART_159[name], aspect, label };
}

/** Lesson 1.5.3 artwork, cut from its mockups (`assets/lessons/1-5-3`). */
function art153(name: Art153, aspect: number, label: string): LessonArt {
  return { source: ART_153[name], aspect, label };
}

/** Lesson 1.5.2 artwork, cut from its mockups (`assets/lessons/1-5-2`). */
function art152(name: Art152, aspect: number, label: string): LessonArt {
  return { source: ART_152[name], aspect, label };
}

/** Lesson 1.5.1 artwork, cut from its mockups (`assets/lessons/1-5-1`). */
function art151(name: Art151, aspect: number, label: string): LessonArt {
  return { source: ART_151[name], aspect, label };
}

/** Lesson 1.4.16 artwork, cut from its mockups (`assets/lessons/1-4-16`). */
function art1416(name: Art1416, aspect: number, label: string): LessonArt {
  return { source: ART_1416[name], aspect, label };
}

/** Lesson 1.4.15 artwork, cut from its mockups (`assets/lessons/1-4-15`). */
function art1415(name: Art1415, aspect: number, label: string): LessonArt {
  return { source: ART_1415[name], aspect, label };
}

/** Lesson 1.4.14 artwork, cut from its mockups (`assets/lessons/1-4-14`). */
function art1414(name: Art1414, aspect: number, label: string): LessonArt {
  return { source: ART_1414[name], aspect, label };
}

/** Lesson 1.4.13 artwork, cut from its mockups (`assets/lessons/1-4-13`). */
function art1413(name: Art1413, aspect: number, label: string): LessonArt {
  return { source: ART_1413[name], aspect, label };
}

/** Lesson 1.4.11 artwork, cut from its mockups (`assets/lessons/1-4-11`). */
function art1411(name: Art1411, aspect: number, label: string): LessonArt {
  return { source: ART_1411[name], aspect, label };
}

/** Lesson 1.4.10 artwork, cut from its mockups (`assets/lessons/1-4-10`). */
function art1410(name: Art1410, aspect: number, label: string): LessonArt {
  return { source: ART_1410[name], aspect, label };
}

/** Lesson 1.4.9 artwork, cut from its mockups (`assets/lessons/1-4-9`). */
function art149(name: Art149, aspect: number, label: string): LessonArt {
  return { source: ART_149[name], aspect, label };
}

/** Lesson 1.4.8 artwork, cut from its mockups (`assets/lessons/1-4-8`). */
function art148(name: Art148, aspect: number, label: string): LessonArt {
  return { source: ART_148[name], aspect, label };
}

/** Lesson 1.4.7 artwork, cut from its mockups (`assets/lessons/1-4-7`). */
function art147(name: Art147, aspect: number, label: string): LessonArt {
  return { source: ART_147[name], aspect, label };
}

/** Lesson 1.4.6 artwork, cut from its mockups (`assets/lessons/1-4-6`). */
function art146(name: Art146, aspect: number, label: string): LessonArt {
  return { source: ART_146[name], aspect, label };
}

/** Lesson 1.4.5 artwork, cut from its mockups (`assets/lessons/1-4-5`). */
function art145(name: Art145, aspect: number, label: string): LessonArt {
  return { source: ART_145[name], aspect, label };
}

/** Lesson 1.4.4 artwork, cut from its mockups (`assets/lessons/1-4-4`). */
function art144(name: Art144, aspect: number, label: string): LessonArt {
  return { source: ART_144[name], aspect, label };
}

/** Lesson 1.4.3 artwork, cut from its mockups (`assets/lessons/1-4-3`). */
function art143(name: Art143, aspect: number, label: string): LessonArt {
  return { source: ART_143[name], aspect, label };
}

/** Lesson 1.4.2 artwork, cut from its mockups (`assets/lessons/1-4-2`). */
function art142(name: Art142, aspect: number, label: string): LessonArt {
  return { source: ART_142[name], aspect, label };
}

/** Lesson 1.4.1 artwork, cut from its mockups (`assets/lessons/1-4-1`). */
function art141(name: Art141, aspect: number, label: string): LessonArt {
  return { source: ART_141[name], aspect, label };
}

/** Lesson 1.3.15 artwork, cut from its mockups (`assets/lessons/1-3-15`). */
function art1315(name: Art1315, aspect: number, label: string): LessonArt {
  return { source: ART_1315[name], aspect, label };
}

/** Lesson 1.3.14 artwork, cut from its mockups (`assets/lessons/1-3-14`). */
function art1314(name: Art1314, aspect: number, label: string): LessonArt {
  return { source: ART_1314[name], aspect, label };
}

/** Lesson 1.3.13 artwork, cut from its mockups (`assets/lessons/1-3-13`). */
function art1313(name: Art1313, aspect: number, label: string): LessonArt {
  return { source: ART_1313[name], aspect, label };
}

/** Lesson 1.3.12 artwork, cut from its mockups (`assets/lessons/1-3-12`). */
function art1312(name: Art1312, aspect: number, label: string): LessonArt {
  return { source: ART_1312[name], aspect, label };
}

/** Lesson 1.3.11 artwork, cut from its mockups (`assets/lessons/1-3-11`). */
function art1311(name: Art1311, aspect: number, label: string): LessonArt {
  return { source: ART_1311[name], aspect, label };
}

/** Lesson 1.3.10 artwork, cut from its mockups (`assets/lessons/1-3-10`). */
function art1310(name: Art1310, aspect: number, label: string): LessonArt {
  return { source: ART_1310[name], aspect, label };
}

/** Lesson 1.3.9 artwork, cut from its mockups (`assets/lessons/1-3-9`). */
function art139(name: Art139, aspect: number, label: string): LessonArt {
  return { source: ART_139[name], aspect, label };
}

/** Lesson 1.3.8 artwork, cut from its mockups (`assets/lessons/1-3-8`). */
function art138(name: Art138, aspect: number, label: string): LessonArt {
  return { source: ART_138[name], aspect, label };
}

/** Lesson 1.3.7 artwork, cut from its mockups (`assets/lessons/1-3-7`). */
function art137(name: Art137, aspect: number, label: string): LessonArt {
  return { source: ART_137[name], aspect, label };
}

/** Lesson 1.3.6 artwork, cut from its mockups (`assets/lessons/1-3-6`). */
function art136(name: Art136, aspect: number, label: string): LessonArt {
  return { source: ART_136[name], aspect, label };
}

/** Lesson 1.3.5 artwork, cut from its mockups (`assets/lessons/1-3-5`). */
function art135(name: Art135, aspect: number, label: string): LessonArt {
  return { source: ART_135[name], aspect, label };
}

/** Lesson 1.3.4 artwork, cut from its mockups (`assets/lessons/1-3-4`). */
function art134(name: Art134, aspect: number, label: string): LessonArt {
  return { source: ART_134[name], aspect, label };
}

/** Lesson 1.3.3 artwork, cut from its mockups (`assets/lessons/1-3-3`). */
function art133(name: Art133, aspect: number, label: string): LessonArt {
  return { source: ART_133[name], aspect, label };
}

/** Lesson 1.3.2 artwork, cut from its mockups (`assets/lessons/1-3-2`). */
function art132(name: Art132, aspect: number, label: string): LessonArt {
  return { source: ART_132[name], aspect, label };
}

/** Lesson 1.3.1 artwork, cut from its mockups (`assets/lessons/1-3-1`). */
function art131(name: Art131, aspect: number, label: string): LessonArt {
  return { source: ART_131[name], aspect, label };
}

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
  meals: 'rice',
  languages: 'translate',
  subjects: 'book-open-page-variant',
  sports: 'hockey-sticks',
  'days and months': 'calendar-month-outline',
  'one countable thing': 'pen',
  plural: 'pencil-box-multiple-outline',
  uncountable: 'bottle-tonic-outline',
  shape: 'basketball',
  age: 'bank-outline',
  feel: 'hand-back-left-outline',
  'taste and smell': 'fruit-citrus',
  sound: 'bullhorn-outline',
  feelings: 'emoticon-happy-outline',
  opinion: 'thumb-up-outline',
  origin: 'flag-outline',
  material: 'texture-box',
  purpose: 'pot-steam-outline',
  of: 'heart-outline',
  at: 'trophy-outline',
  in: 'binoculars',
  to: 'handshake-outline',
  from: 'earth',
  for: 'star-outline',
  '-y': 'weather-pouring',
  '-ous': 'alert-outline',
  '-ive': 'run-fast',
  '-able': 'tshirt-crew-outline',
  '-al': 'leaf',
  '-ish': 'baby-face-outline',
  '-ic': 'medal-outline',
  '-en': 'gold',
  'forms of be': 'equal-box',
  'forms of have': 'book-multiple-outline',
  'forms of do': 'clipboard-check-outline',
  thinking: 'brain',
  having: 'home-outline',
  senses: 'eye-outline',
  being: 'link-variant',
  change: 'sprout-outline',
  'all three the same': 'content-cut',
  'two the same': 'shopping-outline',
  'all different': 'microphone-variant',
  // Verb forms (2.1.7, 2.1.9): one set, so the same form looks the same in every lesson.
  base: 'format-text',
  'to + base': 'arrow-right-box',
  '-s form': 'alpha-s-box-outline',
  past: 'history',
  'past participle': 'check-all',
  '-ing form': 'progress-clock',
  'give up': 'emoticon-sad-outline',
  'look after': 'hand-heart-outline',
  'turn down': 'volume-minus',
  'find out': 'magnify',
  'run out of': 'cup-outline',
  'get on with': 'account-multiple-outline',
};

export const visualsFor = (contentTopicId: string): LessonVisuals | undefined => LESSON_VISUALS[contentTopicId];
