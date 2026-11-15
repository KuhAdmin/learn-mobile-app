import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { PathSegment } from '@/learning-path/rows';
import { colors } from '@/theme/tokens';

const STROKE = 4;

/**
 * The slice of the winding path that passes through one row: an S-curve in from the row above
 * (meeting it vertically at the boundary) and out to the row below. Drawn behind the row content.
 */
export function PathConnector({ segment, height, centerX }: { segment: PathSegment; height: number; centerX: number }) {
  const x = centerX + segment.x;
  const mid = height / 2;
  const halves: { d: string; reached: boolean }[] = [];

  if (segment.prevX !== null) {
    const m = centerX + (segment.prevX + segment.x) / 2;
    halves.push({ d: `M ${m} 0 C ${m} ${mid / 2} ${x} ${mid / 2} ${x} ${mid}`, reached: segment.inReached });
  }
  if (segment.nextX !== null) {
    const m = centerX + (segment.x + segment.nextX) / 2;
    const q = mid + mid / 2;
    halves.push({ d: `M ${x} ${mid} C ${x} ${q} ${m} ${q} ${m} ${height}`, reached: segment.outReached });
  }

  return (
    <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
      {halves.map((h, i) =>
        h.reached ? (
          <Path key={i} d={h.d} stroke={colors.pathTeal} strokeWidth={STROKE} strokeLinecap="round" fill="none" />
        ) : (
          <Path
            key={i}
            d={h.d}
            stroke={colors.disabled}
            strokeWidth={STROKE - 1}
            strokeDasharray="7 7"
            strokeLinecap="round"
            fill="none"
          />
        ),
      )}
    </Svg>
  );
}
