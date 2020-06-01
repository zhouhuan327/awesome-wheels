<template>
    <div class="container">
        <z-icon cool-hover="start">收藏</z-icon>
        <z-icon cool-hover="thumbs-up">点赞</z-icon>
        <z-icon cool-hover="setting">设置</z-icon>
    </div>

</template>

<script>
    import Icon from '../../../src/components/icon'
    export default {
        name: "Icon",
        components:{
            'z-icon':Icon
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
    }
</style>