import Svg, { Path } from 'react-native-svg';

import { colors } from '@/theme/tokens';

/** Yellow idea bulb with rays (lesson "Key Takeaway" / "Note" / "Explanation" cards). Decorative. */
export function Lightbulb({ size = 44 }: { size?: number }) {
  const ink = { stroke: colors.ink, strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <Path d="M24 3 V8 M9.5 9.5 L13 13 M38.5 9.5 L35 13 M3.5 23 H8.5 M44.5 23 H39.5" fill="none" {...ink} />
      <Path
        d="M24 13 C17.5 13 13.5 17.8 13.5 23 C13.5 27.4 16.2 29.6 18 32.2 V35 H30 V32.2 C31.8 29.6 34.5 27.4 34.5 23 C34.5 17.8 30.5 13 24 13 Z"
        fill="#F6D488"
        {...ink}
      />
      <Path d="M19 18.5 C20.2 17.2 21.6 16.6 23 16.4" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
      <Path d="M18.5 38.5 H29.5 M19.5 42 H28.5 M22 45 H26" fill="none" {...ink} />
    </Svg>
  );
}
