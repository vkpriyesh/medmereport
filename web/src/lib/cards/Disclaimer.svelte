<script lang="ts">
  import Icon from '../components/Icon.svelte'
  import { t } from '../i18n/index.svelte'
  let { extra = '' }: { extra?: string } = $props()
</script>

<p class="disc"><Icon name="info" size={15} /><span><b>{t('disclaimer')}</b>{#if extra} {extra}{/if}</span></p>
