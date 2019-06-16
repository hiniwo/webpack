//使用注意事项：一开始没有设置autoprefixer中浏览器的版本，
//autoprefixer不会再最新默认版本中开启，所以要添加参数才能自动添加后缀

module.exports = {
	plugins: [
		require('autoprefixer')({
			"browsers": [
				"> 1%",
				"last 2 versions",
				"not ie <= 8"
			]
		})
	]
};