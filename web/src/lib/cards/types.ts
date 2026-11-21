import type { Namer } from '../viewer3d/kb'
import type { ViewerStore } from '../viewer3d/store.svelte'
import type { Knowledge, Measurement, ModelStatus, RegionInfo, RegionsJson, Sel, StatsJson } from '../viewer3d/types'

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
}
