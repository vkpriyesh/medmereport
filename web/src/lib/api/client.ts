// Typed client for the medmereport engine. Types are generated from the engine's OpenAPI schema
// (`npm run gen:api`), so the same client works against a desktop sidecar or a hosted engine.
import type { components } from './schema'

export type JobInfo = components['schemas']['JobInfo']
export type Capabilities = components['schemas']['Capabilities']
export type ProgressEvent = components['schemas']['ProgressEvent']

export class ApiError extends Error {
  constructor(public status: number, message: string) { super(message) }
}

const BASE = '' // same origin; a future hosted build can set this

async function req<T>(method: string, path: string, body?: unknown): Promise<T> {
  const r = await fetch(BASE + path, {
    method,
    credentials: 'same-origin',
    headers: body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  if (!r.ok) {
    let msg = r.statusText
    try { msg = (await r.json()).detail ?? msg } catch { /* not json */ }
    throw new ApiError(r.status, typeof msg === 'string' ? msg : JSON.stringify(msg))
  }
  return r.json() as Promise<T>
}

export const api = {
  get: <T>(p: string) => req<T>('GET', p),
  post: <T>(p: string, b: unknown = {}) => req<T>('POST', p, b),
  del: <T>(p: string) => req<T>('DELETE', p),
  capabilities: () => req<Capabilities>('GET', '/api/capabilities'),
  demoJob: (steps = 4, delay = 0.4) => req<JobInfo>('POST', '/api/jobs/demo', { steps, delay }),
  cancelJob: (id: string) => req<{ ok: boolean }>('DELETE', `/api/jobs/${id}`),
}

/** Exchange the one-time key from the URL fragment for an HttpOnly session cookie. */
export async function bootstrapSession(): Promise<'ok' | 'missing' | 'invalid'> {
  const m = location.hash.match(/token=([\w-]+)/)
  if (m) {
    // remove the key from the address bar/history immediately
    history.replaceState(null, '', location.pathname + location.search)
    try {
      await api.post('/api/session', { token: m[1] })
      sessionStorage.setItem('mmr-ok', '1')
      return 'ok'
    } catch {
      return 'invalid'
    }
  }
  try {
    await api.capabilities()
    return 'ok'
  } catch (e) {
    return e instanceof ApiError && e.status === 401 ? 'missing' : 'invalid'
  }
}

/** Subscribe to a job's progress via Server-Sent Events. Returns an unsubscribe function. */
export function watchJob(id: string, onEvent: (e: ProgressEvent) => void, onEnd: (j: JobInfo) => void): () => void {
  const es = new EventSource(`${BASE}/api/jobs/${id}/events`, { withCredentials: true })
  es.addEventListener('progress', (m) => onEvent(JSON.parse((m as MessageEvent).data)))
  es.addEventListener('end', (m) => { onEnd(JSON.parse((m as MessageEvent).data)); es.close() })
  es.onerror = () => { /* EventSource auto-reconnects; 'end' closes it */ }
  return () => es.close()
}
