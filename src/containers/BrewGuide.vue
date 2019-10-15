<template>
  <section class="brew-guide">
    <!--<brew-amount-step></brew-amount-step>-->
    <grind-boil-step></grind-boil-step>
  </section>
</template>

<script>
  import BrewAmountStep from '../components/BrewAmountStep'
  import GrindBoilStep from '../components/GrindBoilStep'

  export default {
    name: 'BrewGuide',
    components: {
      BrewAmountStep,
      GrindBoilStep
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
.brew-guide {
  width: 100%;
}

.brew-guide p, .brew-guide h2 {
  text-align: center;
}

.brew-guide h2 {
  padding: 0 40px;
}

.brew-guide p {
  padding: 0 100px;
}

.brew-step {
  position: absolute;
  top: 20px;
  width: 100%;
  padding-top: 120px;
  height: 100%;
}
</style>