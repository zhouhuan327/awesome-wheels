import { expect } from 'chai'
import Input from '@/components/input/input.vue'
import { mount } from '@vue/test-utils';
import sinon from 'sinon'
describe('input', () => {
    it('exist', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        it('value是否生效', () => {
            const vm = mount(Input, {
                propsData: {
                    value: '输入值'
                }
            }).vm
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.eq("输入值")
        })
        it('disabled是否生效', () => {
            const vm = mount(Input, {
                propsData: {
                    disabled: true
                }
            }).vm
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.be.true
        })
        it('error是否生效', () => {
            const vm = mount(Input, {
                propsData: {
                    error: '错误信息'
                }
            }).vm
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute("xlink:href")).to.eq('#icon-error')
            const spanElement = vm.$el.querySelector('span')
            expect(spanElement.innerHTML).to.eq("错误信息")
        })
    })
    describe('event', () => {
        it('测试 event', () => {
            const events = ['change', 'input', 'focus', 'blur']
            events.forEach(eventName => {
                const spy = sinon.fake()
                const vm = mount(Input).vm
                vm.$on(eventName, spy)
                let event = new Event(eventName)
                let el = vm.$el.querySelector('input')
                el.dispatchEvent(event)
                expect(spy.called).to.be.true
            })

        })
    })
})