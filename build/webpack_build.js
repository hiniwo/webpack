
const webpack = require('webpack');

const merge = require('webpack-merge');

const commonConfig = require('./webpack_common');

const proConfig = require('./webpack_production');

module.exports = merge(commonConfig, proConfig);