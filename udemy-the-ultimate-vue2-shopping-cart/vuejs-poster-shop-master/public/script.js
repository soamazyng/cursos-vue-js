new Vue({
	el: '#app',
	data: {
		total: 0,
		items: [
			{title: 'item 1'},
			{title: 'item 2'},
			{title: 'item 3'}
		],
		cart: []
	},
	methods:{
		addItem: function(index){
			console.log(this.items[index]);
			this.cart.push(this.items[index]);
			this.total += this.items[index].title;
		}
	}
});
