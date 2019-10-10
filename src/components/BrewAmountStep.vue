<template>
  <section class="brew-step">
    <h2>How much coffee are you brewing?</h2>
    <nav class="bottom-nav"><button class="btn next-btn"><span class="btn-label">Continue</span></button></nav>
  </section>
</template>

<script>
export default {
  name: "BrewAmountStep",
  computed: {
    volume(){
      return this.$store.state.volume;
    },
    beanWeight(){
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