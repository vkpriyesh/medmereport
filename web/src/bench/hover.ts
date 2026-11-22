// DEV-ONLY bench (T2.14): ~920k-triangle synthetic scene rendered like Scene3D (MeshPhysicalMaterial, DoubleSide,
// clipping plane), a pointer sweep raycasting once per rAF frame. Measures fps with brute-force raycasts, then with a
// per-mesh BVH (three-mesh-bvh). Result is printed on the page and stored in `window.__bench`.
import * as THREE from 'three'
import { acceleratedRaycast, computeBoundsTree } from 'three-mesh-bvh'

const out = document.getElementById('out')!
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2))
renderer.setSize(innerWidth, innerHeight)
renderer.localClippingEnabled = true
document.body.appendChild(renderer.domElement)
const scene = new THREE.Scene()
scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x1a1020, 1.2))
const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(-200, 300, 400); scene.add(key)
const camera = new THREE.PerspectiveCamera(32, innerWidth / innerHeight, 1, 5000)
camera.position.set(330, 140, 300); camera.lookAt(0, 0, 0)
const clip = [new THREE.Plane(new THREE.Vector3(0, -1, 0), 1e6)]

// 24 overlapping "regions" of 38,400 triangles each, packed like a brain: hover rays cross several of them
const meshes: THREE.Mesh[] = []
for (let i = 0; i < 24; i++) {
  const g = new THREE.SphereGeometry(42, 160, 120)
  const m = new THREE.Mesh(g, new THREE.MeshPhysicalMaterial({ color: new THREE.Color().setHSL(i / 24, 0.6, 0.55), roughness: 0.58, clearcoat: 0.25, side: THREE.DoubleSide, clippingPlanes: clip }))
  const a = (i / 24) * Math.PI * 2
  m.position.set(55 * Math.cos(a), 25 * Math.sin(3 * a), 70 * Math.sin(a))
  m.scale.set(1, 1.15, 1.3)
  scene.add(m); meshes.push(m)
}
const tris = meshes.reduce((n, m) => n + m.geometry.index!.count / 3, 0)
const ray = new THREE.Raycaster(), ptr = new THREE.Vector2(), hits: THREE.Intersection[] = []

const gl = renderer.getContext(), px = new Uint8Array(4)
/**
 * rAF fps is throttled when the tab is hidden, so each frame is also timed synchronously: hover pick + render +
 * a 1-pixel readPixels (forces the GPU to finish). `frameMs` is what an on-screen, unthrottled frame costs.
 */
function run(label: string, ms: number): Promise<{ label: string; fps: number; pickMs: number; frameMs: number }> {
  return new Promise((resolve) => {
    let frames = 0, pickT = 0, frameT = 0
    const t0 = performance.now()
    renderer.setAnimationLoop((now) => {
      const k = (now - t0) / 1000
      ptr.set(Math.sin(k * 2.1) * 0.5, Math.cos(k * 1.7) * 0.4) // pointer sweeping over the model
      const p0 = performance.now()
      ray.setFromCamera(ptr, camera); hits.length = 0; ray.intersectObjects(meshes, false, hits)
      pickT += performance.now() - p0
      meshes.forEach((m) => (m.material as THREE.MeshPhysicalMaterial).emissive.set(hits[0]?.object === m ? 0x334155 : 0))
      renderer.render(scene, camera)
      gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px)
      frameT += performance.now() - p0
      frames++
      if (now - t0 > ms) { renderer.setAnimationLoop(null); resolve({ label, fps: (frames * 1000) / (now - t0), pickMs: pickT / frames, frameMs: frameT / frames }) }
    })
  })
}

;(async () => {
  out.textContent = `scene: ${tris.toLocaleString()} triangles in ${meshes.length} meshes\nwarming up…`
  await run('warmup', 1000)
  const brute = await run('brute force', 4000)
  const tb = performance.now()
  for (const m of meshes) { computeBoundsTree.call(m.geometry, { maxLeafSize: 10 }); m.raycast = acceleratedRaycast }
  const build = performance.now() - tb
  ray.firstHitOnly = true
  const bvh = await run('BVH', 4000)
  const res = { tris, meshes: meshes.length, build: Math.round(build), brute, bvh, ua: navigator.userAgent, gpu: gpuName() }
  ;(window as unknown as { __bench: unknown }).__bench = res
  out.textContent = `scene: ${tris.toLocaleString()} triangles in ${meshes.length} meshes  (${innerWidth}×${innerHeight} @${renderer.getPixelRatio()}x)\n` +
    `GPU: ${res.gpu}\n` +
    `brute force: rAF ${brute.fps.toFixed(1)} fps · frame ${brute.frameMs.toFixed(1)} ms (≈${(1000 / brute.frameMs).toFixed(0)} fps) · hover pick ${brute.pickMs.toFixed(2)} ms\n` +
    `BVH:         rAF ${bvh.fps.toFixed(1)} fps · frame ${bvh.frameMs.toFixed(1)} ms (≈${(1000 / bvh.frameMs).toFixed(0)} fps) · hover pick ${bvh.pickMs.toFixed(3)} ms  (build ${res.build} ms)\n` +
    `(rAF fps is throttled when this tab is not visible)`
})()

function gpuName(): string {
  const gl = renderer.getContext()
  const ext = gl.getExtension('WEBGL_debug_renderer_info')
  return ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : 'unknown'
}
