export default{
	props: ['inline'], //recebe um atributo do componente pai -- devemos colocar no componente pai :inline="VALOR"
	template: require('html-loader!../templates/result.component.html')
}