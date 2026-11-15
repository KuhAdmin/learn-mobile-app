import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import type { IconName } from '@/data/options';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

interface TextFieldProps extends Omit<TextInputProps, 'style'> {
  icon?: IconName;
}

/** Rounded input with a leading icon. The border darkens to ink while focused. */
export function TextField({ icon, onFocus, onBlur, ...rest }: TextFieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={[styles.box, focused && styles.focused]}>
      {icon ? <MaterialCommunityIcons name={icon} size={24} color={colors.inkMuted} /> : null}
      <TextInput
        placeholderTextColor={colors.inkSubtle}
        cursorColor={colors.ink}
        selectionColor={colors.accentTeal}
        maxFontSizeMultiplier={1.4}
        {...rest}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: 58,
    paddingHorizontal: space.lg,
    borderRadius: radii.card,
    borderWidth,
    borderColor: colors.inkSubtle,
    backgroundColor: colors.surface,
  },
  focused: { borderColor: colors.ink },
  input: {
    flex: 1,
    alignSelf: 'stretch',
    fontFamily: fonts.sans,
    fontSize: 17,
    color: colors.ink,
    paddingVertical: space.md,
  },
});
