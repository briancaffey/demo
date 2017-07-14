//require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,
  entry: './assets/js/index',
  output: {
    path: path.resolve('./static/bundles/'),
    publicPath: '/static/bundles/',
    filename: '[name]-[hash].js',
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    moduleExtensions: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
}
