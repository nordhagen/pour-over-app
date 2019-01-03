<template>
  <div>
    <app-header></app-header>
    <brew-guide></brew-guide>
  </div>
</template>

<script>
import Vue from 'vue'
import AppHeader from './containers/AppHeader'
import BrewGuide from './containers/BrewGuide'

Vue.component('AppHeader', AppHeader)
Vue.component('BrewGuide', BrewGuide)

export default {
  name: "App"
}

</script>
