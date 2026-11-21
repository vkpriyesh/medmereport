import { describe, expect, it } from 'vitest'
import { Limiter, loadOrder } from './loader'

describe('loadOrder', () => {
  it('starts at the requested slice and fans outward', () => {
    expect(loadOrder(5, 2)).toEqual([2, 3, 1, 4, 0])
    expect(loadOrder(4, 0)).toEqual([0, 1, 2, 3])
    expect(loadOrder(4, 3)).toEqual([3, 2, 1, 0])
  })
  it('covers every index exactly once and clamps', () => {
    const o = loadOrder(37, 99)
    expect(o[0]).toBe(36)
    expect([...o].sort((a, b) => a - b)).toEqual(Array.from({ length: 37 }, (_, i) => i))
    expect(loadOrder(0, 0)).toEqual([])
  })
})

describe('Limiter', () => {
  const defer = () => {
    let r!: () => void
    const p = new Promise<void>((res) => (r = res))
    return { p, r }
  }
  const flush = () => new Promise((r) => setTimeout(r, 0))

  it('never runs more than max tasks at once, in FIFO order', async () => {
    const lim = new Limiter(2)
    const started: number[] = []
    const gates = Array.from({ length: 5 }, defer)
    const all = gates.map((g, i) => lim.run(async () => { started.push(i); await g.p; return i }))
    await flush()
    expect(started).toEqual([0, 1])
    expect(lim.running).toBe(2)
    gates[0].r()
    await flush()
    expect(started).toEqual([0, 1, 2])
    gates.forEach((g) => g.r())
    expect(await Promise.all(all)).toEqual([0, 1, 2, 3, 4])
    expect(started).toEqual([0, 1, 2, 3, 4])
  })

  it('drops queued tasks whose signal was aborted', async () => {
    const lim = new Limiter(1)
    const g = defer()
    const ac = new AbortController()
    let ran = false
    const first = lim.run(() => g.p)
    const second = lim.run(async () => { ran = true }, ac.signal)
    ac.abort()
    g.r()
    await first
    await expect(second).rejects.toThrow('aborted')
    expect(ran).toBe(false)
    await flush()
    expect(lim.running).toBe(0)
  })
})
