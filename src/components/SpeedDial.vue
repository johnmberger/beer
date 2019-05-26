<template>
  <v-speed-dial v-model="fab" top left fixed direction="bottom" class="dial">
    <template v-slot:activator>
      <v-btn v-model="fab" color="orange" dark fab large>
        <v-icon>menu</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </template>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          dark
          color="green"
          class="first-icon"
          @click="$router.push({ name: 'Latest'})"
          v-on="on"
        >
          <v-icon>fas fa-beer</v-icon>
        </v-btn>
      </template>
      <span>latest new beers</span>
    </v-tooltip>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <v-btn fab dark color="indigo" @click="$router.push({ name: 'Top'})" v-on="on">
          <v-icon>fas fa-award</v-icon>
        </v-btn>
      </template>
      <span>top 10 beers</span>
    </v-tooltip>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <v-btn fab dark color="purple" v-on="on" @click="$router.push({ name: 'Stats'})">
          <v-icon>fas fa-chart-bar</v-icon>
        </v-btn>
      </template>
      <span>some fun stats</span>
    </v-tooltip>
  </v-speed-dial>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SpeedDial extends Vue {
  private fab: boolean = false;
  private on!: any;
}
</script>

<style scoped>
.dial {
  margin-top: 16px;
}
.first-icon {
  margin-top: 18px;
}
</style>