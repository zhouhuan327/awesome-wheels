
import { expect } from 'chai'
import Row from '@/components/grid/Row.vue'
import Col from '@/components/grid/Col.vue'
import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
describe('grid-layout', () => {
    it('存在', () => {
        expect(Row).to.exist
    })
    it('align是否生效', () => {
        const vm = mount(Row, {
            propsData: {
                align: 'left'
            }
        }).vm

        expect(vm.$el.classList.contains('align-left')).to.eq(true)
    })

    it('gutter是否生效', (done) => {
        Vue.component('z-col', Col)
        const wrapper = mount(Row, {
            propsData: {
                gutter: 20
            },
            slots: {
                default: [`<z-col :span="12"></z-col>`, `<z-col :span="12"></z-col>`],
            }
        })
        setTimeout(() => {
            const row = wrapper.vm
            const cols = row.$el.querySelectorAll('.z-col')
            expect(getComputedStyle(row.$el).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row.$el).marginRight).to.eq('-10px')

            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
        })
    })
    if ('offset是否生效', () => {
        const vm = mount(Col, {
            propsData: {
                offset: 2
            }
        }).vm
        expect(vm.$el.classList.contains('offset-2')).to.eq(true)
    })
        it('是否响应式', () => {
            const vm = mount(Col, {
                propsData: {
                    sm: 24,
                    md: 12,
                    lg: 6,
                }
            }).vm
            expect(vm.$el.classList.contains('z-col-sm-24')).to.eq(true)
            expect(vm.$el.classList.contains('z-col-md-12')).to.eq(true)
            expect(vm.$el.classList.contains('z-col-lg-6')).to.eq(true)
        })
})