var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: './index.js',
        vendor: ['jquery', 'bootstrap'],
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: './index.ejs'
        }),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [['es2015',{modules: false}]]
                }
            },
            {
                test: /\.less$/,
                loaders: ['style-loader','css-loader','less-loader'] //loaders tem que ser olhado da direta para a esquerda
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080
    },
    watchOptions: {
        aggregateTimeout: 300, //delay para utilizar o webserver e dá um tempo para o webpack compilar
        ignored: /node_modules/
    },
    performance: {
        hints: false
    },
    devtool: 'source-map'
};

/*webpack hash - id da compilacao do pacote
 chunkhash - id da compilacao do pedaço | do modulo*/

/*grafo - grafico */