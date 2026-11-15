import type { ReactNode } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, sizes, space } from '@/theme/tokens';

interface ScreenProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
}

/** Page shell (global background colour): safe-area header, scrollable body, footer pinned to the bottom. */
export function Screen({ header, footer, children, contentStyle }: ScreenProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {header}
      {/* "padding" on both platforms: Android is edge-to-edge, so the window no longer resizes for the keyboard. */}
      <KeyboardAvoidingView style={styles.fill} behavior="padding">
        <ScrollView
          style={styles.fill}
          contentContainerStyle={[styles.content, contentStyle]}
          showsVerticalScrollIndicator={false}
          bounces={false}
          // Let a tap on the footer button register while the keyboard is open.
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
        {footer ? (
          <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, space.lg) + space.sm }]}>
            {footer}
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  fill: { flex: 1 },
  content: { flexGrow: 1, paddingHorizontal: sizes.gutter, paddingTop: space.lg, paddingBottom: space.xl },
  footer: { paddingHorizontal: sizes.gutter, paddingTop: space.md, backgroundColor: colors.bg },
});
