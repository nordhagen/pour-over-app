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
  display:grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-column-start: 4;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 300px;
}
.amount-button {
  background:none;
  border: 1px solid #888;
  border-radius: 10px;
  width: 100px;
  padding: 15px;
  height: 100px;
  color: #eee;
  outline: none;
}
.amount-button:focus, .amount-button:hover {
  border-color: #eee;
}
</style>