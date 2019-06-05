<template>
  <div>
    <v-toolbar dark color="purple" scroll-toolbar-off-screen fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="!noLinks"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">What's John Drinking?</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu :nudge-bottom="48">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>open_in_new</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-tile @click="goHome">
            <v-list-tile-title>➜ &nbsp; view my website</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToUntappd">
            <v-list-tile-title>➜ &nbsp; view my untappd page</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToGitHub">
            <v-list-tile-title>➜ &nbsp; view my github page</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary width="200">
      <img src="/assets/beer_sign_cropped.jpg" alt="beer" class="beer-sign">

      <v-list class="pt-0">
        <v-list-tile @click="$router.push({ name: 'Latest' })">
          <v-list-tile-action>
            <v-icon>fas fa-beer</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>my latest beers</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push({ name: 'Stats' })">
          <v-list-tile-action>
            <v-icon>fas fa-chart-bar</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>my beer stats</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push({ name: 'Top' })">
          <v-list-tile-action>
            <v-icon>fas fa-award</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>my top beers</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  @Prop() private noLinks!: boolean;
  
  private drawer: boolean = false;

  public goHome() {
    window.location.href = 'https://johnmberger.com';
  }
  public goToUntappd() {
    window.location.href = 'https://untappd.com/user/Mustached';
  }
  public goToGitHub() {
    window.location.href = 'https://github.com/johnmberger';
  }
}
</script>

<style lang="scss" scoped>
.beer-sign {
  width: 200px;
}
</style>
