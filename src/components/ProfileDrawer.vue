<template>
  <v-navigation-drawer right fixed clipped width="200px" class="drawer-container">
    <div class="profile"></div>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Mustached</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{ mostRecentBeer }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    ...mapGetters(['mostRecentBeer'])
  }
})
export default class ProfileDrawer extends Vue {}
</script>

<style scoped>
.drawer-container {
  background-color: transparent !important;
  border: none;
}
.profile {
  margin-top: 32px;
  margin-right: 16px;
}
</style>
