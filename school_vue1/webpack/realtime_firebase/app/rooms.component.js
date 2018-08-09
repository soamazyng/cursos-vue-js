define('rooms.component', 
		['blueimp-md5', 'vue', 'vuefire', './firebase-db', 'bootstrap' //colocando o boostrap como ultimo parametro eu não preciso importar ele na function()
		], function(md5, Vue, VueFire, db){		

	Vue.use(VueFire); //integracao necessária -- ele verifica se já está instalado, se tiver ele nem executa 	  

	return {
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
	}; 

});