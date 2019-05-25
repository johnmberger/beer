<template>
  <v-toolbar color="purple" dark>
    <v-btn absolute dark small fab top left class="rank" :class="`rank-${rank}`">#{{ rank }}</v-btn>
    <v-toolbar-title class="beer-name" :title="beer.beer.beer_name">{{ beer.beer.beer_name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-avatar tile v-if="beer.beer.beer_label">
      <img :src="beer.beer.beer_label" :alt="beer.brewery.brewery_name">
    </v-avatar>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopTenCardHeader extends Vue {
  @Prop() private beer!: any;
  @Prop() private rank!: number;
}
</script>

<style scoped>
.rank {
  margin-left: -18px;
  left: 0 !important;
}
.beer-name {
  font-weight: 400;
  font-size: 24px;
}
.rank-1 {
  background-color: gold !important;
  color: black;
}
.rank-2 {
  background-color: silver !important;
  color: black;
}
.rank-3 {
  background-color: #cd7f32 !important;
  color: white;
}
</style>
