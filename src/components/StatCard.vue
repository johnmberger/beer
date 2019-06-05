<template>
  <v-card color="white" class="stat-card">
    <div class="stat-card-title">
      <h1 class="title-copy">{{ name }}</h1>
      <v-icon color="grey" medium>fas {{ icon }}</v-icon>
    </div>
    <v-sparkline
      v-if="graph === 'trend'"
      :value="stat"
      auto-draw
      color="grey"
      :gradient="['#f72047', '#ffd200', '#1feaea']"
      height="150"
      padding="24"
      line-width="3"
      stroke-linecap="round"
      :fill="fill || false"
      smooth
    >
      <template v-slot:label="stat">{{ filterLabel(filter, stat.index + 1) }}</template>
    </v-sparkline>
    <div v-if="graph === 'bars'">
      <v-sparkline
        type="bar"
        :value="stat"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        height="150"
        padding="28"
        smooth
      ></v-sparkline>
      <div class="custom-labels">
        <span class="custom-value" v-for="label in labels" :key="label">{{ label }}</span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  methods: {
    filterLabel(filter, val) {
      if (filter) {
        return Vue.filter(filter)(val);
      }
      return val;
    },
  },
})
export default class StatCard extends Vue {
  @Prop() private stat!: any;
  @Prop() private name!: string;
  @Prop() private icon!: string;
  @Prop() private filter!: string;
  @Prop() private graph!: boolean;
  @Prop() private labels!: number[];
  @Prop() private fill!: boolean;
}
</script>

<style scoped lang="scss">
.custom-labels {
  width: 100%;
  text-anchor: middle;
  color: grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 4.2%;
  padding-right: 5.7%;
  margin-top: -8.1%;
  text-align: center;
  padding-bottom: 22px;
  .custom-value {
    width: 14%;
  }
}
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

@media (max-width: 450px) {
  .title-copy {
    font-size: 18px;
  }
}
</style>