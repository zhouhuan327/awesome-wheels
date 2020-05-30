const path = require("path");
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: "assets",
    productionSourceMap: false,
    filenameHashing: true,
    // ...
    css: {
        loaderOptions: {
            sass: {
                prependData: ` @import "~@/styles/index.scss";`
            }
        }
    },
    configureWebpack: config => {
        // if (process.env.NODE_ENV === 'development') {
        //     // 为生产环境修改配置...
        //     config.resolve = {
        //         extensions: [".js", ".vue", ".json"],
        //             alias: {
        //             vue$: "vue/dist/vue.js",
        //                 "@": path.resolve(__dirname, "./src")
        //         }
        //     }
        // }
    }

}