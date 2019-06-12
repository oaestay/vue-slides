<template>
  <div class="useless-input">
    <div class="useless-input__value">{{ dirtyValue }}</div>
    <div class="useless-input__buttons-panel">
      <button @click.stop="() => handleKey('a')">A</button>
      <button @click.stop="() => handleKey('e')">E</button>
      <button @click.stop="() => handleKey('i')">I</button>
      <button @click.stop="() => handleKey('o')">O</button>
      <button @click.stop="() => handleKey('u')">U</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      dirtyValue: this.cleanString(this.value),
    };
  },
  methods: {
    cleanString(string) {
      return string.replace(/([^aeiou]+)/gi, '');
    },
    handleKey(key) {
      this.dirtyValue = `${this.dirtyValue}${key}`;
      this.$emit('input', this.dirtyValue);
    },
  },
};
</script>
<style lang="scss">
.useless-input {
  &__value {
    border-bottom: solid 1px lightgray;
    margin: 0 15px 15px;
    padding-bottom: 15px;
  }

  &__buttons-panel {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
  }
}
</style>
