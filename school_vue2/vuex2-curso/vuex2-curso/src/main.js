import Vue from 'vue';
import './filters';
import AppComponent from './components/app.component';
import store from './store';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');


let meuVue = new Vue({
    el: '#app',
    components: {
        'app': AppComponent
    },
    store
});