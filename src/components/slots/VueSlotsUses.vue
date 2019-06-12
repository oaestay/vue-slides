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

&#x3C;collapsible&#x3E;
  &#x3C;template
    v-slot:trigger=&#x22;{ toggled, toggleCollapsible }&#x22;&#x3E;
    &#x3C;a
      href=&#x22;#&#x22;
      @click=&#x22;toggleCollapsible&#x22;
    &#x3E;<span v-pre>{{ toggled ? &#x27;&#x1F356;&#x27; : &#x27;&#x1F369;&#x27; }}</span>&#x3C;/a&#x3E;
  &#x3C;/template&#x3E;
  &#x3C;ul&#x3E;
    &#x3C;li&#x3E;&#x1F354;&#x3C;/li&#x3E;
    &#x3C;li&#x3E;&#x1F355;&#x3C;/li&#x3E;
    &#x3C;li&#x3E;&#x1F35F;&#x3C;/li&#x3E;
  &#x3C;/ul&#x3E;
&#x3C;/collapsible&#x3E;
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
            <collapsible>
              <template
                v-slot:trigger="{ toggled, toggleCollapsible }">
                <a
                  href="#"
                  @click.stop="toggleCollapsible"
                >{{ toggled ? '🍖' : '🍩' }}</a>
              </template>
              <ul>
                <li>🍔</li>
                <li>🍕</li>
                <li>🍟</li>
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
