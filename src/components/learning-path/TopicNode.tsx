import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import type { TopicStatus } from '@/learning-path/progression';
import type { PathRow } from '@/learning-path/rows';
import { colors, sizes } from '@/theme/tokens';

import { CURRENT_NODE_SIZE, NODE_ICON_SIZE, NODE_LIP, NODE_SIZE, TOPIC_ROW_HEIGHT } from './geometry';
import { PathConnector } from './PathConnector';
import { TopicIcon } from './TopicIcon';

const STATUS_LABEL: Record<TopicStatus, string> = {
  current: 'current lesson',
  completed: 'completed',
  available: 'available',
  locked: 'locked',
};

/** Face / rim / base colours per state. State is also carried by shape (play, check badge, lock badge). */
const LOOK: Record<TopicStatus, { face: string; rim: string; base: string }> = {
  current: { face: colors.pathTeal, rim: colors.ink, base: colors.ink },
  completed: { face: colors.selectedFill, rim: colors.pathTeal, base: '#1F7A6F' },
  available: { face: colors.surface, rim: colors.ink, base: colors.ink },
  locked: { face: '#F4F8F9', rim: colors.disabled, base: colors.disabled },
};

interface TopicNodeProps {
  row: Extract<PathRow, { kind: 'topic' }>;
  centerX: number;
  onPress: () => void;
}

/**
 * One topic as a big round icon button on the winding path (no title on the path, Duolingo-style).
 * The title is still the accessibility label and the heading of the lesson screen it opens.
 */
export function TopicNode({ row, centerX, onPress }: TopicNodeProps) {
  const { status, path } = row;
  const size = status === 'current' ? CURRENT_NODE_SIZE : NODE_SIZE;
  const look = LOOK[status];
  const locked = status === 'locked';

  return (
    <View style={styles.row}>
      <PathConnector segment={path} height={TOPIC_ROW_HEIGHT} centerX={centerX} />
      <Pressable
        onPress={onPress}
        hitSlop={sizes.hitSlop / 2}
        accessibilityRole="button"
        accessibilityLabel={`${row.ref.topic.title}, ${STATUS_LABEL[status]}`}
        accessibilityHint={locked ? undefined : status === 'current' ? 'Starts the lesson' : 'Opens the lesson'}
        accessibilityState={{ disabled: locked }}
        style={[
          styles.node,
          {
            left: centerX + path.x - size / 2,
            top: (TOPIC_ROW_HEIGHT - size - NODE_LIP) / 2,
            width: size,
            height: size + NODE_LIP,
          },
        ]}
      >
        {({ pressed }) => (
          <>
            {status === 'current' ? <Pulse size={size} /> : null}
            <View style={[styles.base, round(size), { top: NODE_LIP, backgroundColor: look.base }]} />
            <View
              style={[
                styles.face,
                round(size),
                { backgroundColor: look.face, borderColor: look.rim },
                pressed && styles.facePressed,
              ]}
            >
              {status === 'current' ? (
                <MaterialCommunityIcons name="play" size={40} color={colors.onInk} style={styles.playNudge} />
              ) : (
                <TopicIcon name={row.icon} size={NODE_ICON_SIZE} muted={locked} />
              )}
              {status === 'completed' ? (
                <Badge icon="check" fill={colors.pathTeal} color={colors.onInk} border={colors.surface} />
              ) : null}
              {locked ? <Badge icon="lock" fill={colors.surface} color={colors.inkSubtle} border={colors.disabled} /> : null}
            </View>
          </>
        )}
      </Pressable>
    </View>
  );
}

const round = (size: number) => ({ width: size, height: size, borderRadius: size / 2 });

function Badge({
  icon,
  fill,
  color,
  border,
}: {
  icon: 'check' | 'lock';
  fill: string;
  color: string;
  border: string;
}) {
  return (
    <View style={[styles.badge, { backgroundColor: fill, borderColor: border }]}>
      <MaterialCommunityIcons name={icon} size={14} color={color} />
    </View>
  );
}

/** Soft breathing ring behind the current node. Static when the OS asks for reduced motion. */
function Pulse({ size }: { size: number }) {
  const reduceMotion = useReducedMotion();
  const t = useSharedValue(0);

  useEffect(() => {
    if (!reduceMotion) t.value = withRepeat(withTiming(1, { duration: 1600 }), -1, false);
  }, [reduceMotion, t]);

  const style = useAnimatedStyle(() => ({
    opacity: reduceMotion ? 0.35 : 0.45 * (1 - t.value),
    transform: [{ scale: reduceMotion ? 1.18 : 1 + 0.35 * t.value }],
  }));

  return <Animated.View style={[styles.pulse, round(size), style]} />;
}

const BADGE = 26;

const styles = StyleSheet.create({
  row: { height: TOPIC_ROW_HEIGHT },
  node: { position: 'absolute' },
  base: { position: 'absolute', left: 0 },
  face: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  // Pressing sinks the face onto its base.
  facePressed: { transform: [{ translateY: NODE_LIP }] },
  badge: {
    position: 'absolute',
    right: -4,
    bottom: -2,
    width: BADGE,
    height: BADGE,
    borderRadius: BADGE / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // The play glyph looks off-centre to the left without a small optical nudge.
  playNudge: { marginLeft: 4 },
  pulse: { position: 'absolute', top: 0, left: 0, backgroundColor: colors.accentTeal },
});
