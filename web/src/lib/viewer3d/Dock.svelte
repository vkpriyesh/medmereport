<!-- Bottom dock: view presets, auto-rotate, screenshot, reset, and (Learn) tour + quiz; panel toggles on small screens. -->
<script lang="ts">
  import Icon from '../components/Icon.svelte'
  import { t } from '../i18n/index.svelte'
  import type { ViewerStore } from './store.svelte'
  import type { ViewPreset } from './types'

  interface Props {
    store: ViewerStore
    canTour: boolean
    canQuiz: boolean
    onview: (v: ViewPreset) => void
    onshot: () => void
    onreset: () => void
    ontour: () => void
    onquiz: () => void
    ontoggleControls: () => void
    ontoggleCard: () => void
    controlsOpen: boolean
    cardOpen: boolean
  }
  let { store, canTour, canQuiz, onview, onshot, onreset, ontour, onquiz, ontoggleControls, ontoggleCard, controlsOpen, cardOpen }: Props = $props()
  const VIEWS: ViewPreset[] = ['left', 'front', 'top', 'right', 'back', 'below', 'inside']
  const s = $derived(store.s)
</script>

<div class="dock panel" role="toolbar" aria-label={t('m3d.dock')}>
  <button type="button" class="btn icon mob" aria-expanded={controlsOpen} aria-controls="m3d-controls" aria-label={t('m3d.controls')} title={t('m3d.controls')} onclick={ontoggleControls}><Icon name="sliders" size={17} /></button>
  <div class="seg" role="group" aria-label={t('m3d.views')}>
    {#each VIEWS as v}<button type="button" onclick={() => onview(v)} title={t(`m3d.view.${v}.title`)}>{t(`m3d.view.${v}`)}</button>{/each}
  </div>
  <span class="sep" aria-hidden="true"></span>
  <button type="button" class="btn icon" class:on={s.rotate} aria-pressed={s.rotate} aria-label={t('m3d.rotate')} title={t('m3d.rotate')} onclick={() => store.dispatch({ type: 'rotate' })}><Icon name="rotate" size={17} /></button>
  <button type="button" class="btn icon" aria-label={t('m3d.shot')} title={t('m3d.shot')} onclick={onshot}><Icon name="camera" size={17} /></button>
  <button type="button" class="btn icon" aria-label={t('m3d.reset')} title={t('m3d.reset')} onclick={onreset}><Icon name="reset" size={17} /></button>
  {#if s.mode === 'learn'}
    <span class="sep" aria-hidden="true"></span>
    {#if canTour}<button type="button" class="btn" class:on={!!s.tour} onclick={ontour}><Icon name="play" size={14} />{t('m3d.tour')}</button>{/if}
    {#if canQuiz}<button type="button" class="btn" class:on={!!s.quiz} onclick={onquiz}><Icon name="spark" size={15} />{t('m3d.quiz')}</button>{/if}
  {/if}
  <button type="button" class="btn icon mob" aria-expanded={cardOpen} aria-controls="m3d-card" aria-label={t('m3d.card')} title={t('m3d.card')} onclick={ontoggleCard}><Icon name="card" size={17} /></button>
</div>

<style>
  .dock { display: flex; gap: 6px; align-items: center; padding: 7px; max-width: 100%; overflow-x: auto; scrollbar-width: none; }
  .seg { display: flex; gap: 2px; padding: 2px; border-radius: 10px; background: rgba(255,255,255,.04); border: 1px solid var(--line); }
  .seg button { border: 0; background: transparent; color: var(--text-2); padding: 6px 9px; border-radius: 8px; font-size: 12.5px; cursor: pointer; white-space: nowrap; }
  .seg button:hover { color: var(--text); background: rgba(255,255,255,.06); }
  .btn { padding: 7px 11px; font-size: 13px; }
  .btn.icon { width: 36px; height: 36px; padding: 0; flex: none; }
  .btn.on { background: var(--accent-soft); color: var(--accent); border-color: rgba(94,234,212,.35); }
  .sep { width: 1px; height: 24px; background: var(--line-2); margin: 0 2px; flex: none; }
  .mob { display: none; }
  @media (max-width: 900px) { .mob { display: inline-flex; } }
</style>
