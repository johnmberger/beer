<template>
  <div id="app">
    <v-app>
      <div v-if="loading" class="loading">
        <BeerLoader></BeerLoader>
        <h2>tapping the kegs</h2>
        <v-fade-transition>
          <p v-if="additionalText">almost finished...</p>
        </v-fade-transition>
      </div>
      <div v-else>
        <AppHeader></AppHeader>
        <transition name="fade">
          <router-view/>
        </transition>
        <!-- <SpeedDial class="hidden-md-and-up"></SpeedDial> -->
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
  private additionalText: boolean = false;

  async mounted() {
    setTimeout(() => {
      this.additionalText = true;
    }, 4500);
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
  p {
    color: grey;
    font-weight: 300;
  }
}
/* Vuetify override */
.v-navigation-drawer__border {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
