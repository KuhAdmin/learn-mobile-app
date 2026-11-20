import type { StyleProp, ViewStyle } from 'react-native';
import Svg, { Line } from 'react-native-svg';

import { colors } from '@/theme/tokens';

/** Three short teal strokes beside a heading (mockup accent). Decorative. */
export function Sparkle({ style }: { style?: StyleProp<ViewStyle> }) {
  return (
    <Svg width={30} height={26} style={style} pointerEvents="none" aria-hidden>
      <Line x1={8} y1={14} x2={12} y2={4} stroke={colors.pathTeal} strokeWidth={2.5} strokeLinecap="round" />
      <Line x1={15} y1={17} x2={23} y2={9} stroke={colors.pathTeal} strokeWidth={2.5} strokeLinecap="round" />
      <Line x1={17} y1={23} x2={27} y2={20} stroke={colors.pathTeal} strokeWidth={2.5} strokeLinecap="round" />
    </Svg>
  );
}
