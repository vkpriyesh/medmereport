// Mirror of engine/medmereport/knowledge/structures.py (structure id → lobe, render group, inner).
// Used only as a fallback when regions.json / the knowledge base omit a field.
import type { Hemi, LayerId } from './types'

type G = 'hemi' | 'cerebellum' | 'brainstem' | 'deep' | 'ventricle' | 'vessel'
const V: Record<string, [string, G, boolean]> = {}
const add = (lobe: string, g: G, inner: boolean, ids: string) => ids.split(' ').forEach((id) => (V[id] = [lobe, g, inner]))
add('frontal', 'hemi', false, 'frontal_pole sfg mfg ifg_tri ifg_oper precentral frontal_medial sma paracingulate orbitofrontal frontal_operculum')
add('insular', 'hemi', false, 'insula')
add('temporal', 'hemi', false, 'temporal_pole stg mtg itg temporal_fusiform planum_polare heschl planum_temporale')
add('parietal', 'hemi', false, 'postcentral spl supramarginal angular precuneus parietal_operculum central_operculum')
add('occipital', 'hemi', false, 'lateral_occipital intracalcarine supracalcarine cuneus lingual occipital_fusiform temporo_occipital_fusiform occipital_pole')
add('limbic', 'hemi', false, 'cingulate_ant cingulate_post subcallosal parahippocampal')
add('limbic', 'deep', true, 'hippocampus amygdala')
add('subcortical', 'deep', true, 'thalamus caudate putamen pallidum accumbens ventral_dc')
add('ventricles', 'ventricle', true, 'lateral_ventricle third_ventricle fourth_ventricle')
add('white_matter', 'hemi', false, 'corpus_callosum')
add('white_matter', 'deep', true, 'cerebral_white_matter')
add('cerebellum', 'cerebellum', false, 'cerebellum_hemi cerebellar_vermis')
add('cerebellum', 'cerebellum', true, 'cerebellum_white_matter')
add('brainstem', 'brainstem', false, 'midbrain pons medulla brainstem')
add('arteries', 'vessel', true, 'cerebral_arteries neck_arteries')

export const VOCAB_ORDER = Object.keys(V)

export const LOBE_ORDER = ['frontal', 'parietal', 'temporal', 'occipital', 'insular', 'limbic', 'subcortical', 'ventricles', 'white_matter', 'cerebellum', 'brainstem', 'arteries']

export const lobeOf = (structure: string): string => V[structure]?.[0] ?? 'other'
export const isInner = (structure: string): boolean => V[structure]?.[2] ?? false

/** Layer toggle a region belongs to (regions.json `group` wins; vocab is the fallback). */
export function layerOf(structure: string, hemi: Hemi, group?: string | null): LayerId {
  const g = group ?? (V[structure] ? (V[structure][1] === 'hemi' ? `hemi_${hemi === 'R' ? 'R' : 'L'}` : V[structure][1]) : `hemi_${hemi === 'R' ? 'R' : 'L'}`)
  if (g === 'hemi') return hemi === 'R' ? 'hemi_R' : 'hemi_L'
  if (g === 'vessel') return 'vessels'
  if (g === 'body') return 'skin'
  return g as LayerId
}
