<template>
  <v-card color="white" class="stat-card">
    <div class="stat-card-title">
      <h1 class="title-copy">{{ name }} i drink beer</h1>
      <v-icon color="grey" medium>fas {{ icon }}</v-icon>
    </div>
    <v-sparkline
      auto-draw
      class="chart"
      color="grey"
      :value="stat"
      :gradient="['#f72047', '#ffd200', '#1feaea']"
      height="150"
      padding="24"
      line-width="3"
      stroke-linecap="round"
      smooth
    >
      <template v-slot:label="stat">{{ filterLabel(filter, stat.index + 1) }}</template>
    </v-sparkline>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  methods: {
    filterLabel(filter, val) {
      return Vue.filter(filter)(val);
    },
  },
})
export default class StatCard extends Vue {
  @Prop() private stat!: any;
  @Prop() private name!: string;
  @Prop() private icon!: string;
  @Prop() private filter!: string;
}
</script>

<style scoped>
.stat-card {
  margin: 24px;
  margin-top: 28px;
}
.stat-card-title {
  padding-top: 16px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.title-copy {
  font-weight: 400;
  color: grey;
}
</style>