<!-- Left panel: mode, colour-by, pick-by, layers, X-ray, explode, clipping, structure tree. -->
<script lang="ts">
  import type { Snippet } from 'svelte'
  import Icon from '../components/Icon.svelte'
  import { has, t } from '../i18n/index.svelte'
  import type { DataMap } from './datamap'
  import { framedKey } from './framing'
  import { LAYER_COLORS } from './palette'
  import type { Action } from './state'
  import type { ViewerStore } from './store.svelte'
  import type { Axis, ColorBy } from './types'

  interface Props { store: ViewerStore; dataMaps: DataMap[]; dataLabel: (m: DataMap) => string; tree: Snippet }
  let { store, dataMaps, dataLabel, tree }: Props = $props()

  const s = $derived(store.s)
  const d = (a: Action) => store.dispatch(a)

  /** Translate with the model's framing variant (`m3d.xray.body` → "X-ray", brain keeps "X-ray cortex"). */
  const ft = (k: string, vars?: Record<string, string | number>) => t(framedKey(k, store.framing, has), vars)
  const layerName = (l: string) => (has(`m3d.layer.${l}`) ? ft(`m3d.layer.${l}`) : l.replace(/_/g, ' '))
  const colorOpts = $derived<{ id: ColorBy; label: string; title?: string }[]>([
    { id: 'anatomy', label: t('m3d.color.anatomy') },
    { id: 'lobes', label: ft('m3d.color.lobes') },
    { id: 'natural', label: t('m3d.color.natural') },
    ...dataMaps.map((m) => ({ id: `data:${m.key}` as ColorBy, label: dataLabel(m), title: t('m3d.color.dataTitle', { name: dataLabel(m) }) })),
  ])
  const AXES: Axis[] = ['y', 'x', 'z']
  const pct = (v: number) => Math.round(v * 100)
</script>

<div class="cp">
  <div class="sec mode">
    <div class="seg" role="group" aria-label={t('m3d.mode')}>
      <button type="button" class:on={s.mode === 'mine'} aria-pressed={s.mode === 'mine'} onclick={() => d({ type: 'mode', mode: 'mine' })}><Icon name="square" size={15} />{t('m3d.mode.mine')}</button>
      <button type="button" class:on={s.mode === 'learn'} aria-pressed={s.mode === 'learn'} onclick={() => d({ type: 'mode', mode: 'learn' })}><Icon name="spark" size={15} />{t('m3d.mode.learn')}</button>
    </div>
    <p class="hint">{t(s.mode === 'mine' ? 'm3d.mode.mine.hint' : 'm3d.mode.learn.hint')}</p>
  </div>

  <div class="sec">
    <div class="lab" id="cb-l">{t('m3d.colorBy')}</div>
    <div class="seg wrap" role="radiogroup" aria-labelledby="cb-l">
      {#each colorOpts as o (o.id)}
        <button type="button" role="radio" aria-checked={s.colorBy === o.id} class:on={s.colorBy === o.id} title={o.title} onclick={() => d({ type: 'colorBy', colorBy: o.id })}>{o.label}</button>
      {/each}
    </div>
    <div class="row">
      <span id="pb-l">{t('m3d.pickBy')}</span>
      <div class="seg sm" role="radiogroup" aria-labelledby="pb-l">
        <button type="button" role="radio" aria-checked={s.pickBy === 'structure'} class:on={s.pickBy === 'structure'} onclick={() => d({ type: 'pickBy', pickBy: 'structure' })}>{t('m3d.pickBy.structure')}</button>
        <button type="button" role="radio" aria-checked={s.pickBy === 'lobe'} class:on={s.pickBy === 'lobe'} onclick={() => d({ type: 'pickBy', pickBy: 'lobe' })}>{ft('m3d.pickBy.lobe')}</button>
      </div>
    </div>
  </div>

  <div class="sec">
    <div class="lab">{t('m3d.layers')}</div>
    <ul class="layers" role="list">
      {#each store.index.layers as l (l)}
        <li><button type="button" role="switch" aria-checked={!!s.show[l]} class="tg" class:on={!!s.show[l]} onclick={() => d({ type: 'layer', layer: l })}>
          <span><span class="dot" style="background:{LAYER_COLORS[l] ?? '#cbd5e1'}" aria-hidden="true"></span>{layerName(l)}</span><span class="sw" aria-hidden="true"></span>
        </button></li>
      {/each}
      <li><button type="button" role="switch" aria-checked={s.xray} class="tg" class:on={s.xray} onclick={() => d({ type: 'xray' })} title={ft('m3d.xray.title')}>
        <span><span class="dot" style="background:#e2e8f0" aria-hidden="true"></span>{ft('m3d.xray')} <kbd>X</kbd></span><span class="sw" aria-hidden="true"></span>
      </button></li>
      <li><button type="button" role="switch" aria-checked={s.isolate} class="tg" class:on={s.isolate} disabled={!s.sel} onclick={() => d({ type: 'isolate' })} title={t('m3d.isolate.title')}>
        <span><span class="dot" style="background:var(--accent)" aria-hidden="true"></span>{t('m3d.isolate')} <kbd>I</kbd></span><span class="sw" aria-hidden="true"></span>
      </button></li>
    </ul>
  </div>

  <div class="sec">
    <label class="row sl"><span class="w">{t('m3d.explode')}</span>
      <input type="range" min="0" max="1" step="0.01" value={s.explode} style="--p:{pct(s.explode)}%" aria-valuetext="{pct(s.explode)}%"
        oninput={(e) => d({ type: 'explode', value: +e.currentTarget.value })} />
      <span class="val">{pct(s.explode)}%</span></label>
    <label class="row sl"><span class="w">{t('m3d.cut')}</span>
      <input type="range" min="0" max="1" step="0.005" value={s.cut} style="--p:{pct(s.cut)}%" aria-valuetext={s.cut >= 0.999 ? t('m3d.cut.off') : `${pct(s.cut)}%`}
        oninput={(e) => d({ type: 'cut', value: +e.currentTarget.value })} />
      <span class="val">{s.cut >= 0.999 ? t('m3d.cut.off') : `${pct(s.cut)}%`}</span></label>
    <div class="row">
      <span class="faint sm-t" id="ax-l"><Icon name="cut" size={13} /> {t('m3d.cut.axis')}</span>
      <div class="seg sm" role="radiogroup" aria-labelledby="ax-l">
        {#each AXES as a}
          <button type="button" role="radio" aria-checked={s.cutAxis === a} class:on={s.cutAxis === a} onclick={() => d({ type: 'cutAxis', axis: a })}>{t(`m3d.axis.${a}`)}</button>
        {/each}
      </div>
    </div>
  </div>

  <div class="sec tree">{@render tree()}</div>
</div>

<style>
  .cp { display: flex; flex-direction: column; gap: 2px; padding-bottom: 10px; }
  .sec { padding: 10px 14px; border-top: 1px solid var(--line); }
  .sec.tree { padding: 12px 0 0; }
  .sec.mode { border-top: 0; padding-top: 12px; }
  .lab { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-3); font-weight: 600; margin-bottom: 8px; }
  .hint { font-size: 11.5px; color: var(--text-3); margin: 8px 2px 4px; line-height: 1.45; }
  .seg { display: flex; gap: 3px; padding: 3px; border-radius: 11px; background: rgba(255,255,255,.04); border: 1px solid var(--line); }
  .mode .seg button { flex: 1; }
  .seg.wrap { flex-wrap: wrap; }
  .seg.wrap button { flex: 1 1 auto; }
  .seg button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; border: 0; background: transparent; color: var(--text-2);
    padding: 6px 9px; border-radius: 8px; font-size: 12px; cursor: pointer; white-space: nowrap; }
  .seg button:hover { color: var(--text); background: rgba(255,255,255,.05); }
  .seg button.on { background: var(--accent-soft); color: var(--accent); box-shadow: inset 0 0 0 1px rgba(94,234,212,.3); }
  .seg.sm button { padding: 3px 8px; font-size: 11.5px; }
  .row { display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: var(--text-2); margin-top: 10px; justify-content: space-between; }
  .sl input { flex: 1; min-width: 0; accent-color: var(--accent); }
  .w { width: 64px; flex: none; }
  .val { font-family: var(--mono); font-size: 11px; color: var(--text-3); width: 38px; text-align: right; }
  .sm-t { display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; }
  .layers { list-style: none; margin: 0; padding: 0; display: grid; }
  .tg { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 5px 2px; border: 0; background: transparent; color: var(--text-2); font-size: 12.5px; cursor: pointer; border-radius: 8px; text-align: left; }
  .tg:hover { color: var(--text); }
  .tg:disabled { opacity: .45; cursor: not-allowed; }
  .tg > span:first-child { display: inline-flex; align-items: center; gap: 8px; }
  .dot { width: 8px; height: 8px; border-radius: 50%; flex: none; }
  .sw { width: 30px; height: 17px; border-radius: 99px; background: rgba(255,255,255,.1); position: relative; flex: none; transition: background .2s; }
  .sw::after { content: ''; position: absolute; top: 2px; left: 2px; width: 13px; height: 13px; border-radius: 50%; background: var(--text-2); transition: transform .2s, background .2s; }
  .tg.on .sw { background: rgba(94,234,212,.35); }
  .tg.on .sw::after { transform: translateX(13px); background: var(--accent); }
  kbd { font: 500 9.5px var(--mono); padding: 0 5px; border-radius: 5px; border: 1px solid var(--line-2); color: var(--text-3); }
</style>
