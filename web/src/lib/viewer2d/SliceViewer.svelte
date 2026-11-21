<!--
  SliceViewer — one canvas pane over an 8-bit slice stack (series/{id}/NNN.ext + meta.json).
  Window/level LUT, invert, zoom-at-cursor, pan, scroll/drag slices, cine, mm measurement,
  orientation letters, overlay corners, label-map overlay + hover, pinch-zoom (pointer events).
-->
<script lang="ts">
  import { onMount, untrack } from 'svelte'
  import { labelName, sliceName, type SeriesMeta } from '../api/endpoints'
  import { t } from '../i18n/index.svelte'
  import { loadStack, type Frame } from './loader'
  import * as M from './math'
  import { defaultLabelColor, type RGB, type Tool } from './types'

  interface Props {
    meta: SeriesMeta | null
    /** URL of the series folder; files are fetched as `${base}/012.webp`. */
    base: string
    index?: number
    invert?: boolean
    tool?: Tool
    showLabels?: boolean
    highlight?: number
    active?: boolean
    playing?: boolean
    fps?: number
    labelColor?: (code: number) => RGB
    paneLabel?: string
    /** Fired for user-initiated slice changes (scroll, drag, cine) — used for linked scrolling. */
    onslice?: (i: number) => void
    onhover?: (code: number, clientX: number, clientY: number) => void
    onactivate?: () => void
  }
  let {
    meta, base, index = $bindable(0), invert = false, tool = 'scroll', showLabels = false, highlight = 0,
    active = false, playing = $bindable(false), fps, labelColor = defaultLabelColor, paneLabel = '',
    onslice, onhover, onactivate,
  }: Props = $props()

  let host: HTMLDivElement
  let canvas: HTMLCanvasElement

  // Large buffers are deliberately non-reactive; renders are scheduled explicitly.
  let frames: (Frame | undefined)[] = []
  let labels: (Frame | undefined)[] = []
  const labelCanvases = new Map<number, HTMLCanvasElement>()
  let loadedCount = $state(0)
  let failedCount = $state(0)
  let waiting = $state(true)

  let ww = $state(255), wl = $state(127.5), zoom = $state(1)
  let pan = $state<M.Vec2>([0, 0])
  type Measure = { i: number; a: M.Vec2; b: M.Vec2 }
  let measures = $state<Measure[]>([])
  let draft: Measure | null = null

  let cssW = 0, cssH = 0, dpr = 1
  const lut = new Uint8ClampedArray(256)
  let imgData: ImageData | null = null
  let imgCanvas: HTMLCanvasElement | null = null
  let raf = 0

  const projection = $derived(meta ? M.isProjection(meta) : false)
  const letters = $derived(meta && !projection ? M.orientationLetters(meta.orientation) : null)
  const measurable = $derived(!!meta && M.mmPerPixel(meta, meta.w || 1, meta.h || 1) !== null)

  export function reset() {
    if (!meta) return
    const w = M.initialWindow(meta)
    ww = w.ww; wl = w.wl; zoom = 1; pan = [0, 0]; measures = []; draft = null
  }
  export function clearMeasures() { measures = []; draft = null; schedule() }
  export function zoomBy(k: number) { const r = M.zoomAt(zoom, pan, k, 0, 0); zoom = r.zoom; pan = r.pan }
  export function step(d: number) { setIndex(index + d, true) }

  function setIndex(i: number, user: boolean) {
    if (!meta) return
    const n = M.clamp(Math.round(i), 0, meta.n - 1)
    if (n === index) return
    index = n
    if (user) onslice?.(n)
  }

  // ---- loading (restarts when the series changes; previous loads are aborted) ----
  $effect(() => {
    const m = meta, b = base
    if (!m) return
    const ac = new AbortController()
    frames = new Array(m.n); labels = new Array(m.n); labelCanvases.clear()
    loadedCount = 0; failedCount = 0
    untrack(() => {
      reset()
      if (index >= m.n || index < 0) index = Math.floor(m.n / 2)
    })
    const first = untrack(() => index)
    const names = Array.from({ length: m.n }, (_, i) => `${b}/${sliceName(i, m.ext)}`)
    loadStack(names, {
      first, signal: ac.signal,
      onFrame: (i, f) => { frames[i] = f; loadedCount++; schedule() },
      onError: () => { failedCount++ },
    }).then(() => {
      if (ac.signal.aborted || !m.labels) return
      return loadStack(Array.from({ length: m.n }, (_, i) => `${b}/${labelName(i)}`), {
        first: index, signal: ac.signal,
        onFrame: (i, f) => { labels[i] = f; labelCanvases.delete(i); if (i === index) schedule() },
      })
    })
    return () => { ac.abort(); playing = false }
  })

  // ---- re-render on any visual state change ----
  $effect(() => {
    void [index, invert, ww, wl, zoom, pan, measures.length, loadedCount]
    schedule()
  })
  $effect(() => {
    void [showLabels, highlight]
    labelCanvases.clear()
    schedule()
  })

  // ---- cine ----
  $effect(() => {
    if (!playing || !meta) return
    const n = meta.n
    if (n < 2) { playing = false; return }
    const ms = 1000 / (fps ?? (projection ? 6 : 8))
    const id = setInterval(() => setIndex((untrack(() => index) + 1) % n, true), ms)
    return () => clearInterval(id)
  })

  function schedule() { if (!raf && typeof requestAnimationFrame !== 'undefined') raf = requestAnimationFrame(render) }

  function currentFrame(): Frame | undefined {
    if (frames[index]) return frames[index]
    for (let d = 1; d < frames.length; d++) {
      if (frames[index - d]) return frames[index - d]
      if (frames[index + d]) return frames[index + d]
    }
    return undefined
  }

  function fit(f: Frame) {
    const mm = meta ? M.mmPerPixel(meta, f.w, f.h) : null
    const aspect = mm ? mm[1] / mm[0] : 1
    return { ...M.fitTransform(canvas.width, canvas.height, f.w, f.h, aspect, zoom, pan, dpr), mm }
  }

  function toImage(cx: number, cy: number): M.Vec2 | null {
    const f = currentFrame()
    if (!f || !canvas) return null
    const r = canvas.getBoundingClientRect()
    const F = fit(f)
    return [((cx - r.left) * dpr - F.ox) / F.sx, ((cy - r.top) * dpr - F.oy) / F.sy]
  }

  function render() {
    raf = 0
    const ctx = canvas?.getContext('2d')
    if (!ctx) return
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    waiting = !frames[index]
    const f = currentFrame()
    if (!f || !meta) return
    const F = fit(f)

    M.buildLut(ww, wl, invert, lut)
    if (!imgData || imgData.width !== f.w || imgData.height !== f.h) {
      imgData = new ImageData(f.w, f.h)
      imgCanvas = document.createElement('canvas')
      imgCanvas.width = f.w; imgCanvas.height = f.h
    }
    M.applyLut(f.g, lut, imgData.data)
    imgCanvas!.getContext('2d')!.putImageData(imgData, 0, 0)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.setTransform(F.sx, 0, 0, F.sy, F.ox, F.oy)
    ctx.drawImage(imgCanvas!, 0, 0)

    const L = labels[index]
    if ((showLabels || highlight) && L && L.w === f.w && L.h === f.h) {
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(labelCanvas(index, L), 0, 0)
      ctx.imageSmoothingEnabled = true
    }

    // measurements on this slice
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    if (F.mm) {
      const list = measures.filter((m) => m.i === index)
      if (draft && draft.i === index) list.push(draft)
      ctx.font = `${12 * dpr}px ${getComputedStyle(host).getPropertyValue('--font') || 'sans-serif'}`
      for (const m of list) {
        const a: M.Vec2 = [m.a[0] * F.sx + F.ox, m.a[1] * F.sy + F.oy]
        const b: M.Vec2 = [m.b[0] * F.sx + F.ox, m.b[1] * F.sy + F.oy]
        ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2 * dpr
        ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke()
        ctx.fillStyle = '#fbbf24'
        for (const p of [a, b]) { ctx.beginPath(); ctx.arc(p[0], p[1], 3.5 * dpr, 0, Math.PI * 2); ctx.fill() }
        const txt = t('viewer.mmValue', { v: M.distanceMm(m.a, m.b, F.mm).toFixed(1) })
        const tw = ctx.measureText(txt).width
        const tx = Math.min(b[0] + 10 * dpr, canvas.width - tw - 8 * dpr), ty = Math.max(b[1] - 8 * dpr, 18 * dpr)
        ctx.fillStyle = 'rgba(0,0,0,.72)'
        ctx.fillRect(tx - 5 * dpr, ty - 14 * dpr, tw + 10 * dpr, 20 * dpr)
        ctx.fillStyle = '#fde68a'
        ctx.fillText(txt, tx, ty)
      }
    }
  }

  function labelCanvas(i: number, L: Frame): HTMLCanvasElement {
    const hit = labelCanvases.get(i)
    if (hit) return hit
    const { w, h, g } = L
    const cv = document.createElement('canvas')
    cv.width = w; cv.height = h
    const x = cv.getContext('2d')!
    const id = x.createImageData(w, h)
    const d = id.data
    const cache = new Map<number, RGB>()
    for (let p = 0; p < g.length; p++) {
      const c = g[p]
      if (!c) continue
      const hl = highlight !== 0 && c === highlight
      if (!showLabels && !hl) continue
      const col = p % w
      const edge = (col > 0 && g[p - 1] !== c) || (col < w - 1 && g[p + 1] !== c) || (p >= w && g[p - w] !== c) || (p < g.length - w && g[p + w] !== c)
      let rgb = cache.get(c)
      if (!rgb) { rgb = labelColor(c); cache.set(c, rgb) }
      const q = p * 4
      if (hl) { d[q] = edge ? 255 : rgb[0]; d[q + 1] = edge ? 255 : rgb[1]; d[q + 2] = edge ? 255 : rgb[2]; d[q + 3] = edge ? 255 : 120 }
      else { d[q] = rgb[0]; d[q + 1] = rgb[1]; d[q + 2] = rgb[2]; d[q + 3] = edge ? 200 : highlight ? 25 : 70 }
    }
    x.putImageData(id, 0, 0)
    labelCanvases.set(i, cv)
    return cv
  }

  function labelAt(cx: number, cy: number): number {
    const L = labels[index]
    const p = toImage(cx, cy)
    if (!L || !p) return 0
    const x = Math.floor(p[0]), y = Math.floor(p[1])
    if (x < 0 || y < 0 || x >= L.w || y >= L.h) return 0
    return L.g[y * L.w + x]
  }

  // ---- pointer / wheel / touch ----
  const pts = new Map<number, { x: number; y: number }>()
  type Drag = { x: number; y: number; tool: Tool; idx: number; ww: number; wl: number; pan: M.Vec2; zoom: number }
  let drag: Drag | null = null
  let pinch: { d0: number; z0: number; p0: M.Vec2; m0: M.Vec2 } | null = null
  let lastHover = 0

  function rel(x: number, y: number): M.Vec2 {
    const r = canvas.getBoundingClientRect()
    return [x - r.left - r.width / 2, y - r.top - r.height / 2]
  }
  function pinchGeom() {
    const [a, b] = [...pts.values()]
    return { d: Math.hypot(a.x - b.x, a.y - b.y), m: rel((a.x + b.x) / 2, (a.y + b.y) / 2) }
  }

  function onpointerdown(e: PointerEvent) {
    onactivate?.()
    canvas.setPointerCapture(e.pointerId)
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pts.size === 2) {
      const g = pinchGeom()
      pinch = { d0: Math.max(1, g.d), z0: zoom, p0: [...pan], m0: g.m }
      drag = null; draft = null
      return
    }
    if (pts.size > 2) return
    const tl: Tool = e.button === 2 ? 'wl' : e.button === 1 ? 'pan' : tool
    drag = { x: e.clientX, y: e.clientY, tool: tl, idx: index, ww, wl, pan: [...pan], zoom }
    if (tl === 'measure') {
      const p = measurable ? toImage(e.clientX, e.clientY) : null
      if (!p) { drag = null; return }
      draft = { i: index, a: p, b: [...p] }
    }
    e.preventDefault()
  }

  function onpointermove(e: PointerEvent) {
    if (pts.has(e.pointerId)) pts.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pinch && pts.size >= 2) {
      const g = pinchGeom()
      const r = M.zoomAt(pinch.z0, pinch.p0, g.d / pinch.d0, pinch.m0[0], pinch.m0[1])
      zoom = r.zoom
      pan = [r.pan[0] + g.m[0] - pinch.m0[0], r.pan[1] + g.m[1] - pinch.m0[1]]
      return
    }
    if (!drag) {
      if (onhover && (showLabels || highlight) && labels[index]) {
        const code = labelAt(e.clientX, e.clientY)
        if (code || lastHover) onhover(code, e.clientX, e.clientY)
        lastHover = code
      }
      return
    }
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y
    switch (drag.tool) {
      case 'scroll': setIndex(drag.idx + dy / 12, true); break
      case 'wl': ww = Math.max(2, drag.ww + dx * 0.8); wl = drag.wl - dy * 0.6; break
      case 'pan': pan = [drag.pan[0] + dx, drag.pan[1] + dy]; break
      case 'zoom': zoom = M.clamp(drag.zoom * Math.exp(-dy / 200), 0.3, 12); break
      case 'measure': {
        const p = toImage(e.clientX, e.clientY)
        if (p && draft) { draft.b = p; schedule() }
        break
      }
    }
  }

  function onpointerup(e: PointerEvent) {
    pts.delete(e.pointerId)
    if (pts.size < 2) pinch = null
    if (drag?.tool === 'measure' && draft) {
      const d = draft
      if (Math.hypot(d.b[0] - d.a[0], d.b[1] - d.a[1]) > 2) measures = [...measures, d]
      draft = null
      schedule()
    }
    drag = null
  }

  function onpointerleave() {
    if (lastHover) { onhover?.(0, 0, 0); lastHover = 0 }
  }

  let wheelAcc = 0
  function onwheel(e: WheelEvent) {
    e.preventDefault()
    onactivate?.()
    if (e.ctrlKey || e.metaKey) {
      const k = Math.exp(-M.clamp(e.deltaY, -100, 100) / 450)
      const [mx, my] = rel(e.clientX, e.clientY)
      const r = M.zoomAt(zoom, pan, k, mx, my)
      zoom = r.zoom; pan = r.pan
      return
    }
    if (e.deltaMode !== 0 || Math.abs(e.deltaY) >= 50) { wheelAcc = 0; setIndex(index + Math.sign(e.deltaY), true); return }
    wheelAcc += e.deltaY // trackpads: accumulate small deltas
    if (Math.abs(wheelAcc) >= 40) { setIndex(index + Math.sign(wheelAcc), true); wheelAcc = 0 }
  }

  onMount(() => {
    const ro = new ResizeObserver(() => {
      const r = host.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      cssW = r.width; cssH = r.height
      canvas.width = Math.max(1, Math.round(cssW * dpr))
      canvas.height = Math.max(1, Math.round(cssH * dpr))
      render()
    })
    ro.observe(host)
    canvas.addEventListener('wheel', onwheel, { passive: false })
    return () => { ro.disconnect(); canvas.removeEventListener('wheel', onwheel); if (raf) cancelAnimationFrame(raf) }
  })

  // ---- overlay text ----
  const pos = $derived(meta?.slices?.[index]?.pos ?? null)
  const posText = $derived.by(() => {
    if (!meta || !pos || projection) return ''
    const pick = (v: number, neg: string, plus: string) => `${v >= 0 ? plus : neg} ${Math.abs(v).toFixed(1)}`
    if (meta.plane === 'sagittal') return t('viewer.pos', { p: pick(pos[0], 'R', 'L') })
    if (meta.plane === 'coronal') return t('viewer.pos', { p: pick(pos[1], 'A', 'P') })
    if (meta.plane === 'axial') return t('viewer.pos', { p: pick(pos[2], 'I', 'S') })
    const c = M.sliceCoord(meta, index)
    return c === null ? '' : t('viewer.pos', { p: c.toFixed(1) })
  })
  const ariaText = $derived(meta
    ? `${paneLabel ? paneLabel + ': ' : ''}${meta.title} — ${t(projection ? 'viewer.frame' : 'viewer.slice', { i: index + 1, n: meta.n })}`
    : paneLabel)
</script>

<!-- role=application: the pane handles its own pointer/keyboard interaction (arrow keys = slices) -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
  class="sv"
  class:active
  data-tool={tool}
  bind:this={host}
  role="application"
  aria-roledescription={t('viewer.roledesc')}
  aria-label={ariaText}
  tabindex="0"
  onfocus={() => onactivate?.()}
>
  <canvas
    bind:this={canvas}
    {onpointerdown}
    {onpointermove}
    {onpointerup}
    onpointercancel={onpointerup}
    onpointerleave={onpointerleave}
    ondblclick={reset}
    oncontextmenu={(e) => e.preventDefault()}
  ></canvas>

  {#if meta}
    <div class="ov tl" aria-hidden="true">
      <b>{meta.title}</b><br />
      <span>{[meta.seriesNumber != null ? t('viewer.seriesNo', { n: meta.seriesNumber }) : '', meta.desc ?? ''].filter(Boolean).join(' · ')}</span>
    </div>
    <div class="ov tr" aria-hidden="true">
      {#if projection}
        {t('viewer.frame', { i: index + 1, n: meta.n })}
      {:else}
        {t('viewer.slice', { i: index + 1, n: meta.n })}
        {#if meta.thickness}<br /><span>{t('viewer.thick', { mm: meta.thickness })}</span>{/if}
      {/if}
    </div>
    <div class="ov bl" aria-hidden="true">
      W {Math.round(ww)} · L {Math.round(wl)}{invert ? ` · ${t('viewer.inverted')}` : ''}<br />
      <span>{t('viewer.zoom')} {Math.round(zoom * 100)}%</span>
    </div>
    <div class="ov br" aria-hidden="true">
      {#if projection}
        {meta.role === 'photo' || meta.role === 'document' ? '' : t('viewer.mip')}
      {:else}
        {posText}
        {#if meta.TE || meta.TR}<br /><span>TE {meta.TE ?? '–'} · TR {meta.TR ?? '–'}</span>{/if}
      {/if}
    </div>
    {#if letters}
      <div class="ori t" aria-hidden="true">{letters.top}</div>
      <div class="ori b" aria-hidden="true">{letters.bottom}</div>
      <div class="ori l" aria-hidden="true">{letters.left}</div>
      <div class="ori r" aria-hidden="true">{letters.right}</div>
    {/if}
    {#if tool === 'measure' && !measurable}
      <div class="note" role="status">{t('viewer.noMeasure')}</div>
    {/if}
    {#if failedCount > 0 && loadedCount === 0}
      <div class="note err" role="alert">{t('viewer.loadFailed')}</div>
    {:else if waiting}
      <div class="spin" aria-hidden="true"><div class="ring"></div></div>
    {/if}
  {/if}
</div>

<style>
  .sv { position: relative; background: #000; border-radius: var(--radius); overflow: hidden; min-height: 200px; height: 100%;
    box-shadow: 0 0 0 1px var(--line); outline: none; transition: box-shadow .18s; }
  .sv:focus-visible { box-shadow: 0 0 0 2px var(--accent); }
  .sv.active { box-shadow: 0 0 0 1px rgba(94,234,212,.6), 0 0 30px -10px rgba(94,234,212,.5); }
  canvas { display: block; position: absolute; inset: 0; width: 100%; height: 100%; cursor: ns-resize; touch-action: none; }
  .sv[data-tool='wl'] canvas, .sv[data-tool='measure'] canvas { cursor: crosshair; }
  .sv[data-tool='pan'] canvas { cursor: grab; }
  .sv[data-tool='zoom'] canvas { cursor: zoom-in; }
  .ov { position: absolute; font-size: 11.5px; color: #cfe3ff; text-shadow: 0 1px 3px #000; pointer-events: none; line-height: 1.45;
    padding: 10px 12px; font-family: var(--mono); max-width: 60%; overflow: hidden; text-overflow: ellipsis; }
  .ov b { color: #fff; font-family: var(--font); font-weight: 600; }
  .ov span { color: rgba(207,227,255,.62); }
  .tl { top: 0; left: 0; } .tr { top: 0; right: 0; text-align: right; }
  .bl { bottom: 0; left: 0; } .br { bottom: 0; right: 0; text-align: right; }
  .ori { position: absolute; font: 600 13px var(--font); color: rgba(94,234,212,.85); pointer-events: none; text-shadow: 0 1px 4px #000; }
  .ori.t { top: 44px; left: 50%; transform: translateX(-50%); } .ori.b { bottom: 42px; left: 50%; transform: translateX(-50%); }
  .ori.l { left: 12px; top: 50%; transform: translateY(-50%); } .ori.r { right: 12px; top: 50%; transform: translateY(-50%); }
  .spin { position: absolute; inset: 0; display: grid; place-items: center; pointer-events: none; }
  .ring { width: 34px; height: 34px; border-radius: 50%; border: 2px solid rgba(94,234,212,.15); border-top-color: var(--accent); animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .note { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 80%; text-align: center; pointer-events: none;
    background: rgba(5,7,13,.82); border: 1px solid var(--line-2); border-radius: 12px; padding: 10px 14px; font-size: 13px; color: var(--text-2); }
  .note.err { color: var(--danger); }
  @media (max-width: 520px) { .ov { font-size: 10.5px; padding: 8px 9px; } .ori.t { top: 38px; } .ori.b { bottom: 36px; } }
</style>
