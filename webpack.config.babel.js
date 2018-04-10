const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist' // If not included, webpack dev server, doesn't update index changes.
  },
  module: {
    rules: [
      // {
      //   test: /\.gz$/,
      //   enforce: 'pre',
      //   use: 'gzip-loader'
      // },
      {
        test: /\.css$/,
        use: [  'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader' 
            ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"] 
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './src'),
    hot: true,
    compress : true
  },
  devtool: 'inline-source-map',
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Development'
      })
  ]
};