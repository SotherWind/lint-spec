---
title: eslint-config
---

# @lint-spec/eslint-config

::: tip
JavaScript TypeScript Node Vue React 规范
:::

提供了多套配置文件以支持 `JavaScript`、`TypeScript`、`React`、`Vue`、`Node.js` 等多种项目类型。

## JavaScript 项目 - @lint-spec/eslint-config

针对未使用 `React` 或 `Vue` 的原生 `JavaScript` 项目，使用 `ESLint` 原生规则和 [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) 规则，使用[globals](https://www.npmjs.com/package/globals)来提供预定义的全局变量集， 使用 [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) 作为 `parser`，是本包的默认配置。

### 依赖

- [eslint](https://www.npmjs.com/package/eslint)@^9.39.2
- [globals](https://www.npmjs.com/package/globals)@^17.3.0
- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.29.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.28.6
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)@^5.7.1
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.32.0

### 安装

```shell
npm install --save-dev @lint-spec/eslint-config eslint globals @babel/core @babel/eslint-parser @stylistic/eslint-plugin eslint-plugin-import
```

### 使用

在 `eslint.config.js` 中集成本包:

```js
import { defineConfig } from 'eslint/config';
import jsConfig from '@lint-spec/eslint-config';

export default defineConfig(jsConfig);
```

## JavaScript + React 项目 - @lint-spec/eslint-config/react

针对 `JavaScript React` 项目，继承了JavaScript 项目的配置，并启用了 [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 和 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 的规则。

### 依赖

- [eslint](https://www.npmjs.com/package/eslint)@^9.39.2
- [globals](https://www.npmjs.com/package/globals)@^17.3.0
- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.29.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.28.6
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)@^5.7.1
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.32.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.37.5
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^7.0.1

### 安装

```shell
npm install --save-dev @lint-spec/eslint-config eslint globals @babel/core @babel/eslint-parser @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

### 使用

在 `eslint.config.js` 中集成本包:

```js
import { defineConfig } from 'eslint/config';
import reactConfig from '@lint-spec/eslint-config/react';

export default defineConfig(reactConfig);
```

## JavaScript + Vue 项目 - @lint-spec/eslint-config/vue

针对 `JavaScript Vue` 的项目，继承了JavaScript 项目的配置，并启用了 [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) 插件的规则，使用 [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser) 作为 parser。

### 依赖

- [eslint](https://www.npmjs.com/package/eslint)@^9.39.2
- [globals](https://www.npmjs.com/package/globals)@^17.3.0
- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.29.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.28.6
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)@^5.7.1
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.32.0
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^10.7.0
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^10.2.0

### 安装

```shell
npm install --save-dev @lint-spec/eslint-config eslint globals @babel/core @babel/eslint-parser @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-vue vue-eslint-parser
```

### 使用

在 `eslint.config.js` 中集成本包:

```js
import { defineConfig } from 'eslint/config';
import vueConfig from '@lint-spec/eslint-config/vue';

export default defineConfig(vueConfig);
```

## JavaScript (Node.js) 项目 - @lint-spec/eslint-config/node

针对 Node.js 项目，继承了JavaScript 项目的配置，并启用了 [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n) 插件的规则。

### 依赖

- [eslint](https://www.npmjs.com/package/eslint)@^9.39.2
- [globals](https://www.npmjs.com/package/globals)@^17.3.0
- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.29.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.28.6
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)@^5.7.1
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.32.0
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)@^17.23.2

### 安装

```shell
npm install --save-dev @lint-spec/eslint-config eslint globals @babel/core @babel/eslint-parser @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-n
```

### 使用

在 `eslint.config.js` 中集成本包:

```js
import { defineConfig } from 'eslint/config';
import nodeConfig from '@lint-spec/eslint-config/node';

export default defineConfig(nodeConfig);
```

## TypeScript 项目 - @lint-spec/eslint-config/typescript/index

针对未使用 `React` 或 `Vue` 的 `TypeScript` 项目，继承了JavaScript 项目的配置，并启用了 [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://typescript-eslint.io/packages/parser) 作为 parser。

### 依赖

- [eslint](https://www.npmjs.com/package/eslint)@^9.39.2
- [globals](https://www.npmjs.com/package/globals)@^17.3.0
- [typescript](https://www.npmjs.com/package/typescript)@^5.9.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)@^8.54.0
- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.29.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.28.6
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)@^5.7.1
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.32.0
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@^4.4.4

### 安装

```shell
npm install --save-dev @lint-spec/eslint-config eslint globals typescript @babel/core @babel/eslint-parser @stylistic/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript typescript-eslint
```

### 使用

在 `eslint.config.js` 中集成本包:

```js
import { defineConfig } from 'eslint/config';
import tsConfig from '@lint-spec/eslint-config/typescript/index';

export default defineConfig(tsConfig);
```

## TypeScript + React 项目 - @lint-spec/eslint-config/typescript/react

针对 `TypeScript React` 项目，继承了 `JavaScript React` + `TypeScript` 项目的配置。

### 依赖

- [eslint](https://www.npmjs.com/package/eslint)@^9.39.2
- [globals](https://www.npmjs.com/package/globals)@^17.3.0
- [typescript](https://www.npmjs.com/package/typescript)@^5.9.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)@^8.54.0
- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.29.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.28.6
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)@^5.7.1
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.32.0
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@^4.4.4
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.37.5
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^7.0.1

### 安装

```shell
npm install --save-dev @lint-spec/eslint-config eslint globals typescript @babel/core @babel/eslint-parser @stylistic/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks typescript-eslint
```

### 使用

在 `eslint.config.js` 中集成本包:

```js
import { defineConfig } from 'eslint/config';
import tsReactConfig from '@lint-spec/eslint-config/typescript/react';

export default defineConfig(tsReactConfig);
```

## TypeScript + Vue 项目 - @lint-spec/eslint-config/typescript/vue

针对 `TypeScript Vue` 项目，继承了 `JavaScript Vue` + `TypeScript` 项目的配置。

### 依赖

- [eslint](https://www.npmjs.com/package/eslint)@^9.39.2
- [globals](https://www.npmjs.com/package/globals)@^17.3.0
- [typescript](https://www.npmjs.com/package/typescript)@^5.9.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)@^8.54.0
- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.29.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.28.6
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)@^5.7.1
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.32.0
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@^4.4.4
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^10.7.0
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^10.2.0

### 安装

```shell
npm install --save-dev @lint-spec/eslint-config eslint globals typescript @babel/core @babel/eslint-parser @stylistic/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript typescript-eslint eslint-plugin-vue vue-eslint-parser
```

### 使用

在 `eslint.config.js` 中集成本包:

```js
import { defineConfig } from 'eslint/config';
import tsVueConfig from '@lint-spec/eslint-config/typescript/vue';

export default defineConfig(tsVueConfig);
```

## TypeScript (Node.js) 项目 - @lint-spec/eslint-config/typescript/node

针对未使用 `React` 和 `Vue` 的 `TypeScript(Node)` 项目。继承了 `JavaScript Node` + `TypeScript` 项目的配置。

### 依赖

- [eslint](https://www.npmjs.com/package/eslint)@^9.39.2
- [globals](https://www.npmjs.com/package/globals)@^17.3.0
- [typescript](https://www.npmjs.com/package/typescript)@^5.9.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)@^8.54.0
- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.29.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.28.6
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)@^5.7.1
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.32.0
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@^4.4.4
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)@^17.23.2

### 安装

```shell
npm install --save-dev @lint-spec/eslint-config eslint globals typescript @babel/core @babel/eslint-parser @stylistic/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-n typescript-eslint
```

### 使用

在 `eslint.config.js` 中集成本包:

```js
import { defineConfig } from 'eslint/config';
import tsNodeConfig from '@lint-spec/eslint-config/typescript/node';

export default defineConfig(tsNodeConfig);
```

## 配合 Prettier 使用

如果你的项目使用 [Prettier](https://prettier.io/) 进行代码格式化，本包的一些规则可能会跟 Prettier 格式化结果有冲突。为了避免冲突，你需要手动安装 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 和 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)：

### 安装

```sh
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

## 将风格问题降级

为了保证一致的编码风格，本包中大量风格相关的规则被设为了 `error` 级别。如果你觉得风格问题不足以是 `error` 级别，本包还提供了一套名为 `essential` 的配置文件，这套配置将所有风格问题降级为 `warn` 级别。

## 了解更多

- 如果你对 ESLint 还不熟悉，可以阅读官网的 [Getting Started](https://eslint.org/docs/user-guide/getting-started) 快速入门。
- 了解如何为 IDE 配置 ESLint，可以参考官网的 [Integrations](http://eslint.org/docs/user-guide/integrations)。
- 了解如何在继承本包的基础上对项目 ESLint 进行个性化配置，可参考官网的 [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)。
