import type { Linter } from 'eslint';
import reactConfig from '@/react';
import tsRuleConfig from '@/rules/typescript';

export default [...reactConfig, ...tsRuleConfig] as Linter.Config[];
