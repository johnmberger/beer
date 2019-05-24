<template>
  <v-toolbar color="purple" dark>
    <v-avatar tile v-if="checkin.beer.beer_label">
      <img :src="checkin.beer.beer_label" :alt="checkin.brewery.brewery_name">
    </v-avatar>
    <v-toolbar-title class="beer-name" :title="checkin.beer.beer_name">{{ checkin.beer.beer_name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <div v-on="on" class="hidden-xs-only">
          <v-rating
            class="rating"
            v-model="checkin.rating_score"
            half-increments
            readonly
            color="yellow"
            background-color="yellow"
          ></v-rating>
        </div>
      </template>
      <span>{{ checkin.rating_score | formatRating }}</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CheckinCardHeader extends Vue {
  @Prop() private checkin!: any;
}
</script>

<style scoped>
.beer-name {
  font-weight: 400;
  font-size: 24px;
}
.rating {
  display: flex;
  flex-wrap: nowrap;
}
</style>
