
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		mian : './webpack_advance/index.js'
	},
	module : {
		rules : [
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
		path: path.resolve(__dirname, '../dist')
	}
};