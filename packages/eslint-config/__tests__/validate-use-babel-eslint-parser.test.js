import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Validate Use Babel Eslint Parser For React', () => {
  let eslint;
  const configPath = './dist/react.js';
  const filePath = join(__dirname, './fixtures/use-babel-eslint-parser.jsx');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should lint React files with babel eslint parser without fatal errors', async () => {
    const results = await eslint.lintFiles(filePath);
    const { messages, errorCount, fatalErrorCount, warningCount } = results[0];

    assert.equal(fatalErrorCount, 0, 'Should have no fatal errors');
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 27, 'Should have exactly 27 errors');
    assert.strictEqual(warningCount, 7, 'Should have exactly 7 warnings');

    // 验证 react 插件工作是否正常
    const reactErrors = messages.filter(
      (m) => m.ruleId && m.ruleId.startsWith('react/'),
    );
    assert.ok(
      reactErrors.length > 0,
      'Should detect react-specific violations',
    );
  });
});

describe('Validate Use Babel Eslint Parser For Vue', () => {
  let eslint;
  const configPath = './dist/vue.js';
  const filePath = join(__dirname, './fixtures/vue.vue');

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: configPath,
      ignore: false,
    });
  });

  it('should lint Vue files with babel eslint parser without fatal errors', async () => {
    const results = await eslint.lintFiles(filePath);
    const { errorCount, fatalErrorCount, warningCount } = results[0];

    assert.equal(fatalErrorCount, 0, 'Should have no fatal errors');
    // 验证具体的错误和警告数量
    assert.strictEqual(errorCount, 4, 'Should have exactly 4 errors');
    assert.strictEqual(warningCount, 0, 'Should have exactly 0 warnings');
  });
});
