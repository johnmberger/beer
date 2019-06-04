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
$bubble: darken(#ffd36d, 15%);

@mixin size($w: 100%, $h: 100%) {
  width: $w;
  height: $h;
}

.loader-wrapper {
  padding: 45px 38px 20px 40px;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

.loader-container {
  position: relative;
  max-width: 200px;
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
  @include size(36px, 60px);
  background: $mug;
  border-radius: 4px;
  &:before,
  &:after {
    position: absolute;
    content: '';
  }
  &:before {
    z-index: -2;
    left: 24px;
    top: 12px;
    @include size(30px, 34px);
    border-radius: 19%;
    background: $mug;
  }
  &:after {
    z-index: -1;
    @include size(24px, 26px);
    top: 8px;
    left: 13px;
    background: lightgrey;
    border-radius: 19%;
  }
}

.beer {
  top: 2px;
  left: 2px;
  @include size(32px, 56px);
  background: $beer;
  border-radius: 2px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    background: $bubble;
    border-radius: 100%;
  }
  &:before {
    animation: 2s up infinite;
    @include size(4px, 4px);
    bottom: 4px;
    left: 10px;
    box-shadow: 14px -30px 0 $bubble, 8px -20px 0 $bubble, 12px -6px 0 $bubble;
  }
  &:after {
    animation: 1.3s up infinite;
    @include size(3px, 3px);
    bottom: 12px;
    left: 14px;
    box-shadow: -6px -16px 0 $bubble, 14px -10px 0 $bubble;
  }
}

.bubble {
  @include size(20px, 20px);
  top: -10px;
  left: -6px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    background: ghostwhite;
    border-radius: 100%;
  }
  &:before {
    @include size(24px, 24px);
    left: 10px;
    top: -4px;
  }
  &:after {
    @include size(20px, 20px);
    left: 28px;
    top: 0px;
  }
}

.small-bubbles {
  // @include size(15px, 15px);
  top: -14px;
  left: 22px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    border-radius: 100%;
    background: ghostwhite;
  }
  &:before {
    @include size(6px, 6px);
    top: -12px;
    left: -6px;
  }
  &:after {
    @include size(6px, 6px);
    top: -16px;
    left: -16px;
  }
  animation: 2s bubble infinite;
}

.drip {
  @include size(6px, 9px);
  top: 2px;
  border-radius: 40px;
  left: -2px;
  box-shadow: 8px -12px 0 ghostwhite;
  animation: 3s drip infinite;
}

@keyframes up {
  0% {
    transform: translateY(0px);
  }
  99% {
    transform: translateY(-40px);
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
    height: 30px;
  }
}
@keyframes bubble {
  0% {
    transform: translateY(0px);
  }
  99% {
    transform: translateY(-10px);
  }
  100% {
    opacity: 0;
  }
}
</style>
