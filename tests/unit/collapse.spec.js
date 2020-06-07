import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Collapse from '@/components/Collapse/z-collapse'
import CollapseItem from '@/components/Collapse/z-collapse-item'
import Vue from 'vue'
Vue.component('z-collapse',Collapse)
Vue.component('z-collapse-item',CollapseItem)
describe('collapse',()=>{
    it('exist',()=>{
        expect(CollapseItem).to.exist
        expect(Collapse).to.exist
    })
//    待补充
})