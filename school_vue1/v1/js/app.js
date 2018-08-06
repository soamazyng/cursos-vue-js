var hello = new Vue({
	el: '#hello',
	data: {
		msg : "Hello Vue!",
		people: [
			{name: "Maria"},
			{name: "J"},
			{name: "P"},
			{name: "L"},
			{name: "B"}
		],
		newElement:'',
		elements:[],
		objectA:{
			'font-size': '30px'
		},
		objectB:{
			'color' : 'red'
		},
		myListForm : [],
		myForm : {
			name: '',
			email: '',
		}		
	},
	methods: {
		addElement : function(e){
			var title = this.newElement.trim();
			if(title){
				this.elements.push({title:title});
				this.newElement = "";
			}
			console.log(e);			
		},
		removeElement : function(e, index){			
			e.preventDefault();

			this.elements.splice(index, 1);
		},
		myClick : function(){
			alert("click");
		},
		myKeyup: function(){
			alert("MyKeyup");
		},
		addForm : function(){
			this.myListForm.push({
				name : this.myForm.name,
				email: this.myForm.email
			});

			this.myForm.name = '';
			this.myForm.email = '';
		}
	}
});