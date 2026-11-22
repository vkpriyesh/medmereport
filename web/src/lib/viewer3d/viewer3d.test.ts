import { describe, expect, it } from 'vitest'
import { buildDataMaps, dataColor, percentile } from './datamap'
import { explodeOffset } from './explode'
import { localizeKnowledge, lobeName, regionName, structureName } from './kb'
import { otherSide, parseNodeName } from './names'
import { buildStructureColors, hexToRgb, hslToRgb, ramp, rgbToHex, rgbToHsl, structureColor, LOBE_COLORS, NO_DATA } from './palette'
import { initialState, pickQuestion, quizPool, reduce, tourFor, type ModelFacts } from './state'
import type { Knowledge, LayerId, StatsJson } from './types'
import { layerOf, lobeOf } from './vocab'

describe('palette', () => {
  it('round-trips hex and hsl', () => {
    expect(rgbToHex(hexToRgb('#f472b6'))).toBe('#f472b6')
    const c = hexToRgb('#60a5fa')
    expect(hslToRgb(rgbToHsl(c)).map(Math.round)).toEqual(c)
    expect(rgbToHex([300, -5, 127.6])).toBe('#ff0080')
  })
  it('varies structures within a lobe deterministically but keeps the lobe hue', () => {
    const a = structureColor('frontal', 0, 5), b = structureColor('frontal', 4, 5)
    expect(a).not.toEqual(b)
    expect(structureColor('frontal', 0, 5)).toEqual(a)
    const hue = (c: [number, number, number]) => rgbToHsl(c)[0]
    const base = rgbToHsl(hexToRgb(LOBE_COLORS.frontal))[0]
    expect(Math.abs(hue(a) - base)).toBeLessThan(0.06)
  })
  it('builds a table for every id', () => {
    const t = buildStructureColors(['sfg', 'mfg', 'pons'], lobeOf)
    expect(Object.keys(t)).toEqual(['sfg', 'mfg', 'pons'])
    for (const c of Object.values(t)) for (const v of c) expect(v).toBeGreaterThanOrEqual(0)
  })
  it('ramps clamp and interpolate', () => {
    expect(ramp(-1, ['#000000', '#ffffff'])).toEqual([0, 0, 0])
    expect(ramp(2, ['#000000', '#ffffff'])).toEqual([255, 255, 255])
    expect(ramp(0.5, ['#000000', '#ffffff'])).toEqual([127.5, 127.5, 127.5])
    expect(ramp(NaN, ['#000000', '#ffffff'])).toEqual([0, 0, 0])
  })
})

describe('node names', () => {
  it('parses the contract prefixes', () => {
    expect(parseNodeName('L__hippocampus')).toEqual({ kind: 'region', hemi: 'L', structure: 'hippocampus', key: 'L|hippocampus' })
    expect(parseNodeName('M__pons_2')).toMatchObject({ key: 'M|pons' })
    expect(parseNodeName('V__cow')).toEqual({ kind: 'vessel', name: 'cow', key: 'V|cow' })
    expect(parseNodeName('H__skin')).toMatchObject({ kind: 'skin' })
    expect(parseNodeName('B__skull')).toMatchObject({ kind: 'bone' })
    expect(parseNodeName('Scene')).toBeNull()
    expect(parseNodeName('X__foo')).toBeNull()
    expect(parseNodeName(undefined)).toBeNull()
  })
  it('finds the other side', () => {
    expect(otherSide('L|stg')).toBe('R|stg')
    expect(otherSide('R|stg')).toBe('L|stg')
    expect(otherSide('M|pons')).toBeNull()
  })
  it('maps groups to layers', () => {
    expect(layerOf('sfg', 'L')).toBe('hemi_L')
    expect(layerOf('sfg', 'R', 'hemi_R')).toBe('hemi_R')
    expect(layerOf('thalamus', 'L')).toBe('deep')
    expect(layerOf('lateral_ventricle', 'L')).toBe('ventricle')
    expect(layerOf('pons', 'M', 'brainstem')).toBe('brainstem')
    expect(layerOf('x', 'M', 'vessel')).toBe('vessels')
    expect(layerOf('unknown_thing', 'R')).toBe('hemi_R')
  })
})

describe('explode', () => {
  const out = { x: 0, y: 0, z: 0 }
  it('is zero at rest', () => {
    explodeOffset({ x: 30, y: 10, z: 5 }, { x: 0, y: 0, z: 0 }, 'L', 'hemi_L', 0, out)
    expect(out).toEqual({ x: 0, y: 0, z: 0 })
  })
  it('moves radially and separates hemispheres (X = left)', () => {
    explodeOffset({ x: 30, y: 10, z: 0 }, { x: 0, y: 0, z: 0 }, 'L', 'hemi_L', 1, out)
    expect(out.x).toBeCloseTo(30 * 0.55 + 25)
    expect(out.y).toBeCloseTo(5.5)
    explodeOffset({ x: -30, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, 'R', 'hemi_R', 1, out)
    expect(out.x).toBeCloseTo(-30 * 0.55 - 25)
  })
  it('drops the hindbrain and clamps e', () => {
    explodeOffset({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, 'M', 'brainstem', 3, out)
    expect(out).toEqual({ x: 0, y: -18, z: 0 })
  })
})

describe('data maps', () => {
  const m = (key: string, value: number | null) => ({ key, label: key.toUpperCase(), value, unit: 'u', method: 'synthetic' })
  const stats: StatsJson = {
    regions: {
      'L|a': { measurements: [m('adc', 700), m('asym', 5), m('only', 1)] },
      'R|a': { measurements: [m('adc', 900), m('asym', -5)] },
      'M|b': { measurements: [m('adc', 800), m('asym', null)] },
    },
  }
  it('discovers numeric keys generically', () => {
    const maps = buildDataMaps(stats)
    expect(maps.map((x) => x.key)).toEqual(['adc', 'asym'])
    const adc = maps[0]
    expect(adc.diverging).toBe(false)
    expect(adc.lo).toBeCloseTo(710)
    expect(adc.hi).toBeCloseTo(890)
    const asym = maps[1]
    expect(asym.diverging).toBe(true)
    expect(asym.lo).toBe(-asym.hi)
  })
  it('ignores vessel/skin/bone layers, which cannot be painted (vessels-only models get no data maps)', () => {
    const vs: StatsJson = { regions: { 'V|cow': { measurements: [m('vessel_volume', 2)] }, 'V|neck': { measurements: [m('vessel_volume', 4)] } } }
    expect(buildDataMaps(vs)).toEqual([])
  })
  it('colours missing regions grey', () => {
    const asym = buildDataMaps(stats)[1]
    expect(dataColor(asym, 'M|b')).toEqual(hexToRgb(NO_DATA))
    expect(dataColor(asym, 'L|a')).not.toEqual(hexToRgb(NO_DATA))
  })
  it('percentile interpolates', () => {
    expect(percentile([0, 10], 0.5)).toBe(5)
    expect(percentile([], 0.5)).toBeNaN()
  })
})

describe('knowledge', () => {
  const en: Knowledge = {
    structures: { stg: { name: 'Superior temporal gyrus', lobe: 'temporal', functions: ['hearing'] } },
    lobes: { temporal: { name: 'Temporal lobe' } },
    i18n: { hi: { structures: { stg: { name: 'ऊपरी टेम्पोरल गाइरस', lobe: 'temporal', functions: [] } } } },
  }
  it('falls back to English per field', () => {
    const kb = localizeKnowledge(en, 'hi')
    expect(kb.structures.stg.name).toBe('ऊपरी टेम्पोरल गाइरस')
    expect(kb.structures.stg.functions).toEqual(['hearing'])
    expect(kb.lobes.temporal.name).toBe('Temporal lobe')
  })
  it('overlays a localized document', () => {
    const hi: Knowledge = { structures: { stg: { name: 'एसटीजी', lobe: 'temporal' } }, lobes: {} }
    expect(localizeKnowledge(en, 'hi', hi).structures.stg.name).toBe('एसटीजी')
    expect(localizeKnowledge(en, 'en', hi).structures.stg.name).toBe('Superior temporal gyrus')
    expect(localizeKnowledge(null, 'en').structures).toEqual({})
  })
  it('names regions with sides', () => {
    const n = { kb: localizeKnowledge(en, 'en'), tr: () => null }
    expect(regionName(n, 'L|stg')).toBe('Left Superior temporal gyrus')
    expect(regionName(n, 'M|pons')).toBe('Pons')
  })
  it('prefers the UI dictionary over an untranslated English KB name', () => {
    const hi = localizeKnowledge(en, 'hi')
    const n = { kb: hi, en, lang: 'hi', tr: (k: string) => (k === 'lobe.temporal' ? 'टेम्पोरल लोब' : null) }
    expect(lobeName(n, 'temporal')).toBe('टेम्पोरल लोब')
    expect(structureName(n, 'stg')).toBe('ऊपरी टेम्पोरल गाइरस')
  })
})

describe('state reducer', () => {
  const layers: LayerId[] = ['hemi_L', 'hemi_R', 'deep', 'ventricle', 'vessels', 'skin']
  const facts: ModelFacts = {
    regions: new Map([
      ['L|sfg', { layer: 'hemi_L', inner: false, lobe: 'frontal' }],
      ['R|sfg', { layer: 'hemi_R', inner: false, lobe: 'frontal' }],
      ['L|thalamus', { layer: 'deep', inner: true, lobe: 'subcortical' }],
    ]),
    vessels: new Map([['V|cow', 'vessels' as LayerId]]),
  }
  const s0 = initialState(layers)
  it('starts with only present layers', () => {
    expect(Object.keys(s0.show)).toEqual(layers)
    expect(s0.show.vessels).toBe(false)
  })
  it('selecting an inner structure turns on X-ray and its layer', () => {
    const s = reduce(reduce(s0, { type: 'layer', layer: 'deep', on: false }, facts), { type: 'select', sel: { type: 'region', id: 'L|thalamus' } }, facts)
    expect(s.xray).toBe(true)
    expect(s.show.deep).toBe(true)
  })
  it('selecting a vessel shows the vessel layer', () => {
    expect(reduce(s0, { type: 'select', sel: { type: 'vessel', id: 'V|cow' } }, facts).show.vessels).toBe(true)
  })
  it('pick-by-lobe converts structure selections', () => {
    let s = reduce(s0, { type: 'select', sel: { type: 'region', id: 'L|sfg' } }, facts)
    s = reduce(s, { type: 'pickBy', pickBy: 'lobe' }, facts)
    expect(s.sel).toEqual({ type: 'lobe', id: 'frontal' })
    expect(reduce(s, { type: 'select', sel: { type: 'region', id: 'R|sfg' } }, facts).sel).toEqual({ type: 'lobe', id: 'frontal' })
  })
  it('x-ray reveals deep layers; inside view hides the right hemisphere; layer toggles ignore absent layers', () => {
    const x = reduce({ ...s0, show: { ...s0.show, deep: false } }, { type: 'xray' }, facts)
    expect(x.xray && x.show.deep && x.show.vessels).toBe(true)
    expect(reduce(s0, { type: 'view', view: 'inside' }, facts).show.hemi_R).toBe(false)
    expect(reduce(s0, { type: 'view', view: 'left' }, facts)).toBe(s0)
    expect(reduce(s0, { type: 'layer', layer: 'neck' }, facts)).toBe(s0)
  })
  it('isolate needs a selection and clears on deselect', () => {
    expect(reduce(s0, { type: 'isolate' }, facts).isolate).toBe(false)
    let s = reduce(s0, { type: 'select', sel: { type: 'region', id: 'L|sfg' } }, facts)
    s = reduce(s, { type: 'isolate' }, facts)
    expect(s.isolate).toBe(true)
    expect(reduce(s, { type: 'select', sel: null }, facts).isolate).toBe(false)
  })
  it('clamps sliders and resets', () => {
    let s = reduce(s0, { type: 'explode', value: 4 }, facts)
    expect(s.explode).toBe(1)
    s = reduce(s, { type: 'cut', value: -1 }, facts)
    expect(s.cut).toBe(0)
    s = reduce({ ...s, xray: true, show: { ...s.show, hemi_L: false } }, { type: 'reset' }, facts)
    expect(s).toMatchObject({ explode: 0, cut: 1, xray: false, sel: null })
    expect(s.show.hemi_L).toBe(true)
  })
  it('hover is a no-op when unchanged', () => {
    const s = reduce(s0, { type: 'hover', sel: { type: 'region', id: 'L|sfg' } }, facts)
    expect(reduce(s, { type: 'hover', sel: { type: 'region', id: 'L|sfg' } }, facts)).toBe(s)
  })
  it('quiz scores, gives up after two misses, and ends', () => {
    let s = reduce(s0, { type: 'quizStart', target: 'L|sfg' }, facts)
    expect(s.mode).toBe('learn')
    s = reduce(s, { type: 'quizAnswer', picked: 'R|sfg' }, facts)
    expect(s.quiz).toMatchObject({ tries: 1, n: 0, revealing: false })
    s = reduce(s, { type: 'quizAnswer', picked: 'R|sfg' }, facts)
    expect(s.quiz).toMatchObject({ tries: 2, n: 1, score: 0, revealing: true })
    expect(s.sel).toEqual({ type: 'region', id: 'L|sfg' })
    s = reduce(s, { type: 'quizNext', target: 'R|sfg' }, facts)
    s = reduce(s, { type: 'quizAnswer', picked: 'R|sfg' }, facts)
    expect(s.quiz).toMatchObject({ score: 1, n: 2 })
    s = reduce(s, { type: 'mode', mode: 'mine' }, facts)
    expect(s.quiz).toBeNull()
  })
  it('tour steps set the lobe and restore on end', () => {
    let s = reduce(s0, { type: 'tour', step: 0, lobe: 'limbic', xray: false, hideR: true }, facts)
    expect(s.show.hemi_R).toBe(false)
    expect(s.sel).toEqual({ type: 'lobe', id: 'limbic' })
    s = reduce(s, { type: 'tourEnd' }, facts)
    expect(s.show.hemi_R).toBe(true)
    expect(s.tour).toBeNull()
  })
  it('tour and quiz use only present meshes', () => {
    expect(tourFor(new Set(['frontal', 'brainstem'])).map((x) => x.lobe)).toEqual(['frontal', 'brainstem'])
    expect(quizPool(s0, facts).sort()).toEqual(['L|sfg', 'R|sfg'])
    expect(quizPool({ ...s0, show: { ...s0.show, hemi_R: false } }, facts)).toEqual(['L|sfg'])
    expect(pickQuestion(['a', 'b'], 'a', () => 0.99)).toBe('b')
    expect(pickQuestion([], null)).toBeNull()
  })
})
