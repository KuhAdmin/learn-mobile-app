import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import type { IconName } from '@/data/options';
import { colors, fonts } from '@/theme/tokens';

function TabIcon({ icon, activeIcon, focused }: { icon: IconName; activeIcon: IconName; focused: boolean }) {
  return (
    // Active tab sits on a soft teal pill (mockup); inactive tabs are plain line icons.
    <View style={[styles.pill, focused && styles.pillActive]}>
      <MaterialCommunityIcons
        name={focused ? activeIcon : icon}
        size={24}
        color={focused ? colors.ink : colors.inkSubtle}
      />
    </View>
  );
}

const TABS: { name: string; title: string; icon: IconName; activeIcon: IconName; hidden?: boolean }[] = [
  { name: 'learn', title: 'Learn', icon: 'home-variant-outline', activeIcon: 'home-variant' },
  // Hidden: the list shows every lesson title, including lessons the learner hasn't unlocked yet.
  { name: 'topics', title: 'Topics', icon: 'layers-outline', activeIcon: 'layers', hidden: true },
  { name: 'practice', title: 'Practice', icon: 'pencil-outline', activeIcon: 'pencil' },
  { name: 'profile', title: 'Profile', icon: 'account-outline', activeIcon: 'account' },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.inkSubtle,
        tabBarLabelStyle: styles.label,
        // In normal layout flow (not absolute), so it never covers the end of a scrolling list.
        tabBarStyle: styles.bar,
        tabBarItemStyle: styles.item,
        sceneStyle: { backgroundColor: colors.bg },
      }}
    >
      {TABS.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{
            title: t.title,
            // `href: null` keeps the route but removes its tab button.
            ...(t.hidden ? { href: null } : {}),
            tabBarIcon: ({ focused }) => <TabIcon icon={t.icon} activeIcon={t.activeIcon} focused={focused} />,
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.surface,
    borderTopColor: colors.divider,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 6,
  },
  item: { paddingVertical: 2 },
  label: { fontFamily: fonts.sansMedium, fontSize: 12, marginTop: 2 },
  pill: { width: 56, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  pillActive: { backgroundColor: colors.selectedFill },
});
