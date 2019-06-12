<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <p>Eventos</p>
        <div class="code-example">
          <div class="code-example__code" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;<span v-pre>{{ number }}</span>&lt;/p&gt;
    &lt;button @click=&quot;add&quot;&gt;Incrementa&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add() { this.number = this.number + 1; },
  },
};
&lt;/script&gt;
            </eg-code-block>
          </div>
          <div class="code-example__component" @click.stop>
            <p>{{ number }}</p>
            <button @click.stop="add">Incrementa</button>
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
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add() {
      this.number = this.number + 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
