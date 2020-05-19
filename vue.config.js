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
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                extensions: [".js", ".vue", ".json"],
                alias: {
                    vue$: "vue/dist/vue.js",
                    "@": path.resolve(__dirname, "./src")
                }
            }
        });
    }
}