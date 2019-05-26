import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';
import moment from 'moment';

Vue.use(Vuex);

const store = {
  state: {
    me: {},
    topTenBeers: [],
    recentBeers: [],
    beerStats: null,
    loading: null,
    error: null,
  },
  actions: {
    async userInfo({ commit }: any) {
      try {
        const res: any = await api.getUserInfo();
        const me: any = distillUserInfoResponse(res);
        commit('setUserInfo', me);
      } catch (e) {
        commit('error', e);
      }
    },
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
        const res: any = await api.getStats();
        const beerStats = res.data;
        commit('setStats', beerStats);
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
    userStats(state: any): Object {
      if (state.me.stats) {
        return state.me.stats;
      } else {
        return {};
      }
    },
    avgRating(state: any): number {
      if (state.beerStats) {
        return state.beerStats.avgRating;
      } else {
        return 0;
      }
    },
    monthCountValues(state: any): { name: string; count: number }[] {
      if (state.beerStats) {
        return state.beerStats.monthCount.map((day: any) => day.count);
      } else {
        return [];
      }
    },
    dayCountLabels(state: any): { name: string; count: number }[] {
      if (state.beerStats) {
        return state.beerStats.dayCount.map((day: any) => day.name);
      } else {
        return [];
      }
    },
    dayCountValues(state: any): { name: string; count: number }[] {
      if (state.beerStats) {
        return state.beerStats.dayCount.map((day: any) => day.count);
      } else {
        return [];
      }
    },
    hourCount(state: any): { name: string; count: number }[] {
      if (state.beerStats) {
        return state.beerStats.hourCount;
      } else {
        return [];
      }
    },
    hourCountValues(state: any): { name: string; count: number }[] {
      if (state.beerStats) {
        return state.beerStats.hourCount.map((hour: any) => hour.count);
      } else {
        return [];
      }
    },
    ratingCount(state: any): { name: number; count: number }[] {
      if (state.beerStats) {
        return state.beerStats.hourCount;
      } else {
        return [];
      }
    },
    styleCount(state: any): { name: number; count: number }[] {
      if (state.beerStats) {
        return state.beerStats.styleCount;
      } else {
        return [];
      }
    },
  },
  mutations: {
    setUserInfo(state: any, data: any) {
      state.me = data;
    },
    setTopTenBeers(state: any, data: any[]) {
      state.topTenBeers = data;
    },
    setRecentBeers(state: any, data: any[]) {
      state.recentBeers = data;
    },
    setStats(state: any, data: any) {
      state.beerStats = data;
    },
  },
};

export default new Vuex.Store(store);

// Helpers

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

const distillUserInfoResponse = (res: any): Object => {
  if (res.data && res.data.response) {
    if (res.data.response.user) {
      return res.data.response.user;
    }
  }
  return {};
};
