<template>
  <div class="loader-wrapper">
    <div class="loader-container">
      <div class="mug">
        <div class="beer"></div>
      </div>
      <div class="bubble"></div>
      <div class="small-bubbles"></div>
      <div class="drip"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BeerLoader extends Vue {}
</script>

<style scoped lang="scss">
$mug: grey;
$beer: #ffd36d;
$bubble: darken(#ffd36d, 10%);

@mixin size($w: 100%, $h: 100%) {
  width: $w;
  height: $h;
}

.loader-wrapper {
  padding: 60px 20px 20px 30px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 5px;
}

.loader-container {
  position: relative;
}

.beer,
.bubble,
.small-bubbles,
.drip {
  position: absolute;
}

.bubble,
.small-bubbles,
.drip {
  background: ghostwhite;
}

.bubble,
.small-bubbles {
  border-radius: 100%;
}

.mug {
  position: relative;
  @include size(20vmin, 32vmin);
  background: $mug;
  border-radius: 2vmin;
  &:before,
  &:after {
    position: absolute;
    content: '';
  }
  &:before {
    z-index: -2;
    left: 12vmin;
    top: 6vmin;
    @include size(15vmin, 17vmin);
    border-radius: 19%;
    background: $mug;
  }
  &:after {
    z-index: -1;
    @include size(12vmin, 13vmin);
    top: 8vmin;
    left: 13vmin;
    background: grey;
    border-radius: 19%;
  }
}

.beer {
  top: 2vmin;
  left: 2vmin;
  @include size(16vmin, 28vmin);
  background: $beer;
  border-radius: 1vmin;
  &:before,
  &:after {
    position: absolute;
    content: '';
    background: $bubble;
    border-radius: 100%;
  }
  &:before {
    animation: 4s up infinite;
    @include size(2vmin, 2vmin);
    bottom: 2vmin;
    left: 5vmin;
    box-shadow: 7vmin -15vmin 0 $bubble, 4vmin -10vmin 0 $bubble,
      6vmin -3vmin 0 $bubble;
  }
  &:after {
    animation: 2s up infinite;
    @include size(1.5vmin, 1.5vmin);
    bottom: 6vmin;
    left: 7vmin;
    box-shadow: -3vmin -8vmin 0 $bubble, 7vmin -5vmin 0 $bubble;
  }
}

.bubble {
  @include size(10vmin, 10vmin);
  top: -5vmin;
  left: -3vmin;
  &:before,
  &:after {
    position: absolute;
    content: '';
    background: ghostwhite;
    border-radius: 100%;
  }
  &:before {
    @include size(12vmin, 12vmin);
    left: 5vmin;
    top: -2vmin;
  }
  &:after {
    @include size(10vmin, 10vmin);
    left: 14vmin;
    top: 0vmin;
  }
}

.small-bubbles {
  @include size(5vmin, 5vmin);
  top: -7vmin;
  left: 11vmin;
  &:before,
  &:after {
    position: absolute;
    content: '';
    border-radius: 100%;
    background: ghostwhite;
  }
  &:before {
    @include size(3vmin, 3vmin);
    top: -6vmin;
    left: -3vmin;
  }
  &:after {
    @include size(3vmin, 3vmin);
    top: -8vmin;
    left: -8vmin;
  }
}

.drip {
  @include size(5vmin, 14vmin);
  top: 1vmin;
  border-radius: 100px;
  left: -2vmin;
  box-shadow: 4vmin -6vmin 0 ghostwhite;
  animation: 6s drip infinite;
}

@keyframes up {
  0% {
    transform: translateY(0px);
  }
  99% {
    transform: translateY(-70px);
  }
  100% {
    opacity: 0;
  }
}

@keyframes drip {
  0% {
    transform: translateY(0px);
  }
  100% {
    height: 25vmin;
  }
}
</style>
