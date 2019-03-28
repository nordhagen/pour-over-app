import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    volume: 500,
    ratio: 15
  },
  mutations: {
    updateVolume(state, payload) {
      state.volume = payload;
    },
    updateRatio(state, payload){
      state.ratio = payload;
    }
  },
  actions: {

  },
  getters: {
    beanWeight: state => Math.round(state.volume / state.ratio)
  }
})

export default store;