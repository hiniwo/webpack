
module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: 'dist',
		open: true,
		port: 3000,
		hot: true,
		hotOnly: true
	},
	plugins: []
};