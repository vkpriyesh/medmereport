<!-- Localizer: shows where the current slice cuts a (roughly perpendicular) reference image. -->
<script lang="ts">
  import { sliceName, type SeriesMeta } from '../api/endpoints'
  import { t } from '../i18n/index.svelte'
  import { localizerLine } from './math'

  interface Props {
    ref: SeriesMeta
    refBase: string
    refIndex?: number
    cur: SeriesMeta
    curIndex: number
  }
  let { ref, refBase, refIndex, cur, curIndex }: Props = $props()

  let canvas: HTMLCanvasElement
  let img = $state<HTMLImageElement | null>(null)
  const ri = $derived(refIndex ?? Math.floor(ref.n / 2))

  $effect(() => {
    const el = new Image()
    let dead = false
    el.decoding = 'async'
    el.onload = () => { if (!dead) img = el }
    el.src = `${refBase}/${sliceName(ri, ref.ext)}`
    return () => { dead = true; img = null }
  })

  const line = $derived(img ? localizerLine(ref, ri, img.naturalWidth, img.naturalHeight, cur, curIndex) : null)

  $effect(() => {
    if (!img || !canvas) return
    const w = img.naturalWidth, h = img.naturalHeight
    canvas.width = w; canvas.height = h
    const x = canvas.getContext('2d')!
    x.drawImage(img, 0, 0)
    if (!line) return
    x.strokeStyle = '#5eead4'
    x.lineWidth = Math.max(2, w / 160)
    x.shadowColor = '#5eead4'
    x.shadowBlur = 8
    x.beginPath(); x.moveTo(line[0][0], line[0][1]); x.lineTo(line[1][0], line[1][1]); x.stroke()
  })
</script>

<figure class="loc">
  <canvas bind:this={canvas} aria-hidden="true"></canvas>
  <figcaption>{t('viewer.localizer')} <span>· {ref.title}</span><span class="sr-only">{t('viewer.localizer.aria', { ref: ref.title })}</span></figcaption>
</figure>

<style>
  .loc { position: relative; margin: 0; border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 0 0 1px var(--line); }
  canvas { display: block; width: 100%; height: auto; max-height: 260px; object-fit: contain; }
  figcaption { position: absolute; top: 8px; left: 10px; font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.7); font-weight: 600; text-shadow: 0 1px 3px #000; }
  figcaption span { text-transform: none; letter-spacing: 0; font-weight: 500; color: rgba(255,255,255,.5); }
</style>
