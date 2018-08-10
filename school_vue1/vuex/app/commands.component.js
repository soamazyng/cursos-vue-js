export default{
	template: require('html-loader!../templates/commands.component.html'),
	//se vc usar data: {} você não pode utilizar os dados do seu component em outros	
	data: function(){
		return{
			operators: ['+', '-', '*', '/'],
			commands: ['=', 'C']
		}
	},
	methods: {
		addOperator(operator){
			this.$dispatch('ADD_ELEMENT', operator); //dispara o evento filho para pai					
		},
		callCommand(command){			

			switch(command){
				case '=':
					//this.$parent.inline = eval(this.$parent.inline) + ""; //eval devolve o resultado passo + "" para transformar tudo em string					this.$dispatch('ADD_ELEMENT', operator) //dispara o evento filho para pai					
					this.$dispatch('RESULT');
					break;
				case 'C':
					this.$dispatch('CLEAR');
					break;
			}
		},		
	}	
}