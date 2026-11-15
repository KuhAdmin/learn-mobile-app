import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { AppText } from '@/components/AppText';
import { Sparkle } from '@/components/Sparkle';
import { colors, fonts, sizes, space } from '@/theme/tokens';

interface PathHeaderProps {
  stageNumber: number;
  stageCount: number;
}

/** Pinned page title + stage-level progress ("Course N of 5"). */
export function PathHeader({ stageNumber, stageCount }: PathHeaderProps) {
  const fraction = useSharedValue(stageNumber / stageCount);

  useEffect(() => {
    fraction.value = withTiming(stageNumber / stageCount, { duration: 300 });
  }, [fraction, stageNumber, stageCount]);

  const fill = useAnimatedStyle(() => ({ width: `${fraction.value * 100}%` }));

  return (
    <View style={styles.wrap}>
      <View style={styles.titleRow}>
        <AppText variant="h1" style={styles.title} accessibilityRole="header">
          Your Learning Path
        </AppText>
        <Sparkle style={styles.sparkle} />
      </View>
      <AppText variant="label" style={styles.stage} accessibilityLiveRegion="polite">
        {`Course ${stageNumber} of ${stageCount}`}
      </AppText>
      <View
        style={styles.track}
        accessible
        accessibilityRole="progressbar"
        accessibilityLabel="Course progress"
        accessibilityValue={{ min: 0, max: stageCount, now: stageNumber }}
      >
        <Animated.View style={[styles.fill, fill]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: sizes.gutter,
    paddingTop: space.md,
    paddingBottom: space.md,
    gap: space.xs,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  titleRow: { flexDirection: 'row', alignItems: 'flex-start' },
  title: { fontFamily: fonts.serifBold, fontSize: 30, lineHeight: 38 },
  sparkle: { marginLeft: 2, marginTop: -4 },
  stage: { color: colors.inkMuted },
  track: { height: 8, borderRadius: 4, backgroundColor: colors.switchOff, overflow: 'hidden', marginTop: space.xs },
  fill: { height: '100%', borderRadius: 4, backgroundColor: colors.pathTeal },
});
