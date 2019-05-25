import Vue from 'vue';

Vue.filter(
  'formatRating',
  (value: number): string => {
    if (value) {
      if (value >= 4.75) {
        return 'This is one of the best beers I\'ve ever had';
      } else if (value >= 4.5) {
        return 'This beer was incredible.';
      } else if (value >= 4) {
        return 'This beer was awesome.';
      } else if (value >= 3.5) {
        return 'This beer was good.';
      } else if (value >= 3.0) {
        return 'This beer was fine.';
      } else if (value >= 2.0) {
        return 'This beer was trash.';
      } else if (value >= 0.25) {
        return 'This beer was unbelievably bad.';
      } else {
        return 'I want to kill myself this beer was so bad.';
      }
    } else {
      return 'I was too drunk to rate this beer';
    }
  }
);
