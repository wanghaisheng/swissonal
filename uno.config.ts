import {
  defineConfig,
  presetAttributify,
  presetIcons,
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
    presetIcons(),
    presetWebFonts(),
  ],

  theme: {
    fontFamily: {
      base: 'Neue Haas Grotesk Display Pro',
    },

    breakpoints: appBreakpoints,

    colors: {
      red: {
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
      white:
      {
        100: '#FFFFFF',
      },
    },
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
