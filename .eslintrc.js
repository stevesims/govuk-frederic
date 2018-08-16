const { devDependencies } = require('./package.json');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'sonar', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  env: {
    es6: true,
  },
  rules: {
    "react/forbid-prop-types": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-closing-tag-location": 0,
    "react/jsx-curly-spacing": 0,
    "react/jsx-no-comment-textnodes": 0,
    "react/jsx-tag-spacing": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-array-index-key": 0,
    'react/require-default-props': 0,
    "react/sort-comp": 0,

    /* Up for discussion */
    "arrow-body-style": 0,
    "arrow-parens": 0, /* Could relax "requireForBlockBody": true */
    "no-confusing-arrow": 0,

    /* Copied from govuk/react */
    'react/jsx-filename-extension': 0,
    'jsx-a11y/label-has-for': 0,
    'filenames/match-exported': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      files: [
        'stories.js',
        'test.js',
        'fixtures.js',
        '**.test.js',
        'example.js',
        'scripts/**',
        'src/stories/**',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
      settings: {
        'import/core-modules': Object.keys(devDependencies),
      },
    },
    {
      files: ['test.js', '**.test.js'],
      env: {
        jest: true,
        enzyme: true,
        browser: true,
      },
    },
  ],
};
