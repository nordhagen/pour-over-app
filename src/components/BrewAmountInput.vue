<template>
  <form action class="brew-amount">
    <label for="brew-amount">How much would you like to brew (ml)?</label>
    <input type="text" id="brew-amount" v-bind:value="defaultAmount">
  </form>
</template>

<script>
export default {
  name: "BrewAmountInput",
  data: () => {
    return {
      defaultAmount: 500
    };
  }
};
</script>