const path = require('path')
// const ip = require('ip')

// const isProd = process.env.NODE_ENV === 'production'
// const isTest = process.env.ENV === 'testServer'

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // publicPath: '/',
  outputDir: 'docs',
  configureWebpack: {
    externals: {
      // 'BMap': 'BMap'
    },
    plugins: []
  },
  chainWebpack: config => {
    // config.resolve.alias.set('@', resolve('src'))
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
    // host: ip.address(),
    open: true, // 自动打开浏览器
    port: 8888
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // },
  }
}
