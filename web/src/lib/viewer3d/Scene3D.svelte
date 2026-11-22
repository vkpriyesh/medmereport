<!--
  Scene3D — three.js renderer for model/scene.glb (API_CONTRACT §5).
  Appearance, picking, explode, clipping, fly-to and the pin label live here; all UI state lives in the ViewerStore.
  Performance: renders on demand (camera change, state change, animation), one material per region key,
  shared clipping-plane array, raycasts at most once per frame (rAF) and only after the pointer moved, no per-frame
  allocations. Hover/click raycasts use a per-mesh BVH (three-mesh-bvh), built in idle time after load; meshes without
  one yet fall back to three's brute-force raycast.
  Framing (§6): `head` keeps the M2 brain camera; `body` (tall torso, front view) and `spine` (lateral view) fit the
  camera to the model's bounding box, so the same code works at brain (~150 mm) and body (hundreds of mm) scale.
-->
<script lang="ts">
  import { onMount } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
  import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
  import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh'
  import { dataColor, type DataMap } from './datamap'
  import { explodeOffset } from './explode'
  import { XRAY_GHOST } from './framing'
  import { parseNodeName, type NodeKind } from './names'
  import { LOBE_COLORS, NATURAL, NATURAL_BY_LOBE, NATURAL_DEEP, FALLBACK } from './palette'
  import type { ModelFacts } from './state'
  import type { ViewerStore } from './store.svelte'
  import type { Framing, LayerId, RegionsJson, Sel, ViewPreset } from './types'
  import { inVocab, isInner, layerOf, lobeOf as vocabLobe } from './vocab'

  interface Props {
    url: string
    store: ViewerStore
    regions: RegionsJson | null
    /** Camera framing (framing.ts `framingOf`); fixed for the lifetime of the component. */
    framing?: Framing
    /** structure id → lobe id (knowledge base first, vocab fallback). */
    lobeOf: (structure: string) => string
    dataMaps: DataMap[]
    /** Display text for hover tooltip / pin. */
    label: (sel: Sel) => { title: string; sub?: string }
    ariaLabel: string
    onprogress?: (pct: number | null) => void
    onerror?: (msg: string) => void
    onloaded?: (info: { triangles: number; meshes: number }) => void
  }
  let { url, store, regions, framing = 'head', lobeOf, dataMaps, label, ariaLabel, onprogress, onerror, onloaded }: Props = $props()
  // svelte-ignore state_referenced_locally
  const head = framing === 'head'

  let host: HTMLDivElement
  let tipEl: HTMLDivElement
  let tipT: HTMLSpanElement
  let tipS: HTMLSpanElement
  let pinEl: HTMLDivElement
  let pinT: HTMLSpanElement

  const reduced = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

  // ---------------- three.js objects (non-reactive) ----------------
  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let controls: OrbitControls
  let envTex: THREE.Texture | null = null
  let glow: THREE.Mesh | null = null
  let root: THREE.Object3D | null = null
  /** Plane constant meaning "no cut" — far beyond any body-scale model. */
  const NO_CUT = 1e6
  const clipPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), NO_CUT)
  const clipping = [clipPlane]
  const size = new THREE.Vector3(1, 1, 1)
  let R = 100 // bounding radius (mm)
  /** Explode offsets scale: 1 for a brain, larger for a torso/spine. */
  let explodeScale = 1
  let dirty = true
  let disposed = false

  interface Entry {
    key: string; hemi: 'L' | 'R' | 'M'; structure: string; lobe: string; layer: LayerId; inner: boolean
    mat: THREE.MeshPhysicalMaterial; meshes: THREE.Mesh[]
    /** world centre at rest, offset base positions, pin anchor (mesh-local) */
    center: THREE.Vector3; anchor: THREE.Vector3
  }
  const entries = new Map<string, Entry>()
  const entryList: Entry[] = []
  const meshEntry = new Map<THREE.Object3D, Entry>()
  const restPos = new Map<THREE.Object3D, THREE.Vector3>()
  interface Extra { key: string; kind: 'vessel' | 'skin' | 'bone'; layer: LayerId; mat: THREE.MeshPhysicalMaterial; meshes: THREE.Mesh[] }
  const extras: Extra[] = []
  const meshExtra = new Map<THREE.Object3D, Extra>()
  const pickables: THREE.Object3D[] = []

  // scratch (no per-frame allocation)
  const tmpC = new THREE.Color(), GREY = new THREE.Color('#5b6476')
  const tmpV = new THREE.Vector3(), tmpO = { x: 0, y: 0, z: 0 }, ZERO = { x: 0, y: 0, z: 0 }
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2()
  const hits: THREE.Intersection[] = []
  const anchorTmp = new THREE.Vector3()
  const colNatural = new THREE.Color(NATURAL), colNaturalDeep = new THREE.Color(NATURAL_DEEP)
  const naturalBy = new Map(Object.entries(NATURAL_BY_LOBE).map(([k, v]) => [k, new THREE.Color(v)]))
  const lobeCol = new Map<string, THREE.Color>()
  const lobeColor = (l: string) => { let c = lobeCol.get(l); if (!c) lobeCol.set(l, (c = new THREE.Color(LOBE_COLORS[l] ?? FALLBACK))); return c }

  // ---------------- reactive state from the store ----------------
  const s = $derived(store.s)
  const colorBy = $derived(s.colorBy)
  const sel = $derived(s.sel)
  const hover = $derived(s.hover)
  const xray = $derived(s.xray)
  const isolate = $derived(s.isolate)
  const show = $derived(s.show)
  const explode = $derived(s.explode)
  const cut = $derived(s.cut)
  const cutAxis = $derived(s.cutAxis)
  const rotate = $derived(s.rotate)
  const quizOn = $derived(!!s.quiz)
  const dataMap = $derived(colorBy.startsWith('data:') ? dataMaps.find((m) => `data:${m.key}` === colorBy) ?? null : null)
  let loaded = $state(false)

  $effect(() => { void [colorBy, sel, hover, xray, isolate, show, dataMap, store.colors, loaded]; applyLook() })
  $effect(() => { void [explode, loaded]; applyExplode() })
  $effect(() => { void [cut, cutAxis, loaded]; applyCut() })
  // auto-rotate is an explicit user action, so it is allowed even with reduced motion
  $effect(() => { const on = rotate; if (controls) { controls.autoRotate = on; controls.autoRotateSpeed = 1.2; dirty = true } })

  // ---------------- public API ----------------
  const VIEWS: Record<Exclude<ViewPreset, 'inside'>, [number, number, number]> = {
    left: [1, 0.12, 0], right: [-1, 0.12, 0], front: [0, 0.1, 1], back: [0, 0.15, -1], top: [0, 1, 0.001], below: [0, -1, 0.001],
  }
  /** Home directions for the non-head framings: torso from the front (slightly oblique), spine from the left side. */
  const HOME_DIR: Record<Framing, [number, number, number]> = { head: [0.75, 0.25, 0.6], body: [0.22, 0.1, 1], spine: [1, 0.06, 0.1] }
  /** Back off on tall/narrow viewports so the whole model fits horizontally. */
  const fit = () => Math.max(1, 1.25 / (camera?.aspect || 1))
  const fitBasis = { r: new THREE.Vector3(), u: new THREE.Vector3(), d: new THREE.Vector3(), p: new THREE.Vector3() }
  /**
   * Camera distance that fits the model's box (centred at the origin) seen along `dir`, for the current FOV and aspect.
   * Used by body/spine framings (tall models): a bounding-sphere fit would leave a torso tiny in a wide viewport.
   */
  function fitDistance(dir: THREE.Vector3, box: THREE.Vector3 = size, margin = 1.12): number {
    const { r, u, d, p } = fitBasis
    d.copy(dir).normalize()
    u.set(0, 1, 0)
    if (Math.abs(d.dot(u)) > 0.98) u.set(0, 0, -1)
    r.crossVectors(u, d).normalize()
    u.crossVectors(d, r).normalize()
    let hx = 0, hy = 0, hz = 0
    for (let i = 0; i < 8; i++) {
      p.set((i & 1 ? 0.5 : -0.5) * box.x, (i & 2 ? 0.5 : -0.5) * box.y, (i & 4 ? 0.5 : -0.5) * box.z)
      hx = Math.max(hx, Math.abs(p.dot(r))); hy = Math.max(hy, Math.abs(p.dot(u))); hz = Math.max(hz, Math.abs(p.dot(d)))
    }
    const tv = Math.tan(THREE.MathUtils.degToRad((camera?.fov ?? 32) / 2)), aspect = camera?.aspect || 1
    return Math.max(hy / tv, hx / (tv * aspect)) * margin + hz
  }
  export function view(v: ViewPreset) {
    if (v === 'inside') {
      if (head) flyTo(new THREE.Vector3(), new THREE.Vector3(-1, 0.1, 0), R * 4.4)
      return
    }
    const dir = new THREE.Vector3(...VIEWS[v])
    if (head) flyTo(new THREE.Vector3(), dir, R * 3.4)
    else flyTo(new THREE.Vector3(), dir, fitDistance(dir), true)
  }
  export function home() {
    const dir = new THREE.Vector3(...HOME_DIR[framing])
    if (head) flyTo(new THREE.Vector3(), dir, R * 3.4)
    else flyTo(new THREE.Vector3(), dir, fitDistance(dir), true)
  }
  /** Fly to a selection (or home when null). `dir` overrides the viewing direction. */
  export function flyToSel(x: Sel | null, dir?: [number, number, number]) {
    if (!x) return home()
    if (!head) return flyToSelBody(x, dir)
    const c = centerOf(x)
    if (!c) return
    const d = dir ? new THREE.Vector3(...dir) : c.clone().sub(new THREE.Vector3(0, c.y * 0.2, 0))
    if (d.length() < R * 0.15) d.set(0.3, 0.4, 1)
    flyTo(c.multiplyScalar(dir ? 0.3 : 0.35), d.normalize(), R * 3.7)
  }
  /** Body/spine: frame the selection itself (a kidney is small next to a torso), viewed from the framing's side. */
  function flyToSelBody(x: Sel, dir?: [number, number, number]) {
    const b = boxOf(x)
    if (!b) return
    const c = b.getCenter(new THREE.Vector3()), sz = b.getSize(new THREE.Vector3())
    const d = new THREE.Vector3(...(dir ?? HOME_DIR[framing]))
    if (!dir && framing === 'body') d.x += Math.sign(c.x) * 0.35 // lean towards the structure's side
    const dist = Math.min(fitDistance(d, size), Math.max(fitDistance(d, sz, 1.9), R * 0.35))
    flyTo(c, d.normalize(), dist, true)
  }
  export function screenshot(name = 'medmereport-3d.png') {
    if (!renderer) return
    renderer.render(scene, camera) // read back in the same task — no preserveDrawingBuffer needed
    const a = document.createElement('a')
    a.download = name
    a.href = renderer.domElement.toDataURL('image/png')
    a.click()
  }

  // ---------------- appearance ----------------
  function baseColor(e: Entry, out: THREE.Color) {
    if (colorBy === 'natural') return out.copy(naturalBy.get(e.lobe) ?? (e.inner ? colNaturalDeep : colNatural))
    if (colorBy === 'lobes') return out.copy(lobeColor(e.lobe))
    if (dataMap) { const c = dataColor(dataMap, e.key); return out.setRGB(c[0] / 255, c[1] / 255, c[2] / 255, THREE.SRGBColorSpace) }
    const c = store.colors[e.structure]
    return c ? out.setRGB(c[0] / 255, c[1] / 255, c[2] / 255, THREE.SRGBColorSpace) : out.set(FALLBACK)
  }
  const isSel = (e: Entry, x: Sel | null) => !!x && (x.type === 'lobe' ? e.lobe === x.id : x.type === 'region' && e.key === x.id)

  function applyLook() {
    if (!loaded) return
    const anySel = !!sel && sel.type !== 'vessel'
    pickables.length = 0
    for (const e of entryList) {
      const m = e.mat, on = isSel(e, sel), hv = isSel(e, hover)
      baseColor(e, tmpC)
      if (anySel && !on) tmpC.lerp(GREY, 0.55)
      m.color.copy(tmpC)
      m.emissive.set(on ? 0x0f766e : hv ? 0x334155 : 0x000000)
      m.emissiveIntensity = on ? 0.55 : hv ? 0.6 : 0
      const ghost = (xray && (!e.inner || XRAY_GHOST.has(e.layer)) && !on) || (isolate && anySel && !on)
      if (m.transparent !== ghost) { m.transparent = ghost; m.needsUpdate = true }
      m.opacity = ghost ? (isolate && anySel ? 0.06 : 0.13) : 1
      m.depthWrite = !ghost
      const vis = show[e.layer] !== false
      for (const mesh of e.meshes) {
        mesh.visible = vis
        mesh.renderOrder = ghost ? 5 : 0
        if (vis && !ghost) pickables.push(mesh)
      }
    }
    for (const x of extras) {
      const vis = !!show[x.layer]
      if (x.kind === 'vessel') x.mat.emissive.set(sel?.type === 'vessel' && sel.id === x.key ? 0x7f1d1d : 0x3b0010)
      if (x.kind === 'bone' && !head) {
        // body/spine: the skeleton hides the organs, so X-ray / isolate make it see-through too
        const ghost = xray || (isolate && anySel)
        if (x.mat.transparent !== ghost) { x.mat.transparent = ghost; x.mat.needsUpdate = true }
        x.mat.opacity = ghost ? 0.13 : 1
        x.mat.depthWrite = !ghost
        for (const mesh of x.meshes) mesh.renderOrder = ghost ? 5 : 0
      }
      for (const mesh of x.meshes) {
        mesh.visible = vis
        if (vis && x.kind === 'vessel') pickables.push(mesh)
      }
    }
    dirty = true
  }

  function applyExplode() {
    if (!loaded) return
    for (const e of entryList) {
      explodeOffset(e.center, ZERO, e.hemi, e.layer, explode, tmpO, explodeScale)
      for (const mesh of e.meshes) mesh.position.copy(restPos.get(mesh)!).add(tmpV.set(tmpO.x, tmpO.y, tmpO.z))
    }
    dirty = true
  }

  function applyCut() {
    if (!loaded) return
    const half = { x: size.x, y: size.y, z: size.z }[cutAxis] * 0.52
    clipPlane.normal.set(cutAxis === 'x' ? -1 : 0, cutAxis === 'y' ? -1 : 0, cutAxis === 'z' ? -1 : 0)
    clipPlane.constant = cut >= 0.999 ? NO_CUT : -half + 2 * half * cut
    dirty = true
  }

  // ---------------- camera animation ----------------
  let anim: { t0: THREE.Vector3; p0: THREE.Vector3; t1: THREE.Vector3; p1: THREE.Vector3; start: number; dur: number } | null = null
  const animA = new THREE.Vector3(), animB = new THREE.Vector3()
  /** `exact`: `dist` already accounts for the viewport (fitDistance); otherwise it is scaled by `fit()` (brain). */
  function flyTo(target: THREE.Vector3, dir: THREE.Vector3 | null, dist: number | null, exact = false) {
    if (!camera) return
    const t0 = controls.target.clone(), p0 = camera.position.clone()
    const d = dir ? dir.clone().normalize() : p0.clone().sub(t0).normalize()
    const D = dist !== null ? (exact ? dist : dist * fit()) : p0.distanceTo(t0)
    const p1 = target.clone().add(d.multiplyScalar(D))
    if (reduced) { controls.target.copy(target); camera.position.copy(p1); anim = null; dirty = true; return }
    anim = { t0, p0, t1: target.clone(), p1, start: performance.now(), dur: 900 }
  }
  function stepAnim(now: number) {
    if (!anim) return
    let k = Math.min(1, (now - anim.start) / anim.dur)
    k = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2
    controls.target.lerpVectors(anim.t0, anim.t1, k)
    animA.copy(anim.p0).sub(anim.t0)
    animB.copy(anim.p1).sub(anim.t1)
    const len = animA.length() + (animB.length() - animA.length()) * k
    animA.normalize().lerp(animB.normalize(), k).normalize().multiplyScalar(len)
    camera.position.copy(controls.target).add(animA)
    if (k >= 1) anim = null
  }

  function boxOf(x: Sel): THREE.Box3 | null {
    const b = new THREE.Box3()
    if (x.type === 'vessel') extras.forEach((e) => { if (e.key === x.id) e.meshes.forEach((m) => b.expandByObject(m)) })
    else for (const e of entryList) if (isSel(e, x)) e.meshes.forEach((m) => b.expandByObject(m))
    return b.isEmpty() ? null : b
  }
  const centerOf = (x: Sel): THREE.Vector3 | null => boxOf(x)?.getCenter(new THREE.Vector3()) ?? null

  // ---------------- picking ----------------
  let ptrX = 0, ptrY = 0, ptrIn = false, ptrMoved = false, dragging = false
  let down: [number, number] | null = null

  function pick(cx: number, cy: number): THREE.Object3D | null {
    if (!renderer) return null
    const r = renderer.domElement.getBoundingClientRect()
    ptr.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1)
    ray.setFromCamera(ptr, camera)
    hits.length = 0
    const noClip = clipPlane.constant >= NO_CUT
    // nearest hit per mesh is enough unless a cut may hide it (then farther hits on the same mesh matter)
    ray.firstHitOnly = noClip
    ray.intersectObjects(pickables, false, hits)
    for (const h of hits) if (noClip || clipPlane.distanceToPoint(h.point) >= -0.5) return h.object
    return null
  }
  function objSel(o: THREE.Object3D | null): Sel | null {
    if (!o) return null
    const x = meshExtra.get(o)
    if (x) return { type: 'vessel', id: x.key }
    const e = meshEntry.get(o)
    if (!e) return null
    return s.pickBy === 'lobe' ? { type: 'lobe', id: e.lobe } : { type: 'region', id: e.key }
  }

  function hoverTick() {
    if (!ptrMoved || dragging) return
    ptrMoved = false
    const h = ptrIn ? objSel(pick(ptrX, ptrY)) : null
    store.dispatch({ type: 'hover', sel: h })
    if (h && !quizOn) {
      const l = label(h)
      tipT.textContent = l.title
      tipS.textContent = l.sub ?? ''
      const r = host.getBoundingClientRect()
      tipEl.style.transform = `translate(${ptrX - r.left + 14}px, ${ptrY - r.top + 14}px)`
      tipEl.hidden = false
      renderer!.domElement.style.cursor = 'pointer'
    } else {
      tipEl.hidden = true
      if (renderer) renderer.domElement.style.cursor = ''
    }
  }

  function onpointermove(e: PointerEvent) { ptrX = e.clientX; ptrY = e.clientY; ptrIn = true; ptrMoved = true }
  function onpointerleave() { ptrIn = false; ptrMoved = true; dragging = false }
  function onpointerdown(e: PointerEvent) {
    down = [e.clientX, e.clientY]
    dragging = true
    tipEl.hidden = true
    if (s.rotate) store.dispatch({ type: 'rotate', on: false })
  }
  function onpointerup(e: PointerEvent) {
    dragging = false
    ptrMoved = true
    if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) { down = null; return }
    down = null
    const o = pick(e.clientX, e.clientY)
    if (s.quiz) {
      const e2 = o ? meshEntry.get(o) : null
      if (e2) store.dispatch({ type: 'quizAnswer', picked: e2.key })
      return
    }
    store.dispatch({ type: 'select', sel: objSel(o) })
  }
  function ondblclick(e: MouseEvent) {
    if (s.quiz) return
    const x = objSel(pick(e.clientX, e.clientY))
    if (x) { store.dispatch({ type: 'select', sel: x }); flyToSel(store.s.sel) }
  }

  // ---------------- pin label ----------------
  let pinShown = false
  function updatePin() {
    const x = sel
    const e = x?.type === 'region' && !quizOn ? entries.get(x.id) : null
    const mesh = e?.meshes[0]
    let ok = false
    if (e && mesh && mesh.visible && renderer) {
      anchorTmp.copy(e.anchor).applyMatrix4(mesh.matrixWorld).project(camera)
      if (anchorTmp.z < 1 && Math.abs(anchorTmp.x) < 1.2 && Math.abs(anchorTmp.y) < 1.2) {
        const w = renderer.domElement.clientWidth, h = renderer.domElement.clientHeight
        pinEl.style.transform = `translate(${(anchorTmp.x * 0.5 + 0.5) * w}px, ${(-anchorTmp.y * 0.5 + 0.5) * h}px) translate(-50%, -100%)`
        ok = true
      }
    }
    if (ok !== pinShown) { pinEl.style.opacity = ok ? '1' : '0'; pinShown = ok }
  }
  $effect(() => { const x = sel; if (pinT) pinT.textContent = x?.type === 'region' ? label(x).title : '' })

  // ---------------- setup ----------------
  function makeRegionMat() {
    return new THREE.MeshPhysicalMaterial({
      color: 0xffffff, roughness: 0.58, metalness: 0, clearcoat: 0.25, clearcoatRoughness: 0.45,
      sheen: 0.35, sheenRoughness: 0.6, sheenColor: new THREE.Color('#ffd6e0'), side: THREE.DoubleSide, clippingPlanes: clipping,
    })
  }

  async function fetchGlb(u: string, signal: AbortSignal): Promise<ArrayBuffer> {
    const r = await fetch(u, { credentials: 'same-origin', signal })
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    const total = +(r.headers.get('content-length') ?? 0)
    if (!r.body || !total) { onprogress?.(null); return r.arrayBuffer() }
    const reader = r.body.getReader()
    const buf = new Uint8Array(total)
    let got = 0
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      if (got + value.length > buf.length) { // content-length lied (e.g. compression) — fall back to concatenation
        const big = new Uint8Array(Math.max(buf.length * 2, got + value.length)); big.set(buf.subarray(0, got)); return finishGrow(reader, big, got, value)
      }
      buf.set(value, got); got += value.length
      onprogress?.(Math.round((got / total) * 100))
    }
    return buf.buffer.slice(0, got)
  }
  async function finishGrow(reader: ReadableStreamDefaultReader<Uint8Array>, buf: Uint8Array, got: number, first: Uint8Array): Promise<ArrayBuffer> {
    const parts: Uint8Array[] = [buf.subarray(0, got), first]
    for (;;) { const { done, value } = await reader.read(); if (done) break; parts.push(value) }
    const n = parts.reduce((a, p) => a + p.length, 0), out = new Uint8Array(n)
    let o = 0
    for (const p of parts) { out.set(p, o); o += p.length }
    return out.buffer
  }

  /** Read the GLB JSON chunk to see whether meshopt is used (decoder is loaded only then: it needs WASM). */
  function usesMeshopt(buf: ArrayBuffer): boolean {
    try {
      const dv = new DataView(buf)
      if (dv.getUint32(0, true) !== 0x46546c67) return false
      const len = dv.getUint32(12, true)
      const json = new TextDecoder().decode(new Uint8Array(buf, 20, len))
      return json.includes('EXT_meshopt_compression') || json.includes('KHR_meshopt_compression')
    } catch { return false }
  }

  function setupModel(gltfScene: THREE.Object3D) {
    const regionInfo = new Map((regions?.regions ?? []).map((r) => [r.key, r]))
    const knownStructs = new Set((regions?.regions ?? []).map((r) => r.structure))
    const known = (st: string) => knownStructs.has(st) || inVocab(st)
    const fallbackLayer: LayerId | undefined = head ? undefined : 'organ'
    root = gltfScene
    scene.add(root)
    const vesselMat = () => new THREE.MeshPhysicalMaterial({ color: '#e11d48', roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.2, emissive: '#3b0010', clippingPlanes: clipping, side: THREE.DoubleSide })
    const skinMat = new THREE.MeshPhysicalMaterial({ color: '#cbd5e1', roughness: 0.6, transparent: true, opacity: 0.1, depthWrite: false, side: THREE.FrontSide, clippingPlanes: clipping })
    const boneMat = new THREE.MeshPhysicalMaterial({ color: '#e7e2d3', roughness: 0.7, clippingPlanes: clipping, side: THREE.DoubleSide })
    const extraBy = new Map<string, Extra>()
    let triangles = 0, meshCount = 0
    const facts: ModelFacts = { regions: new Map(), vessels: new Map() }

    root.traverse((o) => {
      if (!(o as THREE.Mesh).isMesh) return
      const mesh = o as THREE.Mesh
      let p: THREE.Object3D | null = mesh
      let info: NodeKind | null = null
      while (p && !(info = parseNodeName(p.name, known))) p = p.parent
      const g = mesh.geometry
      if (!g.attributes.normal) g.computeVertexNormals()
      triangles += (g.index ? g.index.count : g.attributes.position.count) / 3
      meshCount++
      ;(mesh.material as THREE.Material)?.dispose?.()
      if (!info) { mesh.visible = false; return }
      if (info.kind !== 'region') {
        const layer: LayerId = info.kind === 'skin' ? 'skin' : info.kind === 'bone' ? 'bone' : /neck/i.test(info.name) ? 'neck' : 'vessels'
        let x = extraBy.get(info.key)
        if (!x) {
          x = { key: info.key, kind: info.kind, layer, mat: info.kind === 'skin' ? skinMat : info.kind === 'bone' ? boneMat : vesselMat(), meshes: [] }
          extraBy.set(info.key, x); extras.push(x)
          if (info.kind === 'vessel') facts.vessels.set(info.key, layer)
        }
        mesh.material = x.mat
        if (info.kind === 'skin') mesh.renderOrder = 10
        x.meshes.push(mesh); meshExtra.set(mesh, x)
        return
      }
      const ri = regionInfo.get(info.key)
      let e = entries.get(info.key)
      if (!e) {
        const lobe = lobeOf(info.structure) || vocabLobe(info.structure)
        e = {
          key: info.key, hemi: info.hemi, structure: info.structure, lobe,
          layer: layerOf(info.structure, info.hemi, ri?.group, fallbackLayer), inner: ri?.inner ?? isInner(info.structure),
          mat: makeRegionMat(), meshes: [], center: new THREE.Vector3(), anchor: new THREE.Vector3(),
        }
        entries.set(info.key, e); entryList.push(e)
        facts.regions.set(info.key, { layer: e.layer, inner: e.inner, lobe })
      }
      mesh.material = e.mat
      e.meshes.push(mesh); meshEntry.set(mesh, e)
    })

    // centre the model on the regions (or everything if none)
    const box = new THREE.Box3()
    if (entryList.length) entryList.forEach((e) => e.meshes.forEach((m) => box.expandByObject(m)))
    else box.setFromObject(root)
    if (box.isEmpty()) box.set(new THREE.Vector3(-50, -50, -50), new THREE.Vector3(50, 50, 50))
    const center = box.getCenter(new THREE.Vector3())
    box.getSize(size)
    R = Math.max(40, size.length() / 2)
    root.position.sub(center)
    root.updateMatrixWorld(true)

    const b = new THREE.Box3(), dir = new THREE.Vector3(), v = new THREE.Vector3(), inv = new THREE.Matrix4()
    for (const e of entryList) {
      b.makeEmpty()
      e.meshes.forEach((m) => { b.expandByObject(m); restPos.set(m, m.position.clone()) })
      b.getCenter(e.center)
      // pin anchor: the outermost vertex of the first mesh in the direction from the model centre
      const m = e.meshes[0]
      const pos = m.geometry.attributes.position
      dir.copy(e.center)
      if (e.inner || dir.lengthSq() < 1) { inv.copy(m.matrixWorld).invert(); e.anchor.copy(e.center).applyMatrix4(inv); continue }
      dir.normalize()
      let best = -Infinity
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(m.matrixWorld)
        const d = v.dot(dir)
        if (d > best) { best = d; e.anchor.fromBufferAttribute(pos, i) }
      }
    }
    for (const x of extras) x.meshes.forEach((m) => restPos.set(m, m.position.clone()))

    // camera + floor glow scaled to the model
    explodeScale = head ? 1 : Math.max(1, R / 125)
    camera.near = Math.max(0.5, R / 100); camera.far = R * 40; camera.updateProjectionMatrix()
    controls.minDistance = head ? R * 0.7 : R * 0.12; controls.maxDistance = R * 11
    if (glow) { glow.scale.setScalar(R / 125); glow.position.y = -size.y / 2 - R * (head ? 0.24 : 0.06) }
    camera.position.set(R * 3.4 * 0.72, R * 1.3, R * 2.6)
    controls.target.set(0, 0, 0)
    controls.update()

    store.init(facts, [...extraBy.values()].map((x) => x.layer), { framing, regions })
    loaded = true
    home()
    onloaded?.({ triangles: Math.round(triangles), meshes: meshCount })
    scheduleBvh()
  }

  // ---------------- raycast acceleration (T2.14) ----------------
  /** Meshes smaller than this are raycast brute force (a BVH would not pay for itself). */
  const BVH_MIN_TRIS = 2000
  let bvhTimer = 0
  /** Build one BVH per pickable mesh in idle slices (largest first) so loading a 900k-triangle model never stalls. */
  function scheduleBvh() {
    const queue: THREE.Mesh[] = []
    for (const e of entryList) for (const m of e.meshes) queue.push(m)
    for (const x of extras) if (x.kind === 'vessel') for (const m of x.meshes) queue.push(m)
    const tris = (m: THREE.Mesh) => (m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count) / 3
    const todo = queue.filter((m) => tris(m) >= BVH_MIN_TRIS).sort((a, b) => tris(b) - tris(a))
    for (const m of queue) m.raycast = acceleratedRaycast // falls back to brute force until boundsTree exists
    const step = () => {
      const t0 = performance.now()
      while (todo.length && performance.now() - t0 < 12) {
        const g = todo.shift()!.geometry
        if (!g.boundsTree) computeBoundsTree.call(g, { maxLeafSize: 10 })
      }
      if (todo.length && !disposed) bvhTimer = window.setTimeout(step, 16)
    }
    bvhTimer = window.setTimeout(step, 50)
  }

  onMount(() => {
    const ac = new AbortController()
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    } catch {
      onerror?.('webgl')
      return
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.82
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.localClippingEnabled = true
    const cv = renderer.domElement
    cv.setAttribute('role', 'img')
    cv.setAttribute('aria-label', ariaLabel)
    cv.tabIndex = -1
    host.prepend(cv)

    scene = new THREE.Scene()
    const pmrem = new THREE.PMREMGenerator(renderer)
    const room = new RoomEnvironment()
    envTex = pmrem.fromScene(room, 0.04).texture
    room.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { m.geometry.dispose(); (m.material as THREE.Material).dispose() } })
    pmrem.dispose()
    scene.environment = envTex
    scene.environmentIntensity = 0.55

    camera = new THREE.PerspectiveCamera(32, 1, 1, 5000)
    controls = new OrbitControls(camera, cv)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.rotateSpeed = 0.8
    controls.addEventListener('change', () => (dirty = true))
    controls.addEventListener('start', () => { anim = null })

    const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(-200, 300, 400); scene.add(key)
    const rim = new THREE.DirectionalLight(0x88ccff, 1.2); rim.position.set(300, -100, -400); scene.add(rim)
    scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x1a1020, 0.5))
    camera.add(new THREE.PointLight(0xffffff, 0.6, 0, 0)); scene.add(camera)

    glow = new THREE.Mesh(new THREE.CircleGeometry(170, 64), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { c: { value: new THREE.Color('#2dd4bf') } },
      vertexShader: 'varying vec2 vU; void main(){ vU=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'uniform vec3 c; varying vec2 vU; void main(){ float d=distance(vU,vec2(.5))*2.; float a=smoothstep(1.,0.,d)*.16 + smoothstep(.02,0.,abs(d-.82))*.25; gl_FragColor=vec4(c,a); }',
    }))
    glow.rotation.x = -Math.PI / 2
    scene.add(glow)

    const resize = () => {
      if (!renderer) return
      const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight)
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      dirty = true
    }
    const ro = new ResizeObserver(resize)
    ro.observe(host)
    resize()

    cv.addEventListener('pointermove', onpointermove)
    cv.addEventListener('pointerleave', onpointerleave)
    cv.addEventListener('pointerdown', onpointerdown)
    cv.addEventListener('pointerup', onpointerup)
    cv.addEventListener('dblclick', ondblclick)
    const lost = (e: Event) => { e.preventDefault(); onerror?.('context') }
    cv.addEventListener('webglcontextlost', lost)

    const pulseSel = () => !!sel && sel.type !== 'vessel' && !reduced
    renderer.setAnimationLoop((now) => {
      if (anim) { stepAnim(now); dirty = true }
      if (controls.update()) dirty = true
      hoverTick()
      if (pulseSel()) {
        const k = 0.45 + Math.sin(now / 380) * 0.15
        for (const e of entryList) if (isSel(e, sel)) e.mat.emissiveIntensity = k
        dirty = true
      }
      if (dirty && renderer) {
        dirty = false
        renderer.render(scene, camera)
        updatePin()
      }
    })

    onprogress?.(0)
    fetchGlb(url, ac.signal)
      .then(async (buf) => {
        const loader = new GLTFLoader()
        if (usesMeshopt(buf)) {
          const { MeshoptDecoder } = await import('three/addons/libs/meshopt_decoder.module.js')
          loader.setMeshoptDecoder(MeshoptDecoder)
        }
        return loader.parseAsync(buf, '')
      })
      .then((g) => { if (!disposed) setupModel(g.scene) })
      .catch((err) => { if (!disposed && err?.name !== 'AbortError') onerror?.(String(err?.message ?? err)) })

    return () => {
      disposed = true
      clearTimeout(bvhTimer)
      ac.abort()
      ro.disconnect()
      cv.removeEventListener('pointermove', onpointermove)
      cv.removeEventListener('pointerleave', onpointerleave)
      cv.removeEventListener('pointerdown', onpointerdown)
      cv.removeEventListener('pointerup', onpointerup)
      cv.removeEventListener('dblclick', ondblclick)
      cv.removeEventListener('webglcontextlost', lost)
      renderer?.setAnimationLoop(null)
      controls.dispose()
      const mats = new Set<THREE.Material>()
      scene.traverse((o) => {
        const m = o as THREE.Mesh
        if (m.isMesh) { if (m.geometry?.boundsTree) disposeBoundsTree.call(m.geometry); m.geometry?.dispose(); (Array.isArray(m.material) ? m.material : [m.material]).forEach((x) => x && mats.add(x)) }
      })
      mats.forEach((m) => m.dispose())
      envTex?.dispose()
      renderer?.renderLists.dispose()
      renderer?.dispose()
      renderer?.forceContextLoss()
      cv.remove()
      renderer = null
      entries.clear(); entryList.length = 0; extras.length = 0; pickables.length = 0
      meshEntry.clear(); meshExtra.clear(); restPos.clear()
    }
  })
</script>

<div class="stage" bind:this={host}>
  <div class="tip" bind:this={tipEl} hidden role="presentation"><span class="tt" bind:this={tipT}></span><span class="ts" bind:this={tipS}></span></div>
  <div class="pin" bind:this={pinEl} aria-hidden="true"><span class="lbl" bind:this={pinT}></span><span class="stem"></span><span class="dotp"></span></div>
</div>

<style>
  .stage { position: absolute; inset: 0; overflow: hidden; touch-action: none; }
  .stage :global(canvas) { display: block; outline: none; width: 100%; height: 100%; }
  .tip { position: absolute; left: 0; top: 0; z-index: 60; pointer-events: none; display: grid; background: rgba(5,7,13,.92); border: 1px solid rgba(94,234,212,.35);
    color: var(--text); font-size: 12.5px; font-weight: 600; padding: 6px 10px; border-radius: 9px; white-space: nowrap; will-change: transform; }
  .tip[hidden] { display: none; }
  .ts { font-size: 11px; font-weight: 500; color: var(--text-3); }
  .ts:empty { display: none; }
  .pin { position: absolute; left: 0; top: 0; z-index: 5; pointer-events: none; display: flex; flex-direction: column; align-items: center; opacity: 0; transition: opacity .2s; will-change: transform; }
  .pin .lbl { padding: 6px 11px; border-radius: 10px; background: rgba(8,12,22,.88); border: 1px solid rgba(94,234,212,.45); font-size: 12.5px; font-weight: 600; white-space: nowrap; box-shadow: 0 8px 24px rgba(0,0,0,.5); }
  .pin .stem { width: 1px; height: 34px; background: linear-gradient(var(--accent), transparent); }
  .pin .dotp { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); margin-top: -2px; box-shadow: 0 0 0 4px rgba(94,234,212,.25), 0 0 16px var(--accent); }
</style>
