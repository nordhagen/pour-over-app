<template>
  <section class="brew-guide">
    <brew-volume v-bind:brew-volume="brewVolume"></brew-volume>
    <bean-weight v-bind:ratio="ratio" v-bind:brew-volume="brewVolume"></bean-weight>
  </section>
</template>

<script>
  import BrewVolume from '../components/BrewVolume'
  import BeanWeight from '../components/BeanWeight'

  export default {
    name: 'BrewGuide',
    data() {
      return {
        brewVolume: 500,
        ratio: 15
      }
    },
    components: {
      BrewVolume,
      BeanWeight
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
    padding: 1rem 2rem;
    margin: 0.5rem 0;
  }
</style>
