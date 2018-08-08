//utilizando o módulo, sempre precisa colocar o require
//pra cada instancia do meu módulo eu recebo um parametro na function()
requirejs(['firebase-config'], function(config){

	//cria uma variavel para trabalhar com o firebase
		var firebaseApp = firebase.initializeApp(config);

		var chatComponent = Vue.extend({
			template : `
			<style type="text/css" scoped>
			.chat{
				padding: 0;			
			}

			.chat li{
				margin-bottom: 15px;
				padding-bottom: 15px;
			}

			.chat li.left .chat-body{
				margin-left: 100px;
				margin-top: 16px;
			}

			.chat li.right .chat-body{
				text-align: right;
				margin-right: 100px;
				margin-top: 16px;
			}

			.panel-body{
				overflow-y: scroll;
				height: 400px;
			}
			</style>

			<div class="panel panel-primary">
			<div class="panel-heading">Chat</div>
			<div class="panel-body">
			<ul class="chat list-unstyled">
			<li class="clearfix"
			v-bind:class="{left : !isUser(o.email), right : isUser(o.email)}" v-for="o in messages">
			<span v-bind:class="{'pull-left' : !isUser(o.email), 'pull-right' : isUser(o.email)}">			
			<img class="img-circle" src="{{o.photo}}" />
			</span>
			<div class="chat-body">
			<strong>{{o.name}}</strong>
			<p>{{o.text}}</p>
			</div>
			</li>							
			</ul>
			</div>
			<div class="panel-footer">
			<div class="input-group">
			<input type="text" name="" class="form-control input-md" placeholder="Digite" v-model="message" @keyup.enter="sendMessage" />
			<span class="input-group-btn">
			<button class="btn btn-success btn-md" @click="sendMessage">Enviar</button>
			</span>
			</div>
			</div>
			</div>
			`, 
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
					console.log('f');
					this.$firebaseRefs.messages.push({
						name: this.user.name,
						email : this.user.email,
						text : this.message,
						photo : this.user.photo,
					});

					this.message = '';
				}
			}				
		});

		  //pega a instancia do banco de dados
		  var db = firebaseApp.database();

		  var roomsComponent = Vue.extend({
		  	template : `
		  	<div class="col-md-4" v-for="o in rooms">
		  		<div class="panel panel-primary">
		  		<div class="panel-heading">{{o.name}}</div>
		  		<div class="panel-body">{{o.description}}
		  		<br /><a href="javascript:void(0)" @click="openModal(o)">Entrar</a>
		  		</div>
		  		</div>
		  	</div>
		  	<div class="modal fade" id="modalLoginEmail" tabindex="-1" role="dialog" aria-labelledby="modalLoginEmail">
		  		<div class="modal-dialog" role="document">
		  			<div class="modal-content">
		  				<div class="modal-header">
		  					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		  					<h4 class="modal-title" id="exampleModalLabel"> Entre com as informações </h4>
		  				</div>
		  				<div class="modal-body">
		  					<form>
		  						<div class="form-group">
		  							<input type="text" class="form-control" name="email" v-model="email" placeholder="e-mail">
		  						</div>
		  						<div class="form-group">
		  							<input type="text" class="form-control" name="name" v-model="name" placeholder="Nome">
		  						</div>		  						
		  					</form>
		  				</div>
		  				<div class="modal-footer">
		  					<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
		  					<button type="button" class="btn btn-primary" @click="login">Login</button>
		  				</div>
		  			</div>
		  		</div>
		  	</div>
		  	`,
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
		  });

		  var rooms =  [
		  			{id: "1", name : "PHP", description : "Teste"},
		  			{id: "2", name : "Java", description : "Teste"},
		  			{id: "3", name : "C#", description : "Teste"},
		  			{id: "4", name : "C++", description : "Teste"},
		  			{id: "5", name : "JavaScript", description : "Teste"},
		  			{id: "6", name : "Vue.js", description : "Teste"},
		  			];

		  var roomsCreateComponent = Vue.extend({
		  	template : `
		  		<ul>
		  			<li v-for="o in rooms">{{o.name}}
		  			</li>
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
		  });		  

			//componente pai de todos
			var appComponent = Vue.extend({});

			//registra o componente --> o primeiro é o nome da tag o segundo é o componente
			//Vue.component('my-chat', chatComponent);  //não precisa registrar pois o router se encarrega de fazer isso

			var router = new VueRouter();

			router.map({
				'/chat/:room' : {component: chatComponent},
				'/rooms' : {component: roomsComponent},
				'/rooms-create' : {component: roomsCreateComponent},
			});

			router.start(appComponent, "#app");

});
  
		