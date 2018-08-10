import Vue from 'vue';
import AppComponent from './app.component';
import Store from './store';

new Vue({
	el: "#app",
	data: {
		message: "Hello"
	},
	components: {
		'app-component' : AppComponent
	},
	store: Store
});