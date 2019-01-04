<template>
  <form action class="brew-volume">
    <label for="brew-volume">How much would you like to brew (ml)?</label>
    <input type="number" id="brew-volume" @input="notify" v-bind:value="brewVolume">
  </form>
</template>

<script>
export default {
  name: "BrewVolume",
  props: {
    brewVolume:Number
  },
  methods: {
    notify(e){
      this.$emit('update:brewVolume', parseInt(e.target.value, 10))
    }
  }
};
</script>