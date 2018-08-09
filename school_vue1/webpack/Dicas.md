## Dicas

#ligar o webpack para que ele sempre executar <br>

$ webpack app\app.js build\bundle.js --watch --colors --progress <br>

__dirname : pega o caminho completo da pasta <br>

##quando você cria um *webpack.config.js* você não precisa passar o nome do arquivo que você quer executar, nem o bundle
$ webpack --watch --colors --progress <br>

##utilizando o server do webpack
npm install -g webpack-dev-server <br>

##depois de instalado basta rodar <br>
$ wepack-dev-server

##para utilizar o server do webpack com o browsersync + watch de arquivos, devemos instalar o webpack no nosso projeto, como depenência.
$ npm install webpack --save-dev <br>

##e parar rodar o webservice do webpack depois disso *obs: provavelmente terá que instalar o webpack-cli*
$ webpack-dev-server --progress --inline --hot

## quando você está trabalhando com webpack server ele não gera o arquivo .js, para publicar o projeto tem que rodar o webpack de qualquer maneira, para gerar o bundle. $webpack

##error de validateSchema:  <br>
https://stackoverflow.com/questions/40597626/webpack-validateschema-is-not-a-function/49106502#49106502

##instalando o babel
$ npm install babel-loader babel-core babel-preset-es2015 --save-dev <br>
babel-preset-es2015 --> essa parte é para indicar para o que o babel vai compilar


##instalando o loader html do webpack
$ npm install html-loader --save-dev

##loarder que pega o conteúdo css e coloca na página <style> css-loader : entende o conteúdo do css; url-loader: entende as urls de dentro do arquivo css; file-loader: usamos para trabalhar com todos os outros tipos de arquivos
$ npm install style-loader css-loader url-loader file-loader --save-dev
