import type { Linter } from 'eslint';
import vueConfig from '@/vue';
import setStyleToWarnRuleConfig from './rules/set-style-to-warn';
import blacklistRuleConfig from './rules/blacklist';
import es6BlacklistRuleConfig from './rules/es6-blacklist';

export default [
  ...vueConfig,
  setStyleToWarnRuleConfig,
  blacklistRuleConfig,
  es6BlacklistRuleConfig,
] as Linter.Config[];
