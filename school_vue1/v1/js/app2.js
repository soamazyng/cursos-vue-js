var app = new Vue({
	el: '#app',
	data: {
		books: [],
		mySearch : '',
		orderCol : 'id',
		orderInverse : 1,
		pagination: {
			maxPage : 4,
			current : 1,
			totalItems: 0,
			totalPages : 5,
			listNumbers : [],
			listPagination: []
		}
	},
	methods: {
		filterOrderBy : function(e, col){
			e.preventDefault();
			this.orderCol = col;
			this.orderInverse = this.orderInverse * -1;			
		},
		previous : function(e){
			e.preventDefault();
		},
		next : function(e){
			e.preventDefault();
		},
		pagePagination : function(e, id){
			e.preventDefault();
		},				
	},
	filters: {
		dinheiro(numero) {
			var numero = numero.toFixed(2).split('.');
			numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
			return numero.join(',');			
		}
	},
	ready : function(){ //inicializacao
		var self = this; //utilizada para não perder a referência do app

		//$http é o método do vue - resource 
		self.$http.get('./dataServer.json').then(function(response){
			self.books = response.data;
		});
	}
});

