  // Initialize Firebase
  var config = {
  	apiKey: "AIzaSyCFMj-8cypZZugZbHU_zjrOe6zVGPejaSI",
  	authDomain: "vuejs-firebase-93c20.firebaseapp.com",
  	databaseURL: "https://vuejs-firebase-93c20.firebaseio.com",
  	projectId: "vuejs-firebase-93c20",
  	storageBucket: "vuejs-firebase-93c20.appspot.com",
  	messagingSenderId: "487401176649"
  };
  

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
				margin-left: 70px;
			}

			.chat li.right .chat-body{
				text-align: right;
				margin-right: 70px;
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
			v-bind:class="{left : !isUser(o.email), right : isUser(o.email)}" v-for="o in chat.messages">
			<span v-bind:class="{'pull-left' : !isUser(o.email), 'pull-right' : isUser(o.email)}">
			<img class="img-cicle" src="{{o.photo}}" />
			</span>
			<div class="chat-body">
			<p>{{o.text}}</p>
			</div>
			</li>							
			</ul>
			</div>
			<div class="panel-footer">
			<div class="input-group">
			<input type="text" name="" class="form-control input-md" placeholder="Digite">
			<span class="input-group-btn">
			<button class="btn btn-success btn-md">Enviar</button>
			</span>
			</div>
			</div>
			</div>
			`, 
			data: function(){
				return{
					user : {
						email : 'j@gmail',
						name: 'jay'
					},
					chat : {
						messages : [
						{text : "ttt", name : "F", email:"f@gmail", photo : "http://placehold.it/50/000FFF/fff&text=00"},
						{text : "aaa", name : "L", email : "j@gmail", photo : "http://placehold.it/50/FFFFFF/000&text=EU"}
						]
					}
				};
			},
			methods : {
				isUser : function(email){
					return this.user.email == email;
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
		  	<br /><a href="javascript:void(0)" @click="goToChat(o)">Entrar</a>
		  	</div>
		  	</div>
		  	</div>
		  	<input type="text" v-model="text" @keyup.enter="insertData" />
		  	<ul>
		  		<li v-for="o in array">
		  			{{o.text}}
		  		</li>
		  	<ul>
		  	`,
		  	firebase: {
		  		array: db.ref('array')
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
			});

			router.start(appComponent, "#app");