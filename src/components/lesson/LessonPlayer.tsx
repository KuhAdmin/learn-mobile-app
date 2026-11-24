import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useMemo, useReducer, useRef, useState, type ReactNode } from 'react';
import {
  AccessibilityInfo,
  BackHandler,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  type ScrollViewInstance,
} from 'react-native';
import Animated, { FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/AppText';
import { OutlineButton, PrimaryButton } from '@/components/Buttons';
import { STAGE_ART } from '@/components/learning-path/StageBanner';
import type { TopicRef } from '@/learning-path/progression';
import { grade } from '@/lessons/answers';
import { buildSteps, canStepBack, initialLessonFlow, lessonFlowReducer, lessonScore, nextCta } from '@/lessons/lesson-flow';
import type { Lesson } from '@/lessons/model';
import { randomSeed } from '@/lessons/option-order';
import { visualsFor } from '@/lessons/presentation';
import { bodyBudget } from '@/lessons/screens';
import { useProgress } from '@/state/progress-context';
import { colors, fonts, sizes, space } from '@/theme/tokens';

import { LessonArtImage } from './LessonBlocks';
import { LessonHeader } from './LessonHeader';
import { LessonPageView } from './LessonPageView';
import { QuestionCard, QuizIntro } from './QuizViews';

interface LessonPlayerProps {
  lesson: Lesson;
  topic: TopicRef;
}

/**
 * Plays a lesson: page screens, in-page practice, quick checks after pages, the final check, then the
 * result. "Back to path" marks the path topic complete.
 */
export function LessonPlayer({ lesson, topic }: LessonPlayerProps) {
  const insets = useSafeAreaInsets();
  const { completeTopic } = useProgress();
  const visuals = visualsFor(lesson.id);
  // Screens are packed for this phone's height, so each one fits without scrolling.
  const { height } = useWindowDimensions();
  const budget = bodyBudget(height, insets.top, insets.bottom);
  const steps = useMemo(() => buildSteps(lesson, visualsFor(lesson.id), budget), [lesson, budget]);
  const reducer = useMemo(() => lessonFlowReducer(steps), [steps]);
  const [state, dispatch] = useReducer(reducer, initialLessonFlow);
  // One seed per attempt: answer options show in a shuffled order that holds for this attempt and
  // changes when the lesson is opened again or reviewed.
  const [seed, setSeed] = useState(randomSeed);
  const review = () => {
    setSeed(randomSeed());
    dispatch({ type: 'restart' });
  };
  const step = steps[state.index];
  const nextStep = steps[state.index + 1];
  // The step before an assessment offers it by name ("Quick Check", "Take Final Check").
  const cta = nextCta(lesson, nextStep);

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
  const stepKey = `step-${state.index}`;
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

  const next = () => dispatch({ type: 'next' });
  const continueButton = (disabled = false) =>
    cta === 'final' || cta === 'check' ? (
      <PrimaryButton
        label={cta === 'final' ? lesson.finalCheck!.ctaLabel : 'Quick Check'}
        leading={
          cta === 'final' ? (
            <MaterialCommunityIcons name="bullseye-arrow" size={24} color={colors.accentSalmon} />
          ) : (
            <MaterialCommunityIcons name="clipboard-check-outline" size={24} color={colors.selectedFill} />
          )
        }
        trailingIcon="arrow-right"
        disabled={disabled}
        onPress={next}
      />
    ) : (
      <PrimaryButton
        label={cta === 'finish' ? 'Finish' : 'Continue'}
        trailingIcon="arrow-right"
        disabled={disabled}
        onPress={next}
      />
    );

  if (step.kind === 'screen') {
    const { screen } = step;
    const { page } = screen;
    // The pill counts JSON pages ("3 / 8").
    counter = `${page.page_number} / ${lesson.pages.length}`;
    counterLabel = `Page ${page.page_number} of ${lesson.pages.length}${screen.parts > 1 ? `, part ${screen.part + 1} of ${screen.parts}` : ''}`;
    body = <LessonPageView lessonTitle={lesson.lessonTitle} screen={screen} visuals={visuals} />;
    footer = continueButton();
  } else if (step.kind === 'question') {
    const q = lesson.questions[step.questionId];
    const answer = state.answers[q.id];
    if (step.context === 'final') {
      counter = `Quiz ${step.position}/${step.count}`;
      counterLabel = `Final check, question ${step.position} of ${step.count}`;
    } else if (step.context === 'check') {
      counter = `Check ${step.position}/${step.count}`;
      counterLabel = `Quick check, question ${step.position} of ${step.count}`;
    } else {
      counter = `${step.pageNumber} / ${lesson.pages.length}`;
      counterLabel = `Page ${step.pageNumber} of ${lesson.pages.length}, practice ${step.position} of ${step.count}`;
    }
    body = (
      <View style={styles.quiz}>
        <QuizIntro
          pill={lesson.lessonTitle}
          title={step.heading}
          meta={step.context === 'check' ? `Quick check · ${step.count} question${step.count === 1 ? '' : 's'}` : undefined}
        />
        <QuestionCard
          number={step.position}
          question={q}
          answer={answer}
          seed={seed}
          onAnswer={(a) => {
            dispatch({ type: 'answer', questionId: q.id, answer: a });
            // Bring the explanation into view.
            setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 150);
            const result = grade(q, a);
            if (result !== null) AccessibilityInfo.announceForAccessibility(result ? 'Correct!' : 'Not quite.');
          }}
        />
      </View>
    );
    // Same Continue as the lessons, enabled once the question is answered.
    footer = continueButton(answer === undefined);
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
        <OutlineButton label="Review lesson" icon="restart" onPress={review} />
      </View>
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <LessonHeader
        stageTitle={topic.stage.title}
        stageArt={STAGE_ART[topic.stage.number]}
        counter={counter}
        counterLabel={counterLabel}
        onBack={back}
      />
      {/* "padding" on both platforms: Android is edge-to-edge, so typed answers need room above the keyboard. */}
      <KeyboardAvoidingView style={styles.fill} behavior="padding">
        <ScrollView
          ref={scrollRef}
          style={styles.fill}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View key={stepKey} entering={entering}>
            {body}
          </Animated.View>
        </ScrollView>
        <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, space.lg) + space.sm }]}>{footer}</View>
      </KeyboardAvoidingView>
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
