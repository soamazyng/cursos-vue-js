import db from './firebase-db';
import Vue from 'vue';
import VueFire from 'vuefire';
import md5 from 'blueimp-md5';
import {} from 'bootstrap';

Vue.use(VueFire); //integracao necessária -- ele verifica se já está instalado, se tiver ele nem executa 	  

export default {
	template : require('html-loader!../templates/rooms.component.html'),
	firebase: { //só funciona com o vue-fire
		rooms: db.ref('chat/rooms') //caminho hierarquico que queremos como base --> referência
	},
	data : function(){
		return{
			rooms: [
			{id: "1", name : "PHP", description : "Teste"},
			{id: "2", name : "Java", description : "Teste"},
			{id: "3", name : "C#", description : "Teste"},
			{id: "4", name : "C++", description : "Teste"},
			{id: "5", name : "JavaScript", description : "Teste"},
			{id: "6", name : "Vue.js", description : "Teste"},
			],
			name : '',
			email : '',
			room : null
		}
	},
	methods: {
		login : function(){

			//salva no localStorage do navegador
			window.localStorage.setItem('name', this.name);
			window.localStorage.setItem('email', this.email);
			window.localStorage.setItem('photo', 'http://www.gravatar.com/avatar/' + md5(this.email) + '.jpg');
			$('#modalLoginEmail').modal('hide');
			this.$route.router.go('/chat/'+this.room.id);
		},
		openModal : function(room){
			$('#modalLoginEmail').modal('show');
			this.room = room;
		}
		// insertData : function(){		  			
		// 	this.$firebaseRefs.array.push({text : this.text});		  			
		// }
	}
}; 