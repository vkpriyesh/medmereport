import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// Dev: `medmereport serve --dev --port 8765` then `npm run dev` (proxies /api to the engine).
// Build: emits into the engine package so `uv tool install git+…` ships the UI without Node.
const ENGINE = `http://127.0.0.1:${process.env.MMR_PORT ?? '8765'}`

export default defineConfig({
  plugins: [svelte()],
  base: '/',
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    proxy: { '/api': { target: ENGINE, changeOrigin: false } },
  },
  build: {
    outDir: '../engine/medmereport/server/static',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
})
