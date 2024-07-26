import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { appBreakpoints } from './breakpoints'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts(),
  ],

  theme: {
    fontFamily: {
      base: 'Neue Haas Grotesk Display Pro',
    },

    breakpoints: appBreakpoints,

    colors: {
      red: {
        10: '#F5C3BF',
        100: '#DA291C',
        200: '#B72218',
        300: '#941C13',
        400: '#4E0F0A',
      },
      green: {
        100: '#03973A',
        200: '#037F31',
        300: '#026727',
        400: '#013615',
      },
      black: {
        100: '#000000',
        200: '#1E1E1E',
      },
      white: {
        100: '#FFFFFF',
      },
    },
  },

  shortcuts: {
    // BUTTONS
    'btn': 'inline-flex gap-2 h-fit w-fit items-center justify-center rounded-full py-1 font-600 px-4 cursor-pointer',

    'hover-btn-transition':
      'transition duration-200 ease-in hover:ease-in font-base',

    // styles
    'btn-outline-white':
      'btn border border-white-100 text-white-100 shadow-[1.5px_1.5px_0px_0px_rgb(255,255,255)] hover-btn-transition hover:shadow-[-1.5px_-1.5px_0px_0px_rgb(255,255,255)] ',

    // TITLES
    'title-xl': 'font-900 font-base uppercase text-5xl md:text-7xl',
    'subtitle-xl': 'font-600 lowercase text-2xl md:text-4xl ',
    'title-lg': 'text-3xl font-900 font-base uppercase md:text-5xl',
    'paragraph': 'text-base xl:text-lg',
    'paragraph-bold-tab': 'text-sm font-semibold tracking-wider md:text-base',
    'paragraph-text': 'text-sm md:text-base lg:text-lg',
    'paragraph-text-bold': 'font-semibold tracking-wider paragraph-text',
    'paragraph-text-light': 'font-light tracking-wide paragraph-text',

  },

  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply'],
    }),
    transformerVariantGroup(),
  ],

  content: {
    filesystem: [
      '**/*.vue',
      './components/**/*.{ts,js}',
      './layouts/**/*.{ts,js}',
      './pages/**/*.{ts,js}',
      './data/**/*.{ts,js}',
      './data/*.{ts,js}',
    ],
    inline: [
      '**/*.vue',
      './components/**/*.{ts,js}',
      './layouts/**/*.{ts,js}',
      './pages/**/*.{ts,js}',
      './data/**/*.{ts,js}',
      './data/*.{ts,js}',
    ],
  },
})
