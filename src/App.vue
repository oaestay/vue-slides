<template>
  <div id="app">
    <Presentation />
  </div>
</template>
<script>
import Presentation from './components/Presentation.vue';

export default {
  name: 'app',
  components: {
    Presentation,
  },
};
</script>

<style lang="scss">
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
