<template>
  <div id="app">
    <v-app>
      <MobileMenu class="hidden-md-and-up"></MobileMenu>
      <transition name="fade">
        <router-view/>
      </transition>
      <SpeedDial class="hidden-sm-and-down"></SpeedDial>
      <ProfileDrawer class="hidden-sm-and-down" v-if="!viewingStats"></ProfileDrawer>
    </v-app>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import MobileMenu from '@/components/MobileMenu.vue';
import ProfileDrawer from '@/components/ProfileDrawer.vue';
import SpeedDial from '@/components/SpeedDial.vue';

@Component({
  components: {
    MobileMenu,
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
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
}

.fade-enter-active {
  transition-delay: 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.v-navigation-drawer__border {
  display: none;
}
.title-container {
  text-align: left;
  margin-left: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.beer-title {
  font-size: 36px;
  font-weight: 400;
}
</style>
