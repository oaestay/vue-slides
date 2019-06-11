<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <h2>La contraseña del Wifi</h2>
        <h3>😜</h3>
      </div>
    </div>
  </eg-transition>
</template>

<script>
import { Slide } from 'eagle.js';

export default {
  mixins: [Slide],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
