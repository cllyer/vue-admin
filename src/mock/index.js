import Mock from 'mockjs'
const Random = Mock.Random

// 登录
Mock.mock('/api/login', 'post', options => {
  let params = JSON.parse(options.body)
  return {
    code: 0,
    data: {
      isSelf: params.username === 'cllyer',
      userId: Random.id(),
      userName: params.username,
      token: Random.guid()
    },
    msg: 'success'
  }
})

// 获取列表
Mock.mock(RegExp('/api/list.*'), 'get', options => {
  let params = {
    page: 1,
    size: 20
  }
  Object.assign(params, parseParams(options.url))
  return Mock.mock({
    code: 0,
    data: {
      [`list|${params.size}`]: [{
        name: '@cname',
        'age|18-60': 1,
        address: '@city(true)',
        email: '@email',
        updateTime: '@datetime'
      }],
      page: params.page,
      size: params.size,
      total: 200
    },
    msg: 'success'
  })
})
Mock.mock('/api/edit', 'post', options => {
  return {
    code: 0,
    msg: 'success'
  }
})

function parseParams (url) {
  let params = {}
  let suffix = url.split('?')[1]
  if (suffix) {
    suffix.split('&').forEach(each => {
      let kv = each.split('=')
      params[kv[0]] = Number(kv[1])
    })
  }
  return params
}
