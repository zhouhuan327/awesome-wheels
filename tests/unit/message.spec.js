import { expect } from 'chai'
import { mount } from '@vue/test-utils';
import Message from "@/components/notice/Message";
import Vue from "vue";
describe('message',()=>{
    it('exist',()=>{
        expect(Message).to.be.exist
    })
    describe('prop',()=>{
        it('type',()=>{
            const vm = mount(Message,{
                propsData:{
                    type:'success'
                }
            }).vm
            expect(vm.$el.classList.contains('z-message--success'))
        })
        it('showClose',()=>{
            const vm = mount(Message,{
                propsData:{
                    showClose:true
                }
            }).vm
            expect(vm.$el.querySelector('.closeButton')).to.exist
        })
        it('duration',(done)=>{
            const duration = 1;
            const Constructor = Vue.extend(Message)
            const vm = new Constructor({
                propsData:{
                    duration
                }
            })
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm.$mount(div)

            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            },(duration+1)*1000)
        })
        it('support html snipe',()=>{
            const Constructor = Vue.extend(Message)
            const vm = new Constructor({
                propsData:{
                    useHtmlString:true
                }
            })
            vm.$slots.default = ['<strong>message</strong>']
            vm.$mount()

            expect(vm.$el.querySelector('strong')).to.exist
        })
    })

})