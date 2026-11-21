<!-- Code-splits the 3D route so three.js is only downloaded when a 3D model is opened. -->
<script lang="ts">
  import { t } from '../lib/i18n/index.svelte'
  let { params }: { params: Record<string, string> } = $props()
  const load = import('./Model3D.svelte')
</script>

{#await load}
  <div class="center" role="status"><div class="spinner" aria-label={t('common.loading')}></div></div>
{:then m}
  <m.default {params} />
{:catch e}
  <p class="panel msg" role="alert">{t('m3d.error.t')}: {String(e?.message ?? e)}</p>
{/await}

<style>
  .center { min-height: 50vh; display: grid; place-items: center; }
  .spinner { width: 38px; height: 38px; border-radius: 50%; border: 2px solid rgba(94,234,212,.15); border-top-color: var(--accent); animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .msg { max-width: 560px; margin: 10vh auto; padding: 26px; }
</style>
