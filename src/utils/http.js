// axios组件初始化
import axios from 'axios'

axios.defaults.timeout = 30000
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // config.headers['X-TOKEN'] = Cache.getToken()
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      let rejection = {
        config: response.config,
        status: response.data.code,
        message: response.data.message
      }
      return Promise.reject(rejection)
    }
    return Promise.resolve(response.data)
  },
  error => {
    if (error.response) {
      if (error.response.status === 404) {
        alert('请求的资源不存在')
      } else if (error.response.status === 403) {
        alert('没有访问权限')
      } else if (error.response.status === 401) {
        alert('登录状态失效，请重新登录')
        // router.replace('/login')
      } else if (error.response.status === 500) {
        alert('请求异常')
      }
      return Promise.reject(error)
    } else {
      alert(error.message)
      return Promise.reject(error)
    }
  }
)
