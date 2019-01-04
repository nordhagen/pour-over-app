<template>
  <form action class="brew-volume">
    <label for="brew-volume">How much would you like to brew (ml)?</label>
    <input type="text" id="brew-volume" v-bind:value="brewVolume">
  </form>
</template>

<script>
export default {
  name: "BrewVolume",
  props: {
    brewVolume:Number
  }
};
</script>