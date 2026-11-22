<script lang="ts">
  import Icon from '../components/Icon.svelte'
  import { t } from '../i18n/index.svelte'
  import { vesselKind } from '../viewer3d/kb'
  import Disclaimer from './Disclaimer.svelte'
  import type { CardCtx } from './types'

  let { ctx, id }: { ctx: CardCtx; id: string } = $props()
  const kind = $derived(vesselKind(id, ctx.framing))
  // the knowledge base's artery overview is about the head and neck
  const A = $derived(kind === 'body' ? undefined : ctx.kb.arteries)
</script>

<div class="ihead">
  <button type="button" class="btn x" aria-label={t('card.close')} title={t('card.close')} onclick={() => ctx.act.select(null)}><Icon name="close" size={16} /></button>
  <div class="kick"><span class="chip"><span class="dot" style="background:#ef4444"></span>{t('card.vessel.kicker')}</span></div>
  <h2>{t(`card.vessel.${kind}`)}</h2>
  <p class="tag">{t(`card.vessel.${kind}.tag`)}</p>
</div>
<div class="ibody">
  {#if A?.overview}<p>{A.overview}</p>{/if}
  {#if A?.vessels && Object.keys(A.vessels).length}
    <h3 class="sh">{t('card.vessel.main')}</h3>
    <dl class="kv">
      {#each Object.values(A.vessels) as v}<dt>{v.name}</dt><dd>{v.supplies}{#if v.note}<br /><span class="faint">{v.note}</span>{/if}</dd>{/each}
    </dl>
  {/if}
  <div class="note">{ctx.ft('card.vessel.caveat')}</div>
  <Disclaimer />
</div>
