# vue-template

## 环境依赖
需安装 Node.js Yarn
在项目根路径下执行 yarn install 安装项目依赖

## 环境变量
项目根路径下的  _.env.development_ 、_.env.test_ 和 _.env.production_ 文件分别配置的是不同mode下的环境变量，其中以 _VUE_APP__ 开头的变量可以在应用的代码中使用 _process.env.VUE_APP_XX_ 来访问它们

## 相关指令
```
yarn run dev        // 开发环境编译启动
yarn run build:dev  // 打包-开发模式
yarn run build:test // 打包-测试模式
yarn run build      // 打包-生产环境
```

## 图标库
建议使用svg小图标，放到 _src/icons/svg_ 文件夹内，可以使用已经封装好的组件来使用它们。
```html
<!-- iconClass即是svg图标的文件名，customClass是自定义的图标样式 -->
<icon-svg icon-class="file" custom-class="my-icon"></icon-svg>
```

## 全局组件
项目路径 _src/components_ 用于放置全局组件，改路径下的vue文件会被自动注册为组件，组件名为文件名。
