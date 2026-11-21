<!-- One Measurement, rendered generically: value + unit, optional range bar, optional L/R comparison, and ALWAYS method + caveats. -->
<script lang="ts">
  import { i18n, t } from '../i18n/index.svelte'
  import type { Hemi, Measurement } from '../viewer3d/types'
  import { caveatText, formatPct, formatValue, lrCompare, parseReference, rangeBar } from './format'
  import InfoPopover from './InfoPopover.svelte'

  interface Props { m: Measurement; label: string; other?: Measurement | null; hemi?: Hemi; wide?: boolean }
  let { m, label, other = null, hemi = 'M', wide = false }: Props = $props()

  const lang = $derived(i18n.lang)
  const range = $derived(parseReference(m.reference))
  const bar = $derived(range && m.value !== null ? rangeBar(m.value, range) : null)
  // asymmetry measures already compare sides, so no L/R bars for them
  const lr = $derived(other && !/asym/i.test(m.key) && m.value !== null && other.value !== null && (hemi === 'L' || hemi === 'R')
    ? lrCompare(hemi === 'L' ? m.value : other.value, hemi === 'L' ? other.value : m.value) : null)
  const caveats = $derived(m.caveats ?? [])
</script>

<div class="metric" class:wide={wide || !!lr || !!bar}>
  <div class="k"><span>{label}</span>
    <InfoPopover {label}>
      <p><b>{t('card.method')}</b> {m.method || t('card.methodUnknown')}</p>
      {#if m.reference}<p><b>{t('card.reference')}</b> {m.reference}</p>{/if}
      {#if caveats.length}
        <p><b>{t('card.caveats')}</b></p>
        <ul>{#each caveats as c}<li class:warn={typeof c !== 'string' && c.severity === 'warn'}>{caveatText(c)}</li>{/each}</ul>
      {/if}
      <p class="edu">{t('disclaimer')}</p>
    </InfoPopover>
  </div>
  <div class="v">{formatValue(m.value, lang)}{#if m.unit}<small>{m.unit}</small>{/if}</div>

  {#if bar && range}
    <div class="bar" role="img" aria-label={t(`card.range.${bar.position}`, { lo: formatValue(range.lo, lang), hi: formatValue(range.hi, lang) })}>
      <div class="band" style="left:{bar.bandLeft}%;width:{bar.bandWidth}%"></div>
      <div class="mk" style="left:{bar.marker}%"></div>
    </div>
    <div class="bar-l"><span>{formatValue(bar.axisLo, lang)}</span><span>{t('card.typical', { ref: m.reference ?? '' })}</span><span>{formatValue(bar.axisHi, lang)}</span></div>
  {/if}

  {#if lr && other}
    <div class="lr" role="img" aria-label={t('card.lr.aria', { l: formatValue(lr.left, lang), r: formatValue(lr.right, lang), unit: m.unit })}>
      <b>{t('side.L')}</b><div class="t" class:me={hemi === 'L'}><i style="width:{lr.leftPct}%"></i></div><span class="num">{formatValue(lr.left, lang)}</span>
      <b>{t('side.R')}</b><div class="t" class:me={hemi === 'R'}><i style="width:{lr.rightPct}%"></i></div><span class="num">{formatValue(lr.right, lang)}</span>
    </div>
    <div class="s">{t('card.lr.diff')} <b>{formatPct(lr.diffPct, lang)}</b> {t(Math.abs(lr.diffPct) < 10 ? 'card.lr.small' : 'card.lr.large')}</div>
  {/if}
  {#if caveats.some((c) => typeof c !== 'string' && c.severity === 'warn')}
    <div class="cw">{caveatText(caveats.find((c) => typeof c !== 'string' && c.severity === 'warn')!)}</div>
  {/if}
</div>

<style>
  .metric { padding: 12px 13px; border-radius: 12px; background: rgba(255,255,255,.035); border: 1px solid var(--line); min-width: 0; }
  .metric.wide { grid-column: 1 / -1; }
  .k { font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--text-3); font-weight: 600; display: flex; justify-content: space-between; align-items: center; gap: 6px; }
  .v { font-size: 22px; font-weight: 650; letter-spacing: -0.02em; margin-top: 2px; }
  .v small { font-size: 12px; color: var(--text-3); font-weight: 500; margin-left: 4px; }
  .bar { position: relative; height: 8px; border-radius: 6px; background: rgba(255,255,255,.06); margin-top: 10px; }
  .band { position: absolute; top: 0; bottom: 0; border-radius: 6px; background: rgba(74,222,128,.22); }
  .mk { position: absolute; top: -4px; width: 4px; height: 16px; border-radius: 3px; background: #fff; transform: translateX(-2px); box-shadow: 0 0 10px rgba(255,255,255,.6); }
  .bar-l { display: flex; justify-content: space-between; gap: 8px; font-size: 10px; color: var(--text-3); margin-top: 4px; font-family: var(--mono); }
  .lr { display: grid; grid-template-columns: 16px 1fr 56px; gap: 6px 8px; align-items: center; font-size: 12px; margin-top: 10px; }
  .lr .t { height: 7px; border-radius: 4px; background: rgba(255,255,255,.06); overflow: hidden; }
  .lr .t i { display: block; height: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--accent-2), var(--accent)); }
  .lr .t.me i { background: linear-gradient(90deg, #f472b6, #fbbf24); }
  .lr b { font-weight: 600; color: var(--text-2); font-family: var(--mono); font-size: 11px; }
  .num { text-align: right; font-family: var(--mono); color: var(--text-2); font-size: 11.5px; }
  .s, .cw { font-size: 11.5px; color: var(--text-3); margin-top: 6px; line-height: 1.4; }
  .s b { color: var(--text); }
  .cw { color: #fde68a; }
  p { margin: 0 0 6px; }
  ul { margin: 0 0 6px; padding-left: 16px; }
  li.warn { color: #fde68a; }
  p.edu { color: var(--text-3); margin: 0; }
</style>
