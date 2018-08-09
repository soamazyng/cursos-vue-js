var rooms =  [
	{id: "1", name : "PHP", description : "Teste"},
	{id: "2", name : "Java", description : "Teste"},
	{id: "3", name : "C#", description : "Teste"},
	{id: "4", name : "C++", description : "Teste"},
	{id: "5", name : "JavaScript", description : "Teste"},
	{id: "6", name : "Vue.js", description : "Teste"},
];

//dependencias
var Vue = require('vue');
var VueFire = require('vuefire');
var db = require('./firebase-db');;

Vue.use(VueFire); //integracao necessária -- ele verifica se já está instalado, se tiver ele nem executa 	

//vamos retirar o vue extend pois o ideal é utilizar o export para 
//retorar o objeto, e o Vue deve cuidar de como vai renderizar isso depois
//e com isso, a gente não está retornando o component de cara
module.exports = {
	template : `
	<ul>
		<li v-for="o in rooms">{{o.name}}</li>
	</ul>
	`,
	firebase: { //só funciona com o vue-fire
		rooms: db.ref('chat/rooms') //caminho hierarquico que queremos como base --> referência
	},
	ready : function(){ //quando o componente for criado, ele executa essa função
		var chatRef = db.ref('chat');
		var roomsChildren = chatRef.child('rooms'); //pega o filho do bd ref chat
		rooms.forEach(function(room){
			roomsChildren.child(room.id).set({
				name: room.name,
				description: room.description
			}); //set atualiza o que já existe
		});
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
		}
	},
	methods: {
		goToChat : function(room){
			this.$route.router.go('/chat/'+room.id);
		},
		insertData : function(){		  			
			this.$firebaseRefs.array.push({text : this.text});		  			
		}
	}
};	