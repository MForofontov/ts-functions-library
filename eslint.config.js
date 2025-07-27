const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.ts', '!functionsUnittests/**/*.ts', '!jest*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettier,
    },
    rules: {
      // Let Prettier handle all formatting
      'prettier/prettier': ['error', {
        singleQuote: true,
        tabWidth: 2
      }],
      
      // Warn on use of console.log, console.error, etc.
      'no-console': 'warn',

      // Do not require explicit return types for functions (TypeScript will infer them)
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Warn when the 'any' type is used (discourages unsafe typing)
      '@typescript-eslint/no-explicit-any': 'warn',

      // Warn on unused variables, but ignore arguments that start with '_'
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],

      // Warn if a Promise is created but not handled (avoids unhandled async bugs)
      '@typescript-eslint/no-floating-promises': 'warn',

      // Warn when passing values of unsafe types as arguments
      '@typescript-eslint/no-unsafe-argument': 'warn',

      // Error if an async function does not contain an await (avoids unnecessary async)
      '@typescript-eslint/require-await': 'error',

      // Warn on assignments from values with unsafe types (like 'any')
      '@typescript-eslint/no-unsafe-assignment': 'warn',

      // Warn on accessing properties on values with unsafe types
      '@typescript-eslint/no-unsafe-member-access': 'warn',

      // Warn on calling values with unsafe types as functions
      '@typescript-eslint/no-unsafe-call': 'warn',

      // Warn on returning values with unsafe types
      '@typescript-eslint/no-unsafe-return': 'warn',

      // Warn if a variable declaration shadows one from an outer scope
      '@typescript-eslint/no-shadow': 'warn',

      // Warn if the same module is imported more than once
      'no-duplicate-imports': 'warn',

      // Warn if a class constructor is unnecessary (does nothing)
      '@typescript-eslint/no-useless-constructor': 'warn',

      // Warn if object types are not defined using 'interface' (enforces interface over type)
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

      // Error if 'require()' is used instead of ES module imports
      '@typescript-eslint/no-var-requires': 'error',

      // Warn if type-only imports are not consistently using 'import type'
      '@typescript-eslint/consistent-type-imports': 'warn',
    },
  },
  {
    files: ['functionsUnittests/**/*.ts', 'jest*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.test.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettier,
    },
    rules: {
      'prettier/prettier': ['error', {
        singleQuote: true,
        tabWidth: 2
      }],
      'no-console': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-shadow': 'warn',
      'no-duplicate-imports': 'warn',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/consistent-type-imports': 'warn',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**', 'allure-report/**', 'eslint.config.js'],
  },
];
