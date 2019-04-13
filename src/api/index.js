import fetch from '@/utils/fetch'

function login (params) {
  return fetch({
    url: '/api/login',
    method: 'post',
    params
  })
}
function getListData (params) {
  return fetch({
    url: '/api/list',
    params
  })
}
function submitForm (params) {
  return fetch({
    url: '/api/edit',
    method: 'post',
    params
  })
}

export default {
  login,
  getListData,
  submitForm
}
