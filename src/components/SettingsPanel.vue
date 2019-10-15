<template>
<article>
  <h1>Settings</h1>
  <form>
    <fieldset>
      <label for="ratio">Water to beans ratio</label>
      <input type="number" name="ratioReadout" id="ratioReadout" v-model="ratio">
      <input type="range" name="ratio" id="" v-model="ratio"  min="10" max="20" class="slider">
    </fieldset>
  </form>
</article>
</template>

<script>
export default {
  name: "SettingsPanel",
  props: { isVisible: true },
  computed: {
    ratio(){
      return this.$store.state.ratio;
    }
  },
  methods: {
    updateRatio(e){
      this.$store.dispatch('updateRatio', {
        ratio: parseInt(e.target.value, 10)
      })
    },
    show() {
      
    }
  }
};
</script>

<style scoped>
label, input {
  display: block;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: #eee;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}
.slider::-webkit-slider-thumb,
.slider::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 26px;
  height: 26px;
  background: #eee;
  cursor: pointer;
  border-radius: 12px;
}

</style>