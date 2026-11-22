// SYNTHETIC torso phantom for UI development (dev-only; no real patient data, no real anatomy).
// Procedural shapes in viewer space (mm; X = Left, Y = Superior, Z = Anterior) → a CT-like 2D study (axial + coronal)
// and a contract-§6 model: `ct_body` pipeline, `framing: "body"`, `layers`, `primary_series`, TotalSegmentator-style
// region ids (M|liver, L|kidney…) plus the reserved layers H__skin, B__skeleton, V__body.
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { areaCentroid, concat, ellipsoid, tube, writeGlb } from './mock-model.mjs'
import { distPolyline, inEll, lathe, measure, nearest, range, rng, writeJSON, writeSeries } from './mock-lib.mjs'

const STUDY = 'body-phantom'
const rnd = rng(424242)

// ---------------- shapes ----------------
/** Piecewise-linear profile over y. */
const prof = (pts) => (y) => {
  if (y <= pts[0][0]) return pts[0][1]
  for (let i = 0; i < pts.length - 1; i++) if (y <= pts[i + 1][0]) { const [a, va] = pts[i], [b, vb] = pts[i + 1]; return va + ((vb - va) * (y - a)) / (b - a) }
  return pts[pts.length - 1][1]
}
const Y0 = -270, Y1 = 230
const RX = prof([[-270, 168], [-200, 176], [-60, 148], [80, 162], [190, 186], [230, 170]])
const RZ = prof([[-270, 100], [-200, 106], [-60, 112], [80, 112], [190, 92], [230, 80]])
const SKIN_N = 2.4
const inSkin = (p, shrink = 0) => p[1] > Y0 && p[1] < Y1 &&
  (Math.abs(p[0]) / (RX(p[1]) - shrink)) ** SKIN_N + (Math.abs(p[2]) / (RZ(p[1]) - shrink)) ** SKIN_N < 1

const ORG = {
  'L|lung': { c: [72, 85, -5], r: [52, 105, 70], hu: -850 },
  'R|lung': { c: [-72, 88, -5], r: [56, 102, 72], hu: -850 },
  'M|heart': { c: [22, 50, 35], r: [55, 58, 48], hu: 45 },
  'M|liver': { c: [-55, -25, 15], r: [95, 62, 78], hu: 62 },
  'M|spleen': { c: [95, -5, -35], r: [28, 52, 30], hu: 48 },
  'M|stomach': { c: [55, -15, 45], r: [48, 38, 34], hu: 12 },
  'L|kidney': { c: [72, -95, -55], r: [26, 52, 22], hu: 32 },
  'R|kidney': { c: [-72, -100, -55], r: [26, 52, 22], hu: 32 },
}
const AIRWAY = [[[0, 240, 25], [0, 130, 20]], [[0, 130, 20], [40, 95, 10]], [[0, 130, 20], [-40, 98, 10]]]
const AORTA = [[18, 40, 30], [12, 120, 20], [10, 140, 0], [20, 120, -35], [20, 0, -48], [14, -160, -42], [5, -200, -30]]
const ILIAC = [[[5, -200, -30], [55, -262, -10]], [[5, -200, -30], [-45, -262, -10]]]
const IVC = [[-25, 40, -12], [-26, -80, -40], [-22, -200, -36]]
const PSOAS = (s) => [[s * 35, -80, -60], [s * 55, -180, -45], [s * 80, -262, 5]]
const VERT_Y = range(16, -190, 215)
const RIBS = []
for (let k = 0; k < 10; k++) for (const s of [1, -1]) {
  const yk = 190 - k * 22, rx = 118 + 22 * Math.sin((k / 9) * Math.PI), rz = 96
  const pts = []
  for (let i = 0; i <= 14; i++) {
    const th = Math.PI * (0.93 - (0.72 * i) / 14)
    pts.push([s * rx * Math.sin(th), yk - 28 * (i / 14), -12 + rz * Math.cos(th)])
  }
  RIBS.push(pts)
}
const CLAV = (s) => [[s * 15, 208, 92], [s * 90, 214, 58], [s * 150, 220, 8]]
const STERNUM = { c: [0, 118, 106], r: [14, 62, 7] }
const PELVIS = [{ c: [95, -215, -30], r: [60, 45, 25] }, { c: [-95, -215, -30], r: [60, 45, 25] }, { c: [0, -228, -75], r: [35, 40, 15] }]

function skeleton() {
  const parts = []
  for (const y of VERT_Y) {
    parts.push(ellipsoid([0, y, -70], [17, 10, 15], 20, 12))
    parts.push(tube([[0, y, -86], [0, y - 8, -110]], 4, 8))
  }
  for (const r of RIBS) parts.push(tube(r, 4.5, 8))
  for (const s of [1, -1]) parts.push(tube(CLAV(s), 6, 8))
  parts.push(ellipsoid(STERNUM.c, STERNUM.r, 24, 14))
  for (const p of PELVIS) parts.push(ellipsoid(p.c, p.r, 32, 20))
  return concat(parts)
}

/** CT number (HU) at a viewer-space point. */
function hu(p) {
  if (!inSkin(p)) return -1000
  for (const y of VERT_Y) if (inEll(p, [0, y, -70], [17, 10, 15])) return 650
  if (p[1] > -60 && p[1] < 200) for (const r of RIBS) if (distPolyline(p, r) < 4.5) return 700
  if (inEll(p, STERNUM.c, STERNUM.r)) return 600
  for (const s of [1, -1]) if (distPolyline(p, CLAV(s)) < 6) return 700
  for (const b of PELVIS) if (inEll(p, b.c, b.r)) return 600
  for (const [a, b] of AIRWAY) if (distPolyline(p, [a, b]) < 8) return -950
  if (distPolyline(p, AORTA) < 12) return 170
  for (const seg of ILIAC) if (distPolyline(p, seg) < 7) return 160
  if (distPolyline(p, IVC) < 12) return 50
  for (const s of [1, -1]) if (distPolyline(p, PSOAS(s)) < 20) return 52
  for (const [k, o] of Object.entries(ORG)) if (inEll(p, o.c, o.r)) return k.endsWith('lung') ? o.hu + (rnd() - 0.5) * 60 : k === 'M|stomach' && p[1] > -5 ? -900 : o.hu
  if (!inSkin(p, 14)) return -100 // subcutaneous fat
  return p[1] > 0 ? 40 : rnd() < 0.3 ? -90 : 30 // chest wall muscle / abdomen (fat + bowel)
}
const WIN = { lo: -350, hi: 450 }
const grey = (h) => ((h - WIN.lo) / (WIN.hi - WIN.lo)) * 255 + (rnd() - 0.5) * 8

// LPS (x = left, y = posterior, z = superior) → viewer
const v = ([x, y, z]) => [x, z, -y]

export function buildBodyStudy(OUT) {
  const files = join(OUT, 'studies', STUDY, 'files')
  const PS = 2.625, W = 160
  const AXIAL = range(44, 225, -265), CORON = range(20, -110, 110)
  const series = [
    writeSeries(files, { id: 's001', title: 'Axial CT', desc: 'CT CHEST ABDOMEN 5mm', modality: 'CT', seq: 'CT', plane: 'axial', region: 'chest', num: 2,
      o: [1, 0, 0, 0, 1, 0], pos: (t) => [-210, -210, t], along: AXIAL, w: W, h: W, ps: PS, thickness: 5 }, (p) => grey(hu(v(p)))),
    writeSeries(files, { id: 's002', title: 'Coronal CT', desc: 'CT COR REFORMAT 5mm', modality: 'CT', seq: 'CT', plane: 'coronal', region: 'chest', num: 3,
      o: [1, 0, 0, 0, 0, -1], pos: (t) => [-210, t, 235], along: CORON, w: W, h: 192, ps: PS, thickness: 5 }, (p) => grey(hu(v(p)))),
  ]

  // ---------------- model ----------------
  const parts = {}
  for (const [k, o] of Object.entries(ORG)) parts[k] = ellipsoid(o.c, o.r, 48, 32)
  parts['M|airway'] = concat(AIRWAY.map(([a, b], i) => tube([a, b], i ? 6 : 9, 12)))
  parts['M|aorta'] = concat([tube(AORTA, 12, 16), ...ILIAC.map((s) => tube(s, 7, 10))])
  for (const [h, s] of [['L', 1], ['R', -1]]) parts[`${h}|iliopsoas`] = tube(PSOAS(s), 20, 16)
  const ys = range(64, Y0 + 2, Y1 - 2)
  const skin = lathe(ys, (k) => RX(ys[k]), (k) => RZ(ys[k]), { segs: 72, n: SKIN_N })

  const GROUP = { lung: 'organ', heart: 'organ', liver: 'organ', spleen: 'organ', stomach: 'organ', kidney: 'organ', airway: 'airway', aorta: 'vessel', iliopsoas: 'muscle' }
  const meshes = [], regions = [], statsRegions = {}
  for (const [key, g] of Object.entries(parts)) {
    const [hemi, structure] = key.split('|')
    meshes.push([`${hemi}__${structure}`, g])
    const { centroid } = areaCentroid(g)
    regions.push({ key, structure, hemi, group: GROUP[structure], inner: GROUP[structure] !== 'muscle', centroid })
    if (structure === 'spleen') continue // no stats on purpose: exercises the card's "no measurements" fallback
    const o = ORG[key]
    const vol = o ? ((4 / 3) * Math.PI * o.r[0] * o.r[1] * o.r[2]) / 1000 * (0.9 + rnd() * 0.2) : 40 + rnd() * 120
    const ms = [measure('volume', 'Volume (synthetic)', vol, 'cm³', null, 'Synthetic phantom: voxel count × voxel volume of a procedurally drawn shape.')]
    if (o) ms.push(measure('hu_mean', 'Mean CT number (synthetic)', o.hu + (rnd() - 0.5) * 10, 'HU', null, 'Synthetic phantom: mean of the CT numbers inside the structure.',
      [{ text: 'CT numbers depend on the scanner, contrast timing and reconstruction.', severity: 'info' }]))
    const ax = nearest(AXIAL, centroid[1]), co = nearest(CORON, -centroid[2])
    statsRegions[key] = {
      measurements: ms,
      thumbs: [
        { view: 'axial', img: `series/s001/${String(ax).padStart(3, '0')}.png`, series: 's001', slice: ax },
        { view: 'coronal', img: `series/s002/${String(co).padStart(3, '0')}.png`, series: 's002', slice: co },
      ],
    }
  }
  meshes.push(['H__skin', skin], ['B__skeleton', skeleton()], ['V__body', tube(IVC, 12, 14)])
  mkdirSync(join(files, 'model'), { recursive: true })
  writeGlb(join(files, 'model', 'scene.glb'), meshes)

  const SYNW = [{ text: 'Synthetic phantom: every number on this page is made up for interface development.', severity: 'warn' }]
  writeJSON(join(files, 'model', 'regions.json'), {
    backend: 'synthetic-phantom (TotalSegmentator-style ids)', licence: 'Synthetic test data (CC0) — no real anatomy',
    caveats: ['This torso is a procedurally generated phantom for developing the interface. It is not anyone’s body.'],
    pipeline: 'ct_body', framing: 'body', primary_series: 's001',
    layers: [{ id: 'organ', default: true }, { id: 'airway', default: true }, { id: 'vessel', default: true }, { id: 'muscle', default: false },
      { id: 'bone', default: true }, { id: 'body', default: true }],
    regions,
  })
  writeJSON(join(files, 'model', 'stats.json'), {
    summary: [
      measure('lung_volume', 'Both lungs (synthetic)', 4800 + rnd() * 600, 'cm³', null, null, SYNW),
      measure('liver_volume', 'Liver (synthetic)', 1500 + rnd() * 200, 'cm³', null),
      measure('bone_hu', 'Mean bone CT number (synthetic)', 640 + rnd() * 40, 'HU', null),
    ],
    regions: statsRegions,
  })
  writeJSON(join(files, 'model', 'status.json'), { pipeline: 'ct_body', version: '0', created: new Date().toISOString(), warnings: ['Synthetic torso phantom (dev mock).'] })
  writeJSON(join(OUT, 'studies', STUDY, 'options.json'), {
    pipelines: [
      { name: 'ct_body', score: 0.9, backends: [
        { id: 'classical', available: true, default: true },
        { id: 'totalseg', available: false, reason: 'TotalSegmentator is not installed on this computer (optional “ai” extra).', licence: 'Apache-2.0 code; open tasks only' },
      ] },
      { name: 'vessels', score: 0.3, backends: [{ id: 'classical', available: true }] },
    ],
    recommended: 'ct_body',
  })
  const study = {
    id: STUDY, adapter: 'dicomdir', display_name: 'Demo Torso', study_date: '20260210',
    description: 'CT Chest & Abdomen (synthetic phantom)', modalities: ['CT'], series,
    warnings: ['This is synthetic demo data generated for development.'],
  }
  writeJSON(join(OUT, 'studies', STUDY, 'study.json'), study)
  const tris = meshes.reduce((a, [, g]) => a + g.idx.length / 3, 0)
  process.stdout.write(`body: ${series.length} series, ${meshes.length} nodes, ${tris} triangles (synthetic)\n`)
  return study
}
