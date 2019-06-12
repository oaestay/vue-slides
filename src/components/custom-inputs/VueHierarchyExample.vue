<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <div class="code-example">
          <div class="code-example__code" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
./path/ChildComponent.vue

&lt;button @click=&quot;emitCustomEvent&quot;&gt;<span v-pre>{{ text }}</span>&lt;/button&gt;
&lt;script&gt;
export default {
  props: { text: String, },
  methods: {
    emitCustomEvent() {
      this.$emit('custom-event', 1);
    },
  },
};
&lt;/script&gt;

./path/ParentComponent.vue

&lt;child-component
  text=&quot;Bot&oacute;n&quot;
  @custom-event=&quot;handleCustomEvent&quot;
/&gt;
&lt;p :class=&quot;{ toggled }&quot;&gt;P&aacute;rrafo&lt;/p&gt; &lt;/div&gt;
&lt;script&gt;
export default {
  data() {
    return { toggled: false, };
  },
  components: { ChildComponent, },
  methods: {
    handleCustomEvent() {
      this.toggled = !this.toggled;
    },
  },
};
&lt;/script&gt;
            </eg-code-block>
          </div>
          <div class="code-example__component">
            <p class="code-example__filename">examples/ParentComponent.vue</p>
            <parent-component title="Título"/>
          </div>
        </div>
      </div>
    </div>
  </eg-transition>
</template>

<script>
import { Slide } from 'eagle.js';
import ParentComponent from '@/components/examples/ParentComponent.vue';

export default {
  mixins: [Slide],
  components: {
    ParentComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
