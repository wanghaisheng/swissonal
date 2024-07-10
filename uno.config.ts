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
    'btn': 'inline-flex h-fit w-fit items-center justify-center rounded-full py-1 cursor-pointer',
    'hover-btn-transition':
      'transition duration-400 ease-out hover:ease-in font-base',

    // sizes
    'btn-sm': 'px-2 text-xs gap-1',
    'btn-md': 'px-4 text-base gap-2',
    'btn-lg': 'px-6 text-lg gap-3',

    // styles
    'btn-fill':
      'drop-shadow-sm border border-dark-200 bg-dark-200 text-white-200 hover:bg-transparent hover-btn-transition hover:scale-102 hover:text-dark-200',

    'btn-outline':
      'border border-dark-200 text-dark-200 hover-btn-transition hover:bg-dark-200 hover:text-white-200 hover:scale-98',

    'btn-underline':
      'text-dark-200 !p-0 relative after:bg-dark-200 after:absolute after:bottom-0 after:h-[1px] after:w-full after:origin-center after:scale-x-100 after:rounded-full after:transition after:duration-300 after:content-[\'\'] after:hover:scale-x-0',

    'btn-text':
      '!p-0 text-dark-200 hover-btn-transition relative after:bg-dark-200 after:absolute after:bottom-0 after:h-[1px] after:left-0 after:right-0 after:origin-center after:scale-x-0 after:rounded-full after:transition after:duration-300 after:content-[\'\'] after:hover:scale-x-100',
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
