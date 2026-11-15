import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import type { PathRow } from '@/learning-path/rows';
import { borderWidth, colors, fonts, radii, space } from '@/theme/tokens';

import { SUB_ROW_HEIGHT } from './geometry';
import { PathConnector } from './PathConnector';

/**
 * Level-2 sub-stage, shown as a short centred chapter marker ("Chapter 1"); the path passes behind it.
 * The sub-stage title is kept for screen readers only.
 */
export function SubStageHeading({ row, centerX }: { row: Extract<PathRow, { kind: 'sub' }>; centerX: number }) {
  const { subStage, chapter } = row;
  // A faint background blob on every other heading, alternating sides — sparse on purpose.
  const blob = subStage.order % 2 === 0 ? (subStage.order % 4 === 0 ? styles.blobLeft : styles.blobRight) : null;

  return (
    <View style={styles.row}>
      {blob ? <View style={[styles.blob, blob]} pointerEvents="none" /> : null}
      <PathConnector segment={row.path} height={SUB_ROW_HEIGHT} centerX={centerX} />
      <View
        style={styles.pill}
        accessible
        accessibilityRole="header"
        accessibilityLabel={`Chapter ${chapter}: ${subStage.title}`}
      >
        <AppText variant="title" style={styles.text} maxFontSizeMultiplier={1.3}>
          {`Chapter ${chapter}`}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { height: SUB_ROW_HEIGHT, justifyContent: 'center', alignItems: 'center' },
  pill: {
    maxWidth: '100%',
    paddingHorizontal: space.lg + 2,
    paddingVertical: space.sm,
    borderRadius: radii.pill,
    borderWidth,
    borderColor: colors.ink,
    backgroundColor: colors.selectedFill,
  },
  text: { fontFamily: fonts.sansSemiBold, fontSize: 17, lineHeight: 22 },
  blob: { position: 'absolute', top: 10, width: 170, height: 220, borderRadius: 110, opacity: 0.35 },
  blobRight: { right: -110, backgroundColor: colors.accentSalmon },
  blobLeft: { left: -120, backgroundColor: colors.accentTeal },
});
