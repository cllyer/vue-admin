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
      redirect: 'home',
      children: [
        { path: 'home', name: 'home', component: Home }
      ]
    }, {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      path: '/about',
      component: Layout,
      redirect: '/about/index',
      children: [
        { path: 'index', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue') }
      ]
    }, {
      path: '/*',
      redirect: '/'
    }
  ]
})
