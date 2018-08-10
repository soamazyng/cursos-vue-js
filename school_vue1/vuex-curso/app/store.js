import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//tem que ser uma constante pois ele não pode ser alterado
//a única coisa que pode mudar são as propriedades
const state = {
	inline: "0",
	result : 0,
	lastElement: ""
};

//é um método que altera o state da nossa aplicação
const mutations = {
	//tudo em maiusculo para indicar que é uma mutacao
	CHANGE(state, message){ //toda vez que cria uma mutação nova eu recebo o state
		state.message = message;
	},
	ADD_ELEMENT(state, element){
		
		if(element === 0 && ['+', '-', '*', '/'].indexOf(state.lastElement) != -1){
			return;
		}

		state.inline = state.inline == "0" ? element + "" : state.inline + element;
		state.lastElement = element;
	},
	RESULT(state){
		state.result = eval(state.inline);
		state.inline = state.result + "";
	},
	CLEAR(state){
		state.inline = "0";	
		state.result = 0
	}	
};

export default new Vuex.Store({
	state,
	mutations
});