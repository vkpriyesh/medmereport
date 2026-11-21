<script lang="ts">
  import { fileUrl, sliceName, type SeriesInfo, type SeriesMeta } from '../../lib/api/endpoints'
  import { t } from '../../lib/i18n/index.svelte'
  import { link } from '../../lib/router.svelte'
  import { seqKey } from '../../lib/study'

  interface Props { studyId: string; series: SeriesInfo; meta: SeriesMeta | null }
  let { studyId, series, meta }: Props = $props()

  let broken = $state(false)
  const n = $derived(meta?.n ?? series.n_images)
  const thumb = $derived(meta && meta.n > 0 ? fileUrl(studyId, `series/${series.id}/${sliceName(Math.floor(meta.n / 2), meta.ext)}`) : null)
  const seq = $derived(seqKey(meta?.sequence ?? series.sequence, meta?.modality ?? series.modality, meta?.role ?? series.role))
  const plane = $derived((meta?.plane ?? series.plane) as string)
  const projection = $derived(plane === 'mip' || plane === 'projection' || ['mip', 'photo', 'document'].includes(meta?.role ?? series.role))
  const title = $derived(meta?.title || series.description || t('study.series', { id: series.id }))
</script>

<a class="card panel" href="/study/{encodeURIComponent(studyId)}/view/{encodeURIComponent(series.id)}" use:link>
  <div class="thumb">
    {#if thumb && !broken}
      <img src={thumb} alt="" loading="lazy" decoding="async" onerror={() => (broken = true)} />
    {:else}
      <span class="ph" aria-hidden="true"></span>
    {/if}
    <span class="count">{t(projection ? 'study.frames' : 'study.slices', { n })}</span>
  </div>
  <div class="body">
    <b class="ttl">{title}</b>
    <div class="chips">
      {#if plane && plane !== 'unknown'}<span class="chip">{t(`plane.${plane}`)}</span>{/if}
      {#if seq}<span class="chip seq">{t(`seq.${seq}.name`)}</span>{/if}
      <span class="chip">{meta?.modality ?? series.modality}</span>
    </div>
  </div>
</a>

<style>
  .card { display: flex; flex-direction: column; overflow: hidden; color: var(--text); transition: transform .18s, box-shadow .18s; height: 100%; }
  .card:hover { transform: translateY(-2px); box-shadow: 0 20px 60px -20px rgba(0,0,0,.7), 0 0 0 1px rgba(94,234,212,.35); }
  .card:focus-visible { outline-offset: 3px; }
  .thumb { position: relative; aspect-ratio: 4 / 3; background: #000; display: grid; place-items: center; overflow: hidden; }
  img { width: 100%; height: 100%; object-fit: contain; }
  .ph { width: 40%; aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle, rgba(148,170,220,.12), transparent 70%); }
  .count { position: absolute; right: 8px; bottom: 8px; font: 500 11px var(--mono); color: var(--text-2); background: rgba(5,7,13,.78); padding: 2px 8px; border-radius: 99px; border: 1px solid var(--line); }
  .body { padding: 12px 14px 14px; display: grid; gap: 8px; }
  .ttl { font-weight: 600; font-size: 14.5px; line-height: 1.3; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip { font-size: 11.5px; padding: 2px 9px; }
  .seq { color: var(--accent); border-color: rgba(94,234,212,.3); background: var(--accent-soft); }
  @media (prefers-reduced-motion: reduce) { .card:hover { transform: none; } }
</style>
