import Vue from 'vue'

import ElementUI from 'element-ui'
import './style/element-variables.scss'
import 'normalize.css'

import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import './components'
import './icons'
import './style/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
