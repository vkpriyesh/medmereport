<!-- Study dashboard: header + series cards grouped by body region. -->
<script lang="ts">
  import { getSeriesMeta, getStudy, type SeriesMeta, type StudyInfo } from '../lib/api/endpoints'
  import Icon from '../lib/components/Icon.svelte'
  import { t, i18n } from '../lib/i18n/index.svelte'
  import { link } from '../lib/router.svelte'
  import { formatStudyDate, groupByRegion, seriesRegion } from '../lib/study'
  import SeriesCard from './study/SeriesCard.svelte'

  let { params }: { params: Record<string, string> } = $props()

  let study = $state<StudyInfo | null>(null)
  let metas = $state<Record<string, SeriesMeta | null>>({})
  let ready = $state(false)
  let error = $state<string | null>(null)

  const studyId = $derived(params.id)
  $effect(() => {
    const id = studyId
    let dead = false
    study = null; metas = {}; ready = false; error = null
    getStudy(id).then(async (s) => {
      if (dead) return
      study = s
      const res = await Promise.allSettled(s.series.map((x) => getSeriesMeta(id, x.id)))
      if (dead) return
      metas = Object.fromEntries(s.series.map((x, i) => [x.id, res[i].status === 'fulfilled' ? (res[i] as PromiseFulfilledResult<SeriesMeta>).value : null]))
      ready = true
    }).catch((e) => { if (!dead) error = String(e?.message ?? e) })
    return () => { dead = true }
  })

  const groups = $derived(study ? groupByRegion(study.series, (s) => seriesRegion(s, metas[s.id])) : [])
  const hasSagittal = $derived(!!study?.series.some((s) => (metas[s.id]?.plane ?? s.plane) === 'sagittal'))
  const sid = $derived(encodeURIComponent(params.id))
</script>

{#if error}
  <section class="panel msg fade-in" role="alert">
    <h1>{t('study.notFound')}</h1>
    <p class="muted">{t('study.notFound.d')}</p>
    <p class="faint mono">{error}</p>
    <a class="btn primary" href="/import" use:link>{t('nav.import')}</a>
  </section>
{:else if !study}
  <div class="center" role="status"><div class="spinner" aria-label={t('common.loading')}></div></div>
{:else}
  <section class="hdr fade-in">
    <nav class="crumbs faint" aria-label={t('common.breadcrumb')}><a href="/import" use:link>{t('nav.import')}</a> <span aria-hidden="true">›</span> <span aria-current="page">{study.description || t('study.untitled')}</span></nav>
    <div class="row">
      <div class="ttl">
        <span class="kicker">{t('study.kicker')}</span>
        <h1>{study.description || t('study.untitled')}</h1>
        <div class="meta">
          {#if study.study_date}<span class="muted">{formatStudyDate(study.study_date, i18n.lang)}</span>{/if}
          {#each study.modalities as m}<span class="chip">{m}</span>{/each}
          <span class="chip">{t('study.nSeries', { n: study.series.length })}</span>
          {#if study.display_name}<span class="faint who" title={t('study.localOnly')}>{study.display_name}</span>{/if}
        </div>
      </div>
      <div class="ctas">
        {#if hasSagittal}<a class="btn" href="/study/{sid}/sagittal" use:link><Icon name="side" size={16} />{t('study.sagittal')}</a>{/if}
        {#if study.series.length}<a class="btn primary" href="/study/{sid}/view/{encodeURIComponent(study.series[0].id)}" use:link>{t('study.openViewer')}<Icon name="arrow" size={16} /></a>{/if}
        <a class="btn" href="/study/{sid}/3d" use:link title={t('study.3d.title')}><Icon name="cube" size={16} />{t('study.3d')}</a>
      </div>
    </div>
    <p class="disc"><Icon name="info" size={15} /> {t('study.disclaimer')}</p>
    {#if study.warnings.length}
      <ul class="warn">{#each study.warnings as w}<li>{w}</li>{/each}</ul>
    {/if}
  </section>

  {#if !study.series.length}
    <p class="panel msg muted">{t('study.empty')}</p>
  {:else if !ready}
    <div class="grid" aria-hidden="true">{#each study.series as _}<div class="sk panel"></div>{/each}</div>
  {:else}
    {#each groups as g (g.region)}
      <section class="group" aria-labelledby="g-{g.region}">
        <h2 id="g-{g.region}"><span>{t(`region.${g.region}`)}</span><small class="faint">{t('study.nSeries', { n: g.items.length })}</small></h2>
        <ul class="grid" role="list">
          {#each g.items as s (s.id)}<li><SeriesCard studyId={params.id} series={s} meta={metas[s.id]} /></li>{/each}
        </ul>
      </section>
    {/each}
  {/if}
{/if}

<style>
  .center { min-height: 50vh; display: grid; place-items: center; }
  .spinner { width: 38px; height: 38px; border-radius: 50%; border: 2px solid rgba(94,234,212,.15); border-top-color: var(--accent); animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .msg { max-width: 560px; margin: 10vh auto; padding: 26px; }
  .msg h1 { margin: 0 0 8px; font-size: 22px; }
  .mono { font-family: var(--mono); font-size: 12px; }
  .hdr { padding: 28px 0 8px; }
  .crumbs { font-size: 13px; margin-bottom: 14px; display: flex; gap: 6px; flex-wrap: wrap; }
  .row { display: flex; gap: 20px; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; }
  .ttl { min-width: 0; }
  h1 { margin: 6px 0 10px; font-size: clamp(24px, 3.6vw, 34px); letter-spacing: -.025em; line-height: 1.15; }
  .meta { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
  .who { font-size: 13px; }
  .ctas { display: flex; gap: 10px; flex-wrap: wrap; }
  .disc { display: flex; align-items: center; gap: 8px; margin: 18px 0 0; padding: 10px 14px; border-radius: 12px; font-size: 13px; color: var(--text-2);
    background: rgba(251,191,36,.06); border: 1px solid rgba(251,191,36,.2); }
  .disc :global(svg) { color: var(--warn); flex: none; }
  .warn { margin: 10px 0 0; padding-left: 20px; color: var(--warn); font-size: 13px; }
  .group { margin: 28px 0 8px; }
  .group h2 { display: flex; align-items: baseline; gap: 10px; font-size: 17px; margin: 0 0 12px; }
  .group h2 small { font-size: 12.5px; font-weight: 400; }
  .grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; }
  .sk { aspect-ratio: 4 / 4.2; background: linear-gradient(90deg, rgba(255,255,255,.03), rgba(255,255,255,.07), rgba(255,255,255,.03)); background-size: 200% 100%; animation: sh 1.4s linear infinite; margin-top: 28px; }
  @keyframes sh { to { background-position: -200% 0; } }
  @media (max-width: 520px) {
    .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
    .ctas { width: 100%; } .ctas .btn { flex: 1 1 auto; }
  }
  section:last-of-type { margin-bottom: 60px; }
</style>
