<template>
<div v-bind:class="{callout:true, ratio:true, visible:isVisible}">
  <label for="ratio">Enter the ratio of water to coffee (e.g. "15" for 15 ml of water for every 1 gram of coffee)</label>
  <input type="number" id="ratio" @input="notify" v-bind:value="ratio">
</div>
</template>

<script>
export default {
  name: "RatioInput",
  props: { isVisible: true },
  computed: {
    ratio(){
      return this.$store.state.ratio;
    }
  },
  methods: {
    ready(){
      events.$on('update:ratio', () => {
        console.log('foo')
        this.isVisible = !this.isVisible
      })
    },
    notify(e){
      this.$store.dispatch('updateRatio', {
        ratio: parseInt(e.target.value, 10)
      })
    },
    show() {
      
    }
  }
};
</script>

<style lang="postcss" scoped>
.callout {
  display: block;

}
.callout.visible {
  display:block;
}
</style>
