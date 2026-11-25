#!/usr/bin/env node
/**
 * Lesson artwork must have a transparent background (CLAUDE.md, "Lesson artwork").
 *
 *   npm run art:cutout -- <in.png|webp> [more…] --out <dir>   → transparent lossless WebP per input, same name
 *   … --keep-edge bottom                                       → don't start the fill from that edge (see `cutout`)
 *   … --page white                                             → the mockup's page is plain white, not ivory
 *   … --round 8                                                → transparent rounded corners (crop inside a scene)
 *   npm run art:cutout -- --check                              → lists lesson images without transparency or with
 *                                                                a notch cut into them (`notchIn`)
 *
 * A cut that would leave a notch (a painted-out speech bubble) is refused and not written.
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

/**
 * A notch: a hole cut into a scene where something inside it (a speech bubble, a pill) was painted out and the cutout
 * removed it (CLAUDE.md, "Lesson artwork" rule 4). It leaves two ruler-straight transparent edges, with plain scene
 * colour (no dark outline) on the opaque side, meeting at an inward corner. Drawn objects have dark outlines along
 * their edges, and a scene's own frame turns outward at its corners, so neither counts. Returns the first notch corner
 * found ({ x, y, arms }) or null. `minArm`: how long both straight edges must be, in pixels.
 */
function notchIn(rgba, width, height, minArm = 16) {
  const n = width * height;
  const op = new Uint8Array(n);
  for (let i = 0; i < n; i++) op[i] = rgba[i * 4 + 3] >= 128 ? 1 : 0;
  const luma = (i) => 0.299 * rgba[i * 4] + 0.587 * rgba[i * 4 + 1] + 0.114 * rgba[i * 4 + 2];
  // No dark outline within three pixels inward of an opaque edge pixel.
  const plainInward = (x, y, dx, dy) => {
    for (let k = 0; k < 3; k++) {
      const xx = x + dx * k, yy = y + dy * k;
      if (xx < 0 || yy < 0 || xx >= width || yy >= height) break;
      const i = yy * width + xx;
      if (!op[i]) break;
      if (luma(i) < 60) return false;
    }
    return true;
  };
  // V[y*w+x]: edge between pixels x-1 and x (side -1: opaque on the left). H[y*w+x]: between rows y-1 and y.
  const V = new Int8Array(n), H = new Int8Array(n);
  for (let y = 0; y < height; y++)
    for (let x = 1; x < width; x++) {
      const a = op[y * width + x - 1], b = op[y * width + x];
      if (a !== b && plainInward(a ? x - 1 : x, y, a ? -1 : 1, 0)) V[y * width + x] = a ? -1 : 1;
    }
  for (let y = 1; y < height; y++)
    for (let x = 0; x < width; x++) {
      const a = op[(y - 1) * width + x], b = op[y * width + x];
      if (a !== b && plainInward(x, a ? y - 1 : y, 0, a ? -1 : 1)) H[y * width + x] = a ? -1 : 1;
    }
  // Straight runs, allowing one pixel of wobble from the cutout's softened edge.
  const runs = (grid, along, across, at) => {
    const out = [];
    const has = (c, t, side) => c > 0 && c < across && grid[at(c, t)] === side;
    for (let c = 1; c < across; c++)
      for (const side of [-1, 1]) {
        let start = -1;
        for (let t = 0; t <= along; t++) {
          const hit = t < along && (has(c, t, side) || has(c - 1, t, side) || has(c + 1, t, side));
          if (hit && start < 0) start = t;
          if (!hit && start >= 0) {
            if (t - start >= minArm) out.push({ c, from: start, to: t - 1, side });
            start = -1;
          }
        }
      }
    return out;
  };
  const vRuns = runs(V, height, width, (x, y) => y * width + x);
  const hRuns = runs(H, width, height, (y, x) => y * width + x);
  for (const v of vRuns)
    for (const [vy, dv] of [[v.from, 1], [v.to + 1, -1]])
      for (const h of hRuns)
        for (const [hx, dh] of [[h.from, 1], [h.to + 1, -1]]) {
          if (Math.abs(v.c - hx) > 3 || Math.abs(vy - h.c) > 3) continue;
          // Inward corner: each edge's opaque side faces away from where the other edge runs.
          if (v.side === -dh && h.side === -dv) return { x: v.c, y: h.c, arms: [v.to - v.from + 1, h.to - h.from + 1] };
        }
  return null;
}

/** Makes the four corners transparent with radius r, for a crop that runs through a scene on every side. */
function roundCorners(rgba, width, height, r) {
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      const dx = Math.max(0, r - x, x - (width - 1 - r)), dy = Math.max(0, r - y, y - (height - 1 - r));
      if (dx * dx + dy * dy > r * r) rgba[(y * width + x) * 4 + 3] = 0;
    }
  return rgba;
}

function ffmpeg(args, input) {
  const r = spawnSync('ffmpeg', ['-v', 'error', '-y', ...args], { input, maxBuffer: 1 << 28 });
  if (r.error) throw new Error(`ffmpeg is needed for art:cutout (${r.error.message})`);
  if (r.status !== 0) throw new Error(`ffmpeg failed: ${r.stderr}`);
  return r.stdout;
}

function readRgba(input) {
  const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', input]);
  const [width, height] = String(probe.stdout).trim().split(',').map(Number);
  if (!width || !height) throw new Error(`Can't read the size of ${input}`);
  return { rgba: ffmpeg(['-i', input, '-f', 'rawvideo', '-pix_fmt', 'rgba', '-']), width, height };
}

function cutoutFile(input, output, skip = [], page = 'ivory', round = 0) {
  const { rgba, width, height } = readRgba(input);
  cutout(rgba, width, height, skip, page);
  if (round > 0) roundCorners(rgba, width, height, round);
  const notch = notchIn(rgba, width, height);
  if (notch)
    throw new Error(
      `${path.basename(input)} would have a notch cut into it at (${notch.x}, ${notch.y}). Something inside the scene ` +
        `(a speech bubble?) was painted out. Crop the whole scene with it instead (CLAUDE.md, "Lesson artwork" rule 4).`,
    );
  ffmpeg(['-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${width}x${height}`, '-i', '-', '-c:v', 'libwebp', '-lossless', '1', output], rgba);
  return { width, height };
}

/** Width and height from a WebP header (lossless VP8L or extended VP8X), or null. */
function webpSize(buf) {
  if (buf.length < 30 || buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const chunk = buf.toString('ascii', 12, 16);
  if (chunk === 'VP8X') return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
  if (chunk === 'VP8L') {
    const bits = buf.readUInt32LE(21);
    return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >>> 14) & 0x3fff) };
  }
  return null;
}

/**
 * Lesson images with a notch cut into them (`notchIn`), as "lesson/file". Decodes each with ffmpeg, a few at a time
 * (starting a process is the slow part).
 */
async function notchedLessonArt(dir = ART_DIR, parallel = 6) {
  const { spawn } = require('child_process');
  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .flatMap((d) => fs.readdirSync(path.join(dir, d.name)).filter((f) => /\.webp$/i.test(f)).map((f) => `${d.name}/${f}`));
  const decode = (file) =>
    new Promise((resolve, reject) => {
      const size = webpSize(fs.readFileSync(path.join(dir, file)));
      if (!size) return reject(new Error(`Can't read the size of ${file}`));
      // No stdin and no stderr pipe: an open stdin or an unread stderr can leave ffmpeg waiting forever.
      const p = spawn('ffmpeg', ['-nostdin', '-v', 'error', '-i', path.join(dir, file), '-f', 'rawvideo', '-pix_fmt', 'rgba', '-'], {
        stdio: ['ignore', 'pipe', 'ignore'],
      });
      const parts = [];
      p.stdout.on('data', (d) => parts.push(d));
      p.on('error', reject);
      p.on('close', () => resolve({ rgba: Buffer.concat(parts), ...size }));
    });
  const notched = [];
  let next = 0;
  const worker = async () => {
    while (next < files.length) {
      const file = files[next++];
      const { rgba, width, height } = await decode(file);
      if (rgba.length === width * height * 4 && notchIn(rgba, width, height)) notched.push(file);
    }
  };
  await Promise.all(Array.from({ length: parallel }, worker));
  return notched.sort();
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

async function main(argv) {
  const args = argv.slice(2);
  if (args.includes('--check')) {
    const opaque = opaqueLessonArt();
    console.log(opaque.length ? `Without a transparent background:\n  ${opaque.join('\n  ')}` : 'All lesson images are transparent.');
    const notched = await notchedLessonArt();
    console.log(notched.length ? `With a notch cut into them:\n  ${notched.join('\n  ')}` : 'No lesson image has a notch.');
    return opaque.length || notched.length ? 1 : 0;
  }
  const outAt = args.indexOf('--out');
  const out = outAt === -1 ? null : args[outAt + 1];
  const skipAt = args.indexOf('--keep-edge');
  const skip = skipAt === -1 ? [] : args[skipAt + 1].split(',');
  const pageAt = args.indexOf('--page');
  const page = pageAt === -1 ? 'ivory' : args[pageAt + 1];
  const roundAt = args.indexOf('--round');
  const round = roundAt === -1 ? 0 : Number(args[roundAt + 1]);
  // Option values aren't inputs. Only skip a value index when its option is present (else -1 + 1 would drop input 0).
  const optionValues = [outAt, skipAt, pageAt, roundAt].filter((at) => at !== -1).map((at) => at + 1);
  const inputs = args.filter((a, i) => !a.startsWith('--') && !optionValues.includes(i));
  if (!out || !inputs.length || !BACKGROUNDS[page] || !(round >= 0)) {
    console.error(
      'Usage: npm run art:cutout -- <image> [more…] --out <dir> [--keep-edge bottom,left] [--page ivory|white] [--round <px>]   |   npm run art:cutout -- --check',
    );
    return 2;
  }
  fs.mkdirSync(out, { recursive: true });
  let failed = 0;
  for (const input of inputs) {
    const target = path.join(out, path.basename(input).replace(/\.\w+$/, '.webp'));
    try {
      const { width, height } = cutoutFile(input, target, skip, page, round);
      console.log(`${target}  ${width}×${height}`);
    } catch (e) {
      console.error(`Not written: ${e.message}`);
      failed++;
    }
  }
  return failed ? 1 : 0;
}

module.exports = { cutout, notchIn, roundCorners, webpHasAlpha, webpSize, opaqueLessonArt, notchedLessonArt };

if (require.main === module)
  main(process.argv).then(
    (code) => (process.exitCode = code),
    (e) => {
      console.error(e.message);
      process.exitCode = 1;
    },
  );
