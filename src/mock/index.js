import Mock from 'mockjs'

// const Random = Mock.Random
Mock.mock(RegExp('/api/data.*'), 'get', options => {
  let params = {
    page: 1,
    size: 20
  }
  let suffix = options.url.split('?')[1]
  if (suffix) {
    suffix.split('&').forEach(each => {
      let kv = each.split('=')
      params[kv[0]] = Number(kv[1])
    })
  }
  return Mock.mock({
    code: 0,
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
  })
})
Mock.mock('/api/edit', 'post', options => {
  return {
    code: 0,
    msg: 'success'
  }
})
