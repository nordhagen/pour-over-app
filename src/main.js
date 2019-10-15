import Vue from 'vue'
import App from './App'
import store from './Store'
import './global.css'
import 'normalize.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  methods: {
    resize: function() {
      document.body.style = `height: ${window.innerHeight}px`
    }
  },
  created: function() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  render: h => h(App),
  store
})
