import { describe, expect, it } from 'vitest'
import en from './i18n/en.json'
import hi from './i18n/hi.json'
import { formatStudyDate, groupByRegion, regionKey, SEQ_IDS, seqKey } from './study'

describe('sequence ids', () => {
  it('normalises engine sequence names', () => {
    expect(seqKey('t2*')).toBe('T2STAR')
    expect(seqKey('T2_STAR')).toBe('T2STAR')
    expect(seqKey('flair')).toBe('FLAIR')
    expect(seqKey('TOF')).toBe('TOF')
    expect(seqKey('unknown', 'CT')).toBe('CT')
    expect(seqKey('', 'MR', 'mip')).toBe('MIP')
    expect(seqKey('weird')).toBeNull()
  })
  it('has explainer texts for every sequence in both languages', () => {
    for (const id of SEQ_IDS) for (const part of ['name', 'what', 'why']) {
      expect((en as Record<string, string>)[`seq.${id}.${part}`], `en seq.${id}.${part}`).toBeTruthy()
      expect((hi as Record<string, string>)[`seq.${id}.${part}`], `hi seq.${id}.${part}`).toBeTruthy()
    }
  })
  it('keeps en and hi dictionaries in sync', () => {
    expect(Object.keys(hi).sort()).toEqual(Object.keys(en).sort())
  })
})

describe('regions', () => {
  it('maps body parts', () => {
    expect(regionKey('HEAD')).toBe('brain')
    expect(regionKey('C-SPINE')).toBe('spine')
    expect(regionKey('vessels')).toBe('vessels')
    expect(regionKey('elbowish')).toBe('unknown')
  })
  it('groups in display order', () => {
    const g = groupByRegion([{ r: 'unknown' }, { r: 'spine' }, { r: 'head' }, { r: 'brain' }], (x) => x.r)
    expect(g.map((x) => [x.region, x.items.length])).toEqual([['brain', 2], ['spine', 1], ['unknown', 1]])
  })
  it('formats DICOM dates', () => {
    expect(formatStudyDate('20260115')).toMatch(/2026/)
    expect(formatStudyDate('n/a')).toBe('n/a')
  })
})
