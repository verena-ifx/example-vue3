module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'script-setup-uses-vars': 0,
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'e', // for e.returnvalue
        'state',
        'store',
        'evt',
        'item',
      ],
    }],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
