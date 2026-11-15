import type React from 'react';
import { Text, View, type TextProps } from 'react-native';

import { type, type TypeVariant } from '@/theme/tokens';

export interface AppTextProps extends TextProps {
  variant?: TypeVariant;
  align?: 'left' | 'center' | 'right';
}

/** Text with design-token typography. Scales with system font size (capped to keep layouts intact). */
export function AppText({ variant = 'body', align, style, ...rest }: AppTextProps) {
  return (
    <Text
      maxFontSizeMultiplier={1.4}
      {...rest}
      style={[type[variant], align && { textAlign: align }, style]}
    />
  );
}

interface ScreenTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  /** Optional supporting line under the heading. */
  subtitle?: string;
}

/** Serif page heading used at the top of every onboarding screen. */
export function ScreenTitle({ children, align = 'left', subtitle }: ScreenTitleProps) {
  if (!subtitle) {
    return (
      <AppText variant="h1" align={align} accessibilityRole="header" style={{ marginBottom: 28 }}>
        {children}
      </AppText>
    );
  }
  return (
    <View style={{ marginBottom: 28, gap: 8 }}>
      <AppText variant="h1" align={align} accessibilityRole="header">
        {children}
      </AppText>
      <AppText variant="body" align={align}>
        {subtitle}
      </AppText>
    </View>
  );
}
