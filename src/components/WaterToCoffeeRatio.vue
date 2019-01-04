<template>
<div class="callout ratio">
  <label for="ratio">Enter the ratio of water to coffee (e.g. "15" for 15 ml of water for every 1 gram of coffee)</label>
  <input type="number" id="ratio" @input="notify" v-bind:value="ratio">
</div>
</template>

<script>
export default {
  name: "WaterToCoffeeRatio",
  props: {
    ratio:Number
  },
  methods: {
    notify(e){
      this.$emit('update:ratio', parseInt(e.target.value, 10))
    }
  }
};
</script>