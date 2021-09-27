const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const generalConfig = {
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['dist'],
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
    new NodePolyfillPlugin(),
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        // loader: 'awesome-typescript-loader',
        exclude: /node_modules|\.d\.ts$/,
      },
      {
        test: /\.d\.ts$/,
        loader: 'ignore-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      path: require.resolve('path-browserify'),
      'crypto-browserify': require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
    },
  },
}

// build for sdk-client-v2
const sdkClientConfig = Object.assign({}, generalConfig, {
  entry: path.resolve(__dirname, 'packages', 'sdk-client', 'src', 'index.ts'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'packages', 'sdk-client', 'dist'),
    filename: 'commercetools-sdk-client-v2.umd.js',
    library: {
      name: '@commercetools/sdk-client-v2',
      type: 'umd',
    },
  },
})

// build for platform-sdk
const platformSdkConfig = Object.assign({}, generalConfig, {
  entry: path.resolve(__dirname, 'packages', 'platform-sdk', 'src', 'index.ts'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'packages', 'platform-sdk', 'dist'),
    filename: 'commercetools-platform-sdk.umd.js',
    library: {
      name: '@commercetools/platform-sdk',
      type: 'umd',
    },
  },
})

module.exports = () => {
  return [sdkClientConfig, platformSdkConfig]
}
