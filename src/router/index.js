import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout/Layout.vue'
import Home from '../views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      meta: {
        icon: '',
        label: '首页'
      },
      redirect: 'home',
      children: [
        { path: 'home', name: 'home', component: Home }
      ]
    }, {
      path: '/base',
      component: Layout,
      children: [
        { path: 'about', name: 'about', component: () => import(/* webpackChunkName: "base" */ '../views/About/About.vue') },
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
})
