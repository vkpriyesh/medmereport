// Explorer state + a pure reducer (unit-tested). The Svelte store (store.svelte.ts) only wraps this.
import type { Axis, ColorBy, LayerId, Mode, PickBy, Sel, ViewPreset } from './types'

export interface QuizState { target: string; score: number; n: number; tries: number; last: { ok: boolean; picked: string | null } | null; revealing: boolean }

export interface ViewerState {
  mode: Mode
  colorBy: ColorBy
  pickBy: PickBy
  sel: Sel | null
  hover: Sel | null
  /** Layer visibility; only layers present in the model are listed. */
  show: Partial<Record<LayerId, boolean>>
  xray: boolean
  isolate: boolean
  explode: number
  cut: number
  cutAxis: Axis
  rotate: boolean
  tour: { i: number } | null
  quiz: QuizState | null
}

export const DEFAULT_SHOW: Record<LayerId, boolean> = {
  hemi_L: true, hemi_R: true, cerebellum: true, brainstem: true, deep: true, ventricle: true,
  vessels: false, neck: false, bone: false, skin: false,
}

export function initialState(layers: LayerId[]): ViewerState {
  return {
    mode: 'mine', colorBy: 'anatomy', pickBy: 'structure', sel: null, hover: null,
    show: Object.fromEntries(layers.map((l) => [l, DEFAULT_SHOW[l]])),
    xray: false, isolate: false, explode: 0, cut: 1, cutAxis: 'y', rotate: false, tour: null, quiz: null,
  }
}

/** Facts the reducer needs about the loaded model (no three.js). */
export interface ModelFacts {
  /** Region key → its layer and whether it is an inner structure. */
  regions: Map<string, { layer: LayerId; inner: boolean; lobe: string }>
  /** Vessel key → its layer. */
  vessels: Map<string, LayerId>
}

export type Action =
  | { type: 'mode'; mode: Mode }
  | { type: 'colorBy'; colorBy: ColorBy }
  | { type: 'pickBy'; pickBy: PickBy }
  | { type: 'select'; sel: Sel | null }
  | { type: 'hover'; sel: Sel | null }
  | { type: 'layer'; layer: LayerId; on?: boolean }
  | { type: 'xray'; on?: boolean }
  | { type: 'isolate'; on?: boolean }
  | { type: 'explode'; value: number }
  | { type: 'cut'; value: number }
  | { type: 'cutAxis'; axis: Axis }
  | { type: 'rotate'; on?: boolean }
  | { type: 'view'; view: ViewPreset }
  | { type: 'reset' }
  | { type: 'tour'; step: number; lobe: string; xray: boolean; hideR: boolean }
  | { type: 'tourEnd' }
  | { type: 'quizStart'; target: string }
  | { type: 'quizNext'; target: string }
  | { type: 'quizAnswer'; picked: string | null }
  | { type: 'quizSkip' }
  | { type: 'quizEnd' }

const same = (a: Sel | null, b: Sel | null) => a?.type === b?.type && a?.id === b?.id
const has = (s: ViewerState, l: LayerId) => l in s.show

/** Normalise a selection for the current pick mode (structure → its lobe when picking whole lobes). */
export function normaliseSel(sel: Sel | null, pickBy: PickBy, facts: ModelFacts): Sel | null {
  if (sel?.type === 'region' && pickBy === 'lobe') {
    const r = facts.regions.get(sel.id)
    if (r) return { type: 'lobe', id: r.lobe }
  }
  return sel
}

export function reduce(s: ViewerState, a: Action, facts: ModelFacts): ViewerState {
  switch (a.type) {
    case 'mode':
      if (a.mode === s.mode) return s
      return { ...s, mode: a.mode, ...(a.mode === 'mine' ? { tour: null, quiz: null } : {}) }
    case 'colorBy':
      return { ...s, colorBy: a.colorBy }
    case 'pickBy': {
      const sel = normaliseSel(s.sel, a.pickBy, facts)
      return { ...s, pickBy: a.pickBy, sel }
    }
    case 'select': {
      const sel = normaliseSel(a.sel, s.pickBy, facts)
      const next: ViewerState = { ...s, sel, isolate: sel ? s.isolate : false }
      // make sure the selected thing is visible
      if (sel?.type === 'region') {
        const r = facts.regions.get(sel.id)
        if (r) {
          if (has(s, r.layer) && !s.show[r.layer]) next.show = { ...s.show, [r.layer]: true }
          if (r.inner && !s.xray) next.xray = true
        }
      } else if (sel?.type === 'vessel') {
        const l = facts.vessels.get(sel.id)
        if (l && has(s, l) && !s.show[l]) next.show = { ...s.show, [l]: true }
      }
      return next
    }
    case 'hover':
      return same(a.sel, s.hover) ? s : { ...s, hover: a.sel }
    case 'layer': {
      if (!has(s, a.layer)) return s
      const on = a.on ?? !s.show[a.layer]
      return on === s.show[a.layer] ? s : { ...s, show: { ...s.show, [a.layer]: on } }
    }
    case 'xray': {
      const on = a.on ?? !s.xray
      const show = { ...s.show }
      // X-ray reveals what is inside
      if (on) for (const l of ['deep', 'ventricle', 'vessels'] as LayerId[]) if (has(s, l)) show[l] = true
      return { ...s, xray: on, show }
    }
    case 'isolate': {
      const on = a.on ?? !s.isolate
      return { ...s, isolate: on && !!s.sel }
    }
    case 'explode':
      return { ...s, explode: clamp01(a.value) }
    case 'cut':
      return { ...s, cut: clamp01(a.value) }
    case 'cutAxis':
      return { ...s, cutAxis: a.axis }
    case 'rotate':
      return { ...s, rotate: a.on ?? !s.rotate }
    case 'view':
      if (a.view === 'inside' && has(s, 'hemi_R')) return { ...s, show: { ...s.show, hemi_R: false } }
      return s
    case 'reset': {
      const show = Object.fromEntries(Object.keys(s.show).map((l) => [l, DEFAULT_SHOW[l as LayerId]]))
      return { ...s, sel: null, hover: null, show, xray: false, isolate: false, explode: 0, cut: 1, rotate: false, tour: null, quiz: null }
    }
    case 'tour': {
      const show = { ...s.show }
      if (has(s, 'hemi_R')) show.hemi_R = !a.hideR
      return { ...s, mode: 'learn', quiz: null, tour: { i: a.step }, sel: { type: 'lobe', id: a.lobe }, xray: a.xray, isolate: false, show }
    }
    case 'tourEnd': {
      if (!s.tour) return s
      const show = { ...s.show }
      if (has(s, 'hemi_R')) show.hemi_R = true
      return { ...s, tour: null, xray: false, sel: null, show }
    }
    case 'quizStart':
      return { ...s, mode: 'learn', tour: null, sel: null, isolate: false, quiz: { target: a.target, score: 0, n: 0, tries: 0, last: null, revealing: false } }
    case 'quizNext':
      return s.quiz ? { ...s, sel: null, quiz: { ...s.quiz, target: a.target, tries: 0, last: null, revealing: false } } : s
    case 'quizAnswer': {
      const q = s.quiz
      if (!q || q.revealing) return s
      const ok = a.picked === q.target
      if (ok) return { ...s, sel: { type: 'region', id: q.target }, quiz: { ...q, score: q.score + 1, n: q.n + 1, last: { ok, picked: a.picked }, revealing: true } }
      const tries = q.tries + 1
      const giveUp = tries >= 2
      return { ...s, sel: giveUp ? { type: 'region', id: q.target } : s.sel, quiz: { ...q, tries, n: giveUp ? q.n + 1 : q.n, last: { ok, picked: a.picked }, revealing: giveUp } }
    }
    case 'quizSkip': {
      const q = s.quiz
      if (!q || q.revealing) return s
      return { ...s, sel: { type: 'region', id: q.target }, quiz: { ...q, n: q.n + 1, last: null, revealing: true } }
    }
    case 'quizEnd':
      return s.quiz ? { ...s, quiz: null, sel: null } : s
  }
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0))

// ---------- guided tour + quiz helpers ----------
export interface TourStep { lobe: string; view: [number, number, number]; xray?: boolean; hideR?: boolean }
export const TOUR: TourStep[] = [
  { lobe: 'frontal', view: [0.6, 0.35, 1] },
  { lobe: 'parietal', view: [0.5, 0.8, -0.4] },
  { lobe: 'temporal', view: [1, -0.1, 0.1] },
  { lobe: 'occipital', view: [0.3, 0.2, -1] },
  { lobe: 'insular', view: [1, 0.1, 0.2], xray: true },
  { lobe: 'limbic', view: [-1, 0.1, 0], hideR: true },
  { lobe: 'subcortical', view: [0.6, 0.5, 0.8], xray: true },
  { lobe: 'ventricles', view: [0.6, 0.5, 0.8], xray: true },
  { lobe: 'cerebellum', view: [0.4, -0.2, -1] },
  { lobe: 'brainstem', view: [-1, -0.1, 0.2], hideR: true },
]

/** Tour steps for lobes that actually have meshes in this model. */
export const tourFor = (lobes: Set<string>) => TOUR.filter((s) => lobes.has(s.lobe))

/** Quiz pool: visible, outer regions. */
export function quizPool(s: ViewerState, facts: ModelFacts): string[] {
  const out: string[] = []
  for (const [k, r] of facts.regions) if (!r.inner && s.show[r.layer]) out.push(k)
  return out
}

/** Pick a question target, avoiding an immediate repeat when possible. */
export function pickQuestion(pool: string[], prev: string | null, rnd: () => number = Math.random): string | null {
  if (!pool.length) return null
  const c = pool.length > 1 && prev ? pool.filter((k) => k !== prev) : pool
  return c[Math.min(c.length - 1, Math.floor(rnd() * c.length))]
}
