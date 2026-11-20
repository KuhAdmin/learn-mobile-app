// Learn: Metro config. Defaults from Expo, plus `.wasm` as an asset so expo-sqlite's web worker bundles
// (https://docs.expo.dev/versions/v58.0.0/sdk/sqlite/ → web setup). Saved state uses expo-sqlite's
// localStorage API, which is the browser's own localStorage on web, so no SQLite database is opened there
// and the cross-origin headers that web SQLite needs are not required.
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push('wasm');

module.exports = config;
