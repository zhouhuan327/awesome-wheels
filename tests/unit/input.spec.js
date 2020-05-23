import { expect } from 'chai'
import Input from '@/components/input/input.vue'
import { mount } from '@vue/test-utils';
import sinon from 'sinon'
describe('input', () => {
    it('存在', () => {
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
            expect(useElement.getAttribute("xlink:href")).to.eq('#icon-setting')
            const spanElement = vm.$el.querySelector('span')
            expect(spanElement.innerHTML).to.eq("错误信息")
        })
    })
    describe('event', () => {
        it('trigger change event', async () => {
            const spy = sinon.spy()
            const wrapper = mount(Input, {
                propsData: {
                    eventCalled: spy
                }
            })
            wrapper.find('input').trigger('change')
            await wrapper.vm.$nextTick()

            expect(spy.calledWith('change')).to.be.true
        })
        it('trigger input event', async () => {
            const spy = sinon.spy()
            const wrapper = mount(Input, {
                propsData: {
                    eventCalled: spy
                }
            })
            wrapper.find('input').trigger('input')
            await wrapper.vm.$nextTick()

            expect(spy.calledWith('input')).to.be.true
        })
        it('trigger focus event', async () => {
            const spy = sinon.spy()
            const wrapper = mount(Input, {
                propsData: {
                    eventCalled: spy
                }
            })
            wrapper.find('input').trigger('focus')
            await wrapper.vm.$nextTick()

            expect(spy.calledWith('input')).to.be.true
        })
        it('trigger blur event', async () => {
            const spy = sinon.spy()
            const wrapper = mount(Input, {
                propsData: {
                    eventCalled: spy
                }
            })
            wrapper.find('input').trigger('blur')
            await wrapper.vm.$nextTick()

            expect(spy.calledWith('blur')).to.be.true
        })
    })
})