import type { Linter } from 'eslint';
import typescriptEslint from 'typescript-eslint';
import vueRuleConfig from '@/rules/vue';
import defaultEssentialTsConfig from './index';

export default [
  ...defaultEssentialTsConfig,
  ...vueRuleConfig,
  {
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
  },
] as Linter.Config[];
