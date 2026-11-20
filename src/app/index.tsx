import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/AppText';
import { BrandLogo } from '@/components/BrandLogo';
import { Illustration } from '@/components/Illustration';
import { useOnboarding } from '@/state/onboarding-context';
import { colors, space } from '@/theme/tokens';

const SPLASH_DURATION_MS = 3000;
const BAR_WIDTH = 120;

/**
 * Splash: shown on every app launch (the app's entry route). No CTA —
 * a short progress bar fills over 3 s, then it replaces itself (so Back can never
 * return here) with the intro, or the Learning Path once onboarding is finished.
 */
export default function SplashScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const progress = useSharedValue(0);
  const onboarded = Boolean(useOnboarding().state.completedAt);

  useEffect(() => {
    progress.value = withTiming(1, { duration: SPLASH_DURATION_MS, easing: Easing.linear });
    const timer = setTimeout(() => router.replace(onboarded ? '/learn' : '/intro'), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [progress, onboarded]);

  const fillStyle = useAnimatedStyle(() => ({ width: progress.value * BAR_WIDTH }));

  return (
    <View style={[styles.root, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <Illustration name="mascot" size={Math.min(width * 0.68, 280)} />
      <View style={styles.brand}>
        <BrandLogo width={Math.min(width * 0.6, 260)} />
        <AppText variant="label" align="center" style={styles.tagline} accessibilityLabel="Grammar and Vocabulary">
          Grammar  |  Vocabulary
        </AppText>
      </View>
      <View
        style={styles.track}
        accessible
        accessibilityRole="progressbar"
        accessibilityLabel="Loading"
      >
        <Animated.View style={[styles.fill, fillStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' },
  brand: { marginTop: space.xl, alignItems: 'center' },
  tagline: { marginTop: space.md, fontSize: 17, letterSpacing: 0.5, color: colors.inkMuted },
  track: {
    marginTop: space.xxl + space.sm,
    width: BAR_WIDTH,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.switchOff,
    overflow: 'hidden',
  },
  fill: { height: '100%', borderRadius: 2, backgroundColor: colors.ink },
});
