import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';
import { sumBy, get, keys } from 'lodash-es';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null;
};

describe('Validate JS Configs', () => {
  let eslint;
  const configPath = './dist/index.js';
  const filePath = join(__dirname, './fixtures/index.js');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(keys(config.rules).length > 0, 'Config should have rules');
  });

  it('should lint files without fatal errors and detect issues', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];
    const ruleIds = messages.map((m) => m.ruleId);

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 4, 'Should have exactly 4 errors');
    assert.strictEqual(warningCount, 1, 'Should have exactly 1 warning');

    // 验证关键规则是否生效
    assert.ok(ruleIds.includes('no-eval'), 'Should detect no-eval violations');
    assert.ok(
      ruleIds.includes('no-console'),
      'Should detect no-console violations',
    );
  });
});

describe('Validate ES5 Configs', () => {
  let eslint;
  const configPath = './dist/es5.js';
  const filePath = join(__dirname, './fixtures/es5.js');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
  });

  it('should apply ES5 specific rules correctly', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 2, 'Should have exactly 2 errors');
    assert.strictEqual(warningCount, 0, 'Should have exactly 0 warnings');

    // 验证 ES5 特有的 comma-dangle 规则（函数参数不使用拖尾逗号）
    const commaDangleErrors = messages.filter(
      (m) => m.ruleId === 'comma-dangle',
    );
    assert.ok(
      commaDangleErrors.length > 0,
      'Should detect comma-dangle violations in ES5',
    );
  });
});

describe('Validate Vue Configs', () => {
  let eslint;
  const configPath = './dist/vue.js';
  const filePath = join(__dirname, './fixtures/vue.vue');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('vue'),
      'Should include vue plugin',
    );
  });

  it('should lint Vue files with vue plugin rules', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 4, 'Should have exactly 4 errors');
    assert.strictEqual(warningCount, 0, 'Should have exactly 0 warnings');

    // 验证 vue plugin 工作是否正常
    const vueErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('vue/'),
    );
    assert.ok(vueErrors.length > 0, 'Should detect vue-specific violations');
  });
});

describe('Validate Essential JS Configs', () => {
  let eslint;
  const configPath = './dist/essential/index.js';
  const filePath = join(__dirname, './fixtures/index.js');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
  });

  it('should have style rules set to warn in essential config', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 0, 'Should have exactly 0 errors');
    assert.strictEqual(warningCount, 4, 'Should have exactly 4 warnings');

    // 验证黑名单中的规则已关闭
    // 验证 semi 被关闭（没有 @stylistic/semi 错误）
    const semiErrors = messages.filter((m) => m.ruleId === '@stylistic/semi');
    assert.equal(
      semiErrors.length,
      0,
      'semi rule should be disabled in essential',
    );
  });
});

describe('Validate Essential ES5 Configs', () => {
  let eslint;
  const configPath = './dist/essential/es5.js';
  const filePath = join(__dirname, './fixtures/es5.js');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
  });

  it('should apply essential ES5 rules correctly', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 1, 'Should have exactly 1 error');
    assert.strictEqual(warningCount, 1, 'Should have exactly 1 warning');

    // 验证 ES5 覆盖的规则是否正常
    const commaDangleErrors = messages.filter(
      (m) => m.ruleId === 'comma-dangle',
    );
    assert.ok(
      commaDangleErrors.length > 0,
      'Should detect comma-dangle violations',
    );

    // 验证黑名单中的 semi 规则已关闭
    const semiErrors = messages.filter((m) => m.ruleId === 'semi');
    assert.equal(
      semiErrors.length,
      0,
      'semi rule should be disabled in essential',
    );
  });
});

describe('Validate Essential Vue Configs', () => {
  let eslint;
  const configPath = './dist/essential/vue.js';
  const filePath = join(__dirname, './fixtures/vue.vue');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('vue'),
      'Should include vue plugin',
    );
  });

  it('should lint Vue files with essential vue rules', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 4, 'Should have exactly 4 errors');
    assert.strictEqual(warningCount, 0, 'Should have exactly 0 warnings');

    // 验证 vue plugin 工作是否正常
    const vueErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('vue/'),
    );
    assert.ok(vueErrors.length > 0, 'Should detect vue-specific violations');

    // 验证黑名单中的 indent 规则已关闭
    const indentErrors = messages.filter(
      (m) => m.ruleId === '@stylistic/indent',
    );
    assert.equal(
      indentErrors.length,
      0,
      'indent rule should be disabled in essential',
    );
  });
});

describe('Validate Essential React Configs', () => {
  let eslint;
  const configPath = './dist/essential/react.js';
  const filePath = join(__dirname, './fixtures/react.jsx');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should export a valid eslint config object', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.ok(
      keys(config.plugins).includes('react'),
      'Should include react plugin',
    );
  });

  it('should lint React files with essential react rules', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, warningCount, messages } = results[0];

    assert.equal(
      sumBy(results, 'fatalErrorCount'),
      0,
      'Should have no fatal errors',
    );
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 7, 'Should have exactly 7 errors');
    assert.strictEqual(warningCount, 9, 'Should have exactly 9 warnings');

    // 验证 react plugin 工作是否正常
    const reactErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('react/'),
    );
    assert.ok(
      reactErrors.length > 0,
      'Should detect react-specific violations',
    );

    // 验证黑名单中的 react/jsx-indent 规则已关闭
    const jsxIndentErrors = messages.filter(
      (m) => m.ruleId === 'react/jsx-indent',
    );
    assert.equal(
      jsxIndentErrors.length,
      0,
      'react/jsx-indent rule should be disabled in essential',
    );
  });
});

describe('Validate Node Configs', () => {
  let eslint;
  const configPath = './dist/node.js';
  const filePath = join(__dirname, './fixtures/node.js');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should export a valid eslint config object with node plugin', async () => {
    const config = await eslint.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.strictEqual(get(config, 'languageOptions.globals.Node'), false);
    assert.ok(
      keys(config.plugins).includes('n'),
      'Should include node plugin (n)',
    );
  });

  it('should lint Node.js files with node plugin rules', async () => {
    const results = await eslint.lintFiles(filePath);
    const { messages, errorCount, warningCount } = results[0];
    const ruleIds = messages.map((m) => m.ruleId);

    // 验证关键 node 规则是否生效
    assert.ok(
      ruleIds.includes('n/no-new-require'),
      'Should detect n/no-new-require violations',
    );
    assert.ok(
      ruleIds.includes('n/prefer-promises/fs'),
      'Should detect n/prefer-promises/fs violations',
    );
    assert.ok(
      ruleIds.includes('no-unused-vars'),
      'Should detect no-unused-vars violations',
    );
    assert.ok(
      ruleIds.includes('@stylistic/semi'),
      'Should detect @stylistic/semi violations',
    );
    assert.ok(
      ruleIds.includes('@stylistic/quotes'),
      'Should detect @stylistic/quotes violations',
    );
    assert.ok(ruleIds.includes('no-var'), 'Should detect no-var violations');

    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 7, 'Should have exactly 7 errors');
    assert.strictEqual(warningCount, 4, 'Should have exactly 4 warnings');

    // 验证已关闭的 n/exports-style 规则是否未触发
    assert.ok(
      !ruleIds.includes('n/exports-style'),
      'n/exports-style should be disabled',
    );
  });
});
