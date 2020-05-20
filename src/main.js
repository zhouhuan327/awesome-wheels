import Vue from 'vue'
import App from './App.vue'
// global css
import '@/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//单元测试
import Button from '@/components/Button/button.vue'
import chai from 'chai'
const expect = chai.expect;
{  //测试icon
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  button.$mount()
  const href = button.$el.querySelector('use').getAttribute('xlink:href')
  expect(href).to.eq('#icon-setting')
}
{ //测试loading
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  button.$mount()
  const href = button.$el.querySelector('use').getAttribute('xlink:href')
  expect(href).to.eq('#icon-loading')

}
{
  const Constructor = Vue.extend(Button)
  const zbutton = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  zbutton.$mount()
  zbutton.$on('click', function (e) {
    console.log(e)
  })
  console.log(zbutton.$el)
  zbutton.$el.click()
}