// Pure path helpers for the folder browser (Windows and POSIX paths).

export interface Crumb { label: string; path: string }

const BS = '\\'

/** `D:\a\b` → `D:\` · a · b ;  `/home/x` → / · home · x  (each with its full path). */
export function breadcrumbs(path: string): Crumb[] {
  if (!path) return []
  const win = /^[A-Za-z]:/.test(path) || (path.includes(BS) && !path.startsWith('/'))
  const parts = path.split(/[\\/]+/).filter(Boolean)
  const out: Crumb[] = []
  if (win) {
    let acc = ''
    parts.forEach((p, i) => {
      acc = i === 0 ? p + BS : acc.endsWith(BS) ? acc + p : acc + BS + p
      out.push({ label: i === 0 ? p + BS : p, path: acc })
    })
    return out
  }
  out.push({ label: '/', path: '/' })
  let acc = ''
  for (const p of parts) { acc += `/${p}`; out.push({ label: p, path: acc }) }
  return out
}

export function formatSize(bytes: number | null | undefined): string {
  if (bytes == null || !(bytes >= 0)) return ''
  const u = ['B', 'KB', 'MB', 'GB', 'TB']
  let v = bytes, i = 0
  while (v >= 1024 && i < u.length - 1) { v /= 1024; i++ }
  return `${v >= 10 || i === 0 ? Math.round(v) : v.toFixed(1)} ${u[i]}`
}

/** Strip surrounding quotes/whitespace from a pasted path (Explorer's "Copy as path" adds quotes). */
export function cleanPastedPath(s: string): string {
  return s.trim().replace(/^["']+|["']+$/g, '').trim()
}
