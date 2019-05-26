<template>
  <div>
    <v-flex s12 md8 offset-md1 lg6 offset-lg2 v-if="recentBeers.length">
      <div class="title-container">
        <h1 class="beer-title">new beers i've tried recently</h1>
      </div>
      <div v-for="checkin in recentBeers" :key="checkin.checkin_id" class="checkin-card">
        <CheckinCardHeader :checkin="checkin"></CheckinCardHeader>
        <CheckinCard :checkin="checkin"></CheckinCard>
      </div>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import CheckinCard from '@/components/CheckinCard.vue';
import CheckinCardHeader from '@/components/CheckinCardHeader.vue';

@Component({
  components: {
    CheckinCard,
    CheckinCardHeader,
  },
  computed: {
    ...mapState(['recentBeers']),
  },
})
export default class Landing extends Vue {
  private loading: boolean = false;
}
</script>

<style lang="css" scoped>
.checkin-card {
  margin: 16px;
  padding: 8px;
}
</style>
