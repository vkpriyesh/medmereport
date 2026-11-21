import { describe, expect, it } from 'vitest'
import type { SeriesMeta } from '../api/endpoints'
import * as M from './math'

const AX = [1, 0, 0, 0, 1, 0], SAG = [0, 1, 0, 0, 0, -1], COR = [1, 0, 0, 0, 0, -1]

function meta(p: Partial<SeriesMeta> & { id: string }): SeriesMeta {
  return {
    title: p.id, modality: 'MR', sequence: 'T2', plane: 'axial', region: 'brain', role: 'primary', n: 0, ext: 'png',
    w: 256, h: 256, rows: 256, cols: 256, pixelSpacing: [1, 1], thickness: 5, orientation: AX, slices: [], labels: false, ...p,
  }
}
const stack = (id: string, o: number[], plane: string, origin: (t: number) => [number, number, number], ts: number[], extra: Partial<SeriesMeta> = {}) =>
  meta({ id, orientation: o, plane, n: ts.length, slices: ts.map((t) => ({ pos: origin(t) })), ...extra })

describe('window/level LUT', () => {
  it('is identity for the full 8-bit window', () => {
    const lut = M.buildLut(255, 127.5)
    for (const v of [0, 1, 64, 128, 200, 255]) expect(Math.abs(lut[v] - v)).toBeLessThanOrEqual(1)
  })
  it('inverts', () => {
    const lut = M.buildLut(255, 127.5, true)
    expect(lut[0]).toBe(255)
    expect(lut[255]).toBe(0)
  })
  it('clamps outside a narrow window', () => {
    const lut = M.buildLut(20, 100)
    expect(lut[80]).toBe(0)
    expect(lut[89]).toBe(0)
    expect(lut[100]).toBeCloseTo(127.5, -1)
    expect(lut[111]).toBe(255)
    expect(lut[250]).toBe(255)
  })
  it('never divides by zero', () => {
    const lut = M.buildLut(0, 50)
    expect(Array.from(lut).every((v) => v >= 0 && v <= 255)).toBe(true)
  })
  it('applies a LUT into RGBA', () => {
    const out = new Uint8ClampedArray(8)
    M.applyLut(new Uint8Array([0, 255]), M.buildLut(255, 127.5, true), out)
    expect(Array.from(out)).toEqual([255, 255, 255, 255, 0, 0, 0, 255])
  })
  it('derives the initial window from meta', () => {
    expect(M.initialWindow({ window: { lo: 20, hi: 220 } })).toEqual({ ww: 200, wl: 120 })
    expect(M.initialWindow(null)).toEqual({ ww: 255, wl: 127.5 })
  })
})

describe('orientation letters', () => {
  it('maps LPS directions', () => {
    expect(M.dirLetter([1, 0, 0])).toBe('L')
    expect(M.dirLetter([-1, 0, 0])).toBe('R')
    expect(M.dirLetter([0, 1, 0])).toBe('P')
    expect(M.dirLetter([0, -0.9, 0.2])).toBe('A')
    expect(M.dirLetter([0, 0, 1])).toBe('S')
    expect(M.dirLetter([0.1, 0, -1])).toBe('I')
  })
  it('labels a standard axial image (radiological convention)', () => {
    expect(M.orientationLetters(AX)).toEqual({ right: 'L', left: 'R', bottom: 'P', top: 'A' })
  })
  it('labels sagittal and coronal images', () => {
    expect(M.orientationLetters(SAG)).toEqual({ right: 'P', left: 'A', bottom: 'I', top: 'S' })
    expect(M.orientationLetters(COR)).toEqual({ right: 'L', left: 'R', bottom: 'I', top: 'S' })
  })
  it('returns null without geometry', () => {
    expect(M.orientationLetters(null)).toBeNull()
    expect(M.orientationLetters([0, 0, 0, 0, 0, 0])).toBeNull()
  })
})

describe('millimetres', () => {
  it('converts DICOM [row, col] spacing to display mm/pixel after downscaling', () => {
    const m = meta({ id: 'a', pixelSpacing: [0.5, 0.4], rows: 512, cols: 400 })
    const mm = M.mmPerPixel(m, 256, 256)!
    expect(mm[0]).toBeCloseTo(0.625)
    expect(mm[1]).toBeCloseTo(1)
  })
  it('is null when spacing is unknown (photos, PDFs)', () => {
    expect(M.mmPerPixel(meta({ id: 'p', pixelSpacing: null }), 256, 256)).toBeNull()
    expect(M.mmPerPixel(meta({ id: 'p', pixelSpacing: [0, 1] }), 256, 256)).toBeNull()
  })
  it('measures anisotropic distances', () => {
    expect(M.distanceMm([0, 0], [3, 4], [1, 1])).toBeCloseTo(5)
    expect(M.distanceMm([0, 0], [10, 0], [0.5, 2])).toBeCloseTo(5)
    expect(M.distanceMm([0, 0], [0, 10], [0.5, 2])).toBeCloseTo(20)
  })
})

describe('linked scrolling', () => {
  const zs = (n: number, a: number, b: number) => Array.from({ length: n }, (_, i) => a + ((b - a) * i) / (n - 1))
  const ax1 = stack('ax1', AX, 'axial', (z) => [-100, -100, z], zs(24, 70, -45))
  const ax2 = stack('ax2', AX, 'axial', (z) => [-100, -100, z], zs(20, 68, -46))
  const sag = stack('sag', SAG, 'sagittal', (x) => [x, -100, 100], zs(20, -50, 50))

  it('finds the physically nearest slice in a parallel stack', () => {
    for (const i of [0, 5, 11, 23]) {
      const j = M.nearestSlice(ax1, i, ax2)!
      const z1 = ax1.slices[i].pos![2]
      const best = Math.min(...ax2.slices.map((s) => Math.abs(s.pos![2] - z1)))
      expect(Math.abs(ax2.slices[j].pos![2] - z1)).toBeCloseTo(best)
    }
  })
  it('refuses to link non-parallel stacks or projections', () => {
    expect(M.nearestSlice(ax1, 3, sag)).toBeNull()
    const mip = meta({ id: 'mip', role: 'mip', plane: 'projection', n: 2, slices: [{ pos: null }, { pos: null }], orientation: null })
    expect(M.nearestSlice(ax1, 3, mip)).toBeNull()
  })
  it('reports the slice coordinate along the normal', () => {
    expect(M.sliceCoord(ax1, 0)).toBeCloseTo(70)
    // sagittal normal = row × col = (0,1,0)×(0,0,-1) = (-1,0,0), so x=-50 → +50
    expect(M.sliceCoord(sag, 0)).toBeCloseTo(50)
  })
})

describe('localizer', () => {
  const rect: M.PlaneRect = { origin: [0, 0, 0], row: [1, 0, 0], col: [0, 1, 0], widthMm: 100, heightMm: 100 }
  it('intersects a perpendicular plane', () => {
    const seg = M.planeIntersection(rect, [30, 0, 0], [1, 0, 0])!
    expect(seg).not.toBeNull()
    const us = seg.map((p) => p[0]), vs = seg.map((p) => p[1]).sort((a, b) => a - b)
    expect(us[0]).toBeCloseTo(30); expect(us[1]).toBeCloseTo(30)
    expect(vs[0]).toBeCloseTo(0); expect(vs[1]).toBeCloseTo(100)
  })
  it('handles a diagonal cut through corners', () => {
    const n = [1 / Math.SQRT2, -1 / Math.SQRT2, 0]
    const seg = M.planeIntersection(rect, [0, 0, 0], n)!
    const pts = seg.map((p) => p.map((v) => Math.round(v))).sort((a, b) => a[0] - b[0])
    expect(pts).toEqual([[0, 0], [100, 100]])
  })
  it('returns null for parallel or missing planes', () => {
    expect(M.planeIntersection(rect, [0, 0, 5], [0, 0, 1])).toBeNull()
    expect(M.planeIntersection(rect, [150, 0, 0], [1, 0, 0])).toBeNull()
  })
  it('draws an axial slice as a horizontal line on a sagittal reference', () => {
    // sagittal ref: origin at (0,-100,100), row=+y (A→P), col=-z (S→I), 200mm × 200mm on 256 px
    const ref = stack('sag', SAG, 'sagittal', (x) => [x, -100, 100], [0], { rows: 200, cols: 200, pixelSpacing: [1, 1] })
    const ax = stack('ax', AX, 'axial', (z) => [-100, -100, z], [20])
    const line = M.localizerLine(ref, 0, 256, 256, ax, 0)!
    const yPx = ((100 - 20) * 256) / 200 // z=20 is 80 mm below the top edge
    expect(line[0][1]).toBeCloseTo(yPx); expect(line[1][1]).toBeCloseTo(yPx)
    expect(Math.abs(line[1][0] - line[0][0])).toBeCloseTo(256)
  })
  it('picks a perpendicular reference series', () => {
    const ax = stack('ax', AX, 'axial', (z) => [-100, -100, z], [0, 5])
    const ax2 = stack('ax2', AX, 'axial', (z) => [-100, -100, z], [0, 5])
    const cor = stack('cor', COR, 'coronal', (y) => [-100, y, 100], [0], { region: 'spine' })
    const sag = stack('sag', SAG, 'sagittal', (x) => [x, -100, 100], [0])
    expect(M.pickLocalizerRef([ax, ax2, cor, sag], ax)?.id).toBe('sag')
    expect(M.pickLocalizerRef([ax, ax2], ax)).toBeNull()
  })
})

describe('screen transform', () => {
  it('centres and fits with aspect', () => {
    const f = M.fitTransform(200, 100, 100, 100, 1, 1, [0, 0], 1)
    expect(f.sx).toBeCloseTo(0.96); expect(f.sy).toBeCloseTo(0.96)
    expect(f.ox).toBeCloseTo((200 - 96) / 2); expect(f.oy).toBeCloseTo(2)
    const g = M.fitTransform(100, 100, 100, 50, 2, 1, [0, 0], 1)
    expect(g.sy / g.sx).toBeCloseTo(2)
  })
  it('keeps the cursor point fixed while zooming', () => {
    const before = { zoom: 1, pan: [0, 0] as M.Vec2 }
    const mx = 40, my = -10
    const after = M.zoomAt(before.zoom, before.pan, 2, mx, my)
    // image coordinate under the cursor (relative to centre, in zoom-1 units) must not change
    const imgBefore = [(mx - before.pan[0]) / before.zoom, (my - before.pan[1]) / before.zoom]
    const imgAfter = [(mx - after.pan[0]) / after.zoom, (my - after.pan[1]) / after.zoom]
    expect(imgAfter[0]).toBeCloseTo(imgBefore[0]); expect(imgAfter[1]).toBeCloseTo(imgBefore[1])
  })
  it('clamps zoom', () => {
    expect(M.zoomAt(10, [0, 0], 10, 0, 0).zoom).toBe(12)
    expect(M.zoomAt(0.5, [0, 0], 0.1, 0, 0).zoom).toBe(0.3)
  })
})

describe('projection detection', () => {
  it('treats MIP/photo/document series as projections', () => {
    expect(M.isProjection({ plane: 'axial', role: 'primary' })).toBe(false)
    expect(M.isProjection({ plane: 'projection', role: 'primary' })).toBe(true)
    expect(M.isProjection({ plane: 'axial', role: 'mip' })).toBe(true)
    expect(M.isProjection({ plane: 'unknown', role: 'photo' })).toBe(true)
  })
})
