<template>
    <div class="z-message" :class="msgClass">
        <slot></slot>
        <span class="closeButton" v-if="showClose" @click="close">x</span>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props:{
            type:{
                type:String,
                default:'default'
            },
            duration:{
                type:Number,
                default:3
            },
            showClose:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            setTimeout(()=>{
                this.close()
            },this.duration*1000)
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            }
        },
        computed:{
            msgClass(){
                const { type } = this
                return `z-message--${type}`
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $box-height:40px;
    @mixin message-color($color, $bgcolor, $bdcolor) {
        color: $color;
        background-color: $bgcolor;
        border-color: $bdcolor;
    }
.z-message{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: $box-height;
    min-width:200px;
    border: 1px solid #ebeef5;
    font-size: $font-size;
    border-radius: 4px;
    line-height: 1.8px;
    padding: 5px 16px;
    @include message-color(gray,#edf2fc,#edf2fc);
    .closeButton{
        position: absolute;
        top: 20px;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
    }
}
    .z-message.z-message--success{
        @include message-color(#67c23a, #f0f9eb, #e1f3d8)
    }
    .z-message.z-message--warning{
        @include message-color(#e6a23c, #fdf6ec, #fdf6ec)
    }
    .z-message.z-message--danger{
        @include message-color(#f56c6c,#fef0f0,#fef0f0)
    }
</style>