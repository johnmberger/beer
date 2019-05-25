<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3>
          <v-avatar tile>
            <img :src="checkin.brewery.brewery_label" :alt="checkin.brewery.brewery_name">
          </v-avatar>
          {{ checkin.brewery.brewery_name }}
        </h3>
        <span class="subtitle">{{ checkin.created_at | formatDate }}</span>
      </div>
    </v-card-title>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <div v-on="on" class="hidden-sm-and-up">
          <v-rating
            class="rating"
            v-model="checkin.rating_score"
            half-increments
            readonly
            color="orange"
            background-color="orange"
          ></v-rating>
        </div>
      </template>
      <span>{{ checkin.rating_score | formatRating }}</span>
    </v-tooltip>

    <div v-if="checkin.checkin_comment">{{ checkin.checkin_comment }}</div>

    <v-dialog v-if="checkin.venue.venue_name">
      <template v-slot:activator="{ on }">
        <div v-if="checkin.venue.venue_name" v-on="on">
          <v-icon>location_on</v-icon>
          {{ checkin.venue.venue_name }}
        </div>
      </template>

      <!-- <v-card>
        <img
          :src="`https://maps.googleapis.com/maps/api/staticmap?center=${ checkin.venue.location.lat },${ checkin.venue.location.lng }&zoom=12&size=600x300&maptype=roadmap&markers=color:blue%7C${ checkin.venue.location.lat },${ checkin.venue.location.lng }&key=${gKey1}${gKey2}`"
          alt="map"
        >
      </v-card> -->
    </v-dialog>

    <div class="chips" v-if="checkin.badges.count">
      <v-tooltip top v-for="badge in checkin.badges.items" :key="badge.badge_id" max-width="300">
        <template v-slot:activator="{ on }">
          <v-chip v-on="on">
            <v-avatar>
              <img :src="badge.badge_image.sm" alt="badge">
            </v-avatar>
            {{ badge.badge_name }}
          </v-chip>
        </template>
        <span>{{ badge.badge_description }}</span>
      </v-tooltip>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CheckinCard extends Vue {
  private gKey1: string = 'AIzaSyCJFMlJMIdwv3cT';
  private gKey2: string = 'xbHhOFYR2Z8obJlINes';
  @Prop() private checkin!: any;
}
</script>

<style scoped>
</style>
