const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    timer: './src/timer-render.js',
    kbIndex: './kettlebell-timer/src/index.js',
    kbTimer: './kettlebell-timer/src/timer-render.js',
    coreIndex: './core-timer/src/index.js',
    coreTimer: './core-timer/src/timer-render.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './timer.html',
      inject: true,
      chunks: ['timer'],
      filename: 'timer.html'
    }),
    new HtmlWebpackPlugin({
      template: './kettlebell-timer/index.html',
      inject: true,
      chunks: ['kbIndex'],
      filename: 'kettlebell-timer/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './kettlebell-timer/timer.html',
      inject: true,
      chunks: ['kbTimer'],
      filename: 'kettlebell-timer/timer.html'
    }),
    new HtmlWebpackPlugin({
      template: './core-timer/index.html',
      inject: true,
      chunks: ['coreIndex'],
      filename: 'core-timer/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './core-timer/timer.html',
      inject: true,
      chunks: ['coreTimer'],
      filename: 'core-timer/timer.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

