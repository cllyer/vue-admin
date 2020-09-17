import http from '@/utils/http'

function login (data) {
  return http({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
function getUserMenus (id) {
  return http({
    url: '/api/user/menus',
    params: { id }
  })
}

function getUserList (params) {
  return http({
    url: '/api/sys/user',
    params
  })
}
function getRoleList (params) {
  return http({
    url: '/api/sys/role',
    params
  })
}

export default {
  login,
  getUserMenus,
  getUserList,
  getRoleList
}
