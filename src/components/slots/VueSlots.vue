<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <p>Slots</p>
        <div v-if="step === 1">
          <div class="code-example">
            <div class="code-example__code" @click.stop>
              <eg-code-block class="eg-code-block" lang="html">
./path/Modal.vue

&lt;template&gt;
  &lt;div class=&quot;modal__header&quot;&gt;
    &lt;button
      type=&quot;button&quot;
      class=&quot;base-modal__close-button&quot;
      @click=&quot;closeModal&quot;&gt;&amp;times;&lt;/button&gt;
      &lt;div class=&quot;modal__header-title&quot;&gt;
        &lt;slot name=&quot;title&quot;&gt;&lt;/slot&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;modal__content&quot;&gt;
      &lt;slot name=&quot;content&quot;&gt;&lt;/slot&gt;
    &lt;/div&gt;
    &lt;div class=&quot;modal__footer&quot;&gt;
      &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  methods: {
    closeModal() {
      ...
    },
  },
};
&lt;/script&gt;
              </eg-code-block>
            </div>
            <div class="code-example__code" @click.stop>
              <eg-code-block class="eg-code-block" lang="html">
&lt;modal&gt;
  &lt;template #title&gt;
    &lt;h1&gt;T&iacute;tulo&lt;/h1&gt;
  &lt;/template&gt;
  &lt;template v-slot:content&gt;
    &lt;ul&gt;
      &lt;li&gt;🍊&lt;/li&gt;
      &lt;li&gt;🍎&lt;/li&gt;
      &lt;li&gt;🍍&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/template&gt;
  &lt;template #footer&gt;
    &lt;p&gt;Footer &copy;&lt;/p&gt;
  &lt;/template&gt;
&lt;/modal&gt;
              </eg-code-block>
            </div>
          </div>
        </div>
        <div v-if="step === 2">
          <div class="code-example">
            <div class="code-example__code" @click.stop>
              <eg-code-block class="eg-code-block" lang="html">
&lt;modal&gt;
  &lt;template #title&gt;
    &lt;h1&gt;T&iacute;tulo&lt;/h1&gt;
  &lt;/template&gt;
  &lt;template #content&gt;
    &lt;ul&gt;
      &lt;li&gt;🍊&lt;/li&gt;
      &lt;li&gt;🍎&lt;/li&gt;
      &lt;li&gt;🍍&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/template&gt;
  &lt;template #footer&gt;
    &lt;p&gt;Footer &copy;&lt;/p&gt;
  &lt;/template&gt;
&lt;/modal&gt;
              </eg-code-block>
            </div>
            <div class="code-example__code" @click.stop>
              <eg-code-block class="eg-code-block" lang="html">
&lt;modal&gt;
  &lt;template #title&gt;
    &lt;h6&gt;T&iacute;tulo chico&lt;/h6&gt;
  &lt;/template&gt;
  &lt;template #content&gt;
    &lt;p&gt;Texto&lt;/p&gt;
    &lt;img src=&quot;./path/img.png&quot; /&gt;
  &lt;/template&gt;
&lt;/modal&gt;
              </eg-code-block>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
