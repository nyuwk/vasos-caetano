import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

// Lê public/fotos e expõe a lista como módulo virtual "virtual:fotos"
function fotosPlugin() {
  const id = 'virtual:fotos'
  const resolved = '\0' + id
  return {
    name: 'fotos-da-pasta-public',
    resolveId: (s) => (s === id ? resolved : null),
    load(s) {
      if (s !== resolved) return null
      const dir = path.resolve('public/fotos')
      const arquivos = fs.existsSync(dir)
        ? fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f)).sort()
        : []
      return `export default ${JSON.stringify(arquivos.map((f) => `fotos/${f}`))}`
    },
    configureServer(server) {
      server.watcher.add(path.resolve('public/fotos'))
      server.watcher.on('all', (_e, f) => {
        if (f.includes('fotos')) {
          const m = server.moduleGraph.getModuleById(resolved)
          if (m) server.moduleGraph.invalidateModule(m)
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), fotosPlugin()],
})
