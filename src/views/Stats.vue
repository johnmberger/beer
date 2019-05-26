<template>
  <v-container class="stat-container">
    <v-layout>
      <div class="title-container">
        <h1 class="beer-title">Some fun stats</h1>
      </div>
    </v-layout>
    <v-layout row wrap v-if="beerStats">
      <v-flex xs12 lg6>
        <StatCard
          :stat="hourCountValues"
          name="hours"
          icon="fa-hourglass-half"
          filter="formatHours"
        ></StatCard>
      </v-flex>
      <v-flex xs12 lg6>
        <StatCard :stat="dayCountValues" name="days" icon="fa-calendar-day" filter="dayOfWeek"></StatCard>
      </v-flex>
      <v-flex xs12 lg6>
        <StatCard :stat="monthCountValues" name="months" icon="fa-calendar-alt" filter="month"></StatCard>
      </v-flex>
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
    ...mapState(['beerStats']),
    ...mapGetters([
      'avgRating',
      'styleCount',
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
@media (min-width: 960px) {
  .stat-container {
    padding-left: 48px;
  }
}
</style>
