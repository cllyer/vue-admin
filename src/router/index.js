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
const SysOrganization = () => import(/* webpackChunkName: "system" */ '../views/System/Organization/index.vue')
const SysMenu = () => import(/* webpackChunkName: "system" */ '../views/System/Menu/index.vue')

const Error403 = () => import(/* webpackChunkName: "error" */ '../views/Error/403.vue')
const Error404 = () => import(/* webpackChunkName: "error" */ '../views/Error/404.vue')
const Error500 = () => import(/* webpackChunkName: "error" */ '../views/Error/500.vue')

export const components = {
  Layout,
  Dashboard,
  About,
  List,
  SysUser,
  SysRole,
  SysOrganization,
  SysMenu,
  Error403,
  Error404,
  Error500
}

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    { path: '/login', component: Login }
    // { path: '/*', redirect: '/dashboard/index' }
  ]
})

export default router
