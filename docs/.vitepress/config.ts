import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'lint-spec',
  description: '前端编码规范工程化',
  base: '/',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/img/light-logo.png' }],
    ['meta', { name: 'keywords', content: '前端编码规范工程化' }],
  ],
  themeConfig: {
    logo: '/img/light-logo.png',
    editLink: {
      pattern:
        'https://github.com/encode-studio-fe/fe-spec/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html' },
          { text: 'CSS 编码规范', link: '/coding/css' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript' },
          { text: 'TypeScript 编码规范', link: '/coding/typescript' },
          { text: 'Node 编码规范', link: '/coding/node' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git' },
          { text: '文档规范', link: '/engineering/doc' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog' },
        ],
      },
      {
        text: 'NPM 包',
        items: [
          { text: '@lint-spec/eslint-config', link: '/npm/eslint-config' },
          {
            text: '@lint-spec/stylelint-config',
            link: '/npm/stylelint-config',
          },
          {
            text: '@lint-spec/commitlint-config',
            link: '/npm/commitlint-config',
          },
          {
            text: '@lint-spec/markdownlint-config',
            link: '/npm/markdownlint-config',
          },
          { text: '@lint-spec/eslint-plugin', link: '/npm/eslint-plugin' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: '@lint-spec/cli', link: '/cli/lint-spec' }],
      },
    ],
    sidebar: {
      '/coding/': [
        {
          text: '编码规范',
          items: [
            { text: 'HTML 编码规范', link: '/coding/html' },
            { text: 'CSS 编码规范', link: '/coding/css' },
            { text: 'JavaScript 编码规范', link: '/coding/javascript' },
            { text: 'TypeScript 编码规范', link: '/coding/typescript' },
            { text: 'Node 编码规范', link: '/coding/node' },
          ],
        },
      ],
      '/engineering/': [
        {
          text: '工程规范',
          items: [
            { text: 'Git 规范', link: '/engineering/git' },
            { text: '文档规范', link: '/engineering/doc' },
            { text: 'CHANGELOG 规范', link: '/engineering/changelog' },
          ],
        },
      ],
      '/npm/': [
        {
          text: 'NPM 包',
          items: [
            { text: '@lint-spec/eslint-config', link: '/npm/eslint-config' },
            {
              text: '@lint-spec/stylelint-config',
              link: '/npm/stylelint-config',
            },
            {
              text: '@lint-spec/commitlint-config',
              link: '/npm/commitlint-config',
            },
            {
              text: '@lint-spec/markdownlint-config',
              link: '/npm/markdownlint-config',
            },
            { text: '@lint-spec/eslint-plugin', link: '/npm/eslint-plugin' },
          ],
        },
      ],
      '/cli/': [
        {
          text: '脚手架',
          items: [{ text: '@lint-spec/cli', link: '/cli/lint-spec' }],
        },
      ],
    },
    footer: {
      message: '2026',
      copyright:
        'encode studio | <a href="https://github.com/encode-studio-fe/fe-spec" target="_blank">github</a>',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/encode-studio-fe/fe-spec' },
    ],
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: true,
  },
});
