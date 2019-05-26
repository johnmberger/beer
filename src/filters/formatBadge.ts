import Vue from 'vue';
import moment from 'moment';

Vue.filter(
  'formatBadge',
  (value: string): string => {
    if (value.includes(' (')) {
      return value.split(' (')[0];
    } else {
      return value;
    }
  }
);
