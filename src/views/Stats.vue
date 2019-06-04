<template>
  <v-container class="stat-container">
    <v-layout v-if="statsLoaded">
      <div class="title-container">
        <h1 class="beer-title">Some fun stats</h1>
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
        <v-card class="stat-card">
          <div class="stat-card-title">
            <h1 class="title-copy">styles i've tried</h1>
            <v-icon color="grey" medium>fas fa-chart-bar</v-icon>
          </div>
          <div class="tables">
            <div class="table-wrapper">
              <h2 class="most">most</h2>
              <div class="table most">
                <div v-for="style in styleCount.slice(0, 10)" :key="style.name" class="counter">
                  <h4>{{ style.name }}</h4>
                  <span class="num-times">{{ style.count }} times</span>
                </div>
              </div>
            </div>

            <div class="table-wrapper">
              <h2 class="least">least</h2>
              <div class="table least">
                <div
                  class="counter"
                  v-for="style in styleCount.slice(Math.max(styleCount.length - 10, 1))"
                  :key="style.name"
                >
                  <h4>{{ style.name }}</h4>
                  <span class="num-times">{{ style.count }} time</span>
                </div>
              </div>
            </div>
          </div>
        </v-card>
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

@Component({
  components: {
    StatCard,
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

<style lang="css" scoped>
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
.stat-card {
  margin: 24px;
  margin-top: 28px;
}
.tables {
  display: flex;
  flex-direction: row;
  padding: 16px;
}
.table {
  padding: 16px;
}
.table.most {
  border: 1px solid #f72047;
}
.table.least {
  border: 1px solid #1feaea;
}
.counter {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
h2.most {
  color: #f72047;
}
h2.least {
  color: #1feaea;
}
.num-times {
  color: grey;
  font-size: 12px;
  font-weight: 300;
  margin-left: 16px;
  margin-top: 3px;
}
h2 {
  text-align: left;
  font-weight: 400;
  font-size: 26px;
  color: grey;
}
h4 {
  font-size: 20px;
  line-height: 20px;
  text-align: left;
}
.stat-card-title {
  padding-top: 16px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.title-copy {
  font-weight: 400;
  color: grey;
}
.table-wrapper {
  width: 50%;
  padding: 16px;
}
@media (max-width: 1263px) {
  .tables {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
  .table-wrapper {
    width: 100%;
    padding: 16px;
  }
}
</style>
