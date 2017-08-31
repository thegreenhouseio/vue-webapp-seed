const commonConfig = require('./webpack.config.common');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');

// assumes SassLinter is first plugin
commonConfig.plugins[0].failOnError = true;

module.exports = webpackMerge(commonConfig, {

  plugins: [
    new WebpackMd5Hash(),

    new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true, keep_fnames: true }, // eslint-disable-line camelcase
      compress: { screw_ie8: true }, // eslint-disable-line camelcase
      comments: false,
      sourceMap: true
    })
  ]

});