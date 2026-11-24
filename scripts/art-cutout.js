#!/usr/bin/env node
/**
 * Lesson artwork must have a transparent background (CLAUDE.md, "Lesson artwork").
 *
 *   npm run art:cutout -- <in.png|webp> [more…] --out <dir>   → transparent lossless WebP per input, same name
 *   … --keep-edge bottom                                       → don't start the fill from that edge (see `cutout`)
 *   … --page white                                             → the mockup's page is plain white, not ivory
 *   npm run art:cutout -- --check                              → lists lesson images without transparency
 *
 * The cutout removes the near-white page background that touches the image edge (a flood fill from the
 * border), so white parts inside the drawing (a nurse's coat, a book's pages) stay solid, and the mint
 * blobs behind characters stay. The edge between drawing and background is softened by one pixel.
 * Needs ffmpeg on the PATH. `opaqueLessonArt` is pure Node and runs in the tests.
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ART_DIR = path.join(__dirname, '..', 'assets', 'lessons');

/**
 * The mockups' page background: warm ivory (#FFFCF7, red a little above blue). Neutral white inside the drawing
 * (a coat, a veil, a page; red ≈ blue) and pale mint (#E8F7F1, blue above red) are kept, even where a gap in
 * the outline joins them to the background.
 */
const isIvory = (r, g, b) => Math.min(r, g, b) >= 236 && r - b >= 4 && r - b <= 16 && g >= b;

/**
 * Some mockups have a plain white page instead (#FDFDFD). `--page white` also removes near-white grey that
 * touches the edge. Only use it when the drawing has an outline, or its own whites can be reached from the edge.
 */
const isWhite = (r, g, b) => Math.min(r, g, b) >= 240 && Math.max(r, g, b) - Math.min(r, g, b) <= 6;

const BACKGROUNDS = {
  ivory: isIvory,
  white: (r, g, b) => isIvory(r, g, b) || isWhite(r, g, b),
};

/**
 * Makes the border-connected background of an RGBA buffer transparent, in place. `skip` lists edges
 * ('top', 'bottom', 'left', 'right') not to start from: use it where the crop cuts through a white part of the
 * drawing (a coat or a page running off the bottom), so that white isn't taken for background. `page` names the
 * mockup's page colour (`BACKGROUNDS`).
 */
function cutout(rgba, width, height, skip = [], page = 'ivory') {
  const isBackground = BACKGROUNDS[page];
  if (!isBackground) throw new Error(`Unknown page colour "${page}" (use ${Object.keys(BACKGROUNDS).join(' or ')})`);
  const removed = new Uint8Array(width * height);
  const queue = [];
  const visit = (x, y) => {
    const i = y * width + x;
    if (removed[i]) return;
    const p = i * 4;
    if (!isBackground(rgba[p], rgba[p + 1], rgba[p + 2])) return;
    removed[i] = 1;
    queue.push(i);
  };
  for (let x = 0; x < width; x++) {
    if (!skip.includes('top')) visit(x, 0);
    if (!skip.includes('bottom')) visit(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    if (!skip.includes('left')) visit(0, y);
    if (!skip.includes('right')) visit(width - 1, y);
  }
  while (queue.length) {
    const i = queue.pop();
    const x = i % width, y = (i - x) / width;
    if (x > 0) visit(x - 1, y);
    if (x < width - 1) visit(x + 1, y);
    if (y > 0) visit(x, y - 1);
    if (y < height - 1) visit(x, y + 1);
  }
  // Fringe: very light pixels within two pixels of the background (anti-aliasing and compression noise that is
  // no longer quite ivory). Interior whites sit behind the black outline, so they are not reached.
  const nextTo = (i) => {
    const x = i % width, y = (i - x) / width;
    return (x > 0 && removed[i - 1]) || (x < width - 1 && removed[i + 1]) || (y > 0 && removed[i - width]) || (y < height - 1 && removed[i + width]);
  };
  for (let pass = 0; pass < 2; pass++) {
    const fringe = [];
    for (let i = 0; i < width * height; i++) if (!removed[i] && Math.min(rgba[i * 4], rgba[i * 4 + 1], rgba[i * 4 + 2]) >= 232 && nextTo(i)) fringe.push(i);
    for (const i of fringe) removed[i] = 1;
  }
  for (let i = 0; i < width * height; i++) if (removed[i]) rgba[i * 4 + 3] = 0;
  // Soften light edge pixels next to the removed background, so no pale fringe shows on coloured cards.
  for (let i = 0; i < width * height; i++) {
    if (removed[i]) continue;
    const x = i % width, y = (i - x) / width;
    const touches = (x > 0 && removed[i - 1]) || (x < width - 1 && removed[i + 1]) || (y > 0 && removed[i - width]) || (y < height - 1 && removed[i + width]);
    if (!touches) continue;
    const p = i * 4;
    const lo = Math.min(rgba[p], rgba[p + 1], rgba[p + 2]);
    if (lo > 200) rgba[p + 3] = Math.round((255 * (255 - lo)) / 55);
  }
  return rgba;
}

function ffmpeg(args, input) {
  const r = spawnSync('ffmpeg', ['-v', 'error', '-y', ...args], { input, maxBuffer: 1 << 28 });
  if (r.error) throw new Error(`ffmpeg is needed for art:cutout (${r.error.message})`);
  if (r.status !== 0) throw new Error(`ffmpeg failed: ${r.stderr}`);
  return r.stdout;
}

function cutoutFile(input, output, skip = [], page = 'ivory') {
  const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', input]);
  const [width, height] = String(probe.stdout).trim().split(',').map(Number);
  if (!width || !height) throw new Error(`Can't read the size of ${input}`);
  const rgba = ffmpeg(['-i', input, '-f', 'rawvideo', '-pix_fmt', 'rgba', '-']);
  cutout(rgba, width, height, skip, page);
  ffmpeg(['-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${width}x${height}`, '-i', '-', '-c:v', 'libwebp', '-lossless', '1', output], rgba);
  return { width, height };
}

/** Whether a WebP file can show transparency: lossless with its alpha bit, or extended with an alpha flag. */
function webpHasAlpha(buf) {
  if (buf.length < 30 || buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return false;
  const chunk = buf.toString('ascii', 12, 16);
  if (chunk === 'VP8X') return (buf[20] & 0x10) !== 0;
  if (chunk === 'VP8L') return ((buf.readUInt32LE(21) >>> 28) & 1) === 1;
  return false;
}

/** Lesson images (assets/lessons/<lesson>/*.webp|png) without a transparent background, as "lesson/file". */
function opaqueLessonArt(dir = ART_DIR) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .flatMap((d) =>
      fs
        .readdirSync(path.join(dir, d.name))
        .filter((f) => /\.webp$/i.test(f) && !webpHasAlpha(fs.readFileSync(path.join(dir, d.name, f))))
        .map((f) => `${d.name}/${f}`),
    );
}

function main(argv) {
  const args = argv.slice(2);
  if (args.includes('--check')) {
    const opaque = opaqueLessonArt();
    console.log(opaque.length ? `Without a transparent background:\n  ${opaque.join('\n  ')}` : 'All lesson images are transparent.');
    return opaque.length ? 1 : 0;
  }
  const outAt = args.indexOf('--out');
  const out = outAt === -1 ? null : args[outAt + 1];
  const skipAt = args.indexOf('--keep-edge');
  const skip = skipAt === -1 ? [] : args[skipAt + 1].split(',');
  const pageAt = args.indexOf('--page');
  const page = pageAt === -1 ? 'ivory' : args[pageAt + 1];
  // Option values aren't inputs. Only skip a value index when its option is present (else -1 + 1 would drop input 0).
  const optionValues = [outAt, skipAt, pageAt].filter((at) => at !== -1).map((at) => at + 1);
  const inputs = args.filter((a, i) => !a.startsWith('--') && !optionValues.includes(i));
  if (!out || !inputs.length || !BACKGROUNDS[page]) {
    console.error(
      'Usage: npm run art:cutout -- <image> [more…] --out <dir> [--keep-edge bottom,left] [--page ivory|white]   |   npm run art:cutout -- --check',
    );
    return 2;
  }
  fs.mkdirSync(out, { recursive: true });
  for (const input of inputs) {
    const target = path.join(out, path.basename(input).replace(/\.\w+$/, '.webp'));
    const { width, height } = cutoutFile(input, target, skip, page);
    console.log(`${target}  ${width}×${height}`);
  }
  return 0;
}

module.exports = { cutout, webpHasAlpha, opaqueLessonArt };

if (require.main === module) process.exitCode = main(process.argv);
