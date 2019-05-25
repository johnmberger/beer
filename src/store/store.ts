import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';
import moment from 'moment';

Vue.use(Vuex);

const store = {
  state: {
    me: {
      avatar: '',
      numBeers: 0,
    },
    topTenBeers: [],
    recentBeers: [],
    beerStats: [],
    loading: null,
    error: null,
  },
  actions: {
    async topTenBeers({ commit }: any) {
      try {
        const res: any = await api.getTopTen();
        const topTenBeers: any[] = distillApiResponse(res);
        commit('setTopTenBeers', topTenBeers);
      } catch (e) {
        commit('error', e);
      }
    },
    async recentBeers({ commit }: any) {
      try {
        const res: any = await api.getLatest();
        const recentBeers: any[] = distillApiResponse(res);
        commit('setRecentBeers', recentBeers);
      } catch (e) {
        commit('error', e);
      }
    },
    async beerStats({ commit }: any) {
      try {
        const res: any = await api.getTopTen();
        commit('setBeerStats', res.response);
      } catch (e) {
        commit('error', e);
      }
    },
  },
  getters: {
    mostRecentBeer(state: any): string {
      if (state.recentBeers.length) {
        return moment(state.recentBeers[0].created_at).fromNow();
      } else {
        return '';
      }
    },
  },
  mutations: {
    setTopTenBeers(state: any, data: any[]) {
      state.topTenBeers = data;
    },
    setRecentBeers(state: any, data: any[]) {
      state.recentBeers = data;
    },
    setBeerStats(state: any, data: any[]) {
      state.beerStats = data;
    },
  },
};

export default new Vuex.Store(store);

const distillApiResponse = (res: any): any[] => {
  if (res.data && res.data.response) {
    if (res.data.response.checkins && res.data.response.checkins.items) {
      return res.data.response.checkins.items;
    }
    if (res.data.response.beers && res.data.response.beers.items) {
      return res.data.response.beers.items;
    }
  }
  return [];
};
