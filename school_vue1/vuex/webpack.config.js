module.exports = {
	entry: [
		'style-loader!css-loader!./node_modules/bootstrap/dist/css/bootstrap.min.css' // logo quando o webpack compilar ele já vai add isso na entrada.
		'./app/main'
	],
	output : {
		path: __dirname + '/build',
		filename : 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
		{
			test : /\.js$/,
			loader: 'babel-loader',
			exclude: /(node_modules)/,
			query: {
				presets: ['es2015']
			}
		},
		{
			test : /\.(woff|woff2|ttf|svg|eot)/,
			loader: 'url-loader?limit=100000' //se o arquivo for menor que 10K
		}
		]
	}
}