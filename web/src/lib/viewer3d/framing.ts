// Model-type facts the explorer derives once per model (§6): camera framing, layer list + defaults, label variants.
// Pure (unit-tested); no three.js.
import type { Framing, LayerId, RegionsJson } from './types'
import { LAYER_ORDER } from './types'
import { inVocab, layerOfGroup, lobeOf } from './vocab'

const PIPELINE_FRAMING: Record<string, Framing> = { brain_mr: 'head', spine_mr: 'spine', ct_body: 'body' }
const BRAIN_GROUPS = new Set(['hemi', 'hemi_L', 'hemi_R', 'cerebellum', 'brainstem', 'deep', 'ventricle'])
const BRAIN = new Set(['frontal', 'parietal', 'temporal', 'occipital', 'insular', 'limbic', 'subcortical', 'ventricles', 'white_matter', 'cerebellum', 'brainstem'])

/**
 * Framing for a model: `regions.json.framing` wins, then the pipeline (regions.json or status.json), then the
 * structures present (brain groups → head; spinal column/cord only → spine; anything else → body). No regions → head.
 */
export function framingOf(regions: RegionsJson | null | undefined, pipeline?: string | null): Framing {
  const f = regions?.framing
  if (f === 'head' || f === 'body' || f === 'spine') return f
  const p = regions?.pipeline ?? pipeline ?? ''
  if (PIPELINE_FRAMING[p]) return PIPELINE_FRAMING[p]
  const rs = regions?.regions ?? []
  if (!rs.length) return 'head'
  if (rs.some((r) => (r.group ? BRAIN_GROUPS.has(r.group) : inVocab(r.structure) && BRAIN.has(lobeOf(r.structure))))) return 'head'
  const spineOnly = rs.every((r) => ['spinal_column', 'nervous_spine'].includes(lobeOf(r.structure)) || r.group === 'spine')
  return spineOnly ? 'spine' : 'body'
}

/** Default visibility when regions.json does not say (brain: M2 behaviour unchanged). */
export const DEFAULT_SHOW: Record<Framing, Record<LayerId, boolean>> = {
  head: {
    hemi_L: true, hemi_R: true, cerebellum: true, brainstem: true, deep: true, ventricle: true,
    organ: true, airway: true, spine: true, muscle: false, vessels: false, neck: false, bone: false, skin: false,
  },
  body: {
    hemi_L: true, hemi_R: true, cerebellum: true, brainstem: true, deep: true, ventricle: true,
    organ: true, airway: true, spine: true, muscle: false, vessels: true, neck: true, bone: true, skin: true,
  },
  spine: {
    hemi_L: true, hemi_R: true, cerebellum: true, brainstem: true, deep: true, ventricle: true,
    organ: true, airway: true, spine: true, muscle: false, vessels: true, neck: true, bone: true, skin: false,
  },
}

export interface LayerPlan { layers: LayerId[]; defaults: Partial<Record<LayerId, boolean>> }

/**
 * Layer toggles: those listed in `regions.json.layers` (mapped to UI ids) that have meshes, plus any mesh layer the
 * list forgot (so nothing is untoggleable), in the stable LAYER_ORDER. Listed `default`s win over framing defaults.
 */
export function planLayers(present: Iterable<LayerId>, regions: RegionsJson | null | undefined, framing: Framing): LayerPlan {
  const have = new Set(present)
  const listed = new Map<LayerId, boolean | undefined>()
  for (const l of regions?.layers ?? []) if (l && typeof l.id === 'string') listed.set(layerOfGroup(l.id), l.default)
  const layers = [...LAYER_ORDER.filter((l) => have.has(l)), ...[...have].filter((l) => !LAYER_ORDER.includes(l))]
  const fb = DEFAULT_SHOW[framing]
  const defaults: Partial<Record<LayerId, boolean>> = {}
  for (const l of layers) {
    const d = listed.get(l)
    defaults[l] = typeof d === 'boolean' ? d : fb[l] ?? true
  }
  return { layers, defaults }
}

/** Layers whose regions become see-through in X-ray mode even when not "outer" (they hide what is inside). */
export const XRAY_GHOST: ReadonlySet<LayerId> = new Set<LayerId>(['muscle', 'bone'])
/** Layers X-ray turns on (inner anatomy). */
export const XRAY_REVEAL: LayerId[] = ['deep', 'ventricle', 'vessels', 'organ', 'airway', 'spine']

/**
 * i18n key with a framing variant: `key.spine` → `key.body` (spine and body share wording) → `key`.
 * `has` is the dictionary lookup (injected for tests).
 */
export function framedKey(key: string, framing: Framing, has: (k: string) => boolean): string {
  if (framing === 'head') return key
  if (framing === 'spine' && has(`${key}.spine`)) return `${key}.spine`
  if (has(`${key}.body`)) return `${key}.body`
  return key
}
