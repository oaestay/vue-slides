<template>
  <eg-transition :enter='enter' :leave='leave'>
    <div class="eg-slide" v-if='active'>
      <div class="eg-slide-content">
        <p>Mi primer input</p>
        <div class="code-example">
          <div class="code-example__code" @click.stop>
            <eg-code-block class="eg-code-block" lang="html">
&lt;useless-input v-model=&quot;myString&quot; /&gt;
Fuera del input: <span v-pre>{{ myString }}</span>
&lt;script&gt;
export default {
  data() { return { myString: 'aeiou', }; },
};
&lt;/script&gt;

...
./path/UselessInput.vue
<span v-pre>{{ dirtyValue }}</span>
&lt;button @click=&quot;() =&gt; handleKey('a')&quot;&gt;A&lt;/button&gt;
&lt;button @click=&quot;() =&gt; handleKey('e')&quot;&gt;E&lt;/button&gt;
&lt;button @click=&quot;() =&gt; handleKey('i')&quot;&gt;I&lt;/button&gt;
&lt;button @click=&quot;() =&gt; handleKey('o')&quot;&gt;O&lt;/button&gt;
&lt;button @click=&quot;() =&gt; handleKey('u')&quot;&gt;U&lt;/button&gt;
&lt;script&gt;
export default {
  props: { value: String, },
  data() { return { dirtyValue: this.value, }; },
  methods: {
    handleKey(key) {
      this.dirtyValue = `${this.dirtyValue}${key}`;
      this.$emit('input', this.dirtyValue);
    },
  },
};
&lt;/script&gt;
            </eg-code-block>
          </div>
          <div class="code-example__component" @click.stop>
            <p class="code-example__filename">examples/UselessInput.vue</p>
            <useless-input v-model="myString" /><br>
            Fuera del input: {{ myString }}
          </div>
        </div>
      </div>
    </div>
  </eg-transition>
</template>

<script>
import { Slide } from 'eagle.js';
import UselessInput from '@/components/examples/UselessInput.vue';

export default {
  mixins: [Slide],
  components: {
    UselessInput,
  },
  data() {
    return {
      myString: 'aeiou',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
