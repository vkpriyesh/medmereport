<script lang="ts">
  import { t } from '../lib/i18n/index.svelte'
  let { title }: { title: string; params?: Record<string, string> } = $props()
</script>

<section class="panel wip fade-in">
  <span class="kicker">In progress</span>
  <h2>{t(title)}</h2>
  <p class="muted">This part of medmereport is being built.</p>
</section>

<style>
  .wip { max-width: 560px; margin: 12vh auto; padding: 28px 30px; }
  h2 { margin: 6px 0 8px; }
</style>
