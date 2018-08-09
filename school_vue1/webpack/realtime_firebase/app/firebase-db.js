var Firebase = require('firebase');

var firebaseApp = Firebase.initializeApp({
	apiKey: "AIzaSyCFMj-8cypZZugZbHU_zjrOe6zVGPejaSI",
	authDomain: "vuejs-firebase-93c20.firebaseapp.com",
	databaseURL: "https://vuejs-firebase-93c20.firebaseio.com",
	projectId: "vuejs-firebase-93c20",
	storageBucket: "vuejs-firebase-93c20.appspot.com",
	messagingSenderId: "487401176649"
	  }); //importar as credenciais

module.exports = firebaseApp.database(); //exportando a instancia do banco de dados