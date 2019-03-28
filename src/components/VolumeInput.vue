<template>
  <form action class="brew-volume">
    <label for="brew-volume">How much would you like to brew (ml)?</label>
    <input type="number" id="brew-volume" :value="volume" @input="updateVolume">
  </form>
</template>

<script>
export default {
  name: "VolumeInput",
  computed: {
    volume(){
      return this.$store.state.volume;
    }
  },
  methods: {
    updateVolume(e){
      this.$store.commit('updateVolume', e.target.value)
    }
  }
};
</script>