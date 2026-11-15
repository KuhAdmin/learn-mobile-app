import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useMemo, useReducer, useRef, type ReactNode } from 'react';
import { AccessibilityInfo, BackHandler, ScrollView, StyleSheet, View, type ScrollViewInstance } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/AppText';
import { OutlineButton, PrimaryButton } from '@/components/Buttons';
import { STAGE_ART } from '@/components/learning-path/StageBanner';
import type { TopicRef } from '@/learning-path/progression';
import {
  canStepBack,
  initialLessonFlow,
  isCorrect,
  lessonFlowReducer,
  lessonScore,
} from '@/lessons/lesson-flow';
import { visualsFor } from '@/lessons/presentation';
import type { GrammarLesson } from '@/lessons/schema';
import { useProgress } from '@/state/progress-context';
import { colors, fonts, sizes, space } from '@/theme/tokens';

import { LessonArtImage } from './LessonBlocks';
import { LessonHeader } from './LessonHeader';
import { LessonPageView } from './LessonPageView';
import { QuestionCard, QuizFooter, QuizIntro } from './QuizViews';

interface LessonPlayerProps {
  lesson: GrammarLesson;
  topic: TopicRef;
}

/** Plays a lesson: content pages → knowledge check → result, then marks the path topic complete. */
export function LessonPlayer({ lesson, topic }: LessonPlayerProps) {
  const insets = useSafeAreaInsets();
  const { completeTopic } = useProgress();
  const reducer = useMemo(() => lessonFlowReducer(lesson), [lesson]);
  const [state, dispatch] = useReducer(reducer, initialLessonFlow);
  const visuals = visualsFor(lesson.topic.topic_id);
  const { step } = state;
  const questions = lesson.knowledge_check.questions;

  const exit = () => (router.canGoBack() ? router.back() : router.replace('/learn'));
  const back = () => (canStepBack(state) ? dispatch({ type: 'back' }) : exit());

  // Android back steps through the lesson before leaving it.
  const stepsBack = canStepBack(state);
  useEffect(() => {
    if (!stepsBack) return; // let the router leave the lesson
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      dispatch({ type: 'back' });
      return true;
    });
    return () => sub.remove();
  }, [stepsBack]);

  // Each step starts at the top.
  const scrollRef = useRef<ScrollViewInstance>(null);
  const stepKey = step.kind === 'result' ? 'result' : `${step.kind}-${step.index}`;
  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [stepKey]);

  const finish = () => {
    completeTopic(topic.topic.id);
    exit();
  };

  let counter: string | undefined;
  let counterLabel: string | undefined;
  let body: ReactNode;
  let footer: ReactNode;

  if (step.kind === 'page') {
    const page = lesson.pages[step.index];
    const last = step.index === lesson.pages.length - 1;
    counter = `${page.page_number} / ${lesson.pages.length}`;
    counterLabel = `Page ${page.page_number} of ${lesson.pages.length}`;
    body = <LessonPageView lessonTitle={lesson.lesson.lesson_title} page={page} visuals={visuals} />;
    footer = (
      <View style={styles.footerStack}>
        {page.page_type !== 'summary' ? <ProgressBar value={page.page_number / lesson.pages.length} /> : null}
        {last && questions.length ? (
          <PrimaryButton
            label={lesson.knowledge_check.title}
            leading={<MaterialCommunityIcons name="bullseye-arrow" size={24} color={colors.accentSalmon} />}
            trailingIcon="arrow-right"
            onPress={() => dispatch({ type: 'next' })}
          />
        ) : (
          <PrimaryButton label="Continue" trailingIcon="arrow-right" onPress={() => dispatch({ type: 'next' })} />
        )}
      </View>
    );
  } else if (step.kind === 'quiz') {
    const q = questions[step.index];
    const answer = state.answers[q.question_id];
    counter = `Quiz ${step.index + 1}/${questions.length}`;
    counterLabel = `Question ${step.index + 1} of ${questions.length}`;
    body = (
      <View style={styles.quiz}>
        <QuizIntro lessonTitle={lesson.lesson.lesson_title} title={lesson.knowledge_check.title} art={visuals?.quizArt} />
        <QuestionCard
          number={step.index + 1}
          question={q}
          answer={answer}
          onAnswer={(optionId) => {
            dispatch({ type: 'answer', questionId: q.question_id, optionId });
            AccessibilityInfo.announceForAccessibility(isCorrect(q, optionId) ? 'Correct!' : 'Not quite.');
          }}
        />
      </View>
    );
    footer = (
      <QuizFooter
        index={step.index}
        count={questions.length}
        canContinue={answer !== undefined}
        onNext={() => dispatch({ type: 'next' })}
      />
    );
  } else {
    const { correct, total } = lessonScore(lesson, state.answers);
    body = (
      <View style={styles.result}>
        {visuals?.resultArt ? <LessonArtImage art={visuals.resultArt} width={130} /> : null}
        <AppText accessibilityRole="header" style={styles.resultTitle} align="center">
          Lesson complete!
        </AppText>
        <AppText style={styles.resultBody} align="center">
          {total ? `You answered ${correct} of ${total} questions correctly.` : 'Nice work.'}
        </AppText>
        <AppText variant="body" align="center">
          {correct === total
            ? 'Perfect score — great work!'
            : 'You can review this lesson any time from your learning path.'}
        </AppText>
      </View>
    );
    footer = (
      <View style={styles.footerStack}>
        <PrimaryButton label="Back to path" trailingIcon="arrow-right" onPress={finish} />
        <OutlineButton label="Review lesson" icon="restart" onPress={() => dispatch({ type: 'restart' })} />
      </View>
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <LessonHeader
        stageTitle={lesson.topic.learning_stage}
        stageArt={STAGE_ART[topic.stage.number]}
        counter={counter}
        counterLabel={counterLabel}
        onBack={back}
      />
      <ScrollView
        ref={scrollRef}
        style={styles.fill}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View key={stepKey} entering={FadeIn.duration(220)}>
          {body}
        </Animated.View>
      </ScrollView>
      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, space.lg) + space.sm }]}>{footer}</View>
    </View>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <View
      style={styles.track}
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel="Lesson progress"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(value * 100) }}
    >
      <View style={[styles.trackFill, { width: `${value * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  fill: { flex: 1 },
  content: { paddingHorizontal: sizes.gutter, paddingTop: space.sm, paddingBottom: space.xl },
  footer: { paddingHorizontal: sizes.gutter, paddingTop: space.md, backgroundColor: colors.bg },
  footerStack: { gap: space.lg },
  quiz: { gap: space.xl },
  track: { height: 10, borderRadius: 5, backgroundColor: colors.switchOff, overflow: 'hidden' },
  trackFill: { height: '100%', borderRadius: 5, backgroundColor: colors.pathTeal },
  result: { alignItems: 'center', gap: space.md, paddingTop: space.xxl },
  resultTitle: { fontFamily: fonts.serifBold, fontSize: 32, lineHeight: 40, color: colors.ink, marginTop: space.md },
  resultBody: { fontFamily: fonts.sansMedium, fontSize: 17, lineHeight: 24, color: colors.ink },
});
