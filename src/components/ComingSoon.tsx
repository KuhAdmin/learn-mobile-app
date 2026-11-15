import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import type { IconName } from '@/data/options';
import { borderWidth, colors, space } from '@/theme/tokens';

import { AppText, ScreenTitle } from './AppText';
import { Screen } from './Screen';

interface ComingSoonProps {
  icon: IconName;
  title: string;
  body: string;
  children?: ReactNode;
}

/** Placeholder for tabs that arrive in a later phase. */
export function ComingSoon({ icon, title, body, children }: ComingSoonProps) {
  return (
    <Screen contentStyle={styles.center}>
      <View style={styles.badge}>
        <MaterialCommunityIcons name={icon} size={36} color={colors.ink} />
      </View>
      <View style={styles.copy}>
        <ScreenTitle align="center">{title}</ScreenTitle>
        <AppText align="center">{body}</AppText>
      </View>
      {children}
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: { justifyContent: 'center', gap: space.xl },
  badge: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.selectedFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: { gap: space.xs },
});
