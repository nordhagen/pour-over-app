<template>
  <form action class="brew-volume">
    <span for="brew-volume">To brew</span>
    <input type="number" id="brew-volume" :value="volume" @input="updateVolume">
    ml of coffee, grind <span class="value">{{beanWeight}}</span> 
    grams of beans, based on a {{ratio}}:1 ratio 
    (<button v-on:click.prevent="$emit('edit:ratio')" class="text-button">
      change
    </button>)
  </form>
</template>

<script>
export default {
  name: "SetupForm",
  computed: {
    volume(){
      return this.$store.state.volume;
    },
    beanWeight(){
      console.log(this.$store.state.beanWeight)
      return this.$store.getters.beanWeight;
    },
    ratio(){
      return this.$store.state.ratio;
    }
  },
  methods: {
    updateVolume(e){
      this.$store.commit('updateVolume', e.target.value)
    }
  }
};
</script>

<style lang="postcss">
  label, input {
    border: none;
    min-width: auto;
  }
  .value {
    font-weight: 600;
  }
  .text-button {
    appearance: none;
    border: none;
    background: none;
    font-family: sans-serif;
    font-size: 16px;
    color:#05e;
    padding: 0;
    text-decoration: underline;
  }
</style>
