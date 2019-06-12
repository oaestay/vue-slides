<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <div class="code-example">
          <div class="code-example__code" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
&lt;my-counter title=&quot;T&iacute;tulo&quot;/&gt;

...
&lt;template&gt;
  &lt;div&gt;
    &lt;h6&gt;<span v-pre>{{ title }}</span>&lt;/h6&gt;
    &lt;p&gt;<span v-pre>{{ counterDescription }}</span>&lt;/p&gt;
    &lt;button @click=&quot;add&quot;&gt;Incrementa&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  props: {
    title: String,
  },
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    counterDescription() {
      if (this.number === 0) {
        return
      }
      return `El n&uacute;mero antes era ${this.number - 1}`;
    },
  },
  methods: {
    add() { this.number = this.number + 1; },
  },
};
&lt;/script&gt;
            </eg-code-block>
          </div>
          <div class="code-example__component" @click.stop>
            <p class="code-example__filename">examples/MyCounter.vue</p>
            <my-counter title="Título"/>
          </div>
        </div>
      </div>
    </div>
  </eg-transition>
</template>

<script>
import { Slide } from 'eagle.js';

import MyCounter from '@/components/examples/MyCounter.vue';

export default {
  mixins: [Slide],
  components: {
    MyCounter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
