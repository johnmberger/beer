<template>
  <div id="app">
    <v-app>
      <div v-if="loading" class="loading">
        <BeerLoader></BeerLoader>
        <h2>tapping the kegs!</h2>
      </div>
      <div v-else>
        <AppHeader class="hidden-md-and-up"></AppHeader>
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
import AppHeader from '@/components/AppHeader.vue';
import BeerLoader from '@/components/BeerLoader.vue';
import ProfileDrawer from '@/components/ProfileDrawer.vue';
import SpeedDial from '@/components/SpeedDial.vue';

@Component({
  components: {
    AppHeader,
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
  async mounted() {
    await this.$store.dispatch('userInfo');
    await this.$store.dispatch('topTenBeers');
    await this.$store.dispatch('recentBeers');
    await this.$store.dispatch('beerStats');
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('/assets/background.png');
  background-repeat: repeat;
  text-transform: lowercase;
  min-width: 320px;
  min-height: 500px;
}
.loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-top: 20px;
    color: grey;
    font-weight: 400;
  }
}
/* Vuetify override */
.v-navigation-drawer__border {
  display: none;
}
</style>
