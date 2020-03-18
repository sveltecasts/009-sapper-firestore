module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['prettier', 'airbnb-base', 'eslint:recommended'],
  plugins: ['prettier', 'svelte3'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: { 'prettier/prettier': 'error' },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
};
