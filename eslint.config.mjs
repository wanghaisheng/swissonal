import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default antfu({
  rules: {
    'vue/max-attributes-per-line': 1,
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  formatters: {
    css: true,
    scss: true,
    html: true,
    markdown: 'prettier',
  },
  unocss,
})
