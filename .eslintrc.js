module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    // 'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    "react-native/no-inline-styles": "off"
  }
  // rules: {
  //   '@typescipt-eslint/interface-name-prefix': ['always'],
  //   'no-underscore-dangle': 'error'
  // }
};
