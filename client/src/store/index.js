import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birds: []
  },
  mutations: {
    addBird: (state, value) => {
      state.birds.push(value);
    }
  },
  actions: {
    addBird: ({commit}, value) => {
      commit('addBird', value);
    }
  },
  getters: {
    GetBirds: state => state.birds,
  },
  modules: {
  }
})
