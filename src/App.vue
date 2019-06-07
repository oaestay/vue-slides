<template>
  <div id="app">
    <Presentation/>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
