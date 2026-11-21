import numpy as np
import trimesh

from medmereport.geometry.mesh import (
    Mesh,
    decimate,
    face_labels,
    majority_smooth,
    orient_outward,
    signed_volume,
    split_by_labels,
    taubin,
)


def _sphere(sub=4):
    m = trimesh.creation.icosphere(sub)
    return Mesh(np.asarray(m.vertices, float), np.asarray(m.faces, np.int64))


def _loop_majority(mesh, vl, passes):
    """The prototype's per-vertex loop (reference implementation)."""
    nb = trimesh.Trimesh(mesh.vertices, mesh.faces, process=False).vertex_neighbors
    for _ in range(passes):
        nv = vl.copy()
        for k, ns in enumerate(nb):
            if ns:
                vals = np.append(vl[ns], vl[k])
                u, cnt = np.unique(vals, return_counts=True)
                nv[k] = u[np.argmax(cnt)]
        vl = nv
    return vl


def test_majority_smooth_matches_prototype_loop():
    mesh = _sphere(3)
    rng = np.random.default_rng(1)
    labels = rng.choice([3, 7, 11, 40], size=len(mesh.vertices))
    for passes in (1, 2):
        assert (majority_smooth(mesh, labels, passes) == _loop_majority(mesh, labels, passes)).all()


def test_majority_smooth_removes_isolated_vertex_labels():
    mesh = _sphere(3)
    labels = np.where(mesh.vertices[:, 0] > 0, 5, 9)
    noisy = labels.copy()
    noisy[::37] = 99
    out = majority_smooth(mesh, noisy, 2)
    assert 99 not in out
    assert (out == labels).mean() > 0.97


def test_orientation_and_split_cover_all_faces():
    mesh = _sphere(3)
    mesh.faces = mesh.faces[:, ::-1].copy()  # inward
    assert signed_volume(mesh) < 0
    orient_outward(mesh)
    assert signed_volume(mesh) > 0
    vl = np.where(mesh.vertices[:, 2] > 0, 1, 2)
    parts = split_by_labels(mesh, face_labels(mesh.faces, vl))
    assert set(parts) == {1, 2}
    assert sum(p.n_faces for p in parts.values()) == mesh.n_faces


def test_decimate_and_taubin_preserve_shape():
    mesh = _sphere(5)
    vol0 = signed_volume(mesh)
    d = decimate(mesh, 2000)
    assert d.n_faces <= 2000
    assert abs(signed_volume(d) - vol0) / vol0 < 0.05
    s = taubin(mesh, 10)
    assert abs(signed_volume(s) - vol0) / vol0 < 0.05
