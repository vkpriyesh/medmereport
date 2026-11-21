// Pure helpers for showing Measurements: number formatting, reference-range parsing, range bars, L/R comparison.
import type { Measurement, StatsJson } from '../viewer3d/types'

/** Significant-digit aware formatting: 1234 → "1,234", 12.34 → "12.3", 0.0123 → "0.012". */
export function formatValue(v: number | null | undefined, lang = 'en'): string {
  if (v === null || v === undefined || !Number.isFinite(v)) return '—'
  const a = Math.abs(v)
  const digits = a >= 100 ? 0 : a >= 10 ? 1 : a >= 1 ? 2 : a === 0 ? 0 : Math.min(4, 1 - Math.floor(Math.log10(a)))
  const locale = lang === 'hi' ? 'hi-IN' : 'en-US'
  return v.toLocaleString(locale, { maximumFractionDigits: digits, minimumFractionDigits: 0 })
}

/** Signed percentage, e.g. "+4.2%" / "−3%". */
export function formatPct(v: number, lang = 'en'): string {
  const s = formatValue(Math.abs(v), lang)
  return `${v > 0 ? '+' : v < 0 ? '−' : ''}${s}%`
}

export interface Range { lo: number | null; hi: number | null }

const NUM = String.raw`[-−]?\d+(?:[.,]\d+)?`
const toNum = (s: string) => parseFloat(s.replace('−', '-').replace(',', '.'))

/**
 * Parse a human reference string into a numeric range. Accepts "650–950", "650-950 ×10⁻⁶ mm²/s",
 * "-10 to 10", "1,000–1,400 cm³", "< 10", "≥ 0.5". Returns null when nothing numeric is found.
 */
export function parseReference(ref: string | null | undefined): Range | null {
  if (!ref) return null
  // drop thousands separators ("1,000" → "1000") and superscript exponents that are part of units
  const s = ref.replace(/(\d),(\d{3})(?!\d)/g, '$1$2').replace(/[×x]\s*10(?:\^[-−]?\d+|[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, ' ')
  const between = new RegExp(`(${NUM})\\s*(?:–|—|-|to|\\.\\.|…)\\s*(${NUM})`).exec(s)
  if (between) {
    let lo = toNum(between[1]), hi = toNum(between[2])
    if (lo > hi) [lo, hi] = [hi, lo]
    return { lo, hi }
  }
  const lt = new RegExp(`(?:<|≤|<=|under|below)\\s*(${NUM})`, 'i').exec(s)
  if (lt) return { lo: null, hi: toNum(lt[1]) }
  const gt = new RegExp(`(?:>|≥|>=|over|above)\\s*(${NUM})`, 'i').exec(s)
  if (gt) return { lo: toNum(gt[1]), hi: null }
  return null
}

export interface RangeBar { axisLo: number; axisHi: number; bandLeft: number; bandWidth: number; marker: number; position: 'below' | 'within' | 'above' }

/** Geometry (percentages 0–100) for a bar with the reference band and a value marker. */
export function rangeBar(value: number, r: Range): RangeBar | null {
  if (!Number.isFinite(value) || (r.lo === null && r.hi === null)) return null
  const lo = r.lo ?? Math.min(0, value, r.hi! * 0.5)
  const hi = r.hi ?? Math.max(lo * 2, value * 1.25, lo + 1)
  const span = Math.max(1e-9, hi - lo)
  const axisLo = Math.min(lo - span * 0.35, value - span * 0.08)
  const axisHi = Math.max(hi + span * 0.35, value + span * 0.08)
  const p = (v: number) => ((v - axisLo) / (axisHi - axisLo)) * 100
  return {
    axisLo, axisHi,
    bandLeft: r.lo === null ? 0 : p(lo),
    bandWidth: (r.hi === null ? 100 : p(hi)) - (r.lo === null ? 0 : p(lo)),
    marker: Math.max(0, Math.min(100, p(value))),
    position: r.lo !== null && value < r.lo ? 'below' : r.hi !== null && value > r.hi ? 'above' : 'within',
  }
}

export interface LrCompare { left: number; right: number; leftPct: number; rightPct: number; diffPct: number }

/** Left/right bars (relative to the larger magnitude) and the asymmetry (L−R)/mean in %. */
export function lrCompare(left: number, right: number): LrCompare | null {
  if (!Number.isFinite(left) || !Number.isFinite(right)) return null
  const mx = Math.max(Math.abs(left), Math.abs(right))
  const mean = (left + right) / 2
  return {
    left, right,
    leftPct: mx ? (Math.abs(left) / mx) * 100 : 0,
    rightPct: mx ? (Math.abs(right) / mx) * 100 : 0,
    diffPct: mean ? ((left - right) / Math.abs(mean)) * 100 : 0,
  }
}

/** stats.summary may be an array or a key → Measurement map. */
export function summaryList(stats: StatsJson | null | undefined): Measurement[] {
  const s = stats?.summary
  if (!s) return []
  return Array.isArray(s) ? s : Object.entries(s).map(([k, m]) => ({ ...m, key: m.key ?? k }))
}

export const caveatText = (c: string | { text: string }) => (typeof c === 'string' ? c : c.text)
