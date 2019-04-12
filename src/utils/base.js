/**
 * 在Vue的原型中挂载全局变量和方法
 * 在组件中可以使用this.xxx调用
 */
import Utils from '@/utils/utils'

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

const base = {
  install (Vue, options) {
    Vue.prototype.openLoading = Utils.openLoading
    Vue.prototype.closeLoading = Utils.closeLoading
    Vue.prototype.debounce = debounce
  }
}

export default base
