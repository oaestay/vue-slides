<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <p>v-model</p>
        <div class="code-example">
          <div class="code-example__code" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
&lt;template&gt;
  <span v-pre>{{ myText }}</span>
  &lt;input
    type=&quot;text&quot;
    :value=&quot;myText&quot;
    @input=&quot;event => myText = event.target.value&quot;
  /&gt;
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
            <div class="input">
              {{ myText }}<br/>
              <input
                type="text"
                :value="myText"
                @input="event => myText = event.target.value"
              />
            </div>
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
