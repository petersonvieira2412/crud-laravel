module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'vuetify',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never']
  }
}
