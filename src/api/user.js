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

export default {
  login,
  getUserMenus
}
