/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    // 解决’defineProps’ is not defined
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'vue/multi-word-component-names': [
      // vue组件取名规则
      0,
      {
        ignores: [],
      },
    ],
  },
}
