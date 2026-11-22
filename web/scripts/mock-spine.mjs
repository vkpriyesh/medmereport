// SYNTHETIC whole-spine phantom for UI development (dev-only; no real patient data, no real anatomy).
// 25 procedural vertebrae (C1–S1) on an S-curve, discs, cord and CSF → an MR-like 2D study (sagittal T2 + T1, axial
// T2) and a contract-§6 model: `spine_mr`, `framing: "spine"`, `primary_series` = the sagittal T2.
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { areaCentroid, concat, ellipsoid, tube, writeGlb } from './mock-model.mjs'
import { distPolyline, inEll, measure, nearest, range, rng, writeJSON, writeSeries } from './mock-lib.mjs'

const STUDY = 'spine-phantom'
const rnd = rng(77701)

// ---------------- column layout (viewer space: X = Left, Y = Superior, Z = Anterior) ----------------
const LEVELS = [...[1, 2, 3, 4, 5, 6, 7].map((i) => `c${i}`), ...Array.from({ length: 12 }, (_, i) => `t${i + 1}`), ...[1, 2, 3, 4, 5].map((i) => `l${i}`), 's1']
const lerp = (a, b, t) => a + (b - a) * t
/** Sagittal curve: cervical lordosis, thoracic kyphosis, lumbar lordosis (anterior = +Z), by fraction from the top. */
const CURVE = [[0, 0], [0.12, 14], [0.42, -20], [0.8, 14], [1, -24]]
const curveZ = (f) => {
  for (let i = 0; i < CURVE.length - 1; i++) if (f <= CURVE[i + 1][0]) {
    const [a, za] = CURVE[i], [b, zb] = CURVE[i + 1], t = (f - a) / (b - a)
    return lerp(za, zb, (1 - Math.cos(Math.PI * t)) / 2)
  }
  return CURVE[CURVE.length - 1][1]
}
const TOP = 310, BOTTOM = -330
const V = []
{
  let y = TOP
  LEVELS.forEach((id, i) => {
    const reg = id[0], n = +id.slice(1)
    const h = reg === 'c' ? (n === 1 ? 10 : 14) : reg === 't' ? lerp(17, 24, (n - 1) / 11) : reg === 'l' ? lerp(27, 30, (n - 1) / 4) : 34
    const disc = reg === 'c' ? 5 : reg === 't' ? lerp(5, 7, (n - 1) / 11) : reg === 'l' ? lerp(9, 11, (n - 1) / 4) : 0
    const w = reg === 'c' ? lerp(10, 14, (n - 1) / 6) : reg === 't' ? lerp(15, 22, (n - 1) / 11) : reg === 'l' ? lerp(23, 27, (n - 1) / 4) : 28
    const cy = y - h / 2
    V.push({ id, i, reg, h, disc, w, d: w * 0.85, cy, cz: 0 })
    y -= h + disc
  })
  const span = TOP - y
  for (const lv of V) lv.cz = curveZ((TOP - lv.cy) / span)
}
const canalZ = (lv) => lv.cz - lv.d - 10
const arch = (lv) => {
  const z0 = lv.cz - lv.d * 0.9, zc = canalZ(lv), y = lv.cy
  return [[lv.w * 0.55, y, z0], [11, y, zc + 1], [7, y, zc - 11], [-7, y, zc - 11], [-11, y, zc + 1], [-lv.w * 0.55, y, z0]]
}
const spinous = (lv) => { const zc = canalZ(lv), L = lv.reg === 'c' ? 20 : lv.reg === 't' ? 32 : 28; return [[0, lv.cy, zc - 11], [0, lv.cy - lv.h * 0.7, zc - 11 - L]] }
const transverse = (lv, s) => [[s * 10, lv.cy, canalZ(lv) + 3], [s * (lv.w + 18), lv.cy, canalZ(lv) + 6]]
const pr = (lv) => (lv.reg === 'c' ? 3 : lv.reg === 't' ? 4 : 5) // posterior-element radius

const canalLine = V.map((lv) => [0, lv.cy, canalZ(lv)])
const L1 = V.find((lv) => lv.id === 'l1'), S1 = V.find((lv) => lv.id === 's1')
const cordLine = [[0, TOP + 10, canalZ(V[0])], ...canalLine.filter((p) => p[1] >= L1.cy)]
const csfLine = [[0, TOP + 10, canalZ(V[0])], ...canalLine.filter((p) => p[1] >= S1.cy + 10)]

function vertebra(lv) {
  return concat([
    ellipsoid([0, lv.cy, lv.cz], [lv.w, lv.h / 2, lv.d], 28, 16),
    tube(arch(lv), pr(lv), 8), tube(spinous(lv), pr(lv), 8), tube(transverse(lv, 1), pr(lv) * 0.8, 8), tube(transverse(lv, -1), pr(lv) * 0.8, 8),
  ])
}
function discs() {
  const parts = []
  for (let k = 0; k < V.length - 1; k++) {
    const a = V[k], b = V[k + 1]
    if (!a.disc) continue
    const y = a.cy - a.h / 2 - a.disc / 2
    parts.push(ellipsoid([0, y, (a.cz + b.cz) / 2], [(a.w + b.w) / 2 * 0.95, a.disc / 2 + 0.6, (a.d + b.d) / 2 * 0.95], 28, 12))
  }
  return concat(parts)
}

// ---------------- MR-like tissue (for the 2D series) ----------------
const T = { BG: 0, FAT: 1, CORT: 2, CSF: 3, CORD: 4, MUSCLE: 5, MARROW: 6, DISC: 7, SOFT: 8 }
//              BG  FAT CORT CSF CORD MUSC MARR DISC SOFT
const CONTRAST = { T2: [0, 170, 20, 245, 120, 60, 115, 205, 95], T1: [0, 235, 25, 40, 120, 85, 175, 95, 110] }
const levelAt = (y) => V.reduce((b, lv) => (Math.abs(lv.cy - y) < Math.abs(b.cy - y) ? lv : b), V[0])
function tissue(p) {
  const lv = levelAt(p[1])
  const cz = lv.cz
  // body outline: an elliptic cylinder in front of the spine
  const bz = cz + 55, inBody = (p[0] / 150) ** 2 + ((p[2] - bz) / 125) ** 2 < 1 && p[1] < TOP + 40 && p[1] > BOTTOM
  if (!inBody) return T.BG
  for (const l of [lv, V[Math.max(0, lv.i - 1)], V[Math.min(V.length - 1, lv.i + 1)]]) {
    if (inEll(p, [0, l.cy, l.cz], [l.w, l.h / 2, l.d])) return inEll(p, [0, l.cy, l.cz], [l.w - 2, l.h / 2 - 1.5, l.d - 2]) ? T.MARROW : T.CORT
    if (l.disc) {
      const y = l.cy - l.h / 2 - l.disc / 2
      if (inEll(p, [0, y, l.cz], [l.w * 0.95, l.disc / 2 + 0.6, l.d * 0.95])) return T.DISC
    }
    const r = pr(l)
    if (distPolyline(p, arch(l)) < r || distPolyline(p, spinous(l)) < r || distPolyline(p, transverse(l, 1)) < r * 0.8 || distPolyline(p, transverse(l, -1)) < r * 0.8) return T.MARROW
  }
  if (p[1] >= L1.cy && distPolyline(p, cordLine) < 4.5) return T.CORD
  if (p[1] >= S1.cy + 10 && distPolyline(p, csfLine) < 8) return T.CSF
  const outer = (p[0] / 150) ** 2 + ((p[2] - bz) / 125) ** 2
  if (outer > 0.86) return T.FAT
  if (p[2] < cz - lv.d - 4 && Math.abs(p[0]) < 70) return T.MUSCLE // paraspinal muscles
  return T.SOFT
}
const v = ([x, y, z]) => [x, z, -y] // LPS → viewer
const val = (seq) => (p) => { const tt = tissue(v(p)); return tt === T.BG ? rnd() * 6 : CONTRAST[seq][tt] + (rnd() - 0.5) * 12 }

export function buildSpineStudy(OUT) {
  const files = join(OUT, 'studies', STUDY, 'files')
  const SAG = range(15, -21, 21), AXZ = V.filter((lv) => lv.reg === 'l').flatMap((lv) => [lv.cy, lv.cy - lv.h / 2 - lv.disc / 2])
  const ps = 1.5
  // LPS y = -viewer Z: the image spans viewer Z from +150 (front, left edge) to −120 (back)
  const series = [
    writeSeries(files, { id: 's001', title: 'Sagittal T2 whole spine', desc: 'SAG T2 TSE 3mm', modality: 'MR', seq: 'T2', plane: 'sagittal', region: 'spine', num: 2, TE: 110, TR: 3500,
      o: [0, 1, 0, 0, 0, -1], pos: (t) => [t, -150, TOP + 20], along: SAG, w: 180, h: 450, ps, thickness: 3 }, val('T2')),
    writeSeries(files, { id: 's002', title: 'Sagittal T1 whole spine', desc: 'SAG T1 TSE 3mm', modality: 'MR', seq: 'T1', plane: 'sagittal', region: 'spine', num: 3, TE: 10, TR: 550,
      o: [0, 1, 0, 0, 0, -1], pos: (t) => [t, -150, TOP + 20], along: range(11, -15, 15), w: 180, h: 450, ps, thickness: 3 }, val('T1')),
    writeSeries(files, { id: 's003', title: 'Axial T2 lumbar', desc: 'AX T2 L-SPINE 4mm', modality: 'MR', seq: 'T2', plane: 'axial', region: 'spine', num: 4, TE: 100, TR: 4000,
      o: [1, 0, 0, 0, 1, 0], pos: (t) => [-120, -120, t], along: AXZ, w: 160, h: 160, ps, thickness: 4 }, val('T2')),
  ]

  const parts = {}
  for (const lv of V) parts[`M|vertebrae_${lv.id}`] = vertebra(lv)
  parts['M|intervertebral_disc'] = discs()
  parts['M|spinal_cord'] = tube(cordLine, 4.5, 12)
  parts['M|spinal_csf'] = tube(csfLine, 8, 16)
  const GROUP = (s) => (s.startsWith('vertebrae_') ? 'bone' : 'spine')
  const meshes = [], regions = [], statsRegions = {}
  for (const [key, g] of Object.entries(parts)) {
    const [hemi, structure] = key.split('|')
    meshes.push([`${hemi}__${structure}`, g])
    const { centroid } = areaCentroid(g)
    regions.push({ key, structure, hemi, group: GROUP(structure), inner: structure === 'spinal_cord', centroid })
    const ms = []
    const lv = V.find((l) => `vertebrae_${l.id}` === structure)
    if (lv) {
      ms.push(measure('volume', 'Vertebral body volume (synthetic)', ((4 / 3) * Math.PI * lv.w * lv.h / 2 * lv.d) / 1000 * (0.92 + rnd() * 0.16), 'cm³', null))
      ms.push(measure('body_height', 'Vertebral body height (synthetic)', lv.h * (0.95 + rnd() * 0.1), 'mm', null, 'Synthetic phantom: front-edge height of a procedurally drawn vertebral body.'))
    } else if (structure === 'spinal_cord') {
      ms.push(measure('ap_diameter', 'Cord front-to-back diameter (synthetic)', 7 + rnd() * 1.5, 'mm', '6–9 mm (synthetic)', null,
        [{ text: 'Cord size varies along its length and between people.', severity: 'info' }]))
    } else if (structure === 'intervertebral_disc') {
      ms.push(measure('height_mean', 'Mean disc height (synthetic)', 7 + rnd(), 'mm', null))
    }
    // CSF: no stats on purpose (fallback path)
    if (!ms.length) continue
    const sg = nearest(SAG, centroid[0]), thumbs = [{ view: 'sagittal', img: `series/s001/${String(sg).padStart(3, '0')}.png`, series: 's001', slice: sg }]
    if (lv?.reg === 'l') { const a = nearest(AXZ, centroid[1]); thumbs.push({ view: 'axial', img: `series/s003/${String(a).padStart(3, '0')}.png`, series: 's003', slice: a }) }
    statsRegions[key] = { measurements: ms, thumbs }
  }
  mkdirSync(join(files, 'model'), { recursive: true })
  writeGlb(join(files, 'model', 'scene.glb'), meshes)
  writeJSON(join(files, 'model', 'regions.json'), {
    backend: 'synthetic-phantom', licence: 'Synthetic test data (CC0) — no real anatomy',
    caveats: ['This spine is a procedurally generated phantom for developing the interface. It is not anyone’s spine.'],
    pipeline: 'spine_mr', framing: 'spine', primary_series: 's001',
    layers: [{ id: 'bone', default: true }, { id: 'spine', default: true }],
    regions,
  })
  writeJSON(join(files, 'model', 'stats.json'), {
    summary: [
      measure('vertebrae_count', 'Vertebrae found (synthetic)', V.length, '', null, null, [{ text: 'Synthetic phantom: every number on this page is made up for interface development.', severity: 'warn' }]),
      measure('lumbar_lordosis', 'Lumbar curve angle (synthetic)', 40 + rnd() * 10, '°', null),
    ],
    regions: statsRegions,
  })
  writeJSON(join(files, 'model', 'status.json'), { pipeline: 'spine_mr', version: '0', created: new Date().toISOString(), warnings: ['Synthetic spine phantom (dev mock).'] })
  writeJSON(join(OUT, 'studies', STUDY, 'options.json'), { auto: 'spine_mr', options: [{ pipeline: 'spine_mr', score: 0.92, backends: ['classical'] }] }) // the engine's shape
  const study = {
    id: STUDY, adapter: 'dicomdir', display_name: 'Demo Spine', study_date: '20260305',
    description: 'MRI Whole Spine (synthetic phantom)', modalities: ['MR'],
    // listed axial-first so the "open the sagittal first" rule is visible
    series: [series[2], series[0], series[1]],
    warnings: ['This is synthetic demo data generated for development.'],
  }
  writeJSON(join(OUT, 'studies', STUDY, 'study.json'), study)
  const tris = meshes.reduce((a, [, g]) => a + g.idx.length / 3, 0)
  process.stdout.write(`spine: ${series.length} series, ${meshes.length} nodes, ${tris} triangles (synthetic)\n`)
  return study
}
