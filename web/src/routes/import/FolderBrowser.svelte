<script lang="ts">
  import { onMount } from 'svelte'
  import { fsList, fsRoots, type FsEntry, type FsListing, type FsRoot } from '../../lib/api/endpoints'
  import Icon, { type IconName } from '../../lib/components/Icon.svelte'
  import { t } from '../../lib/i18n/index.svelte'
  import { breadcrumbs, formatSize } from './paths'

  let { onpick, disabled = false }: { onpick: (path: string) => void; disabled?: boolean } = $props()

  let roots = $state<FsRoot[] | null>(null)
  let listing = $state<FsListing | null>(null)
  let loading = $state(false)
  let error = $state<string | null>(null)
  let listEl = $state<HTMLElement | null>(null)

  const ROOT_ICON: Record<string, IconName> = { drive: 'drive', home: 'home', removable: 'disc', recent: 'clock' }
  const crumbs = $derived(listing ? breadcrumbs(listing.path) : [])

  onMount(async () => {
    try { roots = await fsRoots() } catch (e) { error = String((e as Error).message ?? e); roots = [] }
  })

  async function open(path: string) {
    loading = true; error = null
    try {
      listing = await fsList(path)
      queueMicrotask(() => listEl?.querySelector<HTMLElement>('button')?.focus({ preventScroll: true }))
    } catch (e) {
      error = t('import.browse.error')
    } finally { loading = false }
  }

  const iconFor = (e: FsEntry): IconName => (e.hint ? 'disc' : e.kind === 'dir' ? 'folder' : 'file')
</script>

<div class="fb" aria-busy={loading}>
  {#if !listing}
    {#if roots === null}
      <div class="sk" aria-hidden="true"><i></i><i></i><i></i></div>
    {:else if roots.length === 0}
      <p class="faint">{t('import.browse.noRoots')}</p>
    {:else}
      <ul class="roots" role="list">
        {#each roots as r}
          <li>
            <button type="button" class="root" onclick={() => open(r.path)} {disabled}>
              <span class="ico"><Icon name={ROOT_ICON[r.kind] ?? 'folder'} size={20} /></span>
              <span class="rl"><b>{r.label}</b><small>{t(`import.root.${r.kind}`)}</small></span>
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  {:else}
    <div class="bar">
      <nav class="crumbs" aria-label={t('import.browse.path')}>
        <button type="button" class="crumb" onclick={() => (listing = null)}>{t('import.browse.places')}</button>
        {#each crumbs as c, i}
          <span class="sep" aria-hidden="true">›</span>
          {#if i === crumbs.length - 1}
            <span class="crumb here" aria-current="location">{c.label}</span>
          {:else}
            <button type="button" class="crumb" onclick={() => open(c.path)}>{c.label}</button>
          {/if}
        {/each}
      </nav>
      <span class="grow"></span>
      {#if listing.parent}
        <button type="button" class="btn sm" onclick={() => open(listing!.parent!)} aria-label={t('import.browse.up')}><Icon name="up" size={16} /></button>
      {/if}
      <button type="button" class="btn primary sm" onclick={() => onpick(listing!.path)} {disabled}>{t('import.browse.useFolder')}</button>
    </div>

    {#if listing.entries.length === 0}
      <p class="empty faint">{t('import.browse.empty')}</p>
    {:else}
      <ul class="entries" role="list" bind:this={listEl}>
        {#each listing.entries as e (e.path)}
          <li class:hinted={!!e.hint}>
            <button
              type="button" class="entry" {disabled}
              onclick={() => (e.kind === 'dir' ? open(e.path) : onpick(e.path))}
              aria-label={e.kind === 'dir' ? t('import.browse.openFolder', { name: e.name }) : t('import.browse.useFile', { name: e.name })}
            >
              <span class="ico"><Icon name={iconFor(e)} size={18} /></span>
              <span class="nm">{e.name}</span>
              {#if e.hint}<span class="chip hint" title={t(`import.hint.${e.hint}`)}>{t('import.hint.disc')}</span>{/if}
              {#if e.kind === 'file'}<span class="faint sz">{formatSize(e.size)}</span>{/if}
            </button>
            {#if e.kind === 'dir' && e.hint}
              <button type="button" class="btn primary sm" onclick={() => onpick(e.path)} {disabled}>{t('import.browse.openThis')}</button>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  {/if}
  {#if error}<p class="err" role="alert">{error}</p>{/if}
</div>

<style>
  .fb { display: grid; gap: 12px; }
  .roots { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 10px; }
  .root { width: 100%; display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: 13px; cursor: pointer; text-align: left;
    background: rgba(255,255,255,.03); border: 1px solid var(--line); transition: background .15s, border-color .15s; }
  .root:hover:not(:disabled) { background: rgba(255,255,255,.06); border-color: var(--line-2); }
  .ico { width: 36px; height: 36px; flex: none; display: grid; place-items: center; border-radius: 10px; background: var(--accent-soft); color: var(--accent); }
  .rl { display: grid; min-width: 0; }
  .rl b { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .rl small { color: var(--text-3); font-size: 12px; }
  .bar { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .grow { flex: 1; }
  .crumbs { display: flex; align-items: center; flex-wrap: wrap; gap: 2px; min-width: 0; font-size: 13px; }
  .crumb { background: none; border: 0; color: var(--text-2); padding: 4px 6px; border-radius: 7px; cursor: pointer; max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  button.crumb:hover { color: var(--text); background: rgba(255,255,255,.05); }
  .crumb.here { color: var(--text); font-weight: 600; cursor: default; }
  .sep { color: var(--text-3); }
  .btn.sm { padding: 7px 12px; font-size: 13px; }
  .entries { list-style: none; margin: 0; padding: 4px; display: grid; gap: 2px; max-height: 46vh; overflow: auto; border: 1px solid var(--line); border-radius: 12px; background: rgba(0,0,0,.18); }
  .entries li { display: flex; align-items: center; gap: 8px; padding-right: 6px; border-radius: 10px; }
  .entries li.hinted { background: rgba(94,234,212,.05); }
  .entry { flex: 1; min-width: 0; display: flex; align-items: center; gap: 10px; padding: 8px 10px; border: 0; background: transparent; border-radius: 10px; cursor: pointer; text-align: left; }
  .entry:hover:not(:disabled) { background: rgba(255,255,255,.05); }
  .entry .ico { width: 30px; height: 30px; border-radius: 8px; }
  .nm { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .hint { color: var(--accent); border-color: rgba(94,234,212,.3); background: var(--accent-soft); }
  .sz { font-size: 12px; font-family: var(--mono); }
  .empty { padding: 18px; text-align: center; border: 1px dashed var(--line-2); border-radius: 12px; margin: 0; }
  .err { color: var(--danger); margin: 0; }
  .sk { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 10px; }
  .sk i { height: 66px; border-radius: 13px; background: linear-gradient(90deg, rgba(255,255,255,.03), rgba(255,255,255,.07), rgba(255,255,255,.03)); background-size: 200% 100%; animation: sh 1.4s linear infinite; }
  @keyframes sh { to { background-position: -200% 0; } }
  @media (max-width: 520px) { .hint { display: none; } }
</style>
