import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import moment from 'moment';

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.filter(
  'formatDate',
  (value: Date): string => {
    if (value) {
      return moment(String(value)).format('LLL');
    } else {
      return value;
    }
  }
);

Vue.filter(
  'formatRating',
  (value: number): string => {
    if (value) {
      if (value === 5.0) {
        return 'This is one of the best beers I\'ve ever had';
      } else if (value >= 4.5) {
        return 'This beer was incredible.';
      } else if (value >= 4.0) {
        return 'This beer was awesome.';
      } else if (value >= 3.5) {
        return 'This beer was good.';
      } else if (value >= 3.0) {
        return 'This beer was fine.';
      } else if (value >= 2.0) {
        return 'This beer was trash.';
      } else if (value >= 0.25) {
        return 'This beer was unbelievably bad.';
      } else {
        return 'I want to kill myself this beer was so bad.';
      }
    } else {
      return 'I was too drunk to rate this beer';
    }
  }
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
