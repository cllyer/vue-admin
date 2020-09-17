import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Layout from '../views/Layout/Layout.vue'
import Dashboard from '../views/Dashboard/index.vue'

Vue.use(VueRouter)

const About = () => import(/* webpackChunkName: "base" */ '../views/BasePage/About.vue')
const List = () => import(/* webpackChunkName: "base" */ '../views/BasePage/TableList.vue')

const SysUser = () => import(/* webpackChunkName: "system" */ '../views/System/User/index.vue')
const SysRole = () => import(/* webpackChunkName: "system" */ '../views/System/Role/index.vue')
const SysMenu = () => import(/* webpackChunkName: "system" */ '../views/System/Menu/index.vue')

export const components = {
  Layout,
  Dashboard,
  About,
  List,
  SysUser,
  SysRole,
  SysMenu
}

const router = new VueRouter({
  mode: 'hash',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/login', component: Login, meta: { noAuth: true } }
    // { path: '/*', redirect: '/dashboard/index' }
  ]
})

export default router
