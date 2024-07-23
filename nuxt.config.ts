// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },

  future: {
    compatibilityVersion: 4,
  },
  components: {
    global: true,
    dirs: [
      {
        global: true,
        path: './components/graphic-elements/icons',
      },
      {
        global: true,
        path: './components/graphic-elements/logos',
      },
      {
        global: true,
        path: './components/graphic-elements/',
      },
      {
        global: true,
        path: './components/header',
      },
      {
        global: true,
        path: './components/footer',
      },
      {
        global: true,
        path: './components/sections',
      },
      {
        global: true,
        path: './components/',
      },
    ],
  },

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/content',
    'nuxt-headlessui',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-lodash',
    '@nuxt/image',
    'nuxt-swiper',
  ],

  ssr: true,

  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/scss/index.scss',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  typescript: {
    typeCheck: true,
    strict: true,
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
  },

  headlessui: {
    prefix: 'Headless',
  },

  image: {},

  swiper: {
    prefix: 'Swiper',
  },

  compatibilityDate: '2024-07-16',
})
