module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@adaptors/*': 'src/core/adaptors/*',
          '@navigators/*': 'src/core/navigators/*',
          '@features/*': 'src/features/*',
          '@shared/*': 'src/features/*',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
