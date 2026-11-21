// Minimal dependency-free i18n with Svelte 5 runes. Add a language by adding a dictionary file.
import en from './en.json'
import hi from './hi.json'

type Dict = Record<string, string>
const dicts: Record<string, Dict> = { en, hi }
export const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
] as const

function initial(): string {
  try {
    const saved = localStorage.getItem('mmr-lang')
    if (saved && dicts[saved]) return saved
  } catch { /* storage unavailable */ }
  return navigator.language?.startsWith('hi') ? 'hi' : 'en'
}

export const i18n = $state({ lang: initial() })

export function setLang(code: string) {
  if (!dicts[code]) return
  i18n.lang = code
  document.documentElement.lang = code
  try { localStorage.setItem('mmr-lang', code) } catch { /* ignore */ }
}

/** Translate a key, with {name} interpolation. Falls back to English, then the key. */
export function t(key: string, vars: Record<string, string | number> = {}): string {
  const s = dicts[i18n.lang]?.[key] ?? en[key as keyof typeof en] ?? key
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`))
}

/** Whether a key exists (in the current language or English). */
export function has(key: string): boolean {
  return key in (dicts[i18n.lang] ?? {}) || key in en
}
