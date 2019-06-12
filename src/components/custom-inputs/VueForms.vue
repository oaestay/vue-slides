<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <p>Formularios</p>
        <div class="code-example">
          <div class="code-example__code" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
&lt;template&gt;
  <span v-pre>{{ myText }}</span>
  &lt;input type=&quot;text&quot; v-model=&quot;myText&quot;&gt;
  <span v-pre>{{ myNumber }}</span>
  &lt;input type=&quot;number&quot; v-model=&quot;myNumber&quot;&gt;
  <span v-pre>{{ myLongText }}</span>
  &lt;textarea v-model=&quot;myLongText&quot;&gt;&lt;/textarea&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data() {
    return {
      myText: 'Texto',
      myNumber: 1,
      myLongText: 'Texto Largo',
    };
  },
};
&lt;/script&gt;
            </eg-code-block>
          </div>
          <div class="code-example__component" @click.stop>
            <div class="input">
              {{ myText }}<br/>
              <input type="text" v-model="myText">
            </div>
            <div class="input">
              {{ myNumber }}<br/>
              <input type="number" v-model="myNumber">
            </div>
            <div class="input">
              {{ myLongText }}<br/>
              <textarea v-model="myLongText"></textarea>
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
      myNumber: 1,
      myLongText: 'Texto Largo',
      myBoolean: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
