<script lang="ts">
  import Icon, { type IconName } from '../components/Icon.svelte'
  import { t } from '../i18n/index.svelte'
  import type { LayoutN, Tool } from './types'

  interface Props {
    tool: Tool
    invert: boolean
    playing: boolean
    canPlay?: boolean
    canMeasure: boolean
    labelsAvailable: boolean
    labelsOn: boolean
    layout: LayoutN
    layouts?: LayoutN[]
    linked: boolean
    ontool: (t: Tool) => void
    oninvert: () => void
    onplay: () => void
    onreset: () => void
    onlabels: () => void
    onlayout: (n: LayoutN) => void
    onlink: () => void
  }
  let {
    tool, invert, playing, canPlay = true, canMeasure, labelsAvailable, labelsOn, layout, layouts = [1, 2, 3, 4], linked,
    ontool, oninvert, onplay, onreset, onlabels, onlayout, onlink,
  }: Props = $props()

  const TOOLS: { id: Tool; icon: IconName; key: string }[] = [
    { id: 'scroll', icon: 'layers', key: 'S' },
    { id: 'wl', icon: 'contrast', key: 'W' },
    { id: 'pan', icon: 'hand', key: 'P' },
    { id: 'zoom', icon: 'focus', key: 'Z' },
    { id: 'measure', icon: 'ruler', key: 'M' },
  ]
  const LAYOUT_ICON: Record<LayoutN, IconName> = { 1: 'square', 2: 'columns', 3: 'three', 4: 'grid' }
</script>

<div class="vtb panel" role="toolbar" aria-label={t('viewer.toolbar')}>
  <div class="seg" role="group" aria-label={t('viewer.tools')}>
    {#each TOOLS as tl}
      {@const disabled = tl.id === 'measure' && !canMeasure}
      <button
        type="button"
        class:on={tool === tl.id}
        aria-pressed={tool === tl.id}
        aria-label={t(`viewer.tool.${tl.id}`)}
        title={disabled ? t('viewer.noMeasure') : `${t(`viewer.tool.${tl.id}.hint`)} (${tl.key})`}
        {disabled}
        onclick={() => ontool(tl.id)}
      ><Icon name={tl.icon} /><span class="lbl">{t(`viewer.tool.${tl.id}`)}</span></button>
    {/each}
  </div>

  <button type="button" class="btn icon" class:on={invert} aria-pressed={invert} aria-label={t('viewer.invert')} title={`${t('viewer.invert')} (I)`} onclick={oninvert}><Icon name="invert" /></button>
  <button type="button" class="btn icon" class:on={playing} aria-pressed={playing} disabled={!canPlay}
    aria-label={playing ? t('viewer.pause') : t('viewer.play')} title={`${playing ? t('viewer.pause') : t('viewer.play')} (Space)`} onclick={onplay}>
    <Icon name={playing ? 'pause' : 'play'} />
  </button>
  <button type="button" class="btn icon" aria-label={t('viewer.reset')} title={`${t('viewer.reset.hint')} (R)`} onclick={onreset}><Icon name="reset" /></button>
  {#if labelsAvailable}
    <button type="button" class="btn" class:on={labelsOn} aria-pressed={labelsOn} title={`${t('viewer.labels.hint')} (L)`} onclick={onlabels}>
      <Icon name="spark" /><span class="lbl">{t('viewer.labels')}</span>
    </button>
  {/if}

  <span class="grow"></span>

  {#if layouts.length > 1}
    <div class="seg layouts" role="group" aria-label={t('viewer.layout')}>
      {#each layouts as n}
        <button type="button" class:on={layout === n} aria-pressed={layout === n} aria-label={t('viewer.panes', { n })} title={`${t('viewer.panes', { n })} (${n})`} onclick={() => onlayout(n)}>
          <Icon name={LAYOUT_ICON[n]} />
        </button>
      {/each}
    </div>
    {#if layout > 1}
      <button type="button" class="btn" class:on={linked} aria-pressed={linked} title={t('viewer.link.hint')} onclick={onlink}>
        <Icon name="link" /><span class="lbl">{t('viewer.link')}</span>
      </button>
    {/if}
  {/if}
</div>

<style>
  .vtb { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 8px; }
  .grow { flex: 1; }
  .seg { display: inline-flex; padding: 3px; gap: 2px; border-radius: 12px; background: rgba(255,255,255,.035); border: 1px solid var(--line); }
  .seg button { display: inline-flex; align-items: center; gap: 6px; border: 0; background: transparent; color: var(--text-2);
    padding: 6px 10px; border-radius: 9px; cursor: pointer; font-size: 13px; font-weight: 500; transition: background .15s, color .15s; }
  .seg button:hover:not(:disabled) { color: var(--text); background: rgba(255,255,255,.06); }
  .seg button.on { color: #042520; background: var(--accent); }
  .seg button:disabled { opacity: .4; cursor: not-allowed; }
  .btn { padding: 7px 11px; font-size: 13px; }
  .btn.icon { padding: 7px; width: 36px; height: 36px; }
  .btn.on { background: var(--accent-soft); border-color: rgba(94,234,212,.45); color: var(--accent); }
  @media (max-width: 980px) { .lbl { display: none; } .seg button { padding: 7px 9px; } }
  @media (max-width: 520px) { .layouts { display: none; } }
</style>
