import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    include: ['tests/unit/**/*.{test,spec}.ts'],
    hookTimeout: 60000,
    testTimeout: 30000,
  },
})
