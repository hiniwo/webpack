class copyWebpackPlugin {
	constructor() {
	}
	apply(compiler) {
		compiler.hooks.emit.tapAsync('CopyWebpackPlugin', (compilation, cb) => {
			var copyrightText = 'copyright by why';
			compilation.assets['copyright.txt'] = {
				source: function() {
					return copyrightText
				},
				size: function() {
					return copyrightText.length;
				}
			};
			cb();
		})
	}
}
module.exports = copyWebpackPlugin;