import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import type { ReactNode } from 'react';
import { Platform, StyleSheet, View, type DimensionValue, type StyleProp, type ViewStyle } from 'react-native';

import { AppText } from '@/components/AppText';
import { TopicIcon } from '@/components/learning-path/TopicIcon';
import { Sparkle } from '@/components/Sparkle';
import type { IconName } from '@/data/options';
import { parseList } from '@/lessons/list-items';
import type { ComparisonItem, ContentBlock, ExampleItem } from '@/lessons/model';
import { LIST_ICONS, type LessonArt, type PhraseAnnotation } from '@/lessons/presentation';
import { artBesideSentence, COMPARISON_ROW_ART, comparisonAsRows, EXAMPLE_ART_SHARE } from '@/lessons/screens';
import {
  groupExamples,
  highlightList,
  splitTokenSentences,
  tokenizeGroups,
  tokenizeSentence,
  toneAt,
  type ChipTone,
  type WordToken,
} from '@/lessons/sentence';
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
      // expo-image forwards `accessible` to the DOM on web (React warning); it only matters on native.
      accessible={Platform.OS === 'web' ? undefined : true}
      accessibilityRole="image"
      accessibilityLabel={art.label}
    />
  );
}

/** Picture width under text: panoramic art spans the page; squarer art is centred, tall art narrower. */
export const wideArtWidth = (aspect: number): DimensionValue =>
  aspect >= 2 ? '100%' : `${Math.round(70 * Math.min(1, aspect))}%`;

/** Text with a picture under it (`wide`, the default) or beside it (`side`). */
export function WithArt({ art, layout = 'wide', children }: { art?: LessonArt; layout?: 'side' | 'wide'; children: ReactNode }) {
  if (!art) return <>{children}</>;
  if (layout === 'wide') {
    return (
      <View style={styles.stack}>
        {children}
        <View style={styles.wideArt}>
          <LessonArtImage art={art} width={wideArtWidth(art.aspect)} />
        </View>
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

/**
 * "Example" card: each sentence as word chips with its explanation, and an optional picture per example.
 * Examples repeating one sentence with different highlights show it once, one chip tone per group, with
 * a legend row per group naming its words (so the groups don't rely on colour alone).
 */
export function ExampleCard({ examples, arts = [] }: { examples: ExampleItem[]; arts?: (LessonArt | null)[] }) {
  const groups = groupExamples(examples);
  return (
    <View style={styles.card}>
      <SoftTag>{groups.length > 1 ? 'Examples' : 'Example'}</SoftTag>
      {groups.map((group, i) => {
        const [first] = group;
        const divider = i > 0 && styles.exampleDivider;
        if (group.length > 1) {
          return (
            <View key={i} style={[styles.gapMd, divider]}>
              <ChipLine
                tokens={tokenizeGroups(
                  first.sentence,
                  group.map((e) => e.highlight),
                )}
                label={first.sentence}
              />
              {group.map((e, g) => (
                <View key={g} style={styles.legendRow} accessible accessibilityLabel={`${highlightList(e.highlight)}. ${e.explanation}`}>
                  <View style={[styles.swatch, { backgroundColor: CHIP_BG[toneAt(g)] }]} />
                  <View style={styles.flex}>
                    <AppText style={styles.legendWords}>{highlightList(e.highlight)}</AppText>
                    <AppText style={styles.explanation}>{e.explanation}</AppText>
                  </View>
                </View>
              ))}
            </View>
          );
        }
        const art = arts[i];
        const chips = <ChipLine tokens={tokenizeSentence(first.sentence, first.highlight)} label={first.sentence} />;
        const explanation = <AppText style={styles.explanation}>{first.explanation}</AppText>;
        const picture = art ? <LessonArtImage art={art} width={`${EXAMPLE_ART_SHARE * 100}%`} /> : null;
        if (art && !artBesideSentence(first.sentence)) {
          // Long sentence: chips run full width; the picture sits beside the explanation.
          return (
            <View key={i} style={[styles.gapSm, divider]}>
              {chips}
              <View style={styles.sideRow}>
                <View style={styles.flex}>{explanation}</View>
                {picture}
              </View>
            </View>
          );
        }
        return (
          <View key={i} style={[styles.sideRow, divider]}>
            <View style={[styles.flex, styles.gapSm]}>
              {chips}
              {explanation}
            </View>
            {picture}
          </View>
        );
      })}
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

/** One picture per sentence with the sentence under it ("A Word Can Change Its Job"). */
export function SentencePictures({ example, arts }: { example: ExampleItem; arts: LessonArt[] }) {
  const sentences = splitTokenSentences(tokenizeSentence(example.sentence, example.highlight));
  return (
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
  );
}

/** An example's explanation as its own card (book icon), used after sentence pictures. */
export function ExplanationCard({ text }: { text: string }) {
  return (
    <InfoCard icon={<TopicIcon name="book" size={52} />} label="Explanation">
      <AppText style={styles.cardBody}>{text}</AppText>
    </InfoCard>
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

export function NoteCard({ text, title }: { text: string; title?: string }) {
  return (
    <InfoCard icon={<Lightbulb />} label={title ?? 'Note'}>
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

/* ───────────── Schema 2.0 blocks ───────────── */

const TILE_TONES = [
  { bg: colors.mintCard, icon: colors.pathTeal },
  { bg: colors.peachFill, icon: '#D9694F' },
];

/**
 * List block, drawn by the shape of its items (see `list-items.ts`): label tiles with icons,
 * question → answer rows, word chips, or plain bulleted / numbered rows.
 */
export function ListBlock({ block }: { block: Extract<ContentBlock, { type: 'list' }> }) {
  const { layout, entries } = parseList(block.items);
  const numbered = block.list_style === 'numbered';
  // A list continued from the previous screen keeps counting (and its tile pattern) from `start`.
  const first = block.start ?? 0;
  return (
    <View style={styles.card}>
      {block.introduction ? <SoftTag>{block.introduction}</SoftTag> : null}
      {layout === 'tiles' ? (
        <View style={styles.tileGrid}>
          {entries.map((e, i) => {
            // Checkerboard tones so neighbours differ in both directions of the 2-column grid.
            const tone = TILE_TONES[(Math.floor((first + i) / 2) + first + i) % 2];
            const icon = LIST_ICONS[(e.label ?? '').toLowerCase()];
            return (
              <View key={i} style={[styles.tile, { backgroundColor: tone.bg }]} accessible accessibilityLabel={e.text}>
                {icon ? <MaterialCommunityIcons name={icon as IconName} size={26} color={tone.icon} /> : null}
                <AppText style={styles.tileLabel} maxFontSizeMultiplier={1.2}>
                  {e.label}
                </AppText>
                <AppText style={styles.tileDetail} align="center" maxFontSizeMultiplier={1.2}>
                  {e.detail}
                </AppText>
              </View>
            );
          })}
        </View>
      ) : layout === 'qa' ? (
        <View>
          {entries.map((e, i) => (
            <View key={i} style={[styles.qaRow, i > 0 && styles.listDivider]} accessible accessibilityLabel={e.text}>
              <View style={styles.numberBadge}>
                <AppText style={styles.numberText}>{first + i + 1}</AppText>
              </View>
              <AppText style={[styles.cardBody, styles.flex]}>{e.label}</AppText>
              <View style={[styles.answerChip, { backgroundColor: TILE_TONES[(first + i) % 2].bg }]}>
                <AppText style={styles.answerChipText}>{e.detail}</AppText>
              </View>
            </View>
          ))}
        </View>
      ) : layout === 'chips' ? (
        <View style={styles.tileGrid}>
          {entries.map((e, i) => (
            <View key={i} style={[styles.wordGroup, { backgroundColor: TILE_TONES[(Math.floor((first + i) / 2) + first + i) % 2].bg }]}>
              <AppText style={styles.wordGroupText} align="center" maxFontSizeMultiplier={1.2}>
                {e.text}
              </AppText>
            </View>
          ))}
        </View>
      ) : (
        <View>
          {entries.map((e, i) => (
            <View key={i} style={[styles.listRow, i > 0 && styles.listDivider]}>
              {numbered ? (
                <View style={styles.numberBadge}>
                  <AppText style={styles.numberText}>{first + i + 1}</AppText>
                </View>
              ) : (
                <View style={styles.listCheck}>
                  <MaterialCommunityIcons name="check" size={16} color={colors.onInk} />
                </View>
              )}
              <AppText style={[styles.cardBody, styles.flex]}>{e.text}</AppText>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

/**
 * Comparison of word classes with points and a conclusion. Two items sit side by side; more stack as
 * rows. `part` shows only the items or only the points + conclusion when the block is split across
 * screens (see `screens.ts`).
 */
export function ComparisonCard({
  block,
  arts,
  part = 'all',
}: {
  block: Extract<ContentBlock, { type: 'comparison' }>;
  arts?: (LessonArt | null)[];
  part?: 'all' | 'items' | 'points';
}) {
  const label = (item: ComparisonItem) => `${item.label}: ${item.description} ${item.example ?? ''}`;
  return (
    <View style={styles.card}>
      <SoftTag>Compare</SoftTag>
      {part === 'points' ? null : comparisonAsRows(block) ? (
        <View style={styles.gapSm}>
          {block.items.map((item, i) => (
            <View
              key={item.label}
              style={[styles.compareRowItem, { backgroundColor: TILE_TONES[i % 2].bg }]}
              accessible
              accessibilityLabel={label(item)}
            >
              {arts?.[i] ? <LessonArtImage art={arts[i]} width={COMPARISON_ROW_ART} /> : null}
              {/* With a picture, the label joins the text column so the description isn't squeezed. */}
              {arts?.[i] ? null : (
                <AppText style={[styles.compareLabel, styles.compareRowLabel]} maxFontSizeMultiplier={1.2}>
                  {item.label}
                </AppText>
              )}
              <View style={[styles.flex, styles.gapXs]}>
                {arts?.[i] ? (
                  <AppText style={[styles.compareLabel, styles.compareRowLabelStacked]} maxFontSizeMultiplier={1.2}>
                    {item.label}
                  </AppText>
                ) : null}
                <AppText style={styles.tileDetail} maxFontSizeMultiplier={1.2}>
                  {item.description}
                </AppText>
                {item.example ? (
                  <View style={[styles.compareExample, styles.compareRowExample]}>
                    <AppText style={styles.compareExampleText} maxFontSizeMultiplier={1.2}>
                      {item.example}
                    </AppText>
                  </View>
                ) : null}
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.compareRow}>
          {block.items.map((item, i) => (
            <View
              key={item.label}
              style={[styles.compareItem, { backgroundColor: TILE_TONES[i % 2].bg }]}
              accessible
              accessibilityLabel={label(item)}
            >
              {arts?.[i] ? <LessonArtImage art={arts[i]} width="70%" /> : null}
              <AppText style={styles.compareLabel} maxFontSizeMultiplier={1.2}>
                {item.label}
              </AppText>
              <AppText style={styles.tileDetail} align="center" maxFontSizeMultiplier={1.2}>
                {item.description}
              </AppText>
              {item.example ? (
                <View style={styles.compareExample}>
                  <AppText style={styles.compareExampleText} align="center" maxFontSizeMultiplier={1.2}>
                    {item.example}
                  </AppText>
                </View>
              ) : null}
            </View>
          ))}
        </View>
      )}
      {part !== 'items' ? <ComparisonPoints block={block} /> : null}
    </View>
  );
}

function ComparisonPoints({ block }: { block: Extract<ContentBlock, { type: 'comparison' }> }) {
  return (
    <>
      {block.comparison_points?.map((point, i) => (
        <View key={i} style={styles.pointRow}>
          <View style={styles.pointDot} />
          <AppText style={[styles.cardBody, styles.flex]}>{point}</AppText>
        </View>
      ))}
      {block.conclusion ? (
        <View style={styles.pointRow}>
          <MaterialCommunityIcons name="arrow-right-circle" size={20} color={colors.pathTeal} />
          <AppText style={[styles.conclusion, styles.flex]}>{block.conclusion}</AppText>
        </View>
      ) : null}
    </>
  );
}

/** Common-mistake callout: what's wrong, what's right, and why. */
export function WarningCard({ block }: { block: Extract<ContentBlock, { type: 'warning' }> }) {
  const { incorrect, correct, reason } = block.mistake;
  return (
    <View style={[styles.card, styles.warningCard]}>
      <View style={styles.warningHead}>
        <MaterialCommunityIcons name="alert-circle-outline" size={22} color="#D9694F" />
        <View style={[styles.softTag, styles.warningTag]}>
          <AppText style={styles.softTagText}>{block.title ?? 'Common mistake'}</AppText>
        </View>
      </View>
      <View style={styles.pointRow} accessible accessibilityLabel={`Incorrect: ${incorrect}`}>
        <MaterialCommunityIcons name="close-circle" size={20} color="#D9694F" />
        <AppText style={[styles.cardBody, styles.flex]}>{incorrect}</AppText>
      </View>
      <View style={styles.pointRow} accessible accessibilityLabel={`Correct: ${correct}`}>
        <MaterialCommunityIcons name="check-circle" size={20} color={colors.pathTeal} />
        <AppText style={[styles.cardBody, styles.flex]}>{correct}</AppText>
      </View>
      <AppText style={styles.explanation}>{reason}</AppText>
    </View>
  );
}

/** Grammar rule card. */
export function RuleCard({ block }: { block: Extract<ContentBlock, { type: 'rule' }> }) {
  return (
    <InfoCard icon={<TopicIcon name="book" size={52} />} label="Rule">
      <AppText style={styles.cardBody}>{block.rule_text}</AppText>
      {block.scope ? <AppText style={styles.explanation}>{block.scope}</AppText> : null}
    </InfoCard>
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
  gapXs: { gap: space.xs },
  gapSm: { gap: space.sm },
  gapMd: { gap: space.md },
  stack: { gap: space.lg },
  wideArt: { alignItems: 'center' },
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
  legendRow: { flexDirection: 'row', alignItems: 'flex-start', gap: space.sm },
  swatch: { width: 16, height: 16, marginTop: 3, borderRadius: 5, borderWidth: 1, borderColor: colors.inkSubtle },
  legendWords: { fontFamily: fonts.serifBold, fontSize: 15, lineHeight: 22, color: colors.ink },
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
  listRow: { flexDirection: 'row', alignItems: 'center', gap: space.md, paddingVertical: space.md },
  listDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.inkSubtle },
  exampleDivider: { paddingTop: space.md, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.inkSubtle },
  tileGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm + 2 },
  tile: {
    flexGrow: 1,
    flexBasis: '45%',
    alignItems: 'center',
    gap: 2,
    paddingVertical: space.sm + 2,
    paddingHorizontal: space.sm,
    borderRadius: radii.card,
  },
  tileLabel: { fontFamily: fonts.serifBold, fontSize: 16, lineHeight: 21, color: colors.ink },
  tileDetail: { fontFamily: fonts.sans, fontSize: 13, lineHeight: 18, color: colors.inkMuted },
  wordGroup: { flexGrow: 1, flexBasis: '45%', paddingVertical: space.sm, paddingHorizontal: space.sm, borderRadius: 14 },
  wordGroupText: { fontFamily: fonts.serifBold, fontSize: 16, lineHeight: 22, color: colors.ink },
  qaRow: { flexDirection: 'row', alignItems: 'center', gap: space.sm + 2, paddingVertical: space.sm + 2 },
  numberBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.pathTeal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: { fontFamily: fonts.sansSemiBold, fontSize: 12, lineHeight: 16, color: colors.onInk },
  answerChip: { paddingHorizontal: space.sm + 2, paddingVertical: 3, borderRadius: radii.pill },
  answerChipText: { fontFamily: fonts.serifBold, fontSize: 14, lineHeight: 19, color: colors.ink },
  compareRow: { flexDirection: 'row', gap: space.sm + 2 },
  compareItem: { flex: 1, alignItems: 'center', gap: 4, padding: space.sm + 2, borderRadius: radii.card },
  compareLabel: { fontFamily: fonts.serifBold, fontSize: 17, lineHeight: 22, color: colors.ink },
  compareExample: {
    alignSelf: 'stretch',
    marginTop: 4,
    paddingHorizontal: space.sm,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  compareExampleText: { fontFamily: fonts.serifBold, fontSize: 15, lineHeight: 20, color: colors.ink },
  compareRowItem: { flexDirection: 'row', alignItems: 'center', gap: space.sm + 2, padding: space.sm + 2, borderRadius: radii.card },
  compareRowLabel: { width: '38%', fontSize: 16, lineHeight: 21 },
  compareRowLabelStacked: { fontSize: 16, lineHeight: 21 },
  compareRowExample: { alignSelf: 'flex-start', marginTop: 2, paddingVertical: 3 },
  pointRow: { flexDirection: 'row', alignItems: 'flex-start', gap: space.sm },
  pointDot: { width: 8, height: 8, borderRadius: 4, marginTop: 7, marginHorizontal: 6, backgroundColor: colors.pathTeal },
  conclusion: { fontFamily: fonts.sansSemiBold, fontSize: 15, lineHeight: 22, color: colors.ink },
  warningCard: { borderColor: colors.accentSalmon },
  warningHead: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  warningTag: { backgroundColor: colors.peachFill },
  listCheck: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.pathTeal,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
