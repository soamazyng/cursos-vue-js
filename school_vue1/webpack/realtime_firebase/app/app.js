import Vue from 'vue';
import VueRouter from 'vue-router';
import ChatComponent from './chat.component.js'
import RoomsComponent from './rooms.component.js'
import RoomsCreateComponent from './rooms-create.component.js'

//style para colocar o <style>
require('style-loader!css-loader!../node_modules/bootstrap/dist/css/bootstrap.min.css')

Vue.use(VueRouter);

//componente pai de todos
var appComponent = Vue.extend({});

var router = new VueRouter();

router.map({
'/chat/:room' : {component: ChatComponent},
'/rooms' : {component: RoomsComponent},
'/rooms-create' : {component: RoomsCreateComponent},
});

router.start(appComponent, "#app");