import { defineConfig, type Plugin, createServer } from 'vite'
import { promises as fs } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

function preloadChunks(names: string[]): Plugin {
  const chunkPaths: string[] = []

  return {
    name: 'preload-chunks',
    apply: 'build',
    generateBundle(_options, bundle) {
      for (const filename of Object.keys(bundle)) {
        if (names.some(n => new RegExp(`^assets/${n}-[^/]+\\.js$`).test(filename))) {
          chunkPaths.push(`/${filename}`)
        }
      }
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        if (!chunkPaths.length) return html
        const tags = chunkPaths
          .map(p => `  <link rel="modulepreload" href="${p}">`)
          .join('\n')
        return html.replace('</head>', `${tags}\n</head>`)
      }
    }
  }
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function prerender(): Plugin {
  return {
    name: 'prerender',
    apply: 'build',
    enforce: 'post',
    async closeBundle() {
      const distDir = resolve(__dirname, 'dist')
      const indexPath = join(distDir, 'index.html')
      const shell = await fs.readFile(indexPath, 'utf-8')

      const server = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        logLevel: 'warn',
        configFile: false,
      })

      try {
        const { renderHeader } = await server.ssrLoadModule('/src/components/header.ts') as { renderHeader: () => string }
        const { renderFooter } = await server.ssrLoadModule('/src/components/footer.ts') as { renderFooter: () => string }
        const { renderNewsletterSignup } = await server.ssrLoadModule('/src/components/newsletter.ts') as { renderNewsletterSignup: () => string }
        const { routes } = await server.ssrLoadModule('/src/routes.ts') as { routes: Array<{ path: string; modulePath: string; renderFn: string; isTool?: boolean; meta: { title: string; description: string } }> }

        const headerHtml = renderHeader()
        const footerHtml = renderFooter()

        for (const route of routes) {
          const modulePath = '/src/' + route.modulePath.replace(/^\.\//, '')
          const mod = await server.ssrLoadModule(modulePath) as Record<string, () => string>
          const render = mod[route.renderFn]
          if (typeof render !== 'function') {
            console.warn(`[prerender] ${route.path}: ${route.renderFn} not found`)
            continue
          }

          let content = render()
          if (route.isTool) content += renderNewsletterSignup()

          const url = `https://merelscapital.com${route.path === 'home' ? '/' : `/${route.path}`}`
          const html = shell
            .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.meta.title)}</title>`)
            .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escapeAttr(route.meta.description)}$2`)
            .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(route.meta.title)}$2`)
            .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(route.meta.description)}$2`)
            .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${escapeAttr(url)}$2`)
            .replace('<header id="header"></header>', `<header id="header">${headerHtml}</header>`)
            .replace('<main id="main-content"></main>', `<main id="main-content">${content}</main>`)
            .replace('<footer id="footer"></footer>', `<footer id="footer">${footerHtml}</footer>`)

          const outPath = route.path === 'home'
            ? indexPath
            : join(distDir, route.path, 'index.html')

          await fs.mkdir(dirname(outPath), { recursive: true })
          await fs.writeFile(outPath, html)
          console.log(`[prerender] ${route.path} → ${outPath.replace(distDir + '/', '')}`)
        }
      } finally {
        await server.close()
      }
    }
  }
}

export default defineConfig({
  plugins: [
    preloadChunks(['home']),
    prerender(),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.some(n => n.endsWith('.css'))) return 'assets/style.css'
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
