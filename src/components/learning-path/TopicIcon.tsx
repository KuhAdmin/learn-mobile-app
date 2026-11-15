import type { ReactNode } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import type { TopicIconName } from '@/learning-path/topic-icons';
import { colors } from '@/theme/tokens';

/**
 * The Learning Path mockup's topic icons (star, puzzle, Aa, layers, magnifier, open book), redrawn as
 * vectors on a 48×48 grid: thick ink outline + soft accent fill. Vectors stay crisp at node size and
 * can be drawn `muted` (grey) for locked lessons, which a cropped bitmap could not.
 */
interface Palette {
  ink: string;
  paper: string;
  star: string;
  mint: string;
  coral: string;
  peach: string;
  line: string;
}

const FULL: Palette = {
  ink: colors.ink,
  paper: colors.surface,
  star: '#F6D488',
  mint: colors.accentTeal,
  coral: colors.accentSalmon,
  peach: '#F8CDBE',
  line: colors.inkSubtle,
};

const MUTED: Palette = {
  ink: colors.inkSubtle,
  paper: '#F4F8F9',
  star: '#DCE6E8',
  mint: '#DCE6E8',
  coral: '#DCE6E8',
  peach: '#E8EFF0',
  line: colors.disabled,
};

const STROKE = 2.6;

const STAR =
  'M ' +
  Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const r = i % 2 ? 9.2 : 18;
    return `${(24 + r * Math.cos(a)).toFixed(2)} ${(25.5 + r * Math.sin(a)).toFixed(2)}`;
  }).join(' L ') +
  ' Z';

// Jigsaw piece: knobs out of the top, right and left edges.
const PUZZLE =
  'M13 18 H20.5 A5 5 0 1 1 27.5 18 H35 V25.5 A5 5 0 1 1 35 32.5 V40 H13 V32.5 A5 5 0 1 1 13 25.5 Z';

const BIG_A = 'M6 39 L15.5 11 L25 39 M9.6 29.5 H21.4';
const SMALL_A = 'M42.8 32.5 A6 6 0 1 1 30.8 32.5 A6 6 0 1 1 42.8 32.5 M42.8 26 V39';

const diamond = (y: number) => `M24 ${y} L42 ${y + 9} L24 ${y + 18} L6 ${y + 9} Z`;

const PAGE_LINES_LEFT = [17.5, 23, 28.5].map((y) => `M11.5 ${y} C14.5 ${y - 0.5} 17.5 ${y - 0.3} 20 ${y + 0.7}`).join(' ');
const PAGE_LINES_RIGHT = [17.5, 23, 28.5].map((y) => `M36.5 ${y} C33.5 ${y - 0.5} 30.5 ${y - 0.3} 28 ${y + 0.7}`).join(' ');

const outline = (p: Palette) =>
  ({ stroke: p.ink, strokeWidth: STROKE, strokeLinejoin: 'round', strokeLinecap: 'round' }) as const;

/** Letters drawn as a thick ink stroke with a thinner colour stroke on top, so they read as outlined glyphs. */
function OutlinedStroke({ d, fill, p }: { d: string; fill: string; p: Palette }) {
  return (
    <>
      <Path d={d} fill="none" stroke={p.ink} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
      <Path d={d} fill="none" stroke={fill} strokeWidth={3.6} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

const DRAW: Record<TopicIconName, (p: Palette) => ReactNode> = {
  star: (p) => <Path d={STAR} fill={p.star} {...outline(p)} />,
  puzzle: (p) => <Path d={PUZZLE} fill={p.mint} {...outline(p)} />,
  letters: (p) => (
    <>
      <OutlinedStroke d={BIG_A} fill={p.coral} p={p} />
      <OutlinedStroke d={SMALL_A} fill={p.peach} p={p} />
    </>
  ),
  layers: (p) => (
    <>
      <Path d={diamond(21)} fill={p.paper} {...outline(p)} />
      <Path d={diamond(14.5)} fill={p.paper} {...outline(p)} />
      <Path d={diamond(8)} fill={p.paper} {...outline(p)} />
    </>
  ),
  search: (p) => (
    <>
      <OutlinedStroke d="M20 28 L9.5 38.5" fill={p.mint} p={p} />
      <Circle cx={28} cy={20} r={11} fill={p.paper} {...outline(p)} />
    </>
  ),
  book: (p) => (
    <>
      <Path d="M4 16 V39.5 H19 C21.5 39.5 23 40.5 24 42.5 C25 40.5 26.5 39.5 29 39.5 H44 V16" fill={p.mint} {...outline(p)} />
      <Path d="M24 14 C20 10.5 14 10 7.5 11.5 V35 C14 33.5 20 34 24 37.5 Z" fill={p.paper} {...outline(p)} />
      <Path d="M24 14 C28 10.5 34 10 40.5 11.5 V35 C34 33.5 28 34 24 37.5 Z" fill={p.paper} {...outline(p)} />
      <Path d={`${PAGE_LINES_LEFT} ${PAGE_LINES_RIGHT}`} fill="none" stroke={p.line} strokeWidth={1.8} strokeLinecap="round" />
    </>
  ),
};

export function TopicIcon({ name, size, muted = false }: { name: TopicIconName; size: number; muted?: boolean }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      {DRAW[name](muted ? MUTED : FULL)}
    </Svg>
  );
}
