import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

// vuetifty
import Vuetify from 'vuetify';
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';

// filters
import './filters/formatDate';
import './filters/formatRating';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
