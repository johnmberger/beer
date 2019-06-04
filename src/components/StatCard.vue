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
      smooth
    >
      <template v-slot:label="stat">{{ filterLabel(filter, stat.index + 1) }}</template>
    </v-sparkline>
    <v-sparkline
      v-if="graph === 'bars'"
      :value="stat"
      auto-draw
      color="grey"
      :gradient="['#f72047', '#ffd200', '#1feaea']"
      height="150"
      padding="24"
      line-width="3"
      stroke-linecap="round"
      smooth
    >
      <template v-slot:label="stat">{{ labels[stat.index] % 0.5 == 0 ? labels[stat.index] : '' }}</template>
    </v-sparkline>
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
  @Prop() private labels!: boolean;
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

@media (max-width: 450px) {
  .title-copy {
    font-size: 18px;
  }
}
</style>