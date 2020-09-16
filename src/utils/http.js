// axios组件初始化
import axios from 'axios'
import { Message } from 'element-ui'
import { openLoading, closeLoading } from './utils'
import store from '@/store'
import qs from 'qs'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // 请求超时时间
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    config.headers.common.Authorization = localStorage.getItem('TOKEN')
    if (config.data) {
      if (config.data.noLoading) {
        delete config.data.noLoading
        config.noLoading = true
      }
      if (config.data.needStringify) {
        delete config.data.needStringify
        config.data = qs(config.data)
      }
    } else if (config.params && config.params.noLoading) {
      delete config.params.noLoading
      config.noLoading = true
    }
    if (!config.noLoading) openLoading() // 默认开启Loading
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    if (!response.config.noLoading) {
      closeLoading()
    }
    if (response.data instanceof Blob) {
      return Promise.resolve(response.data)
    } else if (response.data.code !== 0) {
      const rejection = {
        config: response.config,
        status: response.data.code,
        message: response.data.msg
      }
      Message.error(response.data.msg || '请求错误')
      return Promise.reject(rejection)
    }
    return Promise.resolve(response.data)
  },
  error => {
    if (!error.config.noLoading) {
      closeLoading()
    }
    if (error.response) {
      if (error.response.status === 403) {
        store.dispatch('user/logout')
      } else if (error.response.data && error.response.data.msg) {
        Message.error(error.response.data.msg)
      } else {
        Message.error(error.response.status + ' ' + error.response.statusText)
      }
    } else if (error.message) {
      Message.error(error.message)
    }
    return Promise.reject(error)
  }
)

export default service
