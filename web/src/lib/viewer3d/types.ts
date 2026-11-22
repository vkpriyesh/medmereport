// Shapes of the 3D-model artifacts (docs/API_CONTRACT.md §5/§6) and the knowledge base (GET /api/knowledge).
// Model artifacts are files, not OpenAPI models, so they are typed here. The knowledge base is derived from the
// generated OpenAPI types but loosened: every field the engine may omit is optional so partial data never crashes the UI.
import type { components } from '../api/schema'

export type Hemi = 'L' | 'R' | 'M'

export interface Caveat { text: string; severity?: 'info' | 'warn' }

/** One number shown to a user — always carries how it was obtained and its limits. */
export interface Measurement {
  key: string
  label: string
  value: number | null
  unit: string
  method: string
  reference?: string | null
  caveats?: Caveat[]
}

export interface RegionInfo {
  /** `L|hippocampus` */
  key: string
  structure: string
  hemi: Hemi
  code?: number
  group?: string
  inner?: boolean
  centroid?: [number, number, number]
}

/** Camera framing / default layout chosen by the pipeline (§6). */
export type Framing = 'head' | 'body' | 'spine'
/** A layer toggle listed by the pipeline: a render group id (`hemi_L`, `organ`, `bone`, `vessel`, `body`…). */
export interface LayerInfo { id: string; default?: boolean }

export interface RegionsJson {
  backend?: string
  licence?: string
  caveats?: (string | Caveat)[]
  regions: RegionInfo[]
  /** §6 */
  pipeline?: string
  framing?: Framing | string
  layers?: LayerInfo[]
  /** Series id the 2D viewer should open first (spine: the sagittal series). */
  primary_series?: string | null
}

export interface Thumb { view: 'axial' | 'sagittal' | 'coronal' | string; img: string; series: string | null; slice: number }
export interface RegionStats { measurements?: Measurement[]; thumbs?: Thumb[] }
export interface StatsJson {
  /** Contract: `{Measurement..}` — accepted as an array or a key → Measurement map. */
  summary?: Measurement[] | Record<string, Measurement>
  regions?: Record<string, RegionStats>
}

export interface ModelStatus { pipeline?: string; version?: string; created?: string; warnings?: string[] }

// ---------- knowledge base (generated engine models, loosened) ----------
type KS = components['schemas']
/** Required keys K, everything else optional. */
type Loose<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>
export type KbStructure = Loose<Omit<KS['Structure'], 'category' | 'brodmann'>, 'name' | 'lobe'> & {
  /** Engine enum (cortex, organ, bone…); unknown values are shown humanised. */
  category?: KS['Structure']['category'] | (string & {})
  brodmann?: number[] | string | null
}
export type KbLobe = Loose<KS['Lobe'], 'name'>
export type KbVessel = Loose<KS['Vessel'], 'name'>
export type KbSequence = Loose<KS['Sequence'], 'name'>
export interface Knowledge {
  version?: number
  lang?: string
  structures: Record<string, KbStructure>
  lobes: Record<string, KbLobe>
  arteries?: { overview?: string; vessels?: Record<string, KbVessel> }
  sequences?: Record<string, KbSequence>
  /** Optional embedded per-language overrides (`i18n.hi.structures.<id>.name`…). */
  i18n?: Record<string, Partial<Pick<Knowledge, 'structures' | 'lobes' | 'arteries' | 'sequences'>>>
}

// ---------- viewer ----------
export type SelType = 'region' | 'lobe' | 'vessel'
export interface Sel { type: SelType; id: string }

/** UI layer toggles. Render groups map 1:1 except `vessel` → `vessels` and `body` → `skin` (vocab.layerOf). */
export type LayerId =
  | 'hemi_L' | 'hemi_R' | 'cerebellum' | 'brainstem' | 'deep' | 'ventricle'
  | 'organ' | 'airway' | 'spine' | 'muscle' | 'vessels' | 'neck' | 'bone' | 'skin'
export const LAYER_ORDER: LayerId[] = [
  'hemi_L', 'hemi_R', 'cerebellum', 'brainstem', 'deep', 'ventricle',
  'organ', 'airway', 'spine', 'muscle', 'vessels', 'neck', 'bone', 'skin',
]

export type Mode = 'mine' | 'learn'
/** 'anatomy' | 'lobes' | 'natural' | `data:<measurement key>` */
export type ColorBy = 'anatomy' | 'lobes' | 'natural' | `data:${string}`
export type PickBy = 'structure' | 'lobe'
export type Axis = 'x' | 'y' | 'z'
export type ViewPreset = 'left' | 'right' | 'front' | 'back' | 'top' | 'below' | 'inside'
