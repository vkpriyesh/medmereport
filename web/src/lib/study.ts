// Pure helpers for presenting studies/series: stable ids → i18n keys, grouping, dates.
import type { SeriesInfo, SeriesMeta } from './api/endpoints'

export const SEQ_IDS = ['T1', 'T2', 'FLAIR', 'DWI', 'ADC', 'T2STAR', 'SWI', 'TOF', 'STIR', 'PD', 'CT', 'CTA', 'CR', 'DX', 'MIP', 'PHOTO'] as const
export type SeqId = (typeof SEQ_IDS)[number]

const SEQ_ALIASES: Record<string, SeqId> = {
  T1W: 'T1', T1WI: 'T1', MPRAGE: 'T1', SPGR: 'T1', T2W: 'T2', T2WI: 'T2', TSE: 'T2', T2FLAIR: 'FLAIR',
  DWI: 'DWI', DIFFUSION: 'DWI', TRACE: 'DWI', T2STAR: 'T2STAR', GRE: 'T2STAR', T2GRE: 'T2STAR', MEDIC: 'T2STAR',
  MRA: 'TOF', TOFMRA: 'TOF', ANGIO: 'TOF', PDW: 'PD', XRAY: 'DX', PHOTOGRAPH: 'PHOTO', DOCUMENT: 'PHOTO',
}

/** Normalise an engine sequence id (`t2*`, `T2_STAR`, `flair`) to one of SEQ_IDS, or null. */
export function seqKey(sequence: string | null | undefined, modality?: string, role?: string): SeqId | null {
  const raw = (sequence ?? '').toUpperCase().replace(/\*/g, 'STAR').replace(/[^A-Z0-9]/g, '')
  if ((SEQ_IDS as readonly string[]).includes(raw)) return raw as SeqId
  if (SEQ_ALIASES[raw]) return SEQ_ALIASES[raw]
  if (role === 'mip') return 'MIP'
  if (role === 'photo' || role === 'document') return 'PHOTO'
  const mod = (modality ?? '').toUpperCase()
  if (mod === 'CT' || mod === 'CR' || mod === 'DX') return mod
  return null
}

export const REGION_ORDER = ['brain', 'spine', 'vessels', 'chest', 'abdomen', 'limb', 'unknown'] as const
export type RegionId = (typeof REGION_ORDER)[number]
const REGION_ALIASES: Record<string, RegionId> = {
  head: 'brain', brain: 'brain', skull: 'brain', neuro: 'brain',
  spine: 'spine', cspine: 'spine', tspine: 'spine', lspine: 'spine', neck: 'spine',
  vessels: 'vessels', angio: 'vessels', chest: 'chest', thorax: 'chest', lung: 'chest',
  abdomen: 'abdomen', pelvis: 'abdomen', limb: 'limb', knee: 'limb', shoulder: 'limb', hand: 'limb', foot: 'limb',
}
export function regionKey(raw: string | null | undefined): RegionId {
  const k = (raw ?? '').toLowerCase().replace(/[^a-z]/g, '')
  return REGION_ALIASES[k] ?? 'unknown'
}

/** Group series by region in display order; `regionOf` lets callers prefer meta.region. */
export function groupByRegion<T>(items: T[], regionOf: (x: T) => string): { region: RegionId; items: T[] }[] {
  const map = new Map<RegionId, T[]>()
  for (const it of items) {
    const r = regionKey(regionOf(it))
    if (!map.has(r)) map.set(r, [])
    map.get(r)!.push(it)
  }
  return REGION_ORDER.filter((r) => map.has(r)).map((region) => ({ region, items: map.get(region)! }))
}

export const seriesRegion = (s: SeriesInfo, m?: SeriesMeta | null) => (m?.region && m.region !== 'unknown' ? m.region : s.body_part)

/** DICOM `YYYYMMDD` → localised date; other strings pass through. */
export function formatStudyDate(s: string, lang = 'en'): string {
  if (!/^\d{8}$/.test(s)) return s
  const d = new Date(Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8)))
  if (isNaN(d.getTime())) return s
  return d.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
}

/**
 * Series the 2D viewer should open first: the model's `primary_series` (§6; spine models name their sagittal series),
 * else — for a study that is mostly spine — the first primary sagittal series, else the first series. Null if empty.
 */
export function primarySeriesId(
  series: SeriesInfo[],
  primary?: string | null,
  regionOf: (s: SeriesInfo) => string = (s) => s.body_part,
): string | null {
  if (!series.length) return null
  if (primary && series.some((s) => s.id === primary)) return primary
  const spine = series.filter((s) => regionKey(regionOf(s)) === 'spine').length
  if (spine * 2 > series.length) {
    const sag = series.find((s) => regionKey(regionOf(s)) === 'spine' && s.plane === 'sagittal' && s.role === 'primary')
    if (sag) return sag.id
  }
  return series[0].id
}
