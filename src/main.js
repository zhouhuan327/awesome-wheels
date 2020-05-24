import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss' // global css
import '@/assets/icon/iconfont.js' //icon
Vue.config.productionTip = false

import NoticePlugin from "@/components/notice/NoticePlugin";
Vue.use(NoticePlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')

