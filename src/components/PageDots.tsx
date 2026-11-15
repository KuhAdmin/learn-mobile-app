import { StyleSheet, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, type SharedValue } from 'react-native-reanimated';

import { colors, space } from '@/theme/tokens';

interface PageDotsProps {
  count: number;
  /** Fractional page index driven by the pager's scroll offset. */
  progress: SharedValue<number>;
}

const DOT = 7;
const ACTIVE_WIDTH = 20;

function Dot({ index, progress }: { index: number; progress: SharedValue<number> }) {
  const style = useAnimatedStyle(() => {
    const distance = Math.min(Math.abs(progress.value - index), 1);
    return {
      width: interpolate(distance, [0, 1], [ACTIVE_WIDTH, DOT]),
      opacity: interpolate(distance, [0, 1], [1, 0.25]),
    };
  });
  return <Animated.View style={[styles.dot, style]} />;
}

/** Animated page indicator: the active dot stretches into a pill and tracks the swipe. */
export function PageDots({ count, progress }: PageDotsProps) {
  return (
    <View style={styles.row} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {Array.from({ length: count }, (_, i) => (
        <Dot key={i} index={i} progress={progress} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: space.sm, height: 16 },
  dot: { height: DOT, borderRadius: DOT / 2, backgroundColor: colors.ink },
});
