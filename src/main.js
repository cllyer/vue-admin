import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store'

import base from './utils/base'

import './icons'
import './mock'

Vue.use(ElementUI)
Vue.use(base)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
