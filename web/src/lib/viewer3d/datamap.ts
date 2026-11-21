// Generic "colour by data" maps: any numeric Measurement key that appears in stats.json regions.
import { DIVERGING, NO_DATA, SEQUENTIAL, hexToRgb, ramp, type RGB } from './palette'
import type { StatsJson } from './types'

export interface DataMap {
  key: string
  label: string
  unit: string
  /** Region key → value. */
  values: Map<string, number>
  lo: number
  hi: number
  diverging: boolean
  stops: string[]
}

/** Percentile (linear interpolation) of a sorted array. */
export function percentile(sorted: number[], p: number): number {
  if (!sorted.length) return NaN
  const i = (sorted.length - 1) * Math.max(0, Math.min(1, p))
  const a = Math.floor(i), b = Math.ceil(i)
  return sorted[a] + (sorted[b] - sorted[a]) * (i - a)
}

/** All data maps available in `stats` (keys with a finite value in at least `minRegions` regions), in first-seen order. */
export function buildDataMaps(stats: StatsJson | null | undefined, minRegions = 2): DataMap[] {
  const acc = new Map<string, { label: string; unit: string; values: Map<string, number> }>()
  for (const [rk, r] of Object.entries(stats?.regions ?? {})) {
    for (const m of r.measurements ?? []) {
      if (typeof m.value !== 'number' || !Number.isFinite(m.value)) continue
      let e = acc.get(m.key)
      if (!e) acc.set(m.key, (e = { label: m.label || m.key, unit: m.unit ?? '', values: new Map() }))
      e.values.set(rk, m.value)
    }
  }
  const out: DataMap[] = []
  for (const [key, e] of acc) {
    if (e.values.size < minRegions) continue
    const sorted = [...e.values.values()].sort((a, b) => a - b)
    const diverging = sorted[0] < 0 && sorted[sorted.length - 1] > 0
    let lo: number, hi: number
    if (diverging) {
      const abs = sorted.map(Math.abs).sort((a, b) => a - b)
      hi = percentile(abs, 0.95) || 1
      lo = -hi
    } else {
      // robust: 5th–95th percentile, clipped to Tukey fences so a few outliers (e.g. fluid spaces) don't wash out the map
      const q1 = percentile(sorted, 0.25), q3 = percentile(sorted, 0.75), iqr = q3 - q1
      lo = Math.max(percentile(sorted, 0.05), q1 - 1.5 * iqr)
      hi = Math.min(percentile(sorted, 0.95), q3 + 1.5 * iqr)
      if (!(hi > lo)) { lo = sorted[0]; hi = sorted[sorted.length - 1] }
      if (!(hi > lo)) hi = lo + 1
    }
    out.push({ key, label: e.label, unit: e.unit, values: e.values, lo, hi, diverging, stops: diverging ? DIVERGING : SEQUENTIAL })
  }
  return out
}

/** Colour of one region under a data map (grey when it has no value). */
export function dataColor(map: DataMap, regionKey: string): RGB {
  const v = map.values.get(regionKey)
  if (v === undefined) return hexToRgb(NO_DATA)
  return ramp((v - map.lo) / (map.hi - map.lo), map.stops)
}

/** Three tick values for the legend. */
export const legendTicks = (m: DataMap): [number, number, number] => [m.lo, (m.lo + m.hi) / 2, m.hi]
