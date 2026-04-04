import eslintPlugin from '../plugin';

export default [
  {
    plugins: {
      '@lint-spec': eslintPlugin,
    },
    rules: {
      '@lint-spec/no-http-url': 'warn',
      '@lint-spec/no-js-in-ts-project': 'warn',
      '@lint-spec/no-timer-magic-numbers': 'warn',
      '@lint-spec/no-broad-semantic-versioning': 'error',
      '@lint-spec/no-secret-info': 'error',
    },
  },
];
