<script lang="ts">
  import { IMPORT_STAGES } from '../../lib/api/endpoints'
  import Icon from '../../lib/components/Icon.svelte'
  import { t } from '../../lib/i18n/index.svelte'

  interface Props { stage: string; pct: number; encrypted: boolean; cancelling: boolean; oncancel: () => void }
  let { stage, pct, encrypted, cancelling, oncancel }: Props = $props()

  const stages = $derived(IMPORT_STAGES.filter((s) => s !== 'decrypt' || encrypted || stage === 'decrypt'))
  const at = $derived(Math.max(0, stages.indexOf(stage as (typeof IMPORT_STAGES)[number])))
  const pctR = $derived(Math.round(Math.max(0, Math.min(100, pct))))
</script>

<section class="prog" aria-labelledby="prog-t">
  <h2 id="prog-t">{t('import.progress.title')}</h2>
  <p class="muted" aria-live="polite">{t(`stage.${stage}`)}{t('import.progress.ellipsis')}</p>

  <div class="bar" role="progressbar" aria-valuenow={pctR} aria-valuemin={0} aria-valuemax={100} aria-label={t('import.progress.title')}>
    <i style="width:{pctR}%"></i>
  </div>
  <div class="pct faint">{pctR}%</div>

  <ol class="stages">
    {#each stages as s, i}
      <li class:done={i < at} class:now={i === at}>
        <span class="mk" aria-hidden="true">{#if i < at}<Icon name="check" size={14} />{:else}{i + 1}{/if}</span>
        <span>{t(`stage.${s}`)}</span>
        <span class="sr-only">{i < at ? t('import.progress.done') : i === at ? t('import.progress.now') : ''}</span>
      </li>
    {/each}
  </ol>

  <p class="faint small">{t('import.progress.note')}</p>
  <button type="button" class="btn" onclick={oncancel} disabled={cancelling}>{cancelling ? t('import.progress.cancelling') : t('common.cancel')}</button>
</section>

<style>
  .prog { display: grid; gap: 10px; }
  h2 { margin: 0; font-size: 20px; }
  p { margin: 0; }
  .bar { height: 8px; border-radius: 8px; background: rgba(255,255,255,.08); overflow: hidden; }
  .bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); transition: width .35s ease; }
  .pct { font-family: var(--mono); font-size: 12px; text-align: right; margin-top: -4px; }
  .stages { list-style: none; margin: 6px 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }
  .stages li { display: flex; align-items: center; gap: 9px; color: var(--text-3); font-size: 13.5px; }
  .mk { width: 24px; height: 24px; flex: none; display: grid; place-items: center; border-radius: 50%; border: 1px solid var(--line-2); font: 600 11px var(--mono); }
  li.done { color: var(--text-2); } li.done .mk { background: var(--accent-soft); color: var(--accent); border-color: rgba(94,234,212,.4); }
  li.now { color: var(--text); font-weight: 600; } li.now .mk { border-color: var(--accent); color: var(--accent); box-shadow: 0 0 0 3px rgba(94,234,212,.14); }
  .small { font-size: 12.5px; }
  .btn { justify-self: start; }
</style>
