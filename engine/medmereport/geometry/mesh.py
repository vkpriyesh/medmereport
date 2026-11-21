"""Low-level mesh helpers: iso-surfaces in LPS, smoothing, decimation, orientation, vertex labels.

Meshes here are plain ``(vertices, faces)`` in LPS millimetres until :mod:`geometry.glb` converts
them to viewer space. All functions are deterministic.
"""

from __future__ import annotations

from dataclasses import dataclass

import fast_simplification
import numpy as np
import trimesh
from scipy import ndimage as ndi
from scipy import sparse
from skimage import measure

from medmereport.dicom.series import Geometry
from medmereport.geometry.space import index_to_lps


@dataclass
class Mesh:
    vertices: np.ndarray  # (N, 3) float64, LPS mm (or viewer mm after conversion)
    faces: np.ndarray  # (M, 3) int64

    @property
    def n_faces(self) -> int:
        return int(len(self.faces))

    def trimesh(self, process: bool = False) -> trimesh.Trimesh:
        return trimesh.Trimesh(self.vertices, self.faces, process=process)


def crop_box(mask: np.ndarray, pad: int) -> tuple[slice, ...] | None:
    """Bounding box of ``mask`` grown by ``pad`` voxels (clipped), or None when empty."""
    objs = ndi.find_objects(mask.astype(np.uint8))
    if not objs or objs[0] is None:
        return None
    return tuple(slice(max(s.start - pad, 0), min(s.stop + pad, n)) for s, n in zip(objs[0], mask.shape, strict=True))


def largest_component(mask: np.ndarray) -> np.ndarray:
    lab, n = ndi.label(mask)
    if n <= 1:
        return mask.astype(bool)
    sizes = np.bincount(lab.ravel())
    sizes[0] = 0
    out: np.ndarray = lab == int(np.argmax(sizes))
    return out


def iso_surface(
    field: np.ndarray, level: float, box: tuple[slice, ...], geom: Geometry, upsample: int = 2
) -> Mesh | None:
    """Marching cubes on ``field`` (a crop at ``box`` of a volume on ``geom``) -> LPS mesh.

    ``upsample`` > 1 resamples the field with grid-aligned linear interpolation first (smoother
    surfaces at 1 mm). The returned faces are wound so normals point towards *lower* field values
    (outwards for a "high inside" field).
    """
    f = field.astype(np.float32, copy=False)
    if upsample > 1:
        f = ndi.zoom(f, upsample, order=1, grid_mode=True, mode="nearest")
    if float(np.min(f)) >= level or float(np.max(f)) <= level:
        return None
    v, faces, _, _ = measure.marching_cubes(f, level)
    if upsample > 1:
        v = (v + 0.5) / upsample - 0.5  # inverse of grid-mode zoom: output centre -> input centre
    v = v + np.array([s.start for s in box], float)
    lps = index_to_lps(geom, v)
    m = trimesh.Trimesh(lps, faces.astype(np.int64), process=True)
    mesh = Mesh(np.asarray(m.vertices, float), np.asarray(m.faces, np.int64))
    orient_outward(mesh)
    return mesh


def signed_volume(mesh: Mesh) -> float:
    v = mesh.vertices
    a, b, c = v[mesh.faces[:, 0]], v[mesh.faces[:, 1]], v[mesh.faces[:, 2]]
    return float(np.einsum("ij,ij->i", a, np.cross(b, c)).sum() / 6.0)


def orient_outward(mesh: Mesh) -> None:
    """Make a closed mesh's normals point outwards (positive signed volume)."""
    if len(mesh.faces) and signed_volume(mesh) < 0:
        mesh.faces = mesh.faces[:, ::-1].copy()


def keep_largest_piece(mesh: Mesh) -> Mesh:
    if not len(mesh.faces):
        return mesh
    labels = trimesh.graph.connected_component_labels(trimesh.graph.face_adjacency(mesh.faces), len(mesh.faces))
    if labels.max() == 0:
        return mesh
    keep = labels == np.argmax(np.bincount(labels))
    return submesh(mesh, mesh.faces[keep])


def submesh(mesh: Mesh, faces: np.ndarray) -> Mesh:
    used, inv = np.unique(faces, return_inverse=True)
    return Mesh(mesh.vertices[used], inv.reshape(-1, 3).astype(np.int64))


def taubin(mesh: Mesh, iterations: int = 12, lamb: float = 0.5, nu: float = -0.53) -> Mesh:
    """Volume-preserving Taubin smoothing (uniform Laplacian, vectorised)."""
    if not len(mesh.faces) or iterations <= 0:
        return mesh
    lap = uniform_laplacian(mesh)
    v = mesh.vertices.copy()
    for _ in range(iterations):
        v = v + lamb * (lap @ v - v)
        v = v + nu * (lap @ v - v)
    return Mesh(v, mesh.faces)


def adjacency(mesh: Mesh) -> sparse.csr_matrix:
    """Symmetric vertex adjacency (no self loops)."""
    n = len(mesh.vertices)
    e = np.concatenate([mesh.faces[:, [0, 1]], mesh.faces[:, [1, 2]], mesh.faces[:, [2, 0]]])
    a = sparse.coo_matrix((np.ones(len(e), np.float32), (e[:, 0], e[:, 1])), shape=(n, n)).tocsr()
    a = a + a.T
    a.data[:] = 1.0
    return a


def uniform_laplacian(mesh: Mesh) -> sparse.csr_matrix:
    """Row-normalised adjacency: (L @ v)[i] = mean of the neighbours of vertex i."""
    a = adjacency(mesh)
    deg = np.asarray(a.sum(axis=1)).ravel()
    deg[deg == 0] = 1
    out: sparse.csr_matrix = sparse.diags(1.0 / deg) @ a
    return out


def decimate(mesh: Mesh, target_faces: int) -> Mesh:
    """Quadric decimation to about ``target_faces`` triangles (no-op when already smaller)."""
    if mesh.n_faces <= target_faces or target_faces <= 0:
        return mesh
    v, f = fast_simplification.simplify(
        mesh.vertices.astype(np.float32),
        mesh.faces.astype(np.int32),
        target_reduction=1.0 - target_faces / mesh.n_faces,
    )
    m = trimesh.Trimesh(np.asarray(v, float), np.asarray(f, np.int64), process=True)
    out = Mesh(np.asarray(m.vertices, float), np.asarray(m.faces, np.int64))
    if out.n_faces > target_faces:  # the simplifier can overshoot slightly; trim on a second pass
        v, f = fast_simplification.simplify(
            out.vertices.astype(np.float32),
            out.faces.astype(np.int32),
            target_reduction=1.0 - target_faces / out.n_faces,
        )
        out = Mesh(np.asarray(v, float), np.asarray(f, np.int64))
    return out


def majority_smooth(mesh: Mesh, labels: np.ndarray, passes: int = 2) -> np.ndarray:
    """Replace each vertex label with the most common label among itself and its neighbours.

    Vectorised over the sparse adjacency (+ self) edge list: (vertex, label) pairs are counted with
    one sort, then the best label per vertex is picked with a lexsort. Ties resolve to the smallest
    label (same as the prototype's per-vertex ``np.unique`` loop, which was ~100x slower).
    """
    if passes <= 0 or not len(labels):
        return labels
    uniq, compact = np.unique(labels, return_inverse=True)
    compact = compact.astype(np.int64)
    n, k = len(labels), len(uniq)
    if k == 1:
        return labels
    adj = adjacency(mesh).tocoo()
    self_idx = np.arange(n, dtype=np.int64)
    rows = np.concatenate([adj.row.astype(np.int64), self_idx])
    cols = np.concatenate([adj.col.astype(np.int64), self_idx])
    for _ in range(passes):
        keys, counts = np.unique(rows * k + compact[cols], return_counts=True)
        v, lab = keys // k, keys % k
        order = np.lexsort((lab, -counts, v))  # by vertex, then highest count, then smallest label
        v, lab = v[order], lab[order]
        first = np.r_[True, v[1:] != v[:-1]]
        new = np.empty(n, np.int64)
        new[v[first]] = lab[first]
        compact = new
    out: np.ndarray = uniq[compact]
    return out


def face_labels(faces: np.ndarray, vlabels: np.ndarray) -> np.ndarray:
    """Per-face label: the majority of its three vertex labels (first vertex on a three-way tie)."""
    a, b, c = vlabels[faces[:, 0]], vlabels[faces[:, 1]], vlabels[faces[:, 2]]
    out: np.ndarray = np.where(b == c, b, a)
    return out


def split_by_labels(mesh: Mesh, flabels: np.ndarray) -> dict[int, Mesh]:
    out: dict[int, Mesh] = {}
    for c in np.unique(flabels):
        if c == 0:
            continue
        out[int(c)] = submesh(mesh, mesh.faces[flabels == c])
    return out


def concat(meshes: list[Mesh]) -> Mesh:
    if len(meshes) == 1:
        return meshes[0]
    verts, faces, off = [], [], 0
    for m in meshes:
        verts.append(m.vertices)
        faces.append(m.faces + off)
        off += len(m.vertices)
    return Mesh(np.concatenate(verts), np.concatenate(faces))
