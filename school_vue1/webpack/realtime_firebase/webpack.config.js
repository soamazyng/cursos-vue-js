//configura todo o webpack
module.exports = {
	//config o arquivo de inicio
	entry : ['./app/app'],
	output : {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: '/build/'
	}
};