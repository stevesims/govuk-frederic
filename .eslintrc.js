const { devDependencies } = require('./package.json');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'sonar', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  env: {
    es6: true,
  },
  rules: {
    "arrow-parens": [2, "as-needed"],

    "react/jsx-closing-tag-location": 0, /* We could leave as-is */
    "react/no-array-index-key": 0, /* Up for debate */
    'react/require-default-props': 0, /* Suggest enabled but needs some work! */

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
