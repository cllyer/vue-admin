const path = require('path')
const ip = require('ip')

// const isProd = process.env.NODE_ENV === 'production'
// const isTest = process.env.NODE_ENV === 'test'

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  configureWebpack: {
    externals: {
      // 'AMap': 'AMap'
    },
    plugins: [],
    optimization: {
      minimizer: []
    }
  },
  chainWebpack: config => {
    // config.resolve.alias.set('@', resolve('src'))
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'vue-admin' // index.html的title配置
        return args
      })
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons/svg'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  },
  devServer: {
    host: ip.address(),
    open: true, // 自动打开浏览器
    port: 8800
    // ,
    // proxy: {
    //   '/': {
    //     target: process.env.VUE_APP_BASE_API,
    //     changeOrigin: true,
    //     ws: false
    //   }
    // }
  }
}
