/**
 * 自动注册组件
 * 建议文件名使用驼峰式，组件名即为文件名
 * 只会注册当前目录下的vue文件，如果不想自动注册，可以新建一个子目录
 */
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './', // 其组件目录的相对路径
  false, // 是否查询其子目录
  /\.vue$/ // 匹配vue后缀文件名的文件
)
// 遍历获取到的文件名，依次进行全局注册
requireComponent.keys().forEach(fileName => {
  // 获取组件配置(实例)
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名(eg: MYHeader)
  const componentName = upperFirst(
    // 获取驼峰式命名
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名 eg: ./food-header.vue -> foodHeader
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
