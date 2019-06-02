
const path = require('path');

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
						name : '[hame]-[hash].[ext]',
						outputPath : 'images/'
					}
				}
				
				
			}
			
		]
		
	},
	output : {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
};