// Pure route matching (no DOM) — unit-tested in router.test.ts.

/** Match `pattern` (e.g. `/study/:id/view/:seriesId`) against `path`; returns captured params or null. */
export function match(pattern: string, path: string): Record<string, string> | null {
  const a = pattern.split('/').filter(Boolean)
  const b = path.split('?')[0].split('#')[0].split('/').filter(Boolean)
  if (a.length !== b.length) return null
  const out: Record<string, string> = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith(':')) {
      try { out[a[i].slice(1)] = decodeURIComponent(b[i]) } catch { return null }
    } else if (a[i] !== b[i]) return null
  }
  return out
}

/** First route whose pattern matches, with its params. */
export function resolve<R extends { pattern: string }>(routes: R[], path: string): (R & { params: Record<string, string> }) | null {
  for (const r of routes) {
    const params = match(r.pattern, path)
    if (params) return { ...r, params }
  }
  return null
}

/** Build a path from a pattern, URL-encoding each param. */
export function href(pattern: string, params: Record<string, string> = {}): string {
  return '/' + pattern.split('/').filter(Boolean).map((seg) => {
    if (!seg.startsWith(':')) return seg
    const v = params[seg.slice(1)]
    if (v === undefined) throw new Error(`missing route param ${seg}`)
    return encodeURIComponent(v)
  }).join('/')
}
