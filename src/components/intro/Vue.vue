<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <div class="vue__container">
          <img class="vue__logo" src="@/assets/img/logo_vue.svg">
          <div class="vue__steps">
            <p>Approachable</p>
            <p>Versatile</p>
            <p>Performant</p>
          </div>
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
.eg-slideshow .vue {
  &__container {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    left: 0;
    padding: 50px;
    position: absolute;
    right: 0;
    top: 0;
  }

  &__logo {
    width: 500px;
  }
}
</style>
