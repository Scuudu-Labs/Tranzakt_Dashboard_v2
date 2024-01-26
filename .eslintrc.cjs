module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    semi: 0,
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
