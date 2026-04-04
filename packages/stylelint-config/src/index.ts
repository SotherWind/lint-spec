export default {
  defaultSeverity: 'warning',
  plugins: ['@stylistic/stylelint-plugin'],
  extends: ['stylelint-config-standard-scss'],
  rules: {
    /**
     * stylelint rules
     * @link https://stylelint.io/user-guide/rules
     */
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'block-no-empty': null,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'no-descending-specificity': null, // @reason 实际有很多这样用的，且多数人熟悉 css 优先级
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'no-invalid-double-slash-comments': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],
    'selector-pseudo-element-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],

    'color-hex-length': 'short',
    'comment-whitespace-inside': 'always',
    'declaration-block-single-line-max-declarations': 1,
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'selector-max-id': 0,
    /**
     * stylelint-config-standard-scss rules
     * @link https://github.com/stylelint-scss/stylelint-config-standard-scss
     */
    'scss/double-slash-comment-whitespace-inside': 'always',

    /**
     * @stylistic/stylelint-plugin rules
     * @link https://github.com/stylelint-stylistic/stylelint-stylistic
     */
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/indentation': 2,
    '@stylistic/block-closing-brace-newline-before': 'always-multi-line',
    '@stylistic/block-closing-brace-space-before': 'always-single-line',
    '@stylistic/block-opening-brace-newline-after': 'always-multi-line',
    '@stylistic/block-opening-brace-space-before': 'always',
    '@stylistic/block-opening-brace-space-after': 'always-single-line',
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/declaration-colon-space-after': 'always',
    '@stylistic/declaration-block-trailing-semicolon': [
      'always',
      {
        severity: 'error',
      },
    ],
    '@stylistic/max-line-length': 100,
    '@stylistic/value-list-comma-space-after': 'always-single-line',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      customSyntax: 'postcss-lit',
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
