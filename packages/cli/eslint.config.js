import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import nodeConfig from '@lint-spec/eslint-config/typescript/node';

export default defineConfig([
  nodeConfig,
  prettierConfig,
  {
    languageOptions: {
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-require-imports': 0,
      'no-console': 0,
    },
    ignores: ['node_modules/**', 'dist/**', 'test/**', '__tests__/**', 'src/config/**'],
  }
]);
