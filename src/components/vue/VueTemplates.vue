<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <p>Templates</p>
        <div class="code-example">
          <div class="code-example__code" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;<span v-pre>{{ myText }}</span>&lt;/p&gt;
    &lt;p&gt;<span v-pre>{{ `${myText} con algo más` }}</span>&lt;/p&gt;
    &lt;p&gt;<span v-pre>{{ `1 + 10 = ${1 + 10}` }}</span>&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data() {
    return {
      myText: 'Texto',
    };
  },
};
&lt;/script&gt;
            </eg-code-block>
          </div>
          <div class="code-example__component" @click.stop>
            <p>{{ myText }}</p>
            <p>{{ `${myText} con algo más` }}</p>
            <p>{{ `1 + 10 = ${1 + 10}` }}</p>
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
      myText: 'Texto',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
