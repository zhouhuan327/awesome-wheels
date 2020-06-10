# awesome-wheels

[![Build Status](https://www.travis-ci.org/zhouhuan327/awesome-wheels.svg?branch=master)](https://www.travis-ci.org/zhouhuan327/awesome-wheels)
[![npm version](https://badge.fury.io/js/awesome-wheels.svg)](https://badge.fury.io/js/awesome-wheels)


## 介绍

awesome-wheels是一个基于Vue的ui组件库，目前提供了一些常用的组件，适合pc和移动端使用。
组件库会持续更新并测试

文档地址:  [https://zhouhuan327.github.io/awesome-wheels/](https://zhouhuan327.github.io/awesome-wheels/)

## 开始使用

```shell script
npm install awesome-wheels --save
```
or
```shell script
yarn add awesome-wheels -D
```

###  在main.js中引入

```javascript
import Vue from 'vue'
import App from './App.vue'
import awesome from 'awesome-wheels'
import 'awesome-wheels/dist/awesome-wheels.css'
Vue.use(awesome)

new Vue({
  render: h => h(App),
}).$mount('#app')

```