//verifica se não já existe o jQuery no contexto global
if(!window.jQuery){
	window.$ = window.jQuery = require('jQuery');
}