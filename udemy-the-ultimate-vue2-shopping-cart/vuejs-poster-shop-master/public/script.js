var PRICE = 9.99;
var LOAD_NUM = 10;
new Vue({
	el: '#app',
	data: {
		total: 0,
		items: [],
		cart: [],
		results: [],
		search: 'anime',
		lastSearch: '',
		loading : false,
		price: PRICE
	},
	mounted:function(){
		this.onSubmit();
		var vueInstance = this;
		var elem = document.getElementById('product-list-bottom');
		var watcher = scrollMonitor.create(elem);
		watcher.enterViewport(function(){
			vueInstance.appendItems();
		});
	},
	computed: {
		noMoreItems: function(){
			return this.items.length === this.results.length && this.results.length > 0;
		}
	},
	methods:{
		appendItems : function(){
			if(this.items.length < this.results.length){
				var append = this.results.slice(this.items.length, this.items.length + LOAD_NUM);
				this.items = this.items.concat(append);
			}
		},
		onSubmit: function(){
			if(this.search.length){
				this.items = [];
				this.loading = true;

				this.$http
				.get('/search/'.concat(this.search))
				.then(function(result) {					
					this.lastSearch = this.search;
					this.results = result.data,
					this.loading = false;
					this.appendItems();
				});
			}			
		},
		addItem: function(index){
			this.total += PRICE;
			var item = this.items[index];
			var found = false;

			//varre o array para encontrar o mesmo item lá dentro, se tiver ele add mais um no qty
			for(var i = 0; i < this.cart.length; i++){
				if (this.cart[i].id === item.id){	
					found = true;				
					this.cart[i].qty++;
					break;
				}
			}

			//se não for encontrado
			if(!found){
				this.cart.push({
					id: item.id,
					title: item.title,
					qty: 1,
					price: PRICE
				});
			}
		},
		inc: function(item){
			item.qty++;
			this.total += item.price;
		},
		dec: function(item){			
			item.qty--;
			this.total -= item.price;
			if(item.qty <= 0){
				for (var i = 0; i < this.cart.length; i++) {
					if(this.cart[i].id === item.id){
						this.cart.splice(i, 1);
						break;
					}
				}
			}			
		}
	},
	filters:{
		currency: function(price){
			return '$'.concat(price.toFixed(2));
		}
	}
});

