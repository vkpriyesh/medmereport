<!-- Right panel: picks the card for the current selection. -->
<script lang="ts">
  import './cards.css'
  import LobeCard from './LobeCard.svelte'
  import RegionCard from './RegionCard.svelte'
  import SummaryCard from './SummaryCard.svelte'
  import type { CardCtx } from './types'
  import VesselCard from './VesselCard.svelte'

  let { ctx }: { ctx: CardCtx } = $props()
  const sel = $derived(ctx.store.s.sel)
  let scroller: HTMLDivElement
  $effect(() => { void [sel?.type, sel?.id, ctx.store.s.mode]; if (scroller) scroller.scrollTop = 0 })
</script>

<div class="cardx" bind:this={scroller}>
  {#key `${sel?.type}:${sel?.id}:${ctx.store.s.mode}`}
    <div class="fade-in">
      {#if !sel}<SummaryCard {ctx} />
      {:else if sel.type === 'region'}<RegionCard {ctx} id={sel.id} />
      {:else if sel.type === 'lobe'}<LobeCard {ctx} id={sel.id} />
      {:else}<VesselCard {ctx} id={sel.id} />{/if}
    </div>
  {/key}
</div>

<style>
  .cardx { height: 100%; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; scrollbar-color: rgba(148,170,220,.25) transparent; }
</style>
