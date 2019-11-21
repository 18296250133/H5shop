module.exports={
    css: {
        loaderOptions: {
          scss: {
            prependData: `
              @import "~@/assets/css/index.scss";
            `
          }
        }
      }
}