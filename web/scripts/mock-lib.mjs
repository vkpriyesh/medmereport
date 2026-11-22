// Shared helpers for the SYNTHETIC dev mocks (no real patient data): PNG encoder, JSON writer, seeded RNG,
// geometry primitives beyond mock-model.mjs, and a slice sampler for procedural 2D series.
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { deflateSync } from 'node:zlib'

// ---------------- PNG encoder (8-bit grey or RGB) on top of node:zlib ----------------
const CRC = new Uint32Array(256).map((_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})
function crc32(buf) {
  let c = 0xffffffff
  for (const b of buf) c = CRC[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const out = Buffer.alloc(12 + data.length)
  out.writeUInt32BE(data.length, 0)
  out.write(type, 4, 'ascii')
  data.copy(out, 8)
  out.writeUInt32BE(crc32(out.subarray(4, 8 + data.length)), 8 + data.length)
  return out
}
/** @param {number} w @param {number} h @param {1|3} ch @param {Uint8Array} px */
export function encodePng(w, h, ch, px) {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4)
  ihdr[8] = 8; ihdr[9] = ch === 1 ? 0 : 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0
  const stride = w * ch
  const raw = Buffer.alloc((stride + 1) * h)
  for (let y = 0; y < h; y++) { raw[y * (stride + 1)] = 0; Buffer.from(px.buffer, px.byteOffset + y * stride, stride).copy(raw, y * (stride + 1) + 1) }
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))])
}

export function writeJSON(p, obj) { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, JSON.stringify(obj, null, 1)) }

export function rng(seed) {
  let s = seed >>> 0 || 1
  return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967296 }
}

// ---------------- geometry (viewer space mm: X = Left, Y = Superior, Z = Anterior) ----------------
/**
 * Closed-ish "lathe" around the Y axis: ring k at height ys[k] has a superellipse cross-section rx(k) × rz(k)
 * centred on (cx(k), cz(k)). Outward winding. Returns {pos, idx}.
 */
export function lathe(ys, rx, rz, { segs = 64, cx = () => 0, cz = () => 0, n = 2.4 } = {}) {
  const pos = [], idx = []
  ys.forEach((y, k) => {
    for (let j = 0; j < segs; j++) {
      const a = (j / segs) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a)
      const e = 2 / n
      pos.push(cx(k) + rx(k) * Math.sign(s) * Math.abs(s) ** e, y, cz(k) + rz(k) * Math.sign(c) * Math.abs(c) ** e)
    }
  })
  for (let k = 0; k < ys.length - 1; k++) for (let j = 0; j < segs; j++) {
    const a = k * segs + j, b = k * segs + ((j + 1) % segs), d = a + segs, e = b + segs
    idx.push(a, b, d, b, e, d)
  }
  return { pos, idx }
}

/** Distance from p to the polyline pts. */
export function distPolyline(p, pts) {
  let best = Infinity
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1]
    const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], ap = [p[0] - a[0], p[1] - a[1], p[2] - a[2]]
    const L = ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2 || 1
    const t = Math.max(0, Math.min(1, (ap[0] * ab[0] + ap[1] * ab[1] + ap[2] * ab[2]) / L))
    best = Math.min(best, Math.hypot(ap[0] - ab[0] * t, ap[1] - ab[1] * t, ap[2] - ab[2] * t))
  }
  return best
}
export const inEll = (p, c, r) => ((p[0] - c[0]) / r[0]) ** 2 + ((p[1] - c[1]) / r[1]) ** 2 + ((p[2] - c[2]) / r[2]) ** 2 < 1

/** Synthetic measurement: always carries method + caveats (contract). */
const SYN = { text: 'Synthetic value generated for UI development — not from any person.', severity: 'info' }
export const measure = (key, label, value, unit, reference, method, extra = []) => ({
  key, label, value: value === null ? null : +value.toFixed(Math.abs(value) < 10 ? 2 : 1), unit,
  method: method ?? 'Synthetic phantom: procedurally generated number for developing the interface.', reference, caveats: [SYN, ...extra],
})

// ---------------- 2D series sampler ----------------
/**
 * Write a slice stack sampled from `value(lpsPoint) → 0..255` into `<filesDir>/series/<id>/` and return the
 * SeriesInfo row. `o` = DICOM orientation (row, col cosines), `pos(t)` = top-left LPS position of slice at `t`.
 */
export function writeSeries(filesDir, s, value) {
  const dir = join(filesDir, 'series', s.id)
  mkdirSync(dir, { recursive: true })
  const row = s.o.slice(0, 3), col = s.o.slice(3)
  const slices = []
  s.along.forEach((t, i) => {
    const origin = s.pos(t)
    const img = new Uint8Array(s.w * s.h)
    for (let j = 0; j < s.h; j++) for (let k = 0; k < s.w; k++) {
      const p = [0, 1, 2].map((q) => origin[q] + k * s.ps * row[q] + j * s.ps * col[q])
      img[j * s.w + k] = Math.max(0, Math.min(255, Math.round(value(p))))
    }
    writeFileSync(join(dir, `${String(i).padStart(3, '0')}.png`), encodePng(s.w, s.h, 1, img))
    slices.push({ pos: origin.map((v) => +v.toFixed(2)) })
  })
  writeJSON(join(dir, 'meta.json'), {
    id: s.id, title: s.title, modality: s.modality, sequence: s.seq, plane: s.plane, region: s.region, role: 'primary',
    n: s.along.length, ext: 'png', w: s.w, h: s.h, rows: s.h, cols: s.w, pixelSpacing: [s.ps, s.ps], thickness: s.thickness,
    TE: s.TE ?? null, TR: s.TR ?? null, seriesNumber: s.num, desc: s.desc, orientation: s.o, slices, window: { lo: 0, hi: 255 }, labels: false,
  })
  return {
    id: s.id, modality: s.modality, description: s.desc, body_part: s.region, plane: s.plane, sequence: s.seq, role: 'primary',
    n_images: s.along.length, rows: s.h, cols: s.w, pixel_spacing: [s.ps, s.ps], slice_thickness: s.thickness,
  }
}

export const range = (n, a, b) => Array.from({ length: n }, (_, i) => a + ((b - a) * i) / Math.max(1, n - 1))
export const nearest = (arr, v) => arr.reduce((bi, a, i) => (Math.abs(a - v) < Math.abs(arr[bi] - v) ? i : bi), 0)
