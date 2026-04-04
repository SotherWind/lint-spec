import { defineConfig } from 'eslint/config';
import defaultTsConfig from '@lint-spec/eslint-config/typescript/index';

export default defineConfig([
  ...defaultTsConfig,
  {
    ignores: ['node_modules/', 'dist/**/*', 'test/**', '__tests__/**'],
  },
]);
