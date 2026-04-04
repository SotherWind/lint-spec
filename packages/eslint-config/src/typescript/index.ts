import type { Linter } from 'eslint';
import defaultConfig from '@/index';
import tsRuleConfig from '@/rules/typescript';

export default [...defaultConfig, ...tsRuleConfig] as Linter.Config[];
