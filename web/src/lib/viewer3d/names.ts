// glTF node-name convention (API_CONTRACT §5): `{L|R|M}__{structure}`, `V__<name>`, `H__skin`, `B__<name>`.
import type { Hemi } from './types'

export type NodeKind =
  | { kind: 'region'; hemi: Hemi; structure: string; key: string }
  | { kind: 'vessel'; name: string; key: string }
  | { kind: 'skin'; name: string; key: string }
  | { kind: 'bone'; name: string; key: string }

// GLTFLoader de-duplicates names with a `_<n>` suffix; strip it.
const RE = /^([LRMVHB])__(.+?)(?:_\d+)?$/

export function parseNodeName(name: string | undefined | null): NodeKind | null {
  const m = name ? RE.exec(name) : null
  if (!m) return null
  const [, p, rest] = m
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
