import axios, { AxiosPromise } from 'axios';
const BASE_URL: string = 'https://beer-proxy.herokuapp.com';

export default {
  getLatest(): AxiosPromise {
    return axios({
      method: 'get',
      url: `${BASE_URL}/beer-list`,
    });
  },
  getStats(): AxiosPromise {
    return axios({
      method: 'get',
      url: `${BASE_URL}/stats`,
    });
  },
  getTopTen(): AxiosPromise {
    return axios({
      method: 'get',
      url: `${BASE_URL}/top-ten`,
    });
  },
};
