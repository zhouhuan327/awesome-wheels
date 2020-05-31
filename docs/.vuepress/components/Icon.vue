<template>
    <div class="container">
        <z-icon name="setting"></z-icon>
        <z-icon name="start"></z-icon>
        <z-icon name="thumbs-up"></z-icon>
        <z-icon name="plus"></z-icon>
        <z-icon name="minus"></z-icon>
        <z-icon name="arrow-right"></z-icon>
        <z-icon name="arrow-left"></z-icon>
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
        font-size: 25px;
    }
</style>