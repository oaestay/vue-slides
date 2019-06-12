<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <h3 v-if="step === 1">Cómo se comunican los componentes?</h3>
        <div v-if="step === 2">
          <p>Propiedades</p>
          <div class="code-container" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
&lt;my-component
  string-property=&quot;My Text&quot;
  :number-property=&quot;1&quot;
  :object-property=&quot;{ a: 1, b: 2 }&quot;
/&gt;
            </eg-code-block>
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
<style lang="scss">
</style>
