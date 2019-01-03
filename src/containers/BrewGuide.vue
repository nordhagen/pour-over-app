<template>
  <section class="brew-guide">
    <brew-amount-input></brew-amount-input>
    <bean-amount></bean-amount>
  </section>
</template>

<script>
  import BrewAmountInput from '../components/BrewAmountInput'
  import BeanAmount from '../components/BeanAmount'

  export default {
    name: 'BrewGuide',
    data: () => {
      return {
        defaultRatio: '1/15'
      }
    },
    components: {
      BrewAmountInput,
      BeanAmount
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
