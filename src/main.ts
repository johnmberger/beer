import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Vuetifty
import Vuetify from 'vuetify';
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';

// filters
import './filters';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
