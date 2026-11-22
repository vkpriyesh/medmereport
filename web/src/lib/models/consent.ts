// Pure logic behind the model-download consent dialog (T7.7): when to offer a download before a brain build, how big
// it is, and the download state machine. No DOM here, so it is unit-tested in node (consent.test.ts).
import type { JobInfo } from '../api/client'
import type { ModelBundle, ModelsInfo } from '../api/endpoints'

export type Offer =
  /** Offer `bundle` before building; `canSkip`: a usable (lesser) brain backend exists, so building without it works. */
  | { kind: 'offer'; bundle: ModelBundle; canSkip: boolean }
  /** No brain backend and downloads are turned off (MEDMEREPORT_OFFLINE=1): explain instead of offering. */
  | { kind: 'offline'; bundle: ModelBundle | null }

/**
 * Should "Build my 3D model" for a brain MR first offer a model download? `null` → just build.
 * - SynthSeg usable, or nothing better to get → no dialog.
 * - Only the basic atlas installed → offer the better bundle once; "Build without it" is available (and remembered via `dismissed`).
 * - Nothing installed → offer (no skip: the build would fail). Offline → explain, unless the atlas already works.
 */
export function brainOffer(info: ModelsInfo | null | undefined, dismissed: ReadonlySet<string> = new Set()): Offer | null {
  if (!info) return null
  const { state, suggest } = info.brain
  if (state === 'synthseg' || !suggest) return null
  const bundle = info.bundles.find((b) => b.id === suggest) ?? null
  if (info.offline) return state === 'none' ? { kind: 'offline', bundle } : null
  if (!bundle || bundle.installed || !bundle.usable) return null
  if (state !== 'none' && dismissed.has(bundle.id)) return null
  return { kind: 'offer', bundle, canSkip: state !== 'none' }
}

/** The bundle to advertise on Home ("Brain models: not installed — Download (321 MB)"), or null when nothing to get. */
export function brainBundle(info: ModelsInfo | null | undefined): ModelBundle | null {
  const s = info?.brain.suggest
  const b = s ? info?.bundles.find((x) => x.id === s) : undefined
  return b && !b.installed && b.usable ? b : null
}

/** Bytes → "321 MB" / "14 MB" / "0.2 MB" / "1.2 GB" (decimal units, like download sites). */
export function formatSize(bytes: number): string {
  const mb = Math.max(0, bytes) / 1e6
  if (mb >= 1000) return `${(mb / 1000).toFixed(1)} GB`
  if (mb >= 10) return `${Math.round(mb)} MB`
  return `${mb.toFixed(1)} MB`
}

// ---------------- download state machine ----------------
export type Phase = 'ask' | 'starting' | 'downloading' | 'cancelling' | 'done' | 'failed'
export interface DlState {
  phase: Phase
  pct: number
  /** engine progress text ("12.3 / 320.5 MB") */
  detail: string
  /** stable error code (`checksum_mismatch`, `download_failed`, `offline`, `blocked_host`, `net`, `http_403`, …) */
  error: string | null
  /** the previous attempt was cancelled by the user (shown as a calm note, not an error) */
  cancelled: boolean
  jobId: string | null
}
export type DlEvent =
  | { type: 'start' }
  | { type: 'started'; job: JobInfo }
  | { type: 'startError'; status?: number }
  | { type: 'progress'; pct: number; msg?: string }
  | { type: 'cancel' }
  | { type: 'end'; job: JobInfo }

export const initialDl: DlState = { phase: 'ask', pct: 0, detail: '', error: null, cancelled: false, jobId: null }

export const busy = (s: DlState) => s.phase === 'starting' || s.phase === 'downloading' || s.phase === 'cancelling'

export function dlReduce(s: DlState, e: DlEvent): DlState {
  switch (e.type) {
    case 'start':
      return busy(s) ? s : { ...initialDl, phase: 'starting' }
    case 'started':
      return s.phase === 'starting' ? { ...s, phase: 'downloading', jobId: e.job.id } : s
    case 'startError':
      return { ...s, phase: 'failed', error: e.status ? (e.status === 403 ? 'offline' : `http_${e.status}`) : 'net' }
    case 'progress':
      if (s.phase !== 'downloading' && s.phase !== 'cancelling') return s
      return { ...s, pct: Math.max(s.pct, Math.max(0, Math.min(100, e.pct))), detail: e.msg ?? s.detail }
    case 'cancel':
      return s.phase === 'downloading' ? { ...s, phase: 'cancelling' } : s
    case 'end': {
      const j = e.job
      if (j.status === 'done') return { ...s, phase: 'done', pct: 100, error: null }
      if (j.status === 'cancelled') return { ...initialDl, cancelled: true }
      const code = (j.result as { code?: unknown } | null | undefined)?.code
      return { ...s, phase: 'failed', error: typeof code === 'string' ? code : 'internal', jobId: null }
    }
  }
}

/** Session memory of "Build without it" so the offer is not repeated on every build. */
const DISMISS_KEY = 'mmr-models-dismissed'
export function dismissedBundles(): Set<string> {
  try { return new Set(JSON.parse(sessionStorage.getItem(DISMISS_KEY) ?? '[]') as string[]) } catch { return new Set() }
}
export function dismissBundle(id: string): void {
  try { sessionStorage.setItem(DISMISS_KEY, JSON.stringify([...dismissedBundles(), id])) } catch { /* storage unavailable */ }
}
