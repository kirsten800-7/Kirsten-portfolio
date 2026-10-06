/**
 * Generates the two images the portfolio asks for but that were never supplied:
 *
 *   public/logo.png     the monogram mark used in the header / footer icon
 *   public/kirsten.png  a neutral stand-in for the hero photo
 *
 * Both are written as ordinary PNG files, so replacing them is just a matter of
 * dropping a real file over the top (or pointing `profile.photoUrl` /
 * `profile.logoUrl` in src/components/portfolio/data.ts somewhere else).
 * No image libraries are used — the PNG container is assembled by hand so the
 * script runs on a bare Bun/Node runtime.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/* ------------------------------------------------------------------ PNG ---- */

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buffer) {
  let c = -1;
  for (let i = 0; i < buffer.length; i += 1) {
    c = CRC_TABLE[(c ^ buffer[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, "latin1"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([length, body, crc]);
}

/** Wraps 8-bit RGBA pixels in a minimal, valid PNG. */
function encodePng(width, height, rgba) {
  const stride = width * 4;
  const raw = Buffer.alloc(height * (stride + 1));
  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (stride + 1);
    raw[rowStart] = 0; // filter type: none
    for (let i = 0; i < stride; i += 1) {
      raw[rowStart + 1 + i] = rgba[y * stride + i];
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // colour type: truecolour + alpha
  ihdr[10] = 0; // deflate
  ihdr[11] = 0; // adaptive filtering
  ihdr[12] = 0; // no interlace

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/**
 * Rasterises `shader(u, v) -> [r, g, b, a]` (0..1) at `width`×`height`, sampling
 * `ss`×`ss` times per pixel and averaging with premultiplied alpha so that
 * curved edges stay smooth when the mark is drawn at 40px in the header.
 */
function render(width, height, ss, shader) {
  const out = new Uint8Array(width * height * 4);
  const samples = ss * ss;

  for (let py = 0; py < height; py += 1) {
    for (let px = 0; px < width; px += 1) {
      let pr = 0;
      let pg = 0;
      let pb = 0;
      let pa = 0;

      for (let sy = 0; sy < ss; sy += 1) {
        for (let sx = 0; sx < ss; sx += 1) {
          const u = (px + (sx + 0.5) / ss) / width;
          const v = (py + (sy + 0.5) / ss) / height;
          const [r, g, b, a] = shader(u, v);
          pr += r * a;
          pg += g * a;
          pb += b * a;
          pa += a;
        }
      }

      const index = (py * width + px) * 4;
      if (pa > 0) {
        out[index] = Math.round((pr / pa) * 255);
        out[index + 1] = Math.round((pg / pa) * 255);
        out[index + 2] = Math.round((pb / pa) * 255);
      }
      out[index + 3] = Math.round((pa / samples) * 255);
    }
  }

  return out;
}

/* ------------------------------------------------------------------ logo ---- */

const INK = [23 / 255, 23 / 255, 23 / 255, 1]; // neutral-900
const PAPER = [1, 1, 1, 1];

const CORNER = 0.235; // rounded-square radius, in 0..1 units
const STEM = { x0: 0.295, x1: 0.392, y0: 0.235, y1: 0.765 };
const ARM_HALF = 0.045;

function insideRoundedSquare(u, v) {
  const dx = Math.max(CORNER - u, u - (1 - CORNER), 0);
  const dy = Math.max(CORNER - v, v - (1 - CORNER), 0);
  return Math.hypot(dx, dy) <= CORNER;
}

function distanceToSegment(px, py, ax, ay, bx, by) {
  const vx = bx - ax;
  const vy = by - ay;
  const t = Math.max(
    0,
    Math.min(1, ((px - ax) * vx + (py - ay) * vy) / (vx * vx + vy * vy)),
  );
  return Math.hypot(px - (ax + t * vx), py - (ay + t * vy));
}

/** A white tile carrying a geometric "K" — the same mark as the old text badge. */
function logoShader(u, v) {
  if (!insideRoundedSquare(u, v)) return [0, 0, 0, 0];

  const stem = u >= STEM.x0 && u <= STEM.x1 && v >= STEM.y0 && v <= STEM.y1;
  const upperArm =
    distanceToSegment(u, v, 0.372, 0.515, 0.705, 0.255) <= ARM_HALF;
  const lowerArm =
    distanceToSegment(u, v, 0.372, 0.485, 0.705, 0.745) <= ARM_HALF;

  return stem || upperArm || lowerArm ? INK : PAPER;
}

/* ----------------------------------------------------------------- photo ---- */

const mix = (a, b, t) => a + (b - a) * t;

/**
 * A quiet portrait-slot placeholder: dark gradient, a soft key light and a
 * translucent head-and-shoulders silhouette. Deliberately abstract so it reads
 * as "put a photo here" instead of pretending to be a photo of Kirsten.
 */
function photoShader(u, v) {
  let r = mix(0.165, 0.055, v);
  let g = mix(0.169, 0.059, v);
  let b = mix(0.18, 0.067, v);

  const keyLight = Math.max(
    0,
    1 - Math.hypot((u - 0.5) / 0.4, (v - 0.3) / 0.38),
  );
  r += 0.11 * keyLight;
  g += 0.11 * keyLight;
  b += 0.12 * keyLight;

  const head = Math.hypot((u - 0.5) / 0.15, (v - 0.365) / 0.15) <= 1;
  const neck = u >= 0.435 && u <= 0.565 && v >= 0.46 && v <= 0.72;
  const shoulders = Math.hypot((u - 0.5) / 0.35, (v - 0.97) / 0.33) <= 1;

  if (head || neck || shoulders) {
    r += 0.17;
    g += 0.17;
    b += 0.18;
  }

  const vignette = Math.min(1, Math.hypot((u - 0.5) * 1.4, (v - 0.5) * 1.05));
  const falloff = 1 - 0.42 * vignette * vignette;

  return [r * falloff, g * falloff, b * falloff, 1];
}

/* ----------------------------------------------------------------- write ---- */

const targets = [
  {
    file: "public/logo.png",
    width: 128,
    height: 128,
    supersample: 8,
    shader: logoShader,
  },
  {
    file: "public/kirsten.png",
    width: 720,
    height: 900,
    supersample: 2,
    shader: photoShader,
  },
];

for (const { file, width, height, supersample, shader } of targets) {
  const pixels = render(width, height, supersample, shader);
  const target = resolve(root, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, encodePng(width, height, pixels));
  console.log(`wrote ${file} (${width}x${height})`);
}
