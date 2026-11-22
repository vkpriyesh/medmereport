import type { Namer } from '../viewer3d/kb'
import type { ViewerStore } from '../viewer3d/store.svelte'
import type { StudyInfo } from '../api/endpoints'
import type { Framing, Knowledge, Measurement, ModelStatus, RegionInfo, RegionsJson, Sel, StatsJson } from '../viewer3d/types'

/** Everything a card needs, built once by the 3D route. */
export interface CardCtx {
  studyId: string
  kb: Knowledge
  namer: Namer
  stats: StatsJson | null
  regions: RegionsJson | null
  regionByKey: Map<string, RegionInfo>
  status: ModelStatus | null
  store: ViewerStore
  /** Localised label for a measurement (UI dictionary first, engine label as fallback). */
  measureLabel: (m: Measurement) => string
  act: {
    select: (sel: Sel | null, fly?: boolean) => void
    tour: () => void
    tourStep: (d: number) => void
    tourEnd: () => void
    quiz: () => void
    showVessels: () => void
  }
  tourLen: number
  /** Model framing (§6) and a translator that prefers the framing's wording (`key.body`). */
  framing: Framing
  ft: (key: string, vars?: Record<string, string | number>) => string
  /** The study (for 2D-viewer links); null while loading or if it failed. */
  study: StudyInfo | null
}
