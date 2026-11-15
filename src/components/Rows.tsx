import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Switch, View } from 'react-native';

import type { IconName } from '@/data/options';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

import { AppText } from './AppText';

interface ToggleRowProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

/** Bordered row with a black/white switch. */
export function ToggleRow({ label, value, onValueChange }: ToggleRowProps) {
  return (
    <View style={styles.row}>
      <AppText variant="label" style={styles.flex}>
        {label}
      </AppText>
      <Switch
        value={value}
        onValueChange={onValueChange}
        accessibilityLabel={label}
        trackColor={{ true: colors.ink, false: colors.switchOff }}
        thumbColor={colors.onInk}
        ios_backgroundColor={colors.switchOff}
      />
    </View>
  );
}

interface ValueRowProps {
  label: string;
  value: string;
  onPress: () => void;
  disabled?: boolean;
}

/** Bordered row showing a value with a chevron; opens a picker. */
export function ValueRow({ label, value, onPress, disabled = false }: ValueRowProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={`${label}, ${value}`}
      style={({ pressed }) => [styles.row, disabled && styles.disabled, pressed && { opacity: 0.85 }]}
    >
      <AppText variant="label" style={styles.flex}>
        {label}
      </AppText>
      <AppText variant="label">{value}</AppText>
      <MaterialCommunityIcons name="chevron-right" size={22} color={colors.ink} />
    </Pressable>
  );
}

interface SummaryRowProps {
  icon: IconName;
  label?: string;
  value: string;
  last?: boolean;
}

/** Plan summary line: icon · "Label: **Value**", with hairline divider. */
export function SummaryRow({ icon, label, value, last = false }: SummaryRowProps) {
  return (
    <View style={[styles.summary, !last && styles.summaryDivider]}>
      <MaterialCommunityIcons name={icon} size={22} color={colors.ink} />
      <AppText variant="label" style={styles.summaryText}>
        {label ? `${label}: ` : null}
        <AppText variant="label" style={styles.bold}>
          {value}
        </AppText>
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    paddingHorizontal: space.lg + 2,
    paddingVertical: space.sm,
    borderRadius: radii.card,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  flex: { flex: 1 },
  disabled: { opacity: 0.4 },
  summary: { flexDirection: 'row', alignItems: 'center', gap: space.lg, paddingVertical: space.md + 2 },
  summaryDivider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  summaryText: { flex: 1, fontFamily: fonts.sans },
  bold: { fontFamily: fonts.sansSemiBold },
});
