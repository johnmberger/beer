<template>
  <v-speed-dial v-model="fab" top left fixed direction="bottom">
    <template v-slot:activator>
      <v-btn v-model="fab" color="orange" dark fab large>
        <v-icon>menu</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark color="green" class="first-icon">
      <v-icon>fas fa-beer</v-icon>
    </v-btn>
    <v-btn fab dark color="indigo">
      <v-icon>fas fa-award</v-icon>
    </v-btn>
        <v-btn fab dark color="purple">
      <v-icon>fas fa-chart-bar</v-icon>
    </v-btn>
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
.first-icon {
  margin-top: 18px;
}
</style>