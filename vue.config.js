const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        //target:'http://192.168.12.143:8084',
        //target: 'http://localhost:8084',
        target: 'http://101.37.246.72:8084',//服务器
        //target:'192.168.1.101:8084',
        //target:'http://192.168.50.7:8084',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''//将url中起始的'/api'替换成''，比如将/api/getDeptList替换成/getDeptList
        }
      }
    }
  }
})
