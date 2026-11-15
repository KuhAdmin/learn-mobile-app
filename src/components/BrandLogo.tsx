import { Image } from 'expo-image';

const LOGO = require('../../assets/brand/logo-wordmark.png');
const ASPECT = 1433 / 562;

/** The "Learn▷" brand wordmark (transparent PNG). */
export function BrandLogo({ width = 220 }: { width?: number }) {
  return (
    <Image
      source={LOGO}
      style={{ width, height: width / ASPECT }}
      contentFit="contain"
      accessible
      accessibilityRole="image"
      accessibilityLabel="Learn"
    />
  );
}
