<script lang="ts">
  import { onMount } from 'svelte'
  import TopBar from './lib/components/TopBar.svelte'
  import Home from './routes/Home.svelte'
  import Placeholder from './routes/Placeholder.svelte'
  import Import from './routes/Import.svelte'
  import Study from './routes/Study.svelte'
  import View from './routes/View.svelte'
  import Model3D from './routes/Model3DLazy.svelte'
  import Models from './routes/Models.svelte'
  import { MOCK } from './lib/api/endpoints'
  import { bootstrapSession } from './lib/api/client'
  import { route, resolve } from './lib/router.svelte'
  import { t, i18n } from './lib/i18n/index.svelte'

  let session = $state<'pending' | 'ok' | 'missing' | 'invalid'>('pending')
  onMount(async () => {
    document.documentElement.lang = i18n.lang
    // dev-only mock mode has no engine (and therefore no session) — see lib/api/mock.ts
    session = MOCK ? 'ok' : await bootstrapSession()
    // re-check when a new launch link is opened in this already-open tab (only the #fragment changes)
    window.addEventListener('hashchange', async () => {
      if (!MOCK && /token=/.test(location.hash)) session = await bootstrapSession()
    })
  })

  type Route = { pattern: string; component: any; props?: Record<string, unknown>; wide?: boolean; title?: string }
  const routes: Route[] = [
    { pattern: '/', component: Home },
    { pattern: '/import', component: Import, title: 'nav.import' },
    { pattern: '/study/:id', component: Study, title: 'title.study' },
    { pattern: '/study/:id/3d', component: Model3D, wide: true, title: 'title.3d' },
    { pattern: '/study/:id/view', component: View, wide: true, title: 'title.view' },
    { pattern: '/study/:id/view/:seriesId', component: View, wide: true, title: 'title.view' },
    { pattern: '/study/:id/sagittal', component: View, props: { preset: 'sagittal' }, wide: true, title: 'title.sagittal' },
    { pattern: '/models', component: Models, title: 'title.models' },
    { pattern: '/learn', component: Placeholder, props: { title: 'nav.learn' }, title: 'nav.learn' },
  ]
  const current = $derived(resolve(routes, route.path) ?? { pattern: '*', component: Home, params: {} as Record<string, string>, wide: false, title: undefined })
  // a distinct page title per screen (screen readers announce it; tabs and history become tellable apart)
  $effect(() => { document.title = current.title ? `${t(current.title)} · medmereport` : `medmereport · ${t('app.tagline')}` })
  let mainEl = $state<HTMLElement | null>(null)
  function skip(e: MouseEvent) { e.preventDefault(); mainEl?.focus() }
</script>

<a class="skip" href="#main" onclick={skip}>{t('common.skip')}</a>

<TopBar />
<main id="main" class="container" class:wide={current.wide} tabindex="-1" bind:this={mainEl}>
  {#if session === 'pending'}
    <div class="center" role="status"><div class="spinner" aria-hidden="true"></div><span class="sr-only">{t('common.loading')}</span></div>
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
  main:focus { outline: none; }
  .gate { max-width: 560px; margin: 12vh auto; padding: 28px 30px; }
  .gate h2 { margin: 0 0 8px; }
</style>
