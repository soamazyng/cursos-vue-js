var Vue = require('vue');
var VueRouter = require('vue-router');

//precisou fazer isso pois como estamos carregando em módulos o router e fire não sabe que já carregou o Vue
//desta forma, o Vue precisa integrar as bibliotecas
Vue.use(VueRouter);

//componente pai de todos
var appComponent = Vue.extend({});

//registra o componente --> o primeiro é o nome da tag o segundo é o componente
//Vue.component('my-chat', chatComponent);  //não precisa registrar pois o router se encarrega de fazer isso

var router = new VueRouter();

router.map({
	'/chat/:room' : {component: require('./chat.component')},
	'/rooms' : {component: require('./rooms.component')},
	'/rooms-create' : {component: require('./rooms-create.component')},
});

router.start(appComponent, "#app");