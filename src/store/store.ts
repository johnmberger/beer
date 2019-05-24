import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topTenBeers: [],
    recentBeers: [],
    beerStats: [],
    loading: null,
    error: null,
  },
  actions: {
    async topTenBeers({ commit }) {
      try {
        const data: any = await api.getTopTen();
        commit('setTopTenBeers', data.response);
      } catch (e) {
        commit('error', e);
      }
    },
    async recentBeers({ commit }) {
      try {
        const res: any = await api.getLatest();
        const recentBeers = distillApiResponse(res);
        commit('setRecentBeers', recentBeers);
      } catch (e) {
        commit('error', e);
      }
    },
    async beerStats({ commit }) {
      try {
        const data: any = await api.getTopTen();
        commit('setBeerStats', data.response);
      } catch (e) {
        commit('error', e);
      }
    },
  },
  mutations: {
    setTopTenBeers(state, data) {
      state.topTenBeers = data;
    },
    setRecentBeers(state, data) {
      state.recentBeers = data;
    },
    setBeerStats(state, data) {
      state.beerStats = data;
    },
  },
});

const distillApiResponse = (res: any): any[] => {
  if (res.data && res.data.response) {
    if (res.data.response.checkins && res.data.response.checkins.items) {
      return res.data.response.checkins.items;
    }
  }
  return [];
};
