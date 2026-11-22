// SYNTHETIC head angiogram (TOF-like) phantom for UI development (dev-only; no real patient data, no real anatomy).
// A procedural circle of arteries with branches above the skull base, carotid + vertebral arteries below it, and a
// smooth head surface → a vessels-only model exactly like the `vessels` pipeline writes for TOF (contract §6):
// `pipeline: "vessels"`, `framing: "head"`, no brain regions, nodes `V__cow`, `V__neck`, `H__skin`.
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { areaCentroid, concat, ellipsoid, tube, writeGlb } from './mock-model.mjs'
import { distPolyline, inEll, measure, range, rng, writeJSON, writeSeries } from './mock-lib.mjs'

const STUDY = 'vessels-phantom'
const rnd = rng(31337)

// ---------------- vessel centrelines (viewer space: X = Left, Y = Superior, Z = Anterior; mm) ----------------
const ring = (r, y, n = 24) => Array.from({ length: n + 1 }, (_, i) => {
  const a = (i / n) * Math.PI * 2
  return [Math.cos(a) * r, y + Math.sin(a * 2) * 2, Math.sin(a) * r * 0.8 + 4]
})
const COW = [
  ring(14, 0),
  // middle cerebral arteries: out to each side, then up
  [[13, 0, 6], [32, 4, 8], [50, 14, 4], [58, 32, -6]],
  [[-13, 0, 6], [-32, 4, 8], [-50, 14, 4], [-58, 32, -6]],
  // anterior cerebral arteries: forward and over the top
  [[4, 0, 16], [5, 18, 44], [4, 48, 38], [3, 66, 4]],
  [[-4, 0, 16], [-5, 18, 44], [-4, 48, 38], [-3, 66, 4]],
  // posterior cerebral arteries
  [[9, -2, -6], [24, 4, -34], [26, 16, -62]],
  [[-9, -2, -6], [-24, 4, -34], [-26, 16, -62]],
  // basilar artery down to the skull base
  [[0, -2, -8], [0, -18, -10], [0, -32, -14]],
]
const NECK = [
  // internal carotid arteries, with the siphon bend
  [[13, 0, 6], [16, -10, 14], [18, -24, 6], [20, -44, 10], [22, -80, 14], [24, -120, 18]],
  [[-13, 0, 6], [-16, -10, 14], [-18, -24, 6], [-20, -44, 10], [-22, -80, 14], [-24, -120, 18]],
  // vertebral arteries joining into the basilar artery
  [[0, -32, -14], [10, -44, -18], [16, -70, -22], [18, -120, -22]],
  [[0, -32, -14], [-10, -44, -18], [-16, -70, -22], [-18, -120, -22]],
]
const COW_R = 1.6, NECK_R = 2.4
const HEAD = { c: [0, 10, 0], r: [74, 98, 92] }

// ---------------- TOF-like 2D series (bright flowing blood, dim tissue) ----------------
const vessels = [...COW.map((l) => [l, COW_R]), ...NECK.map((l) => [l, NECK_R])]
const v = ([x, y, z]) => [x, z, -y] // LPS → viewer
function value(p) {
  const q = v(p)
  if (!inEll(q, HEAD.c, HEAD.r)) return rnd() * 8
  for (const [line, r] of vessels) if (distPolyline(q, line) < r + 0.6) return 225 + rnd() * 25
  const shell = !inEll(q, HEAD.c, HEAD.r.map((x) => x - 6))
  return (shell ? 120 : 70) + (rnd() - 0.5) * 20 // fat-bright scalp, grey background tissue
}

export function buildVesselsStudy(OUT) {
  const files = join(OUT, 'studies', STUDY, 'files')
  const AX = range(36, -100, 60) // LPS z (superior)
  const series = [
    writeSeries(files, { id: 's001', title: 'Axial TOF angiogram', desc: 'TOF 3D multi-slab', modality: 'MR', seq: 'TOF', plane: 'axial', region: 'vessels', num: 5, TE: 3.5, TR: 22,
      o: [1, 0, 0, 0, 1, 0], pos: (t) => [-96, -96, t], along: AX, w: 128, h: 128, ps: 1.5, thickness: 1 }, value),
  ]

  const parts = {
    'V|cow': concat(COW.map((l) => tube(l, COW_R, 10))),
    'V|neck': concat(NECK.map((l) => tube(l, NECK_R, 12))),
    'H|skin': ellipsoid(HEAD.c, HEAD.r, 48, 32),
  }
  const STRUCT = { 'V|cow': 'cerebral_arteries', 'V|neck': 'neck_arteries', 'H|skin': 'skin' }
  const meshes = [], regions = []
  for (const [key, g] of Object.entries(parts)) {
    const [p, name] = key.split('|')
    meshes.push([`${p}__${name}`, g])
    regions.push({ key, structure: STRUCT[key], hemi: 'M', group: key === 'H|skin' ? 'body' : 'vessel', inner: key !== 'H|skin', centroid: areaCentroid(g).centroid })
  }
  mkdirSync(join(files, 'model'), { recursive: true })
  writeGlb(join(files, 'model', 'scene.glb'), meshes)
  writeJSON(join(files, 'model', 'regions.json'), {
    backend: 'synthetic-phantom', licence: 'Synthetic test data (CC0) — no real anatomy',
    caveats: ['These arteries are a procedurally drawn phantom for developing the interface. They are not anyone’s arteries.'],
    pipeline: 'vessels', framing: 'head',
    // what the engine writes for TOF: both vessel parts visible, the head surface hidden
    layers: [{ id: 'vessel', default: true }, { id: 'neck', default: true }, { id: 'body', default: false }],
    regions,
  })
  const vol = (k) => measure('vessel_volume', 'Traced artery lumen volume (synthetic)', k === 'V|cow' ? 2.1 + rnd() : 4.2 + rnd(), 'cm³', null)
  writeJSON(join(files, 'model', 'stats.json'), {
    summary: { vessel_volume: measure('vessel_volume', 'Traced artery lumen volume (synthetic)', 6.8 + rnd(), 'cm³', null) },
    regions: { 'V|cow': { measurements: [vol('V|cow')], thumbs: [] }, 'V|neck': { measurements: [vol('V|neck')], thumbs: [] } },
  })
  writeJSON(join(files, 'model', 'status.json'), { pipeline: 'vessels', version: '0', created: new Date().toISOString(), warnings: ['Synthetic vessels phantom (dev mock).'] })
  // engine shape (`{auto, options}`, backends as {id, available, reason})
  writeJSON(join(OUT, 'studies', STUDY, 'options.json'), {
    auto: 'vessels',
    options: [
      { pipeline: 'vessels', score: 0.9, backends: [{ id: 'classical', available: true, default: true }] },
      { pipeline: 'brain_mr', score: 0.2, backends: [{ id: 'classical', available: true, default: true }] },
    ],
  })
  const study = {
    id: STUDY, adapter: 'dicomdir', display_name: 'Demo Angiogram', study_date: '20260402',
    description: 'MR Angiogram Head (synthetic phantom)', modalities: ['MR'], series,
    warnings: ['This is synthetic demo data generated for development.'],
  }
  writeJSON(join(OUT, 'studies', STUDY, 'study.json'), study)
  const tris = meshes.reduce((a, [, g]) => a + g.idx.length / 3, 0)
  process.stdout.write(`vessels: ${series.length} series, ${meshes.length} nodes, ${tris} triangles (synthetic)\n`)
  return study
}
