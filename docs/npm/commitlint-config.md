---
title: commitlint-config
---

# @lint-spec/commitlint-config

::: tip
Git Commit Message 规范
:::

支持配套的 [commitlint 配置](https://commitlint.js.org/reference/configuration.html)，用于对 `git commit message` 进行校验。

### 依赖

- [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)@^20.4.1

## 安装

```bash
npm install --save-dev @lint-spec/commitlint-config @commitlint/cli
```

## 使用

在 `commitlint.config.js` 中集成本包:

```js
export default {
  extends: ['lint-spec/commitlint-config'],
};
```

## 设置 git hook

可通过 [husky](https://typicode.github.io/husky/get-started.html) 设置在 `git commit` 时触发 `commitlint`。

首先安装 `husky`：

```bash
npm install --save-dev husky
```

然后执行添加`commit-msg`:

```bash
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

更多信息可参考 [commitlint 文档](https://commitlint.js.org/#/guides-local-setup?id=install-husky)。
