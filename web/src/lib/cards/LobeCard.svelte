<!-- Lobe / division card (pick-by-lobe, tree "whole lobe", guided tour). -->
<script lang="ts">
  import Icon from '../components/Icon.svelte'
  import { i18n, t } from '../i18n/index.svelte'
  import { lobeName, structureName } from '../viewer3d/kb'
  import { cssRgb, lobeColor } from '../viewer3d/palette'
  import Disclaimer from './Disclaimer.svelte'
  import { formatValue } from './format'
  import type { CardCtx } from './types'

  let { ctx, id }: { ctx: CardCtx; id: string } = $props()
  const l = $derived(ctx.kb.lobes[id])
  const keys = $derived([...ctx.store.facts.regions].filter(([, r]) => r.lobe === id).map(([k]) => k))
  const members = $derived([...new Set(keys.map((k) => k.slice(2)))])
  const mode = $derived(ctx.store.s.mode)
  const tour = $derived(ctx.store.s.tour)

  // My scan: sum volume-like measurements per side (generic: unit cm³ / mL / mm³)
  const VOL = /^(cm³|cm3|ml|mL|mm³|mm3|cc)$/
  const sums = $derived.by(() => {
    const out: Record<'L' | 'R' | 'M', { v: number; unit: string } | null> = { L: null, R: null, M: null }
    for (const k of keys) {
      const m = ctx.stats?.regions?.[k]?.measurements?.find((x) => x.key === 'volume' || (VOL.test(x.unit) && x.value !== null))
      if (!m || m.value === null) continue
      const h = k[0] as 'L' | 'R' | 'M'
      out[h] = { v: (out[h]?.v ?? 0) + m.value, unit: m.unit }
    }
    return out
  })
  const goto = (s: string) => {
    const hs = ctx.store.index.present.get(s)
    ctx.act.select({ type: 'region', id: `${hs?.has('M') ? 'M' : hs?.has('L') ? 'L' : 'R'}|${s}` }, true)
  }
</script>

<div class="ihead">
  <button type="button" class="btn x" aria-label={t('card.close')} title={t('card.close')} onclick={() => (tour ? ctx.act.tourEnd() : ctx.act.select(null))}><Icon name="close" size={16} /></button>
  <div class="kick">
    <span class="chip"><span class="dot" style="background:{lobeColor(id)}"></span>{ctx.ft('card.division')}</span>
    <span class="chip">{t('card.nStructures', { n: members.length })}</span>
  </div>
  <h2>{lobeName(ctx.namer, id)}</h2>
  {#if l?.tagline}<p class="tag">{l.tagline}</p>{/if}
</div>
<div class="ibody">
  {#if mode === 'mine' && (sums.L || sums.R || sums.M)}
    <h4>{t('card.yourMeasurements')}</h4>
    <div class="metrics">
      {#each (['L', 'R', 'M'] as const) as h}
        {#if sums[h]}
          <div class="metric-s"><div class="k">{t(`card.side.${h}`)}</div><div class="v">{formatValue(sums[h]!.v, i18n.lang)}<small>{sums[h]!.unit}</small></div></div>
        {/if}
      {/each}
    </div>
    <p class="p faint" style="font-size:11.5px;margin-top:6px">{t('card.lobeSumNote')}</p>
  {/if}
  {#if l?.overview}<p>{l.overview}</p>{/if}
  {#if l?.functions?.length}<h4>{t('card.functions')}</h4><ul class="dots">{#each l.functions as x}<li>{x}</li>{/each}</ul>{/if}
  {#if l?.clinical?.length}<h4>{t('card.clinical')}</h4><ul class="dots clin">{#each l.clinical as x}<li>{x}</li>{/each}</ul>{/if}
  {#if l?.fact}<div class="fact"><b>{t('card.fact')}</b>{l.fact}</div>{/if}
  <h4>{ctx.ft('card.inDivision')}</h4>
  <div class="chips">
    {#each members as m (m)}
      {@const c = ctx.store.colors[m]}
      <button type="button" class="chip" onclick={() => goto(m)}><span class="dot" style="background:{c ? cssRgb(c) : 'var(--text-3)'}"></span>{structureName(ctx.namer, m)}</button>
    {/each}
  </div>
  {#if tour}
    <div class="tour-nav">
      <button type="button" class="btn" disabled={tour.i === 0} onclick={() => ctx.act.tourStep(-1)}>‹ {t('card.tour.back')}</button>
      <span class="faint" style="font-size:12px">{t('card.tour.pos', { i: tour.i + 1, n: ctx.tourLen })}</span>
      {#if tour.i < ctx.tourLen - 1}<button type="button" class="btn primary" onclick={() => ctx.act.tourStep(1)}>{t('card.tour.next')} ›</button>
      {:else}<button type="button" class="btn primary" onclick={ctx.act.tourEnd}>{t('card.tour.finish')}</button>{/if}
    </div>
  {/if}
  <Disclaimer />
</div>

<style>
  .metric-s { padding: 12px 13px; border-radius: 12px; background: rgba(255,255,255,.035); border: 1px solid var(--line); }
  .k { font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--text-3); font-weight: 600; }
  .v { font-size: 22px; font-weight: 650; letter-spacing: -0.02em; margin-top: 2px; }
  .v small { font-size: 12px; color: var(--text-3); font-weight: 500; margin-left: 4px; }
</style>
