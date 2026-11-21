// Runes wrapper around the pure reducer in state.ts, plus facts about the loaded model.
import { buildStructureColors, type RGB } from './palette'
import { initialState, reduce, type Action, type ModelFacts, type ViewerState } from './state'
import type { LayerId } from './types'
import { LAYER_ORDER } from './types'
import { VOCAB_ORDER } from './vocab'

export interface ModelIndex {
  /** Region keys present in the GLB (`L|hippocampus`). */
  keys: string[]
  /** Vessel keys present (`V|cow`). */
  vessels: string[]
  layers: LayerId[]
  lobes: Set<string>
  /** structure id → hemis present. */
  present: Map<string, Set<'L' | 'R' | 'M'>>
}

export class ViewerStore {
  s = $state<ViewerState>(initialState([]))
  index = $state.raw<ModelIndex>({ keys: [], vessels: [], layers: [], lobes: new Set(), present: new Map() })
  colors = $state.raw<Record<string, RGB>>({})
  ready = $state(false)
  facts: ModelFacts = { regions: new Map(), vessels: new Map() }

  dispatch = (a: Action) => {
    const n = reduce(this.s, a, this.facts)
    if (n !== this.s) this.s = n
  }

  /** Called once by Scene3D after the GLB is parsed. */
  init(facts: ModelFacts, extraLayers: LayerId[]) {
    this.facts = facts
    const layers = new Set<LayerId>(extraLayers)
    const lobes = new Set<string>()
    const present = new Map<string, Set<'L' | 'R' | 'M'>>()
    const lobeBy = new Map<string, string>()
    for (const [k, r] of facts.regions) {
      layers.add(r.layer)
      lobes.add(r.lobe)
      const [h, st] = [k.slice(0, 1) as 'L' | 'R' | 'M', k.slice(2)]
      if (!present.has(st)) present.set(st, new Set())
      present.get(st)!.add(h)
      lobeBy.set(st, r.lobe)
    }
    for (const l of facts.vessels.values()) layers.add(l)
    const ordered = LAYER_ORDER.filter((l) => layers.has(l))
    const structs = [...present.keys()].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
    this.colors = buildStructureColors(structs, (id) => lobeBy.get(id) ?? 'other')
    this.index = { keys: [...facts.regions.keys()], vessels: [...facts.vessels.keys()], layers: ordered, lobes, present }
    this.s = { ...initialState(ordered), mode: this.s.mode }
    this.ready = true
  }
}

const rank = (id: string) => { const i = VOCAB_ORDER.indexOf(id); return i < 0 ? 1e6 : i }
