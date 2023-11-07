module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            "*": ["./src/*"],
            '@screens': './src/screens',
            '@components': './src/components',
            '@assets': './assets',
          }
        }
      ]
    ],
  };
};
