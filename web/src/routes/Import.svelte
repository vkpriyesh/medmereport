<!-- Import wizard: choose source → detect → (password) → import with live progress → study dashboard. -->
<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { ApiError } from '../lib/api/client'
  import {
    cancelJob, inspect, listStudies, startImport, watch, MOCK,
    type InspectResult, type JobInfo, type StudySummary,
  } from '../lib/api/endpoints'
  import Icon from '../lib/components/Icon.svelte'
  import { t, i18n } from '../lib/i18n/index.svelte'
  import { link, navigate } from '../lib/router.svelte'
  import { formatStudyDate } from '../lib/study'
  import FolderBrowser from './import/FolderBrowser.svelte'
  import ImportProgress from './import/ImportProgress.svelte'
  import PasswordDialog from './import/PasswordDialog.svelte'
  import { cleanPastedPath } from './import/paths'

  type Step = 'choose' | 'inspecting' | 'detected' | 'importing' | 'failed'
  const KNOWN_ERRORS = ['no_images', 'unsupported', 'too_large', 'inspect_failed', 'request_failed', 'unknown']

  let step = $state<Step>('choose')
  let path = $state('')
  let pasted = $state('')
  let found = $state<InspectResult | null>(null)
  let remember = $state(false)
  let askPw = $state(false)
  let pwWrong = $state(false)
  let pwBusy = $state(false)
  let jobId = $state<string | null>(null)
  let stage = $state('detect')
  let pct = $state(0)
  let cancelling = $state(false)
  let notice = $state<string | null>(null)
  let failure = $state<{ code: string; message: string } | null>(null)
  let recent = $state<StudySummary[]>([])
  let heading = $state<HTMLElement | null>(null)
  let stop: (() => void) | null = null

  onMount(async () => {
    try { recent = await listStudies() } catch { recent = [] }
  })
  onDestroy(() => stop?.())

  const stepNo = $derived(step === 'choose' ? 0 : step === 'inspecting' || step === 'detected' ? 1 : 2)
  const errKey = $derived(failure ? (KNOWN_ERRORS.includes(failure.code) ? failure.code : 'unknown') : 'unknown')

  function focusHeading() { queueMicrotask(() => heading?.focus({ preventScroll: false })) }

  async function pick(p: string) {
    path = p; found = null; failure = null; notice = null
    step = 'inspecting'
    try {
      found = await inspect(p)
      step = 'detected'
    } catch (e) {
      failure = { code: 'inspect_failed', message: e instanceof ApiError ? e.message : String(e) }
      step = 'failed'
    }
    focusHeading()
  }

  function usePasted(e: SubmitEvent) {
    e.preventDefault()
    const p = cleanPastedPath(pasted)
    if (p) pick(p)
  }

  function begin() {
    if (found?.encrypted) { pwWrong = false; askPw = true }
    else run()
  }

  async function run(password?: string) {
    notice = null; failure = null
    stage = 'detect'; pct = 0; cancelling = false
    if (password !== undefined) pwBusy = true
    else step = 'importing'
    let job: JobInfo
    try {
      job = await startImport({ path, remember, ...(password !== undefined ? { password } : {}) })
    } catch (e) {
      pwBusy = false; askPw = false
      failure = { code: 'request_failed', message: e instanceof ApiError ? e.message : String(e) }
      step = 'failed'
      return
    }
    password = undefined
    jobId = job.id
    if (!pwBusy) step = 'importing'
    stop = watch(job.id, (ev) => {
      stage = ev.stage || stage
      pct = ev.pct
      // once decryption is behind us the password was accepted: switch to the progress view
      if (pwBusy && ev.stage !== 'detect' && ev.stage !== 'decrypt') { pwBusy = false; askPw = false; step = 'importing' }
    }, onEnd)
  }

  function onEnd(j: JobInfo) {
    stop = null; jobId = null; cancelling = false
    const res = (j.result ?? {}) as { study_id?: string; code?: string }
    if (j.status === 'done' && res.study_id) {
      pwBusy = false; askPw = false
      navigate(`/study/${encodeURIComponent(res.study_id)}`)
      return
    }
    if (j.status === 'cancelled') {
      pwBusy = false; askPw = false
      step = 'detected'; notice = t('import.cancelled')
      focusHeading()
      return
    }
    const code = res.code ?? 'unknown'
    if (code === 'password_required' || code === 'wrong_password') {
      pwBusy = false
      pwWrong = code === 'wrong_password'
      step = 'detected'
      askPw = true
      return
    }
    pwBusy = false; askPw = false
    failure = { code, message: j.error ?? '' }
    step = 'failed'
    focusHeading()
  }

  async function cancel() {
    if (!jobId) return
    cancelling = true
    try { await cancelJob(jobId) } catch { cancelling = false }
  }

  function restart() {
    stop?.(); stop = null
    step = 'choose'; found = null; failure = null; notice = null; path = ''
    focusHeading()
  }
</script>

<section class="wiz fade-in">
  <header class="top">
    <span class="kicker">{t('import.kicker')}</span>
    <h1 tabindex="-1" bind:this={heading}>{t('import.title')}</h1>
    <ol class="steps" aria-label={t('import.steps')}>
      {#each ['import.step.choose', 'import.step.check', 'import.step.open'] as k, i}
        <li class:done={i < stepNo} class:now={i === stepNo} aria-current={i === stepNo ? 'step' : undefined}>
          <span class="n" aria-hidden="true">{#if i < stepNo}<Icon name="check" size={13} />{:else}{i + 1}{/if}</span>{t(k)}
        </li>
      {/each}
    </ol>
  </header>

  {#if MOCK}<p class="chip mock">{t('import.mockNote')}</p>{/if}

  <div class="panel card">
    {#if step === 'choose'}
      <h2>{t('import.choose.title')}</h2>
      <p class="muted">{t('import.choose.lead')}</p>
      <FolderBrowser onpick={pick} />

      <div class="or" aria-hidden="true"><span>{t('import.or')}</span></div>
      <form class="paste" onsubmit={usePasted}>
        <label for="paste-in">{t('import.paste.label')}</label>
        <div class="row">
          <input id="paste-in" type="text" bind:value={pasted} placeholder={t('import.paste.ph')} spellcheck="false" autocomplete="off" />
          <button type="submit" class="btn" disabled={!cleanPastedPath(pasted)}>{t('import.paste.use')}</button>
        </div>
        <p class="faint small">{t('import.paste.hint')}</p>
      </form>

    {:else if step === 'inspecting'}
      <div class="busy" role="status"><div class="spinner" aria-hidden="true"></div><div><b>{t('import.inspecting')}</b><p class="faint mono">{path}</p></div></div>

    {:else if step === 'detected' && found}
      <h2>{t('import.found.title')}</h2>
      <div class="found">
        <span class="big-ico"><Icon name={found.encrypted ? 'lock' : 'disc'} size={26} /></span>
        <div class="fi">
          <b>{found.label}</b>
          <span class="faint mono path">{path}</span>
          <div class="chips">
            {#if found.adapter}<span class="chip">{t(`adapter.${found.adapter}`)}</span>{/if}
            {#if found.encrypted}<span class="chip warn"><Icon name="lock" size={12} />{t('import.found.encrypted')}</span>{/if}
            {#if found.confidence < 0.5}<span class="chip">{t('import.found.unsure')}</span>{/if}
          </div>
        </div>
      </div>
      {#if found.notes.length}<ul class="notes">{#each found.notes as n}<li>{n}</li>{/each}</ul>{/if}
      {#if notice}<p class="notice" role="status">{notice}</p>{/if}

      <label class="remember">
        <input type="checkbox" bind:checked={remember} />
        <span><b>{t('import.remember')}</b><small class="faint">{t('import.remember.hint')}</small></span>
      </label>

      <div class="actions">
        <button type="button" class="btn" onclick={restart}><Icon name="back" size={16} />{t('import.chooseOther')}</button>
        <button type="button" class="btn primary lg" onclick={begin}>{found.encrypted ? t('import.unlockOpen') : t('import.open')}<Icon name="arrow" size={16} /></button>
      </div>

    {:else if step === 'importing'}
      <ImportProgress {stage} {pct} encrypted={!!found?.encrypted} {cancelling} oncancel={cancel} />

    {:else if step === 'failed' && failure}
      <div class="fail" role="alert">
        <h2>{t(`import.err.${errKey}.t`)}</h2>
        <p class="muted">{t(`import.err.${errKey}.d`)}</p>
        <p class="next"><b>{t('import.err.next')}</b> {t(`import.err.${errKey}.next`)}</p>
        {#if failure.message}<details><summary>{t('import.err.details')}</summary><p class="faint mono">{failure.message}</p></details>{/if}
      </div>
      <div class="actions">
        <button type="button" class="btn" onclick={restart}><Icon name="back" size={16} />{t('import.chooseOther')}</button>
        {#if found}<button type="button" class="btn primary" onclick={begin}>{t('import.tryAgain')}</button>{/if}
      </div>
    {/if}
  </div>

  {#if step === 'choose' && recent.length}
    <section class="recent">
      <h2 class="kicker">{t('import.recent')}</h2>
      <ul role="list">
        {#each recent as s (s.id)}
          <li><a class="panel rs" href="/study/{encodeURIComponent(s.id)}" use:link>
            <b>{s.description || t('study.untitled')}</b>
            <span class="faint">{formatStudyDate(s.study_date, i18n.lang)} · {s.modalities.join(', ')}</span>
            <Icon name="arrow" size={16} />
          </a></li>
        {/each}
      </ul>
    </section>
  {/if}

  <p class="faint small privacy"><Icon name="lock" size={13} /> {t('import.privacy')}</p>
</section>

{#if askPw}
  <PasswordDialog
    label={found?.label ?? ''}
    wrong={pwWrong}
    busy={pwBusy}
    onsubmit={(p) => run(p)}
    oncancel={() => { askPw = false; pwBusy = false; if (jobId) cancel() }}
  />
{/if}

<style>
  .wiz { max-width: 860px; margin: 0 auto; padding: 40px 0 60px; display: grid; gap: 18px; }
  .top h1 { font-size: clamp(26px, 4vw, 36px); letter-spacing: -.025em; margin: 6px 0 14px; outline: none; }
  .steps { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: 13px; color: var(--text-3); }
  .steps li { display: flex; align-items: center; gap: 8px; }
  .steps .n { width: 22px; height: 22px; display: grid; place-items: center; border-radius: 50%; border: 1px solid var(--line-2); font: 600 11px var(--mono); }
  .steps li.now { color: var(--text); font-weight: 600; } .steps li.now .n { border-color: var(--accent); color: var(--accent); }
  .steps li.done { color: var(--text-2); } .steps li.done .n { background: var(--accent-soft); color: var(--accent); border-color: rgba(94,234,212,.4); }
  .mock { justify-self: start; color: var(--warn); border-color: rgba(251,191,36,.3); white-space: normal; }
  .card { padding: 24px; display: grid; gap: 14px; }
  .card h2 { margin: 0; font-size: 19px; }
  .card > p { margin: 0; }
  .or { display: flex; align-items: center; gap: 12px; color: var(--text-3); font-size: 12px; text-transform: uppercase; letter-spacing: .12em; }
  .or::before, .or::after { content: ''; flex: 1; height: 1px; background: var(--line); }
  .paste label { display: block; font-weight: 600; font-size: 13.5px; margin-bottom: 6px; }
  .paste .row { display: flex; gap: 8px; }
  .paste input { flex: 1; min-width: 0; padding: 10px 12px; border-radius: 11px; border: 1px solid var(--line-2); background: rgba(0,0,0,.25); font-family: var(--mono); font-size: 13px; }
  .paste input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(94,234,212,.15); }
  .paste p { margin: 6px 0 0; }
  .small { font-size: 12.5px; }
  .mono { font-family: var(--mono); font-size: 12.5px; word-break: break-all; }
  .busy { display: flex; align-items: center; gap: 16px; padding: 12px 0; }
  .busy p { margin: 2px 0 0; }
  .spinner { width: 34px; height: 34px; flex: none; border-radius: 50%; border: 2px solid rgba(94,234,212,.15); border-top-color: var(--accent); animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .found { display: flex; gap: 16px; align-items: flex-start; }
  .big-ico { width: 52px; height: 52px; flex: none; display: grid; place-items: center; border-radius: 14px; background: var(--accent-soft); color: var(--accent); }
  .fi { display: grid; gap: 4px; min-width: 0; }
  .fi b { font-size: 16px; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
  .chip.warn { color: var(--warn); border-color: rgba(251,191,36,.3); }
  .notes { margin: 0; padding-left: 18px; color: var(--text-2); font-size: 13.5px; }
  .notice { margin: 0; padding: 10px 12px; border-radius: 10px; background: rgba(255,255,255,.04); border: 1px solid var(--line); color: var(--text-2); }
  .remember { display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--line); background: rgba(255,255,255,.02); cursor: pointer; }
  .remember input { width: 18px; height: 18px; margin-top: 2px; accent-color: var(--accent); flex: none; }
  .remember span { display: grid; gap: 2px; }
  .remember small { font-size: 12.5px; }
  .actions { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
  .fail h2 { color: var(--text); }
  .fail p { margin: 6px 0; }
  .next { padding: 10px 12px; border-radius: 10px; background: var(--accent-soft); border: 1px solid rgba(94,234,212,.2); }
  details summary { cursor: pointer; color: var(--text-3); font-size: 12.5px; }
  .recent h2 { margin: 6px 0 8px; }
  .recent ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
  .rs { display: flex; align-items: center; gap: 12px; padding: 12px 16px; color: var(--text); flex-wrap: wrap; }
  .rs .faint { flex: 1; font-size: 13px; }
  .rs:hover { background: rgba(20,28,48,.8); }
  .privacy { display: flex; align-items: center; gap: 6px; margin: 0; }
  @media (max-width: 520px) {
    .wiz { padding-top: 24px; }
    .card { padding: 18px 16px; }
    .paste .row { flex-direction: column; }
    .actions .btn { flex: 1; }
  }
</style>
