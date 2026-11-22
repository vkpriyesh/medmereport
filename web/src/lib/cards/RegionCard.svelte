<!-- Region card. My scan: measurements (generic), thumbnails → 2D viewer, short overview. Learn: full knowledge-base entry. -->
<script lang="ts">
  import Icon from '../components/Icon.svelte'
  import { fileUrl } from '../api/endpoints'
  import { has, t } from '../i18n/index.svelte'
  import { link } from '../router.svelte'
  import { lobeName, regionName, structureLobe } from '../viewer3d/kb'
  import { humanize, otherSide, splitKey } from '../viewer3d/names'
  import { lobeColor } from '../viewer3d/palette'
  import Disclaimer from './Disclaimer.svelte'
  import MeasurementItem from './MeasurementItem.svelte'
  import type { CardCtx } from './types'

  let { ctx, id }: { ctx: CardCtx; id: string } = $props()

  const mode = $derived(ctx.store.s.mode)
  const parts = $derived(splitKey(id))
  const st = $derived(ctx.kb.structures[parts.structure])
  const lobe = $derived(structureLobe(ctx.kb, parts.structure))
  const name = $derived(regionName(ctx.namer, id))
  const r = $derived(ctx.stats?.regions?.[id])
  const otherKey = $derived(otherSide(id))
  const hasOther = $derived(!!otherKey && ctx.store.facts.regions.has(otherKey))
  const otherStats = $derived(otherKey ? ctx.stats?.regions?.[otherKey] : undefined)
  const code = $derived(ctx.regionByKey.get(id)?.code)
  const thumbs = $derived(r?.thumbs ?? [])
  const sid = $derived(encodeURIComponent(ctx.studyId))
  const brod = $derived(Array.isArray(st?.brodmann) ? st.brodmann.join(', ') : st?.brodmann || '')
  const thumbHref = (th: { series: string | null; slice: number }) =>
    `/study/${sid}/view/${encodeURIComponent(th.series!)}?slice=${th.slice}${code !== undefined ? `&hl=${code}` : ''}`
  const viewName = (v: string) => (has(`card.view.${v}`) ? t(`card.view.${v}`) : v)
  const setMode = (m: 'mine' | 'learn') => ctx.store.dispatch({ type: 'mode', mode: m })
</script>

<div class="ihead">
  <button type="button" class="btn x" aria-label={t('card.close')} title={t('card.close')} onclick={() => ctx.act.select(null)}><Icon name="close" size={16} /></button>
  <div class="kick">
    <span class="chip">{parts.hemi === 'L' ? t('card.side.L') : parts.hemi === 'R' ? t('card.side.R') : t('card.side.M')}</span>
    <button type="button" class="chip" onclick={() => ctx.act.select({ type: 'lobe', id: lobe }, true)} title={t('m3d.selectLobe', { name: lobeName(ctx.namer, lobe) })}>
      <span class="dot" style="background:{lobeColor(lobe)}"></span>{lobeName(ctx.namer, lobe)}
    </button>
    {#if st?.category}<span class="chip">{has(`cat.${st.category}`) ? t(`cat.${st.category}`) : humanize(st.category)}</span>{/if}
  </div>
  <h2>{name}</h2>
  {#if st?.tagline}<p class="tag">{st.tagline}</p>{/if}
</div>

<div class="ibody">
  {#if mode === 'mine'}
    <h4>{t('card.yourMeasurements')}</h4>
    {#if r?.measurements?.length}
      <div class="metrics">
        {#each r.measurements as m (m.key)}
          <MeasurementItem {m} label={ctx.measureLabel(m)} hemi={parts.hemi} other={otherStats?.measurements?.find((o) => o.key === m.key) ?? null} />
        {/each}
      </div>
    {:else}
      <p class="empty">{t('card.noMeasurements')}</p>
    {/if}

    {#if thumbs.length}
      <h4>{t('card.onScan')}</h4>
      <div class="thumbs">
        {#each thumbs as th}
          {#if th.series}
            <a href={thumbHref(th)} use:link aria-label={t('card.thumb.open', { view: viewName(th.view), n: th.slice + 1 })}>
              <img src={fileUrl(ctx.studyId, th.img)} alt="" loading="lazy" decoding="async" /><span>{viewName(th.view)}</span>
            </a>
          {:else}
            <figure><img src={fileUrl(ctx.studyId, th.img)} alt={t('card.thumb.recon', { view: viewName(th.view) })} loading="lazy" decoding="async" /><span>{viewName(th.view)}</span></figure>
          {/if}
        {/each}
      </div>
      <p class="p faint" style="font-size:11.5px;margin-top:8px">{t('card.thumb.hint')}</p>
    {/if}

    {#if st?.overview}<h4>{t('card.whatItIs')}</h4><p>{st.overview}</p>{/if}
    <div class="cta">
      <button type="button" class="btn" onclick={() => setMode('learn')}><Icon name="spark" size={15} />{t('card.learnMore')}</button>
      {#if hasOther && otherKey}<button type="button" class="btn" onclick={() => ctx.act.select({ type: 'region', id: otherKey }, true)}>{t(parts.hemi === 'L' ? 'card.compareR' : 'card.compareL')}<Icon name="arrow" size={15} /></button>{/if}
    </div>
    <Disclaimer extra={t('card.measureDisc')} />
  {:else}
    {#if st}
      {#if st.overview}<p>{st.overview}</p>{/if}
      {#if st.functions?.length}<h4>{t('card.functions')}</h4><ul class="dots">{#each st.functions as x}<li>{x}</li>{/each}</ul>{/if}
      {#if st.connections?.length}<h4>{t('card.connections')}</h4><ul class="dots conn">{#each st.connections as x}<li>{x}</li>{/each}</ul>{/if}
      {#if st.clinical?.length}<h4>{t('card.clinical')}</h4><ul class="dots clin">{#each st.clinical as x}<li>{x}</li>{/each}</ul>{/if}
      {#if st.lateralization}<h4>{t('card.lateralization')}</h4><p>{st.lateralization}</p>{/if}
      <h4>{t('card.details')}</h4>
      <dl class="kv">
        {#if st.aka?.length}<dt>{t('card.aka')}</dt><dd>{st.aka.join(', ')}</dd>{/if}
        {#if brod}<dt>{t('card.brodmann')}</dt><dd>{brod}</dd>{/if}
        {#if st.blood_supply}<dt>{t('card.blood')}</dt><dd>{st.blood_supply}</dd>{/if}
        <dt>{t('card.partOf')}</dt><dd>{lobeName(ctx.namer, lobe)}</dd>
      </dl>
      {#if st.fact}<div class="fact"><b>{t('card.fact')}</b>{st.fact}</div>{/if}
    {:else}
      <p class="empty">{t('card.noKb')}</p>
    {/if}
    <div class="cta">
      <button type="button" class="btn" onclick={() => setMode('mine')}><Icon name="square" size={15} />{t('card.seeOnScan')}</button>
      <button type="button" class="btn" onclick={() => ctx.act.select({ type: 'lobe', id: lobe }, true)}><Icon name="layers" size={15} />{t('card.wholeLobe', { name: lobeName(ctx.namer, lobe) })}</button>
    </div>
    <Disclaimer />
  {/if}
</div>
