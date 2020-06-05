import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Tab from '@/components/Tab/tab'
import TabPanel from '@/components/Tab/tab-panel'
import TabNav from '@/components/Tab/tab-nav'
import TabItem from '@/components/Tab/tab-item'
import Vue from 'vue'
Vue.component('z-tab-panel',TabPanel)
Vue.component('z-tab-nav',TabNav)
Vue.component('z-tab-item',TabItem)
Vue.component('z-tab',Tab)
describe('Tab', () => {
    it('exist', () => {
        expect(Tab).to.exist
        expect(TabPanel).to.exist
        expect(TabNav).to.exist
        expect(TabItem).to.exist
    })
    it('是否能生成tab-item',  async () => {
        const wrapper = await mount(Tab, {
            propsData: {
                selectedName: 'first'
            },
            slots: {
                default: [
                    `<z-tab-panel label="标签1" name="first">内容1</z-tab-panel>`,
                    `<z-tab-panel label="标签2" name="second">内容2</z-tab-panel>`,
                    `<z-tab-panel label="标签3" name="third">内容3</z-tab-panel>`
                ]
            }
        })
        const element =  wrapper.vm.$el
        expect(element.querySelectorAll('.z-tab-item').length).to.eq(3)
    })
    it('card 是否生效',async ()=>{
        const wrapper = await mount(Tab, {
            propsData: {
                selectedName: 'first',
                type:'card'
            },
            slots: {
                default: [
                    `<z-tab-panel label="标签1" name="first">内容1</z-tab-panel>`,
                    `<z-tab-panel label="标签2" name="second">内容2</z-tab-panel>`,
                    `<z-tab-panel label="标签3" name="third">内容3</z-tab-panel>`
                ]
            }
        })
        expect(wrapper.vm.$el.querySelector('.z-tab-card')).to.be.exist
    })
})