import { describe, expect, it } from 'vitest'
import { breadcrumbs, cleanPastedPath, formatSize } from './paths'

describe('breadcrumbs', () => {
  it('splits Windows paths', () => {
    expect(breadcrumbs('D:\\Scans\\DICOM')).toEqual([
      { label: 'D:\\', path: 'D:\\' },
      { label: 'Scans', path: 'D:\\Scans' },
      { label: 'DICOM', path: 'D:\\Scans\\DICOM' },
    ])
    expect(breadcrumbs('E:\\')).toEqual([{ label: 'E:\\', path: 'E:\\' }])
  })
  it('splits POSIX paths', () => {
    expect(breadcrumbs('/home/demo/Downloads')).toEqual([
      { label: '/', path: '/' },
      { label: 'home', path: '/home' },
      { label: 'demo', path: '/home/demo' },
      { label: 'Downloads', path: '/home/demo/Downloads' },
    ])
    expect(breadcrumbs('')).toEqual([])
  })
})

describe('helpers', () => {
  it('formats sizes', () => {
    expect(formatSize(512)).toBe('512 B')
    expect(formatSize(1536)).toBe('1.5 KB')
    expect(formatSize(92_000_000)).toBe('88 MB')
    expect(formatSize(null)).toBe('')
  })
  it('cleans pasted paths', () => {
    expect(cleanPastedPath('  "C:\\Users\\me\\scan.zip"  ')).toBe('C:\\Users\\me\\scan.zip')
    expect(cleanPastedPath("'/media/disc'")).toBe('/media/disc')
  })
})
