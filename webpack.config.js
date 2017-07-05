const path = require('path');

module.exports = {
	entry: {
		main: './index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve('build'),
	},
}