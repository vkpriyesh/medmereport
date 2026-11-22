// Explode view: each region moves away from the model centre, hemispheres separate sideways,
// and the hindbrain drops. Pure and allocation-free (writes into `out`).
import type { Hemi, LayerId } from './types'

export type V3 = { x: number; y: number; z: number }

export const EXPLODE = { radial: 0.55, hemi: 25, drop: 18 } as const

/**
 * Offset for one mesh at explode amount `e` ∈ [0,1].
 * `center` is the mesh's own centre, `model` the model centre (same space). X = Left, so the left hemisphere moves +X.
 * `scale` multiplies the fixed millimetre offsets (1 for a brain; ~model radius / 125 mm for a torso or spine).
 */
export function explodeOffset(center: V3, model: V3, hemi: Hemi | null, layer: LayerId, e: number, out: V3, scale = 1): V3 {
  const k = Math.max(0, Math.min(1, e))
  out.x = (center.x - model.x) * k * EXPLODE.radial
  out.y = (center.y - model.y) * k * EXPLODE.radial
  out.z = (center.z - model.z) * k * EXPLODE.radial
  if (hemi === 'L') out.x += k * EXPLODE.hemi * scale
  else if (hemi === 'R') out.x -= k * EXPLODE.hemi * scale
  if (layer === 'cerebellum' || layer === 'brainstem') out.y -= k * EXPLODE.drop * scale
  return out
}
