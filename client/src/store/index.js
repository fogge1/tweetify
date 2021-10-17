import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birds: [],
    user: false
  },
  mutations: {
    addBird: (state, value) => {
      state.birds.push(value);
    },
    setUser: (state, value) => {
      state.user = value
    }
  },
  actions: {
    addBird: ({commit}, value) => {
      commit('addBird', value);
    },
    setUser: ({commit}, value) => {
      commit('setUser', value)
    }
  },
  getters: {
    GetBirds: state => state.birds,
    getUser: state => state.user
  },
  modules: {
  }
})
