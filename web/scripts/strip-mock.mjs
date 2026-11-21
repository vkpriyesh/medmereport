#!/usr/bin/env node
// postbuild: never ship the dev-only synthetic mock data (public/mock/) inside the engine's static UI.
import { rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'engine', 'medmereport', 'server', 'static')
rmSync(join(outDir, 'mock'), { recursive: true, force: true })
