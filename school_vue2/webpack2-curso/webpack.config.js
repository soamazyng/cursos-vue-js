var webpack = require('webpack'); // se você está usando plugins nativos de webpack
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineManifestWebpack = require('inline-manifest-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		app: './index.js',
		vendor:['jquery', 'bootstrap']
	},
	plugins: [
		//este plugin remove as dependencias dos códigos js e insere todos em vendor.
		//ex: index.js depende do jquery porém o app com a index.js não vai ter o jquery repetindo		
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest']//'manifest' guarda os bundles que não tiveram mudança
		}),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.ejs'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency'			
		})		
    ],
	output: {
		filename : '[name].[chunkhash].bundle.js',
		path: path.resolve(__dirname, 'dist')		
	}
}
