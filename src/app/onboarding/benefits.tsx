import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { AppText, ScreenTitle } from '@/components/AppText';
import { PrimaryButton } from '@/components/Buttons';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { Screen } from '@/components/Screen';
import { BENEFITS } from '@/data/options';
import { useOnboardingNav } from '@/onboarding/use-onboarding-nav';
import { borderWidth, colors, radii, space } from '@/theme/tokens';

export default function BenefitsScreen() {
  const { next } = useOnboardingNav('benefits');

  return (
    <Screen header={<OnboardingHeader />} footer={<PrimaryButton label="Continue" onPress={next} />}>
      <ScreenTitle align="center">Here’s what you’ll get</ScreenTitle>
      <View style={styles.list}>
        {BENEFITS.map((b) => (
          <View key={b.id} style={styles.card} accessible accessibilityLabel={`${b.title}. ${b.subtitle}`}>
            {b.icon ? <MaterialCommunityIcons name={b.icon} size={44} color={colors.ink} /> : null}
            <View style={styles.texts}>
              <AppText variant="title">{b.title}</AppText>
              <AppText variant="caption">{b.subtitle}</AppText>
            </View>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { gap: space.lg },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.lg,
    padding: space.lg + 2,
    borderRadius: radii.card,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  texts: { flex: 1, gap: space.xs },
});
