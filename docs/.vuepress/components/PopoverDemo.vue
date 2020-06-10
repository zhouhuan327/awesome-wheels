<template>
    <div class="container">
        <z-popover position="top">
            <template slot="content">
            	这是弹出的消息
            </template>
            <z-button plain >click激活</z-button>
        </z-popover>
        <z-popover trigger="hover" position="top">
            <template slot="content">
                这是弹出的消息
            </template>
            <z-button plain >hover激活</z-button>
        </z-popover>
    </div>
</template>

<script>
    import Button from '../../../src/components/Button/button'
    import Popover from '../../../src/components/Popover/Popover'
    export default {
        name: "PopoverDemo.vue",
        components:{
            'z-popover':Popover,
            'z-button':Button
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        margin-top: 20px;
        .z-button{
            margin-right: 20px;
        }
    }
</style>