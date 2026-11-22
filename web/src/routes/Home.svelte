<script lang="ts">
  import { onMount } from 'svelte'
  import { api, watchJob, type Capabilities } from '../lib/api/client'
  import { MOCK } from '../lib/api/endpoints'
  import { t } from '../lib/i18n/index.svelte'
  import { link } from '../lib/router.svelte'

  let caps = $state<Capabilities | null>(null)
  /** loading → ok | down (engine unreachable) | mock (dev demo mode has no engine) */
  let capsState = $state<'loading' | 'ok' | 'down' | 'mock'>(MOCK ? 'mock' : 'loading')
  let test = $state<{ state: 'idle' | 'running' | 'ok' | 'fail'; pct: number; msg: string }>({ state: 'idle', pct: 0, msg: '' })

  onMount(async () => {
    if (MOCK) return
    try { caps = await api.capabilities(); capsState = 'ok' } catch { caps = null; capsState = 'down' }
  })

  async function selfTest() {
    test = { state: 'running', pct: 0, msg: '' }
    try {
      const job = await api.demoJob(4, 0.35)
      watchJob(job.id, (e) => (test.pct = e.pct), (j) => {
        test = j.status === 'done' ? { state: 'ok', pct: 100, msg: '' } : { state: 'fail', pct: test.pct, msg: j.error ?? j.status }
      })
    } catch (e) {
      test = { state: 'fail', pct: 0, msg: String(e) }
    }
  }

  const promises = [
    { k: 'p1', icon: 'M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z' },
    { k: 'p2', icon: 'M4 6h16v12H4zM8 10h8M8 14h5' },
    { k: 'p3', icon: 'M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z' },
  ]
</script>

<section class="hero fade-in">
  <div class="copy">
    <span class="kicker">medmereport</span>
    <h1>{t('home.title')}</h1>
    <p class="lead">{t('home.lead')}</p>
    <div class="ctas">
      <a class="btn primary lg" href="/import" use:link>{t('home.cta')}</a>
      <a class="btn lg" href="/learn" use:link>{t('home.learn')}</a>
    </div>
    <p class="faint small">{t('disclaimer')}</p>
  </div>
  <div class="orb" aria-hidden="true"><div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div><div class="core"></div></div>
</section>

<section class="promises">
  {#each promises as p, i}
    <article class="panel promise fade-in" style="animation-delay:{80 * i}ms">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d={p.icon} /></svg>
      <h2>{t(`home.${p.k}.t`)}</h2>
      <p class="muted">{t(`home.${p.k}.d`)}</p>
    </article>
  {/each}
</section>

<section class="panel status" aria-labelledby="st-t" aria-busy={capsState === 'loading'}>
  <h2 id="st-t" class="sr-only">{t('status.title')}</h2>
  {#if capsState === 'mock'}
    <div class="row"><span class="faint">{t('status.engine')}</span><b>{t('status.mock')}</b></div>
  {:else if capsState === 'down'}
    <div class="row"><span class="faint">{t('status.engine')}</span><b class="bad">{t('status.down')}</b></div>
  {:else}
    <div class="row"><span class="faint">{t('status.engine')}</span><b>{caps ? `${t('status.ready')} · v${caps.version}` : t('common.loading')}</b></div>
    <div class="row"><span class="faint">{t('status.ai')}</span><b>{caps ? (caps.onnxruntime ? t('status.installed') : t('status.optional')) : t('common.loading')}</b></div>
  {/if}
  {#if capsState !== 'mock'}<div class="row test">
    <button class="btn" onclick={selfTest} disabled={test.state === 'running'}>
      {test.state === 'running' ? t('selftest.running') : t('selftest.run')}
    </button>
    {#if test.state === 'running'}
      <div class="bar" role="progressbar" aria-label={t('selftest.running')} aria-valuenow={test.pct} aria-valuemin="0" aria-valuemax="100"><i style="width:{test.pct}%"></i></div>
    {:else if test.state === 'ok'}
      <span class="ok" role="status">✓ {t('selftest.ok')}</span>
    {:else if test.state === 'fail'}
      <span class="bad" role="alert">{t('selftest.fail', { msg: test.msg })}</span>
    {/if}
  </div>{/if}
</section>

<style>
  .hero { display: grid; grid-template-columns: 1.2fr .8fr; gap: 40px; align-items: center; padding: 72px 0 40px; }
  h1 { font-size: clamp(34px, 5vw, 56px); line-height: 1.05; letter-spacing: -.035em; margin: 12px 0 18px; font-weight: 700;
    background: linear-gradient(90deg, #fff 30%, #a5f3fc); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .lead { font-size: 17px; color: var(--text-2); max-width: 560px; margin: 0 0 28px; }
  .ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 18px; }
  .small { font-size: 12.5px; }
  .orb { position: relative; aspect-ratio: 1; max-width: 380px; width: 100%; justify-self: center; }
  .ring { position: absolute; inset: 0; border-radius: 50%; border: 1px solid rgba(94,234,212,.25); animation: spin 26s linear infinite; }
  .r1 { inset: 8%; border-style: dashed; } .r2 { inset: 20%; border-color: rgba(56,189,248,.3); animation-duration: 18s; animation-direction: reverse; }
  .r3 { inset: 32%; border-color: rgba(167,139,250,.3); animation-duration: 12s; }
  .core { position: absolute; inset: 40%; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #a5f3fc, #2dd4bf 40%, #0e7490 75%); box-shadow: 0 0 80px rgba(94,234,212,.45); }
  @keyframes spin { to { transform: rotate(360deg); } }
  .promises { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 10px 0 18px; }
  .promise { padding: 22px; }
  .promise svg { width: 26px; height: 26px; color: var(--accent); }
  .promise h2 { margin: 12px 0 6px; font-size: 16px; }
  .promise p { margin: 0; font-size: 14px; }
  .status { padding: 16px 20px; display: grid; gap: 10px; margin-bottom: 60px; }
  @media (max-width: 520px) { .orb { max-width: 140px; } }
  .row { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
  .row > span:first-child { width: 90px; }
  .bar { flex: 1; min-width: 160px; height: 6px; border-radius: 6px; background: rgba(255,255,255,.08); overflow: hidden; }
  .bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); transition: width .3s; }
  .ok { color: var(--ok); } .bad { color: var(--danger); }
  @media (max-width: 860px) {
    .hero { grid-template-columns: 1fr; padding-top: 32px; gap: 20px; }
    .orb { max-width: 220px; order: -1; }
    .promise { padding: 18px; }
    .promises { grid-template-columns: 1fr; }
  }
</style>
