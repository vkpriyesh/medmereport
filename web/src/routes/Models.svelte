<!--
  /models — optional model files (contract §7): what each bundle adds, size, source, licence, installed state, and a
  Download button that opens the consent dialog. Reachable from Home ("Manage models").
-->
<script lang="ts">
  import { getModels, type ModelBundle, type ModelsInfo } from '../lib/api/endpoints'
  import Icon from '../lib/components/Icon.svelte'
  import { has, t } from '../lib/i18n/index.svelte'
  import { formatSize, type Offer } from '../lib/models/consent'
  import ModelDownload from '../lib/models/ModelDownload.svelte'
  import { link } from '../lib/router.svelte'

  let info = $state.raw<ModelsInfo | null>(null)
  let err = $state<string | null>(null)
  let offer = $state.raw<Offer | null>(null)

  async function load() {
    try { info = await getModels(); err = null } catch (e) { err = String((e as Error)?.message ?? e) }
  }
  $effect(() => { void load() })

  const bt = (b: ModelBundle, k: 'title' | 'enables') => (has(`models.bundle.${b.id}.${k}`) ? t(`models.bundle.${b.id}.${k}`) : b[k])
  const stateOf = (b: ModelBundle) => (b.installed ? 'installed' : b.partial ? 'partial' : 'notinstalled')
  function close() { offer = null; void load() }
</script>

<section class="wrap fade-in" aria-labelledby="mp-t">
  <a class="back faint" href="/" use:link><Icon name="back" size={15} />{t('models.page.back')}</a>
  <h1 id="mp-t">{t('models.page.t')}</h1>
  <p class="muted lead">{t('models.page.d')}</p>
  {#if info?.offline}<p class="note" role="status"><Icon name="lock" size={15} />{t('models.page.offline')}</p>{/if}
  {#if err}<p class="err" role="alert">{err}</p>{/if}
  {#if !info && !err}<div class="spinner" role="status" aria-label={t('common.loading')}></div>{/if}

  {#if info}
    <ul class="list">
      {#each info.bundles as b (b.id)}
        <li class="panel item">
          <div class="head">
            <h2>{bt(b, 'title')}</h2>
            <span class="chip {stateOf(b)}">{#if b.installed}<Icon name="check" size={13} />{/if}{t(`models.page.${stateOf(b)}`)}</span>
          </div>
          <p>{bt(b, 'enables')}</p>
          <p class="faint small">
            {#each b.pipelines as p}{has(`models.page.for.${p}`) ? t(`models.page.for.${p}`) : p} · {/each}{t('models.page.files', { n: b.assets.length, size: formatSize(b.size) })} · <span class="mono">{b.hosts.join(', ')}</span>
          </p>
          {#if !b.usable && b.needs}<p class="small warn"><b>{t('models.page.needs')}.</b> <span class="mono">{b.needs}</span></p>{/if}
          <details class="credits">
            <summary>{t('models.f.credits')}</summary>
            {#each b.credits as c}<p class="faint small">{c.licence}</p><p class="faint small">{c.attribution}</p>{/each}
          </details>
          {#if !b.installed && b.usable && !info.offline}
            <button type="button" class="btn primary" onclick={() => (offer = { kind: 'offer', bundle: b, canSkip: false })}>
              <Icon name="download" size={16} />{t('models.ask.go', { size: formatSize(b.download_size) })}
            </button>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</section>

{#if offer}<ModelDownload {offer} context="manage" onclose={close} ondone={() => void load()} />{/if}

<style>
  .wrap { max-width: 760px; margin: 0 auto; padding: 28px 0 60px; display: grid; gap: 12px; }
  .back { display: inline-flex; gap: 6px; align-items: center; font-size: 13.5px; text-decoration: none; justify-self: start; }
  h1 { margin: 4px 0 0; font-size: clamp(24px, 4vw, 32px); letter-spacing: -.02em; }
  .lead { margin: 0; max-width: 620px; }
  .note { display: flex; gap: 8px; align-items: center; margin: 0; padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(251,191,36,.3); background: rgba(251,191,36,.06); font-size: 13.5px; }
  .err { color: var(--danger); }
  .list { list-style: none; margin: 6px 0 0; padding: 0; display: grid; gap: 12px; }
  .item { padding: 18px 20px; display: grid; gap: 8px; }
  .item p { margin: 0; }
  .head { display: flex; gap: 10px; align-items: center; justify-content: space-between; flex-wrap: wrap; }
  h2 { margin: 0; font-size: 17px; }
  .chip { display: inline-flex; gap: 5px; align-items: center; font-size: 12px; }
  .chip.installed { color: var(--ok); }
  .chip.partial { color: var(--warn); }
  .small { font-size: 12.5px; }
  .warn { color: var(--warn); }
  .mono { font-family: var(--mono); font-size: 12px; overflow-wrap: anywhere; }
  .credits summary { cursor: pointer; font-size: 13px; color: var(--text-2); }
  .credits p { margin-top: 6px; }
  .btn { justify-self: start; }
  @media (max-width: 520px) { .item { padding: 16px; } .btn { justify-self: stretch; justify-content: center; } }
</style>
