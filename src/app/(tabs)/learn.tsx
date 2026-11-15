import { router } from 'expo-router';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Alert, FlatList, StyleSheet, View, type ListViewToken } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PATH_SIDE_PADDING, usePathCenterX } from '@/components/learning-path/geometry';
import { HierarchyLegend } from '@/components/learning-path/HierarchyLegend';
import { PathHeader } from '@/components/learning-path/PathHeader';
import { StageBanner } from '@/components/learning-path/StageBanner';
import { SubStageHeading } from '@/components/learning-path/SubStageHeading';
import { TopicNode } from '@/components/learning-path/TopicNode';
import { CURRICULUM } from '@/data/curriculum';
import { currentTopicId, findTopic, stageProgress, stageStatus } from '@/learning-path/progression';
import { buildPathRows, type PathRow } from '@/learning-path/rows';
import { useProgress } from '@/state/progress-context';
import { colors, space } from '@/theme/tokens';

const VIEWABILITY = { itemVisiblePercentThreshold: 30 };

/** Learn tab: the five-stage grammar journey as one winding, scrollable path. */
export default function LearningPathScreen() {
  const insets = useSafeAreaInsets();
  const centerX = usePathCenterX();
  const { completed, statuses } = useProgress();
  const rows = useMemo(() => buildPathRows(statuses), [statuses]);
  const currentId = currentTopicId(statuses);
  const learnerStage = currentId ? findTopic(currentId)!.stage.number : CURRICULUM.length;

  // Header follows the stage in view; starts at the learner's current stage.
  const [visibleStage, setVisibleStage] = useState(learnerStage);
  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ListViewToken[] }) => {
    const first = viewableItems.find((v) => v.isViewable)?.item as PathRow | undefined;
    if (first) setVisibleStage(first.stageNumber);
  }, []);

  // Open on the learner's current topic (once), so returning learners don't scroll from the top.
  const listRef = useRef<FlatList<PathRow>>(null);
  const didInitialScroll = useRef(false);
  const scrollToCurrent = () => {
    if (didInitialScroll.current) return;
    didInitialScroll.current = true;
    const index = rows.findIndex((r) => r.key === currentId);
    if (index > 4) listRef.current?.scrollToIndex({ index, viewPosition: 0.35, animated: false });
  };

  const openTopic = (row: Extract<PathRow, { kind: 'topic' }>) => {
    if (row.status === 'locked') {
      Alert.alert('Lesson locked', 'Complete the lessons before this one to unlock it.');
      return;
    }
    router.push({ pathname: '/lesson/[topicId]', params: { topicId: row.ref.topic.id } });
  };

  const renderItem = ({ item }: { item: PathRow }) => {
    switch (item.kind) {
      case 'banner':
        return (
          <View style={item.stageNumber > 1 && styles.bannerGap}>
            <StageBanner
              stage={item.stage}
              progress={stageProgress(item.stage, completed)}
              state={stageStatus(item.stage, statuses)}
            />
          </View>
        );
      case 'legend':
        return <HierarchyLegend />;
      case 'sub':
        return <SubStageHeading row={item} centerX={centerX} />;
      case 'topic':
        return <TopicNode row={item} centerX={centerX} onPress={() => openTopic(item)} />;
    }
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <PathHeader stageNumber={visibleStage} stageCount={CURRICULUM.length} />
      <FlatList
        ref={listRef}
        data={rows}
        keyExtractor={(r) => r.key}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={VIEWABILITY}
        onLayout={scrollToCurrent}
        initialNumToRender={14}
        windowSize={9}
        onScrollToIndexFailed={(info) => {
          // Rows past the rendered window have no measured offset yet: jump near, then retry.
          listRef.current?.scrollToOffset({ offset: info.averageItemLength * info.index, animated: false });
          setTimeout(
            () => listRef.current?.scrollToIndex({ index: info.index, viewPosition: 0.35, animated: false }),
            60,
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: PATH_SIDE_PADDING, paddingTop: space.lg, paddingBottom: space.xxl },
  bannerGap: { marginTop: space.xxl },
});
