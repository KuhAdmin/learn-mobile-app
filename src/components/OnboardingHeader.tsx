import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors, sizes, space } from '@/theme/tokens';

interface OnboardingHeaderProps {
  showBack?: boolean;
}

/** Back chevron on the left; omit it with showBack={false}. */
export function OnboardingHeader({ showBack = true }: OnboardingHeaderProps) {
  return (
    <View style={styles.row}>
      {showBack ? (
        <Pressable
          onPress={() => router.canGoBack() && router.back()}
          hitSlop={sizes.hitSlop}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={styles.touch}
        >
          <MaterialCommunityIcons name="chevron-left" size={30} color={colors.ink} />
        </Pressable>
      ) : (
        <View style={styles.touch} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space.md,
  },
  touch: { minWidth: sizes.minTouch, minHeight: sizes.minTouch, justifyContent: 'center' },
});
