<template>
  <div class="collapsible">
    <div class="collapsible__trigger">
      <slot
        name="trigger"
        :toggled="toggled"
        :toggleCollapsible="toggleCollapsible"
      >
        <div @click.stop="toggleCollapsible">{{ toggled ? 'Ocultar' : 'Mostrar' }}</div>
      </slot>
    </div>
    <div
      class="collapsible__content"
      :class="{ 'collapsible__content--toggled': toggled }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
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
</script>
<style lang="scss">
.collapsible {
  &__trigger {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;

    &:hover {
      background-color: #ccc;
    }
  }

  &__content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;

    &--toggled {
      display: block;
    }
  }
}
</style>
