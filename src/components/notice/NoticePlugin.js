import Message from "./Message";
export default {
    install:function (Vue,options) {
        Vue.prototype.$message = function (message) {
            let Constructor = Vue.extend(Message)
            let vm = new Constructor()
            vm.$slots.default = message
            vm.$mount()
            document.body.appendChild(vm.$el);
        }
    }
}