<template>
  <section class="brew-step">
    <h2>How much coffee are you brewing?</h2>
    <div class="button-container">
      <button class="amount-button" @click="setBrewVolume(200)">1 cup/200 ml</button>
      <button class="amount-button" @click="setBrewVolume(400)">2 cups/400 ml</button>
      <button class="amount-button" @click="setBrewVolume(600)">3 cups/600 ml</button>
      <button class="amount-button" @click="setBrewVolume(500)">1/2 liter</button>
      <button class="amount-button" @click="setBrewVolume(1000)">1 liter</button>
    </div>
    <nav class="bottom-nav"><button class="btn next-btn"><span class="btn-label">Continue</span></button></nav>
  </section>
</template>

<script>
export default {
  name: "BrewAmountStep",
  computed: {
    volume: () => this.$store.state.volume
  },
  methods: {
    setBrewVolume(volume){
      this.$store.commit('updateBrewVolume', volume)
    }
  }
};
</script>

<style lang="postcss" scoped>

.button-container {
  text-align: center;
}
.amount-button {
  background: #eee;
  border: none;
  border-radius: 0;
  width: 100px;
  padding: 15px;
  margin-bottom: 10px;
  height: 100px;
}
</style>