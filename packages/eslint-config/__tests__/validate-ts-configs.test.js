import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';
import { sumBy, keys } from 'lodash-es';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null;
};

describe('Validate TS Configs', () => {
  let eslint;
  const configPath = './dist/typescript/index.js';
  const filePath = join(__dirname, './fixtures/ts.ts');
  const tsConfigPath = join(__dirname, './fixtures/tsconfig.json');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            project: tsConfigPath,
          },
        },
      },
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('@typescript-eslint'),
      'Should include @typescript-eslint plugin',
    );
  });

  it('should lint TypeScript files with typescript plugin rules', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 19, 'Should have exactly 19 errors');
    assert.strictEqual(warningCount, 0, 'Should have exactly 0 warnings');

    // 验证 @typescript-eslint 插件工作是否正常
    const tsErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('@typescript-eslint/'),
    );
    assert.ok(
      tsErrors.length > 0,
      'Should detect typescript-specific violations',
    );

    // 验证 no-redeclare 被 TypeScript 版本替代
    const noRedeclareErrors = messages.filter(
      (m) => m.ruleId === 'no-redeclare',
    );
    assert.equal(
      noRedeclareErrors.length,
      0,
      'no-redeclare should be handled by @typescript-eslint',
    );
  });

  it('should resolve TypeScript imports correctly', async () => {
    // 验证 eslint-import-resolver-typescript 工作是否正常
    const filePath2 = join(__dirname, './fixtures/ts-import-a.ts');
    const filePath3 = join(__dirname, './fixtures/ts-import-b.ts');
    const reports2 = await eslint.lintFiles([filePath2, filePath3]);
    // 导入解析应该正常工作（不报告无法解析的导入）
    // 注意：路径别名 @/ 需要额外的 resolver 配置，这里只验证基本的 TypeScript 文件解析
    const fatalErrors = reports2
      .flatMap((r) => r.messages)
      .filter((m) => m.fatal);
    assert.equal(
      fatalErrors.length,
      0,
      'Should have no fatal errors when resolving TypeScript imports',
    );
  });
});

describe('Validate VUE TS Configs', () => {
  let eslint;
  const configPath = './dist/typescript/vue.js';
  const filePath = join(__dirname, './fixtures/ts-vue.vue');
  const tsConfigPath = join(__dirname, './fixtures/tsconfig.json');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            project: tsConfigPath,
          },
        },
      },
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('vue'),
      'Should include vue plugin',
    );
    assert.ok(
      keys(config.plugins).includes('@typescript-eslint'),
      'Should include @typescript-eslint plugin',
    );
  });

  it('should lint Vue TS files with both vue and typescript plugins', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 5, 'Should have exactly 5 errors');
    assert.strictEqual(warningCount, 7, 'Should have exactly 7 warnings');

    // 验证 eslint-plugin-vue 及 @typescript-eslint 工作是否正常
    const vueErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('vue/'),
    );
    const tsErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('@typescript-eslint/'),
    );
    assert.ok(vueErrors.length > 0, 'Should detect vue-specific violations');
    assert.ok(
      tsErrors.length > 0,
      'Should detect typescript-specific violations',
    );
  });
});

describe('Validate React TS Configs', () => {
  let eslint;
  const configPath = './dist/typescript/react.js';
  const filePath = join(__dirname, './fixtures/ts-react.tsx');
  const tsConfigPath = join(__dirname, './fixtures/tsconfig.json');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            project: tsConfigPath,
          },
        },
      },
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('react'),
      'Should include react plugin',
    );
    assert.ok(
      keys(config.plugins).includes('@typescript-eslint'),
      'Should include @typescript-eslint plugin',
    );
  });

  it('should lint React TS files with both react and typescript plugins', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 5, 'Should have exactly 5 errors');
    assert.strictEqual(warningCount, 1, 'Should have exactly 1 warning');

    // 验证 eslint-plugin-react 及 @typescript-eslint 工作是否正常
    const reactErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('react/'),
    );
    const tsErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('@typescript-eslint/'),
    );
    assert.ok(
      reactErrors.length > 0,
      'Should detect react-specific violations',
    );
    assert.ok(
      tsErrors.length > 0,
      'Should detect typescript-specific violations',
    );
  });
});

describe('Validate Node TS Configs', () => {
  let eslint;
  const configPath = './dist/typescript/node.js';
  const filePath = join(__dirname, './fixtures/ts-node.ts');
  const tsConfigPath = join(__dirname, './fixtures/tsconfig.json');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            project: tsConfigPath,
          },
        },
      },
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('n'),
      'Should include node plugin (n)',
    );
    assert.ok(
      keys(config.plugins).includes('@typescript-eslint'),
      'Should include @typescript-eslint plugin',
    );
  });

  it('should lint Node TS files with node and typescript plugins', async () => {
    const results = await eslint.lintFiles([filePath]);
    const { errorCount, warningCount, messages } = results[0];
    const ruleIds = messages.map((m) => m.ruleId);

    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 2, 'Should have exactly 2 errors');
    assert.strictEqual(warningCount, 3, 'Should have exactly 3 warnings');

    // 验证关键规则是否生效
    assert.ok(
      ruleIds.includes('@typescript-eslint/no-unused-vars'),
      'Should detect @typescript-eslint/no-unused-vars violations',
    );
    assert.ok(
      ruleIds.includes('no-console'),
      'Should detect no-console violations',
    );
    assert.ok(ruleIds.includes('no-var'), 'Should detect no-var violations');

    // 验证已关闭的规则未触发
    assert.ok(
      !ruleIds.includes('@typescript-eslint/explicit-function-return-type'),
      '@typescript-eslint/explicit-function-return-type should be disabled',
    );
  });
});

describe('Validate Essential TS Configs', () => {
  let eslint;
  const configPath = './dist/essential/typescript/index.js';
  const filePath = join(__dirname, './fixtures/ts.ts');
  const tsConfigPath = join(__dirname, './fixtures/tsconfig.json');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            project: tsConfigPath,
          },
        },
      },
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('@typescript-eslint'),
      'Should include @typescript-eslint plugin',
    );
  });

  it('should have style rules set to warn in essential TS config', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 13, 'Should have exactly 13 errors');
    assert.strictEqual(warningCount, 3, 'Should have exactly 3 warnings');

    // 验证黑名单中的规则已关闭
    // 验证 @stylistic/semi 被关闭
    const semiErrors = messages.filter((m) => m.ruleId === '@stylistic/semi');
    assert.equal(
      semiErrors.length,
      0,
      '@stylistic/semi should be disabled in essential',
    );
  });
});

describe('Validate Essential React TS Configs', () => {
  let eslint;
  const configPath = './dist/essential/typescript/react.js';
  const filePath = join(__dirname, './fixtures/ts-react.tsx');
  const tsConfigPath = join(__dirname, './fixtures/tsconfig.json');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            project: tsConfigPath,
          },
        },
      },
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('react'),
      'Should include react plugin',
    );
    assert.ok(
      keys(config.plugins).includes('@typescript-eslint'),
      'Should include @typescript-eslint plugin',
    );
  });

  it('should lint React TS files with essential rules', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 3, 'Should have exactly 3 errors');
    assert.strictEqual(warningCount, 1, 'Should have exactly 1 warning');

    // 验证对 tsx 工作是否正常
    const reactErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('react/'),
    );
    const tsErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('@typescript-eslint/'),
    );
    assert.ok(
      reactErrors.length > 0,
      'Should detect react-specific violations',
    );
    assert.ok(
      tsErrors.length > 0,
      'Should detect typescript-specific violations',
    );

    // 验证 @stylistic/semi 被关闭
    const semiErrors = messages.filter((m) => m.ruleId === '@stylistic/semi');
    assert.equal(
      semiErrors.length,
      0,
      '@stylistic/semi should be disabled in essential',
    );

    // 验证黑名单中的 react/jsx-indent 规则已关闭
    const jsxIndentErrors = messages.filter(
      (m) => m.ruleId === 'react/jsx-indent',
    );
    assert.equal(
      jsxIndentErrors.length,
      0,
      'react/jsx-indent should be disabled in essential',
    );
  });
});

describe('Validate Essential Vue TS Configs', () => {
  let eslint;
  const configPath = './dist/essential/typescript/vue.js';
  const filePath = join(__dirname, './fixtures/ts-vue.vue');
  const tsConfigPath = join(__dirname, './fixtures/tsconfig.json');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            project: tsConfigPath,
          },
        },
      },
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('vue'),
      'Should include vue plugin',
    );
    assert.ok(
      keys(config.plugins).includes('@typescript-eslint'),
      'Should include @typescript-eslint plugin',
    );
  });

  it('should lint Vue TS files with essential rules', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 3, 'Should have exactly 3 errors');
    assert.strictEqual(warningCount, 7, 'Should have exactly 7 warnings');

    // 验证 vue plugin 工作是否正常
    const vueErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('vue/'),
    );
    assert.ok(vueErrors.length > 0, 'Should detect vue-specific violations');

    // 验证黑名单中的规则已关闭
    const indentErrors = messages.filter(
      (m) => m.ruleId === '@stylistic/indent',
    );
    assert.equal(
      indentErrors.length,
      0,
      '@stylistic/indent should be disabled in essential',
    );
  });
});
