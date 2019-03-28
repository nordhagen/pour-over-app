<template>
  <section class="brew-guide">
    <h2>Brewing {{this.$store.state.volume}} ml of coffee</h2>
    <volume-input></volume-input>
    <ratio-input v-show="showEditRatio"></ratio-input>
    <grind-instruction v-on:edit:ratio="editRatio" ></grind-instruction>
  </section>
</template>

<script>
  import VolumeInput from '../components/VolumeInput'
  import GrindInstruction from '../components/GrindInstruction'
  import RatioInput from '../components/RatioInput'

  export default {
    name: 'BrewGuide',
    components: {
      VolumeInput,
      GrindInstruction,
      RatioInput
    },
    data: () => ({
      showEditRatio: false
    }),
    methods: {
      editRatio(){
        this.showEditRatio = !this.showEditRatio
      }
    }
  }
</script>

<style lang="postcss">
  h1 {
    font-family: sans-serif;
  }
  .brew-guide input {
    font-family: sans-serif;
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 1rem;
    margin: 0.5rem 0;
  }
</style>
