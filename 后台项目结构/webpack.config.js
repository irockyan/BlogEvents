const path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })

      }, {
        test: /\.js$/,
        use: 'babel-loader?sourceMap',
        exclude: path.resolve(__dirname, './node_modules/')
      },
      {
        test: /.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: "cheap-eval-source-map",
  devServer: {
    https: true
  }
}
