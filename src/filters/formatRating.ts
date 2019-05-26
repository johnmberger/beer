import Vue from 'vue';

Vue.filter(
  'formatRating',
  (value: number): string => {
    if (value) {
      if (value >= 4.75) {
        return 'this is one of the best beers i\'ve ever had';
      } else if (value >= 4.5) {
        return 'this beer was incredible.';
      } else if (value >= 4) {
        return 'this beer was awesome.';
      } else if (value >= 3.5) {
        return 'this beer was good.';
      } else if (value >= 3.0) {
        return 'this beer was fine.';
      } else if (value >= 2.0) {
        return 'this beer was trash.';
      } else if (value >= 0.25) {
        return 'this beer was unbelievably bad.';
      } else {
        return 'i want to kill myself this beer was so bad.';
      }
    } else {
      return 'i was too drunk to rate this beer';
    }
  }
);
