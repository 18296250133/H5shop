module.exports={
    css: {
        loaderOptions: {
          scss: {
            prependData: `
              @import "~@/assets/css/index.scss";
            `
          }
        }
      },
      devServer :{
        host:'192.168.2.112'
      }
}