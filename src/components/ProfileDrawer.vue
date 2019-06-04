<template>
  <v-navigation-drawer right fixed permanent clipped width="250px" class="drawer-container">
    <v-card class="profile">
      <h1 class="profile-title">stats</h1>
      <div v-if="meLoaded && recentBeersLoaded">
        <div class="tile">
          <v-icon large>fas fa-calendar-day</v-icon>
          <p class="tile-title">last beer</p>
          <p class="tile-content">{{ mostRecentBeer }}</p>
        </div>
        <div class="tile">
          <v-icon large>fas fa-award</v-icon>
          <p class="tile-title">total badges</p>
          <p class="tile-content">{{ userStats.total_badges }}</p>
        </div>
        <div class="tile">
          <v-icon large>fas fa-beer</v-icon>
          <p class="tile-title">unique beers</p>
          <p class="tile-content">{{ userStats.total_beers }}</p>
        </div>
      </div>
      <div v-else class="loader-container">
        <v-progress-circular :size="50" color="orange" indeterminate></v-progress-circular>
      </div>
    </v-card>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { mapGetters, mapState } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    ...mapState(['meLoaded', 'recentBeersLoaded']),
    ...mapGetters(['mostRecentBeer', 'userStats']),
  },
})
export default class ProfileDrawer extends Vue {}
</script>

<style scoped>
.drawer-container {
  background-color: transparent !important;
  margin-top: 110px !important;
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
.toolbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tile-title {
  margin-bottom: 0px;
  font-size: 12px;
  color: grey;
}
.tile-content {
  font-size: 22px;
  color: #ff9800;
  font-weight: 500;
}
.profile {
  margin-top: 32px;
  margin-right: 16px;
  border-left: 2px solid whitesmoke !important;
  padding-bottom: 8px;
}
.profile-title {
  background-color: rgb(156, 39, 176);
  color: white;
  font-weight: 400 !important;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 26px;
}
</style>
