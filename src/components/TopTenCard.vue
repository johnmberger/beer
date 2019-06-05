<template>
  <v-card class="card-container">
    <v-card-title primary-title>
      <div>
        <div class="headline"></div>
        <h3>
          <v-avatar tile>
            <img :src="beer.brewery.brewery_label" :alt="beer.brewery.brewery_name">
          </v-avatar>
          {{ beer.brewery.brewery_name }}
        </h3>
        <span class="subtitle">{{ beer.first_had | formatDate }}</span>
      </div>
    </v-card-title>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <div v-on="on">
          <v-rating
            class="rating"
            v-model="beer.rating_score"
            half-increments
            readonly
            color="orange"
            background-color="orange"
          ></v-rating>
        </div>
      </template>
      <span>{{ beer.rating_score | formatRating }}</span>
    </v-tooltip>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopTenCard extends Vue {
  @Prop() private beer!: any;
}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.rating {
  width: 100%;
}
</style>
