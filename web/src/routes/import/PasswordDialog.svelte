<!--
  Password prompt for encrypted discs. The password lives only in this component's local state,
  is handed to `onsubmit` once and cleared immediately; it is never stored or logged.
-->
<script lang="ts">
  import { onMount, tick } from 'svelte'
  import Icon from '../../lib/components/Icon.svelte'
  import { t } from '../../lib/i18n/index.svelte'

  interface Props {
    label?: string
    wrong?: boolean
    busy?: boolean
    onsubmit: (password: string) => void
    oncancel: () => void
  }
  let { label = '', wrong = false, busy = false, onsubmit, oncancel }: Props = $props()

  let pw = $state('')
  let show = $state(false)
  let box: HTMLDivElement
  let input: HTMLInputElement
  let opener: Element | null = null

  onMount(() => {
    opener = document.activeElement
    tick().then(() => input?.focus())
    return () => { pw = ''; (opener as HTMLElement | null)?.focus?.() }
  })

  $effect(() => { if (wrong) tick().then(() => { input?.focus(); input?.select() }) })

  function submit(e: SubmitEvent) {
    e.preventDefault()
    if (!pw || busy) return
    const p = pw
    pw = ''
    onsubmit(p)
  }

  function onkeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') { e.preventDefault(); oncancel(); return }
    if (e.key !== 'Tab') return
    const f = [...box.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled)')]
    if (!f.length) return
    const first = f[0], last = f[f.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }
</script>

<div class="backdrop" role="presentation" onclick={(e) => { if (e.target === e.currentTarget && !busy) oncancel() }}>
  <div class="dlg panel fade-in" bind:this={box} role="dialog" aria-modal="true" aria-labelledby="pw-t" aria-describedby="pw-d" tabindex="-1" {onkeydown}>
    <div class="hd"><span class="ico"><Icon name="lock" size={20} /></span><h2 id="pw-t">{t('import.pw.title')}</h2></div>
    <p id="pw-d" class="muted">{label ? t('import.pw.leadNamed', { label }) : t('import.pw.lead')}</p>
    <p class="faint small">{t('import.pw.where')}</p>

    <form onsubmit={submit} autocomplete="off">
      <label for="pw-in" class="lbl">{t('import.pw.label')}</label>
      <div class="field" class:bad={wrong}>
        <input
          id="pw-in" bind:this={input} bind:value={pw}
          type={show ? 'text' : 'password'}
          autocomplete="off" autocapitalize="off" spellcheck="false"
          aria-invalid={wrong} aria-describedby={wrong ? 'pw-err' : undefined}
          disabled={busy}
        />
        <button type="button" class="eye" onclick={() => (show = !show)} aria-pressed={show} aria-label={show ? t('import.pw.hide') : t('import.pw.show')} title={show ? t('import.pw.hide') : t('import.pw.show')}>
          <Icon name={show ? 'eyeOff' : 'eye'} size={18} />
        </button>
      </div>
      {#if wrong}<p id="pw-err" class="err" role="alert">{t('import.pw.wrong')}</p>{/if}
      <p class="faint small privacy">{t('import.pw.privacy')}</p>
      <div class="actions">
        <button type="button" class="btn" onclick={oncancel} disabled={busy}>{t('common.cancel')}</button>
        <button type="submit" class="btn primary" disabled={!pw || busy}>{busy ? t('import.pw.checking') : t('import.pw.unlock')}</button>
      </div>
    </form>
  </div>
</div>

<style>
  .backdrop { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 16px; background: rgba(2,4,8,.66); backdrop-filter: blur(6px); }
  .dlg { width: min(460px, 100%); padding: 24px; background: var(--panel-solid); outline: none; }
  .hd { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
  .ico { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 11px; background: var(--accent-soft); color: var(--accent); }
  h2 { margin: 0; font-size: 19px; }
  p { margin: 0 0 10px; }
  .small { font-size: 12.5px; }
  .lbl { display: block; font-size: 13px; font-weight: 600; margin: 14px 0 6px; }
  .field { display: flex; align-items: center; border: 1px solid var(--line-2); border-radius: 11px; background: rgba(0,0,0,.25); }
  .field:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(94,234,212,.15); }
  .field.bad { border-color: var(--danger); }
  input { flex: 1; min-width: 0; border: 0; background: transparent; padding: 11px 12px; outline: none; font-family: var(--mono); letter-spacing: .04em; }
  .eye { border: 0; background: transparent; color: var(--text-2); padding: 8px 10px; cursor: pointer; border-radius: 9px; }
  .eye:hover { color: var(--text); }
  .err { color: var(--danger); font-size: 13px; margin: 8px 0 0; }
  .privacy { margin-top: 10px; }
  .actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
</style>
