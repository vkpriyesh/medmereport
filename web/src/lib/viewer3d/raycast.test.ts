// T2.14: hover raycast cost on a ~900k-triangle synthetic scene, brute force vs three-mesh-bvh (as used by Scene3D).
// CPU-only (no WebGL): this is the per-frame budget the hover pick takes. GPU fps is checked on the dev page
// web/bench/hover.html (see docs in that file).
import * as THREE from 'three'
import { acceleratedRaycast, computeBoundsTree } from 'three-mesh-bvh'
import { describe, expect, it } from 'vitest'

function scene900k(): THREE.Mesh[] {
  const meshes: THREE.Mesh[] = []
  const mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide })
  let i = 0
  for (let a = 0; a < 12; a++) for (let b = 0; b < 8; b++) {
    const g = new THREE.SphereGeometry(14, 100, 48) // 9,408 triangles
    const th = (a / 12) * Math.PI * 2, ph = ((b + 0.5) / 8) * Math.PI
    const m = new THREE.Mesh(g, mat)
    m.position.set(60 * Math.sin(ph) * Math.cos(th), 70 * Math.cos(ph), 85 * Math.sin(ph) * Math.sin(th))
    m.updateMatrixWorld(true)
    meshes.push(m)
    i++
  }
  return meshes
}
const tris = (ms: THREE.Mesh[]) => ms.reduce((n, m) => n + m.geometry.index!.count / 3, 0)

function rays(n: number): THREE.Ray[] {
  let s = 12345
  const r = () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967296 }
  const out: THREE.Ray[] = []
  const origin = new THREE.Vector3(300, 120, 260)
  for (let i = 0; i < n; i++) {
    const target = new THREE.Vector3((r() - 0.5) * 120, (r() - 0.5) * 140, (r() - 0.5) * 170)
    out.push(new THREE.Ray(origin.clone(), target.sub(origin).normalize()))
  }
  return out
}

function timePicks(meshes: THREE.Mesh[], rs: THREE.Ray[], firstHitOnly: boolean): { ms: number; hits: number } {
  const rc = new THREE.Raycaster()
  rc.firstHitOnly = firstHitOnly
  const hits: THREE.Intersection[] = []
  let n = 0
  const t0 = performance.now()
  for (const ray of rs) {
    rc.ray.copy(ray)
    hits.length = 0
    rc.intersectObjects(meshes, false, hits)
    if (hits.length) n++
  }
  return { ms: (performance.now() - t0) / rs.length, hits: n }
}

describe('hover raycast acceleration (T2.14)', () => {
  it('a BVH makes a 900k-triangle hover pick fit easily in one frame', () => {
    const meshes = scene900k()
    expect(tris(meshes)).toBeGreaterThan(880_000)
    const rs = rays(60)
    const brute = timePicks(meshes, rs.slice(0, 20), false)

    const tb = performance.now()
    for (const m of meshes) { computeBoundsTree.call(m.geometry, { maxLeafSize: 10 }); m.raycast = acceleratedRaycast }
    const buildMs = performance.now() - tb
    const bvhAll = timePicks(meshes, rs, false) // with a cut active: all hits per mesh
    const bvhFirst = timePicks(meshes, rs, true) // no cut: nearest hit per mesh
    // same answers as brute force on the shared rays
    expect(timePicks(meshes, rs.slice(0, 20), true).hits).toBe(brute.hits)

    console.log(`[T2.14] ${tris(meshes)} tris in ${meshes.length} meshes — brute ${brute.ms.toFixed(2)} ms/pick, ` +
      `BVH ${bvhAll.ms.toFixed(3)} ms/pick (all hits), ${bvhFirst.ms.toFixed(3)} ms/pick (first hit); BVH build ${buildMs.toFixed(0)} ms`)
    expect(bvhFirst.ms).toBeLessThan(2) // well under a 16.7 ms frame even on slow CPUs
    expect(bvhFirst.ms * 10).toBeLessThan(brute.ms)
  }, 120_000)
})
