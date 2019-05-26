<template>
  <div>
    <v-flex s12 md8 offset-md1 lg6 offset-lg2 v-if="topTenBeers.length">
      <div class="title-container">
        <h1 class="beer-title">Best beers I've had</h1>
      </div>
      <div v-for="(beer, rank) in topTenBeers" :key="beer.first_checkin_id" class="top-ten-card">
        <TopTenCardHeader :beer="beer" :rank="(rank + 1)"></TopTenCardHeader>
        <TopTenCard :beer="beer"></TopTenCard>
      </div>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import TopTenCard from '@/components/TopTenCard.vue';
import TopTenCardHeader from '@/components/TopTenCardHeader.vue';

@Component({
  components: {
    TopTenCard,
    TopTenCardHeader,
  },
  computed: {
    ...mapState(['topTenBeers']),
  },
})
export default class TopTen extends Vue {
  private loading: boolean = false;
}
</script>

<style lang="css" scoped>
.top-ten-card {
  margin: 16px;
  padding: 8px;
}
</style>
