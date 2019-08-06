import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fx_px_usd: 6.9
  },
  mutations: {
    getFX (state) {
      state.fx_px_usd++
    }
  },
  actions: {
    getFX (context) {
      context.commit('getFX')
    }

  }
})
