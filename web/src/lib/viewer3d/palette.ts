// Anatomical colour system: lobe hues + deterministic per-structure variation; ramps for data maps.
// Ported from the prototype's palette.js. Colours are 0–255 RGB triples.
export type RGB = [number, number, number]

export const LOBE_COLORS: Record<string, string> = {
  frontal: '#f472b6',
  parietal: '#60a5fa',
  temporal: '#34d399',
  occipital: '#fbbf24',
  insular: '#f97316',
  limbic: '#c084fc',
  subcortical: '#22d3ee',
  cerebellum: '#a3e635',
  brainstem: '#fb7185',
  ventricles: '#93c5fd',
  white_matter: '#e2e8f0',
  arteries: '#ef4444',
  // body systems (M3): bone ivory, distinct hue per organ system, vessels red, skin neutral
  integument: '#d6c2b4',
  skeleton: '#e9dfc7',
  spinal_column: '#e4d6b4',
  nervous_spine: '#facc15',
  respiratory: '#7dd3fc',
  cardiovascular: '#dc2626',
  digestive: '#f59e0b',
  urinary: '#a78bfa',
  endocrine: '#2dd4bf',
  lymphatic: '#a3e635',
  reproductive: '#f472b6',
  muscular: '#c2410c',
  nervous: '#fde68a',
  sensory: '#38bdf8',
  body_regions: '#94a3b8',
}
/** Pale systems (bone, skin): per-structure variation keeps them light instead of the brain's mid-tone clamp. */
const LIGHT_LOBES = new Set(['integument', 'skeleton', 'spinal_column'])
/** "Natural" colours for body systems (brain lobes keep NATURAL / NATURAL_DEEP). */
export const NATURAL_BY_LOBE: Record<string, string> = {
  integument: '#d9b8a3', skeleton: '#ece3cf', spinal_column: '#e6dcc4', nervous_spine: '#f2e6c0', respiratory: '#e9a6a6',
  cardiovascular: '#9f1d20', digestive: '#b9735a', urinary: '#8f4a3a', endocrine: '#c9855c', lymphatic: '#7a2e3a',
  reproductive: '#c98d8d', muscular: '#a3473f',
}
/** Swatch colour for each layer toggle. */
export const LAYER_COLORS: Record<string, string> = {
  hemi_L: '#f472b6', hemi_R: '#60a5fa', cerebellum: '#a3e635', brainstem: '#fb7185', deep: '#22d3ee', ventricle: '#93c5fd',
  organ: '#f59e0b', airway: '#7dd3fc', spine: '#facc15', muscle: '#c2410c', vessels: '#ef4444', neck: '#f87171', bone: '#e7e2d3', skin: '#cbd5e1',
}
export const FALLBACK = '#cbd5e1'
export const NO_DATA = '#3a4252'
export const NATURAL = '#e7b9ad'
export const NATURAL_DEEP = '#c99a8a'

export const SEQUENTIAL = ['#1e3a8a', '#0ea5e9', '#5eead4', '#fde047', '#f97316', '#e11d48']
export const DIVERGING = ['#3b82f6', '#93c5fd', '#e2e8f0', '#fca5a5', '#ef4444']

export const lobeColor = (lobe: string) => LOBE_COLORS[lobe] ?? FALLBACK

export function hexToRgb(h: string): RGB {
  const n = parseInt(h.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
export function rgbToHex([r, g, b]: RGB): string {
  return '#' + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('')
}

export function rgbToHsl([r0, g0, b0]: RGB): [number, number, number] {
  const r = r0 / 255, g = g0 / 255, b = b0 / 255
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b)
  const l = (mx + mn) / 2
  if (mx === mn) return [0, 0, l]
  const d = mx - mn
  const s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn)
  let h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4
  h /= 6
  return [h, s, l]
}
export function hslToRgb([h, s, l]: [number, number, number]): RGB {
  if (s === 0) return [l * 255, l * 255, l * 255]
  const f = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q
  return [f(p, q, h + 1 / 3) * 255, f(p, q, h) * 255, f(p, q, h - 1 / 3) * 255]
}

/** Lobe hue with a deterministic variation by index within the lobe. */
export function structureColor(lobe: string, idx: number, count: number): RGB {
  const base = rgbToHsl(hexToRgb(lobeColor(lobe)))
  const t = count > 1 ? idx / (count - 1) : 0.5
  if (LIGHT_LOBES.has(lobe)) {
    const l = Math.max(0.7, Math.min(0.9, base[2] + (t - 0.5) * 0.12))
    return hslToRgb([(base[0] + (t - 0.5) * 0.04 + 1) % 1, Math.max(0.25, base[1] - (idx % 2) * 0.12), l]).map(Math.round) as RGB
  }
  const h = (base[0] + (t - 0.5) * 0.09 + 1) % 1
  const l = Math.max(0.36, Math.min(0.62, base[2] * 0.86 + (t - 0.5) * 0.22))
  const s = Math.max(0.45, base[1] - (idx % 2) * 0.12)
  return hslToRgb([h, s, l]).map(Math.round) as RGB
}

/** Colour table for structure ids, grouped by lobe in the given (stable) order. */
export function buildStructureColors(ids: string[], lobeOf: (id: string) => string): Record<string, RGB> {
  const byLobe: Record<string, string[]> = {}
  for (const id of ids) (byLobe[lobeOf(id)] ??= []).push(id)
  const out: Record<string, RGB> = {}
  for (const [lobe, list] of Object.entries(byLobe)) list.forEach((id, i) => (out[id] = structureColor(lobe, i, list.length)))
  return out
}

/** Piecewise-linear colour ramp, t ∈ [0,1] (clamped). */
export function ramp(t: number, stops: string[] = SEQUENTIAL): RGB {
  t = Math.max(0, Math.min(1, Number.isFinite(t) ? t : 0))
  const n = stops.length - 1
  const i = Math.min(n - 1, Math.floor(t * n))
  const f = t * n - i
  const a = hexToRgb(stops[i]), b = hexToRgb(stops[i + 1])
  return a.map((v, k) => v + (b[k] - v) * f) as RGB
}

export const cssGradient = (stops: string[]) => `linear-gradient(90deg, ${stops.join(', ')})`
export const cssRgb = (c: RGB) => `rgb(${c.map(Math.round).join(' ')})`
