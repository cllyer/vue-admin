import fetch from '@/utils/fetch'

function getListData (params) {
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
  getListData,
  submitForm
}
