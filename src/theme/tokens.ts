import type { TextStyle } from 'react-native';

/** Global palette: pale aqua background, black (ink) foreground, teal + salmon accents. */
export const colors = {
  bg: '#EBF5F7',
  // Pure white so cards still lift slightly off the off-white background.
  surface: '#FFFFFF',
  ink: '#111111',
  inkMuted: '#48595C',
  inkSubtle: '#7A8C90',
  onInk: '#FFFFFF',
  // A step deeper than the aqua background so selected cards stay distinct.
  selectedFill: '#CDE9E1',
  accentTeal: '#9FD3C7',
  // Deeper teal for the learning path (current node, completed checks, travelled line); white icons stay legible on it.
  pathTeal: '#2A9D8F',
  accentSalmon: '#F2A08B',
  // Lesson word chips + answer feedback: soft salmon and mint washes.
  peachFill: '#FAD6C9',
  mintCard: '#DDF0EA',
  wrongFill: '#FDEBE4',
  divider: '#CFE0E4',
  disabled: '#B3C6CA',
  switchOff: '#CCDEE2',
} as const;

export const fonts = {
  serif: 'Fraunces_600SemiBold',
  serifBold: 'Fraunces_700Bold',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_500Medium',
  sansSemiBold: 'Inter_600SemiBold',
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radii = {
  card: 18,
  block: 24,
  pill: 999,
} as const;

export const borderWidth = 1.5;

export const sizes = {
  buttonHeight: 52,
  pillHeight: 50,
  hitSlop: 12,
  minTouch: 44,
  gutter: 24,
} as const;

export const type = {
  display: { fontFamily: fonts.serifBold, fontSize: 56, lineHeight: 64, color: colors.ink },
  h1: { fontFamily: fonts.serif, fontSize: 28, lineHeight: 34, color: colors.ink },
  title: { fontFamily: fonts.sansSemiBold, fontSize: 16, lineHeight: 22, color: colors.ink },
  label: { fontFamily: fonts.sansMedium, fontSize: 15, lineHeight: 20, color: colors.ink },
  body: { fontFamily: fonts.sans, fontSize: 15, lineHeight: 22, color: colors.inkMuted },
  caption: { fontFamily: fonts.sans, fontSize: 13, lineHeight: 18, color: colors.inkMuted },
  button: { fontFamily: fonts.sansSemiBold, fontSize: 17, lineHeight: 22, color: colors.onInk },
} satisfies Record<string, TextStyle>;

export type TypeVariant = keyof typeof type;
