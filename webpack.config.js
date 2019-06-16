
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './loader/index.js'
	},
	module : {
		rules : [
			{
				test : /\.(png|jpg|gif)$/,
				use :{
					loader : 'file-loader',
					options : {
						name : '[hame]_[hash].[ext]',
						outputPath : 'images/'
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test:/\.(scss|sass)$/,
				use : ['style-loader' , 'css-loader' , 'sass-loader']
			}
		]
		
	},
	plugins: [new HtmlWebpackPlugin({
		template : 'index.html'
	}) , new CleanWebpackPlugin()],
	output : {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
};