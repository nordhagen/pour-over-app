<template>
  <p class="bean-weight">
    Grind <span class="value">{{beanWeight}}</span> grams of beans, based on a {{ratio}}:1 ratio (<button v-on:click="$emit('edit:ratio')" class="text-button">change</button>)
  </p>
</template>

<script>
export default {
  name: "GrindInstruction",
  computed: {
    beanWeight(){
      console.log(this.$store.state.beanWeight)
      return this.$store.getters.beanWeight;
    },
    ratio(){
      return this.$store.state.ratio;
    }
  }
};
</script>

<style lang="postcss" scoped>
.value {
  font-weight: 600;
}
</style>
