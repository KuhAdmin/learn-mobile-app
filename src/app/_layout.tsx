import { Fraunces_600SemiBold, Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { syncDailyReminder } from '@/notifications/reminder';
import { OnboardingProvider, useOnboarding } from '@/state/onboarding-context';
import { ProgressProvider } from '@/state/progress-context';
import { colors } from '@/theme/tokens';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 400, fade: true });

/** How long the brand splash (`app.json`, expo-splash-screen) stays up at launch, at least. */
const SPLASH_MS = 5000;

/**
 * Keeps the scheduled daily reminder in step with the saved preference: on launch (repairs it after a
 * reinstall or restore) and whenever the learner changes it. Nothing is scheduled before onboarding ends.
 */
function ReminderSync() {
  const { completedAt, reminderEnabled, reminderTime } = useOnboarding().state;
  const { hour, minute } = reminderTime;
  useEffect(() => {
    void syncDailyReminder({ enabled: Boolean(completedAt) && reminderEnabled, time: { hour, minute } });
  }, [completedAt, reminderEnabled, hour, minute]);
  return null;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const [splashTimeUp, setSplashTimeUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplashTimeUp(true), SPLASH_MS);
    return () => clearTimeout(timer);
  }, []);

  // The app renders underneath once fonts are in; the splash lifts after both that and SPLASH_MS.
  useEffect(() => {
    if ((loaded || error) && splashTimeUp) void SplashScreen.hideAsync();
  }, [loaded, error, splashTimeUp]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.bg }}>
      <SafeAreaProvider>
        <OnboardingProvider>
          <ReminderSync />
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
              <Stack.Screen name="practice/session" />
            </Stack>
          </ProgressProvider>
        </OnboardingProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
