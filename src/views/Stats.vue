<template>
  <v-container class="stat-container">
    <v-layout v-if="statsLoaded">
      <div class="title-container stats-title-container">
        <h1 class="beer-title stats-title">Some other fun stats</h1>
      </div>
    </v-layout>
    <v-layout row wrap v-if="beerStats">
      <v-flex xs12 lg6>
        <StatCard
          :stat="hourCountValues"
          name="hours i drink beer"
          icon="fa-hourglass-half"
          filter="formatHours"
          graph="trend"
        ></StatCard>
      </v-flex>
      <v-flex xs12 lg6>
        <StatCard
          :stat="dayCountValues"
          name="days i drink beer"
          icon="fa-calendar-day"
          filter="dayOfWeek"
          graph="trend"
        ></StatCard>
      </v-flex>
      <v-flex xs12 lg6>
        <StatCard
          :stat="monthCountValues"
          name="months i drink beer"
          icon="fa-calendar-alt"
          filter="month"
          graph="trend"
        ></StatCard>
      </v-flex>
      <v-flex xs12 lg6>
        <StatCard
          :stat="ratingCount"
          bar="true"
          fill="true"
          name="how i rate beer"
          graph="bars"
          :labels="ratingLabels"
          icon="fa-star-half-alt"
        ></StatCard>
      </v-flex>
      <v-flex xs12>
        <StylesTried></StylesTried>
      </v-flex>
    </v-layout>
    <v-layout v-else class="loader-container">
      <v-progress-circular :size="100" color="orange" indeterminate></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { mapGetters, mapState } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import StatCard from '@/components/StatCard.vue';
import StylesTried from '@/components/StylesTried.vue';

@Component({
  components: {
    StatCard,
    StylesTried,
  },
  computed: {
    ...mapState(['statsLoaded', 'beerStats']),
    ...mapGetters([
      'avgRating',
      'styleCount',
      'ratingCount',
      'ratingLabels',
      'dayCountValues',
      'hourCountValues',
      'monthCountValues',
    ]),
  },
})
export default class Stats extends Vue {}
</script>

<style lang="scss" scoped>
.title-container {
  margin-top: 16px;
}
.loader-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stats-title-container {
  margin-top: 0px;
  width: 100%;
  .stats-title {
    text-align: center;
  }
}
.stat-card {
  margin: 24px;
  margin-top: 28px;
}
</style>
