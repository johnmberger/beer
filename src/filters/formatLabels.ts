import Vue from 'vue';

Vue.filter(
  'formatHours',
  (value: number | string): string => {
    if (value) {
      switch (value.toString()) {
        case '4':
          return '4am';
        case '8':
          return '8am';
        case '12':
          return 'noon';
        case '16':
          return '4pm';
        case '20':
          return '8pm';
        case '24':
          return 'midnight';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
);

Vue.filter(
  'dayOfWeek',
  (value: number | string): string => {
    if (value) {
      switch (value.toString()) {
        case '1':
          return 'mon';
        case '2':
          return 'tues';
        case '3':
          return 'wed';
        case '4':
          return 'thurs';
        case '5':
          return 'fri';
        case '6':
          return 'sat';
        case '7':
          return 'sun';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
);

Vue.filter(
  'month',
  (value: number | string): string => {
    if (value) {
      switch (value.toString()) {
        case '1':
          return 'jan';
        case '2':
          return 'feb';
        case '3':
          return 'mar';
        case '4':
          return 'apr';
        case '5':
          return 'may';
        case '6':
          return 'june';
        case '7':
          return 'july';
        case '8':
          return 'aug';
        case '9':
          return 'sept';
        case '10':
          return 'oct';
        case '11':
          return 'nov';
        case '12':
          return 'dec';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
);

Vue.filter(
  'rating',
  (value: number | string): string => {
    if (value) {
      switch (value.toString()) {
        case '0':
          return 'jan';
        case '1':
          return 'jan';
        case '2':
          return 'feb';
        case '3':
          return 'mar';
        case '4':
          return 'apr';
        case '5':
          return 'may';
        case '6':
          return 'june';
        case '7':
          return 'july';
        case '8':
          return 'aug';
        case '9':
          return 'sept';
        case '10':
          return 'oct';
        case '11':
          return 'nov';
        case '12':
          return 'dec';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
);