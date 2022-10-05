module.exports = {
  // plugins: [
  //   'babel-plugin-styled-components',
  //   '@babel/plugin-proposal-optional-chaining',
  //   '@babel/plugin-proposal-nullish-coalescing-operator',
  // ],
  presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-env'],
};
