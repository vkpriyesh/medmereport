<!--
  Call-to-action + live progress for building the 3D model (POST /api/studies/{id}/model → SSE).
  With `GET …/model/options` (contract §6) the user picks among the applicable pipelines (best match first) and, where
  offered, the backend (classical vs TotalSegmentator, an optional install). Without that route: one "Build" button
  (`pipeline: auto`), the M2 behaviour.
-->
<script lang="ts">
  import { onDestroy } from 'svelte'
  import { ApiError } from '../../lib/api/client'
  import { cancelJob, getModelOptions, startModel, watch, type BackendOption, type JobInfo, type ModelOptions, type PipelineOption } from '../../lib/api/endpoints'
  import Icon from '../../lib/components/Icon.svelte'
  import { has, t } from '../../lib/i18n/index.svelte'
  import { humanize } from '../../lib/viewer3d/names'

  let { studyId, ondone }: { studyId: string; ondone: () => void } = $props()

  let job = $state<JobInfo | null>(null)
  let stage = $state('')
  let pct = $state(0)
  let error = $state<string | null>(null)
  let cancelling = $state(false)
  let stop: (() => void) | null = null
  const seen = $state<string[]>([])

  // ---- options (§6) ----
  let options = $state.raw<ModelOptions | null>(null)
  let optsLoading = $state(true)
  let pipeline = $state<string>('auto')
  let backend = $state<string>('auto')
  $effect(() => {
    const id = studyId
    let dead = false
    optsLoading = true; options = null
    getModelOptions(id)
      .then((o) => {
        if (dead) return
        options = o
        pipeline = o?.recommended ?? 'auto'
        backend = defaultBackend(o?.pipelines.find((p) => p.pipeline === pipeline))
      })
      .catch(() => { if (!dead) options = null }) // options are a nicety: fall back to `auto`
      .finally(() => { if (!dead) optsLoading = false })
    return () => { dead = true }
  })
  const current = $derived<PipelineOption | undefined>(options?.pipelines.find((p) => p.pipeline === pipeline))
  const backends = $derived<BackendOption[]>(current?.backends ?? [])
  const offersTotalseg = $derived(backends.some((b) => b.id === 'totalseg'))
  const noneFits = $derived(!!options && options.pipelines.length === 0)
  // the engine lists only backends usable now: tell body-CT users the detailed AI method exists as an optional install
  const totalsegHint = $derived(current?.pipeline === 'ct_body' && !offersTotalseg)

  function defaultBackend(p?: PipelineOption): string {
    const av = (p?.backends ?? []).filter((b) => b.available)
    return (av.find((b) => b.default) ?? av.find((b) => b.id === 'classical') ?? av[0])?.id ?? 'auto'
  }
  function choosePipeline(id: string) {
    pipeline = id
    backend = defaultBackend(options?.pipelines.find((p) => p.pipeline === id))
  }
  const pipeName = (id: string) => (has(`m3d.build.pipeline.${id}`) ? t(`m3d.build.pipeline.${id}`) : humanize(id))
  const pipeDesc = (id: string) => (has(`m3d.build.pipeline.${id}.d`) ? t(`m3d.build.pipeline.${id}.d`) : '')
  const backName = (id: string) => (has(`m3d.build.backend.${id}`) ? t(`m3d.build.backend.${id}`) : humanize(id))
  const backDesc = (id: string) => (has(`m3d.build.backend.${id}.d`) ? t(`m3d.build.backend.${id}.d`) : '')

  const stageName = (s: string) => (has(`mstage.${s}`) ? t(`mstage.${s}`) : t('mstage.working'))
  const pctR = $derived(Math.round(Math.max(0, Math.min(100, pct))))
  const known = $derived(seen)

  /** Friendly text for a failed POST (HTTP status); the engine's message is kept as detail. */
  function startError(e: unknown): string {
    if (e instanceof ApiError) {
      const k = `m3d.build.err.${e.status}`
      return has(k) ? t(k, { msg: e.message }) : t('m3d.build.error', { msg: e.message })
    }
    if (e instanceof TypeError) return t('m3d.build.err.net') // fetch: network failure
    return t('m3d.build.error', { msg: String((e as Error)?.message ?? e) })
  }
  /** Friendly text for a failed job (stable `result.code`, else the engine's message). */
  function jobError(j: JobInfo): string {
    const code = (j.result as { code?: unknown } | null | undefined)?.code
    if (typeof code === 'string' && has(`m3d.build.code.${code}`)) return t(`m3d.build.code.${code}`)
    return j.error ? t('m3d.build.error', { msg: j.error }) : t('m3d.build.failed')
  }

  async function build() {
    error = null; stage = ''; pct = 0; seen.length = 0
    try {
      job = await startModel(studyId, options ? pipeline : 'auto', options && backends.length > 1 ? backend : undefined)
      stop = watch(job.id, (e) => {
        stage = e.stage; pct = e.pct
        if (e.stage && !seen.includes(e.stage)) seen.push(e.stage)
      }, (j) => {
        job = null; cancelling = false
        if (j.status === 'done') ondone()
        else if (j.status === 'cancelled') error = null
        else error = jobError(j)
      })
    } catch (e) {
      job = null
      error = startError(e)
    }
  }
  async function cancel() {
    if (!job) return
    cancelling = true
    try { await cancelJob(job.id) } catch { cancelling = false }
  }
  onDestroy(() => stop?.())
</script>

<section class="panel build fade-in" aria-labelledby="b-t">
  <div class="ic" aria-hidden="true"><Icon name="cube" size={30} /></div>
  {#if !job}
    <h1 id="b-t">{t('m3d.build.title')}</h1>
    <p class="muted">{t('m3d.build.lead')}</p>
    <ul class="pts">
      <li><Icon name="lock" size={15} />{t('m3d.build.p1')}</li>
      <li><Icon name="clock" size={15} />{t('m3d.build.p2')}</li>
      <li><Icon name="info" size={15} />{t('m3d.build.p3')}</li>
    </ul>

    {#if noneFits}
      <div class="none" role="status"><b>{t('m3d.build.none')}</b><span class="muted">{t('m3d.build.none.d')}</span></div>
    {:else if options && options.pipelines.length > 1}
      <fieldset class="opts">
        <legend>{t('m3d.build.choose')}</legend>
        {#each options.pipelines as p, i (p.pipeline)}
          <label class="opt" class:on={pipeline === p.pipeline}>
            <input type="radio" name="pipeline" value={p.pipeline} checked={pipeline === p.pipeline} onchange={() => choosePipeline(p.pipeline)} />
            <span class="ot"><b>{pipeName(p.pipeline)}{#if i === 0}<span class="chip best">{t('m3d.build.best')}</span>{/if}</b>
              {#if pipeDesc(p.pipeline) || p.reason}<small class="muted">{p.reason || pipeDesc(p.pipeline)}</small>{/if}</span>
          </label>
        {/each}
      </fieldset>
    {:else if current && pipeDesc(current.pipeline)}
      <p class="one"><b>{pipeName(current.pipeline)}</b> · <span class="muted">{pipeDesc(current.pipeline)}</span></p>
    {/if}

    {#if !noneFits && backends.length > 1}
      <fieldset class="opts">
        <legend>{t('m3d.build.backend')}</legend>
        {#each backends as b (b.id)}
          <label class="opt" class:on={backend === b.id} class:off={!b.available}>
            <input type="radio" name="backend" value={b.id} checked={backend === b.id} disabled={!b.available} onchange={() => (backend = b.id)} />
            <span class="ot"><b>{backName(b.id)}{#if !b.available}<span class="chip warn">{t('m3d.build.backend.unavailable')}</span>{/if}</b>
              {#if backDesc(b.id) || b.reason}<small class="muted">{!b.available && b.reason ? b.reason : backDesc(b.id)}</small>{/if}
              {#if b.licence}<small class="faint">{b.licence}</small>{/if}</span>
          </label>
        {/each}
        {#if offersTotalseg}<p class="note faint"><Icon name="info" size={13} />{t('m3d.build.totalsegNote')}</p>{/if}
      </fieldset>
    {/if}

    {#if !noneFits && totalsegHint}<p class="note faint"><Icon name="info" size={13} />{t('m3d.build.totalsegNote')}</p>{/if}

    {#if error}<p class="err" role="alert">{error}</p>{/if}
    <button type="button" class="btn primary lg" onclick={build} disabled={optsLoading || noneFits}><Icon name="cube" size={17} />{error ? t('m3d.build.retry') : t('m3d.build.cta')}</button>
  {:else}
    <h1 id="b-t">{t('m3d.build.progress')}</h1>
    <p class="muted" aria-live="polite">{stage ? stageName(stage) : t('mstage.starting')}…</p>
    <div class="bar" role="progressbar" aria-valuenow={pctR} aria-valuemin={0} aria-valuemax={100} aria-label={t('m3d.build.progress')}><i style="width:{pctR}%"></i></div>
    <div class="pct faint">{pctR}%</div>
    {#if known.length}
      <ol class="stages">
        {#each known as s}<li class:now={s === stage}><Icon name={s === stage ? 'spark' : 'check'} size={13} />{stageName(s)}</li>{/each}
      </ol>
    {/if}
    <p class="faint small">{t('m3d.build.note')}</p>
    <button type="button" class="btn" onclick={cancel} disabled={cancelling}>{cancelling ? t('import.progress.cancelling') : t('common.cancel')}</button>
  {/if}
</section>

<style>
  .build { max-width: 560px; margin: 8vh auto; padding: 28px 30px; display: grid; gap: 12px; }
  .ic { width: 56px; height: 56px; border-radius: 16px; display: grid; place-items: center; background: var(--accent-soft); color: var(--accent); }
  h1 { margin: 0; font-size: 24px; letter-spacing: -.02em; }
  p { margin: 0; }
  .pts { list-style: none; margin: 4px 0; padding: 0; display: grid; gap: 6px; color: var(--text-2); font-size: 13.5px; }
  .pts li { display: flex; gap: 8px; align-items: center; }
  .err { color: var(--danger); font-size: 13.5px; }
  .btn { justify-self: start; }
  .bar { height: 8px; border-radius: 8px; background: rgba(255,255,255,.08); overflow: hidden; }
  .bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); transition: width .35s ease; }
  .pct { font-family: var(--mono); font-size: 12px; text-align: right; margin-top: -6px; }
  .stages { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px 14px; font-size: 13px; color: var(--text-2); }
  .stages li { display: inline-flex; gap: 6px; align-items: center; }
  .stages li.now { color: var(--accent); font-weight: 600; }
  .small { font-size: 12.5px; }
  .opts { border: 0; margin: 4px 0 0; padding: 0; display: grid; gap: 6px; min-width: 0; }
  legend { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-3); font-weight: 600; margin-bottom: 6px; padding: 0; }
  .opt { display: flex; gap: 10px; align-items: flex-start; padding: 10px 12px; border-radius: 12px; border: 1px solid var(--line); cursor: pointer; background: rgba(255,255,255,.02); }
  .opt:hover { border-color: var(--line-2); }
  .opt.on { border-color: rgba(94,234,212,.45); background: var(--accent-soft); }
  .opt.off { opacity: .7; cursor: not-allowed; }
  .opt input { margin-top: 3px; accent-color: var(--accent); }
  .ot { display: grid; gap: 2px; min-width: 0; }
  .ot b { font-size: 14px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .ot small { font-size: 12.5px; line-height: 1.4; }
  .chip.best { font-size: 10.5px; color: var(--accent); }
  .chip.warn { font-size: 10.5px; color: var(--warn); }
  .note { display: flex; gap: 6px; align-items: flex-start; font-size: 12px; line-height: 1.45; margin-top: 2px; }
  .note :global(svg) { flex: none; margin-top: 2px; }
  .none { display: grid; gap: 4px; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(251,191,36,.25); background: rgba(251,191,36,.06); font-size: 13.5px; }
  .one { font-size: 13.5px; }
</style>
