<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <div class="fintual__container">
          <img class="fintual__logo" src="@/assets/img/logo_fintual.svg">
          <a class="fintual__url" target="#" href="https://fintual.cl/">https://fintual.cl/</a>
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
<style lang="scss" scoped>
.eg-slideshow .fintual {
  &__container {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  &__logo {
    width: 500px;
    margin: 50px;
  }
}
</style>
