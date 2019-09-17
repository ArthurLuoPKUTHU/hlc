import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootswatch/dist/minty/bootstrap.css'
import VeeValidate from 'vee-validate'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

// import VueDataTables from 'vue-data-tables'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(ElementUI)
// Vue.use(iView)

// Vue.use(VueDataTables)

// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
const config = {
  errorBagName: 'errorss', // change if property conflicts
  fieldsBagName: 'fieldss'
}

Vue.use(VeeValidate, config)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
