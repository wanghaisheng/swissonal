// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
  },
  modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxtjs/i18n', '@nuxt/content'],
  ssr: true,
  css: [
    '@/assets/scss/index.scss',
  ],
  typescript: {
    typeCheck: true,
  },
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales/',
    lazy: true,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'German',
        file: 'de-DE.json',
      },
      {
        code: 'it',
        iso: 'it-IT',
        name: 'Italian',
        file: 'it-IT.json',
      },
    ],
  }
})
