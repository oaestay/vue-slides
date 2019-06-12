<template>
  <div>
    <child-component
      text="Botón"
      @custom-event="handleCustomEvent"
    />
    <p :class="{ toggled }">Párrafo</p>
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';

export default {
  data() {
    return {
      toggled: false,
    };
  },
  components: {
    ChildComponent,
  },
  methods: {
    handleCustomEvent() {
      this.toggled = !this.toggled;
    },
  },
};
</script>
<style>
p.toggled {
  color: red;
}
</style>
