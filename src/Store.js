import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    brewVolume: 200,
    rinseWaterVolume: 100,
    bloomTime: 45,
    brewMethod: 'James Hoffman',
    ratio: 15
  },
  mutations: {
    updateBrewVolume(state, payload) {
      state.brewVolume = payload;
    },
    updateRinseWaterVolume(state, payload) {
      state.rinseWaterVolume = payload;
    },
    updateBloomTime(state, payload) {
      state.bloomTime = payload;
    },
    updateRatio(state, payload){
      state.ratio = payload;
    }
  },
  actions: {
    updateRatio(context, payload) {
      context.commit('updateRatio', payload.ratio)
    },
    updateBloomTime(context, payload) {
      context.commit('updateBloomTime', payload.bloomTime)
    },
    updateRinseWaterVolume(context, payload) {
      context.commit('updateRinseWaterVolume', payload.rinseWaterVolume)
    },
    updateBrewVolume(context, payload) {
      context.commit('updateBrewVolume', payload.brewVolume)
    }
  },
  getters: {
    beanWeight: state => Math.round(state.brewVolume / state.ratio),
    boilVolume: state => Math.round(state.brewVolume + state.rinseWaterVolume)
  }
})

export default store;