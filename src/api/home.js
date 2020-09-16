import http from '@/utils/http'

function getListData (params) {
  return http({
    url: '/api/info/list',
    params
  })
}

export default {
  getListData
}
