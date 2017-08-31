const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const SassLintPlugin = require('sasslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.ts',
    vendor: './src/vendor.ts'
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [{
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.tsx$/,
      enforce: 'pre',
      loader: 'tslint-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader',
      exclude: path.join(__dirname, './src/index.html')
    }, {
      test: /\.scss/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader'
      })
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: 'file-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },

  plugins: [
    new SassLintPlugin({
      configFile: '.sass-lint.yml',
      ignoreFiles: ['/node_modules/bootstrap/scss/**/**'],
      glob: 'src/**/*.scss'
    }),

    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })

  ]
};