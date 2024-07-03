// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxtjs/i18n', '@nuxt/content'],
  typescript: {
    typeCheck: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de-DE.json',
      },
      {
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.json',
      },
    ],
    langDir: 'locales/',
    lazy: true,
    strategy: 'prefix_except_default',
  },
})
