import Vue from 'vue'
import Vuex from 'vuex'

import { INIT } from './_constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async [INIT] () {
      try {
        const response = await fetch('https://api.publicapis.org/entries', {
          // mode: 'no-cors'
        })

        const body = await response.json()
        console.log('body', body)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
