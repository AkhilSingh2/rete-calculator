import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(ClientTable, {}, false, 'bootstrap4')
Vue.use(VueAxios, axios)

window.moment = require('moment');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
