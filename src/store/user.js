import API from '@/api/index'
import router, { components } from '@/router/index'

export default {
  namespaced: true,
  state: {
    userId: localStorage.getItem('userId') || '',
    username: localStorage.getItem('username') || '',
    userRole: localStorage.getItem('userRole') || '',
    userMenus: []
  },
  mutations: {
    SET_USERID (state, userId = '') {
      localStorage.setItem('userId', userId)
      state.userId = userId
    },
    SET_USERNAME (state, username = '') {
      localStorage.setItem('username', username)
      state.username = username
    },
    SET_ROLE (state, userRole = '') {
      localStorage.setItem('userRole', userRole)
      state.userRole = userRole
    },
    SET_MENUS (state, userMenus = []) {
      state.userMenus = userMenus
    }
  },
  actions: {
    login ({ commit }, data) {
      return API.user.login(data).then(resp => {
        console.log(resp)
        localStorage.setItem('TOKEN', resp.data.token)
        commit('SET_USERID', resp.data.userId)
        commit('SET_USERNAME', resp.data.username)
        commit('SET_ROLE', resp.data.userRole)
        router.replace('/dashboard/index')
        return resp
      })
    },
    logout ({ commit }) {
      localStorage.removeItem('TOKEN')
      commit('SET_USERID')
      commit('SET_USERNAME')
      commit('SET_ROLE')
      location.reload()
    },
    getUserMenus ({ commit }) {
      return API.user.getUserMenus().then(resp => {
        console.log(resp, components)
        const asyncRoutes = generateRoutes(resp.data, components)
        console.log(asyncRoutes)
        router.addRoutes([
          ...asyncRoutes,
          { path: '/*', redirect: asyncRoutes[0].path + '/' + asyncRoutes[0].children[0].path }
        ])
        commit('SET_MENUS', asyncRoutes)
      })
    }
  }
}

function generateRoutes (list = [], components) {
  return list.map(item => {
    return {
      path: item.path,
      name: item.id,
      component: components[item.component],
      meta: { title: item.title, icon: item.icon || '' },
      hidden: item.hidden || false,
      children: generateRoutes(item.children, components)
    }
  })
}
