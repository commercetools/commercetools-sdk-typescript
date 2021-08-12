/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: ['@babel/env', '@babel/preset-typescript'],
  plugins: ['@babel/proposal-class-properties'],
}
