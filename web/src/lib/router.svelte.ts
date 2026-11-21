// Tiny history-API router (no dependency). Routes are matched in order; ':param' segments captured.
export const route = $state({ path: location.pathname, params: {} as Record<string, string> })

window.addEventListener('popstate', () => { route.path = location.pathname })

export function navigate(path: string, replace = false) {
  if (path === location.pathname) return
  if (replace) history.replaceState(null, '', path)
  else history.pushState(null, '', path)
  route.path = path
  window.scrollTo(0, 0)
}

export function match(pattern: string, path: string): Record<string, string> | null {
  const a = pattern.split('/').filter(Boolean)
  const b = path.split('/').filter(Boolean)
  if (a.length !== b.length) return null
  const out: Record<string, string> = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith(':')) out[a[i].slice(1)] = decodeURIComponent(b[i])
    else if (a[i] !== b[i]) return null
  }
  return out
}

/** Svelte action: intercept clicks on internal links. */
export function link(node: HTMLAnchorElement) {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
    const href = node.getAttribute('href')
    if (!href || !href.startsWith('/')) return
    e.preventDefault()
    navigate(href)
  }
  node.addEventListener('click', onClick)
  return { destroy: () => node.removeEventListener('click', onClick) }
}
