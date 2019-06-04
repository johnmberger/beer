<template>
  <v-card class="stat-card">
    <div class="stat-card-title">
      <h1 class="title-copy">styles i've tried</h1>
      <v-icon color="grey" medium>fas fa-chart-bar</v-icon>
    </div>
    <div class="tables" v-if="styleCount.length">
      <div class="table-wrapper">
        <h2 class="most">most</h2>
        <div class="table most">
          <div v-for="style in styleCount.slice(0, 10)" :key="style.name" class="counter">
            <h4>{{ style.name }}</h4>
            <span class="num-times">{{ style.count }} times</span>
          </div>
        </div>
      </div>

      <div class="table-wrapper">
        <h2 class="least">least</h2>
        <div class="table least">
          <div
            class="counter"
            v-for="style in styleCount.slice(Math.max(styleCount.length - 10, 1))"
            :key="style.name"
          >
            <h4>{{ style.name }}</h4>
            <span class="num-times">{{ style.count }} time</span>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters(['styleCount']),
  },
})
export default class StylesTried extends Vue {}
</script>

<style lang="scss" scoped>
.stat-card {
  margin: 24px;
  margin-top: 28px;

  .stat-card-title {
    padding-top: 16px;
    margin-left: 32px;
    margin-right: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .title-copy {
      font-weight: 400;
      color: grey;
    }
  }
}

.tables {
  display: flex;
  flex-direction: row;
  padding: 16px;

  .table-wrapper {
    width: 50%;
    padding: 16px;

    .table {
      height: calc(100% - 32px);
      padding: 16px;
      &.most {
        border: 1px solid #f72047;
      }
      &.least {
        border: 1px solid #1feaea;
      }
      .counter {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 8px;
        margin-bottom: 12px;
        flex-wrap: wrap;

        .num-times {
          color: grey;
          font-size: 12px;
          font-weight: 300;
          margin-left: 16px;
          margin-top: 3px;
        }
      }
    }
  }
}

h2 {
  text-align: left;
  font-weight: 400;
  font-size: 26px;
  color: grey;

  &.most {
    color: #f72047;
  }
  &.least {
    color: #1feaea;
  }
}
h4 {
  font-size: 20px;
  line-height: 20px;
  text-align: left;
}

@media (max-width: 1263px) {
  h2 {
    font-size: 24px;
  }
  h4 {
    font-size: 18px;
  }
}

@media (max-width: 750px) {
  h2 {
    font-size: 20px;
  }
  h4 {
    font-size: 14px;
  }
  .tables {
    display: flex;
    flex-direction: column;
    padding: 16px;

    .table-wrapper {
      width: 100%;
      padding: 16px;
    }
  }
}

@media (max-width: 500px) {
  h2 {
    font-size: 24px;
  }
  h4 {
    font-size: 18px;
  }
  .tables {
    .table-wrapper {
      .table {
        .counter {
          padding-left: 2px;
          margin-bottom: 8px;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          .num-times {
            margin-left: 2px;
          }
        }
      }
    }
  }
}

@media (max-width: 450px) {
  h2 {
    font-size: 17px;
  }
  h4 {
    font-size: 14px;
  }
  .stat-card {
    .stat-card-title {
      .title-copy {
        font-size: 18px;
      }
    }
  }
}
</style>
