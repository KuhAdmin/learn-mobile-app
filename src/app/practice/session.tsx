import { router } from 'expo-router';
import { useMemo, useRef, useState } from 'react';
import { AccessibilityInfo, ScrollView, StyleSheet, View, type ScrollViewInstance } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/AppText';
import { OutlineButton, PrimaryButton } from '@/components/Buttons';
import { QuestionCard } from '@/components/lesson/QuizViews';
import { OnboardingHeader } from '@/components/OnboardingHeader';
import { grade, type Answer } from '@/lessons/answers';
import { randomSeed } from '@/lessons/option-order';
import { lessonForTopic } from '@/lessons/registry';
import { pickPracticeQuestions } from '@/practice/pick';
import { useProgress } from '@/state/progress-context';
import { colors, fonts, sizes, space } from '@/theme/tokens';

/** A practice round: mixed questions from completed lessons, one at a time, then the score. Nothing is saved. */
export default function PracticeSession() {
  const insets = useSafeAreaInsets();
  const { completed } = useProgress();
  const [round, setRound] = useState(0);
  // A new round re-picks the questions and the option order.
  const items = useMemo(() => pickPracticeQuestions(Object.keys(completed), lessonForTopic), [completed, round]); // eslint-disable-line react-hooks/exhaustive-deps
  const seed = useMemo(() => randomSeed(), [round]); // eslint-disable-line react-hooks/exhaustive-deps
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const scrollRef = useRef<ScrollViewInstance>(null);

  const done = () => (router.canGoBack() ? router.back() : router.replace('/practice'));
  const again = () => {
    setRound((r) => r + 1);
    setIndex(0);
    setAnswers({});
  };

  const finished = index >= items.length;
  const correct = items.filter((item, i) => grade(item.question, answers[i]) === true).length;

  let body;
  let footer;
  if (!items.length) {
    body = <AppText>Finish a lesson first, then come back to practise it.</AppText>;
    footer = <PrimaryButton label="Done" onPress={done} />;
  } else if (finished) {
    body = (
      <View style={styles.result}>
        <AppText accessibilityRole="header" style={styles.resultTitle} align="center">
          Practice complete!
        </AppText>
        <AppText style={styles.resultBody} align="center">
          {`You answered ${correct} of ${items.length} questions correctly.`}
        </AppText>
      </View>
    );
    footer = (
      <View style={styles.footerStack}>
        <PrimaryButton label="Practice again" trailingIcon="arrow-right" onPress={again} />
        <OutlineButton label="Done" icon="check" onPress={done} />
      </View>
    );
  } else {
    const item = items[index];
    const answer = answers[index];
    body = (
      <View style={styles.question}>
        <AppText variant="caption" style={styles.meta}>
          {`Practice ${index + 1}/${items.length} · ${item.lessonTitle}`}
        </AppText>
        <QuestionCard
          key={`${round}-${index}`}
          number={index + 1}
          question={item.question}
          answer={answer}
          seed={seed}
          onAnswer={(a) => {
            setAnswers((prev) => ({ ...prev, [index]: a }));
            setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 150);
            const result = grade(item.question, a);
            if (result !== null) AccessibilityInfo.announceForAccessibility(result ? 'Correct!' : 'Not quite.');
          }}
        />
      </View>
    );
    footer = (
      <PrimaryButton
        label={index === items.length - 1 ? 'See score' : 'Continue'}
        trailingIcon="arrow-right"
        disabled={answer === undefined}
        onPress={() => {
          setIndex((i) => i + 1);
          scrollRef.current?.scrollTo({ y: 0, animated: false });
        }}
      />
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <OnboardingHeader />
      <ScrollView ref={scrollRef} style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {body}
      </ScrollView>
      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, space.lg) + space.sm }]}>{footer}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  fill: { flex: 1 },
  content: { paddingHorizontal: sizes.gutter, paddingBottom: space.xl },
  question: { gap: space.md },
  meta: { fontFamily: fonts.sansMedium, color: colors.inkMuted },
  footer: { paddingHorizontal: sizes.gutter, paddingTop: space.md, backgroundColor: colors.bg },
  footerStack: { gap: space.lg },
  result: { alignItems: 'center', gap: space.md, paddingTop: space.xxl },
  resultTitle: { fontFamily: fonts.serifBold, fontSize: 32, lineHeight: 40, color: colors.ink },
  resultBody: { fontFamily: fonts.sansMedium, fontSize: 17, lineHeight: 24, color: colors.ink },
});
