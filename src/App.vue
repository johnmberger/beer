<template>
  <div id="app">
    <v-app>
      <div class="loading"></div>
      <router-view/>
      <SpeedDial class="hidden-sm-and-down"></SpeedDial>
      <ProfileDrawer class="hidden-sm-and-down"></ProfileDrawer>
    </v-app>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import ProfileDrawer from '@/components/ProfileDrawer.vue';
import SpeedDial from '@/components/SpeedDial.vue';

@Component({
  components: {
    ProfileDrawer,
    SpeedDial,
  },
  computed: {
    ...mapState(['loading']),
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: whitesmoke;
}
.v-navigation-drawer__border {
  display: none;
}
</style>
