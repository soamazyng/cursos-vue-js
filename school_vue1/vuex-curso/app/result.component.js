export default{
	props: ['inline'], //recebe um atributo do componente pai -- devemos colocar no componente pai :inline="VALOR"
	template: require('html-loader!../templates/result.component.html'),
	vuex:{
		getters:{ //utiliza o dado do State
			inline : function(state){
				return state.inline
			}
		},
		actions:{
			// changeMessage(store){
			// 	//vamos disparar um evento que vai chamar o nosso mutation
			// 	store.dispatch('CHANGE', "Alterou");
			// }		
		}		
	}
}