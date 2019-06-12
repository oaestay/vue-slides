<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <div class="fintual-chart__video-container">
          <video class="fintual-chart__video" controls autoplay loop>
            <source src="@/assets/videos/modal.mp4" type="video/mp4">
          </video>
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
.fintual-chart {
  &__video-container {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }

  &__video {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
