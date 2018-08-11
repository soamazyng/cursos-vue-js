## Explicações
filename : '[chunkhash].bundle.js' <br>
Fala para o webpack que ele vai criar um hash antes do nome do arquivo toda vez que gerar um novo, e com isso podemos evitar que tenha cache no browser.

##limpar pasta dist antes do build
npm install --save-dev clean-webpack-plugin <br>
https://github.com/johnagan/clean-webpack-plugin <br>
https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder