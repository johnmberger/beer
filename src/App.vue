<template>
  <div id="app">
    <v-app>
      <div v-if="true" class="loading">
        <BeerLoader></BeerLoader>
      </div>
      <div v-else>
        <router-view/>
        <SpeedDial class="hidden-sm-and-down"></SpeedDial>
        <ProfileDrawer class="hidden-sm-and-down" v-if="!viewingStats"></ProfileDrawer>
      </div>
    </v-app>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import BeerLoader from '@/components/BeerLoader.vue';
import ProfileDrawer from '@/components/ProfileDrawer.vue';
import SpeedDial from '@/components/SpeedDial.vue';

@Component({
  components: {
    BeerLoader,
    ProfileDrawer,
    SpeedDial,
  },
  computed: {
    ...mapState(['loading']),
    viewingStats() {
      return this.$route.name === 'Stats';
    },
  },
})
export default class App extends Vue {
  mounted() {
    this.$store.dispatch('userInfo');
    this.$store.dispatch('topTenBeers');
    this.$store.dispatch('recentBeers');
    this.$store.dispatch('beerStats');
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('/assets/background.png');
  background-repeat: repeat;
  text-transform: lowercase;
  min-width: 320px;
}
.loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.beer-title {
  font-size: 36px;
  font-weight: 400;
}
/* Vuetify override */
.v-navigation-drawer__border {
  display: none;
}
</style>
