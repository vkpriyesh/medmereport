<!-- 2D viewer page: series list · ViewerLayout · plain-language info panel. Also serves the sagittal preset. -->
<script lang="ts">
  import { untrack } from 'svelte'
  import { fileUrl, getSeriesMeta, getStudy, sliceName, type SeriesMeta, type StudyInfo } from '../lib/api/endpoints'
  import Icon from '../lib/components/Icon.svelte'
  import { t } from '../lib/i18n/index.svelte'
  import { link, navigate } from '../lib/router.svelte'
  import { groupByRegion, seqKey } from '../lib/study'
  import { Localizer, ViewerLayout, math, type ActiveInfo, type LayoutN } from '../lib/viewer2d'

  let { params, preset = null }: { params: Record<string, string>; preset?: 'sagittal' | null } = $props()

  let study = $state<StudyInfo | null>(null)
  let all = $state<SeriesMeta[]>([])
  let error = $state<string | null>(null)
  let activeInfo = $state<ActiveInfo | null>(null)
  let hoverName = $state<string | null>(null)
  let layoutRef = $state<ViewerLayout | null>(null)

  // deep link from the 3D region card: ?slice=N&hl=CODE (read once; the URL keeps them until the series changes)
  const q = new URLSearchParams(location.search)
  const qSlice = q.has('slice') && Number.isFinite(+q.get('slice')!) ? +q.get('slice')! : null
  let hl = $state(Number.isInteger(+(q.get('hl') ?? '')) && +(q.get('hl') ?? '') > 0 ? +q.get('hl')! : 0)

  const studyId = $derived(params.id)
  const urlSeries = $derived(params.seriesId)
  $effect(() => {
    const id = studyId
    let dead = false
    study = null; all = []; error = null; activeInfo = null
    getStudy(id).then(async (s) => {
      const res = await Promise.allSettled(s.series.map((x) => getSeriesMeta(id, x.id)))
      if (dead) return
      study = s
      all = res.flatMap((r) => (r.status === 'fulfilled' && r.value.n > 0 ? [r.value] : []))
    }).catch((e) => { if (!dead) error = String(e?.message ?? e) })
    return () => { dead = true }
  })

  const metas = $derived(preset === 'sagittal' ? all.filter((m) => m.plane === 'sagittal') : all)
  const initialLayout = $derived<LayoutN>(preset === 'sagittal' && metas.length > 1 && typeof window !== 'undefined' && window.innerWidth > 1000 ? 2 : 1)
  const seriesBase = (sid: string) => fileUrl(params.id, `series/${sid}`)
  const groups = $derived(groupByRegion(metas, (m) => m.region))
  const am = $derived(activeInfo?.meta ?? null)
  const seq = $derived(am ? seqKey(am.sequence, am.modality, am.role) : null)
  const locRef = $derived(am ? math.pickLocalizerRef(all, am) : null)
  const mm = $derived(am ? math.mmPerPixel(am, am.w || 1, am.h || 1) : null)
  const sid = $derived(encodeURIComponent(params.id))

  // keep the URL in step with the active series (replace, so Back leaves the viewer)
  $effect(() => {
    if (!am || preset) return
    const want = `/study/${sid}/view/${encodeURIComponent(am.id)}`
    if (location.pathname !== want) navigate(want, true)
  })
  // external URL change (Back/Forward) → show that series
  $effect(() => {
    const s = urlSeries
    untrack(() => { if (s && layoutRef && am && s !== am.id) layoutRef.show(s) })
  })

  const labelName = (m: SeriesMeta, code: number) => m.labelNames?.[String(code)] ?? m.labelTable?.[String(code)] ?? null
  const hlName = $derived(hl && am ? labelName(am, hl) : null)
  const paneSlots = (id: string) => (activeInfo && activeInfo.panes.length > 1 ? activeInfo.panes.flatMap((p, i) => (p.seriesId === id ? [i + 1] : [])) : [])
</script>

{#if error}
  <section class="panel msg" role="alert">
    <h1>{t('study.notFound')}</h1><p class="muted">{t('study.notFound.d')}</p>
    <a class="btn primary" href="/import" use:link>{t('nav.import')}</a>
  </section>
{:else if !study}
  <div class="center" role="status"><div class="spinner" aria-label={t('common.loading')}></div></div>
{:else if !metas.length}
  <section class="panel msg">
    <h1>{preset === 'sagittal' ? t('view.noSagittal') : t('study.empty')}</h1>
    {#if preset === 'sagittal'}<p class="muted">{t('view.noSagittal.d')}</p>{/if}
    <a class="btn" href="/study/{sid}" use:link><Icon name="back" size={16} />{t('view.back')}</a>
  </section>
{:else}
  <div class="vpage">
    <aside class="side panel" aria-label={t('view.seriesList')}>
      <div class="sh">
        <a class="back" href="/study/{sid}" use:link aria-label={t('view.back')} title={t('view.back')}><Icon name="back" size={16} /></a>
        <div class="st">
          <h1 class="pt">{preset === 'sagittal' ? t('view.sagittal.title') : t('view.title')}</h1>
          <small class="faint">{study.description}</small>
        </div>
        <span class="chip">{metas.length}</span>
      </div>
      <div class="slist">
        {#each groups as g (g.region)}
          <div class="sgroup">{t(`region.${g.region}`)}</div>
          {#each g.items as m (m.id)}
            {@const slots = paneSlots(m.id)}
            <button type="button" class="sitem" class:on={am?.id === m.id} aria-current={am?.id === m.id ? 'true' : undefined} onclick={() => layoutRef?.show(m.id)}>
              <img src={fileUrl(params.id, `series/${m.id}/${sliceName(Math.floor(m.n / 2), m.ext)}`)} alt="" loading="lazy" decoding="async" />
              <span class="si">
                <span class="t">{m.title}</span>
                <span class="s">{m.plane !== 'unknown' ? t(`plane.${m.plane}`) + ' · ' : ''}{t(math.isProjection(m) ? 'study.frames' : 'study.slices', { n: m.n })}</span>
              </span>
              {#if slots.length}<span class="slot" aria-label={t('view.inPane', { n: slots.join(', ') })}>{slots.map((s) => '▣' + s).join(' ')}</span>{/if}
            </button>
          {/each}
        {/each}
      </div>
    </aside>

    <section class="main" aria-label={t('view.viewer')}>
      {#key preset + params.id}
        <ViewerLayout
          bind:this={layoutRef}
          {metas} {seriesBase} {initialLayout} {labelName}
          initialSeries={params.seriesId ?? null}
          initialIndex={qSlice}
          highlight={hl}
          onchange={(s) => (activeInfo = s)}
          onhoverlabel={(n) => (hoverName = n)}
        />
      {/key}
    </section>

    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <aside class="info panel" aria-label={t('view.about')} tabindex="0">
      <h2 class="ph">{t('view.about')}</h2>
      {#if am}
        <div class="ib">
          {#if hl}
            <div class="hl" role="status">
              <span><span class="k">{t('view.hl.k')}</span> {hlName ?? t('view.hl.code', { code: hl })}</span>
              <button type="button" class="btn sm" onclick={() => (hl = 0)}>{t('view.hl.clear')}</button>
            </div>
            {#if !am.labels}<p class="note">{t('view.hl.noLabels')}</p>{/if}
          {/if}
          {#if am.labels}
            <div class="hoverbox" aria-live="polite">
              {#if hoverName}<div class="k">{t('view.hover.under')}</div><div class="v">{hoverName}</div>
              {:else}<div class="k">{t('view.hover.k')}</div><div class="d">{t('view.hover.d')}</div>{/if}
            </div>
          {/if}
          {#if locRef && activeInfo}
            <Localizer ref={locRef} refBase={seriesBase(locRef.id)} cur={am} curIndex={activeInfo.index} />
          {/if}

          <h3>{am.title}</h3>
          <p class="facts">
            {t(math.isProjection(am) ? 'study.frames' : 'study.slices', { n: am.n })}
            {#if am.thickness} · {t('viewer.thick', { mm: am.thickness })}{/if}
            {#if mm} · {t('view.pixel', { mm: mm[0].toFixed(2) })}{/if}
          </p>
          {#if !mm}<p class="note">{t('viewer.noMeasure')}</p>{/if}

          {#if preset === 'sagittal'}
            <h4>{t('view.sagittal.h')}</h4>
            <p>{t('view.sagittal.intro')}</p>
          {/if}

          {#if seq}
            <h4>{t('view.seq', { name: t(`seq.${seq}.name`) })}</h4>
            <p>{t(`seq.${seq}.what`)}</p>
            <p>{t(`seq.${seq}.why`)}</p>
          {/if}

          <h4>{t('view.controls')}</h4>
          <dl class="help">
            <dt><kbd>{t('key.wheel')}</kbd> <kbd>↑</kbd><kbd>↓</kbd></dt><dd>{t('help.slice')}</dd>
            <dt><kbd>{t('key.rdrag')}</kbd> <kbd>W</kbd></dt><dd>{t('help.wl')}</dd>
            <dt><kbd>Ctrl</kbd>+<kbd>{t('key.wheel')}</kbd> <kbd>+</kbd><kbd>−</kbd></dt><dd>{t('help.zoom')}</dd>
            <dt><kbd>{t('key.mdrag')}</kbd> <kbd>P</kbd></dt><dd>{t('help.pan')}</dd>
            <dt><kbd>M</kbd></dt><dd>{t('help.measure')}</dd>
            <dt><kbd>{t('key.space')}</kbd></dt><dd>{t('help.cine')}</dd>
            <dt><kbd>I</kbd> · <kbd>R</kbd></dt><dd>{t('help.invreset')}</dd>
            <dt><kbd>1</kbd>–<kbd>4</kbd></dt><dd>{t('help.layout')}</dd>
            <dt><kbd>{t('key.pinch')}</kbd></dt><dd>{t('help.touch')}</dd>
          </dl>

          <h4>{t('view.important')}</h4>
          <p class="disc">{t('view.disclaimer')}</p>
        </div>
      {/if}
    </aside>
  </div>
{/if}

<style>

  .vpage { display: grid; grid-template-columns: 270px minmax(0, 1fr) 320px; grid-template-areas: 'side main info';
    gap: 14px; padding: 14px 0; height: calc(100vh - var(--topbar)); height: calc(100dvh - var(--topbar)); }
  .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; }
  .main { grid-area: main; min-width: 0; min-height: 0; }
  .info { grid-area: info; min-height: 0; overflow: auto; }

  .sh { display: flex; align-items: center; gap: 10px; padding: 12px 12px 10px; border-bottom: 1px solid var(--line); }
  .back { width: 32px; height: 32px; flex: none; display: grid; place-items: center; border-radius: 9px; color: var(--text-2); border: 1px solid var(--line); }
  .back:hover { color: var(--text); background: rgba(255,255,255,.05); }
  .st { display: grid; min-width: 0; flex: 1; }
  .st .pt { margin: 0; font-size: 14px; font-weight: 650; line-height: 1.3; }
  .st small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
  .slist { flex: 1; overflow: auto; padding: 4px 8px 10px; }
  .sgroup { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-3); font-weight: 600; padding: 12px 8px 6px; }
  .sitem { width: 100%; display: flex; gap: 10px; align-items: center; padding: 7px 8px; border-radius: 11px; cursor: pointer; text-align: left;
    border: 1px solid transparent; background: transparent; transition: background .15s, border-color .15s; }
  .sitem:hover { background: rgba(255,255,255,.04); }
  .sitem.on { background: var(--accent-soft); border-color: rgba(94,234,212,.3); }
  .sitem img { width: 48px; height: 48px; border-radius: 8px; object-fit: cover; background: #000; flex: none; box-shadow: 0 0 0 1px var(--line); }
  .si { display: grid; min-width: 0; flex: 1; }
  .si .t { font-size: 13px; font-weight: 500; line-height: 1.3; }
  .si .s { font-size: 11.5px; color: var(--text-3); margin-top: 2px; }
  .slot { margin-left: auto; font: 500 10px var(--mono); color: var(--accent); white-space: nowrap; }

  .ph { margin: 0; padding: 14px 18px 4px; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-3); font-weight: 600; }
  .ib { padding: 6px 16px 18px; display: grid; gap: 0; }
  .ib > :global(figure) { margin: 6px 0 4px; }
  h3 { margin: 12px 0 4px; font-size: 18px; letter-spacing: -.01em; }
  h4 { margin: 18px 0 6px; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-3); }
  .ib p { margin: 0 0 8px; color: var(--text-2); font-size: 13px; }
  .facts { font-family: var(--mono); font-size: 12px !important; }
  .note { padding: 8px 10px; border-radius: 10px; background: rgba(255,255,255,.04); border: 1px solid var(--line); }
  .hl { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 6px 0 8px; padding: 9px 12px; border-radius: 12px;
    background: rgba(94,234,212,.1); border: 1px solid rgba(94,234,212,.35); font-size: 13px; font-weight: 600; }
  .hl .k { display: block; font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-3); font-weight: 600; }
  .btn.sm { padding: 5px 10px; font-size: 12px; }
  .hoverbox { margin: 6px 0 8px; padding: 11px 13px; border-radius: 12px; background: rgba(94,234,212,.07); border: 1px solid rgba(94,234,212,.2); min-height: 58px; }
  .hoverbox .k { font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-3); font-weight: 600; }
  .hoverbox .v { font-size: 15px; font-weight: 600; margin-top: 3px; }
  .hoverbox .d { font-size: 12px; color: var(--text-2); margin-top: 2px; }
  .help { margin: 0; display: grid; grid-template-columns: auto 1fr; gap: 6px 10px; align-items: center; font-size: 12px; color: var(--text-3); }
  .help dt { white-space: nowrap; } .help dd { margin: 0; }
  kbd { font: 500 10.5px var(--mono); padding: 1px 6px; border-radius: 6px; border: 1px solid var(--line-2); background: rgba(255,255,255,.04); color: var(--text-2); }
  .disc { font-size: 12.5px !important; }

  @media (max-width: 1200px) {
    .vpage { grid-template-columns: 240px minmax(0, 1fr); grid-template-areas: 'side main' 'info info';
      grid-template-rows: calc(100dvh - var(--topbar) - 28px) auto; height: auto; }
    .info { overflow: visible; }
    .ib { display: block; column-gap: 28px; columns: 2 300px; }
  }
  @media (max-width: 820px) {
    .vpage { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'side' 'main' 'info'; grid-template-rows: auto auto auto; padding-top: 10px; }
    .slist { max-height: 210px; }
    .ib { columns: 1; }
  }
  /* single column but still above the phone breakpoint (where ViewerLayout sizes each pane): give the viewer real height */
  @media (max-width: 820px) and (min-width: 721px) { .main { height: min(80dvh, 760px); } }
</style>
