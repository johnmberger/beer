import Vue from 'vue';
import Router from 'vue-router';
import Landing from './components/Landing.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/latest',
      name: 'Latest',
      component: () =>
        import(/* webpackChunkName: "latest" */ './views/Latest.vue'),
    },
    {
      path: '/top',
      name: 'Top',
      component: () =>
        import(/* webpackChunkName: "latest" */ './views/TopTen.vue'),
    },
  ],
});
