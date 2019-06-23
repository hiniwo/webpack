
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		// core: './webpack_core/index.js',
		// es: './es6/index.js'
		mian : './webpack_advance/index.js',
	},
	// devtool: 'cheap-module-eval-source-map',
	devtool: 'source-map',
	devServer: {
		// 以dist为基础启动一个服务器，服务器运行在4200端口上，每次启动时自动打开浏览器
		contentBase: 'dist',
		open: true,
		port: 8080,
		hot: true, // 启用模块热更新
		hotOnly: true // 模块热更新启动失败时，重新刷新浏览器
		// 最新版的webpack启动模块热更新下面不用加new webpack.HotModuleReplacementPlugin()
		// 如果添加了会报错
	},
	optimization: {
		usedExports: true,
		splitChunks: {
			chunks: 'all',
			automaticNameDelimiter: '_',
		}
	},
	module : {
		rules : [
			// {
			// 	test : /\.(png|jpg|gif)$/,
			// 	use :{
			// 		loader : 'file-loader',
			// 		options : {
			// 			name : '[hame]_[hash].[ext]',
			// 			outputPath : 'images/'
			// 		}
			// 	}
			// },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
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
				use: ['style-loader', 'css-loader', 'postcss-loader']
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
		new HtmlWebpackPlugin({
			template : 'index.html'
		}),
		new CleanWebpackPlugin()
	],
	output : {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};