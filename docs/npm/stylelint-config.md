---
title: stylelint-config
---

# @lint-spec/stylelint-config

::: tip
SCSS LESS CSS 规范
:::

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

### 依赖

- [stylelint](https://www.npmjs.com/package/stylelint)@^17.0.0
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)@^17.0.0
- [@stylistic/stylelint-plugin](https://www.npmjs.com/package/@stylistic/stylelint-plugin)@^5.1.0

## 安装

```bash
npm install --save-dev @lint-spec/stylelint-config stylelint @stylistic/stylelint-plugin stylelint-config-standard-scss
```

## 使用

在 `stylelint.config.js` 中集成本包:

```js
export default {
  extends: '@lint-spec/stylelint-config',
};
```
