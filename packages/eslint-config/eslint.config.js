import { defineConfig } from 'eslint/config';
import defaultConfig from './dist/typescript/index.js';

export default defineConfig([
  defaultConfig,
  {
    ignores: [
      'node_modules/**',
      'build/**',
      'dist/**',
      'zip/**',
      'demo/**',
      'coverage/**',
      'vendor/**',
      'lib/**',
      'sea-modules/**',
      'APP-META/**',
      'test/fixtures/**',
      '**/*.min.js',
      '**/*-min.js',
      '**/*.bundle.js',
    ],
  },
]);
