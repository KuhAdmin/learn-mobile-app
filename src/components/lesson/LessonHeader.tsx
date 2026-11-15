import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Illustration, type IllustrationName } from '@/components/Illustration';
import { borderWidth, colors, fonts, radii, sizes, space } from '@/theme/tokens';

interface LessonHeaderProps {
  stageTitle: string;
  stageArt: IllustrationName;
  /** Right-hand pill, e.g. "3 / 8" or "Quiz 1/4". */
  counter?: string;
  counterLabel?: string;
  onBack: () => void;
}

/** Lesson top bar: back · course art | course name · position pill. */
export function LessonHeader({ stageTitle, stageArt, counter, counterLabel, onBack }: LessonHeaderProps) {
  return (
    <View style={styles.bar}>
      <Pressable
        onPress={onBack}
        hitSlop={sizes.hitSlop}
        accessibilityRole="button"
        accessibilityLabel="Back"
        style={({ pressed }) => [styles.back, pressed && styles.pressed]}
      >
        <MaterialCommunityIcons name="chevron-left" size={32} color={colors.ink} />
      </Pressable>
      <Illustration name={stageArt} size={34} decorative />
      <View style={styles.divider} />
      <AppText style={styles.stage} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8} maxFontSizeMultiplier={1.2}>
        {stageTitle}
      </AppText>
      {counter ? (
        <View style={styles.pill} accessible accessibilityLabel={counterLabel ?? counter}>
          <AppText style={styles.pillText} maxFontSizeMultiplier={1.2}>
            {counter}
          </AppText>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    minHeight: 56,
    paddingLeft: space.sm,
    paddingRight: sizes.gutter - 4,
  },
  back: { width: 36, height: sizes.minTouch, alignItems: 'center', justifyContent: 'center' },
  pressed: { opacity: 0.6 },
  divider: { width: 1.5, height: 28, backgroundColor: colors.ink },
  stage: { flex: 1, fontFamily: fonts.serifBold, fontSize: 17, lineHeight: 22, color: colors.ink },
  pill: {
    paddingHorizontal: space.md,
    paddingVertical: 4,
    borderRadius: radii.pill,
    borderWidth,
    borderColor: colors.ink,
  },
  pillText: { fontFamily: fonts.serifBold, fontSize: 15, lineHeight: 20, color: colors.ink },
});
