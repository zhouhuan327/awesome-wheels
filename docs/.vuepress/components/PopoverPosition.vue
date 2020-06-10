<template>
    <div class="container">
        <z-popover position="top">
            <template slot="content">
            	这是一段消息
            </template>
            <z-button plain >top</z-button>
        </z-popover>
        <z-popover position="bottom">
            <template slot="content">
                这是一段消息
            </template>
            <z-button plain >bottom</z-button>
        </z-popover>
        <z-popover position="left">
            <template slot="content">
                这是一段消息
            </template>
            <z-button plain >left</z-button>
        </z-popover>
        <z-popover position="right">
            <template slot="content">
                这是一段消息
            </template>
            <z-button plain >rigth</z-button>
        </z-popover>
    </div>
</template>

<script>
    import Button from '../../../src/components/Button/button'
    import Popover from '../../../src/components/Popover/Popover'
    export default {
        name: "PopoverPosition.vue",
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