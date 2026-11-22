// Mirror of engine/medmereport/knowledge/structures.py (structure id → lobe/system, render group, inner).
// Used only as a fallback when regions.json / the knowledge base omit a field.
// BODY is filled engine-side by T3.5; the entries below are the UI's fallback for TotalSegmentator's open `total`
// classes after `totalseg_structure()` (kidney_left → L|kidney, rib_left_3 → L|rib_3, vertebrae_L1 → M|vertebrae_l1).
import type { Hemi, LayerId } from './types'

type G = 'hemi' | 'cerebellum' | 'brainstem' | 'deep' | 'ventricle' | 'vessel' | 'body' | 'bone' | 'organ' | 'muscle' | 'spine' | 'airway'
const V: Record<string, [string, G, boolean]> = {}
const add = (lobe: string, g: G, inner: boolean, ids: string) => ids.split(' ').forEach((id) => (V[id] = [lobe, g, inner]))
// ---- brain (M2) ----
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
add('white_matter', 'hemi', false, 'cerebral_cortex')
add('cerebellum', 'cerebellum', false, 'cerebellum_hemi cerebellar_vermis')
add('cerebellum', 'cerebellum', true, 'cerebellum_white_matter')
add('brainstem', 'brainstem', false, 'midbrain pons medulla brainstem')
add('arteries', 'vessel', true, 'cerebral_arteries neck_arteries body_arteries')
// ---- CT classical (M3) ----
add('integument', 'body', false, 'skin')
add('skeleton', 'bone', true, 'skeleton')
add('respiratory', 'organ', true, 'lung')
add('respiratory', 'airway', true, 'airway')
// ---- spine (M3), cranial → caudal ----
add('nervous_spine', 'spine', true, 'spinal_cord')
add('nervous_spine', 'spine', false, 'spinal_csf')
add('spinal_column', 'spine', false, 'intervertebral_disc')
add('spinal_column', 'bone', false, 'vertebral_column')
export const VERTEBRA_LEVELS = [
  ...[1, 2, 3, 4, 5, 6, 7].map((i) => `c${i}`), ...Array.from({ length: 12 }, (_, i) => `t${i + 1}`), ...[1, 2, 3, 4, 5].map((i) => `l${i}`), 's1',
]
add('spinal_column', 'bone', false, VERTEBRA_LEVELS.map((l) => `vertebrae_${l}`).join(' '))
// ---- body fallback (TotalSegmentator open classes, mapped) ----
add('respiratory', 'organ', true, 'lung_upper_lobe lung_middle_lobe lung_lower_lobe')
add('respiratory', 'airway', true, 'trachea')
add('cardiovascular', 'organ', true, 'heart atrial_appendage')
add('cardiovascular', 'vessel', true, 'aorta pulmonary_vein pulmonary_artery brachiocephalic_trunk subclavian_artery common_carotid_artery brachiocephalic_vein superior_vena_cava inferior_vena_cava portal_vein_and_splenic_vein iliac_artery iliac_vena')
add('digestive', 'organ', true, 'liver gallbladder stomach pancreas esophagus small_bowel duodenum colon')
add('lymphatic', 'organ', true, 'spleen')
add('urinary', 'organ', true, 'kidney kidney_cyst urinary_bladder')
add('endocrine', 'organ', true, 'adrenal_gland thyroid_gland')
add('reproductive', 'organ', true, 'prostate')
add('skeleton', 'bone', false, `skull sternum costal_cartilages sacrum humerus scapula clavicula femur hip ${Array.from({ length: 12 }, (_, i) => `rib_${i + 1}`).join(' ')}`)
add('muscular', 'muscle', false, 'gluteus_maximus gluteus_medius gluteus_minimus autochthon iliopsoas')

export const VOCAB_ORDER = Object.keys(V)

/** Tree / legend order: brain lobes (M2), then body systems (M3), as in structures.py `LOBES`. */
export const LOBE_ORDER = [
  'frontal', 'parietal', 'temporal', 'occipital', 'insular', 'limbic', 'subcortical', 'ventricles', 'white_matter', 'cerebellum', 'brainstem', 'arteries',
  'integument', 'skeleton', 'spinal_column', 'nervous_spine', 'respiratory', 'cardiovascular', 'digestive', 'urinary', 'endocrine', 'lymphatic', 'reproductive', 'muscular',
  'nervous', 'sensory', 'body_regions',
]
/** Systems whose members are listed in anatomical (vocabulary) order rather than alphabetically, e.g. C1 → S1. */
export const ORDERED_LOBES = new Set(['spinal_column'])

export const lobeOf = (structure: string): string => V[structure]?.[0] ?? 'other'
export const isInner = (structure: string): boolean => V[structure]?.[2] ?? false
export const inVocab = (structure: string): boolean => structure in V
/** Vocabulary rank (unknown ids last). */
export const vocabRank = (id: string) => { const i = VOCAB_ORDER.indexOf(id); return i < 0 ? 1e6 : i }

/** UI layer for a render group (`regions.json` `group`, `layers[].id`). */
export function layerOfGroup(g: string, hemi: Hemi = 'L'): LayerId {
  if (g === 'hemi') return hemi === 'R' ? 'hemi_R' : 'hemi_L'
  if (g === 'vessel') return 'vessels'
  if (g === 'body') return 'skin'
  return g as LayerId
}

/**
 * Layer toggle a region belongs to (regions.json `group` wins; vocab is the fallback).
 * `fallback` is used for structures unknown to both (brain models: the hemisphere; body models: organs).
 */
export function layerOf(structure: string, hemi: Hemi, group?: string | null, fallback?: LayerId): LayerId {
  const hemiLayer: LayerId = hemi === 'R' ? 'hemi_R' : 'hemi_L'
  const g = group ?? (V[structure] ? (V[structure][1] === 'hemi' ? hemiLayer : V[structure][1]) : fallback ?? hemiLayer)
  return layerOfGroup(g, hemi)
}
