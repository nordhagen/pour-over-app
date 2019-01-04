<template>
  <section class="brew-guide">

    <h2>Brewing {{brewVolume}} ml of coffee</h2>
    
    <brew-volume
      v-bind:brewVolume.sync="brewVolume"
      v-on:update:brewVolume="computeBeanWeight"
    ></brew-volume>
    
    <water-to-coffee-ratio
      v-bind:ratio.sync="ratio"
      v-on:update:ratio="computeBeanWeight"
    ></water-to-coffee-ratio>
    
    <bean-weight v-bind:beanWeight="beanWeight" v-bind:ratio="ratio"></bean-weight>
  </section>
</template>

<script>
  import BrewVolume from '../components/BrewVolume'
  import BeanWeight from '../components/BeanWeight'
  import WaterToCoffeeRatio from '../components/WaterToCoffeeRatio'

  export default {
    name: 'BrewGuide',
    data() {
      return {
        brewVolume: 500,
        beanWeight: 0,
        ratio: 15
      }
    },
    components: {
      BrewVolume,
      BeanWeight,
      WaterToCoffeeRatio
    },
    methods: {
      computeBeanWeight(){
        this.beanWeight = Math.round(this.brewVolume / this.ratio)
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
