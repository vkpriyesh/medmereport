// Pure geometry / imaging helpers for the 2D viewer. No DOM access — unit-tested in math.test.ts.
// Coordinates are DICOM patient space (LPS: +x = patient Left, +y = Posterior, +z = Superior), in mm.
import type { SeriesMeta } from '../api/endpoints'

export type Vec3 = [number, number, number]
export type Vec2 = [number, number]

export const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)
export const dot = (a: readonly number[], b: readonly number[]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
export const cross = (a: readonly number[], b: readonly number[]): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
]
export const norm = (a: readonly number[]) => Math.hypot(a[0], a[1], a[2])

// ---------- window / level ----------
/** 256-entry LUT mapping an 8-bit value through window width/level (+ optional invert). */
export function buildLut(ww: number, wl: number, invert = false, out = new Uint8ClampedArray(256)): Uint8ClampedArray {
  const lo = wl - ww / 2
  const sc = 255 / Math.max(1, ww)
  for (let v = 0; v < 256; v++) {
    const o = clamp((v - lo) * sc, 0, 255)
    out[v] = invert ? 255 - o : o
  }
  return out
}

/** Expand a greyscale buffer through the LUT into an RGBA buffer (alpha 255). */
export function applyLut(gray: Uint8Array, lut: Uint8ClampedArray, rgba: Uint8ClampedArray): void {
  for (let p = 0, q = 0; p < gray.length; p++, q += 4) {
    const v = lut[gray[p]]
    rgba[q] = v; rgba[q + 1] = v; rgba[q + 2] = v; rgba[q + 3] = 255
  }
}

/** Initial window from meta (defaults to the full 8-bit range). */
export function initialWindow(meta: Pick<SeriesMeta, 'window'> | null): { ww: number; wl: number } {
  const lo = meta?.window?.lo ?? 0
  const hi = meta?.window?.hi ?? 255
  return { ww: Math.max(2, hi - lo), wl: (hi + lo) / 2 }
}

// ---------- orientation ----------
/** LPS direction vector → anatomical letter it points towards (dominant axis). */
export function dirLetter(v: readonly number[]): string {
  const a = [Math.abs(v[0]), Math.abs(v[1]), Math.abs(v[2])]
  const i = a.indexOf(Math.max(...a))
  return (['RL', 'AP', 'IS'][i])[v[i] > 0 ? 1 : 0]
}

export interface OrientationLetters { top: string; bottom: string; left: string; right: string }
/** Letters at the screen edges for an image with DICOM ImageOrientationPatient `[row(3), col(3)]`. */
export function orientationLetters(o: readonly number[] | null | undefined): OrientationLetters | null {
  if (!o || o.length < 6) return null
  const r = o.slice(0, 3), c = o.slice(3, 6)
  if (norm(r) < 1e-6 || norm(c) < 1e-6) return null
  const neg = (v: number[]) => v.map((x) => -x)
  return { right: dirLetter(r), left: dirLetter(neg(r)), bottom: dirLetter(c), top: dirLetter(neg(c)) }
}

/** True for series that are not a stack of parallel slices (MIP spins, photos, documents, projections). */
export function isProjection(m: Pick<SeriesMeta, 'plane' | 'role'>): boolean {
  return m.plane === 'mip' || m.plane === 'projection' || m.role === 'mip' || m.role === 'photo' || m.role === 'document'
}

export function normalOf(o: readonly number[] | null | undefined): Vec3 | null {
  if (!o || o.length < 6) return null
  const n = cross(o.slice(0, 3), o.slice(3, 6))
  const l = norm(n)
  return l < 1e-6 ? null : [n[0] / l, n[1] / l, n[2] / l]
}

// ---------- millimetres ----------
/** Display mm per *image* pixel `[x, y]` for a frame of size w×h, or null when not measurable. */
export function mmPerPixel(m: Pick<SeriesMeta, 'pixelSpacing' | 'rows' | 'cols'>, w: number, h: number): Vec2 | null {
  const ps = m.pixelSpacing
  if (!ps || !(ps[0] > 0) || !(ps[1] > 0) || !(w > 0) || !(h > 0) || !(m.rows > 0) || !(m.cols > 0)) return null
  return [(ps[1] * m.cols) / w, (ps[0] * m.rows) / h]
}

/** Distance in mm between two image-pixel points. */
export function distanceMm(a: Vec2, b: Vec2, mm: Vec2): number {
  return Math.hypot((b[0] - a[0]) * mm[0], (b[1] - a[1]) * mm[1])
}

// ---------- linked scrolling ----------
/** Position of slice `i` along the stack normal (mm), or null when unknown. */
export function sliceCoord(m: Pick<SeriesMeta, 'orientation' | 'slices'>, i: number): number | null {
  const n = normalOf(m.orientation)
  const p = m.slices?.[i]?.pos
  return n && p ? dot(n, p) : null
}

/**
 * Index in `dst` physically closest to slice `srcIdx` of `src`, measured along src's normal.
 * Returns null when the stacks are not parallel (|cos| < 0.95) or lack geometry.
 */
export function nearestSlice(src: SeriesMeta, srcIdx: number, dst: SeriesMeta): number | null {
  if (isProjection(src) || isProjection(dst)) return null
  const n1 = normalOf(src.orientation), n2 = normalOf(dst.orientation)
  const p = src.slices?.[srcIdx]?.pos
  if (!n1 || !n2 || !p || Math.abs(dot(n1, n2)) < 0.95) return null
  const target = dot(n1, p)
  let best = -1, bd = Infinity
  dst.slices.forEach((s, i) => {
    if (!s.pos) return
    const d = Math.abs(dot(n1, s.pos) - target)
    if (d < bd) { bd = d; best = i }
  })
  return best < 0 ? null : best
}

// ---------- localizer ----------
export interface PlaneRect { origin: readonly number[]; row: readonly number[]; col: readonly number[]; widthMm: number; heightMm: number }

/**
 * Segment where the plane (point, normal) cuts the rectangle `ref`, in ref-plane mm `[u, v]`
 * (u along row from origin, v along col). Null when parallel or not intersecting.
 */
export function planeIntersection(ref: PlaneRect, point: readonly number[], normal: readonly number[]): [Vec2, Vec2] | null {
  const a = dot(normal, ref.row), b = dot(normal, ref.col)
  const d = [point[0] - ref.origin[0], point[1] - ref.origin[1], point[2] - ref.origin[2]]
  const c = dot(normal, d) // line: a·u + b·v = c
  const W = ref.widthMm, H = ref.heightMm
  if (Math.hypot(a, b) < 1e-6) return null
  const pts: Vec2[] = []
  const add = (u: number, v: number) => {
    const eps = 1e-6
    if (u < -eps || u > W + eps || v < -eps || v > H + eps) return
    if (pts.some((p) => Math.abs(p[0] - u) < 1e-4 && Math.abs(p[1] - v) < 1e-4)) return
    pts.push([clamp(u, 0, W) + 0, clamp(v, 0, H) + 0]) // +0 normalises -0
  }
  if (Math.abs(b) > 1e-9) { add(0, c / b); add(W, (c - a * W) / b) }
  if (Math.abs(a) > 1e-9) { add(c / a, 0); add((c - b * H) / a, H) }
  return pts.length >= 2 ? [pts[0], pts[1]] : null
}

/**
 * Localizer line: where slice `curIdx` of `cur` crosses slice `refIdx` of `ref`, in pixels of a
 * reference frame of size refW×refH. Null when geometry is missing or the planes are parallel.
 */
export function localizerLine(ref: SeriesMeta, refIdx: number, refW: number, refH: number, cur: SeriesMeta, curIdx: number): [Vec2, Vec2] | null {
  const o = ref.slices?.[refIdx]?.pos, ro = ref.orientation
  const p = cur.slices?.[curIdx]?.pos, n = normalOf(cur.orientation)
  const mm = mmPerPixel(ref, refW, refH)
  if (!o || !ro || ro.length < 6 || !p || !n || !mm || !ref.pixelSpacing) return null
  const rect: PlaneRect = { origin: o, row: ro.slice(0, 3), col: ro.slice(3, 6), widthMm: ref.pixelSpacing[1] * ref.cols, heightMm: ref.pixelSpacing[0] * ref.rows }
  const seg = planeIntersection(rect, p, n)
  if (!seg) return null
  return [[seg[0][0] / mm[0], seg[0][1] / mm[1]], [seg[1][0] / mm[0], seg[1][1] / mm[1]]]
}

/** Pick the best reference series to show the current slice position on (roughly perpendicular). */
export function pickLocalizerRef(all: SeriesMeta[], cur: SeriesMeta): SeriesMeta | null {
  if (isProjection(cur)) return null
  const n = normalOf(cur.orientation)
  if (!n || !cur.slices?.[0]?.pos) return null
  let best: SeriesMeta | null = null, bs = -Infinity
  for (const m of all) {
    if (m.id === cur.id || isProjection(m) || !m.pixelSpacing || !m.slices?.length) continue
    const mn = normalOf(m.orientation)
    if (!mn) continue
    const c = Math.abs(dot(n, mn))
    if (c > 0.5) continue
    let s = 1 - c
    if (m.role === 'localizer') s += 3
    if (m.region === cur.region) s += 2
    if (m.role === 'primary') s += 0.5
    if (m.plane === 'sagittal') s += 0.25
    if (s > bs) { bs = s; best = m }
  }
  return best
}

// ---------- screen transform ----------
export interface Fit { sx: number; sy: number; ox: number; oy: number }
/**
 * Image→canvas transform (device pixels). `aspect` = display height/width ratio of one image pixel,
 * `pan` in CSS px, `dpr` the device pixel ratio.
 */
export function fitTransform(cw: number, ch: number, iw: number, ih: number, aspect: number, zoom: number, pan: Vec2, dpr: number): Fit {
  const base = Math.min(cw / iw, ch / (ih * aspect)) * 0.96
  const sx = base * zoom, sy = base * zoom * aspect
  return { sx, sy, ox: (cw - iw * sx) / 2 + pan[0] * dpr, oy: (ch - ih * sy) / 2 + pan[1] * dpr }
}

/** Zoom by factor `k` keeping the point (mx, my) — CSS px relative to the view centre — fixed. */
export function zoomAt(zoom: number, pan: Vec2, k: number, mx: number, my: number, min = 0.3, max = 12): { zoom: number; pan: Vec2 } {
  const nz = clamp(zoom * k, min, max)
  const f = nz / zoom
  return { zoom: nz, pan: [mx - (mx - pan[0]) * f, my - (my - pan[1]) * f] }
}
