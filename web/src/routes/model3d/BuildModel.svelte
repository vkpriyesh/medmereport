<!-- Call-to-action + live progress for building the 3D model (POST /api/studies/{id}/model → SSE). -->
<script lang="ts">
  import { onDestroy } from 'svelte'
  import { cancelJob, startModel, watch, type JobInfo } from '../../lib/api/endpoints'
  import Icon from '../../lib/components/Icon.svelte'
  import { has, t } from '../../lib/i18n/index.svelte'

  let { studyId, ondone }: { studyId: string; ondone: () => void } = $props()

  let job = $state<JobInfo | null>(null)
  let stage = $state('')
  let pct = $state(0)
  let error = $state<string | null>(null)
  let cancelling = $state(false)
  let stop: (() => void) | null = null
  const seen = $state<string[]>([])

  const stageName = (s: string) => (has(`mstage.${s}`) ? t(`mstage.${s}`) : t('mstage.working'))
  const pctR = $derived(Math.round(Math.max(0, Math.min(100, pct))))
  const known = $derived(seen)

  async function build() {
    error = null; stage = ''; pct = 0; seen.length = 0
    try {
      job = await startModel(studyId)
      stop = watch(job.id, (e) => {
        stage = e.stage; pct = e.pct
        if (e.stage && !seen.includes(e.stage)) seen.push(e.stage)
      }, (j) => {
        job = null; cancelling = false
        if (j.status === 'done') ondone()
        else if (j.status === 'cancelled') error = null
        else error = j.error || t('m3d.build.failed')
      })
    } catch (e) {
      job = null
      error = String((e as Error)?.message ?? e)
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
    {#if error}<p class="err" role="alert">{t('m3d.build.error', { msg: error })}</p>{/if}
    <button type="button" class="btn primary lg" onclick={build}><Icon name="cube" size={17} />{error ? t('m3d.build.retry') : t('m3d.build.cta')}</button>
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
</style>
