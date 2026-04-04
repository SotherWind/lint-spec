import type { Linter } from 'eslint';
import tsRuleConfig from '@/rules/typescript';
import reactEssentialConfig from '../react';
import tsBlacklistRuleConfig from '../rules/ts-blacklist';

export default [
  ...reactEssentialConfig,
  ...tsRuleConfig,
  tsBlacklistRuleConfig,
] as Linter.Config[];
