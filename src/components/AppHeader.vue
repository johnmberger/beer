<template>
  <v-toolbar dark color="purple" scroll-toolbar-off-screen fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">What's John Drinking?</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu :nudge-bottom="48">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-tile @click="goHome">
          <v-list-tile-title>Back to johnmberger.com</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="goToUntappd">
          <v-icon>fas fa-github-square</v-icon>
          <v-list-tile-title>view my untappd page</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="goToGitHub">
          <v-list-tile-title>view my github page</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
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