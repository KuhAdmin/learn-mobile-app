import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import type { IconName } from '@/data/options';
import { borderWidth, colors, radii, sizes, space } from '@/theme/tokens';

import { AppText } from './AppText';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  /** Optional art before the label (e.g. a small icon). */
  leading?: ReactNode;
  /** Optional white icon after the label (e.g. `arrow-right`). */
  trailingIcon?: IconName;
}

/** Black pill CTA used in every screen footer. */
export function PrimaryButton({ label, onPress, disabled = false, leading, trailingIcon }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.primary,
        disabled && styles.primaryDisabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <View style={styles.primaryInner}>
        {leading}
        <AppText variant="button">{label}</AppText>
        {trailingIcon ? <MaterialCommunityIcons name={trailingIcon} size={22} color={colors.onInk} /> : null}
      </View>
    </Pressable>
  );
}

interface OutlineButtonProps {
  label: string;
  onPress: () => void;
  icon?: IconName;
  align?: 'center' | 'start';
}

/** Outlined pill — secondary actions and social sign-in buttons. */
export function OutlineButton({ label, onPress, icon, align = 'center' }: OutlineButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.outline, pressed && styles.pressed]}
    >
      <View style={[styles.outlineInner, align === 'start' && styles.outlineStart]}>
        {icon ? <MaterialCommunityIcons name={icon} size={20} color={colors.ink} /> : null}
        <AppText variant="label">{label}</AppText>
      </View>
    </Pressable>
  );
}

interface RoundIconButtonProps {
  icon: IconName;
  onPress: () => void;
  accessibilityLabel: string;
}

/** Circular black button (intro carousel "next"). */
export function RoundIconButton({ icon, onPress, accessibilityLabel }: RoundIconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [styles.round, pressed && styles.pressed]}
    >
      <MaterialCommunityIcons name={icon} size={24} color={colors.onInk} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    height: sizes.buttonHeight,
    borderRadius: radii.pill,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: space.xl,
  },
  primaryInner: { flexDirection: 'row', alignItems: 'center', gap: space.sm + 2 },
  primaryDisabled: { backgroundColor: colors.disabled },
  pressed: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  outline: {
    minHeight: sizes.pillHeight - 4,
    borderRadius: radii.pill,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    paddingHorizontal: space.xl,
    paddingVertical: space.sm,
  },
  outlineInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: space.md },
  outlineStart: { justifyContent: 'flex-start' },
  round: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
