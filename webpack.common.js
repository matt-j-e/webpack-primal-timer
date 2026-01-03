const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    timer: './src/timer-render.js',
    kbIndex: './kettlebell-timer/src/index.js',
    kbTimer: './kettlebell-timer/src/timer-render.js'
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

