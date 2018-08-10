import Vue from 'vue';
import AppComponent from './app.component';

new Vue({
	el: "#app",
	data: {
		message: "Hello"
	},
	components: {
		'app-component' : AppComponent
	}
});