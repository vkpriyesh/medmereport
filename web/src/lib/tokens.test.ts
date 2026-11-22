// WCAG AA guard for the design tokens (T5.3): every text colour token must reach 4.5:1 on every surface it is used on.
// Surfaces are the opaque equivalents of the glass panels/chips over the brightest part of the page background.
import { describe, expect, it } from 'vitest'

// read the file directly: vitest does not process CSS imports, so `?raw` would come back empty.
// (node:fs is loaded untyped: the app tsconfig has no Node types, and adding them just for this would be overkill)
const FS = 'node:fs'
const { readFileSync } = (await import(/* @vite-ignore */ FS)) as { readFileSync: (p: URL, enc: string) => string }
const css = readFileSync(new URL('../app.css', import.meta.url), 'utf8')

const token = (name: string): string => {
  const m = new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`).exec(css)
  if (!m) throw new Error(`token --${name} missing or not a #rrggbb colour`)
  return m[1]
}
const lum = (hex: string) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4))
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
}
export const contrast = (a: string, b: string) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05) }

const SURFACES = {
  page: '#05070d',
  'panel over glow': '#0e1628', // rgba(14,20,36,.72) over the #0f1a33 radial glow
  'panel solid': '#0e1424',
  chip: '#1a2030', // rgba(255,255,255,.05) over a panel
  'accent soft': '#132a2e', // selected rows / chips
}

describe('colour tokens meet WCAG AA', () => {
  for (const name of ['text', 'text-2', 'text-3', 'accent', 'warn', 'danger', 'ok']) {
    it(`--${name} ≥ 4.5:1 on every surface`, () => {
      for (const [s, bg] of Object.entries(SURFACES)) expect(contrast(token(name), bg), `${name} on ${s}`).toBeGreaterThanOrEqual(4.5)
    })
  }
  it('primary button text ≥ 4.5:1 on the accent gradient', () => {
    for (const bg of ['#5eead4', '#2dd4bf']) expect(contrast('#042520', bg)).toBeGreaterThanOrEqual(4.5)
  })
})
