// Tiny history-API router (no dependency). Routes are matched in order; ':param' segments captured.
export { match, resolve, href } from './router-match'
export const route = $state({ path: location.pathname, params: {} as Record<string, string> })

window.addEventListener('popstate', () => { route.path = location.pathname })

export function navigate(path: string, replace = false, scroll = !replace) {
  if (path === location.pathname) return
  if (replace) history.replaceState(null, '', path)
  else history.pushState(null, '', path)
  route.path = path
  if (scroll) window.scrollTo(0, 0)
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
