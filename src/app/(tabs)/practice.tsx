import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText, ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { Screen } from '@/components/Screen';
import { PRACTICE_SIZE } from '@/practice/pick';
import { useProgress } from '@/state/progress-context';
import { borderWidth, colors, space } from '@/theme/tokens';

/** Practice tab: a quick round of mixed questions from the lessons the learner has completed. */
export default function PracticeScreen() {
  const { completed } = useProgress();
  const count = Object.keys(completed).length;

  return (
    <Screen
      contentStyle={styles.center}
      footer={
        count ? (
          <PrimaryButton
            label={`Start practice (${PRACTICE_SIZE} questions)`}
            trailingIcon="arrow-right"
            onPress={() => router.push('/practice/session')}
          />
        ) : (
          <PrimaryButton label="Go to lessons" trailingIcon="arrow-right" onPress={() => router.navigate('/learn')} />
        )
      }
    >
      <View style={styles.badge}>
        <MaterialCommunityIcons name="pencil-outline" size={36} color={colors.ink} />
      </View>
      <View style={styles.copy}>
        <ScreenTitle align="center">Practice</ScreenTitle>
        <AppText align="center">
          {count
            ? `Mixed questions from the ${count === 1 ? 'lesson' : `${count} lessons`} you’ve completed. Each round is different.`
            : 'Finish your first lesson to start practising.'}
        </AppText>
      </View>
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
