
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizaCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function makeHtmlPlugins(configs) {
	const htmlPlugins = [];
	Object.keys(configs).forEach(key => {
		htmlPlugins.push(
			new htmlWebpackPlugin({
				template: 'index.html',
				filename: `${key}.html`,
				chunks: [key]
			})
		)
	});
	return htmlPlugins;
}
const entry = {
	core: './webpack_core/index.js',
	es: './es6/index.js',
	advance : './webpack_advance/index.js',
	main : './webpack_config/dev_server.js',
	type_script : './webpack_config/type_script.ts',
	loader:'./webpack_loader_and_plugin/index.js'
};

const newHtml = makeHtmlPlugins(entry);

module.exports = {
	mode: 'production',
	entry: entry,
	// devtool: 'cheap-module-eval-source-map',
	devtool: 'source-map',
	resolve:{
		extensions:['.js','.json','.tsx','.ts','.vue'],
	},
	resolveLoader: { //关联loader
		modules: ['node_modules', './loaders']
	},
	devServer: {
		// 以dist为基础启动一个服务器，服务器运行在4200端口上，每次启动时自动打开浏览器
		contentBase: 'dist',
		index: 'index.html',
		openPage: 'type_script.html',
		open: true,
		port: 8080,
		hot: true, // 启用模块热更新
		hotOnly: true ,// 模块热更新启动失败时，重新刷新浏览器
		// 最新版的webpack启动模块热更新下面不用加new webpack.HotModuleReplacementPlugin()
		// 如果添加了会报错
		proxy: {
			'/react/api': {
				target: 'http://www.dell-lee.com',
				pathRewrite: {
					'header.json': 'demo.json'
				},
				changeOrigin: true,//跨域设置
			}
		}
		
	},
	optimization: {
		usedExports: true,
		splitChunks: {
			chunks: 'all',
			automaticNameDelimiter: '_',
		},
		minimizer: [
			new optimizaCssAssetsWebpackPlugin()
		]
	},
	module : {
		rules : [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader :'replace_loader',
						options: {
							word: 'very bad'
						}
					}
				]
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'images/',
						limit: 10240
					}
				}
			},
			{
				test: /\.css$/,
				// use: ['style-loader', 'css-loader', 'postcss-loader'],
				use: [
					{
						loader: miniCssExtractPlugin.loader,
						options: {
							hmr: true,
							reloadAll: true
						}
					},
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test:/\.(scss|sass)$/,
				use : [
					'style-loader' ,
					{
						loader : 'css-loader',
						options: {
							modules: true
						}
					} ,
					'sass-loader' ,
					'postcss-loader'
				]
			}
		]
		
	},
	plugins: [
		new CleanWebpackPlugin(),
		new miniCssExtractPlugin({
			filename: '[name].css'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
		}),
		// new BundleAnalyzerPlugin(),
		// new WorkboxWebpackPlugin.GenerateSW({
		// 	clientsClaim: true,
		// 	skipWaiting: true
		// })
	].concat(newHtml),
	output : {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};