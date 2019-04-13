// axios组件初始化
import axios from 'axios'
import qs from 'qs'
import Utils from './utils'

// axios.defaults.timeout = 30000
// axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 20000 // 请求超时时间
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    // config.headers['X-TOKEN'] = Cache.getToken()
    if (!config.params) { config.params = {} }

    // noLoading => 请求前不打开loading   stopCloseLoading => 请求完成后阻止关闭loading
    config.autoCloseLoading = !config.params.noLoading && !config.params.stopCloseLoading
    if (!config.params.noLoading) { Utils.openLoading() }
    delete config.params.noLoading

    // post请求配置，参数序列化 needStringify => 参数序列化
    if (config.method.toLocaleLowerCase() === 'post') {
      if (config.params.needStringify) {
        delete config.params.needStringify
        config.data = qs.stringify(config.params)
      } else {
        config.data = config.params
      }
      config.params = {}
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    if (response.config.autoCloseLoading) {
      Utils.closeLoading()
    }
    if (response.data.code !== 0) {
      let rejection = {
        config: response.config,
        status: response.data.code,
        message: response.data.msg
      }
      console.error(rejection)
      return Promise.reject(rejection)
    }
    return Promise.resolve(response.data)
  },
  error => {
    if (error.response) {
      if (error.response.status === 404) {
        console.error('请求的资源不存在')
      } else if (error.response.status === 403) {
        console.error('没有访问权限')
      } else if (error.response.status === 401) {
        console.error('登录状态失效，请重新登录')
        // router.replace('/login')
      } else if (error.response.status === 500) {
        console.error('请求异常')
      }
      return Promise.reject(error)
    } else {
      alert(error.message)
      return Promise.reject(error)
    }
  }
)

export default service
