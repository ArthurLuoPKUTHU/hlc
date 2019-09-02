import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fx_px_usd: 6.9,
    serve_url: '82.16.80.194',
    local_url: '127.0.0.1',
    url_choice: 'local' // local/serve
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
  },
  getters: {
    active_url: state => {
      if (state.url_choice === 'local') {
        return state.local_url
      } else {
        return state.serve_url
      }
    },
    today_date: state => {
      var d = new Date()
      var month = '' + (d.getMonth() + 1)
      var day = '' + d.getDate()
      var year = d.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day

      return [year, month, day].join('-')
    }
  }
})
