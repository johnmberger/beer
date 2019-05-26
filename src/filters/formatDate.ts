import Vue from 'vue';
import moment from 'moment';

Vue.filter(
  'formatDate',
  (value: Date): string => {
    if (value) {
      return moment(String(value)).fromNow();
    } else {
      return value;
    }
  }
);
