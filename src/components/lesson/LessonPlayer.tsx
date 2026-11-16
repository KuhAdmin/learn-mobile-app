import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useMemo, useReducer, useRef, type ReactNode } from 'react';
import { AccessibilityInfo, BackHandler, ScrollView, StyleSheet, View, type ScrollViewInstance } from 'react-native';
import Animated, { FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated';
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
import { lessonScreens } from '@/lessons/screens';
import { useProgress } from '@/state/progress-context';
import { colors, fonts, sizes, space } from '@/theme/tokens';

import { LessonArtImage } from './LessonBlocks';
import { LessonHeader } from './LessonHeader';
import { LessonPageView } from './LessonPageView';
import { QuestionCard, QuizIntro } from './QuizViews';

interface LessonPlayerProps {
  lesson: GrammarLesson;
  topic: TopicRef;
}

/** Plays a lesson: content pages → knowledge check → result, then marks the path topic complete. */
export function LessonPlayer({ lesson, topic }: LessonPlayerProps) {
  const insets = useSafeAreaInsets();
  const { completeTopic } = useProgress();
  const reducer = useMemo(() => lessonFlowReducer(lesson), [lesson]);
  const screens = useMemo(() => lessonScreens(lesson), [lesson]);
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

  // New screens slide in from the side matching the direction of travel.
  const entering =
    step.kind === 'result' ? FadeIn.duration(220) : (state.lastMove === 'back' ? FadeInLeft : FadeInRight).duration(220);

  const finish = () => {
    completeTopic(topic.topic.id);
    exit();
  };

  let counter: string | undefined;
  let counterLabel: string | undefined;
  let body: ReactNode;
  let footer: ReactNode;

  if (step.kind === 'page') {
    const screen = screens[step.index];
    const { page } = screen;
    const last = step.index === screens.length - 1;
    // The pill counts JSON pages ("3 / 8").
    counter = `${page.page_number} / ${lesson.pages.length}`;
    counterLabel = `Page ${page.page_number} of ${lesson.pages.length}${screen.parts > 1 ? `, part ${screen.part + 1} of ${screen.parts}` : ''}`;
    body = <LessonPageView lessonTitle={lesson.lesson.lesson_title} screen={screen} visuals={visuals} />;
    footer = (
      <View style={styles.footerStack}>
        {last && questions.length ? (
          <PrimaryButton
            label={lesson.knowledge_check.title}
            leading={<MaterialCommunityIcons name="bullseye-arrow" size={24} color={colors.accentSalmon} />}
            trailingIcon="arrow-right"
            onPress={() => dispatch({ type: 'next' })}
          />
        ) : (
          <PrimaryButton label={last ? 'Finish' : 'Continue'} trailingIcon="arrow-right" onPress={() => dispatch({ type: 'next' })} />
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
        <QuizIntro lessonTitle={lesson.lesson.lesson_title} title={lesson.knowledge_check.title} />
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
    // Same Continue as the lessons, enabled once the question is answered.
    footer = (
      <PrimaryButton
        label="Continue"
        trailingIcon="arrow-right"
        disabled={answer === undefined}
        onPress={() => dispatch({ type: 'next' })}
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
        <Animated.View key={stepKey} entering={entering}>
          {body}
        </Animated.View>
      </ScrollView>
      {footer ? (
        <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, space.lg) + space.sm }]}>{footer}</View>
      ) : (
        <View style={{ height: insets.bottom }} />
      )}
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
  result: { alignItems: 'center', gap: space.md, paddingTop: space.xxl },
  resultTitle: { fontFamily: fonts.serifBold, fontSize: 32, lineHeight: 40, color: colors.ink, marginTop: space.md },
  resultBody: { fontFamily: fonts.sansMedium, fontSize: 17, lineHeight: 24, color: colors.ink },
});
