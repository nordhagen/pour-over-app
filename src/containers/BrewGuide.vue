<template>
  <section class="brew-guide">
    <!-- <h2>Brewing {{this.$store.state.volume}} ml of coffee</h2> -->
    <setup-form v-on:edit:ratio="toggleEditRatio"></setup-form>
    <ratio-input v-show="showEditRatio"></ratio-input>
  </section>
</template>

<script>
  import SetupForm from '../components/SetupForm'
  import RatioInput from '../components/RatioInput'

  export default {
    name: 'BrewGuide',
    components: {
      SetupForm,
      RatioInput
    },
    data: () => ({
      showEditRatio: false
    }),
    methods: {
      toggleEditRatio(){
        this.showEditRatio = !this.showEditRatio
      }
    }
  }
</script>

<style lang="postcss">
  h1 {
    font-family: sans-serif;
  }
  .brew-guide, input {
    font-family: sans-serif;
    font-size: 16px;
  }
</style>
