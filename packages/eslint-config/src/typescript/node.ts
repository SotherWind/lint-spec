import type { Linter } from 'eslint';
import nodeRuleConfig from '@/rules/node';
import defaultTsConfig from './index';

export default [...defaultTsConfig, ...nodeRuleConfig] as Linter.Config[];
