import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
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
    {
      path: '/stats',
      name: 'Stats',
      component: () =>
        import(/* webpackChunkName: "latest" */ './views/Stats.vue'),
    },
    {
      path: '*',
      redirect: '/latest',
    },
  ],
});
