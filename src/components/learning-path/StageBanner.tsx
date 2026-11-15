import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Illustration, type IllustrationName } from '@/components/Illustration';
import type { CurriculumStage } from '@/data/curriculum';
import type { Progress } from '@/learning-path/progression';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

/** Existing art for stages 1–3; 4–5 use the placeholder block until dedicated art arrives. */
export const STAGE_ART: Record<number, IllustrationName> = { 1: 'books', 2: 'blocks', 3: 'plan', 4: 'stage4', 5: 'stage5' };

interface StageBannerProps {
  stage: CurriculumStage;
  progress: Progress;
  state: 'completed' | 'current' | 'open' | 'locked';
}

/** Level-1 stage banner (shown to learners as a course): art · "Course N · Title" · description · topic progress. */
export function StageBanner({ stage, progress, state }: StageBannerProps) {
  const pct = Math.round(progress.fraction * 100);
  const status =
    state === 'completed'
      ? 'Completed'
      : state === 'locked'
        ? 'Locked'
        : `${progress.done} of ${progress.total} topics${progress.done ? ` · ${pct}%` : ''}`;

  return (
    <View
      style={[styles.card, state === 'current' && styles.cardCurrent]}
      accessible
      accessibilityRole="header"
      accessibilityLabel={`Course ${stage.number}, ${stage.title}. ${stage.description} ${status}.`}
    >
      <View style={styles.art}>
        <Illustration name={STAGE_ART[stage.number]} size={76} decorative />
      </View>
      <View style={styles.divider} />
      <View style={styles.copy}>
        <AppText variant="h1" style={styles.title} maxFontSizeMultiplier={1.25}>
          {`Course ${stage.number} · ${stage.title}`}
        </AppText>
        <AppText variant="caption" maxFontSizeMultiplier={1.25}>
          {stage.description}
        </AppText>
        <View style={styles.status}>
          {state === 'locked' ? <MaterialCommunityIcons name="lock" size={13} color={colors.inkSubtle} /> : null}
          {state === 'completed' ? <MaterialCommunityIcons name="check-circle" size={14} color={colors.pathTeal} /> : null}
          <AppText variant="caption" style={styles.statusText} maxFontSizeMultiplier={1.25}>
            {status}
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.lg,
    borderRadius: radii.block,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
  },
  cardCurrent: { backgroundColor: colors.selectedFill },
  art: { width: 92, alignItems: 'center' },
  divider: { width: StyleSheet.hairlineWidth, alignSelf: 'stretch', backgroundColor: colors.inkSubtle },
  copy: { flex: 1, gap: space.xs },
  title: { fontFamily: fonts.serifBold, fontSize: 19, lineHeight: 24 },
  status: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  statusText: { fontFamily: fonts.sansMedium, color: colors.inkMuted },
});
