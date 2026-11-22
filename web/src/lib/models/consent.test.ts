import { describe, expect, it } from 'vitest'
import type { JobInfo } from '../api/client'
import type { ModelBundle, ModelsInfo } from '../api/endpoints'
import { wrapIndex } from '../components/focustrap'
import { brainBundle, brainOffer, busy, dlReduce, formatSize, initialDl, type DlState } from './consent'

const bundle = (id: string, over: Partial<ModelBundle> = {}): ModelBundle => ({
  id, title: id, enables: 'x', size: 320_504_917, download_size: 320_504_917, installed: false, partial: false, usable: true,
  needs: null, pipelines: ['brain_mr'], hosts: ['github.com'], credits: [{ licence: 'Apache-2.0', attribution: 'a' }], assets: [], ...over,
})
const info = (state: 'none' | 'atlas' | 'synthseg', suggest: string | null, over: Partial<ModelsInfo> = {}, b: ModelBundle[] = [bundle('atlas-ho', { size: 14_472_778, download_size: 14_472_778, hosts: ['templateflow.s3.amazonaws.com'] }), bundle('synthseg')]): ModelsInfo => ({
  offline: false, bundles: b, brain: { state, suggest }, ...over,
})
const job = (status: JobInfo['status'], result: Record<string, unknown> | null = null): JobInfo => ({ id: 'j1', kind: 'models', status, stage: '', pct: 0, created: '2026-01-01T00:00:00Z', result })

describe('brainOffer', () => {
  it('no listing or best backend installed → just build', () => {
    expect(brainOffer(null)).toBeNull()
    expect(brainOffer(info('synthseg', null))).toBeNull()
  })
  it('nothing installed → offer without a skip', () => {
    const o = brainOffer(info('none', 'synthseg'))
    expect(o).toMatchObject({ kind: 'offer', canSkip: false })
    expect(o?.bundle?.id).toBe('synthseg')
  })
  it('atlas only → offer with skip, not repeated once dismissed', () => {
    expect(brainOffer(info('atlas', 'synthseg'))).toMatchObject({ kind: 'offer', canSkip: true })
    expect(brainOffer(info('atlas', 'synthseg'), new Set(['synthseg']))).toBeNull()
    // a dismissal never hides a required download
    expect(brainOffer(info('none', 'synthseg'), new Set(['synthseg']))).toMatchObject({ kind: 'offer' })
  })
  it('offline: explain when nothing works, stay quiet when the atlas does', () => {
    expect(brainOffer(info('none', 'synthseg', { offline: true }))).toMatchObject({ kind: 'offline' })
    expect(brainOffer(info('atlas', 'synthseg', { offline: true }))).toBeNull()
  })
  it('unusable or already installed bundle → no offer', () => {
    expect(brainOffer(info('atlas', 'synthseg', {}, [bundle('synthseg', { usable: false })]))).toBeNull()
    expect(brainOffer(info('atlas', 'synthseg', {}, [bundle('synthseg', { installed: true })]))).toBeNull()
  })
  it('brainBundle for the Home status line', () => {
    expect(brainBundle(info('none', 'atlas-ho'))?.id).toBe('atlas-ho')
    expect(brainBundle(info('synthseg', null))).toBeNull()
  })
})

describe('formatSize', () => {
  it('uses decimal units', () => {
    expect(formatSize(320_504_917)).toBe('321 MB')
    expect(formatSize(14_472_778)).toBe('14 MB')
    expect(formatSize(159_538)).toBe('0.2 MB')
    expect(formatSize(1_250_000_000)).toBe('1.3 GB')
  })
})

describe('download state machine', () => {
  const run = (...evs: Parameters<typeof dlReduce>[1][]): DlState => evs.reduce(dlReduce, initialDl)
  it('success path', () => {
    const s = run({ type: 'start' }, { type: 'started', job: job('running') }, { type: 'progress', pct: 40, msg: '128 / 320 MB' })
    expect(s).toMatchObject({ phase: 'downloading', pct: 40, detail: '128 / 320 MB', jobId: 'j1' })
    expect(busy(s)).toBe(true)
    expect(dlReduce(s, { type: 'end', job: job('done') })).toMatchObject({ phase: 'done', pct: 100 })
  })
  it('progress never goes backwards and is ignored when idle', () => {
    const s = run({ type: 'start' }, { type: 'started', job: job('running') }, { type: 'progress', pct: 50 }, { type: 'progress', pct: 20 })
    expect(s.pct).toBe(50)
    expect(run({ type: 'progress', pct: 30 }).pct).toBe(0)
  })
  it('cancel returns to the offer with a calm note', () => {
    const s = run({ type: 'start' }, { type: 'started', job: job('running') }, { type: 'cancel' })
    expect(s.phase).toBe('cancelling')
    expect(dlReduce(s, { type: 'end', job: job('cancelled') })).toMatchObject({ phase: 'ask', cancelled: true, error: null })
  })
  it('failures carry the engine code', () => {
    const s = run({ type: 'start' }, { type: 'started', job: job('running') }, { type: 'end', job: job('failed', { code: 'checksum_mismatch' }) })
    expect(s).toMatchObject({ phase: 'failed', error: 'checksum_mismatch' })
    expect(run({ type: 'start' }, { type: 'startError', status: 403 }).error).toBe('offline')
    expect(run({ type: 'start' }, { type: 'startError' }).error).toBe('net')
    expect(run({ type: 'start' }, { type: 'end', job: job('failed') }).error).toBe('internal')
  })
  it('a second start while busy is ignored (no double download)', () => {
    const s = run({ type: 'start' }, { type: 'started', job: job('running') })
    expect(dlReduce(s, { type: 'start' })).toBe(s)
  })
})

describe('focus trap', () => {
  it('wraps Tab and Shift+Tab', () => {
    expect(wrapIndex(3, 2, false)).toBe(0)
    expect(wrapIndex(3, 0, true)).toBe(2)
    expect(wrapIndex(3, -1, false)).toBe(0)
    expect(wrapIndex(3, -1, true)).toBe(2)
    expect(wrapIndex(0, 0, false)).toBe(-1)
  })
})
