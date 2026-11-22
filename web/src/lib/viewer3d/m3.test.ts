// M3 generalisation: framing, layer plans, body vocabulary, naming, palette, explode scale, model options, 2D entry series.
import { describe, expect, it } from 'vitest'
import { normaliseOptions } from '../api/endpoints'
import type { SeriesInfo } from '../api/endpoints'
import { primarySeriesId } from '../study'
import { explodeOffset } from './explode'
import { DEFAULT_SHOW, framedKey, framingOf, planLayers } from './framing'
import { localizeKnowledge, structureName, vesselKind, type Namer } from './kb'
import { parseNodeName } from './names'
import { hexToRgb, LOBE_COLORS, rgbToHsl, structureColor } from './palette'
import { initialState, reduce, type ModelFacts } from './state'
import type { LayerId, RegionsJson } from './types'
import { inVocab, layerOf, lobeOf, LOBE_ORDER, vocabRank } from './vocab'

const R = (key: string, group?: string): RegionsJson['regions'][number] => {
  const [hemi, structure] = key.split('|') as ['L' | 'R' | 'M', string]
  return { key, structure, hemi, group }
}

describe('framing', () => {
  it('prefers regions.json framing, then the pipeline, then the structures', () => {
    expect(framingOf({ framing: 'spine', regions: [] })).toBe('spine')
    expect(framingOf({ pipeline: 'ct_body', regions: [R('L|sfg')] })).toBe('body')
    expect(framingOf({ regions: [] }, 'spine_mr')).toBe('spine')
    expect(framingOf({ regions: [R('L|sfg'), R('M|pons')] })).toBe('head')
    expect(framingOf({ regions: [R('M|vertebrae_l1'), R('M|spinal_cord')] })).toBe('spine')
    expect(framingOf({ regions: [R('M|liver', 'organ'), R('L|kidney', 'organ')] })).toBe('body')
    expect(framingOf(null)).toBe('head')
    expect(framingOf({ framing: 'weird', regions: [] })).toBe('head')
  })
  it('keeps the M2 brain defaults for head framing', () => {
    expect(DEFAULT_SHOW.head).toMatchObject({ hemi_L: true, deep: true, vessels: false, neck: false, bone: false, skin: false })
  })
  it('plans layers from regions.json (mapped ids, listed defaults) plus any mesh layer it forgot', () => {
    const regions: RegionsJson = { regions: [], layers: [{ id: 'organ', default: true }, { id: 'vessel', default: false }, { id: 'body', default: true }, { id: 'muscle' }, { id: 'ghost', default: true }] }
    const p = planLayers(['skin', 'organ', 'vessels', 'muscle', 'bone'] as LayerId[], regions, 'body')
    expect(p.layers).toEqual(['organ', 'muscle', 'vessels', 'bone', 'skin'])
    expect(p.defaults).toEqual({ organ: true, muscle: false, vessels: false, bone: true, skin: true })
  })
  it('falls back to framing defaults without a layer list', () => {
    expect(planLayers(['bone', 'spine'] as LayerId[], { regions: [] }, 'spine').defaults).toEqual({ spine: true, bone: true })
    expect(planLayers(['hemi_L', 'vessels'] as LayerId[], null, 'head').defaults).toEqual({ hemi_L: true, vessels: false })
  })
  it('picks framed i18n keys (spine → body → plain)', () => {
    const keys = new Set(['a.body', 'b.spine', 'b.body'])
    const has = (k: string) => keys.has(k)
    expect(framedKey('a', 'head', has)).toBe('a')
    expect(framedKey('a', 'body', has)).toBe('a.body')
    expect(framedKey('a', 'spine', has)).toBe('a.body')
    expect(framedKey('b', 'spine', has)).toBe('b.spine')
    expect(framedKey('c', 'spine', has)).toBe('c')
  })
})

describe('body vocabulary + layers', () => {
  it('maps M3 groups to layers', () => {
    expect(layerOf('liver', 'M')).toBe('organ')
    expect(layerOf('lung', 'L', 'organ')).toBe('organ')
    expect(layerOf('airway', 'M')).toBe('airway')
    expect(layerOf('aorta', 'M')).toBe('vessels')
    expect(layerOf('vertebrae_l1', 'M')).toBe('bone')
    expect(layerOf('spinal_cord', 'M')).toBe('spine')
    expect(layerOf('iliopsoas', 'L')).toBe('muscle')
    expect(layerOf('skin', 'M', 'body')).toBe('skin')
    expect(layerOf('mystery', 'L')).toBe('hemi_L') // brain fallback unchanged
    expect(layerOf('mystery', 'L', null, 'organ')).toBe('organ')
  })
  it('knows systems and anatomical order', () => {
    expect(lobeOf('kidney')).toBe('urinary')
    expect(lobeOf('rib_3')).toBe('skeleton')
    expect(lobeOf('spinal_cord')).toBe('nervous_spine')
    expect(vocabRank('vertebrae_c1')).toBeLessThan(vocabRank('vertebrae_t1'))
    expect(vocabRank('vertebrae_l5')).toBeLessThan(vocabRank('vertebrae_s1'))
    for (const l of ['respiratory', 'skeleton', 'muscular']) expect(LOBE_ORDER).toContain(l)
    expect(inVocab('sfg') && inVocab('vertebrae_t12') && !inVocab('nope')).toBe(true)
  })
  it('keeps numbered structure ids when they are known', () => {
    const known = (s: string) => inVocab(s)
    expect(parseNodeName('L__rib_3', known)).toMatchObject({ key: 'L|rib_3', structure: 'rib_3' })
    expect(parseNodeName('L__rib_3_1', known)).toMatchObject({ key: 'L|rib_3' })
    expect(parseNodeName('M__vertebrae_l1', known)).toMatchObject({ key: 'M|vertebrae_l1' })
    expect(parseNodeName('M__pons_2', known)).toMatchObject({ key: 'M|pons' })
    expect(parseNodeName('L__rib_3')).toMatchObject({ key: 'L|rib' }) // legacy behaviour without a vocabulary
    expect(parseNodeName('V__body', known)).toMatchObject({ kind: 'vessel', key: 'V|body' })
    expect(parseNodeName('B__skeleton', known)).toMatchObject({ kind: 'bone' })
  })
  it('names numbered series and vessels', () => {
    const n: Namer = { kb: localizeKnowledge(null, 'en'), tr: (k, v) => (k === 'struct.vertebra' ? `${v?.level} vertebra` : null) }
    expect(structureName(n, 'vertebrae_l1')).toBe('L1 vertebra')
    expect(structureName(n, 'rib_12')).toBe('Rib 12')
    expect(structureName(n, 'small_bowel')).toBe('Small bowel')
    expect(vesselKind('V|cow')).toBe('brain')
    expect(vesselKind('V|neck')).toBe('neck')
    expect(vesselKind('V|body')).toBe('body')
    expect(vesselKind('V|cow', 'body')).toBe('body')
  })
})

describe('palette (body)', () => {
  it('keeps bone ivory-light and brain colours unchanged', () => {
    for (let i = 0; i < 5; i++) expect(rgbToHsl(structureColor('skeleton', i, 5))[2]).toBeGreaterThanOrEqual(0.69)
    const brain = structureColor('frontal', 0, 5)
    const base = rgbToHsl(hexToRgb(LOBE_COLORS.frontal))
    expect(rgbToHsl(brain)[2]).toBeLessThanOrEqual(0.63)
    expect(Math.abs(rgbToHsl(brain)[0] - base[0])).toBeLessThan(0.06)
    expect(LOBE_COLORS.cardiovascular).toBeTruthy()
  })
})

describe('explode at body scale', () => {
  it('scales the fixed offsets but not the radial part', () => {
    const o1 = explodeOffset({ x: 10, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, 'L', 'organ', 1, { x: 0, y: 0, z: 0 })
    const o3 = explodeOffset({ x: 10, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, 'L', 'organ', 1, { x: 0, y: 0, z: 0 }, 3)
    expect(o3.x - 5.5).toBeCloseTo((o1.x - 5.5) * 3)
  })
})

describe('state with model defaults', () => {
  const facts: ModelFacts = {
    regions: new Map([
      ['M|liver', { layer: 'organ', inner: true, lobe: 'digestive' }],
      ['L|iliopsoas', { layer: 'muscle', inner: false, lobe: 'muscular' }],
    ]),
    vessels: new Map([['V|body', 'vessels' as LayerId]]),
  }
  const s0 = initialState(['organ', 'muscle', 'vessels', 'bone', 'skin'], { organ: true, muscle: false, vessels: true, bone: true, skin: true })
  it('starts from and resets to the model defaults', () => {
    expect(s0.show).toEqual({ organ: true, muscle: false, vessels: true, bone: true, skin: true })
    const s = reduce(reduce(s0, { type: 'layer', layer: 'muscle', on: true }, facts), { type: 'layer', layer: 'skin', on: false }, facts)
    expect(reduce(s, { type: 'reset' }, facts).show).toEqual(s0.show)
  })
  it('x-ray reveals organs; the brain-only inside view is a no-op', () => {
    const x = reduce({ ...s0, show: { ...s0.show, organ: false } }, { type: 'xray' }, facts)
    expect(x.show.organ).toBe(true)
    expect(reduce(s0, { type: 'view', view: 'inside' }, facts)).toBe(s0)
  })
})

describe('model options (§6)', () => {
  it('normalises the documented shape, sorts by score and drops zero scores', () => {
    const o = normaliseOptions({
      pipelines: [
        { name: 'vessels', score: 0.3 },
        { name: 'ct_body', score: 0.9, backends: [{ id: 'classical', available: true }, { id: 'totalseg', available: false, reason: 'not installed' }] },
        { name: 'brain_mr', score: 0 },
      ],
    })
    expect(o.pipelines.map((p) => p.pipeline)).toEqual(['ct_body', 'vessels'])
    expect(o.recommended).toBe('ct_body')
    expect(o.pipelines[0].backends).toEqual([
      { id: 'classical', available: true, reason: null, licence: null, default: false },
      { id: 'totalseg', available: false, reason: 'not installed', licence: null, default: false },
    ])
  })
  it('reads the engine shape {auto, options} (backends = ids usable now)', () => {
    const o = normaliseOptions({ auto: 'ct_body', options: [{ pipeline: 'ct_body', score: 0.9, backends: ['classical', 'totalseg'] }, { pipeline: 'vessels', score: 0.2, backends: ['classical'] }] })
    expect(o.recommended).toBe('ct_body')
    expect(o.pipelines[0].backends.map((b) => [b.id, b.available])).toEqual([['classical', true], ['totalseg', true]])
    expect(normaliseOptions({ auto: null, options: [] })).toEqual({ pipelines: [], recommended: null })
  })
  it('accepts variants: bare arrays, string pipelines, id → info maps and shared backends', () => {
    expect(normaliseOptions(['spine_mr']).pipelines[0]).toMatchObject({ pipeline: 'spine_mr', score: 1, backends: [] })
    const o = normaliseOptions({ pipelines: { ct_body: 0.8 }, backends: { classical: { available: true }, totalseg: { installed: false, note: 'pip extra' } }, default: 'ct_body' })
    expect(o.recommended).toBe('ct_body')
    expect(o.pipelines[0].backends.map((b) => [b.id, b.available, b.reason])).toEqual([['classical', true, null], ['totalseg', false, 'pip extra']])
    expect(normaliseOptions(null)).toEqual({ pipelines: [], recommended: null })
    expect(normaliseOptions({ pipelines: [{ pipeline: 'x', score: 0.5 }], recommended: 'nope' }).recommended).toBe('x')
  })
})

describe('primary 2D series', () => {
  const S = (id: string, body_part: string, plane: SeriesInfo['plane'], role: SeriesInfo['role'] = 'primary'): SeriesInfo =>
    ({ id, modality: 'MR', description: '', body_part, plane, sequence: 'T2', role, n_images: 1, rows: 1, cols: 1 })
  it('uses primary_series, then the sagittal of a spine study, then the first series', () => {
    const spine = [S('a', 'spine', 'axial'), S('l', 'spine', 'sagittal', 'localizer'), S('s', 'spine', 'sagittal')]
    expect(primarySeriesId(spine)).toBe('s')
    expect(primarySeriesId(spine, 'a')).toBe('a')
    expect(primarySeriesId(spine, 'missing')).toBe('s')
    expect(primarySeriesId([S('x', 'head', 'axial'), S('y', 'head', 'sagittal')])).toBe('x')
    expect(primarySeriesId([])).toBeNull()
  })
})
