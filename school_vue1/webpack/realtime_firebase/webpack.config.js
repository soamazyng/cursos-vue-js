var webpack = require('webpack') //importando o webpack

//configura todo o webpack
module.exports = {
	//config o arquivo de inicio
	entry : ['./app/app'],
	output : {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	//quando você precisa alterar o processo de compilação dos arquivos você pode utilizar um plugin,
	//ele vai interferir nas etapas que o webpack vai fazer para compilar nossos arquivos
	//exemplo utilizar isso para o jquery
	plugins : [
		new webpack.ProvidePlugin({
			//variaveis do contexto global
			$: 'jquery',
			jQuery : 'jquery'
		})
	],
	module :{
		loaders : [
		{
			test : /\.js$/, //eu quero que ele encontre uma correspondência js no nosso projeto
			exclude: /node_modules/,
			loader : 'babel-loader', //babel apenas não funciona
			query: {
				presets: ['es2015']
			}
		}]
	}
};