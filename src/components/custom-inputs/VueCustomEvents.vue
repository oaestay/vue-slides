<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <h3 v-if="step === 1">Y para el otro lado?</h3>
        <div v-if="step === 2">
          <p>Eventos</p>
          <div class="code-example">
            <div class="code-example__code" @click.stop>
              <eg-code-block class="eg-code-block" lang="html">
./path/ChildComponent.vue

&lt;template&gt;
  &lt;button @click="eventTrigger"&gt;
    Botón
  &lt;/button&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data() {
    return {
      secretNumber: 1,
    };
  },
  methods: {
    eventTrigger() {
      this.$emit(
        'my-custom-event',
        this.secretNumber
      );
    },
  },
};
&lt;/script&gt;
              </eg-code-block>
            </div>
            <div class="code-example__code" @click.stop>
              <eg-code-block class="eg-code-block" lang="html">
./path/ParentComponent.vue

&lt;template&gt;
  &lt;child-component
    @my-custom-event="handleCustomEvent"
  /&gt;
&lt;/template&gt;
&lt;script&gt;
import ChildComponent from './path/ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  methods: {
    handleCustomEvent(secretNumber) {
      console.log(secretNumber);
    },
  },
};
&lt;/script&gt;
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
