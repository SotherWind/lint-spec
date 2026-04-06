import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 测试用的临时目录
const TEST_DIR = join(__dirname, './fixtures/test-project');

describe('CLI Tests', () => {
  // 测试前准备：创建测试项目目录
  before(() => {
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true });
    }
    mkdirSync(TEST_DIR, { recursive: true });

    // 创建 package.json
    const packageJson = {
      name: 'test-project',
      version: '1.0.0',
      type: 'module'
    };
    writeFileSync(
      join(TEST_DIR, 'package.json'),
      JSON.stringify(packageJson, null, 2)
    );
  });

  // 测试后清理
  after(() => {
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true });
    }
  });

  describe('Constants', () => {
    it('should have correct package name', async () => {
      const { PACKAGE_NAME } = await import('../dist/utils/constants.js');
      assert.strictEqual(PACKAGE_NAME, '@lint-spec/cli');
    });

    it('should have correct config file name', async () => {
      const { CONFIG_FILE_NAME } = await import('../dist/utils/constants.js');
      assert.strictEqual(CONFIG_FILE_NAME, 'lint-spec.config.js');
    });

    it('should have correct CLI name', async () => {
      const { LINT_CLI_NAME } = await import('../dist/utils/constants.js');
      assert.strictEqual(LINT_CLI_NAME, 'lint-spec');
    });
  });

  describe('Utils', () => {
    it('should detect npm type correctly', async () => {
      const { default: npmType } = await import('../dist/utils/npm-type.js');
      const npm = await npmType;
      assert.ok(['npm', 'yarn', 'pnpm'].includes(npm), 'Should detect valid npm type');
    });

    it('should resolve path correctly', async () => {
      const { default: path } = await import('../dist/utils/path.js');
      assert.ok(typeof path.resolve === 'function', 'Should have resolve method');
      assert.ok(typeof path.join === 'function', 'Should have join method');
    });
  });

  describe('Lint Functions', () => {
    it('should export doESLint function', async () => {
      const { doESLint } = await import('../dist/lints/index.js');
      assert.ok(typeof doESLint === 'function', 'Should export doESLint as function');
    });

    it('should export doStylelint function', async () => {
      const { doStylelint } = await import('../dist/lints/index.js');
      assert.ok(typeof doStylelint === 'function', 'Should export doStylelint as function');
    });

    it('should export doMarkdownlint function', async () => {
      const { doMarkdownlint } = await import('../dist/lints/index.js');
      assert.ok(typeof doMarkdownlint === 'function', 'Should export doMarkdownlint as function');
    });

    it('should export doPrettier function', async () => {
      const { doPrettier } = await import('../dist/lints/index.js');
      assert.ok(typeof doPrettier === 'function', 'Should export doPrettier as function');
    });
  });

  describe('ESLint Config', () => {
    it('should export getESLintConfig function', async () => {
      const { getESLintConfig } = await import('../dist/lints/eslint/getESLintConfig.js');
      assert.ok(typeof getESLintConfig === 'function', 'Should export getESLintConfig as function');
    });

    it('should return ESLint config for JavaScript project', async () => {
      const { getESLintConfig } = await import('../dist/lints/eslint/getESLintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableESLint: true, eslintType: 'index' };

      const eslintConfig = await getESLintConfig({ cwd: TEST_DIR }, packages, config);

      assert.ok(typeof eslintConfig === 'object', 'Should return an object');
      assert.ok(Array.isArray(eslintConfig.overrideConfig) || typeof eslintConfig.overrideConfig === 'object', 'Should have overrideConfig');
    });

    it('should return ESLint config for React project', async () => {
      const { getESLintConfig } = await import('../dist/lints/eslint/getESLintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableESLint: true, eslintType: 'react' };

      const eslintConfig = await getESLintConfig({ cwd: TEST_DIR }, packages, config);

      assert.ok(typeof eslintConfig === 'object', 'Should return an object');
      assert.ok(Array.isArray(eslintConfig.overrideConfig) || typeof eslintConfig.overrideConfig === 'object', 'Should have overrideConfig');
    });

    it('should return ESLint config for Vue project', async () => {
      const { getESLintConfig } = await import('../dist/lints/eslint/getESLintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableESLint: true, eslintType: 'vue' };

      const eslintConfig = await getESLintConfig({ cwd: TEST_DIR }, packages, config);

      assert.ok(typeof eslintConfig === 'object', 'Should return an object');
      assert.ok(Array.isArray(eslintConfig.overrideConfig) || typeof eslintConfig.overrideConfig === 'object', 'Should have overrideConfig');
    });

    it('should return ESLint config for Node project', async () => {
      const { getESLintConfig } = await import('../dist/lints/eslint/getESLintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableESLint: true, eslintType: 'node' };

      const eslintConfig = await getESLintConfig({ cwd: TEST_DIR }, packages, config);

      assert.ok(typeof eslintConfig === 'object', 'Should return an object');
      assert.ok(Array.isArray(eslintConfig.overrideConfig) || typeof eslintConfig.overrideConfig === 'object', 'Should have overrideConfig');
    });

    it('should return ESLint config for TypeScript project', async () => {
      const { getESLintConfig } = await import('../dist/lints/eslint/getESLintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableESLint: true, eslintType: 'typescript/index' };

      const eslintConfig = await getESLintConfig({ cwd: TEST_DIR }, packages, config);

      assert.ok(typeof eslintConfig === 'object', 'Should return an object');
      assert.ok(Array.isArray(eslintConfig.overrideConfig) || typeof eslintConfig.overrideConfig === 'object', 'Should have overrideConfig');
    });
  });

  describe('Stylelint Config', () => {
    it('should export getStylelintConfig function', async () => {
      const { getStylelintConfig } = await import('../dist/lints/stylelint/getStylelintConfig.js');
      assert.ok(typeof getStylelintConfig === 'function', 'Should export getStylelintConfig as function');
    });

    it('should return Stylelint config', async () => {
      const { getStylelintConfig } = await import('../dist/lints/stylelint/getStylelintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableStylelint: true };

      const stylelintConfig = getStylelintConfig({ cwd: TEST_DIR }, packages, config);

      assert.ok(typeof stylelintConfig === 'object', 'Should return an object');
      assert.ok(typeof stylelintConfig.fix === 'boolean', 'Should have fix option');
      assert.ok(typeof stylelintConfig.allowEmptyInput === 'boolean', 'Should have allowEmptyInput option');
    });

    it('should return empty config when stylelint is disabled', async () => {
      const { getStylelintConfig } = await import('../dist/lints/stylelint/getStylelintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableStylelint: false };

      const stylelintConfig = getStylelintConfig({ cwd: TEST_DIR }, packages, config);

      assert.deepStrictEqual(stylelintConfig, {});
    });
  });

  describe('Markdownlint Config', () => {
    it('should export getMarkdownlintConfig function', async () => {
      const { getMarkdownlintConfig } = await import('../dist/lints/markdownlint/getMarkdownlintConfig.js');
      assert.ok(typeof getMarkdownlintConfig === 'function', 'Should export getMarkdownlintConfig as function');
    });

    it('should return Markdownlint config', async () => {
      const { getMarkdownlintConfig } = await import('../dist/lints/markdownlint/getMarkdownlintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableMarkdownlint: true };

      const markdownlintConfig = getMarkdownlintConfig({ cwd: TEST_DIR }, packages, config);

      assert.ok(typeof markdownlintConfig === 'object', 'Should return an object');
      assert.ok(typeof markdownlintConfig.config === 'object', 'Should have config object');
    });

    it('should return config with fix option', async () => {
      const { getMarkdownlintConfig } = await import('../dist/lints/markdownlint/getMarkdownlintConfig.js');
      const packages = { name: 'test', version: '1.0.0' };
      const config = { enableMarkdownlint: true };

      const markdownlintConfig = getMarkdownlintConfig({ cwd: TEST_DIR, fix: true }, packages, config);

      assert.ok(typeof markdownlintConfig === 'object', 'Should return an object');
      assert.strictEqual(markdownlintConfig.fix, true, 'Should have fix set to true');
      assert.ok(typeof markdownlintConfig.config === 'object', 'Should have config object');
    });
  });

  describe('Scan Action', () => {
    it('should export scan action', async () => {
      const { default: scanAction } = await import('../dist/actions/scan.js');
      assert.ok(typeof scanAction === 'function', 'Should export scan action as function');
    });
  });

  describe('Init Action', () => {
    it('should export init action', async () => {
      const { default: initAction } = await import('../dist/actions/init.js');
      assert.ok(typeof initAction === 'function', 'Should export init action as function');
    });
  });

  describe('Update Version Action', () => {
    it('should export update version action', async () => {
      const { default: updateVersionAction } = await import('../dist/actions/update-version.js');
      assert.ok(typeof updateVersionAction === 'function', 'Should export update version action as function');
    });
  });
});
