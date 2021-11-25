// const Dotenv = require('dotenv-webpack')
// const HtmlWebPackPlugin = require('html-webpack-plugin')

// module.exports = {
//   entry: './index.js',
//   devServer: {
//     historyApiFallback: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//           },
//         ],
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   resolve: {
//     fallback: {
//       path: require.resolve('path-browserify'),
//       'crypto-browserify': require.resolve('crypto-browserify'),
//       buffer: require.resolve('buffer/'),
//     }
//   },
//   plugins: [
//     new Dotenv({
//       path: './.env'
//     }),
//     new HtmlWebPackPlugin({
//       template: './src/index.html',
//       filename: './index.html',
//     }),
//   ],
// }

const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const generalConfig = {
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  entry: './index.js',
  devServer: {
    historyApiFallback: true,
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
    new Dotenv({
      path: './.env',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      'crypto-browserify': require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
    },
  },
}

// // build for sdk-client-v2
// const sdkClientConfig = Object.assign({}, generalConfig, {
//   entry: path.resolve(__dirname, 'packages', 'sdk-client', 'src', 'index.ts'),
//   target: 'web',
//   output: {
//     path: path.resolve(__dirname, 'packages', 'sdk-client', 'dist'),
//     filename: 'commercetools-sdk-client-v2.umd.js',
//     library: {
//       name: '@commercetools/sdk-client-v2',
//       type: 'umd',
//     },
//   },
// })

// // build for platform-sdk
// const platformSdkConfig = Object.assign({}, generalConfig, {
//   entry: path.resolve(__dirname, 'packages', 'platform-sdk', 'src', 'index.ts'),
//   target: 'web',
//   output: {
//     path: path.resolve(__dirname, 'packages', 'platform-sdk', 'dist'),
//     filename: 'commercetools-platform-sdk.umd.js',
//     library: {
//       name: '@commercetools/platform-sdk',
//       type: 'umd',
//     },
//   },
// })

module.exports = () => {
  return [generalConfig]
}
