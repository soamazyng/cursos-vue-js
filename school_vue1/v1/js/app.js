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
		elements:[]
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
		}
	}
});