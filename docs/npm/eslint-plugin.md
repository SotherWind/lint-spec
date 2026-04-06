---
title: eslint-plugin
---

# @lint-spec/eslint-plugin

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
npm install --save-dev @lint-spec/eslint-plugin eslint
```

## 使用

### 引入插件

```js
// eslint.config.js

import lintSpecPlugin from '@lint-spec/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  plugin: {
    '@lint-spec': lintSpecPlugin,
  },
  rules: {
    '@lint-spec/no-secret-info': 'error',
  },
});
```

### 使用 presets

```js
// eslint.config.js

import lintSpecPlugin from '@lint-spec/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig(lintSpecPlugin.configs.recommended);
```

## 支持的规则

### `no-broad-semantic-versioning`

不要在 `package.json` 中使用太过宽泛的版本指定方式，包括 `*`、`x` 和 `> x` 。

### `no-http-url`

推荐将 HTTP 链接换为 HTTPS 链接。

### `no-js-in-ts-project`

不推荐在项目中同时存在 `JS` 和 `TS` 文件。

### `no-secret-info`

不在代码中直接通过纯文本值设置 `password` `token` 和 `secret` 信息。

### `no-timer-magic-numbers`

不在定时器中使用魔法数字。
