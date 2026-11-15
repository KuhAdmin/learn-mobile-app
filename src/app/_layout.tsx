import { Fraunces_600SemiBold, Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { OnboardingProvider } from '@/state/onboarding-context';
import { ProgressProvider } from '@/state/progress-context';
import { colors } from '@/theme/tokens';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.bg }}>
      <SafeAreaProvider>
        <OnboardingProvider>
          <ProgressProvider>
            <StatusBar style="dark" />
            <Stack
              screenOptions={{
                headerShown: false,
                // New screens enter from the right; Back exits to the right.
                animation: 'slide_from_right',
                gestureEnabled: true,
                contentStyle: { backgroundColor: colors.bg },
              }}
            >
              <Stack.Screen name="index" options={{ gestureEnabled: false }} />
              <Stack.Screen name="intro" options={{ animation: 'fade' }} />
              {/* Main app (Learn · Topics · Practice · Profile). No swipe back into onboarding. */}
              <Stack.Screen name="(tabs)" options={{ gestureEnabled: false, animation: 'fade' }} />
              <Stack.Screen name="lesson/[topicId]" />
            </Stack>
          </ProgressProvider>
        </OnboardingProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
