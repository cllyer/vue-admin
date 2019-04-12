import fetch from '@/utils/fetch'

function getData (params) {
  return fetch({
    url: '/api/data',
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
  getData,
  submitForm
}
