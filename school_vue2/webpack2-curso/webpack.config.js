const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		app: './index.js',
		vendor:['jquery', 'bootstrap']
	},
	plugins: [
		new CleanWebpackPlugin(['dist'])
    ],
	output: {
		filename : '[name].[chunkhash].bundle.js',
		path: path.resolve(__dirname, 'dist')		
	}
}
