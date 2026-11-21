<script lang="ts">
  import { onMount } from 'svelte'
  import TopBar from './lib/components/TopBar.svelte'
  import Home from './routes/Home.svelte'
  import Placeholder from './routes/Placeholder.svelte'
  import { bootstrapSession } from './lib/api/client'
  import { route, match } from './lib/router.svelte'
  import { t, i18n } from './lib/i18n/index.svelte'

  let session = $state<'pending' | 'ok' | 'missing' | 'invalid'>('pending')
  onMount(async () => {
    document.documentElement.lang = i18n.lang
    session = await bootstrapSession()
  })

  const routes: { pattern: string; component: any; props?: Record<string, unknown> }[] = [
    { pattern: '/', component: Home },
    { pattern: '/import', component: Placeholder, props: { title: 'nav.import' } },
    { pattern: '/learn', component: Placeholder, props: { title: 'nav.learn' } },
  ]
  const current = $derived.by(() => {
    for (const r of routes) {
      const params = match(r.pattern, route.path)
      if (params) return { ...r, params }
    }
    return { pattern: '*', component: Home, params: {} }
  })
</script>

<TopBar />
<main class="container">
  {#if session === 'pending'}
    <div class="center"><div class="spinner" aria-label="Loading"></div></div>
  {:else if session === 'ok'}
    {@const C = current.component}
    <C {...current.props} params={current.params} />
  {:else}
    <section class="panel gate fade-in">
      <h2>{t('session.missing.t')}</h2>
      <p class="muted">{t('session.missing.d')}</p>
    </section>
  {/if}
</main>

<style>
  .container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
  .center { min-height: 60vh; display: grid; place-items: center; }
  .spinner { width: 42px; height: 42px; border-radius: 50%; border: 2px solid rgba(94,234,212,.15); border-top-color: var(--accent); animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .gate { max-width: 560px; margin: 12vh auto; padding: 28px 30px; }
  .gate h2 { margin: 0 0 8px; }
</style>
