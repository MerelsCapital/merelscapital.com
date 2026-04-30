import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/pages/tools/__tests__/setup.ts'],
    include: ['src/**/__tests__/**/*.test.ts'],
  },
})
