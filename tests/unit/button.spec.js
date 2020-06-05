import { expect } from 'chai'
import Button from '@/components/Button/button.vue'
import { mount } from '@vue/test-utils'
describe('Button.vue', () => {
    it('exist', () => {
        expect(Button).to.exist
    })
    it('测试icon', () => {
        //测试icon
        // const Constructor = Vue.extend(Button)
        // const button = new Constructor({
        //     propsData: {
        //         icon: 'setting'
        //     }
        // })
        // button.$mount()
        const button = mount(Button, {
            propsData: {
                icon: 'setting'
            }
        }).vm
        const href = button.$el.querySelector('use').getAttribute('xlink:href')
        expect(href).to.eq('#icon-setting')
    })
    it('测试loading', () => {
        const button = mount(Button, {
            propsData: {
                icon: 'loading'
            }
        }).vm
        const href = button.$el.querySelector('use').getAttribute('xlink:href')
        expect(href).to.eq('#icon-loading')
    })


})
