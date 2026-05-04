import { defineConfig, type Plugin } from 'vite'

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

export default defineConfig({
  plugins: [
    preloadChunks(['home']),
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
