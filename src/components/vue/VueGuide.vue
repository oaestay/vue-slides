<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <div class="vue__container">
          <img class="vue__logo" src="@/assets/img/logo_vue.svg">
          <a class="vue__url" target="#" href="https://vuejs.org/v2/guide/">https://vuejs.org/v2/guide/</a>
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
