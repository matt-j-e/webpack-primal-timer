const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    open: true,
    port: 8080
  }
})
