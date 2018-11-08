import Vue from 'vue';
import App from './App.vue';

import axios from "axios";
import VueJwtDecode from 'vue-jwt-decode';

Vue.use(axios);
Vue.prototype.$axios = axios;
Vue.use(VueJwtDecode);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app');
