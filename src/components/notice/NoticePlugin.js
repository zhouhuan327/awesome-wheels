import Message from "./Message";
export default {
    install:function (Vue) {
        Vue.prototype.$message = function (config) {
            let message;
            if(typeof config ==="string"){
                message = config;
            }else{
                message = config.message;
            }
            let { type, duration,showClose} = config


            let Constructor = Vue.extend(Message)
            let vm = new Constructor({
                propsData:{
                    type:type,
                    duration:duration,
                    showClose:showClose
                }
            })
            vm.$slots.default = message
            vm.$mount()
            document.body.appendChild(vm.$el);
            setTimeout(()=>{vm.$el.classList.add('pull')},0)
        }
    }
}