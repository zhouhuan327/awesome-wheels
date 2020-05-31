<template>
    <div class="container">
        <div>
            <p>需要指定gradient属性，并添加相应的的颜色</p>
            <z-button  class="bg1" gradient>Hover Me</z-button>
            <z-button class="bg2" gradient>Hover Me</z-button>
            <z-button class="bg3" gradient>Hover Me</z-button>
        </div>
    </div>
</template>
<script>
    import Button from '../../../src/components/Button/button'
    export default {
        components:{
            'z-button':Button,
        }
    }
</script>
<style lang="scss" scoped>
    .bg1.gradient-bg{
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    }
    .bg2.gradient-bg{
        background: linear-gradient(90deg, #1ed0cb, #7182d9, #ef7d3d, #69bce0);
    }
    .bg3.gradient-bg{
        background: linear-gradient(90deg,#1ed0cb, #03a9f4,#e66465, #9198e5);
    }
</style>