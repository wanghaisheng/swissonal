// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    '@primevue/nuxt-module',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  experimental: {
    componentIslands: true,
  },

  ssr: true,

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        {
          name: 'theme-color',
          content: '#1E1E1E',
        },
      ],

    },
  },

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: '',
      posthogHost: '',
      posthogDebug: '',
    },
  },

  site: {
    url: 'https://swissonal.ch',
    name: 'Swissonal',
    indexable: true,
  },

  sitemap: { sources: ['/api/__sitemap__/urls'] },

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

  image: {
    quality: 95,
    screens: {
      'sm': 375,
      'md': 744,
      'lg': 1024,
      '2lg': 1240,
      'xl': 1440,
      '2xl': 1700,
    },
  },

  swiper: {
    prefix: 'Swiper',
  },

  primevue: {
  },

  gsap: {
    composables: true,
    provide: false,
  },

  compatibilityDate: '2024-07-16',
})
