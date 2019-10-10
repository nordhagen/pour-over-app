<template>
<div v-bind:class="{callout:true, ratio:true, visible:isVisible}">
  <label for="ratio">Enter the ratio of water to coffee (e.g. "15" for 15 ml of water for every 1 gram of coffee)</label>
  <input type="number" id="ratio" @input="updateRatio" v-bind:value="ratio">
</div>
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