import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

import type { IconName } from '@/data/options';
import { borderWidth, colors, radii, sizes, space } from '@/theme/tokens';

import { AppText } from './AppText';

export type IndicatorKind = 'check-circle' | 'checkbox' | 'radio';

const pop = ZoomIn.duration(160);

/** Filled check-circle, square checkbox, or radio ring — matches the mockup's three selection styles. */
export function SelectionIndicator({ kind, selected }: { kind: IndicatorKind; selected: boolean }) {
  if (kind === 'radio') {
    return (
      <View style={styles.radio}>
        {selected ? <Animated.View entering={pop} style={styles.radioDot} /> : null}
      </View>
    );
  }
  const square = kind === 'checkbox';
  return (
    <View style={[square ? styles.checkbox : styles.circle, selected && styles.filled]}>
      {selected ? (
        <Animated.View entering={pop}>
          <MaterialCommunityIcons name="check" size={square ? 16 : 15} color={colors.onInk} />
        </Animated.View>
      ) : null}
    </View>
  );
}

interface OptionCardProps {
  title: string;
  subtitle?: string;
  icon?: IconName;
  selected: boolean;
  onPress: () => void;
  indicator: IndicatorKind;
  /** Larger padding + icon for hero choices. */
  size?: 'lg' | 'md';
  /** Dimmed and not pressable, e.g. when a selection limit is reached. */
  disabled?: boolean;
}

/** Selectable card: icon · title/subtitle · indicator. Selected = soft teal fill. */
export function OptionCard({
  title,
  subtitle,
  icon,
  selected,
  onPress,
  indicator,
  size = 'md',
  disabled = false,
}: OptionCardProps) {
  const lg = size === 'lg';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole={indicator === 'radio' ? 'radio' : 'checkbox'}
      accessibilityState={{ checked: selected, disabled }}
      accessibilityLabel={subtitle ? `${title}. ${subtitle}` : title}
      style={({ pressed }) => [
        styles.card,
        lg && styles.cardLg,
        selected && styles.selected,
        disabled && styles.dimmed,
        pressed && styles.pressed,
      ]}
    >
      {icon ? (
        <MaterialCommunityIcons name={icon} size={lg ? 34 : 24} color={colors.ink} />
      ) : null}
      <View style={styles.texts}>
        <AppText variant={lg ? 'title' : 'label'} style={lg && styles.titleLg}>
          {title}
        </AppText>
        {subtitle ? <AppText variant="caption">{subtitle}</AppText> : null}
      </View>
      <SelectionIndicator kind={indicator} selected={selected} />
    </Pressable>
  );
}

interface OptionPillProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  /** 'always' shows the radio on every pill; 'selected' shows it only when chosen. */
  indicator?: 'always' | 'selected';
  align?: 'start' | 'center';
}

/** Single-line rounded choice (level, daily time). */
export function OptionPill({ label, selected, onPress, indicator = 'always', align = 'start' }: OptionPillProps) {
  const showRadio = indicator === 'always' || selected;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      accessibilityLabel={label}
      style={({ pressed }) => [styles.pill, selected && styles.selected, pressed && styles.pressed]}
    >
      <AppText variant="label" style={[styles.pillLabel, align === 'center' && styles.pillCenter]}>
        {label}
      </AppText>
      {showRadio ? (
        <View style={align === 'center' && styles.pillIndicatorAbs}>
          <SelectionIndicator kind="radio" selected={selected} />
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: 56,
    paddingVertical: space.md,
    paddingHorizontal: space.lg,
    borderRadius: radii.card,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  cardLg: { paddingVertical: space.lg + 2, gap: space.lg },
  selected: { backgroundColor: colors.selectedFill },
  dimmed: { opacity: 0.45 },
  pressed: { opacity: 0.9, transform: [{ scale: 0.99 }] },
  texts: { flex: 1, gap: 2 },
  titleLg: { fontSize: 17 },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth,
    borderColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth,
    borderColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: { backgroundColor: colors.ink },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth,
    borderColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: colors.ink },
  pill: {
    minHeight: sizes.pillHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: space.xl,
    borderRadius: radii.pill,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  pillLabel: { flex: 1, fontSize: 16 },
  pillCenter: { textAlign: 'center' },
  pillIndicatorAbs: { position: 'absolute', right: space.lg },
});
