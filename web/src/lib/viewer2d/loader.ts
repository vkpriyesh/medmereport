// Slice / label-map loading with a shared concurrency limit and AbortSignal cancellation.
// Frames are decoded to a single 8-bit channel (R) — slices are greyscale, label maps carry the code in R.

export interface Frame { g: Uint8Array; w: number; h: number }

/** Load order: `first`, then outward (first+1, first-1, first+2, …) so nearby slices arrive first. */
export function loadOrder(n: number, first: number): number[] {
  if (n <= 0) return []
  const f = Math.max(0, Math.min(n - 1, Math.round(first)))
  const out = [f]
  for (let d = 1; out.length < n; d++) {
    if (f + d < n) out.push(f + d)
    if (f - d >= 0) out.push(f - d)
  }
  return out
}

export class AbortedError extends Error { constructor() { super('aborted'); this.name = 'AbortError' } }

/** FIFO semaphore; queued tasks whose signal aborts are dropped without running. */
export class Limiter {
  private active = 0
  private queue: { run: () => void; signal?: AbortSignal; reject: (e: unknown) => void }[] = []
  constructor(public readonly max: number) {}
  get pending() { return this.queue.length }
  get running() { return this.active }

  run<T>(fn: () => Promise<T>, signal?: AbortSignal): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const start = () => {
        if (signal?.aborted) { reject(new AbortedError()); this.next(); return }
        this.active++
        fn().then(resolve, reject).finally(() => { this.active--; this.next() })
      }
      if (this.active < this.max) start()
      else this.queue.push({ run: start, signal, reject })
    })
  }
  private next() {
    while (this.queue.length && this.active < this.max) {
      const job = this.queue.shift()!
      if (job.signal?.aborted) { job.reject(new AbortedError()); continue }
      job.run()
      return
    }
  }
}

/** One limiter for the whole app so 4 panes don't flood the engine. */
export const sharedLimiter = new Limiter(6)

let scratch: { cv: OffscreenCanvas | HTMLCanvasElement; ctx: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D } | null = null
function scratchCtx(w: number, h: number) {
  if (!scratch) {
    const cv: OffscreenCanvas | HTMLCanvasElement = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(w, h) : document.createElement('canvas')
    const ctx = cv.getContext('2d', { willReadFrequently: true }) as OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D
    scratch = { cv, ctx }
  }
  if (scratch.cv.width !== w) scratch.cv.width = w
  if (scratch.cv.height !== h) scratch.cv.height = h
  return scratch.ctx
}

/** Fetch + decode one image into a single-channel frame (natural size). */
export async function loadFrame(url: string, signal?: AbortSignal): Promise<Frame> {
  const r = await fetch(url, { credentials: 'same-origin', signal })
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  const bmp = await createImageBitmap(await r.blob())
  if (signal?.aborted) { bmp.close(); throw new AbortedError() }
  const w = bmp.width, h = bmp.height
  const ctx = scratchCtx(w, h)
  ctx.clearRect(0, 0, w, h)
  ctx.drawImage(bmp, 0, 0)
  bmp.close()
  const d = ctx.getImageData(0, 0, w, h).data
  const g = new Uint8Array(w * h)
  for (let p = 0, q = 0; p < g.length; p++, q += 4) g[p] = d[q]
  return { g, w, h }
}

export interface StackOptions {
  first?: number
  signal: AbortSignal
  limiter?: Limiter
  onFrame: (i: number, f: Frame) => void
  onError?: (i: number, e: unknown) => void
}

/** Load all frames of a stack, nearest-to-`first` first. Resolves when all settle or on abort. */
export async function loadStack(urls: string[], o: StackOptions): Promise<void> {
  const lim = o.limiter ?? sharedLimiter
  await Promise.all(loadOrder(urls.length, o.first ?? 0).map((i) =>
    lim.run(() => loadFrame(urls[i], o.signal), o.signal).then(
      (f) => { if (!o.signal.aborted) o.onFrame(i, f) },
      (e) => { if (!o.signal.aborted) o.onError?.(i, e) },
    )))
}
