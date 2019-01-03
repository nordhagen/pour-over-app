<template>
  <h2>{{defaultRatio}}</h2>
</template>

<script>
  export default {
    name: 'BrewGuide',
    data: () => {
      return {
        defaultRatio: '1/15'
      }
    }
  }
</script>

<style lang="postcss" scoped>
  h1 {
    font-family: sans-serif;
  }
</style>
