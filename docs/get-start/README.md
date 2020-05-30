---
title: 快速上手
---

# 快速上手
本节将介绍如何在项目中使用 Element。

## 使用 vue-cli 创建项目
```javascript
npm i -g vue-cli
vue create demo
```

## 引入awesome-wheels

在main.js中写入一下内容
```javascript
import Vue from 'vue'
import App from './App.vue'
import awesome from 'awesome-wheels'
import 'awesome-wheels/dist/awesome-wheels.css'
Vue.use(awesome)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```

如果你希望只引入单独的组件，比如Botton和Icon,那么需要在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
import { Button, Icon } from 'awesome-wheels'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
new Vue({
  el: '#app',
  render: h => h(App)
})
```

## 开始使用 
至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：
```javascript
npm run dev
```
编译：
```javascript
npm run build
```
