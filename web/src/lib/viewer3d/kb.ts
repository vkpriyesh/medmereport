// Knowledge-base helpers: per-language merge with English fallback, display names.
import { humanize, ribNumber, splitKey, vertebraLevel } from './names'
import type { Framing, Knowledge } from './types'
import { lobeOf as vocabLobe } from './vocab'

type AnyRec = Record<string, unknown>
const isObj = (v: unknown): v is AnyRec => !!v && typeof v === 'object' && !Array.isArray(v)
const empty = (v: unknown) => v === undefined || v === null || v === '' || (Array.isArray(v) && v.length === 0)

/** Deep merge: values from `over` win unless empty; arrays are replaced, not concatenated. */
function merge<T>(base: T, over: unknown): T {
  if (!isObj(over)) return base
  if (!isObj(base)) return over as T
  const out: AnyRec = { ...base }
  for (const [k, v] of Object.entries(over)) {
    if (empty(v)) continue
    out[k] = isObj(v) && isObj(out[k]) ? merge(out[k], v) : v
  }
  return out as T
}

/**
 * Knowledge for `lang`: the English document, overlaid with a localized document (e.g. from
 * `/api/knowledge?lang=hi`) and/or embedded `i18n[lang]` variants. Missing fields fall back to English.
 */
export function localizeKnowledge(en: Knowledge | null, lang: string, local?: Knowledge | null): Knowledge {
  let kb: Knowledge = en ?? local ?? { structures: {}, lobes: {} }
  kb = { ...kb, structures: kb.structures ?? {}, lobes: kb.lobes ?? {} }
  if (lang === 'en') return kb
  const emb = en?.i18n?.[lang] ?? local?.i18n?.[lang]
  if (emb) kb = merge(kb, emb)
  if (local && local !== en) kb = merge(kb, { structures: local.structures, lobes: local.lobes, arteries: local.arteries, sequences: local.sequences })
  return kb
}

export interface Namer {
  kb: Knowledge
  /** Translate a UI key; returns null when the dictionary has no entry. */
  tr: (key: string, vars?: Record<string, string | number>) => string | null
  /** English document + language: lets a UI-dictionary name beat an untranslated (English) KB name. */
  en?: Knowledge | null
  lang?: string
}

/** A KB name counts as localized when the language is English or it differs from the English KB. */
const localized = (n: Namer, name: string | undefined, enName: string | undefined) => !!name && (!n.lang || n.lang === 'en' || name !== enName)

export const structureLobe = (kb: Knowledge, structure: string) => kb.structures[structure]?.lobe ?? vocabLobe(structure)

export function structureName(n: Namer, structure: string): string {
  const nm = n.kb.structures[structure]?.name
  if (localized(n, nm, n.en?.structures?.[structure]?.name)) return nm!
  return n.tr(`struct.${structure}`) ?? nm ?? patterned(n, structure) ?? humanize(structure)
}

/** Names for numbered series (vertebrae_l1 → "L1 vertebra", rib_3 → "Rib 3") without one dictionary key each. */
function patterned(n: Namer, structure: string): string | null {
  const lv = vertebraLevel(structure)
  if (lv) return n.tr('struct.vertebra', { level: lv }) ?? `${lv} vertebra`
  const rib = ribNumber(structure)
  if (rib !== null) return n.tr('struct.rib', { n: rib }) ?? `Rib ${rib}`
  return null
}

export function lobeName(n: Namer, lobe: string): string {
  const nm = n.kb.lobes[lobe]?.name
  if (localized(n, nm, n.en?.lobes?.[lobe]?.name)) return nm!
  return n.tr(`lobe.${lobe}`) ?? nm ?? humanize(lobe)
}

/** "Left hippocampus" / "Pons". */
export function regionName(n: Namer, key: string): string {
  const { hemi, structure } = splitKey(key)
  const nm = structureName(n, structure)
  if (hemi === 'L') return n.tr('side.leftOf', { name: nm }) ?? `Left ${nm}`
  if (hemi === 'R') return n.tr('side.rightOf', { name: nm }) ?? `Right ${nm}`
  return nm
}

/** Search haystack: name, aliases and the id. */
export function searchText(kb: Knowledge, structure: string, displayName: string): string {
  const s = kb.structures[structure]
  return [displayName, s?.name, ...(s?.aka ?? []), structure.replace(/_/g, ' ')].filter(Boolean).join(' ').toLowerCase()
}

/** Which vessel tree a `V|<name>` key is: neck arteries, body vessels (CT/CTA, or any vessel in a torso model) or brain arteries. */
export function vesselKind(key: string, framing: Framing = 'head'): 'neck' | 'body' | 'brain' {
  if (/neck/i.test(key)) return 'neck'
  if (/body|aorta|cta/i.test(key) || framing !== 'head') return 'body'
  return 'brain'
}
