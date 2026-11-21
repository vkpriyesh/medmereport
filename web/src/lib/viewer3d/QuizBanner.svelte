<!-- Quiz banner: "Click the …", score, feedback, skip, end. -->
<script lang="ts">
  import Icon from '../components/Icon.svelte'
  import { t } from '../i18n/index.svelte'
  import type { QuizState } from './state'

  let { quiz, name, onskip, onend }: { quiz: QuizState; name: (key: string) => string; onskip: () => void; onend: () => void } = $props()
</script>

<div class="banner panel" class:ok={quiz.last?.ok === true} class:bad={quiz.last?.ok === false} role="status" aria-live="polite">
  <span class="q">{t('m3d.quiz.ask')} <b>{name(quiz.target)}</b></span>
  <span class="score" aria-label={t('m3d.quiz.score', { s: quiz.score, n: quiz.n })}>{quiz.score}/{quiz.n}</span>
  {#if quiz.last?.ok}<span class="fb ok">{t('m3d.quiz.right')}</span>
  {:else if quiz.last && quiz.last.picked}<span class="fb bad">{t('m3d.quiz.wrong', { name: name(quiz.last.picked) })}</span>{/if}
  <button type="button" class="btn" onclick={onskip} disabled={quiz.revealing}>{t('m3d.quiz.skip')}</button>
  <button type="button" class="btn icon" aria-label={t('m3d.quiz.end')} title={t('m3d.quiz.end')} onclick={onend}><Icon name="close" size={16} /></button>
</div>

<style>
  .banner { display: flex; align-items: center; gap: 12px; padding: 10px 12px 10px 16px; flex-wrap: wrap; max-width: calc(100vw - 32px); }
  .q { font-size: 14px; } .q b { color: var(--accent); }
  .score { font-family: var(--mono); font-size: 12px; color: var(--text-3); }
  .fb { font-size: 13px; } .fb.ok { color: var(--ok); } .fb.bad { color: var(--danger); }
  .btn { padding: 6px 12px; font-size: 13px; }
  .btn.icon { width: 32px; height: 32px; padding: 0; }
  .banner.ok { box-shadow: 0 0 0 2px var(--ok), 0 0 40px rgba(74,222,128,.35); }
  .banner.bad { box-shadow: 0 0 0 2px var(--danger), 0 0 40px rgba(251,113,133,.35); }
</style>
