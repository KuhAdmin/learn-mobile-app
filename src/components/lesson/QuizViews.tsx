import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { isCorrect } from '@/lessons/lesson-flow';
import type { LessonArt } from '@/lessons/presentation';
import type { QuizOption, QuizQuestion } from '@/lessons/schema';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

import { BodyText, InfoCard, LessonPill, PageTitle, WithArt } from './LessonBlocks';
import { Lightbulb } from './Lightbulb';

/** Quiz page head: lesson pill, "Check Your Understanding", subtitle and clipboard art. */
export function QuizIntro({ lessonTitle, title, art }: { lessonTitle: string; title: string; art?: LessonArt }) {
  return (
    <View style={styles.intro}>
      <LessonPill label={lessonTitle} />
      <PageTitle>{title}</PageTitle>
      <WithArt art={art}>
        <BodyText>Answer the questions to see how much you’ve learned.</BodyText>
      </WithArt>
    </View>
  );
}

type OptionState = 'idle' | 'correct' | 'wrong' | 'rest';

interface QuestionCardProps {
  number: number;
  question: QuizQuestion;
  answer?: string;
  onAnswer: (optionId: string) => void;
}

/** One knowledge-check question. The first tap locks the answer and reveals the correct option. */
export function QuestionCard({ number, question, answer, onAnswer }: QuestionCardProps) {
  const answered = answer !== undefined;
  const stateOf = (o: QuizOption): OptionState => {
    if (!answered) return 'idle';
    if (isCorrect(question, o.option_id)) return 'correct';
    return o.option_id === answer ? 'wrong' : 'rest';
  };

  return (
    <View style={styles.stack}>
      <View style={styles.card}>
        <View style={styles.qHead}>
          <View style={styles.qNumber}>
            <AppText style={styles.qNumberText}>{number}</AppText>
          </View>
          <AppText accessibilityRole="header" style={styles.qText} maxFontSizeMultiplier={1.3}>
            {question.question}
          </AppText>
        </View>
        <View accessibilityRole="radiogroup" style={styles.options}>
          {question.options.map((o) => (
            <OptionRow
              key={o.option_id}
              option={o}
              state={stateOf(o)}
              selected={o.option_id === answer}
              showLetter={o.option_id.length === 1}
              disabled={answered}
              onPress={() => onAnswer(o.option_id)}
            />
          ))}
        </View>
        {answered ? (
          <InfoCard icon={<Lightbulb />} label="Explanation" emphasis style={styles.explanation}>
            <AppText style={styles.explanationText} accessibilityLiveRegion="polite">
              {`${isCorrect(question, answer) ? 'Correct! ' : 'Not quite. '}${question.explanation}`}
            </AppText>
          </InfoCard>
        ) : null}
      </View>
    </View>
  );
}

const OPTION_LOOK: Record<OptionState, { bg: string; border: string; dot?: string; badge: string }> = {
  idle: { bg: colors.surface, border: colors.inkSubtle, badge: '#E6ECEE' },
  correct: { bg: colors.mintCard, border: colors.pathTeal, dot: colors.pathTeal, badge: colors.selectedFill },
  wrong: { bg: colors.wrongFill, border: colors.accentSalmon, dot: colors.accentSalmon, badge: colors.peachFill },
  rest: { bg: colors.surface, border: colors.divider, badge: '#E6ECEE' },
};

interface OptionRowProps {
  option: QuizOption;
  state: OptionState;
  selected: boolean;
  showLetter: boolean;
  disabled: boolean;
  onPress: () => void;
}

function OptionRow({ option, state, selected, showLetter, disabled, onPress }: OptionRowProps) {
  const look = OPTION_LOOK[state];
  const verdict = state === 'correct' ? ', correct answer' : state === 'wrong' ? ', incorrect' : '';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected, disabled }}
      accessibilityLabel={`${showLetter ? `${option.option_id}. ` : ''}${option.text}${verdict}`}
      style={({ pressed }) => [
        styles.option,
        { backgroundColor: look.bg, borderColor: look.border },
        state === 'correct' && styles.optionStrong,
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.radio, selected && look.dot ? { borderColor: look.dot } : null]}>
        {selected && look.dot ? <View style={[styles.radioDot, { backgroundColor: look.dot }]} /> : null}
      </View>
      {showLetter ? (
        <View style={[styles.letter, { backgroundColor: look.badge }]}>
          <AppText style={styles.letterText}>{option.option_id}</AppText>
        </View>
      ) : null}
      <AppText style={[styles.optionText, state === 'rest' && styles.optionTextRest]}>{option.text}</AppText>
      {state === 'correct' ? <MaterialCommunityIcons name="check-bold" size={24} color={colors.pathTeal} /> : null}
      {state === 'wrong' ? <MaterialCommunityIcons name="close-thick" size={22} color="#D9694F" /> : null}
    </Pressable>
  );
}

interface QuizFooterProps {
  index: number;
  count: number;
  canContinue: boolean;
  onNext: () => void;
}

/** "1 / 4", progress dots and the round next button (enabled once the question is answered). */
export function QuizFooter({ index, count, canContinue, onNext }: QuizFooterProps) {
  const last = index === count - 1;
  return (
    <View style={styles.footer}>
      <View style={styles.footerSide} />
      <View style={styles.footerCenter}>
        <AppText style={styles.counter}>{`${index + 1} / ${count}`}</AppText>
        <View style={styles.dots} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {Array.from({ length: count }, (_, i) => (
            <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
          ))}
        </View>
      </View>
      <View style={styles.footerSide}>
        <Pressable
          onPress={onNext}
          disabled={!canContinue}
          accessibilityRole="button"
          accessibilityLabel={last ? 'Finish quiz' : 'Next question'}
          accessibilityState={{ disabled: !canContinue }}
          style={({ pressed }) => [styles.next, !canContinue && styles.nextDisabled, pressed && styles.pressed]}
        >
          <MaterialCommunityIcons
            name={last ? 'check' : 'chevron-right'}
            size={30}
            color={canContinue ? colors.ink : colors.disabled}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  intro: { gap: space.md },
  stack: { gap: space.lg },
  card: {
    gap: space.md,
    padding: space.md,
    borderRadius: radii.block,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  qHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.md,
    borderRadius: radii.card,
    backgroundColor: colors.mintCard,
  },
  qNumber: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.pathTeal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qNumberText: { fontFamily: fonts.serifBold, fontSize: 19, lineHeight: 24, color: colors.onInk },
  qText: { flex: 1, fontFamily: fonts.serifBold, fontSize: 20, lineHeight: 26, color: colors.ink },
  options: { gap: space.md },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: 60,
    paddingHorizontal: space.md,
    paddingVertical: space.md,
    borderRadius: radii.card,
    borderWidth,
  },
  optionStrong: { borderWidth: 2 },
  pressed: { opacity: 0.85 },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: { width: 13, height: 13, borderRadius: 7 },
  letter: { width: 34, height: 34, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  letterText: { fontFamily: fonts.serifBold, fontSize: 17, lineHeight: 22, color: colors.ink },
  optionText: { flex: 1, fontFamily: fonts.sans, fontSize: 16, lineHeight: 22, color: colors.ink },
  optionTextRest: { color: colors.inkMuted },
  explanation: { borderWidth: 0, padding: space.md },
  explanationText: { fontFamily: fonts.sans, fontSize: 15, lineHeight: 22, color: colors.ink },
  footer: { flexDirection: 'row', alignItems: 'center' },
  footerSide: { width: 60, alignItems: 'flex-end' },
  footerCenter: { flex: 1, alignItems: 'center', gap: space.sm },
  counter: { fontFamily: fonts.serifBold, fontSize: 18, lineHeight: 24, color: colors.ink },
  dots: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.disabled },
  dotActive: { width: 14, height: 14, borderRadius: 7, backgroundColor: colors.pathTeal },
  next: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextDisabled: { borderColor: colors.disabled },
});
