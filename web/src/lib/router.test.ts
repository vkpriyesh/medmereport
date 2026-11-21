import { describe, expect, it } from 'vitest'
import { href, match, resolve } from './router-match'

describe('router match', () => {
  it('matches static and param segments', () => {
    expect(match('/', '/')).toEqual({})
    expect(match('/import', '/import')).toEqual({})
    expect(match('/import', '/import/')).toEqual({})
    expect(match('/study/:id', '/study/abc')).toEqual({ id: 'abc' })
    expect(match('/study/:id/view/:seriesId', '/study/abc/view/s003')).toEqual({ id: 'abc', seriesId: 's003' })
  })
  it('rejects mismatches', () => {
    expect(match('/study/:id', '/study')).toBeNull()
    expect(match('/study/:id', '/study/a/b')).toBeNull()
    expect(match('/study/:id/sagittal', '/study/a/view')).toBeNull()
  })
  it('decodes params and ignores query/hash', () => {
    expect(match('/study/:id', '/study/a%20b?x=1#y')).toEqual({ id: 'a b' })
    expect(match('/study/:id', '/study/%E0%A4')).toBeNull() // malformed escape
  })
  it('resolves the first matching route', () => {
    const routes = [
      { pattern: '/study/:id', name: 'study' },
      { pattern: '/study/:id/view/:seriesId', name: 'view' },
      { pattern: '/study/:id/sagittal', name: 'sag' },
    ]
    expect(resolve(routes, '/study/x/sagittal')).toMatchObject({ name: 'sag', params: { id: 'x' } })
    expect(resolve(routes, '/study/x/view/s1')).toMatchObject({ name: 'view', params: { id: 'x', seriesId: 's1' } })
    expect(resolve(routes, '/nope')).toBeNull()
  })
  it('builds hrefs that round-trip', () => {
    const p = href('/study/:id/view/:seriesId', { id: 'a/b c', seriesId: 's1' })
    expect(p).toBe('/study/a%2Fb%20c/view/s1')
    expect(match('/study/:id/view/:seriesId', p)).toEqual({ id: 'a/b c', seriesId: 's1' })
    expect(() => href('/study/:id', {})).toThrow()
  })
})
