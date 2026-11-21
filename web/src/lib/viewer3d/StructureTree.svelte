<!-- Searchable structure tree grouped by lobe, with L/R chips. Fully keyboard operable (buttons + aria-expanded). -->
<script lang="ts">
  import { t } from '../i18n/index.svelte'
  import Icon from '../components/Icon.svelte'
  import { cssRgb, lobeColor } from './palette'
  import type { ViewerStore } from './store.svelte'
  import { LOBE_ORDER } from './vocab'

  interface Props {
    store: ViewerStore
    structName: (id: string) => string
    lobeName: (id: string) => string
    lobeOfStructure: (id: string) => string
    search: (id: string) => string
    onpick: (key: string) => void
    onpicklobe: (lobe: string) => void
  }
  let { store, structName, lobeName, lobeOfStructure, search, onpick, onpicklobe }: Props = $props()

  let q = $state('')
  let input: HTMLInputElement
  let listEl: HTMLDivElement
  let open = $state<Record<string, boolean>>({})

  export function focus() { input?.focus(); input?.select() }

  const groups = $derived.by(() => {
    const by = new Map<string, string[]>()
    for (const id of store.index.present.keys()) {
      const l = lobeOfStructure(id)
      if (!by.has(l)) by.set(l, [])
      by.get(l)!.push(id)
    }
    const order = [...LOBE_ORDER, ...[...by.keys()].filter((l) => !LOBE_ORDER.includes(l))]
    return order.filter((l) => by.has(l)).map((l) => ({
      lobe: l,
      items: by.get(l)!.map((id) => ({ id, name: structName(id), hs: [...store.index.present.get(id)!].sort() }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }))
  })
  const needle = $derived(q.trim().toLowerCase())
  const filtered = $derived(needle ? groups.map((g) => ({ ...g, items: g.items.filter((i) => search(i.id).includes(needle)) })).filter((g) => g.items.length) : groups)
  const total = $derived(store.index.keys.length)

  const sel = $derived(store.s.sel)
  const selStruct = $derived(sel?.type === 'region' ? sel.id.slice(2) : null)

  // reveal the selected structure
  $effect(() => {
    const id = selStruct
    if (!id) return
    const l = lobeOfStructure(id)
    if (!open[l]) open[l] = true
    queueMicrotask(() => listEl?.querySelector<HTMLElement>(`[data-id="${CSS.escape(id)}"]`)?.scrollIntoView({ block: 'nearest' }))
  })

  const defaultSide = (hs: string[]) => (hs.includes('M') ? 'M' : hs.includes('L') ? 'L' : hs[0])
  function onkeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      const first = filtered[0]?.items[0]
      if (first) { e.preventDefault(); onpick(`${defaultSide(first.hs)}|${first.id}`) }
    } else if (e.key === 'Escape') { if (q) { q = ''; e.stopPropagation() } else input.blur() }
    else if (e.key === 'ArrowDown') { e.preventDefault(); listEl.querySelector<HTMLElement>('button')?.focus() }
  }
</script>

<div class="tree">
  <label class="search">
    <Icon name="search" size={15} />
    <span class="sr-only">{t('m3d.search')}</span>
    <input bind:this={input} bind:value={q} type="search" placeholder={t('m3d.search.ph')} autocomplete="off" spellcheck="false" {onkeydown} />
    <kbd aria-hidden="true">/</kbd>
  </label>
  <div class="th"><span>{t('m3d.structures')}</span><span class="n">{total}</span></div>
  <div class="list" bind:this={listEl}>
    {#each filtered as g (g.lobe)}
      {@const isOpen = !!needle || !!open[g.lobe]}
      <div class="lobe">
        <div class="lh">
          <button type="button" class="lt" aria-expanded={isOpen} onclick={() => (open[g.lobe] = !open[g.lobe])}>
            <span class="car" class:o={isOpen} aria-hidden="true">▶</span>
            <span class="sw" style="background:{lobeColor(g.lobe)}" aria-hidden="true"></span>
            <span class="ln">{lobeName(g.lobe)}</span>
            <span class="n">{g.items.length}</span>
          </button>
          <button type="button" class="all" class:on={sel?.type === 'lobe' && sel.id === g.lobe} onclick={() => onpicklobe(g.lobe)}
            aria-label={t('m3d.selectLobe', { name: lobeName(g.lobe) })} title={t('m3d.selectLobe', { name: lobeName(g.lobe) })}><Icon name="focus" size={13} /></button>
        </div>
        {#if isOpen}
          <ul role="list">
            {#each g.items as it (it.id)}
              {@const c = store.colors[it.id]}
              <li class="it" class:sel={selStruct === it.id} data-id={it.id}>
                <button type="button" class="nm" onclick={() => onpick(`${defaultSide(it.hs)}|${it.id}`)} aria-current={selStruct === it.id ? 'true' : undefined}>
                  <span class="dot" style="background:{c ? cssRgb(c) : 'var(--text-3)'}" aria-hidden="true"></span>
                  <span class="tx">{it.name}</span>
                </button>
                {#each it.hs.filter((h) => h !== 'M') as h}
                  <button type="button" class="lr" class:on={sel?.type === 'region' && sel.id === `${h}|${it.id}`}
                    aria-label={t(h === 'L' ? 'side.leftOf' : 'side.rightOf', { name: it.name })}
                    aria-pressed={sel?.type === 'region' && sel.id === `${h}|${it.id}`}
                    onclick={() => onpick(`${h}|${it.id}`)}>{t(h === 'L' ? 'side.L' : 'side.R')}</button>
                {/each}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {:else}
      <p class="none faint">{t('m3d.noMatch')}</p>
    {/each}
  </div>
</div>

<style>
  .tree { display: flex; flex-direction: column; min-height: 0; }
  .search { display: flex; align-items: center; gap: 8px; margin: 0 12px; padding: 0 10px; border-radius: 10px; border: 1px solid var(--line-2); background: rgba(255,255,255,.03); color: var(--text-3); }
  .search:focus-within { border-color: var(--accent); }
  .search input { flex: 1; min-width: 0; background: transparent; border: 0; outline: none; padding: 8px 0; font-size: 13px; }
  kbd { font: 500 10.5px var(--mono); padding: 1px 6px; border-radius: 6px; border: 1px solid var(--line-2); color: var(--text-3); }
  .th { display: flex; justify-content: space-between; padding: 12px 16px 4px; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-3); font-weight: 600; }
  .n { font-family: var(--mono); font-size: 10.5px; color: var(--text-3); letter-spacing: 0; }
  .list { padding: 0 8px 10px; }
  .lobe { margin-top: 4px; }
  .lh { display: flex; align-items: center; gap: 2px; }
  .lt { flex: 1; display: flex; align-items: center; gap: 8px; padding: 7px 8px; border-radius: 9px; border: 0; background: transparent; cursor: pointer; font-size: 12px; font-weight: 600; color: var(--text-2); text-align: left; }
  .lt:hover { background: rgba(255,255,255,.04); color: var(--text); }
  .car { font-size: 9px; color: var(--text-3); transition: transform .2s; }
  .car.o { transform: rotate(90deg); }
  .sw { width: 10px; height: 10px; border-radius: 3px; flex: none; }
  .ln { flex: 1; }
  .all { width: 26px; height: 26px; display: grid; place-items: center; border-radius: 7px; border: 1px solid transparent; background: transparent; color: var(--text-3); cursor: pointer; }
  .all:hover, .all.on { color: var(--accent); border-color: rgba(94,234,212,.3); }
  ul { list-style: none; margin: 0; padding: 2px 0 4px 6px; }
  .it { display: flex; align-items: center; gap: 3px; border-radius: 8px; }
  .it:hover { background: rgba(255,255,255,.04); }
  .it.sel { background: var(--accent-soft); }
  .nm { flex: 1; min-width: 0; display: flex; align-items: center; gap: 8px; padding: 5px 8px; border: 0; background: transparent; cursor: pointer; font-size: 12.5px; color: var(--text-2); text-align: left; border-radius: 8px; }
  .it.sel .nm, .nm:hover { color: var(--text); }
  .tx { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dot { width: 7px; height: 7px; border-radius: 50%; flex: none; }
  .lr { font: 500 10px var(--mono); padding: 2px 6px; border-radius: 5px; border: 1px solid var(--line); background: transparent; color: var(--text-3); cursor: pointer; }
  .lr:hover { border-color: var(--accent); color: var(--accent); }
  .lr.on { background: var(--accent); color: #04221d; border-color: var(--accent); }
  .none { padding: 10px 12px; font-size: 12.5px; margin: 0; }
</style>
