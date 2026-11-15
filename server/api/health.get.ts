export default defineEventHandler(() => {
  return {
    status: 'ok',
    framework: 'Nuxt 4',
    timestamp: new Date().toISOString(),
  }
})
