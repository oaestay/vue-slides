<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <div class="code-example">
          <div class="code-example__code" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
&#x3C;collapsible&#x3E;
  &#x3C;ul&#x3E;
    &#x3C;li&#x3E;&#x1F34A;&#x3C;/li&#x3E;
    &#x3C;li&#x3E;&#x1F34E;&#x3C;/li&#x3E;
    &#x3C;li&#x3E;&#x1F34D;&#x3C;/li&#x3E;
  &#x3C;/ul&#x3E;
&#x3C;/collapsible&#x3E;

./path/Collapsible.vue

&#x3C;template&#x3E;
  &#x3C;div class=&#x22;collapsible&#x22;&#x3E;
    &#x3C;div class=&#x22;collapsible__trigger&#x22;&#x3E;
      &#x3C;slot
        name=&#x22;trigger&#x22;
        :toggled=&#x22;toggled&#x22;
        :toggleCollapsible=&#x22;toggleCollapsible&#x22;
      &#x3E;
        &#x3C;div
          @click=&#x22;toggleCollapsible&#x22;&#x3E;
            <span v-pre>{{ toggled ? 'Ocultar' : 'Mostrar' }}</span>
        &#x3C;/div&#x3E;
      &#x3C;/slot&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div
      class=&#x22;collapsible__content&#x22;
      :class=&#x22;{ &#x27;collapsible__content--toggled&#x27;: toggled }&#x22;&#x3E;
      &#x3C;slot&#x3E;&#x3C;/slot&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
  data() {
    return {
      toggled: false,
    };
  },
  methods: {
    toggleCollapsible() {
      this.toggled = !this.toggled;
    },
  },
};
&#x3C;/script&#x3E;
            </eg-code-block>
          </div>
          <div class="code-example__component" @click.stop>
            <p class="code-example__filename">examples/Collapsible.vue</p>
            <collapsible>
              <ul>
                <li>🍊</li>
                <li>🍎</li>
                <li>🍍</li>
              </ul>
            </collapsible>
          </div>
        </div>
      </div>
    </div>
  </eg-transition>
</template>

<script>
import { Slide } from 'eagle.js';
import Collapsible from '@/components/examples/Collapsible.vue';

export default {
  mixins: [Slide],
  components: {
    Collapsible,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
