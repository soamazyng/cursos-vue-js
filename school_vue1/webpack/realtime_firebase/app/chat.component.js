var Vue = require('vue');
var VueFire = require('vuefire');
var db = require('./firebase-db');

Vue.use(VueFire); //integracao necessária 	  

module.exports = {
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