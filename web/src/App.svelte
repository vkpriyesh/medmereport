<script lang="ts">
  import { onMount } from 'svelte'
  import TopBar from './lib/components/TopBar.svelte'
  import Home from './routes/Home.svelte'
  import Placeholder from './routes/Placeholder.svelte'
  import Import from './routes/Import.svelte'
  import Study from './routes/Study.svelte'
  import View from './routes/View.svelte'
  import { MOCK } from './lib/api/endpoints'
  import { bootstrapSession } from './lib/api/client'
  import { route, resolve } from './lib/router.svelte'
  import { t, i18n } from './lib/i18n/index.svelte'

  let session = $state<'pending' | 'ok' | 'missing' | 'invalid'>('pending')
  onMount(async () => {
    document.documentElement.lang = i18n.lang
    // dev-only mock mode has no engine (and therefore no session) — see lib/api/mock.ts
    session = MOCK ? 'ok' : await bootstrapSession()
  })

  type Route = { pattern: string; component: any; props?: Record<string, unknown>; wide?: boolean }
  const routes: Route[] = [
    { pattern: '/', component: Home },
    { pattern: '/import', component: Import },
    { pattern: '/study/:id', component: Study },
    { pattern: '/study/:id/view', component: View, wide: true },
    { pattern: '/study/:id/view/:seriesId', component: View, wide: true },
    { pattern: '/study/:id/sagittal', component: View, props: { preset: 'sagittal' }, wide: true },
    { pattern: '/learn', component: Placeholder, props: { title: 'nav.learn' } },
  ]
  const current = $derived(resolve(routes, route.path) ?? { pattern: '*', component: Home, params: {} as Record<string, string>, wide: false })
</script>

<TopBar />
<main class="container" class:wide={current.wide}>
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
  .container.wide { max-width: none; padding: 0 14px; }
  @media (max-width: 520px) { .container, .container.wide { padding: 0 16px; } }
  .center { min-height: 60vh; display: grid; place-items: center; }
  .spinner { width: 42px; height: 42px; border-radius: 50%; border: 2px solid rgba(94,234,212,.15); border-top-color: var(--accent); animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .gate { max-width: 560px; margin: 12vh auto; padding: 28px 30px; }
  .gate h2 { margin: 0 0 8px; }
</style>
