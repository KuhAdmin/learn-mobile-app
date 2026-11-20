import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, type ImageSource } from 'expo-image';
import { useId } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';
import Svg, { Circle, Defs, Pattern, Polygon } from 'react-native-svg';

import type { IconName } from '@/data/options';
import { borderWidth, colors, radii } from '@/theme/tokens';

/**
 * Phase-1 placeholder art. Each name maps to one future illustration from the mockup;
 * swap the body of this component for real artwork without touching any screen layout.
 */
export type IllustrationName = 'mascot' | 'books' | 'blocks' | 'calendar' | 'bell' | 'plan' | 'idcard' | 'stage4' | 'stage5';

const ICONS: Record<IllustrationName, IconName> = {
  mascot: 'book-open-page-variant',
  books: 'bookshelf',
  blocks: 'alphabetical-variant',
  calendar: 'calendar-clock',
  bell: 'bell-outline',
  plan: 'book-education-outline',
  idcard: 'card-account-details-outline',
  // Learning Path stages 4–5: placeholders until dedicated stage art arrives.
  stage4: 'link-variant',
  stage5: 'feather',
};

/** Final artwork, as it arrives. Names listed here render the image instead of the placeholder. */
const ARTWORK: Partial<Record<IllustrationName, { source: ImageSource; aspect: number }>> = {
  // Animated GIF (8 frames, transparent). expo-image plays it on iOS + Android, incl. Expo Go.
  mascot: { source: require('../../assets/brand/mascot-walking.gif'), aspect: 1 },
  // Includes its own salmon dotted base.
  books: { source: require('../../assets/illustrations/welcome-books.webp'), aspect: 1257 / 1160 },
  blocks: { source: require('../../assets/illustrations/grammar-first-blocks.webp'), aspect: 1320 / 1191 },
  calendar: { source: require('../../assets/illustrations/daily-time-calendar.webp'), aspect: 1536 / 1024 },
  bell: { source: require('../../assets/illustrations/reminder-bell.webp'), aspect: 1494 / 1052 },
  plan: { source: require('../../assets/illustrations/plan-books.webp'), aspect: 1536 / 1024 },
  idcard: { source: require('../../assets/illustrations/name-idcard.webp'), aspect: 1431 / 1008 },
};

const LABELS: Record<IllustrationName, string> = {
  mascot: 'Cheerful pencil and book walking together',
  books: 'Two books, the top one labelled English, with a graduation cap',
  blocks: 'A large G block beside a smaller V block',
  calendar: 'Mint desk calendar with checkmarks beside a clock',
  bell: 'Ringing reminder bell',
  plan: 'Grammar book stacked on a Vocabulary book',
  idcard: 'Name badge with a profile picture',
  stage4: 'Linked chain',
  stage5: 'Feather pen',
};

interface IllustrationProps {
  name: IllustrationName;
  size?: number;
  /** Hide from screen readers when the art only decorates nearby text. */
  decorative?: boolean;
}

/** Placeholder: outlined block with a line icon, sitting on the salmon dotted "shadow" motif. */
export function Illustration({ name, size = 200, decorative = false }: IllustrationProps) {
  const patternId = `dots-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const art = ARTWORK[name];
  const reduceMotion = useReducedMotion();

  if (art) {
    // `size` is the height budget; width follows the artwork's aspect ratio.
    return (
      <Image
        source={art.source}
        style={[styles.art, { width: size * art.aspect, height: size }]}
        contentFit="contain"
        // Respect the OS "Reduce motion" setting: show the first frame only.
        autoplay={!reduceMotion}
        // expo-image forwards `accessible` to the DOM on web (React warning); it only matters on native.
        accessible={Platform.OS === 'web' ? undefined : !decorative}
        aria-hidden={decorative || undefined}
        accessibilityRole={decorative ? undefined : 'image'}
        accessibilityLabel={decorative ? undefined : LABELS[name]}
        importantForAccessibility={decorative ? 'no-hide-descendants' : 'auto'}
      />
    );
  }

  const block = size * 0.52;
  const shadowW = size * 0.95;
  const shadowH = size * 0.36;

  return (
    <View
      style={[styles.wrap, { width: size, height: size * 0.82 }]}
      accessible={!decorative}
      accessibilityRole={decorative ? undefined : 'image'}
      accessibilityLabel={decorative ? undefined : LABELS[name]}
      importantForAccessibility={decorative ? 'no-hide-descendants' : 'auto'}
    >
      <Svg width={shadowW} height={shadowH} style={[styles.shadow, { left: (size - shadowW) / 2 }]}>
        <Defs>
          <Pattern id={patternId} patternUnits="userSpaceOnUse" width={7} height={7}>
            <Circle cx={3.5} cy={3.5} r={1.4} fill={colors.accentSalmon} />
          </Pattern>
        </Defs>
        <Polygon
          points={`${shadowW / 2},0 ${shadowW},${shadowH / 2} ${shadowW / 2},${shadowH} 0,${shadowH / 2}`}
          fill={`url(#${patternId})`}
        />
      </Svg>
      <View
        style={[
          styles.block,
          { width: block, height: block, borderRadius: radii.block, marginBottom: shadowH * 0.45 },
        ]}
      >
        <View style={[styles.accent, { width: block * 0.62, height: block * 0.62, borderRadius: block }]} />
        <MaterialCommunityIcons name={ICONS[name]} size={block * 0.5} color={colors.ink} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignSelf: 'center', alignItems: 'center', justifyContent: 'flex-end' },
  // maxWidth keeps wide art inside the gutters on narrow phones; contentFit keeps its proportions.
  art: { alignSelf: 'center', maxWidth: '100%' },
  shadow: { position: 'absolute', bottom: 0 },
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
    transform: [{ rotate: '-6deg' }],
  },
  accent: { position: 'absolute', backgroundColor: colors.accentTeal, opacity: 0.55 },
});
