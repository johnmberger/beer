import Vue from 'vue';
import Router from 'vue-router';
import Landing from './components/Landing.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/latest',
      name: 'latest',
      component: () => import(/* webpackChunkName: "latest" */ './views/Latest.vue'),
    },
  ],
});
