<template>
  <div class="app">
    <app-header appTitle="pour.no"></app-header>
    <brew-guide></brew-guide>
  </div>
</template>

<script>
import Vue from 'vue'
import AppHeader from './containers/AppHeader'
import BrewGuide from './containers/BrewGuide'
import SettingsPanel from './components/SettingsPanel'

Vue.component('AppHeader', AppHeader)
Vue.component('BrewGuide', BrewGuide)
Vue.component('SettingsPanel', SettingsPanel)

export default {
  name: "App"
}
</script>

<style lang="postcss">

@font-face {
  font-family: 'Bhavuka Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Bhavuka Regular'), url('assets/Bhavuka-Regular.woff') format('woff');
}

* {
  box-sizing: border-box;
  font-family: "Bhavuka Regular";
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: subpixel-antialiased;
}


html, body {
  margin: 0;
}

body {
  min-height: 100vh;
  background: #202020;
  color: #eee;
}


h1, h2 {
  font-size: 36px;
  text-align: center;
  color: #888;
}

p {
  font-size: 18px;
  color: #888;
}

.highlight {
  color: #eee;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

.app {
  min-height: 100vh;
  max-width: 600px;
  position: relative;
  margin: 0 auto;
}

.txt-btn {
  background: none;
  border: none;
  color: #eee;
  font-size: inherit;
  padding: 0;
  border-bottom: 1px solid #eee;
}

.btn {
  border: none;
  background: #505050;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: relative;
}

.btn:after {
  color: #eee;
  position: absolute;
  top: 24px;
  left: 9px;
  font-size: 20px;
  line-height: 0;
}

.btn-label {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -24px);
  color: #eee;
  font-size: 14px;
}

.next-btn:after {
  content: "↓"
}

.bottom-nav {
  position:absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>