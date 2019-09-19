import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fx_px_usd: 6.9,
    serve_url: '82.16.80.194',
    local_url: '127.0.0.1',
    url_choice: 'local', // local/serve
    client: {
      personnel: '',
      div: '',
      ip: ''
    }
  },
  mutations: {
    getFX (state) {
      state.fx_px_usd++
    },
    getPersonnel (state) {
      Axios.post('http://' + this.getters.active_url + ':3000/users/').then(
        Response => {
          state.client = Response.data
        }
      )
    }
  },
  actions: {
    getFX (context) {
      context.commit('getFX')
    },
    getPersonnel (context) {
      context.commit('getPersonnel')
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
