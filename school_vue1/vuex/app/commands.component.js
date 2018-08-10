export default{
	template: require('html-loader!../templates/commands.component.html'),
	//se vc usar data: {} você não pode utilizar os dados do seu component em outros	
	data: function(){
		return{
			operators: ['+', '-', '*', '/'],
			commands: ['=', 'C']
		}
	}
}