/**
 * 在Vue的原型中挂载全局变量和方法
 * 在组件中可以使用this.xxx调用
 */
import { openLoading, closeLoading } from '@/utils/utils'

// 事件防抖
let timer = null
function debounce (fn, delay = 500) {
  clearTimeout(timer)
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.openLoading = openLoading
    Vue.prototype.closeLoading = closeLoading
    Vue.prototype.debounce = debounce
  }
}
