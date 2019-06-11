<template>
  <div>
    <h6>{{ title }}</h6>
    <p>{{ counterDescription }}</p>
    <button @click.stop="add">Incrementa</button>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    counterDescription() {
      return this.number === 0 ? '' : `El número antes era ${this.number - 1}`;
    },
  },
  methods: {
    add() {
      this.number = this.number + 1;
    },
  },
};
</script>
