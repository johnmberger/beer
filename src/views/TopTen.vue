<template>
  <div>
    <v-flex s12 md8 offset-md2 lg6 offset-lg3 v-if="topTenBeers.length">
      <div class="title-container">
        <h1 class="beer-title">My All-Time Favorites</h1>
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

  async mounted() {
    await this.$store.dispatch('topTenBeers');
    this.loading = false;
  }
}
</script>

<style lang="css" scoped>
.title-container {
  text-align: left;
  margin-left: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.beer-title {
  font-size: 36px;
  font-weight: 300;
}
.top-ten-card {
  margin: 16px;
  padding: 8px;
}
</style>
