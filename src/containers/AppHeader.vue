<template>
  <header>
    <h1 class="sr-only">{{appTitle}}</h1>
    <nav><button @click="showSettings" class="btn settings-btn"><span class="sr-only">Settings</span></button></nav>
  </header>
</template>

<script>
  import { bus } from '../bus.js'
  export default {
    name: 'AppHeader',
    props: {
      appTitle: String
    },
    methods: {
      showSettings () {
        bus.$emit('show:settings')
      }
    }
  }
</script>

<style lang="postcss" scoped>
header {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
}
.settings-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
.settings-btn:after {
  content: "⚙️";
}
</style>