// SYNTHETIC phantom 3D model for UI development (dev-only; no real patient data).
// Builds procedural geometry in viewer space (mm; X = Left, Y = Superior, Z = Anterior), names every node
// per docs/API_CONTRACT.md §5 and writes model/{scene.glb, regions.json, stats.json, status.json}.
// The same region classifier labels the 2D phantom's label maps so `hl=` deep links line up.
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

// ---------------- region vocabulary used by the phantom ----------------
const CORTEX = [
  ['sfg', 'frontal'], ['orbitofrontal', 'frontal'], ['precentral', 'frontal'],
  ['postcentral', 'parietal'], ['spl', 'parietal'], ['precuneus', 'parietal'],
  ['stg', 'temporal'], ['itg', 'temporal'], ['lateral_occipital', 'occipital'], ['cingulate_ant', 'limbic'],
]
const INNER = {
  thalamus: { c: [10, 8, -8], r: [9, 9, 15], group: 'deep' },
  hippocampus: { c: [27, -18, -12], r: [6, 6, 20], group: 'deep' },
  lateral_ventricle: { c: [11, 18, 2], r: [6, 9, 24], group: 'ventricle' },
}
const STEM = {
  midbrain: { c: [0, -5, -20], r: [10, 9, 10] },
  pons: { c: [0, -25, -18], r: [13, 13, 13] },
  medulla: { c: [0, -50, -22], r: [8, 16, 8] },
}
const CEREB = { c: [0, -22, -58], r: [42, 18, 22] }
const BRAIN = { c: [0, 12, -5], r: [66, 70, 85] }

export const REGIONS = []
for (const h of ['L', 'R']) {
  for (const [s] of CORTEX) REGIONS.push({ key: `${h}|${s}`, structure: s, hemi: h, group: `hemi_${h}`, inner: false })
  for (const [s, d] of Object.entries(INNER)) REGIONS.push({ key: `${h}|${s}`, structure: s, hemi: h, group: d.group, inner: true })
  REGIONS.push({ key: `${h}|cerebellum_hemi`, structure: 'cerebellum_hemi', hemi: h, group: 'cerebellum', inner: false })
}
REGIONS.push({ key: 'M|cerebellar_vermis', structure: 'cerebellar_vermis', hemi: 'M', group: 'cerebellum', inner: false })
for (const s of Object.keys(STEM)) REGIONS.push({ key: `M|${s}`, structure: s, hemi: 'M', group: 'brainstem', inner: false })
REGIONS.forEach((r, i) => (r.code = i + 1))
const CODE = Object.fromEntries(REGIONS.map((r) => [r.key, r.code]))

const PRETTY = {
  sfg: 'superior frontal gyrus', orbitofrontal: 'orbitofrontal cortex', precentral: 'precentral gyrus', postcentral: 'postcentral gyrus',
  spl: 'superior parietal lobule', precuneus: 'precuneus', stg: 'superior temporal gyrus', itg: 'inferior temporal gyrus',
  lateral_occipital: 'lateral occipital cortex', cingulate_ant: 'anterior cingulate', thalamus: 'thalamus', hippocampus: 'hippocampus',
  lateral_ventricle: 'lateral ventricle', cerebellum_hemi: 'cerebellar hemisphere', cerebellar_vermis: 'cerebellar vermis',
  midbrain: 'midbrain', pons: 'pons', medulla: 'medulla',
}
const prettyKey = (k) => { const [h, s] = k.split('|'); return `${h === 'L' ? 'Left ' : h === 'R' ? 'Right ' : ''}${PRETTY[s] ?? s}` }
export const LABEL_NAMES = Object.fromEntries(REGIONS.map((r) => [String(r.code), `${prettyKey(r.key)} (synthetic)`]))
export const LABEL_TABLE = Object.fromEntries(REGIONS.map((r) => [String(r.code), r.key]))

const inEll = (p, c, r) => ((p[0] - c[0]) / r[0]) ** 2 + ((p[1] - c[1]) / r[1]) ** 2 + ((p[2] - c[2]) / r[2]) ** 2 < 1

/** Cortical region for a point on/in hemisphere `h` (viewer space). */
function cortexAt(p, h) {
  const ax = Math.abs(p[0])
  const uy = (p[1] - BRAIN.c[1]) / BRAIN.r[1], uz = (p[2] - BRAIN.c[2]) / BRAIN.r[2]
  if (ax < 9) {
    if (uz > 0 && uy > -0.25 && uy < 0.45) return `${h}|cingulate_ant`
    if (uz <= 0 && uz > -0.6 && uy > 0) return `${h}|precuneus`
  }
  if (uy < -0.12 && uz > -0.55 && uz < 0.5 && ax > 24) return `${h}|${uy > -0.42 ? 'stg' : 'itg'}`
  if (uz > 0.32) return `${h}|${uy < -0.05 ? 'orbitofrontal' : 'sfg'}`
  if (uz > 0.1) return `${h}|precentral`
  if (uz > -0.15) return `${h}|postcentral`
  if (uz > -0.62) return `${h}|spl`
  return `${h}|lateral_occipital`
}

/**
 * Label code for the 2D phantom at an LPS point (x = left, y = posterior, z = superior), given the
 * tissue class the 2D generator decided on ('hemi' | 'vent' | 'stem' | 'cereb'). 0 = none.
 */
export function labelCodeLPS(x, y, z, kind) {
  const p = [x, z, -y] // LPS → viewer
  const h = x >= 0 ? 'L' : 'R'
  const mir = [Math.abs(p[0]), p[1], p[2]]
  if (kind === 'vent') return CODE[`${h}|lateral_ventricle`]
  if (kind === 'stem') return CODE[p[1] > -12 ? 'M|midbrain' : p[1] > -38 ? 'M|pons' : 'M|medulla']
  if (kind === 'cereb') return CODE[Math.abs(p[0]) < 7 ? 'M|cerebellar_vermis' : `${h}|cerebellum_hemi`]
  if (kind === 'hemi') {
    if (inEll(mir, INNER.thalamus.c, INNER.thalamus.r)) return CODE[`${h}|thalamus`]
    if (inEll(mir, INNER.hippocampus.c, INNER.hippocampus.r)) return CODE[`${h}|hippocampus`]
    return CODE[cortexAt(p, h)]
  }
  return 0
}

// ---------------- geometry ----------------
/** UV ellipsoid with poles on X. Returns {pos: number[], idx: number[]} */
export function ellipsoid(c, r, nu = 48, nv = 32, warp) {
  const pos = [], idx = []
  for (let i = 0; i <= nv; i++) {
    const th = (i / nv) * Math.PI
    for (let j = 0; j <= nu; j++) {
      const ph = (j / nu) * Math.PI * 2
      let p = [Math.cos(th), Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph)]
      p = warp ? warp(p, th, ph) : [c[0] + r[0] * p[0], c[1] + r[1] * p[1], c[2] + r[2] * p[2]]
      pos.push(...p)
    }
  }
  const W = nu + 1
  for (let i = 0; i < nv; i++) for (let j = 0; j < nu; j++) {
    const a = i * W + j, b = a + 1, d = a + W, e = d + 1
    if (i > 0) idx.push(a, d, b)
    if (i < nv - 1) idx.push(b, d, e)
  }
  return { pos, idx }
}

/** Split a triangle soup into per-key meshes by triangle centroid. */
function splitBy(g, keyOf, into) {
  const { pos, idx } = g
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3
    const cen = [0, 1, 2].map((k) => (pos[a + k] + pos[b + k] + pos[c + k]) / 3)
    const key = keyOf(cen)
    if (!key) continue
    const m = (into[key] ??= { pos: [], idx: [], map: new Map() })
    const tri = [idx[t], idx[t + 1], idx[t + 2]].map((v) => {
      let n = m.map.get(v)
      if (n === undefined) { n = m.pos.length / 3; m.pos.push(pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]); m.map.set(v, n) }
      return n
    })
    m.idx.push(...tri)
  }
}

function hemisphere(h) {
  const s = h === 'L' ? 1 : -1
  const { c, r } = BRAIN
  const g = ellipsoid(c, r, 180, 120, (p) => {
    const lat = Math.max(0, p[0])
    const a = Math.atan2(p[2], p[1]), e = Math.asin(Math.max(-1, Math.min(1, p[0])))
    const bump = 1 + Math.min(1, lat / 0.2) * (0.035 * Math.sin(11 * a) * Math.sin(9 * e) + 0.015 * Math.sin(23 * a + 7 * e))
    const x = s * (1.5 + (r[0] - 1.5) * lat * bump)
    const y = Math.max(-30, c[1] + r[1] * p[1] * bump)
    const z = c[2] + r[2] * p[2] * bump
    return [x, y, z]
  })
  if (s < 0) for (let t = 0; t < g.idx.length; t += 3) { const k = g.idx[t + 1]; g.idx[t + 1] = g.idx[t + 2]; g.idx[t + 2] = k } // mirrored → keep outward winding
  return g
}

/** Tube along a polyline (viewer space). */
export function tube(pts, radius, segs = 10) {
  const pos = [], idx = []
  const sample = []
  for (let k = 0; k < pts.length - 1; k++) {
    const a = pts[k], b = pts[k + 1], len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2])
    const n = Math.max(1, Math.ceil(len / 2))
    for (let i = 0; i < n; i++) { const t = i / n; sample.push(a.map((v, q) => v + (b[q] - v) * t)) }
  }
  sample.push(pts[pts.length - 1])
  let prevN = null
  sample.forEach((p, i) => {
    const q = sample[Math.min(sample.length - 1, i + 1)], o = sample[Math.max(0, i - 1)]
    let tg = [q[0] - o[0], q[1] - o[1], q[2] - o[2]]
    const tl = Math.hypot(...tg) || 1; tg = tg.map((v) => v / tl)
    let nrm = prevN ?? (Math.abs(tg[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0])
    const d = nrm[0] * tg[0] + nrm[1] * tg[1] + nrm[2] * tg[2]
    nrm = nrm.map((v, k) => v - d * tg[k]); const nl = Math.hypot(...nrm) || 1; nrm = nrm.map((v) => v / nl)
    prevN = nrm
    const bi = [tg[1] * nrm[2] - tg[2] * nrm[1], tg[2] * nrm[0] - tg[0] * nrm[2], tg[0] * nrm[1] - tg[1] * nrm[0]]
    for (let j = 0; j < segs; j++) {
      const ang = (j / segs) * Math.PI * 2, cs = Math.cos(ang) * radius, sn = Math.sin(ang) * radius
      pos.push(p[0] + nrm[0] * cs + bi[0] * sn, p[1] + nrm[1] * cs + bi[1] * sn, p[2] + nrm[2] * cs + bi[2] * sn)
    }
    if (i > 0) for (let j = 0; j < segs; j++) {
      const a = (i - 1) * segs + j, b = (i - 1) * segs + ((j + 1) % segs), c2 = i * segs + j, e = i * segs + ((j + 1) % segs)
      idx.push(a, b, c2, b, e, c2)
    }
  })
  return { pos, idx }
}
export function concat(parts) {
  const pos = [], idx = []
  for (const p of parts) { const off = pos.length / 3; pos.push(...p.pos); for (const i of p.idx) idx.push(i + off) }
  return { pos, idx }
}

// toy vessel tree (LPS, mirrored) → viewer
const lps2v = ([x, y, z]) => [x, z, -y]
const mirror = (pts) => pts.map(([x, y, z]) => [-x, y, z])
const RING = Array.from({ length: 25 }, (_, k) => { const a = (k / 24) * 2 * Math.PI; return [15 * Math.cos(a), 5 + 13 * Math.sin(a), -8] })
const ICA_HEAD = [[18, 0, -40], [15, -2, -10], [13, -3, -8]]
const ICA_NECK = [[20, 0, -150], [19, 0, -90], [18, 0, -40]]
const MCA = [[13, -3, -8], [40, -6, -2], [58, 0, 14], [62, 10, 30]]
const ACA = [[6, -12, -8], [4, -40, 20], [3, -25, 58]]
const PCA = [[6, 16, -8], [25, 40, 0], [30, 62, 12]]
const BASILAR = [[0, 20, -30], [0, 15, -10]]
const VERT_NECK = [[10, 28, -150], [8, 26, -90], [6, 24, -50], [0, 20, -30]]

function vessels() {
  const cow = [], neck = []
  for (const [pts, r] of [[ICA_HEAD, 2], [MCA, 1.4], [ACA, 1.1], [PCA, 1.1]]) for (const p of [pts, mirror(pts)]) cow.push(tube(p.map(lps2v), r))
  cow.push(tube(RING.map(lps2v), 1.1), tube(BASILAR.map(lps2v), 1.6))
  for (const [pts, r] of [[ICA_NECK, 2.2], [VERT_NECK, 1.6]]) for (const p of [pts, mirror(pts)]) neck.push(tube(p.map(lps2v), r))
  return { cow: concat(cow), neck: concat(neck) }
}

// ---------------- GLB writer (positions + indices; no materials/normals per contract) ----------------
export function writeGlb(file, meshes) {
  const json = { asset: { version: '2.0', generator: 'medmereport mock (synthetic phantom)' }, scene: 0, scenes: [{ nodes: [] }], nodes: [], meshes: [], accessors: [], bufferViews: [] }
  const chunks = []
  let off = 0
  const push = (buf, target) => {
    const pad = (4 - (buf.byteLength % 4)) % 4
    json.bufferViews.push({ buffer: 0, byteOffset: off, byteLength: buf.byteLength, target })
    chunks.push(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength), Buffer.alloc(pad))
    off += buf.byteLength + pad
    return json.bufferViews.length - 1
  }
  for (const [name, g] of meshes) {
    const P = Float32Array.from(g.pos), I = Uint32Array.from(g.idx)
    const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity]
    for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], P[i + k]); max[k] = Math.max(max[k], P[i + k]) }
    const pv = push(P, 34962), iv = push(I, 34963)
    json.accessors.push({ bufferView: pv, componentType: 5126, count: P.length / 3, type: 'VEC3', min, max })
    json.accessors.push({ bufferView: iv, componentType: 5125, count: I.length, type: 'SCALAR' })
    json.meshes.push({ name, primitives: [{ attributes: { POSITION: json.accessors.length - 2 }, indices: json.accessors.length - 1, mode: 4 }] })
    json.nodes.push({ name, mesh: json.meshes.length - 1 })
    json.scenes[0].nodes.push(json.nodes.length - 1)
  }
  json.buffers = [{ byteLength: off }]
  const bin = Buffer.concat(chunks)
  let js = Buffer.from(JSON.stringify(json), 'utf8')
  js = Buffer.concat([js, Buffer.alloc((4 - (js.length % 4)) % 4, 0x20)])
  const header = Buffer.alloc(12)
  header.writeUInt32LE(0x46546c67, 0); header.writeUInt32LE(2, 4); header.writeUInt32LE(12 + 8 + js.length + 8 + bin.length, 8)
  const ch = (len, type) => { const b = Buffer.alloc(8); b.writeUInt32LE(len, 0); b.writeUInt32LE(type, 4); return b }
  writeFileSync(file, Buffer.concat([header, ch(js.length, 0x4e4f534a), js, ch(bin.length, 0x004e4942), bin]))
}

// ---------------- stats helpers ----------------
export function areaCentroid(g) {
  let A = 0; const c = [0, 0, 0]
  for (let t = 0; t < g.idx.length; t += 3) {
    const [a, b, d] = [g.idx[t], g.idx[t + 1], g.idx[t + 2]].map((v) => [g.pos[v * 3], g.pos[v * 3 + 1], g.pos[v * 3 + 2]])
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], v = [d[0] - a[0], d[1] - a[1], d[2] - a[2]]
    const ar = Math.hypot(u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]) / 2
    A += ar
    for (let k = 0; k < 3; k++) c[k] += ((a[k] + b[k] + d[k]) / 3) * ar
  }
  return { area: A, centroid: c.map((v) => +(v / (A || 1)).toFixed(1)) }
}

let seed = 987654321
const rnd = () => { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; return (seed >>> 0) / 4294967296 }
const SYN = { text: 'Synthetic value generated for UI development — not from any person.', severity: 'info' }
const M = (key, label, value, unit, reference, extra = []) => ({
  key, label, value: value === null ? null : +value.toFixed(value < 10 ? 2 : 1), unit,
  method: 'Synthetic phantom: procedurally generated number for developing the interface.', reference, caveats: [SYN, ...extra],
})

/**
 * Write the synthetic model into `<filesDir>/model/`.
 * @param {string} filesDir  …/studies/<id>/files
 * @param {(i:number)=>number} axialSlice  viewer Y (mm) → slice index in the axial labelled series
 * @param {(x:number)=>number} sagSlice    viewer X (mm) → slice index in the sagittal series
 */
export function buildModel(filesDir, { axialSeries, sagSeries, axialSlice, sagSlice, ext }) {
  const dir = join(filesDir, 'model')
  mkdirSync(dir, { recursive: true })
  const parts = {}
  for (const h of ['L', 'R']) splitBy(hemisphere(h), (p) => cortexAt(p, h), parts)
  for (const [s, d] of Object.entries(INNER)) for (const h of ['L', 'R']) {
    const c = [h === 'L' ? d.c[0] : -d.c[0], d.c[1], d.c[2]]
    parts[`${h}|${s}`] = ellipsoid(c, d.r, 40, 24)
  }
  splitBy(ellipsoid(CEREB.c, CEREB.r, 96, 64, (p) => {
    const f = 1 + 0.04 * Math.sin(p[1] * 40)
    return [CEREB.c[0] + CEREB.r[0] * p[0], CEREB.c[1] + CEREB.r[1] * p[1] * f, CEREB.c[2] + CEREB.r[2] * p[2] * f]
  }), (p) => (Math.abs(p[0]) < 7 ? 'M|cerebellar_vermis' : p[0] > 0 ? 'L|cerebellum_hemi' : 'R|cerebellum_hemi'), parts)
  for (const [s, d] of Object.entries(STEM)) parts[`M|${s}`] = ellipsoid(d.c, d.r, 40, 24)
  const v = vessels()
  const skin = ellipsoid([0, 5, -5], [75, 85, 95], 96, 64)

  const meshes = []
  const regions = []
  const statsRegions = {}
  const vol = {}
  for (const r of REGIONS) {
    const g = parts[r.key]
    if (!g) continue
    meshes.push([r.key.replace('|', '__'), g])
    const { area, centroid } = areaCentroid(g)
    regions.push({ ...r, centroid })
    const def = INNER[r.structure] ?? STEM[r.structure]
    vol[r.key] = def
      ? ((4 / 3) * Math.PI * def.r[0] * def.r[1] * def.r[2]) / 1000 * (0.9 + rnd() * 0.2)
      : (area * 2.6) / 1000 * (0.9 + rnd() * 0.2)
  }
  meshes.push(['V__cow', v.cow], ['V__neck', v.neck], ['H__skin', skin])
  writeGlb(join(dir, 'scene.glb'), meshes)

  for (const r of regions) {
    const k = r.key, other = r.hemi === 'L' ? `R|${r.structure}` : r.hemi === 'R' ? `L|${r.structure}` : null
    const ms = [M('volume', 'Volume (synthetic)', vol[k], 'cm³', null)]
    if (other && vol[other]) {
      const a = ((vol[k] - vol[other]) / ((vol[k] + vol[other]) / 2)) * 100
      ms.push(M('asym_volume', 'Left–right volume difference (synthetic)', r.hemi === 'L' ? a : -a, '%', '-10 to 10'))
    }
    const vent = r.structure === 'lateral_ventricle'
    ms.push(M('adc_median', 'Median diffusion (ADC, synthetic)', vent ? 2600 + rnd() * 400 : 650 + rnd() * 380, '×10⁻⁶ mm²/s', vent ? null : '650–950',
      [{ text: 'Region edges blend with neighbouring tissue and fluid (partial volume).', severity: 'info' }]))
    if (!vent) ms.push(M('flair_rel', 'FLAIR signal vs white matter (synthetic)', 0.85 + rnd() * 0.4, '× WM', '0.8–1.2'))
    const thumbs = [
      { view: 'axial', img: `series/${axialSeries}/${String(axialSlice(r.centroid[1])).padStart(3, '0')}.${ext}`, series: axialSeries, slice: axialSlice(r.centroid[1]) },
      { view: 'sagittal', img: `series/${sagSeries}/${String(sagSlice(r.centroid[0])).padStart(3, '0')}.${ext}`, series: sagSeries, slice: sagSlice(r.centroid[0]) },
    ]
    statsRegions[k] = { measurements: ms, thumbs }
  }
  const sum = (pred) => regions.filter(pred).reduce((a, r) => a + vol[r.key], 0)
  const summary = [
    M('brain_volume', 'Brain volume (synthetic)', 1180 + rnd() * 60, 'cm³', '1,000–1,400 cm³',
      [{ text: 'Synthetic phantom: every number on this page is made up for interface development.', severity: 'warn' }]),
    M('hemi_L_volume', 'Left hemisphere (synthetic)', 520 + rnd() * 20, 'cm³', null),
    M('hemi_R_volume', 'Right hemisphere (synthetic)', 520 + rnd() * 20, 'cm³', null),
    M('ventricles_volume', 'Lateral ventricles (synthetic)', sum((r) => r.structure === 'lateral_ventricle'), 'cm³', 'varies widely',
      [{ text: 'Fluid spaces vary a lot between healthy people.', severity: 'info' }]),
    M('wm_adc', 'White-matter ADC (synthetic)', 760, '×10⁻⁶ mm²/s', '650–850'),
  ]
  const json = (name, obj) => writeFileSync(join(dir, name), JSON.stringify(obj, null, 1))
  json('regions.json', {
    backend: 'synthetic-phantom', licence: 'Synthetic test data (CC0) — no real anatomy',
    caveats: ['This model is a procedurally generated phantom for developing the interface. It is not anyone’s brain.', 'Region boundaries are drawn by simple geometric rules.'],
    regions,
  })
  json('stats.json', { summary, regions: statsRegions })
  json('status.json', { pipeline: 'mock_phantom', version: '0', created: new Date().toISOString(), warnings: ['Synthetic phantom model (dev mock).'] })
  const tris = meshes.reduce((a, [, g]) => a + g.idx.length / 3, 0)
  return { nodes: meshes.length, tris }
}
