let externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'axios': 'axios',
  'vue-i18n': 'VueI18n',
  'nprogress': 'NProgress',
  'screenfull': 'screenfull'
}
const cdn = {
  css: [],
  js: [
    '//cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/ant-design-vue@1/dist/antd.min.js',
    '//cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js',
    '//cdn.jsdelivr.net/npm/vue-i18n@8/dist/vue-i18n.min.js',
    '//cdn.jsdelivr.net/npm/screenfull@4/dist/screenfull.min.js'
  ]
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: './docs',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: false,
  devServer: {
    port: 8081,
    // proxy: {
    //   '/': {
    //     target: 'http://192.168.1.110:8080',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals(externals)//忽略打包
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn;
          return args
        })
    }
  }
}
