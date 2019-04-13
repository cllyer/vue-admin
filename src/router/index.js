import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Login from '../views/Login/Login.vue'
import Layout from '../views/Layout/Layout.vue'
import Home from '../views/Home/Home.vue'

Vue.use(Router)

const routerGroup = [
  {
    path: '/login',
    component: Login,
    hidden: true
  }, {
    path: '/',
    component: Layout,
    meta: { icon: '', label: '首页', isSingle: true },
    redirect: 'home',
    children: [
      { path: 'home', name: 'home', component: Home }
    ]
  }, {
    path: '/base',
    component: Layout,
    children: [
      { path: 'about', name: 'about', component: () => import(/* webpackChunkName: "base" */ '../views/BasePage/About.vue') },
      { path: 'list', name: 'list', component: () => import(/* webpackChunkName: "base" */ '../views/BasePage/TableList.vue') }
    ]
  }, {
    path: '/error',
    component: Layout,
    children: [
      { path: '403', name: '403', component: () => import(/* webpackChunkName: "error" */ '../views/Error/403.vue') },
      { path: '404', name: '404', component: () => import(/* webpackChunkName: "error" */ '../views/Error/404.vue') },
      { path: '500', name: '500', component: () => import(/* webpackChunkName: "error" */ '../views/Error/500.vue') }
    ]
  }
  // , {
  //   path: '/*',
  //   redirect: '/'
  // }
]

store.commit('SET_MENU', routerGroup)

let router = new Router({
  routes: routerGroup
})

router.beforeResolve((to, from, next) => {
  next()
})

// router.afterEach((to, from) => {})

export default router
