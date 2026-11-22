// Runes wrapper around the pure reducer in state.ts, plus facts about the loaded model.
import { buildStructureColors, type RGB } from './palette'
import { hasBrain, planLayers, wordingOf, type Wording } from './framing'
import { initialState, reduce, type Action, type ModelFacts, type ViewerState } from './state'
import type { Framing, LayerId, RegionsJson } from './types'
import { vocabRank } from './vocab'

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
  /** Camera framing / wording of the loaded model (§6). */
  framing = $state<Framing>('head')
  /** The model has brain regions (enables X-ray cortex, Inside view, Lobes colouring, the brain tour). */
  brain = $state(true)
  /** Wording variant for UI strings (`framedKey`): the framing, or `vessels` for a head model without a brain. */
  wording = $state<Wording>('head')
  facts: ModelFacts = { regions: new Map(), vessels: new Map() }

  dispatch = (a: Action) => {
    const n = reduce(this.s, a, this.facts)
    if (n !== this.s) this.s = n
  }

  /** Called once by Scene3D after the GLB is parsed. */
  init(facts: ModelFacts, extraLayers: LayerId[], model: { framing?: Framing; regions?: RegionsJson | null } = {}) {
    this.facts = facts
    const framing = model.framing ?? 'head'
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
    const plan = planLayers(layers, model.regions, framing)
    const structs = [...present.keys()].sort((a, b) => vocabRank(a) - vocabRank(b) || a.localeCompare(b))
    this.colors = buildStructureColors(structs, (id) => lobeBy.get(id) ?? 'other')
    this.index = { keys: [...facts.regions.keys()], vessels: [...facts.vessels.keys()], layers: plan.layers, lobes, present }
    this.framing = framing
    this.brain = hasBrain(lobes)
    this.wording = wordingOf(framing, this.brain)
    this.s = { ...initialState(plan.layers, plan.defaults), mode: this.s.mode }
    this.ready = true
  }
}
