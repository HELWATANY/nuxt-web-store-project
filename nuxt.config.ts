// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-15',
  future: {
    compatibilityVersion: 4,
  },
  ssr: true,
  site: {
    url: 'https://example.com',
    name: 'Nuxt 4 Web Store',
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-authorization',
    '@nuxtjs/seo',
    '@nuxt/test-utils/module',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English (US)',
        file: 'en-us.json',
      },
    ],
    langDir: '../i18n/locales',
    strategy: 'no_prefix',
  },
  nitro: {
    storage: {
      data: {
        driver: 'fs',
        base: './data',
      },
    },
  },
  devtools: { enabled: true },
})
