import db from './firebase-db';
import Vue from 'vue';
import VueFire from 'vuefire';

Vue.use(VueFire); //integracao necessária 	  

export default {
	template : require('html-loader!../templates/chat.component.html'), 
	created : function(){ //executado ainda quando NÃO gerou o template
		var roomRef = 'chat/rooms/' + this.$route.params.room; //o route utiliza o params para pegar um parametro da rota				
		this.$bindAsArray('messages', db.ref(roomRef + '/messages')); //força criar um bind com o firebase --- é a mesma coisa de criar um firebase : {} 				
		//this.$set('user.photo', 'http://www.gravatar.com/avatar/' + md5(this.user.email) + '.jpg'); // add novas propriedades com lógica
	},
	data: function(){
		return{
			user : {
				email : localStorage.getItem('email'),
				name: localStorage.getItem('name'),
				photo : localStorage.getItem('photo')
			},
			message : ''
		};
	},
	methods : {
		isUser : function(email){
			return this.user.email == email;
		},
		sendMessage : function(){					
			this.$firebaseRefs.messages.push({
				name: this.user.name,
				email : this.user.email,
				text : this.message,
				photo : this.user.photo,
			});
			this.message = '';
		}
	}				
};	
