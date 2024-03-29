module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals = {
        '@antv/g2': {
          root: 'G2',
          commonjs: '@antv/g2',
          commonjs2: '@antv/g2',
          amd: '@antv/g2'
        },
        '@antv/g2-plugin-slider': {
          root: 'Slider',
          commonjs: '@antv/g2-plugin-slider',
          commonjs2: '@antv/g2-plugin-slider',
          amd: '@antv/g2-plugin-slider'
        },
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  }
}
