// TODO enable uglification - https://stackoverflow.com/questions/39329867/uglifyjs-throws-error-unexpected-token-operator
const commonConfig = require('./webpack.config.common');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  plugins: [
    new WebpackMd5Hash()
  ]

});