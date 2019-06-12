<template>
  <div>
    <button @click.stop="emitCustomEvent">{{ text }}</button>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
  },
  methods: {
    emitCustomEvent() {
      this.$emit('custom-event', 1);
    },
  },
};
</script>
