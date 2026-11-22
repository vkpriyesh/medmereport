<!--
  Consent + progress dialog for downloading an optional model bundle (T7.7, contract §7). Shows what will be downloaded
  (name, size, source host, licence/credits) and that nothing about the user is sent; then streams the download job's
  progress (aria-live) with Cancel. `context: 'build'` is used from "Build my 3D model": on success it calls `ondone`
  so the build continues automatically.
-->
<script lang="ts">
  import { onDestroy } from 'svelte'
  import { cancelJob, pullModels, watch } from '../api/endpoints'
  import { ApiError } from '../api/client'
  import Icon from '../components/Icon.svelte'
  import { trapFocus } from '../components/focustrap'
  import { has, t } from '../i18n/index.svelte'
  import { busy, dlReduce, formatSize, initialDl, type DlEvent, type DlState, type Offer } from './consent'

  let { offer, context = 'manage', onclose, ondone, onskip }: {
    offer: Offer
    context?: 'build' | 'manage'
    onclose: () => void
    ondone: () => void
    onskip?: () => void
  } = $props()

  let s = $state<DlState>({ ...initialDl })
  const send = (e: DlEvent) => { s = dlReduce(s, e) }
  let stop: (() => void) | null = null
  onDestroy(() => stop?.())

  const bundle = $derived(offer.bundle)
  const canSkip = $derived(offer.kind === 'offer' && offer.canSkip && !!onskip)
  const bt = (k: string, fallback: string) => (bundle && has(`models.bundle.${bundle.id}.${k}`) ? t(`models.bundle.${bundle.id}.${k}`) : fallback)
  const title = $derived(bundle ? bt('title', bundle.title) : '')
  const enables = $derived(bundle ? bt('enables', bundle.enables) : '')
  const hosts = $derived(bundle?.hosts.join(', ') ?? '')
  const size = $derived(bundle ? formatSize(bundle.download_size || bundle.size) : '')
  const pctR = $derived(Math.round(s.pct))
  // announce in 10 % steps so screen readers are not flooded
  const spoken = $derived(s.phase === 'downloading' ? t('models.dl.progress', { pct: Math.floor(s.pct / 10) * 10 }) : s.phase === 'cancelling' ? t('models.dl.cancelling') : '')
  const errText = $derived(s.error ? (has(`models.err.${s.error}`) ? t(`models.err.${s.error}`) : t('models.err.internal')) : '')

  async function start() {
    if (!bundle || busy(s)) return
    send({ type: 'start' })
    try {
      const job = await pullModels(bundle.id)
      send({ type: 'started', job })
      stop = watch(job.id, (e) => send({ type: 'progress', pct: e.pct, msg: e.msg }), (j) => {
        send({ type: 'end', job: j })
        if (j.status === 'done') ondone()
      })
    } catch (e) {
      send({ type: 'startError', status: e instanceof ApiError ? e.status : undefined })
    }
  }
  async function cancel() {
    if (!s.jobId) return
    send({ type: 'cancel' })
    try { await cancelJob(s.jobId) } catch { /* the job may have just finished */ }
  }
  function onkey(e: KeyboardEvent) {
    if (e.key === 'Escape' && !busy(s)) { e.stopPropagation(); onclose() }
  }
</script>

<div class="backdrop fade-in">
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div class="dlg panel" role="dialog" aria-modal="true" aria-labelledby="md-t" aria-describedby="md-d" tabindex="-1" use:trapFocus onkeydown={onkey}>
    <div class="ic" aria-hidden="true"><Icon name={offer.kind === 'offline' ? 'lock' : 'download'} size={24} /></div>
    {#if offer.kind === 'offline'}
      <h2 id="md-t">{t('models.offline.t')}</h2>
      <p id="md-d" class="muted">{t('models.offline.d')}</p>
      {#if bundle}<p class="muted small">{t('models.offline.how', { bundle: bundle.id })}</p>{/if}
      <div class="btns"><button type="button" class="btn primary" data-autofocus onclick={onclose}>{t('common.close')}</button></div>
    {:else if s.phase === 'done'}
      <h2 id="md-t">{t('models.dl.done.t', { name: title })}</h2>
      <p id="md-d" class="muted" role="status">{context === 'build' ? t('models.dl.done.build') : t('models.dl.done.d')}</p>
      {#if context !== 'build'}<div class="btns"><button type="button" class="btn primary" data-autofocus onclick={onclose}>{t('common.close')}</button></div>{/if}
    {:else if busy(s)}
      <h2 id="md-t">{t('models.dl.t', { name: title })}</h2>
      <p id="md-d" class="muted">{t('models.dl.keep')}</p>
      <div class="bar" role="progressbar" aria-valuenow={pctR} aria-valuemin={0} aria-valuemax={100} aria-label={t('models.dl.t', { name: title })}><i style="width:{pctR}%"></i></div>
      <div class="meta faint"><span>{s.detail}</span><span>{pctR}%</span></div>
      <p class="sr-only" aria-live="polite">{spoken}</p>
      <div class="btns"><button type="button" class="btn" data-autofocus onclick={cancel} disabled={s.phase !== 'downloading'}>{s.phase === 'cancelling' ? t('models.dl.cancelling') : t('common.cancel')}</button></div>
    {:else if bundle}
      <h2 id="md-t">{context === 'build' ? t(canSkip ? 'models.ask.build.t' : 'models.ask.build.req.t') : t('models.ask.t', { name: title })}</h2>
      <p id="md-d">{enables}</p>
      {#if context === 'build' && !canSkip}<p class="muted small">{t('models.ask.required')}</p>{/if}
      <dl class="facts">
        <div><dt>{t('models.f.what')}</dt><dd>{title}</dd></div>
        <div><dt>{t('models.f.size')}</dt><dd>{size}</dd></div>
        <div><dt>{t('models.f.from')}</dt><dd class="mono">{hosts}</dd></div>
        <div><dt>{t('models.f.licence')}</dt><dd>{bundle.credits.map((c) => c.licence.split(':')[0]).join(' · ')}</dd></div>
      </dl>
      <p class="privacy"><Icon name="lock" size={15} /><span>{t('models.ask.privacy', { host: hosts })}</span></p>
      <details class="credits">
        <summary>{t('models.f.credits')}</summary>
        {#each bundle.credits as c}<p class="faint small">{c.licence}</p><p class="faint small">{c.attribution}</p>{/each}
      </details>
      {#if s.cancelled}<p class="muted small" role="status">{t('models.dl.cancelled')}</p>{/if}
      {#if s.error}<p class="err" role="alert">{errText}</p>{/if}
      <div class="btns">
        <button type="button" class="btn primary" data-autofocus onclick={start}><Icon name="download" size={16} />{s.error ? t('models.dl.retry') : context === 'build' ? t('models.ask.go.build', { size }) : t('models.ask.go', { size })}</button>
        {#if canSkip}<button type="button" class="btn" onclick={() => onskip?.()}>{t('models.ask.skip')}</button>{/if}
        <button type="button" class="btn" onclick={onclose}>{t('models.ask.later')}</button>
      </div>
    {/if}
  </div>
</div>

<style>
  .backdrop { position: fixed; inset: 0; z-index: 60; background: rgba(3, 7, 18, .66); backdrop-filter: blur(3px); display: grid; place-items: center; padding: 16px; overflow-y: auto; }
  .dlg { width: min(520px, 100%); padding: 24px 26px; display: grid; gap: 12px; max-height: calc(100dvh - 32px); overflow-y: auto; }
  .dlg:focus { outline: none; }
  .ic { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; background: var(--accent-soft); color: var(--accent); }
  h2 { margin: 0; font-size: 20px; letter-spacing: -.015em; }
  p { margin: 0; }
  .small { font-size: 12.5px; }
  .facts { display: grid; gap: 6px; margin: 2px 0; font-size: 13.5px; }
  .facts > div { display: grid; grid-template-columns: 92px 1fr; gap: 10px; }
  dt { color: var(--text-3); }
  dd { margin: 0; overflow-wrap: anywhere; }
  .mono { font-family: var(--mono); font-size: 12.5px; }
  .privacy { display: flex; gap: 8px; align-items: flex-start; font-size: 13px; color: var(--text-2); padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(94,234,212,.25); background: var(--accent-soft); }
  .privacy :global(svg) { flex: none; margin-top: 2px; color: var(--accent); }
  .credits summary { cursor: pointer; font-size: 13px; color: var(--text-2); }
  .credits p { margin-top: 6px; }
  .err { color: var(--danger); font-size: 13.5px; }
  .btns { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 4px; }
  .bar { height: 8px; border-radius: 8px; background: rgba(255,255,255,.08); overflow: hidden; }
  .bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); transition: width .3s ease; }
  .meta { display: flex; justify-content: space-between; gap: 10px; font-family: var(--mono); font-size: 12px; margin-top: -4px; }
  @media (max-width: 520px) { .dlg { padding: 20px 18px; } .btns .btn { flex: 1 1 100%; justify-content: center; } .facts > div { grid-template-columns: 78px 1fr; } }
</style>
