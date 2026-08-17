import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  astro: true,
  unocss: true,
  ignores: ['.vite-cache/**', 'src/content/**'],
  rules: {
    'e18e/prefer-static-regex': 'off',
  },
})
