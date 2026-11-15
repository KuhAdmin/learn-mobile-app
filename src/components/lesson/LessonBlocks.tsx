import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import type { ReactNode } from 'react';
import { StyleSheet, View, type DimensionValue, type StyleProp, type ViewStyle } from 'react-native';

import { AppText } from '@/components/AppText';
import { TopicIcon } from '@/components/learning-path/TopicIcon';
import { Sparkle } from '@/components/Sparkle';
import type { LessonArt, PhraseAnnotation } from '@/lessons/presentation';
import type { ExampleItem } from '@/lessons/schema';
import { splitTokenSentences, tokenizeSentence, toneAt, type ChipTone, type WordToken } from '@/lessons/sentence';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

import { Lightbulb } from './Lightbulb';

/* ───────────── Headline pieces ───────────── */

/** Lesson name pill above every page title ("Discover Parts of Speech"). */
export function LessonPill({ label }: { label: string }) {
  return (
    <View style={styles.lessonPill}>
      <AppText style={styles.lessonPillText} numberOfLines={2}>
        {label}
      </AppText>
    </View>
  );
}

export function PageTitle({ children }: { children: string }) {
  return (
    <View style={styles.titleRow}>
      <AppText accessibilityRole="header" style={styles.title} maxFontSizeMultiplier={1.3}>
        {children}
      </AppText>
      <Sparkle style={styles.sparkle} />
    </View>
  );
}

export function BodyText({ children }: { children: string }) {
  return <AppText style={styles.body}>{children}</AppText>;
}

export function LessonArtImage({ art, width = '100%' }: { art: LessonArt; width?: DimensionValue }) {
  return (
    <Image
      source={art.source}
      style={{ width, aspectRatio: art.aspect }}
      contentFit="contain"
      accessible
      accessibilityRole="image"
      accessibilityLabel={art.label}
    />
  );
}

/** Text with a picture beside it (`side`) or under it (`wide`), as in the mockups. */
export function WithArt({ art, layout = 'side', children }: { art?: LessonArt; layout?: 'side' | 'wide'; children: ReactNode }) {
  if (!art) return <>{children}</>;
  if (layout === 'wide') {
    return (
      <View style={styles.stack}>
        {children}
        <LessonArtImage art={art} />
      </View>
    );
  }
  // Tall art (e.g. the pencil mascot) takes a narrower column.
  const artWidth = art.aspect < 0.8 ? '32%' : '44%';
  return (
    <View style={styles.sideRow}>
      <View style={styles.flex}>{children}</View>
      <LessonArtImage art={art} width={artWidth} />
    </View>
  );
}

/* ───────────── Word chips ───────────── */

const CHIP_BG: Record<ChipTone, string> = { teal: colors.selectedFill, salmon: colors.peachFill };

type ChipSize = 'lg' | 'md' | 'sm';

function WordChip({ text, tone, size = 'lg' }: { text: string; tone: ChipTone | null; size?: ChipSize }) {
  return (
    <View style={[styles.chip, chipSize[size].box, tone && { backgroundColor: CHIP_BG[tone] }]}>
      <AppText style={[styles.chipText, chipSize[size].text]} maxFontSizeMultiplier={1.2}>
        {text}
      </AppText>
    </View>
  );
}

function ChipLine({ tokens, size, label }: { tokens: WordToken[]; size?: ChipSize; label: string }) {
  return (
    <View style={styles.chipLine} accessible accessibilityLabel={label}>
      {tokens.map((t, i) => (
        <WordChip key={i} text={t.text} tone={t.tone} size={size} />
      ))}
    </View>
  );
}

function SoftTag({ children }: { children: string }) {
  return (
    <View style={styles.softTag}>
      <AppText style={styles.softTagText}>{children}</AppText>
    </View>
  );
}

/* ───────────── Example blocks ───────────── */

/** "Example" card: the sentence as word chips, the explanation, optional picture on the right. */
export function ExampleCard({ example, art }: { example: ExampleItem; art?: LessonArt }) {
  const tokens = tokenizeSentence(example.sentence, example.highlight);
  return (
    <View style={styles.card}>
      <SoftTag>Example</SoftTag>
      <View style={styles.sideRow}>
        <View style={[styles.flex, styles.gapMd]}>
          <ChipLine tokens={tokens} label={example.sentence} />
          <AppText style={styles.explanation}>{example.explanation}</AppText>
        </View>
        {art ? <LessonArtImage art={art} width="34%" /> : null}
      </View>
    </View>
  );
}

/**
 * "Example" card with role labels under each phrase ("My brother" → tells who · the subject).
 * The labels restate the explanation, so it is read to screen readers rather than shown twice.
 */
export function AnnotatedExampleCard({ example, phrases }: { example: ExampleItem; phrases: PhraseAnnotation[] }) {
  return (
    <View style={styles.card} accessible accessibilityLabel={`Example: ${example.sentence} ${example.explanation}`}>
      <SoftTag>Example</SoftTag>
      <View style={styles.phraseRow}>
        {phrases.map((p, i) => (
          // Width follows the phrase length, so a long role label can't squeeze its phrase.
          <View key={p.text} style={[styles.phraseCol, { flex: p.text.length + 2 }]}>
            <View style={[styles.chip, chipSize.md.box, { backgroundColor: CHIP_BG[toneAt(i)] }]}>
              <AppText style={[styles.chipText, chipSize.md.text]} maxFontSizeMultiplier={1.2}>
                {p.text}
              </AppText>
            </View>
            <MaterialCommunityIcons name="arrow-up-thin" size={22} color={colors.ink} />
            <View style={styles.rolePill}>
              <AppText style={styles.roleText} align="center" maxFontSizeMultiplier={1.2}>
                {p.label}
              </AppText>
              {p.note ? (
                <AppText style={styles.roleNote} align="center" maxFontSizeMultiplier={1.2}>
                  {`(${p.note})`}
                </AppText>
              ) : null}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

/** One picture per sentence with the sentence under it, then the explanation ("A Word Can Change Its Job"). */
export function SentencePictures({ example, arts }: { example: ExampleItem; arts: LessonArt[] }) {
  const sentences = splitTokenSentences(tokenizeSentence(example.sentence, example.highlight));
  return (
    <View style={styles.stack}>
      <View style={styles.pictureRow}>
        {sentences.map((tokens, i) => (
          <View key={i} style={styles.pictureCol}>
            {arts[i] ? <LessonArtImage art={arts[i]} /> : null}
            {i < sentences.length - 1 ? (
              <MaterialCommunityIcons name="arrow-right-thin" size={28} color={colors.ink} style={styles.pictureArrow} />
            ) : null}
            <View style={styles.sentenceBubble}>
              <ChipLine tokens={tokens} size="sm" label={tokens.map((t) => t.text).join(' ')} />
            </View>
          </View>
        ))}
      </View>
      <InfoCard icon={<TopicIcon name="book" size={52} />} label="Explanation">
        <AppText style={styles.cardBody}>{example.explanation}</AppText>
      </InfoCard>
    </View>
  );
}

/* ───────────── Cards ───────────── */

interface InfoCardProps {
  icon: ReactNode;
  label: string;
  /** Mint card + solid teal tag (Key Takeaway / quiz Explanation) vs white card + soft tag. */
  emphasis?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function InfoCard({ icon, label, emphasis = false, children, style }: InfoCardProps) {
  return (
    <View style={[styles.infoCard, emphasis && styles.infoCardEmphasis, style]} accessible>
      <View style={styles.infoIcon}>{icon}</View>
      <View style={styles.infoDivider} />
      <View style={[styles.flex, styles.gapSm]}>
        {emphasis ? (
          <View style={styles.solidTag}>
            <AppText style={styles.solidTagText}>{label}</AppText>
          </View>
        ) : (
          <SoftTag>{label}</SoftTag>
        )}
        {children}
      </View>
    </View>
  );
}

export function NoteCard({ text }: { text: string }) {
  return (
    <InfoCard icon={<Lightbulb />} label="Note">
      <AppText style={styles.cardBody}>{text}</AppText>
    </InfoCard>
  );
}

export function KeyTakeaway({ text }: { text: string }) {
  return (
    <InfoCard icon={<Lightbulb />} label="Key Takeaway" emphasis>
      <AppText style={styles.takeaway} maxFontSizeMultiplier={1.3}>
        {text}
      </AppText>
    </InfoCard>
  );
}

/** Summary checklist ("What Have You Learned?"). */
export function SummaryList({ items }: { items: string[] }) {
  return (
    <View style={styles.listCard}>
      {items.map((item, i) => (
        <View key={i} style={[styles.listRow, i > 0 && styles.listDivider]}>
          <View style={styles.listCheck}>
            <MaterialCommunityIcons name="check" size={16} color={colors.onInk} />
          </View>
          <AppText style={[styles.cardBody, styles.flex]}>{item}</AppText>
        </View>
      ))}
    </View>
  );
}

const chipSize = {
  lg: StyleSheet.create({
    box: { paddingHorizontal: 10, paddingVertical: 2, borderRadius: 14 },
    text: { fontSize: 22, lineHeight: 32 },
  }),
  md: StyleSheet.create({
    box: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 12, alignSelf: 'stretch' },
    text: { fontSize: 18, lineHeight: 26, textAlign: 'center' },
  }),
  sm: StyleSheet.create({
    box: { paddingHorizontal: 5, paddingVertical: 0, borderRadius: 8 },
    text: { fontSize: 16, lineHeight: 24 },
  }),
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  gapSm: { gap: space.sm },
  gapMd: { gap: space.md },
  stack: { gap: space.lg },
  lessonPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: space.lg,
    paddingVertical: 6,
    borderRadius: radii.pill,
    backgroundColor: colors.selectedFill,
  },
  lessonPillText: { fontFamily: fonts.serif, fontSize: 16, lineHeight: 22, color: colors.ink },
  titleRow: { flexDirection: 'row', alignItems: 'flex-start' },
  title: { flexShrink: 1, fontFamily: fonts.serifBold, fontSize: 30, lineHeight: 37, color: colors.ink },
  sparkle: { marginLeft: 2, marginTop: -8 },
  body: { fontFamily: fonts.sans, fontSize: 16, lineHeight: 25, color: colors.ink },
  sideRow: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  card: {
    gap: space.md,
    padding: space.lg,
    borderRadius: radii.block,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  softTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: space.md,
    paddingVertical: 3,
    borderRadius: radii.pill,
    backgroundColor: colors.selectedFill,
  },
  softTagText: { fontFamily: fonts.serif, fontSize: 15, lineHeight: 20, color: colors.ink },
  chipLine: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  chip: {},
  chipText: { fontFamily: fonts.serifBold, color: colors.ink },
  explanation: { fontFamily: fonts.sans, fontSize: 15, lineHeight: 22, color: colors.inkMuted },
  phraseRow: { flexDirection: 'row', gap: space.sm },
  phraseCol: { flexBasis: 0, alignItems: 'center', gap: 2 },
  rolePill: {
    alignSelf: 'stretch',
    paddingHorizontal: 4,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  roleText: { fontFamily: fonts.sansMedium, fontSize: 12, lineHeight: 16, color: colors.ink },
  roleNote: { fontFamily: fonts.sans, fontSize: 11, lineHeight: 15, color: colors.inkMuted },
  pictureRow: { flexDirection: 'row', gap: space.md },
  pictureCol: { flex: 1, gap: space.sm },
  pictureArrow: { position: 'absolute', right: -space.md - 8, top: '22%' },
  sentenceBubble: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: space.sm,
    paddingVertical: space.sm,
    borderRadius: 16,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.lg,
    borderRadius: radii.block,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  infoCardEmphasis: { backgroundColor: colors.mintCard },
  infoIcon: { width: 52, alignItems: 'center' },
  infoDivider: { width: 1.5, alignSelf: 'stretch', marginVertical: space.xs, backgroundColor: colors.ink },
  solidTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: space.md,
    paddingVertical: 3,
    borderRadius: radii.pill,
    backgroundColor: colors.pathTeal,
  },
  solidTagText: { fontFamily: fonts.sansSemiBold, fontSize: 14, lineHeight: 19, color: colors.onInk },
  cardBody: { fontFamily: fonts.sans, fontSize: 15, lineHeight: 22, color: colors.ink },
  takeaway: { fontFamily: fonts.serifBold, fontSize: 20, lineHeight: 26, color: colors.ink },
  listCard: {
    flex: 1,
    paddingHorizontal: space.lg,
    paddingVertical: space.xs,
    borderRadius: radii.block,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  listRow: { flexDirection: 'row', alignItems: 'center', gap: space.md, paddingVertical: space.md },
  listDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.inkSubtle },
  listCheck: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.pathTeal,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
