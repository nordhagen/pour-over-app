<template>
  <section class="brew-step">
    <h2>Grind <span class="highlight">{{beanWeight}} grams</span> of beans and boil <span class="highlight">{{boilVolume}} ml</span> of water to make {{brewVolume}} ml of coffee</h2>
    <p>Based on a {{ratio}}:1 ratio and {{rinseWaterVolume}} ml to rinse filter. <button class="txt-btn">Change</button></p>
    <nav class="bottom-nav"><button class="btn next-btn"><span class="btn-label">Continue</span></button></nav>
  </section>
</template>

<script>
export default {
  name: "GrindBoilStep",
  computed: {
    brewVolume(){
      return this.$store.state.brewVolume;
    },
    boilVolume(){
      return this.$store.getters.boilVolume;
    },
    beanWeight(){
      return this.$store.getters.beanWeight;
    },
    rinseWaterVolume(){
      return this.$store.state.rinseWaterVolume;
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