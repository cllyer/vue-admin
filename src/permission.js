import router from './router'
import store from './store'
import { getToken } from './utils/utils'

router.beforeEach((to, from, next) => {
  const TOKEN = getToken()
  console.log(to)
  console.log(TOKEN)

  if (to.meta.noAuth) {
    next()
  } else if (TOKEN) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else if (store.state.user.userMenus.length === 0) {
      store.dispatch('user/getUserMenus').then(() => {
        next({ ...to, replace: true })
      })
    } else {
      next()
    }
  } else {
    next('/login')
  }
})
