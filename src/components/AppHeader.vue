<template>
  <header>
    <h1>{{appTitle}}</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => {
    return {
      appTitle: 'pour.no'
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  font-family: monospace;
}
</style>
