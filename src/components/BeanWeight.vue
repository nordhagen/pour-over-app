<template>
  <p class="bean-weight">
    Grind <span class="value">{{beanWeight}}</span> grams of beans, based on a {{ratio}}:1 ratio (<button class="text-button">change</button>)
  </p>
</template>

<script>
export default {
  name: "BeanWeight",
  props: {
    beanWeight:Number,
    ratio:Number
  }
};
</script>

<style lang="postcss" scoped>
.value {
  font-weight: 600;
}
</style>
