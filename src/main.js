import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'

import App from './App.vue'
import router from './router'
import store from './store'

import utils from './utils/utils'
import './components'
import './icons'
import './style/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(utils)

router.beforeEach((to, from, next) => {
  console.log(to)
  const TOKEN = localStorage.getItem('TOKEN')

  if (to.meta.noAuth) {
    next()
  } else if (to.path === '/login' && TOKEN) { // 有Token不再跳转登录
    next(from.path)
  } else if (to.path !== '/login') {
    if (!TOKEN) { // 无Token转登录
      next('/login')
    } else if (!store.state.user.userMenus.length) {
      store.dispatch('user/getUserMenus').then(() => {
        next({ ...to, replace: true })
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
