<template>
<div class="coffee-amount">
    <p class="instruction">
      Grind {{coffeeAmount}} grams of beans, based on a 1:15 ratio (<button class="text-button">change</button>)</p>
    </p>
    <input type="text" id="ratio" v-bind:value="defaultRatio">
</div>
</template>

<script>
export default {
  name: "CoffeeAmountStep",
  data: () => {
    return {
      defaultRatio: '1:15'
    };
  }
};
</script>