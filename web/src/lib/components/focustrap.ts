// Focus trap for modal dialogs: Tab / Shift+Tab cycle inside the node, focus moves in on mount and returns to the
// previously focused element on destroy. `wrapIndex` is the pure part (unit-tested).

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'

/** Index to focus after Tab (`back` = Shift+Tab) from `i` among `n` focusables (`i = -1`: focus is outside). */
export function wrapIndex(n: number, i: number, back: boolean): number {
  if (n <= 0) return -1
  if (i < 0) return back ? n - 1 : 0
  return back ? (i - 1 + n) % n : (i + 1) % n
}

/** Svelte action: `<div use:trapFocus>`. Focuses `[data-autofocus]` (or the first focusable) on mount. */
export function trapFocus(node: HTMLElement) {
  const before = document.activeElement as HTMLElement | null
  const items = () => [...node.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => el.offsetParent !== null || el === document.activeElement)
  function onKey(e: KeyboardEvent) {
    if (e.key !== 'Tab') return
    const list = items()
    if (!list.length) { e.preventDefault(); node.focus(); return }
    const i = list.indexOf(document.activeElement as HTMLElement)
    const atEdge = i < 0 || (e.shiftKey ? i === 0 : i === list.length - 1)
    if (atEdge) { e.preventDefault(); list[wrapIndex(list.length, i, e.shiftKey)]?.focus() }
  }
  node.addEventListener('keydown', onKey)
  queueMicrotask(() => (node.querySelector<HTMLElement>('[data-autofocus]') ?? items()[0] ?? node).focus())
  return {
    destroy() {
      node.removeEventListener('keydown', onKey)
      // the opener may have been re-rendered away (e.g. "Download" became "Installed"): fall back to the main region
      if (before && document.contains(before)) before.focus()
      else document.getElementById('main')?.focus()
    },
  }
}
