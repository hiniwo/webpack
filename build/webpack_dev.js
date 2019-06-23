const webpack = require('webpack');

const merge = require('webpack-merge');

const commonConfig = require('./webpack_common');

const devConfig = require('./webpack_development');

module.exports = merge(commonConfig, devConfig);