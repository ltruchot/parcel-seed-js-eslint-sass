module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'vars-on-top': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-loop-func': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
