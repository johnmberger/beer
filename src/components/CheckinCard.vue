<template>
  <v-card class="card">
    <h2>beer info</h2>
    <div class="brewery">
      <v-avatar tile>
        <img :src="checkin.brewery.brewery_label" :alt="checkin.brewery.brewery_name">
      </v-avatar>
      <div>
        <h3>{{ checkin.brewery.brewery_name }}</h3>
        <span
          class="brewery-location"
        >{{ checkin.brewery.location.brewery_city }}{{ checkin.brewery.location.brewery_state ? ', ' + checkin.brewery.location.brewery_state : ''}}</span>
      </div>
    </div>
    <div class="section">
      <v-divider class="divider"></v-divider>
      <h2>where and when</h2>
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
        </v-card>-->
      </v-dialog>
      <span class="subtitle">{{ checkin.created_at | formatDate }}</span>
    </div>
    <div class="hidden-sm-and-up">
      <div class="section" v-if="checkin.rating_score || checkin.rating_comment">
        <v-divider class="divider"></v-divider>
        <h2>the scoop</h2>
        <v-tooltip top>
          <template v-slot:activator="{ on }" v-if="checkin.rating_score">
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
          <span v-if="checkin.rating_score">{{ checkin.rating_score | formatRating }}</span>
        </v-tooltip>
        <div class="comment" v-if="checkin.checkin_comment">« {{ checkin.checkin_comment }} »</div>
      </div>
    </div>

    <div class="chips section" v-if="checkin.badges.count">
      <v-divider class="divider"></v-divider>
      <h2>Badges Earned</h2>
      <v-tooltip top v-for="badge in checkin.badges.items" :key="badge.badge_id" max-width="300">
        <template v-slot:activator="{ on }">
          <v-chip v-on="on" class="chip">
            <v-avatar>
              <img :src="badge.badge_image.sm" alt="badge">
            </v-avatar>
            {{ badge.badge_name | formatBadge }}
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

<style scoped lang="scss">
.card {
  padding-top: 12px;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
}
.brewery {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 30px;
  }
  .brewery-location {
    font-size: 12px;
    font-weight: 300;
  }
}
.divider {
  margin-bottom: 6px;
}
.section {
  margin-top: 16px;
  padding-bottom: 16px;
}
.comment {
  color: dimgrey;
  font-weight: 400;
}
h2 {
  font-weight: 300;
  color: grey;
  margin-left: 4px;
}
.chips {
  padding: 0px 12px 12px;
  margin-bottom: 12px;
  text-align: center;
  .chip {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }
}
</style>
