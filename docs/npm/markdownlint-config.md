---
title: markdownlint-config
---

# @lint-spec/markdownlint-config

::: tip
印客学院 文档 规范
:::

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install --save-dev @lint-spec/markdownlint-config markdownlint
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "@lint-spec/markdownlint-config"
}
```
