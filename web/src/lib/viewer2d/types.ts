import type { SeriesMeta } from '../api/endpoints'

export type Tool = 'scroll' | 'wl' | 'pan' | 'zoom' | 'measure'
export type LayoutN = 1 | 2 | 3 | 4
export type RGB = [number, number, number]

export interface PaneState {
  seriesId: string
  index: number
  playing: boolean
  invert: boolean
}

/** Deterministic, well-separated colour per label code (golden-angle hue walk). */
export function defaultLabelColor(code: number): RGB {
  const h = (code * 137.508) % 360, s = 0.62, l = 0.58
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))))
  return [f(0), f(8), f(4)]
}

export interface ActiveInfo { meta: SeriesMeta; index: number; pane: number; panes: PaneState[] }
