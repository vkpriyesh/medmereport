<!--
  /study/:id/3d — interactive 3D model. If model/status.json is missing, offers to build it (SSE progress), then loads
  model/scene.glb + regions.json + stats.json + /api/knowledge. Panels become bottom sheets on narrow screens.
-->
<script lang="ts">
  import { onDestroy, tick } from 'svelte'
  import { getKnowledge, getModelStatus, getRegions, getStats, getStudy, modelUrl, type ModelStatus, type StudyInfo } from '../lib/api/endpoints'
  import CardPanel from '../lib/cards/CardPanel.svelte'
  import type { CardCtx } from '../lib/cards/types'
  import Icon from '../lib/components/Icon.svelte'
  import { has, i18n, t } from '../lib/i18n/index.svelte'
  import { link } from '../lib/router.svelte'
  import ControlsPanel from '../lib/viewer3d/ControlsPanel.svelte'
  import { buildDataMaps, type DataMap } from '../lib/viewer3d/datamap'
  import { framedKey, framingOf } from '../lib/viewer3d/framing'
  import Dock from '../lib/viewer3d/Dock.svelte'
  import { localizeKnowledge, lobeName, regionName, searchText, structureLobe, structureName, vesselKind, type Namer } from '../lib/viewer3d/kb'
  import Legend from '../lib/viewer3d/Legend.svelte'
  import QuizBanner from '../lib/viewer3d/QuizBanner.svelte'
  import Scene3D from '../lib/viewer3d/Scene3D.svelte'
  import { pickQuestion, quizPool, tourFor } from '../lib/viewer3d/state'
  import { ViewerStore } from '../lib/viewer3d/store.svelte'
  import StructureTree from '../lib/viewer3d/StructureTree.svelte'
  import BuildModel from './model3d/BuildModel.svelte'
  import type { Knowledge, Measurement, RegionsJson, Sel, StatsJson, ViewPreset } from '../lib/viewer3d/types'

  let { params }: { params: Record<string, string> } = $props()

  type Phase = 'loading' | 'missing' | 'ready' | 'error'
  let phase = $state<Phase>('loading')
  let error = $state<string | null>(null)
  let study = $state<StudyInfo | null>(null)
  let status = $state<ModelStatus | null>(null)
  let regions = $state.raw<RegionsJson | null>(null)
  let stats = $state.raw<StatsJson | null>(null)
  let kbEn = $state.raw<Knowledge | null>(null)
  let kbLocal = $state.raw<Knowledge | null>(null)
  let loadPct = $state<number | null>(0)
  let modelReady = $state(false)
  let sceneErr = $state<string | null>(null)

  const store = new ViewerStore()
  let scene = $state<Scene3D | null>(null)
  let treeRef = $state<StructureTree | null>(null)
  let controlsOpen = $state(false)
  let cardOpen = $state(false)

  const studyId = $derived(params.id)
  const sid = $derived(encodeURIComponent(params.id))

  async function load(id: string) {
    phase = 'loading'; error = null; modelReady = false; sceneErr = null
    try {
      const [s, st] = await Promise.all([getStudy(id).catch(() => null), getModelStatus(id)])
      study = s
      if (!st) { phase = 'missing'; return }
      status = st
      const [r, x, k] = await Promise.all([getRegions(id), getStats(id), getKnowledge('en')])
      regions = r; stats = x; kbEn = k
      phase = 'ready'
    } catch (e) {
      error = String((e as Error)?.message ?? e)
      phase = 'error'
    }
  }
  $effect(() => { void load(studyId) })
  // localized knowledge (English fallback per field)
  $effect(() => {
    const lang = i18n.lang
    kbLocal = null
    if (lang !== 'en') getKnowledge(lang).then((k) => { if (i18n.lang === lang) kbLocal = k })
  })

  const kb = $derived(localizeKnowledge(kbEn, i18n.lang, kbLocal))
  const tr = (key: string, vars?: Record<string, string | number>) => (has(key) ? t(key, vars) : null)
  const namer = $derived<Namer>({ kb, tr, en: kbEn, lang: i18n.lang })
  const dataMaps = $derived(buildDataMaps(stats))
  const regionByKey = $derived(new Map((regions?.regions ?? []).map((r) => [r.key, r])))
  const lobeOfStructure = (s: string) => structureLobe(kb, s)
  const framing = $derived(framingOf(regions, status?.pipeline))
  /**
   * UI string with the model's wording variant (`key.body` for torso/spine models, `key.vessels` for a head model
   * without brain regions), brain wording otherwise.
   */
  const ft = (key: string, vars?: Record<string, string | number>) => t(framedKey(key, store.ready ? store.wording : framing, has), vars)

  const measureLabel = (m: Measurement) => tr(`measure.${m.key}`) ?? m.label
  const dataLabel = (m: DataMap) => tr(`measure.${m.key}.short`) ?? tr(`measure.${m.key}`) ?? m.label
  const selName = (x: Sel): string =>
    x.type === 'lobe' ? lobeName(namer, x.id) : x.type === 'vessel' ? t(`card.vessel.${vesselKind(x.id, framing)}`) : regionName(namer, x.id)
  const labelFor = (x: Sel) => ({
    title: selName(x),
    sub: x.type === 'region' ? lobeName(namer, lobeOfStructure(x.id.slice(2))) : x.type === 'vessel' ? ft('m3d.vessel.sub') : undefined,
  })

  const s = $derived(store.s)
  const dataMap = $derived(s.colorBy.startsWith('data:') ? dataMaps.find((m) => `data:${m.key}` === s.colorBy) ?? null : null)
  const tour = $derived(tourFor(store.index.lobes))
  const announce = $derived(s.sel ? t('m3d.announce', { name: selName(s.sel) }) : store.ready ? t('m3d.announce.none') : '')

  // ---------------- actions ----------------
  function select(x: Sel | null, fly = false) {
    store.dispatch({ type: 'select', sel: x })
    if (fly) scene?.flyToSel(store.s.sel)
  }
  function pickFromTree(key: string) { if (s.quiz) return; select({ type: 'region', id: key }, true) }
  function pickLobe(lobe: string) { if (s.quiz) return; select({ type: 'lobe', id: lobe }, true) }
  function pickVessel(key: string) { if (s.quiz) return; select({ type: 'vessel', id: key }, true) }
  function view(v: ViewPreset) { store.dispatch({ type: 'view', view: v }); scene?.view(v) }
  function reset() { store.dispatch({ type: 'reset' }); scene?.home() }

  function tourGo(i: number) {
    const st = tour[i]
    if (!st) return
    store.dispatch({ type: 'tour', step: i, lobe: st.lobe, xray: !!st.xray, hideR: !!st.hideR })
    tick().then(() => scene?.flyToSel({ type: 'lobe', id: st.lobe }, st.view))
  }
  const startTour = () => tourGo(0)
  const tourStep = (d: number) => tourGo(Math.max(0, Math.min(tour.length - 1, (s.tour?.i ?? -1) + d)))
  function tourEnd() { store.dispatch({ type: 'tourEnd' }); scene?.home() }

  function startQuiz() {
    const target = pickQuestion(quizPool(store.s, store.facts), null)
    if (target) store.dispatch({ type: 'quizStart', target })
  }
  let quizTimer = 0
  $effect(() => {
    const q = s.quiz
    if (!q?.revealing) return
    quizTimer = window.setTimeout(() => {
      const next = pickQuestion(quizPool(store.s, store.facts), q.target)
      if (next) store.dispatch({ type: 'quizNext', target: next })
    }, q.last?.ok ? 1300 : 1700)
    return () => clearTimeout(quizTimer)
  })
  onDestroy(() => clearTimeout(quizTimer))

  function showVessels() {
    store.dispatch({ type: 'xray', on: true })
    const v = store.index.vessels.find((k) => !/neck/i.test(k)) ?? store.index.vessels[0]
    if (v) select({ type: 'vessel', id: v })
  }

  const ctx = $derived<CardCtx>({
    studyId, kb, namer, stats, regions, regionByKey, status, store, measureLabel, tourLen: tour.length, framing, ft, study,
    act: { select, tour: startTour, tourStep, tourEnd, quiz: startQuiz, showVessels },
  })

  // open the card sheet on small screens when something is selected
  const narrow = () => typeof matchMedia !== 'undefined' && matchMedia('(max-width: 900px)').matches
  $effect(() => { if (s.sel && !s.quiz && narrow()) { cardOpen = true; controlsOpen = false } })

  // ---------------- keyboard ----------------
  function onkeydown(e: KeyboardEvent) {
    if (phase !== 'ready' || e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return
    const el = e.target as HTMLElement | null
    const typing = !!el && (el.isContentEditable || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || (el.tagName === 'INPUT' && (el as HTMLInputElement).type !== 'range' && (el as HTMLInputElement).type !== 'checkbox'))
    if (typing) return
    if (e.key === 'Escape') {
      if (s.quiz) store.dispatch({ type: 'quizEnd' })
      else if (s.tour) tourEnd()
      else if (controlsOpen || cardOpen) { controlsOpen = false; cardOpen = false }
      else if (s.sel) select(null)
      else return
      e.preventDefault()
    } else if (e.key === '/') {
      e.preventDefault()
      if (narrow()) { controlsOpen = true; cardOpen = false }
      tick().then(() => treeRef?.focus())
    } else if (e.key === 'x' || e.key === 'X') store.dispatch({ type: 'xray' })
    else if ((e.key === 'i' || e.key === 'I') && s.sel) store.dispatch({ type: 'isolate' })
  }
</script>

<svelte:window {onkeydown} />

{#if phase === 'loading'}
  <div class="center" role="status"><div class="spinner" aria-label={t('common.loading')}></div></div>
{:else if phase === 'error'}
  <section class="panel msg" role="alert">
    <h1>{t('m3d.error.t')}</h1><p class="muted">{t('m3d.error.d')}</p><p class="faint mono">{error}</p>
    <a class="btn" href="/study/{sid}" use:link><Icon name="back" size={16} />{t('view.back')}</a>
  </section>
{:else if phase === 'missing'}
  <nav class="crumbs faint" aria-label={t('common.breadcrumb')}><a href="/study/{sid}" use:link>{study?.description || t('study.untitled')}</a> <span aria-hidden="true">›</span> <span aria-current="page">{t('study.3d')}</span></nav>
  <BuildModel studyId={params.id} ondone={() => load(params.id)} />
{:else}
  <div class="m3d">
    {#if sceneErr}
      <section class="panel msg over" role="alert"><h1>{t('m3d.error.t')}</h1><p class="muted">{sceneErr === 'webgl' || sceneErr === 'context' ? t(`m3d.error.${sceneErr}`) : t('m3d.error.d')}</p>
        {#if sceneErr !== 'webgl' && sceneErr !== 'context'}<p class="faint mono">{sceneErr}</p>{/if}</section>
    {/if}
    {#key params.id}
      <Scene3D
        bind:this={scene}
        url={modelUrl(params.id)} {store} {regions} {framing} lobeOf={lobeOfStructure} {dataMaps} label={labelFor}
        ariaLabel={ft('m3d.canvas')}
        onprogress={(p) => (loadPct = p)}
        onerror={(m) => (sceneErr = m)}
        onloaded={() => (modelReady = true)}
      />
    {/key}

    {#if !modelReady && !sceneErr}
      <div class="loading panel" role="status" aria-live="polite">
        <span>{t('m3d.loading')}</span>
        <div class="bar"><i style="width:{loadPct ?? 30}%" class:indet={loadPct === null}></i></div>
      </div>
    {/if}

    <aside id="m3d-controls" class="left panel" class:open={controlsOpen} aria-label={t('m3d.controls')}>
      <div class="lh">
        <a class="back" href="/study/{sid}" use:link aria-label={t('view.back')} title={t('view.back')}><Icon name="back" size={16} /></a>
        <div class="st"><h1 class="pt">{t('m3d.title')}</h1><small class="faint">{study?.description ?? ''}</small></div>
        <button type="button" class="btn icon mob" aria-label={t('card.close')} onclick={() => (controlsOpen = false)}><Icon name="close" size={16} /></button>
      </div>
      {#if store.ready}
        <ControlsPanel {store} {dataMaps} {dataLabel}>
          {#snippet tree()}
            <StructureTree bind:this={treeRef} {store}
              structName={(id) => structureName(namer, id)} lobeName={(id) => lobeName(namer, id)} lobeOfStructure={lobeOfStructure}
              search={(id) => searchText(kb, id, structureName(namer, id))}
              vesselName={(k) => selName({ type: 'vessel', id: k })}
              onpick={pickFromTree} onpicklobe={pickLobe} onpickvessel={pickVessel} />
          {/snippet}
        </ControlsPanel>
      {/if}
    </aside>

    <aside id="m3d-card" class="right panel" class:open={cardOpen} aria-label={t('m3d.card')}>
      <button type="button" class="btn icon mob closer" aria-label={t('card.close')} onclick={() => (cardOpen = false)}><Icon name="close" size={16} /></button>
      {#if store.ready}<CardPanel {ctx} />{/if}
    </aside>

    {#if s.quiz}
      <div class="top"><QuizBanner quiz={s.quiz} name={(k) => regionName(namer, k)} onskip={() => store.dispatch({ type: 'quizSkip' })} onend={() => store.dispatch({ type: 'quizEnd' })} /></div>
    {/if}

    <div class="bottom">
      {#if dataMap}<Legend map={dataMap} label={dataLabel(dataMap)} />{/if}
      {#if store.ready}
        <Dock {store} canTour={tour.length > 0} canQuiz={store.index.keys.length > 1}
          onview={view} onshot={() => scene?.screenshot(t('m3d.shot.file'))} onreset={reset}
          ontour={() => (s.tour ? tourEnd() : startTour())} onquiz={() => (s.quiz ? store.dispatch({ type: 'quizEnd' }) : startQuiz())}
          {controlsOpen} {cardOpen}
          ontoggleControls={() => { controlsOpen = !controlsOpen; if (controlsOpen) cardOpen = false }}
          ontoggleCard={() => { cardOpen = !cardOpen; if (cardOpen) controlsOpen = false }} />
      {/if}
    </div>

    <p class="sr-only" aria-live="polite">{announce}</p>
  </div>
{/if}

<style>
  .msg.over { position: absolute; z-index: 40; left: 50%; top: 20%; transform: translateX(-50%); margin: 0; width: min(560px, calc(100% - 32px)); }
  .crumbs { font-size: 13px; padding-top: 18px; }
  .crumbs a { color: var(--text-2); }

  .m3d { position: relative; height: calc(100vh - var(--topbar)); height: calc(100dvh - var(--topbar)); margin: 0 -14px; overflow: hidden; }
  .left, .right { position: absolute; top: 14px; bottom: 84px; z-index: 20; display: flex; flex-direction: column; min-height: 0; }
  .left { left: 14px; width: 292px; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: thin; scrollbar-color: rgba(148,170,220,.25) transparent; }
  .right { right: 14px; width: 380px; }
  .lh { display: flex; align-items: center; gap: 10px; padding: 12px 12px 4px; }
  .back { width: 32px; height: 32px; flex: none; display: grid; place-items: center; border-radius: 9px; color: var(--text-2); border: 1px solid var(--line); }
  .back:hover { color: var(--text); background: rgba(255,255,255,.05); }
  .st { display: grid; min-width: 0; flex: 1; }
  .st .pt { margin: 0; font-size: 14px; font-weight: 650; line-height: 1.3; }
  .st small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
  .top { position: absolute; top: 14px; left: 50%; transform: translateX(-50%); z-index: 30; }
  .bottom { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); z-index: 25; display: flex; flex-direction: column; align-items: center; gap: 10px; max-width: calc(100% - 28px); }
  .loading { position: absolute; left: 50%; top: 45%; transform: translate(-50%, -50%); z-index: 15; padding: 14px 18px; display: grid; gap: 8px; min-width: 240px; font-size: 13px; color: var(--text-2); }
  .loading .bar { height: 6px; border-radius: 6px; background: rgba(255,255,255,.08); overflow: hidden; }
  .loading .bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); transition: width .2s; }
  .loading .bar i.indet { animation: indet 1.2s ease-in-out infinite; }
  @keyframes indet { 0% { transform: translateX(-100%); } 100% { transform: translateX(330%); } }
  .mob { display: none; }
  .btn.icon { width: 32px; height: 32px; padding: 0; }
  .closer { position: absolute; top: 10px; right: 10px; z-index: 2; }

  @media (max-width: 1180px) { .right { width: 340px; } .left { width: 262px; } }
  @media (max-width: 900px) {
    .mob { display: inline-flex; }
    .left, .right { left: 8px; right: 8px; width: auto; top: auto; bottom: 74px; max-height: min(62dvh, 560px); display: none;
      border-radius: 18px; box-shadow: 0 -20px 50px -20px rgba(0,0,0,.8), 0 0 0 1px var(--line-2);
      background: var(--panel-solid); backdrop-filter: none; } /* opaque sheets: text stays readable over the model */
    .right { height: min(62dvh, 560px); }
    .left.open, .right.open { display: flex; animation: sheet .25s ease both; }
    .right.open :global(.cardx .ihead .x) { right: 48px; }
    .bottom { bottom: 10px; width: calc(100% - 16px); max-width: none; }
    .top { top: 8px; width: calc(100% - 16px); display: flex; justify-content: center; }
  }
  @keyframes sheet { from { transform: translateY(20px); opacity: 0; } to { transform: none; opacity: 1; } }
</style>
