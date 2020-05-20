import { expect } from 'chai'
import Button from '@/components/Button/button.vue'
import Vue from 'vue'
describe('Button.vue', () => {
    it('测试icon', () => {
        //测试icon
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        button.$mount()
        const href = button.$el.querySelector('use').getAttribute('xlink:href')
        expect(href).to.eq('#icon-setting')
    })
    it('测试loading', () => {
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
    })
})
