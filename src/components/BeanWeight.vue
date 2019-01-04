<template>
<div class="bean-weight">
    <p class="instruction">
      Grind grams of beans, based on a {{ratio}}:1 ratio (<button class="text-button">change</button>)
    </p>
    <input type="text" id="ratio" v-bind:value="beanWeight">
</div>
</template>

<script>
export default {
  name: "BeanWeight",
  props: {
    brewVolume:Number,
    ratio:Number
  },
  data() {
    return {
      beanWeight: Math.round(this.brewVolume / this.ratio)
    }
  }
};
</script>