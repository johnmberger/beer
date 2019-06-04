<template>
  <div class="home">
    Welcome to BEER
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Landing extends Vue {}
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
