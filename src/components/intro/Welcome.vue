<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <h1>Una intro a Vue (en Fintual)</h1>
        <div class="welcome-logos">
          <img class="logo" src="@/assets/img/logo_vue.svg">
          <img class="logo" src="@/assets/img/logo_fintual.svg">
        </div>
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
.eg-slideshow {
  .welcome-logos {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
  }

  .logo {
    max-width: 200px;
  }
}
</style>
