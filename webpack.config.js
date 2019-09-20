const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mjraybk07 app'
    }),
    new webpack.ProgressPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015','stage-0']
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  }
};