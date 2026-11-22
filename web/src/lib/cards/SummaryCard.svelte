<!-- Shown when nothing is selected: study summary (My scan) or an anatomy overview (Learn). -->
<script lang="ts">
  import Icon from '../components/Icon.svelte'
  import { has, t } from '../i18n/index.svelte'
  import { link } from '../router.svelte'
  import { primarySeriesId, seriesRegion } from '../study'
  import { lobeName } from '../viewer3d/kb'
  import { lobeColor } from '../viewer3d/palette'
  import { LOBE_ORDER } from '../viewer3d/vocab'
  import Disclaimer from './Disclaimer.svelte'
  import { caveatText, summaryList } from './format'
  import MeasurementItem from './MeasurementItem.svelte'
  import type { CardCtx } from './types'

  let { ctx }: { ctx: CardCtx } = $props()
  const mode = $derived(ctx.store.s.mode)
  const summary = $derived(summaryList(ctx.stats))
  const lobes = $derived(LOBE_ORDER.filter((l) => ctx.store.index.lobes.has(l)))
  const hasVessels = $derived(ctx.store.index.vessels.length > 0)
  const caveats = $derived((ctx.regions?.caveats ?? []).map(caveatText))
  const head = $derived(ctx.framing === 'head')
  const ft = $derived(ctx.ft)
  const first2d = $derived(ctx.study ? primarySeriesId(ctx.study.series, ctx.regions?.primary_series, (s) => seriesRegion(s)) : null)
  const sid = $derived(encodeURIComponent(ctx.studyId))
  /** Plain name of a pipeline ("Spine"), the raw id only when unknown. */
  const pipeName = (id: string) => (has(`m3d.build.pipeline.${id}`) ? t(`m3d.build.pipeline.${id}`) : id)
</script>

{#if mode === 'mine'}
  <div class="ihead">
    <div class="kick"><span class="chip"><span class="dot" style="background:var(--accent)"></span>{t('card.yourScan')}</span></div>
    <h2>{t('card.sum.title')}</h2>
    <p class="tag">{ft('card.sum.tag')}</p>
    {#if first2d}
      <div class="cta" style="margin-top:10px"><a class="btn" href="/study/{sid}/view/{encodeURIComponent(first2d)}" use:link><Icon name="side" size={15} />{ft('card.sum.open2d')}</a></div>
    {/if}
  </div>
  <div class="ibody">
    {#if summary.length}
      <h3 class="sh">{t('card.sum.numbers')}</h3>
      <div class="metrics">
        {#each summary as m, i (m.key)}<MeasurementItem {m} label={ctx.measureLabel(m)} wide={i === 0} />{/each}
      </div>
    {:else}
      <p class="empty" role="note">{ft('card.sum.noNumbers')}</p>
    {/if}

    <h3 class="sh">{t('card.sum.try')}</h3>
    <ul class="dots">
      <li>{ft('card.sum.try1')}</li>
      <li>{ft('card.sum.try2')}</li>
      <li>{ft('card.sum.try3')}</li>
      <li>{t('card.sum.try4')}</li>
    </ul>

    <h3 class="sh">{t('card.sum.how')}</h3>
    <dl class="kv">
      {#if ctx.regions?.backend}<dt>{t('card.sum.backend')}</dt><dd>{ctx.regions.backend}</dd>{/if}
      {#if ctx.status?.pipeline}<dt>{t('card.sum.pipeline')}</dt><dd>{pipeName(ctx.status.pipeline)}{ctx.status.version ? ` · v${ctx.status.version}` : ''}</dd>{/if}
      {#if ctx.regions?.licence}<dt>{t('card.sum.licence')}</dt><dd>{ctx.regions.licence}</dd>{/if}
      <dt>{t('card.sum.regions')}</dt><dd>{ctx.store.index.keys.length + ctx.store.index.vessels.length}</dd>
    </dl>
    <ol class="how" style="margin-top:10px">
      <li>{t('card.sum.how1')}</li>
      <li>{ft('card.sum.how2')}</li>
      <li>{t('card.sum.how3')}</li>
    </ol>
    {#if caveats.length || ctx.status?.warnings?.length}
      <div class="note"><b>{t('card.sum.limits')}</b>
        <ul class="dots">{#each [...caveats, ...(ctx.status?.warnings ?? [])] as c}<li>{c}</li>{/each}</ul>
      </div>
    {/if}
    <Disclaimer extra={ft('card.sum.disc')} />
  </div>
{:else}
  <div class="ihead">
    <div class="kick"><span class="chip"><span class="dot" style="background:#c084fc"></span>{t('m3d.mode.learn')}</span></div>
    <h2>{ft('card.learn.title')}</h2>
    <p class="tag">{ft('card.learn.tag')}</p>
  </div>
  <div class="ibody">
    <div class="cta" style="margin-top:0">
      {#if ctx.tourLen}<button type="button" class="btn primary" onclick={ctx.act.tour}><Icon name="play" size={14} />{t('card.learn.tour')}</button>{/if}
      {#if ctx.store.index.keys.length > 1}<button type="button" class="btn" onclick={ctx.act.quiz}><Icon name="spark" size={15} />{t('m3d.quiz')}</button>{/if}
    </div>
    {#if lobes.length}
      <h3 class="sh">{ft('card.learn.divisions')}</h3>
      <div class="lobes">
        {#each lobes as l (l)}
          <button type="button" class="lobe-card" style="--c:{lobeColor(l)}" onclick={() => ctx.act.select({ type: 'lobe', id: l }, true)}>
            <b>{lobeName(ctx.namer, l)}</b>{#if ctx.kb.lobes[l]?.tagline}<span>{ctx.kb.lobes[l].tagline}</span>{/if}
          </button>
        {/each}
      </div>
    {/if}
    {#if head && hasVessels && ctx.kb.arteries?.overview}
      <h3 class="sh">{t('card.learn.arteries')}</h3>
      <p>{ctx.kb.arteries.overview}</p>
      <div class="cta"><button type="button" class="btn" onclick={ctx.act.showVessels}><Icon name="eye" size={15} />{t('card.learn.showArteries')}</button></div>
    {/if}
    <Disclaimer />
  </div>
{/if}
