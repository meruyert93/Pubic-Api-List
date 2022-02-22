import Vue from 'vue'
import Vuex from 'vuex'

import { INIT } from './_constants'

Vue.use(Vuex)

const getInitialState = () => ({
  apiList: []
})

export default new Vuex.Store({
  state: getInitialState,
  getters: {
    apiList: (state) => state.apiList
  },
  mutations: {
    [INIT] (state, apiList) {
      state.apiList = apiList
    }
  },
  actions: {
    async [INIT] ({ commit }) {
      try {
        const response = await fetch('https://api.publicapis.org/entries')

        const apiList = await response.json()
        commit(INIT, apiList.entries)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
