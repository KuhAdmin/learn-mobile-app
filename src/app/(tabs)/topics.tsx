import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { Pressable, SectionList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/AppText';
import type { IconName } from '@/data/options';
import { openTopic } from '@/learning-path/open-topic';
import { chapterNumber, findTopic, PATH_CURRICULUM, type TopicRef, type TopicStatus } from '@/learning-path/progression';
import { useProgress } from '@/state/progress-context';
import { borderWidth, colors, fonts, radii, sizes, space } from '@/theme/tokens';

const STATUS_ICON: Record<TopicStatus, { icon: IconName; color: string; label: string }> = {
  completed: { icon: 'check-circle', color: colors.pathTeal, label: 'completed' },
  current: { icon: 'play-circle', color: colors.ink, label: 'up next' },
  available: { icon: 'circle-outline', color: colors.ink, label: 'open' },
  locked: { icon: 'lock-outline', color: colors.inkMuted, label: 'locked' },
};

/** Topics tab: every lesson on the path as a list, grouped by chapter, to find and review a lesson quickly. */
export default function TopicsScreen() {
  const insets = useSafeAreaInsets();
  const { statuses } = useProgress();
  const sections = useMemo(
    () =>
      PATH_CURRICULUM.flatMap((stage) =>
        stage.subStages.map((subStage) => ({
          key: subStage.id,
          title: `Chapter ${chapterNumber(subStage.id)} · ${subStage.title}`,
          data: subStage.topics.map((t) => findTopic(t.id)!),
        })),
      ),
    [],
  );

  const renderItem = ({ item }: { item: TopicRef }) => {
    const status = statuses[item.topic.id] ?? 'locked';
    const s = STATUS_ICON[status];
    return (
      <Pressable
        onPress={() => openTopic(item.topic.id, status)}
        style={({ pressed }) => [styles.row, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={`${item.topic.title}, ${s.label}`}
      >
        <MaterialCommunityIcons name={s.icon} size={22} color={s.color} />
        <AppText style={[styles.rowText, status === 'locked' && styles.lockedText]}>{item.topic.title}</AppText>
      </Pressable>
    );
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <AppText variant="h1" style={styles.title} accessibilityRole="header">
          Topics
        </AppText>
        <AppText variant="label" style={styles.subtitle}>
          Every lesson on your path. Completed lessons can be reviewed any time.
        </AppText>
      </View>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.topic.id}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <AppText variant="label" style={styles.section} accessibilityRole="header">
            {section.title}
          </AppText>
        )}
        contentContainerStyle={styles.content}
        stickySectionHeadersEnabled={false}
        initialNumToRender={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  header: {
    paddingHorizontal: sizes.gutter,
    paddingTop: space.md,
    paddingBottom: space.md,
    gap: space.xs,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  title: { fontFamily: fonts.serifBold, fontSize: 30, lineHeight: 38 },
  subtitle: { color: colors.inkMuted },
  content: { paddingHorizontal: sizes.gutter, paddingBottom: space.xxl },
  section: { fontFamily: fonts.sansMedium, color: colors.inkMuted, marginTop: space.xl, marginBottom: space.sm },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: sizes.minTouch,
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    marginBottom: space.xs,
    borderRadius: radii.card,
    borderWidth,
    borderColor: colors.divider,
    backgroundColor: colors.surface,
  },
  pressed: { opacity: 0.7 },
  rowText: { flex: 1 },
  lockedText: { color: colors.inkMuted },
});
