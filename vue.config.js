module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://siwei.me',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      }
    },
  },
}