<!-- Small (i) button that discloses how a number was obtained and its limits. Esc / outside click closes. -->
<script lang="ts">
  import type { Snippet } from 'svelte'
  import Icon from '../components/Icon.svelte'
  import { t } from '../i18n/index.svelte'

  let { label, children }: { label: string; children: Snippet } = $props()
  let open = $state(false)
  let root: HTMLSpanElement
  const id = `pop-${Math.random().toString(36).slice(2, 9)}`

  $effect(() => {
    if (!open) return
    const down = (e: PointerEvent) => { if (!root.contains(e.target as Node)) open = false }
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { open = false; e.stopPropagation(); root.querySelector('button')?.focus() } }
    document.addEventListener('pointerdown', down)
    root.addEventListener('keydown', key)
    return () => { document.removeEventListener('pointerdown', down); root.removeEventListener('keydown', key) }
  })
</script>

<span class="ip" bind:this={root}>
  <button type="button" class="b" aria-expanded={open} aria-controls={id} aria-label={t('card.howMeasured', { name: label })} title={t('card.howMeasured', { name: label })} onclick={() => (open = !open)}>
    <Icon name="info" size={13} />
  </button>
  {#if open}<div class="pop" {id} role="note">{@render children()}</div>{/if}
</span>

<style>
  .ip { position: relative; display: inline-flex; }
  .b { width: 22px; height: 22px; display: grid; place-items: center; border-radius: 50%; border: 1px solid transparent; background: transparent; color: var(--text-3); cursor: pointer; padding: 0; }
  .b:hover, .b[aria-expanded='true'] { color: var(--accent); border-color: rgba(94,234,212,.35); }
  .pop { position: absolute; right: -6px; top: 26px; z-index: 30; width: min(280px, 76vw); padding: 10px 12px; border-radius: 11px; background: var(--panel-solid);
    border: 1px solid var(--line-2); box-shadow: 0 16px 40px -12px rgba(0,0,0,.8); font-size: 12px; line-height: 1.5; color: var(--text-2); text-transform: none; letter-spacing: 0; font-weight: 400; }
</style>
