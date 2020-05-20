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
import spies from 'chai-spies'
{

  chai.use(spies)
  const Constructor = Vue.extend(Button)
  const zbutton = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  zbutton.$mount()
  //使用spy代替匿名函数
  const spy = chai.spy(() => { console.log('click') })
  zbutton.$on('click', spy)
  zbutton.$el.click()
  expect(spy).to.have.been.called()
}