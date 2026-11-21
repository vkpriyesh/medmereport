import { describe, expect, it } from 'vitest'
import { formatPct, formatValue, lrCompare, parseReference, rangeBar, summaryList } from './format'

describe('formatValue', () => {
  it('uses sensible precision', () => {
    expect(formatValue(1234.4)).toBe('1,234')
    expect(formatValue(12.345)).toBe('12.3')
    expect(formatValue(3.14159)).toBe('3.14')
    expect(formatValue(0.01234)).toBe('0.012')
    expect(formatValue(0)).toBe('0')
    expect(formatValue(null)).toBe('—')
    expect(formatValue(NaN)).toBe('—')
  })
  it('formats signed percentages', () => {
    expect(formatPct(4.24)).toBe('+4.24%')
    expect(formatPct(-12)).toBe('−12%')
    expect(formatPct(0)).toBe('0%')
  })
})

describe('parseReference', () => {
  it('parses ranges in common notations', () => {
    expect(parseReference('650–950')).toEqual({ lo: 650, hi: 950 })
    expect(parseReference('650-950 ×10⁻⁶ mm²/s')).toEqual({ lo: 650, hi: 950 })
    expect(parseReference('typical adult 1,000–1,400 cm³')).toEqual({ lo: 1000, hi: 1400 })
    expect(parseReference('-10 to 10')).toEqual({ lo: -10, hi: 10 })
    expect(parseReference('−12 – −2')).toEqual({ lo: -12, hi: -2 })
    expect(parseReference('0.8..1.2')).toEqual({ lo: 0.8, hi: 1.2 })
    expect(parseReference('20 - 10')).toEqual({ lo: 10, hi: 20 })
  })
  it('parses one-sided bounds', () => {
    expect(parseReference('< 10 %')).toEqual({ lo: null, hi: 10 })
    expect(parseReference('≥ 0.5')).toEqual({ lo: 0.5, hi: null })
  })
  it('rejects prose', () => {
    expect(parseReference('varies widely between healthy people')).toBeNull()
    expect(parseReference(null)).toBeNull()
    expect(parseReference('')).toBeNull()
  })
})

describe('rangeBar', () => {
  it('places the band and marker inside 0–100', () => {
    const b = rangeBar(800, { lo: 650, hi: 950 })!
    expect(b.position).toBe('within')
    expect(b.bandLeft).toBeGreaterThan(0)
    expect(b.bandLeft + b.bandWidth).toBeLessThan(100)
    expect(b.marker).toBeGreaterThan(b.bandLeft)
    expect(b.marker).toBeLessThan(b.bandLeft + b.bandWidth)
  })
  it('flags values outside the range', () => {
    expect(rangeBar(1200, { lo: 650, hi: 950 })!.position).toBe('above')
    expect(rangeBar(100, { lo: 650, hi: 950 })!.position).toBe('below')
    const one = rangeBar(4, { lo: null, hi: 10 })!
    expect(one.bandLeft).toBe(0)
    expect(one.position).toBe('within')
    expect(rangeBar(4, { lo: null, hi: null })).toBeNull()
  })
})

describe('lrCompare', () => {
  it('computes bars and asymmetry', () => {
    const c = lrCompare(4.2, 3.8)!
    expect(c.leftPct).toBe(100)
    expect(c.rightPct).toBeCloseTo((3.8 / 4.2) * 100)
    expect(c.diffPct).toBeCloseTo(10)
    expect(lrCompare(0, 0)!.diffPct).toBe(0)
    expect(lrCompare(NaN, 1)).toBeNull()
  })
})

describe('summaryList', () => {
  it('accepts arrays and maps', () => {
    const m = { key: 'a', label: 'A', value: 1, unit: 'cm³', method: 'x' }
    expect(summaryList({ summary: [m] })).toEqual([m])
    expect(summaryList({ summary: { a: m } })).toEqual([m])
    expect(summaryList(null)).toEqual([])
  })
})
