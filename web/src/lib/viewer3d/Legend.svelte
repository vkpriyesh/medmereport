<!-- Colour legend for a data map (generic: any numeric Measurement key). -->
<script lang="ts">
  import { formatValue } from '../cards/format'
  import { i18n, t } from '../i18n/index.svelte'
  import { legendTicks, type DataMap } from './datamap'
  import { cssGradient, NO_DATA } from './palette'

  let { map, label }: { map: DataMap; label: string } = $props()
  const ticks = $derived(legendTicks(map))
  // left/right wording only for asymmetry maps (stored as L − R); other diverging maps show signed numbers
  const lr = $derived(map.diverging && /asym/i.test(map.key))
</script>

<div class="legend panel" role="figure" aria-label={t('m3d.legend', { name: label })}>
  <div class="ttl"><span>{label}</span><span>{map.unit}</span></div>
  <div class="grad" style="background:{cssGradient(map.stops)}"></div>
  <div class="ticks">
    <span>{lr ? t('m3d.legend.rLarger', { v: formatValue(Math.abs(ticks[0]), i18n.lang) }) : formatValue(ticks[0], i18n.lang)}</span>
    <span>{lr ? t('m3d.legend.equal') : formatValue(ticks[1], i18n.lang)}</span>
    <span>{lr ? t('m3d.legend.lLarger', { v: formatValue(ticks[2], i18n.lang) }) : formatValue(ticks[2], i18n.lang) + (map.diverging ? '' : '+')}</span>
  </div>
  <div class="nd"><i style="background:{NO_DATA}"></i>{t('m3d.legend.noData')} · {t('m3d.legend.note')}</div>
</div>

<style>
  .legend { padding: 10px 14px; min-width: 280px; max-width: min(420px, calc(100vw - 32px)); }
  .ttl { font-size: 11.5px; color: var(--text-2); margin-bottom: 6px; display: flex; justify-content: space-between; gap: 12px; }
  .grad { height: 8px; border-radius: 5px; }
  .ticks { display: flex; justify-content: space-between; font-size: 10.5px; color: var(--text-3); font-family: var(--mono); margin-top: 4px; gap: 8px; }
  .nd { display: flex; align-items: center; gap: 6px; font-size: 10.5px; color: var(--text-3); margin-top: 6px; }
  .nd i { width: 10px; height: 10px; border-radius: 3px; }
</style>
