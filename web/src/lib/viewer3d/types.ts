// Shapes of the M2 3D-model artifacts (docs/API_CONTRACT.md §5) and the knowledge base (GET /api/knowledge).
// Every field the engine may omit is optional so a partial artifact never crashes the UI.

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

export interface RegionsJson {
  backend?: string
  licence?: string
  caveats?: (string | Caveat)[]
  regions: RegionInfo[]
}

export interface Thumb { view: 'axial' | 'sagittal' | 'coronal' | string; img: string; series: string | null; slice: number }
export interface RegionStats { measurements?: Measurement[]; thumbs?: Thumb[] }
export interface StatsJson {
  /** Contract: `{Measurement..}` — accepted as an array or a key → Measurement map. */
  summary?: Measurement[] | Record<string, Measurement>
  regions?: Record<string, RegionStats>
}

export interface ModelStatus { pipeline?: string; version?: string; created?: string; warnings?: string[] }

// ---------- knowledge base ----------
export interface KbStructure {
  name: string
  aka?: string[]
  lobe: string
  category?: string
  tagline?: string
  overview?: string
  functions?: string[]
  connections?: string[]
  clinical?: string[]
  lateralization?: string
  fact?: string
  brodmann?: number[] | string | null
  blood_supply?: string
  sources?: string[]
}
export interface KbLobe { name: string; tagline?: string; overview?: string; functions?: string[]; clinical?: string[]; fact?: string }
export interface KbVessel { name: string; supplies?: string; note?: string }
export interface KbSequence { name: string; what?: string; why?: string }
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

export type LayerId = 'hemi_L' | 'hemi_R' | 'cerebellum' | 'brainstem' | 'deep' | 'ventricle' | 'vessels' | 'neck' | 'bone' | 'skin'
export const LAYER_ORDER: LayerId[] = ['hemi_L', 'hemi_R', 'cerebellum', 'brainstem', 'deep', 'ventricle', 'vessels', 'neck', 'bone', 'skin']

export type Mode = 'mine' | 'learn'
/** 'anatomy' | 'lobes' | 'natural' | `data:<measurement key>` */
export type ColorBy = 'anatomy' | 'lobes' | 'natural' | `data:${string}`
export type PickBy = 'structure' | 'lobe'
export type Axis = 'x' | 'y' | 'z'
export type ViewPreset = 'left' | 'right' | 'front' | 'back' | 'top' | 'below' | 'inside'
