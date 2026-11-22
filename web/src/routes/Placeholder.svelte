<!-- Stand-in for screens still being built (Learn mode is T5.1): says what is coming and where to go meanwhile. -->
<script lang="ts">
  import Icon from '../lib/components/Icon.svelte'
  import { t } from '../lib/i18n/index.svelte'
  import { link } from '../lib/router.svelte'
  let { title }: { title: string; params?: Record<string, string> } = $props()
</script>

<section class="panel msg wip fade-in" aria-labelledby="wip-t">
  <span class="kicker">{t('wip.kicker')}</span>
  <h1 id="wip-t">{t(title)}</h1>
  <p class="muted">{t('wip.d')}</p>
  <p class="muted">{t('wip.meanwhile')}</p>
  <a class="btn primary" href="/import" use:link>{t('home.cta')}<Icon name="arrow" size={16} /></a>
</section>

<style>
  .wip { margin-top: 12vh; padding: 28px 30px; }
</style>
