import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { StyleSheet, useWindowDimensions, View, type FlatList } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/AppText';
import { PrimaryButton, RoundIconButton } from '@/components/Buttons';
import { Illustration } from '@/components/Illustration';
import { PageDots } from '@/components/PageDots';
import { INTRO_PAGES, type IntroPage } from '@/data/options';
import { FIRST_STEP, STEP_ROUTES } from '@/onboarding/flow';
import { colors, sizes, space } from '@/theme/tokens';

/** Intro carousel shown after the splash: swipe right→left to advance. */
export default function IntroCarousel() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const listRef = useRef<FlatList<IntroPage>>(null);
  const progress = useSharedValue(0);
  const [index, setIndex] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const isLast = index === INTRO_PAGES.length - 1;
  // A single page needs no pager dots; the CTA sits on it directly.
  const showDots = INTRO_PAGES.length > 1;

  const onScroll = useAnimatedScrollHandler((e) => {
    progress.value = e.contentOffset.x / width;
  });

  // Programmatic scrolls don't fire onMomentumScrollEnd on iOS, so update the index directly.
  const goTo = (i: number) => {
    setIndex(i);
    listRef.current?.scrollToIndex({ index: i, animated: true });
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <Animated.FlatList
        ref={listRef}
        style={styles.pager}
        onLayout={(e) => setPageHeight(e.nativeEvent.layout.height)}
        data={INTRO_PAGES}
        keyExtractor={(p) => p.id}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
        getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
        renderItem={({ item }) => <IntroSlide page={item} width={width} height={pageHeight} />}
      />

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, space.lg) + space.sm }]}>
        {showDots ? (
          <View style={isLast ? styles.dotsCentered : styles.dotsRow}>
            <PageDots count={INTRO_PAGES.length} progress={progress} />
            {!isLast ? (
              <RoundIconButton icon="chevron-right" accessibilityLabel="Next" onPress={() => goTo(index + 1)} />
            ) : null}
          </View>
        ) : null}
        {isLast ? (
          <PrimaryButton label="Get started" onPress={() => router.push(STEP_ROUTES[FIRST_STEP])} />
        ) : null}
      </View>
    </View>
  );
}

function IntroSlide({ page, width, height }: { page: IntroPage; width: number; height: number }) {
  return (
    <View style={[styles.slide, { width, height: height || undefined }]}>
      <Illustration name={page.illustration} size={Math.min(width * 0.68, 280)} />
      <View style={styles.copy}>
        <AppText variant="h1" align="center" accessibilityRole="header">
          {page.title}
        </AppText>
        <AppText variant="body" align="center">
          {page.body}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  pager: { flex: 1 },
  slide: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: sizes.gutter + 8 },
  copy: { gap: space.md, marginTop: space.xl, maxWidth: 360 },
  footer: { paddingHorizontal: sizes.gutter, paddingTop: space.md, gap: space.lg },
  // Fixed height so the pager never resizes when the footer content swaps.
  dotsRow: {
    height: 16 + space.lg + sizes.buttonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dotsCentered: { height: 16, alignItems: 'center', justifyContent: 'center' },
});
