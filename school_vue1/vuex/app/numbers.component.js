export default{
	template: require('html-loader!../templates/numbers.component.html'),
	//se vc usar data: {} você não pode utilizar os dados do seu component em outros	
	data: function(){
		return{
			numbers: [1,2,3,4,5,6,7,8,9,0]
		}
	}
}