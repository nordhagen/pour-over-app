<template>
  <header>
    <h1 class="sr-only">{{appTitle}}</h1>
    <nav><button class="btn settings-btn"><span class="sr-only">Settings</span></button></nav>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
    props: {
      appTitle: String
    }
  }
</script>

<style lang="postcss" scoped>
.settings-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
.settings-btn:after {
  content: "⚙️";
}
</style>