import { useWindowDimensions } from 'react-native';

import { sizes } from '@/theme/tokens';

/** Shared Learning Path geometry. Fixed row heights keep the connector continuous across rows. */
export const TOPIC_ROW_HEIGHT = 100;
export const SUB_ROW_HEIGHT = 84;
/** Horizontal padding of the path list; the winding line is centred inside it. */
export const PATH_SIDE_PADDING = sizes.gutter - 4;
export const NODE_SIZE = 68;
export const CURRENT_NODE_SIZE = 76;
/** Depth of the solid "base" under each node (it sinks into it when pressed). */
export const NODE_LIP = 5;
export const NODE_ICON_SIZE = 40;

/** x of the path's centre line inside a row; zig-zag offsets are added to it. */
export function usePathCenterX() {
  const { width } = useWindowDimensions();
  return Math.round(width / 2 - PATH_SIDE_PADDING);
}
