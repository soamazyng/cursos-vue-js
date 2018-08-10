##Instalar o babel
$ npm install babel-core babel-preset-es2015 babel-loader --save-dev 

##instalar o webpack
$ npm install webpack --save-dev
$ npm install --save-dev webpack@3.10.0

##instalando os loaders para usar o bootstrap
$ npm install url-loader file-loader style-loader html-loader css-loader --save-dev

##rodando o webpack
$ webpack-dev-server --progress --hot --inline
$ npm install --save-dev webpack-dev-server@2.9.7

##e para rodar o webservice do webpack depois disso *obs: provavelmente terá que instalar o webpack-cli*
$ webpack-dev-server --progress --inline --hot

##eventos
this.$dispatch('ADD_ELEMENT', number) //dispara o evento filho para pai			 <br >
this.$emit(evento, dado); dispara o evento pai para filho

#explicação REDUX VUEX
Single source of truth <-- única forma da verdade. <br>
Devemos utilizar apenas um armazem de informações.<br>

##Flux
Conceito de aplicação --> https://facebook.github.io/flux/<br>
Explicação <br>
Action -->  a gente começa por uma ação que vai acontecer<br>
Dispatcher --> que dispacha um evento<br>
Store --> O evento vai ter uma alteração no meu armazem da aplicação, propagador de mudanças<br>
View --> Uma vez alterado o meu armazem de informação as nossas views são alteradas<br>
A View não altera o Store, ela sempre precisa chamar a Action.<br>

