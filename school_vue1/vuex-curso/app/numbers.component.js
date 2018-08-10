export default{
	template: require('html-loader!../templates/numbers.component.html'),
	//se vc usar data: {} você não pode utilizar os dados do seu component em outros	
	data: function(){
		return{
			numbers: [1,2,3,4,5,6,7,8,9,0]
		}
	},
	methods: {
		// addNumber(number){
		// 	//this.$dispatch('ADD_ELEMENT', number) //dispara o evento filho para pai			
		// 	//this.$emit(evento, dado); dispara o evento pai para filho
		// }
	},
	vuex:{
		actions:{
			addNumber(store, number){
				//vamos disparar um evento que vai chamar o nosso mutation
				store.dispatch('ADD_ELEMENT', number);
			}		
		}				
	}
}