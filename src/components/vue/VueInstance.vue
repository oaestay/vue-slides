<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <h3>La instancia de Vue</h3>
        <div class="code-container" @click.stop>
         <eg-code-block class="eg-code-block" lang="html">
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;
&lt;div id="my-app"&gt;&lt;/div&gt;
&lt;script&gt;
  const vm = new Vue({
    el: '#my-app'
  })
&lt;/script&gt;
          </eg-code-block>
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
</style>
