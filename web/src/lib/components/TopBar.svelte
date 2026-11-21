<script lang="ts">
  import { t, i18n, setLang, LANGS } from '../i18n/index.svelte'
  import { link, route } from '../router.svelte'

  const nav = [
    { href: '/', key: 'nav.home' },
    { href: '/import', key: 'nav.import' },
    { href: '/learn', key: 'nav.learn' },
  ]
</script>

<header class="topbar">
  <a href="/" use:link class="brand" aria-label="medmereport home">
    <span class="logo" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="#042520" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3c-3.5 0-6 2.4-6 5.6 0 1.4.5 2.4 1.2 3.3-.8.8-1.2 1.8-1.2 3 0 2.8 2.2 5.1 5 5.1h2c2.8 0 5-2.3 5-5.1 0-1.2-.4-2.2-1.2-3 .7-.9 1.2-1.9 1.2-3.3C18 5.4 15.5 3 12 3z"/>
        <path d="M12 3v18M8.5 9.5c1 .7 2.2 1 3.5 1M15.5 14.5c-1-.7-2.2-1-3.5-1"/>
      </svg>
    </span>
    <span class="name">medmereport<small>{t('app.tagline')}</small></span>
  </a>

  <nav aria-label="Main">
    {#each nav as n}
      <a href={n.href} use:link class:active={route.path === n.href || (n.href !== '/' && route.path.startsWith(n.href))}>{t(n.key)}</a>
    {/each}
  </nav>

  <span class="spacer"></span>

  <span class="chip privacy" title={t('privacy.badge.title')}><span class="dot"></span>{t('privacy.badge')}</span>

  <label class="lang">
    <span class="sr-only">{t('lang')}</span>
    <select value={i18n.lang} onchange={(e) => setLang((e.target as HTMLSelectElement).value)}>
      {#each LANGS as l}<option value={l.code}>{l.label}</option>{/each}
    </select>
  </label>
</header>

<style>
  .topbar {
    position: sticky; top: 0; z-index: 50; height: var(--topbar);
    display: flex; align-items: center; gap: 18px; padding: 0 20px;
    background: linear-gradient(180deg, rgba(5,7,13,.92), rgba(5,7,13,.65));
    backdrop-filter: blur(14px); border-bottom: 1px solid var(--line);
  }
  .brand { display: flex; align-items: center; gap: 10px; color: var(--text); font-weight: 650; letter-spacing: -.01em; }
  .logo { width: 32px; height: 32px; border-radius: 10px; display: grid; place-items: center;
    background: conic-gradient(from 200deg, #5eead4, #38bdf8, #a78bfa, #5eead4); box-shadow: 0 0 24px rgba(94,234,212,.35); }
  .logo svg { width: 19px; height: 19px; }
  .name small { display: block; font-size: 11px; font-weight: 400; color: var(--text-3); margin-top: -3px; }
  nav { display: flex; gap: 4px; margin-left: 8px; }
  nav a { padding: 7px 13px; border-radius: 10px; color: var(--text-2); font-weight: 500; font-size: 13.5px; border: 1px solid transparent; transition: .18s; }
  nav a:hover { color: var(--text); background: rgba(255,255,255,.04); }
  nav a.active { color: var(--text); background: var(--accent-soft); border-color: rgba(94,234,212,.25); }
  .spacer { flex: 1; }
  .lang select { background: rgba(255,255,255,.04); border: 1px solid var(--line); border-radius: 9px; padding: 5px 8px; font-size: 13px; }
  .lang option { background: var(--panel-solid); }
  @media (max-width: 760px) {
    .name small, .privacy { display: none; }
    nav a { padding: 6px 9px; font-size: 13px; }
    .topbar { gap: 8px; padding: 0 12px; }
  }
</style>
