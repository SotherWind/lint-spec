import type { Linter } from 'eslint';
import vueRuleConfig from '@/rules/vue';
import typescriptEslint from 'typescript-eslint';
import defaultTsConfig from './index';

export default [
  ...defaultTsConfig,
  ...vueRuleConfig,
  {
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
  },
] as Linter.Config[];
