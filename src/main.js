import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss' // global css
import '@/assets/icon/iconfont.js' //icon
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

