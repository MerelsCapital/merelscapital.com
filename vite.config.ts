import { defineConfig } from 'vite'

export default defineConfig({
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
