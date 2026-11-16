import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { expectedText, grade, type Answer } from '@/lessons/answers';
import type { Question } from '@/lessons/model';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

import { InfoCard, LessonPill, PageTitle } from './LessonBlocks';
import { Lightbulb } from './Lightbulb';

/** Question page head: context pill + title ("Check Your Understanding", a quick-check title, …). */
export function QuizIntro({ pill, title }: { pill: string; title: string }) {
  return (
    <View style={styles.intro}>
      <LessonPill label={pill} />
      <PageTitle>{title}</PageTitle>
    </View>
  );
}

interface QuestionCardProps {
  number: number;
  question: Question;
  answer?: Answer;
  onAnswer: (answer: Answer) => void;
}

/**
 * One question of any type. Choice questions lock on the first tap; typed and matching questions
 * lock when "Check" is pressed. The explanation appears once answered.
 */
export function QuestionCard({ number, question, answer, onAnswer }: QuestionCardProps) {
  const result = grade(question, answer);
  return (
    <View style={styles.card}>
      <View style={styles.qHead}>
        <View style={styles.qNumber}>
          <AppText style={styles.qNumberText}>{number}</AppText>
        </View>
        <AppText accessibilityRole="header" style={styles.qText} maxFontSizeMultiplier={1.3}>
          {question.prompt}
        </AppText>
      </View>
      <AnswerArea question={question} answer={answer} onAnswer={onAnswer} />
      {answer ? (
        <InfoCard icon={<Lightbulb />} label="Explanation" emphasis style={styles.explanation}>
          <AppText style={styles.explanationText} accessibilityLiveRegion="polite">
            {`${result === true ? 'Correct! ' : result === false ? 'Not quite. ' : ''}${question.explanation}`}
          </AppText>
        </InfoCard>
      ) : null}
    </View>
  );
}

function AnswerArea({ question, answer, onAnswer }: Required<Pick<QuestionCardProps, 'question' | 'onAnswer'>> & { answer?: Answer }) {
  switch (question.type) {
    case 'multiple_choice':
      return (
        <ChoiceList
          options={question.options.map((o) => ({ id: o.id, text: o.text, letter: o.id.length === 1 ? o.id : undefined }))}
          correctId={question.correctIds[0]}
          chosenId={answer?.kind === 'choice' ? answer.id : undefined}
          onChoose={(id) => onAnswer({ kind: 'choice', id })}
        />
      );
    case 'true_false':
      return (
        <ChoiceList
          options={[
            { id: 'true', text: 'True' },
            { id: 'false', text: 'False' },
          ]}
          correctId={String(question.correct)}
          chosenId={answer?.kind === 'bool' ? String(answer.value) : undefined}
          onChoose={(id) => onAnswer({ kind: 'bool', value: id === 'true' })}
        />
      );
    case 'identify':
    case 'sentence_correction':
    case 'fill_blank':
      return <TypedAnswer question={question} answer={answer} onAnswer={onAnswer} />;
    case 'match_the_pair':
      return <MatchPairs question={question} answer={answer} onAnswer={onAnswer} />;
    case 'flash_card':
      return <FlashCard question={question} revealed={answer?.kind === 'reveal'} onReveal={() => onAnswer({ kind: 'reveal' })} />;
  }
}

/* ───────────── Choice questions ───────────── */

type OptionState = 'idle' | 'correct' | 'wrong' | 'rest';

const OPTION_LOOK: Record<OptionState, { bg: string; border: string; dot?: string; badge: string }> = {
  idle: { bg: colors.surface, border: colors.inkSubtle, badge: '#E6ECEE' },
  correct: { bg: colors.mintCard, border: colors.pathTeal, dot: colors.pathTeal, badge: colors.selectedFill },
  wrong: { bg: colors.wrongFill, border: colors.accentSalmon, dot: colors.accentSalmon, badge: colors.peachFill },
  rest: { bg: colors.surface, border: colors.divider, badge: '#E6ECEE' },
};

interface ChoiceListProps {
  options: { id: string; text: string; letter?: string }[];
  correctId: string;
  chosenId?: string;
  onChoose: (id: string) => void;
}

function ChoiceList({ options, correctId, chosenId, onChoose }: ChoiceListProps) {
  const answered = chosenId !== undefined;
  const stateOf = (id: string): OptionState => {
    if (!answered) return 'idle';
    if (id === correctId) return 'correct';
    return id === chosenId ? 'wrong' : 'rest';
  };
  return (
    <View accessibilityRole="radiogroup" style={styles.options}>
      {options.map((o) => (
        <OptionRow
          key={o.id}
          text={o.text}
          letter={o.letter}
          state={stateOf(o.id)}
          selected={o.id === chosenId}
          disabled={answered}
          onPress={() => onChoose(o.id)}
        />
      ))}
    </View>
  );
}

interface OptionRowProps {
  text: string;
  letter?: string;
  state: OptionState;
  selected: boolean;
  disabled: boolean;
  onPress: () => void;
}

function OptionRow({ text, letter, state, selected, disabled, onPress }: OptionRowProps) {
  const look = OPTION_LOOK[state];
  const verdict = state === 'correct' ? ', correct answer' : state === 'wrong' ? ', incorrect' : '';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected, disabled }}
      accessibilityLabel={`${letter ? `${letter}. ` : ''}${text}${verdict}`}
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
      {letter ? (
        <View style={[styles.letter, { backgroundColor: look.badge }]}>
          <AppText style={styles.letterText}>{letter}</AppText>
        </View>
      ) : null}
      <AppText style={[styles.optionText, state === 'rest' && styles.optionTextRest]}>{text}</AppText>
      {state === 'correct' ? <MaterialCommunityIcons name="check-bold" size={24} color={colors.pathTeal} /> : null}
      {state === 'wrong' ? <MaterialCommunityIcons name="close-thick" size={22} color={WRONG} /> : null}
    </Pressable>
  );
}

/* ───────────── Typed answers (identify, fill in the blank, sentence correction) ───────────── */

type TypedQuestion = Extract<Question, { type: 'identify' | 'sentence_correction' | 'fill_blank' }>;

function TypedAnswer({ question, answer, onAnswer }: { question: TypedQuestion; answer?: Answer; onAnswer: (a: Answer) => void }) {
  const fields = question.type === 'fill_blank' ? question.blanks.length : 1;
  const [values, setValues] = useState<string[]>(() => Array(fields).fill(''));
  const locked = answer?.kind === 'text';
  const shown = locked ? answer.values : values;
  const result = grade(question, answer);
  const ready = values.every((v) => v.trim());
  const placeholder =
    question.type === 'sentence_correction' ? 'Write the corrected sentence' : question.type === 'fill_blank' ? 'Type the missing word' : 'Type your answer';

  return (
    <View style={styles.options}>
      {question.type === 'sentence_correction' ? (
        <View style={styles.sentenceBox}>
          <AppText style={styles.sentenceText}>{question.original}</AppText>
        </View>
      ) : null}
      {shown.map((value, i) => (
        <View
          key={i}
          style={[
            styles.inputBox,
            locked && (result ? styles.inputRight : styles.inputWrong),
          ]}
        >
          <TextInput
            value={value}
            editable={!locked}
            onChangeText={(t) => setValues((v) => v.map((x, j) => (j === i ? t : x)))}
            onSubmitEditing={() => ready && onAnswer({ kind: 'text', values })}
            placeholder={fields > 1 ? `${placeholder} (${i + 1})` : placeholder}
            placeholderTextColor={colors.inkSubtle}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            accessibilityLabel={fields > 1 ? `Answer ${i + 1}` : 'Your answer'}
            maxFontSizeMultiplier={1.3}
            style={styles.input}
          />
          {locked ? (
            <MaterialCommunityIcons name={result ? 'check-bold' : 'close-thick'} size={22} color={result ? colors.pathTeal : WRONG} />
          ) : null}
        </View>
      ))}
      {locked && !result ? (
        <AppText style={styles.expected}>{`Answer: ${expectedText(question)}`}</AppText>
      ) : null}
      {!locked ? (
        <SmallButton label="Check" disabled={!ready} onPress={() => onAnswer({ kind: 'text', values: values.map((v) => v.trim()) })} />
      ) : null}
    </View>
  );
}

/* ───────────── Match the pair ───────────── */

type MatchQuestion = Extract<Question, { type: 'match_the_pair' }>;

/**
 * Each left item has a slot. Tap a word below to put it in the highlighted slot; tap a filled slot
 * to empty it. "Check" grades all pairs at once.
 */
function MatchPairs({ question, answer, onAnswer }: { question: MatchQuestion; answer?: Answer; onAnswer: (a: Answer) => void }) {
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [active, setActive] = useState<string | undefined>(question.left[0]?.id);
  const locked = answer?.kind === 'pairs';
  const shown = locked ? answer.pairs : pairs;
  const used = new Set(Object.values(shown));
  const rightText = (id: string | undefined) => question.right.find((r) => r.id === id)?.text;
  const nextEmpty = (p: Record<string, string>, after?: string) => {
    const order = question.left.map((l) => l.id);
    const start = after ? order.indexOf(after) + 1 : 0;
    return [...order.slice(start), ...order.slice(0, start)].find((id) => !p[id]);
  };

  const place = (rightId: string) => {
    if (locked || !active) return;
    const next = { ...pairs, [active]: rightId };
    setPairs(next);
    setActive(nextEmpty(next, active));
  };
  const clear = (leftId: string) => {
    if (locked) return;
    const next = { ...pairs };
    delete next[leftId];
    setPairs(next);
    setActive(leftId);
  };

  return (
    <View style={styles.options}>
      {question.left.map((l) => {
        const chosen = shown[l.id];
        const right = locked ? chosen === question.pairs[l.id] : undefined;
        return (
          <View key={l.id} style={styles.matchRow}>
            <AppText style={styles.matchLeft} maxFontSizeMultiplier={1.2}>
              {l.text}
            </AppText>
            <Pressable
              onPress={() => (chosen ? clear(l.id) : setActive(l.id))}
              disabled={locked}
              accessibilityRole="button"
              accessibilityLabel={`${l.text}: ${chosen ? rightText(chosen) : 'empty'}${right === true ? ', correct' : right === false ? `, incorrect, answer ${rightText(question.pairs[l.id])}` : ''}`}
              accessibilityHint={locked ? undefined : chosen ? 'Clears this match' : 'Selects this slot'}
              style={[
                styles.slot,
                !chosen && styles.slotEmpty,
                !locked && active === l.id && styles.slotActive,
                right === true && styles.inputRight,
                right === false && styles.inputWrong,
              ]}
            >
              <AppText style={[styles.slotText, !chosen && styles.slotPlaceholder]} maxFontSizeMultiplier={1.2}>
                {chosen ? rightText(chosen) : active === l.id ? 'Choose below' : 'Tap to choose'}
              </AppText>
              {right === false ? (
                <AppText style={styles.slotFix} maxFontSizeMultiplier={1.2}>
                  {rightText(question.pairs[l.id])}
                </AppText>
              ) : null}
            </Pressable>
          </View>
        );
      })}
      {!locked ? (
        <>
          <View style={styles.bank}>
            {question.right
              .filter((r) => !used.has(r.id))
              .map((r) => (
                <Pressable
                  key={r.id}
                  onPress={() => place(r.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Match: ${r.text}`}
                  style={({ pressed }) => [styles.bankChip, pressed && styles.pressed]}
                >
                  <AppText style={styles.bankText} maxFontSizeMultiplier={1.2}>
                    {r.text}
                  </AppText>
                </Pressable>
              ))}
          </View>
          <SmallButton
            label="Check"
            disabled={Object.keys(pairs).length < question.left.length}
            onPress={() => onAnswer({ kind: 'pairs', pairs })}
          />
        </>
      ) : null}
    </View>
  );
}

/* ───────────── Flash card ───────────── */

function FlashCard({ question, revealed, onReveal }: { question: Extract<Question, { type: 'flash_card' }>; revealed: boolean; onReveal: () => void }) {
  return (
    <Pressable
      onPress={onReveal}
      disabled={revealed}
      accessibilityRole="button"
      accessibilityLabel={revealed ? `${question.front}. ${question.back}` : `${question.front}. Tap to reveal`}
      style={[styles.flash, revealed && styles.inputRight]}
    >
      <AppText style={styles.flashFront} align="center">
        {question.front}
      </AppText>
      <AppText style={revealed ? styles.flashBack : styles.slotPlaceholder} align="center">
        {revealed ? question.back : 'Tap to reveal'}
      </AppText>
    </Pressable>
  );
}

function SmallButton({ label, disabled, onPress }: { label: string; disabled: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [styles.smallButton, disabled && styles.smallButtonDisabled, pressed && styles.pressed]}
    >
      <AppText style={styles.smallButtonText}>{label}</AppText>
    </Pressable>
  );
}

const WRONG = '#D9694F';

const styles = StyleSheet.create({
  intro: { gap: space.md },
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
  qText: { flex: 1, fontFamily: fonts.serifBold, fontSize: 19, lineHeight: 25, color: colors.ink },
  options: { gap: space.md },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: 56,
    paddingHorizontal: space.md,
    paddingVertical: space.sm + 2,
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
  sentenceBox: { padding: space.md, borderRadius: radii.card, backgroundColor: colors.mintCard },
  sentenceText: { fontFamily: fonts.serifBold, fontSize: 18, lineHeight: 24, color: colors.ink },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    minHeight: 54,
    paddingHorizontal: space.md,
    borderRadius: radii.card,
    borderWidth,
    borderColor: colors.inkSubtle,
    backgroundColor: colors.surface,
  },
  input: { flex: 1, fontFamily: fonts.sans, fontSize: 17, color: colors.ink, paddingVertical: space.sm },
  inputRight: { borderColor: colors.pathTeal, borderWidth: 2, backgroundColor: colors.mintCard },
  inputWrong: { borderColor: colors.accentSalmon, borderWidth: 2, backgroundColor: colors.wrongFill },
  expected: { fontFamily: fonts.sansSemiBold, fontSize: 15, lineHeight: 21, color: colors.ink },
  smallButton: {
    alignSelf: 'flex-end',
    minWidth: 110,
    minHeight: 44,
    paddingHorizontal: space.xl,
    borderRadius: radii.pill,
    backgroundColor: colors.pathTeal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButtonDisabled: { backgroundColor: colors.disabled },
  smallButtonText: { fontFamily: fonts.sansSemiBold, fontSize: 16, lineHeight: 22, color: colors.onInk },
  matchRow: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  matchLeft: { width: 104, fontFamily: fonts.serifBold, fontSize: 15, lineHeight: 20, color: colors.ink },
  slot: {
    flex: 1,
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: space.sm + 2,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth,
    borderColor: colors.inkSubtle,
    backgroundColor: colors.surface,
  },
  slotEmpty: { borderStyle: 'dashed' },
  slotActive: { borderColor: colors.pathTeal, borderWidth: 2, borderStyle: 'solid' },
  slotText: { fontFamily: fonts.sans, fontSize: 14, lineHeight: 19, color: colors.ink },
  slotPlaceholder: { fontFamily: fonts.sans, fontSize: 14, lineHeight: 19, color: colors.inkSubtle },
  slotFix: { fontFamily: fonts.sansSemiBold, fontSize: 13, lineHeight: 18, color: colors.pathTeal },
  bank: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm, paddingTop: space.xs },
  bankChip: {
    minHeight: 40,
    justifyContent: 'center',
    paddingHorizontal: space.md,
    paddingVertical: 6,
    borderRadius: radii.pill,
    backgroundColor: colors.peachFill,
  },
  bankText: { fontFamily: fonts.sansMedium, fontSize: 14, lineHeight: 19, color: colors.ink },
  flash: {
    gap: space.md,
    padding: space.xl,
    borderRadius: radii.card,
    borderWidth,
    borderColor: colors.inkSubtle,
    backgroundColor: colors.surface,
  },
  flashFront: { fontFamily: fonts.serifBold, fontSize: 20, lineHeight: 26, color: colors.ink },
  flashBack: { fontFamily: fonts.sans, fontSize: 16, lineHeight: 23, color: colors.ink },
});
