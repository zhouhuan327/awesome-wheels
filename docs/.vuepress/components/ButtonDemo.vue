<template>
    <div class="container">
        <div>
            <z-button >默认按钮</z-button>
            <z-button plain type="primary">主要按钮</z-button>
            <z-button round type="primary">主要按钮</z-button>
            <z-button plain type="info">信息按钮</z-button>
            <z-button plain type="warning">警告按钮</z-button>
            <z-button plain type="danger">危险按钮</z-button>
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
    .container{
        .z-button {
            margin: 5px;
        }
    }

</style>