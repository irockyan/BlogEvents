const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack');
module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    })
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: "cheap-eval-source-map",
  devServer: {
    https: true
  }
}
