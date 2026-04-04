import type { Linter } from 'eslint';
import tsRuleConfig from '@/rules/typescript';
import defaultEssentialConfig from '../index';
import tsBlacklistRuleConfig from '../rules/ts-blacklist';

export default [
  ...defaultEssentialConfig,
  ...tsRuleConfig,
  tsBlacklistRuleConfig,
] as Linter.Config[];
