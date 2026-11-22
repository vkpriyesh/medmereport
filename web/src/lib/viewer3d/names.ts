// glTF node-name convention (API_CONTRACT §5): `{L|R|M}__{structure}`, `V__<name>`, `H__skin`, `B__<name>`.
import type { Hemi } from './types'

export type NodeKind =
  | { kind: 'region'; hemi: Hemi; structure: string; key: string }
  | { kind: 'vessel'; name: string; key: string }
  | { kind: 'skin'; name: string; key: string }
  | { kind: 'bone'; name: string; key: string }

// GLTFLoader de-duplicates names with a `_<n>` suffix; strip it — unless the full id is a known structure
// (`L__rib_3` is rib 3, not a duplicate of `L__rib`).
const RE = /^([LRMVHB])__(.+?)(?:_\d+)?$/
const FULL = /^([LRMVHB])__(.+)$/

/** `known(structure)` says whether an id with a numeric tail is a real structure (regions.json / vocabulary). */
export function parseNodeName(name: string | undefined | null, known?: (structure: string) => boolean): NodeKind | null {
  const m = name ? RE.exec(name) : null
  if (!m) return null
  const p = m[1]
  let rest = m[2]
  if (known) {
    const f = FULL.exec(name!)!
    if (f[2] !== rest && 'LRM'.includes(p) && known(f[2])) rest = f[2]
    else if (f[2] !== rest && 'LRM'.includes(p)) {
      // `L__rib_3_1`: a de-duplicated copy of a known id with a numeric tail
      const d = /^(.+)_\d+$/.exec(f[2])
      if (d && d[1] !== rest && known(d[1])) rest = d[1]
    }
  }
  if (p === 'V') return { kind: 'vessel', name: rest, key: `V|${rest}` }
  if (p === 'H') return { kind: 'skin', name: rest, key: `H|${rest}` }
  if (p === 'B') return { kind: 'bone', name: rest, key: `B|${rest}` }
  return { kind: 'region', hemi: p as Hemi, structure: rest, key: `${p}|${rest}` }
}

export function splitKey(key: string): { hemi: Hemi; structure: string } {
  const i = key.indexOf('|')
  return { hemi: key.slice(0, i) as Hemi, structure: key.slice(i + 1) }
}

/** The same structure on the other side (`L|x` ↔ `R|x`), or null for midline. */
export function otherSide(key: string): string | null {
  const { hemi, structure } = splitKey(key)
  return hemi === 'L' ? `R|${structure}` : hemi === 'R' ? `L|${structure}` : null
}

/** `cingulate_ant` → `Cingulate ant` (last-resort display name). */
export const humanize = (id: string) => (id.charAt(0).toUpperCase() + id.slice(1)).replace(/_/g, ' ')

/** Vertebral level of a `vertebrae_l1`-style id (`L1`), or null. */
export const vertebraLevel = (id: string): string | null => { const m = /^vertebrae_([cts]\d{1,2}|l\d|s\d)$/.exec(id); return m ? m[1].toUpperCase() : null }
/** Rib number of a `rib_3`-style id, or null. */
export const ribNumber = (id: string): number | null => { const m = /^rib_(\d{1,2})$/.exec(id); return m ? +m[1] : null }
