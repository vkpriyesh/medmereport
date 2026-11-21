#!/usr/bin/env node
// Generates a SYNTHETIC phantom study for UI development (`npm run dev -- --mode mock`).
// Everything is procedural (ellipsoid head, neck, spine, a toy vessel tree) — no real patient data.
// Output: web/public/mock/{studies.json, studies/phantom/{study.json, files/series/<id>/{meta.json,000.png,…}}}
// PNGs are written with a tiny encoder on top of node:zlib (8-bit grey, or RGB for label maps).
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { deflateSync } from 'node:zlib'
import { LABEL_NAMES, LABEL_TABLE, buildModel, labelCodeLPS } from './mock-model.mjs'
import { KNOWLEDGE } from './mock-knowledge.mjs'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'mock')
const STUDY = 'phantom'

// ---------------- PNG encoder ----------------
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
function encodePng(w, h, ch, px) {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4)
  ihdr[8] = 8; ihdr[9] = ch === 1 ? 0 : 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0
  const stride = w * ch
  const raw = Buffer.alloc((stride + 1) * h)
  for (let y = 0; y < h; y++) { raw[y * (stride + 1)] = 0; Buffer.from(px.buffer, px.byteOffset + y * stride, stride).copy(raw, y * (stride + 1) + 1) }
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))])
}

// ---------------- phantom ----------------
const T = { BG: 0, FAT: 1, BONE: 2, CSF: 3, GM: 4, WM: 5, VENT: 6, MUSCLE: 7, MARROW: 8, DISC: 9 }
//            BG  FAT BONE CSF  GM   WM  VENT MUSC MARR DISC
const CONTRAST = {
  T1:    [0, 235, 25, 35, 115, 165, 35, 80, 190, 90],
  T2:    [0, 170, 15, 245, 140, 95, 245, 60, 120, 200],
  FLAIR: [0, 160, 15, 20, 150, 115, 20, 70, 110, 120],
}
// label codes = the synthetic 3D model's region codes (model/regions.json), so 3D → 2D `hl=` links line up
const LABELS = LABEL_NAMES

/** Tissue + label code at LPS point (mm). +x = patient left, +y = posterior, +z = superior. */
function tissue(x, y, z) {
  const rHead = Math.sqrt((x / 75) ** 2 + ((y - 5) / 95) ** 2 + ((z - 5) / 85) ** 2)
  if (rHead < 1) {
    if (rHead > 0.95) return [T.FAT, 0]
    if (rHead > 0.88) return [T.BONE, 0]
    if (rHead > 0.85) return [T.CSF, 0]
    for (const s of [-1, 1]) if (((x - s * 11) / 6) ** 2 + ((y + 2) / 24) ** 2 + ((z - 18) / 9) ** 2 < 1) return [T.VENT, labelCodeLPS(x, y, z, 'vent')]
    if (z < 2 && Math.hypot(x, y - 22) < 11) return [T.WM, labelCodeLPS(x, y, z, 'stem')]
    const c = (x / 42) ** 2 + ((y - 58) / 22) ** 2 + ((z + 22) / 18) ** 2
    if (c < 1) return [c > 0.55 + 0.12 * Math.sin(z * 1.4) ? T.GM : T.WM, labelCodeLPS(x, y, z, 'cereb')]
    const rb = Math.sqrt((x / 66) ** 2 + ((y - 5) / 85) ** 2 + ((z - 12) / 70) ** 2)
    if (rb > 1 || z < -30) return [z < -18 ? T.MUSCLE : T.CSF, 0]
    if (Math.abs(x) < 1.3 && rb > 0.35) return [T.CSF, 0] // midline fissure
    const a = Math.atan2(y, x), e = Math.atan2(z, Math.hypot(x, y))
    const gyri = 0.8 + 0.055 * Math.sin(9 * a) * Math.sin(7 * e) + 0.03 * Math.sin(17 * a + 5 * e)
    return [rb > gyri ? T.GM : T.WM, labelCodeLPS(x, y, z, 'hemi')]
  }
  if (z < -20 && z > -160) {
    if (Math.hypot(x / 52, (y - 12) / 58) < 1) {
      const d = Math.hypot(x, y - 25)
      if (d < 6) return [T.WM, labelCodeLPS(x, y, -60, 'stem')]
      if (d < 9) return [T.CSF, 0]
      const phase = (((z + 160) % 22) + 22) % 22
      if (Math.abs(x) < 15 && y > -4 && y < 15) return [phase < 3.5 ? T.DISC : T.MARROW, 0]
      if (Math.abs(x) < 5 && y > 33 && y < 52 && phase > 4 && phase < 16) return [T.MARROW, 0]
      if (Math.hypot(x, y + 30) < 8) return [T.BG, 0]
      if (Math.hypot(x / 52, (y - 12) / 58) > 0.93) return [T.FAT, 0]
      return [T.MUSCLE, 0]
    }
  }
  return [T.BG, 0]
}

let seed = 1234567
const rand = () => { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; return ((seed >>> 0) / 4294967296) }

/** Sample one slice: origin = top-left pixel centre, row/col unit vectors, ps = [row, col] mm. */
function sampleSlice(origin, row, col, w, h, ps, seq, withLabels) {
  const img = new Uint8Array(w * h)
  const lab = withLabels ? new Uint8Array(w * h * 3) : null
  const tab = CONTRAST[seq]
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++) {
      const p = [0, 1, 2].map((k) => origin[k] + i * ps[1] * row[k] + j * ps[0] * col[k])
      const [tt, code] = tissue(p[0], p[1], p[2])
      const bias = 1 + 0.06 * Math.sin(p[0] / 40) * Math.cos(p[2] / 50)
      const v = tt === T.BG ? rand() * 6 : tab[tt] * bias + (rand() - 0.5) * 12
      img[j * w + i] = Math.max(0, Math.min(255, Math.round(v)))
      if (lab) lab[(j * w + i) * 3] = code
    }
  }
  return { img, lab }
}

// ---------------- series definitions ----------------
const N = 256, PS = 220 / N
const AX = [1, 0, 0, 0, 1, 0], SAG = [0, 1, 0, 0, 0, -1], COR = [1, 0, 0, 0, 0, -1]
const range = (n, a, b) => Array.from({ length: n }, (_, i) => a + ((b - a) * i) / Math.max(1, n - 1))

const SERIES = [
  { id: 's001', title: 'Axial T2', desc: 'AX T2 TSE 5mm', seq: 'T2', plane: 'axial', o: AX, n: 24, TE: 98, TR: 4500, num: 3, labels: true,
    pos: (t) => [-110, -110, t], along: range(24, 70, -45), thickness: 5 },
  { id: 's002', title: 'Axial FLAIR', desc: 'AX FLAIR 6mm', seq: 'FLAIR', plane: 'axial', o: AX, n: 20, TE: 94, TR: 7000, num: 4,
    pos: (t) => [-110, -110, t], along: range(20, 68, -46), thickness: 6 },
  { id: 's003', title: 'Sagittal T1', desc: 'SAG T1 SE 5mm', seq: 'T1', plane: 'sagittal', o: SAG, n: 20, TE: 12, TR: 550, num: 2,
    pos: (t) => [t, -110, 110], along: range(20, -50, 50), thickness: 5 },
  { id: 's004', title: 'Sagittal T2', desc: 'SAG T2 TSE 6mm', seq: 'T2', plane: 'sagittal', o: SAG, n: 16, TE: 105, TR: 3800, num: 6,
    pos: (t) => [t, -110, 110], along: range(16, -45, 45), thickness: 6 },
  { id: 's005', title: 'Coronal T2', desc: 'COR T2 5mm', seq: 'T2', plane: 'coronal', o: COR, n: 20, TE: 98, TR: 4200, num: 5,
    pos: (t) => [-110, t, 110], along: range(20, -80, 80), thickness: 5 },
]

function writeJSON(p, obj) { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, JSON.stringify(obj, null, 1)) }

rmSync(OUT, { recursive: true, force: true })
const filesDir = join(OUT, 'studies', STUDY, 'files', 'series')
const seriesInfo = []

for (const s of SERIES) {
  const dir = join(filesDir, s.id)
  mkdirSync(dir, { recursive: true })
  const row = s.o.slice(0, 3), col = s.o.slice(3)
  const slices = []
  s.along.forEach((t, i) => {
    const origin = s.pos(t)
    const { img, lab } = sampleSlice(origin, row, col, N, N, [PS, PS], s.seq, !!s.labels)
    writeFileSync(join(dir, `${String(i).padStart(3, '0')}.png`), encodePng(N, N, 1, img))
    if (lab) writeFileSync(join(dir, `L${String(i).padStart(3, '0')}.png`), encodePng(N, N, 3, lab))
    slices.push({ pos: origin.map((v) => +v.toFixed(2)) })
  })
  writeJSON(join(dir, 'meta.json'), {
    id: s.id, title: s.title, modality: 'MR', sequence: s.seq, plane: s.plane, region: 'brain', role: 'primary',
    n: s.n, ext: 'png', w: N, h: N, rows: N, cols: N, pixelSpacing: [+PS.toFixed(4), +PS.toFixed(4)], thickness: s.thickness,
    TE: s.TE, TR: s.TR, seriesNumber: s.num, desc: s.desc, orientation: s.o, slices, window: { lo: 0, hi: 255 },
    labels: !!s.labels, ...(s.labels ? { labelNames: LABELS, labelTable: LABEL_TABLE } : {}),
  })
  seriesInfo.push({ id: s.id, modality: 'MR', description: s.desc, body_part: 'head', plane: s.plane, sequence: s.seq, role: 'primary',
    n_images: s.n, rows: N, cols: N, pixel_spacing: [PS, PS], slice_thickness: s.thickness })
  process.stdout.write(`${s.id} ${s.title}: ${s.n} slices\n`)
}

// ---- MIP spin of a toy vessel tree (TOF-style), natural frame size 224×256 ----
{
  const id = 's006', W = 224, H = 256, ps = 0.9, n = 12
  const mirror = (pts) => pts.map(([x, y, z]) => [-x, y, z])
  const ring = Array.from({ length: 25 }, (_, k) => { const a = (k / 24) * 2 * Math.PI; return [15 * Math.cos(a), 5 + 13 * Math.sin(a), -8] })
  const ICA = [[20, 0, -150], [18, 0, -40], [15, -2, -10], [13, -3, -8]]
  const MCA = [[13, -3, -8], [40, -6, -2], [58, 0, 14], [62, 10, 30]]
  const ACA = [[6, -12, -8], [4, -40, 20], [3, -25, 58]]
  const PCA = [[6, 16, -8], [25, 40, 0], [30, 62, 12]]
  const VERT = [[10, 28, -150], [6, 24, -50], [0, 20, -30], [0, 15, -10]]
  const vessels = [
    [ICA, 2.0], [mirror(ICA), 2.0], [MCA, 1.4], [mirror(MCA), 1.4], [ACA, 1.1], [mirror(ACA), 1.1],
    [PCA, 1.1], [mirror(PCA), 1.1], [VERT, 1.5], [mirror(VERT), 1.5], [ring, 1.1],
  ]
  const dir = join(filesDir, id)
  mkdirSync(dir, { recursive: true })
  for (let f = 0; f < n; f++) {
    const th = (f / n) * Math.PI, c = Math.cos(th), sn = Math.sin(th)
    const buf = new Float32Array(W * H)
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const u = (i - W / 2) * ps, z = 80 - j * ps
      const e = (u / 72) ** 2 + ((z - 5) / 84) ** 2
      buf[j * W + i] = e < 1 ? 22 + 8 * (1 - e) + rand() * 6 : rand() * 4
    }
    for (const [pts, r] of vessels) {
      for (let k = 0; k < pts.length - 1; k++) {
        const a = pts[k], b = pts[k + 1], len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2])
        for (let s = 0; s <= len; s += 0.4) {
          const t = s / len, x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t, z = a[2] + (b[2] - a[2]) * t
          const pu = (x * c - y * sn) / ps + W / 2, pv = (80 - z) / ps
          const R = Math.ceil((3 * r) / ps)
          for (let dj = -R; dj <= R; dj++) for (let di = -R; di <= R; di++) {
            const ii = Math.round(pu) + di, jj = Math.round(pv) + dj
            if (ii < 0 || jj < 0 || ii >= W || jj >= H) continue
            const d = Math.hypot((ii - pu) * ps, (jj - pv) * ps)
            const v = 235 * Math.exp(-((d / r) ** 2))
            if (v > buf[jj * W + ii]) buf[jj * W + ii] = v
          }
        }
      }
    }
    writeFileSync(join(dir, `${String(f).padStart(3, '0')}.png`), encodePng(W, H, 1, Uint8Array.from(buf, (v) => Math.min(255, Math.round(v)))))
  }
  writeJSON(join(dir, 'meta.json'), {
    id, title: 'MR angiogram (MIP)', modality: 'MR', sequence: 'TOF', plane: 'projection', region: 'vessels', role: 'mip',
    n, ext: 'png', w: W, h: H, rows: W, cols: W, pixelSpacing: [ps, ps], thickness: null, TE: 3.4, TR: 22, seriesNumber: 9,
    desc: 'TOF 3D MIP spin', orientation: null, slices: Array.from({ length: n }, () => ({ pos: null })), window: { lo: 0, hi: 255 }, labels: false,
  })
  seriesInfo.push({ id, modality: 'MR', description: 'TOF 3D MIP spin', body_part: 'vessels', plane: 'projection', sequence: 'TOF', role: 'mip',
    n_images: n, rows: H, cols: W, pixel_spacing: [ps, ps], slice_thickness: null })
  process.stdout.write(`${id} MIP: ${n} frames\n`)
}

// ---- "photo of a film sheet": no physical scale, frames of different natural sizes ----
{
  const id = 's007', n = 2, dir = join(filesDir, id)
  mkdirSync(dir, { recursive: true })
  const sizes = [[320, 240], [240, 320]]
  sizes.forEach(([W, H], f) => {
    const img = new Uint8Array(W * H).fill(18)
    const cols = f === 0 ? 3 : 2, rows = f === 0 ? 2 : 3, cell = Math.floor(Math.min((W - 20) / cols, (H - 20) / rows))
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const z = 55 - (r * cols + c) * 18
      const { img: sl } = sampleSlice([-110, -110, z], [1, 0, 0], [0, 1, 0], cell, cell, [220 / cell, 220 / cell], 'T1', false)
      const ox = 10 + c * cell, oy = 10 + r * cell
      for (let j = 0; j < cell - 2; j++) for (let i = 0; i < cell - 2; i++) img[(oy + j) * W + ox + i] = Math.round(sl[j * cell + i] * 0.85 + 20)
    }
    writeFileSync(join(dir, `${String(f).padStart(3, '0')}.png`), encodePng(W, H, 1, img))
  })
  writeJSON(join(dir, 'meta.json'), {
    id, title: 'Photo of film sheet', modality: 'OT', sequence: 'PHOTO', plane: 'unknown', region: 'unknown', role: 'photo',
    n, ext: 'png', w: 320, h: 240, rows: 240, cols: 320, pixelSpacing: null, thickness: null, seriesNumber: null,
    desc: 'Synthetic photo', orientation: null, slices: [{ pos: null }, { pos: null }], labels: false,
  })
  seriesInfo.push({ id, modality: 'OT', description: 'Synthetic photo', body_part: 'unknown', plane: 'unknown', sequence: 'PHOTO', role: 'photo',
    n_images: n, rows: 240, cols: 320, pixel_spacing: null, slice_thickness: null })
  process.stdout.write(`${id} photo: ${n} frames\n`)
}

// ---- synthetic 3D model (model/*) + knowledge base ----
{
  const ax = SERIES.find((x) => x.id === 's001'), sag = SERIES.find((x) => x.id === 's003')
  const nearest = (arr, v) => arr.reduce((bi, a, i) => (Math.abs(a - v) < Math.abs(arr[bi] - v) ? i : bi), 0)
  const r = buildModel(join(OUT, 'studies', STUDY, 'files'), {
    axialSeries: ax.id, sagSeries: sag.id, ext: 'png',
    axialSlice: (y) => nearest(ax.along, y), // viewer Y (superior) = LPS z
    sagSlice: (x) => nearest(sag.along, x), // viewer X (left) = LPS x
  })
  writeJSON(join(OUT, 'knowledge.json'), KNOWLEDGE)
  process.stdout.write(`model: ${r.nodes} nodes, ${r.tris} triangles (synthetic)
`)
}

const study = {
  id: STUDY, adapter: 'dicomdir', display_name: 'Demo Phantom', study_date: '20260115',
  description: 'MRI Brain (synthetic phantom)', modalities: ['MR'], series: seriesInfo,
  warnings: ['This is synthetic demo data generated for development.'],
}
writeJSON(join(OUT, 'studies', STUDY, 'study.json'), study)
writeJSON(join(OUT, 'studies.json'), [{ id: STUDY, description: study.description, study_date: study.study_date, modalities: study.modalities, n_series: seriesInfo.length, adapter: study.adapter }])
process.stdout.write(`\nWrote synthetic mock study to ${OUT}\n`)
