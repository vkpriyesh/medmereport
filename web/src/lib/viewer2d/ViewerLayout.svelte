<!--
  ViewerLayout — toolbar + 1–4 SliceViewer panes + slice scrubber, with linked scrolling
  (by physical position along the slice normal) and keyboard shortcuts.
-->
<script lang="ts">
  import { untrack } from 'svelte'
  import type { SeriesMeta } from '../api/endpoints'
  import Icon from '../components/Icon.svelte'
  import { t } from '../i18n/index.svelte'
  import * as M from './math'
  import SliceViewer from './SliceViewer.svelte'
  import ViewerToolbar from './ViewerToolbar.svelte'
  import { defaultLabelColor, type ActiveInfo, type LayoutN, type PaneState, type RGB, type Tool } from './types'

  interface Props {
    metas: SeriesMeta[]
    /** URL of a series folder (files are `${base}/000.webp`). */
    seriesBase: (seriesId: string) => string
    initialSeries?: string | null
    initialLayout?: LayoutN
    layouts?: LayoutN[]
    labelName?: (meta: SeriesMeta, code: number) => string | null
    labelColor?: (code: number) => RGB
    onchange?: (s: ActiveInfo) => void
    onhoverlabel?: (name: string | null) => void
  }
  let {
    metas, seriesBase, initialSeries = null, initialLayout = 1, layouts = [1, 2, 3, 4],
    labelName, labelColor = defaultLabelColor, onchange, onhoverlabel,
  }: Props = $props()

  const byId = $derived(new Map(metas.map((m) => [m.id, m])))
  let panes = $state<PaneState[]>([])
  let active = $state(0)
  let layout = $state<LayoutN>(1)
  let linked = $state(true)
  let tool = $state<Tool>('scroll')
  let labelsOn = $state(false)
  let hover = $state<{ name: string; x: number; y: number } | null>(null)
  const viewers: (SliceViewer | undefined)[] = $state([])

  const mk = (m: SeriesMeta): PaneState => ({ seriesId: m.id, index: Math.floor(m.n / 2), playing: false, invert: false })
  const cur = $derived(panes[active])
  const curMeta = $derived(cur ? byId.get(cur.seriesId) ?? null : null)
  const canMeasure = $derived(!!curMeta && M.mmPerPixel(curMeta, curMeta.w || 1, curMeta.h || 1) !== null)
  const labelsAvailable = $derived(panes.some((p) => byId.get(p.seriesId)?.labels))

  // initialise once metas arrive
  $effect(() => {
    if (!metas.length || untrack(() => panes.length)) return
    untrack(() => {
      const first = (initialSeries && byId.get(initialSeries)) || metas[0]
      panes = [mk(first)]
      setLayout(Math.min(initialLayout, metas.length) as LayoutN)
    })
  })

  $effect(() => {
    const p = panes[active]
    const m = p ? byId.get(p.seriesId) : null
    if (p && m) {
      const snapshot = { meta: m, index: p.index, pane: active, panes: $state.snapshot(panes) as PaneState[] }
      untrack(() => onchange?.(snapshot))
    }
  })

  /** Load a series into the active pane. */
  export function show(seriesId: string) {
    const m = byId.get(seriesId)
    if (!m || !panes.length) return
    if (panes[active]?.seriesId === seriesId) return
    panes[active] = mk(m)
    if (linked) queueMicrotask(() => syncTo(active))
  }

  function setLayout(n: LayoutN) {
    n = Math.max(1, Math.min(n, 4)) as LayoutN
    const used = panes.map((p) => p.seriesId)
    const m0 = panes[0] ? byId.get(panes[0].seriesId) : metas[0]
    const next = [...panes.slice(0, n)]
    while (next.length < n) {
      const pick =
        metas.find((s) => !used.includes(s.id) && s.region === m0?.region && s.plane === m0?.plane) ??
        metas.find((s) => !used.includes(s.id) && s.region === m0?.region) ??
        metas.find((s) => !used.includes(s.id)) ?? metas[0]
      used.push(pick.id)
      next.push(mk(pick))
    }
    panes = next
    layout = n
    active = Math.min(active, n - 1)
    if (linked && n > 1) queueMicrotask(() => syncTo(active))
  }

  /** After pane k moved to slice i, move parallel panes to the physically nearest slice. */
  function syncFrom(k: number, i: number) {
    if (!linked || panes.length < 2) return
    const src = byId.get(panes[k].seriesId)
    if (!src) return
    panes.forEach((p, j) => {
      if (j === k) return
      const dst = byId.get(p.seriesId)
      const idx = dst ? M.nearestSlice(src, i, dst) : null
      if (idx !== null && idx !== p.index) p.index = idx
    })
  }
  const syncTo = (k: number) => panes[k] && syncFrom(k, panes[k].index)

  function setIndex(i: number) {
    const p = panes[active]
    const m = curMeta
    if (!p || !m) return
    const n = M.clamp(Math.round(i), 0, m.n - 1)
    if (n === p.index) return
    p.index = n
    syncFrom(active, n)
  }

  const act = {
    tool: (x: Tool) => { if (x === 'measure' && !canMeasure) return; tool = x },
    invert: () => { if (cur) cur.invert = !cur.invert },
    play: () => { if (cur && curMeta && curMeta.n > 1) cur.playing = !cur.playing },
    reset: () => { viewers[active]?.reset(); if (cur) cur.invert = false },
    labels: () => { if (labelsAvailable) labelsOn = !labelsOn },
    link: () => { linked = !linked; if (linked) syncTo(active) },
  }

  function onhover(pi: number, code: number, x: number, y: number) {
    const m = byId.get(panes[pi]?.seriesId)
    const name = code && m ? labelName?.(m, code) ?? null : null
    hover = name ? { name, x, y } : null
    onhoverlabel?.(name)
  }

  function isTyping(el: EventTarget | null): boolean {
    if (!(el instanceof HTMLElement)) return false
    if (el.isContentEditable) return true
    const tag = el.tagName
    return tag === 'TEXTAREA' || tag === 'SELECT' || (tag === 'INPUT' && (el as HTMLInputElement).type !== 'checkbox')
  }

  function onkeydown(e: KeyboardEvent) {
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || isTyping(e.target) || !cur || !curMeta) return
    if (document.querySelector('[aria-modal="true"]')) return
    const onButton = e.target instanceof HTMLElement && (e.target.tagName === 'BUTTON' || e.target.tagName === 'A')
    const n = curMeta.n
    const k = e.key
    let handled = true
    if (k === 'ArrowUp' || k === 'ArrowLeft') setIndex(cur.index - 1)
    else if (k === 'ArrowDown' || k === 'ArrowRight') setIndex(cur.index + 1)
    else if (k === 'PageUp') setIndex(cur.index - Math.max(1, Math.round(n / 10)))
    else if (k === 'PageDown') setIndex(cur.index + Math.max(1, Math.round(n / 10)))
    else if (k === 'Home') setIndex(0)
    else if (k === 'End') setIndex(n - 1)
    else if (k === ' ' && !onButton) act.play()
    else if (k === 'Escape') { if (cur.playing) cur.playing = false; else handled = false }
    else if (k.length === 1) {
      const c = k.toLowerCase()
      if (c === 'i') act.invert()
      else if (c === 'r') act.reset()
      else if (c === 'l') act.labels()
      else if (c === 's') act.tool('scroll')
      else if (c === 'w') act.tool('wl')
      else if (c === 'p') act.tool('pan')
      else if (c === 'z') act.tool('zoom')
      else if (c === 'm') act.tool('measure')
      else if (c === '+' || c === '=') viewers[active]?.zoomBy(1.2)
      else if (c === '-') viewers[active]?.zoomBy(1 / 1.2)
      else if (c >= '1' && c <= '4' && layouts.includes(+c as LayoutN)) setLayout(+c as LayoutN)
      else handled = false
    } else handled = false
    if (handled) e.preventDefault()
  }
</script>

<svelte:window {onkeydown} />

<div class="vl">
  <ViewerToolbar
    {tool} {layout} {layouts} {linked} {labelsOn} {labelsAvailable} {canMeasure}
    invert={cur?.invert ?? false}
    playing={cur?.playing ?? false}
    canPlay={(curMeta?.n ?? 0) > 1}
    ontool={act.tool} oninvert={act.invert} onplay={act.play} onreset={act.reset}
    onlabels={act.labels} onlayout={setLayout} onlink={act.link}
  />

  <div class="panes l{layout}">
    {#each panes as p, i (i)}
      {@const m = byId.get(p.seriesId) ?? null}
      <div class="pane">
        <SliceViewer
          bind:this={viewers[i]}
          meta={m}
          base={seriesBase(p.seriesId)}
          bind:index={p.index}
          bind:playing={p.playing}
          invert={p.invert}
          {tool}
          showLabels={labelsOn}
          {labelColor}
          active={i === active && panes.length > 1}
          paneLabel={panes.length > 1 ? t('viewer.paneN', { n: i + 1 }) : ''}
          onactivate={() => (active = i)}
          onslice={(idx) => syncFrom(i, idx)}
          onhover={(code, x, y) => onhover(i, code, x, y)}
        />
        {#if panes.length > 1}<span class="badge" aria-hidden="true">{i + 1}</span>{/if}
      </div>
    {/each}
  </div>

  {#if cur && curMeta}
    <div class="scrub panel">
      <button type="button" class="btn icon" aria-label={t('viewer.prev')} onclick={() => setIndex(cur.index - 1)} disabled={cur.index <= 0}><Icon name="prev" /></button>
      <input
        type="range" min="0" max={Math.max(0, curMeta.n - 1)} value={cur.index}
        aria-label={M.isProjection(curMeta) ? t('viewer.frameLabel') : t('viewer.sliceLabel')}
        aria-valuetext={t(M.isProjection(curMeta) ? 'viewer.frame' : 'viewer.slice', { i: cur.index + 1, n: curMeta.n })}
        style="--p:{curMeta.n > 1 ? (cur.index / (curMeta.n - 1)) * 100 : 0}%"
        oninput={(e) => setIndex(+(e.currentTarget as HTMLInputElement).value)}
      />
      <button type="button" class="btn icon" aria-label={t('viewer.next')} onclick={() => setIndex(cur.index + 1)} disabled={cur.index >= curMeta.n - 1}><Icon name="next" /></button>
      <span class="num" aria-hidden="true">{cur.index + 1} / {curMeta.n}</span>
    </div>
  {/if}
</div>

{#if hover}
  <div class="tip" style="left:{hover.x}px;top:{hover.y}px" role="tooltip">{hover.name}</div>
{/if}

<style>
  .vl { display: flex; flex-direction: column; gap: 10px; min-width: 0; min-height: 0; height: 100%; }
  .panes { flex: 1; display: grid; gap: 10px; min-height: 0; }
  .panes.l1 { grid-template-columns: 1fr; }
  .panes.l2 { grid-template-columns: 1fr 1fr; }
  .panes.l3 { grid-template-columns: 1fr 1fr 1fr; }
  .panes.l4 { grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
  .pane { position: relative; min-width: 0; min-height: 0; }
  .badge { position: absolute; top: 8px; left: 50%; transform: translateX(-50%); font: 600 10.5px var(--mono); color: var(--text-3);
    background: rgba(5,7,13,.7); border: 1px solid var(--line); border-radius: 99px; padding: 1px 8px; pointer-events: none; }
  .scrub { display: flex; align-items: center; gap: 10px; padding: 8px 12px; }
  .scrub .btn.icon { padding: 6px; width: 34px; height: 34px; }
  .scrub input { flex: 1; min-width: 0; accent-color: var(--accent); height: 28px; }
  .num { font-family: var(--mono); font-size: 12px; color: var(--text-2); min-width: 64px; text-align: right; }
  .tip { position: fixed; z-index: 80; transform: translate(14px, 14px); pointer-events: none; background: rgba(5,7,13,.92);
    border: 1px solid rgba(94,234,212,.35); color: var(--text); font-size: 12.5px; padding: 5px 10px; border-radius: 9px; white-space: nowrap; }
  @media (max-width: 720px) {
    .panes, .panes.l2, .panes.l3, .panes.l4 { grid-template-columns: 1fr; grid-template-rows: none; flex: none; }
    .pane { height: min(92vw, 62vh); }
  }
</style>
