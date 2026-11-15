import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { colors, fonts, radii, space } from '@/theme/tokens';

const LEVELS = ['COURSE', 'CHAPTER', 'LESSON'];

/** Small secondary cue explaining how the path is organised. */
export function HierarchyLegend() {
  return (
    <View
      style={styles.chip}
      accessible
      accessibilityLabel="The path is organised by course, then chapter, then lesson"
    >
      {LEVELS.map((label, i) => (
        <View key={label} style={styles.item}>
          {i > 0 ? <MaterialCommunityIcons name="arrow-right" size={14} color={colors.ink} /> : null}
          <AppText variant="caption" style={styles.text} maxFontSizeMultiplier={1.2}>
            {label}
          </AppText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    marginTop: space.lg,
    paddingHorizontal: space.lg,
    paddingVertical: 6,
    borderRadius: radii.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.accentTeal,
    backgroundColor: colors.surface,
  },
  item: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  text: { fontFamily: fonts.sansSemiBold, fontSize: 11, letterSpacing: 0.8, color: colors.ink },
});
