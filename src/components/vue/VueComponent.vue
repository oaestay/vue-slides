<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <p>Un componente</p>
        <div class="code-container" @click.stop>
         <eg-code-block class="eg-code-block" lang="html">
&lt;template&gt;
  &lt;div class="my-class"&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  props: {
    text: String,
  },
  data() {
    return {
      number: 1,
    };
  },
  computed: {
    myComputedProperty() {
      return this.number - 1;
    },
  },
  methods: {
    myMethod() {
      this.number = this.number + 1;
    },
  },
};
&lt;/script&gt;
&lt;style&gt;
&lt;/style&gt;
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
