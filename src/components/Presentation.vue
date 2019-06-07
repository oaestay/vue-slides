<template>
  <div class="presentation eg-slideshow">
    <slide>
      <h1>Hola</h1>
      <p>Mundo</p>
      <eg-code-block class="eg-code-block" lang="html">
        &lt;h1&gt;Hola&lt;/h1&gt;
        &lt;p&gt;Mundo&lt;/p&gt;
      </eg-code-block>
      <eg-code-block class="eg-code-block" lang="javascript">
        export default {
          mixins: [Slideshow],
          props: {
            msg: String,
          },
        };
      </eg-code-block>
    </slide>
    <slide>
      <h1>Chao</h1>
      <p>Mundo</p>
    </slide>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js';

export default {
  mixins: [Slideshow],
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
