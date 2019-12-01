module.exports = {
  // 打包的时候记得释放注释
  // publicPath: 'dhsphone',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
