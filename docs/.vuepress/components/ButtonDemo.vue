<template>
    <div class="container">
        <div>
            <z-button >默认按钮</z-button>
            <z-button type="primary">主要按钮</z-button>
            <z-button type="success">成功按钮</z-button>
            <z-button type="info">信息按钮</z-button>
            <z-button type="warning">警告按钮</z-button>
            <z-button type="danger">危险按钮</z-button>
            <z-button round type="danger">圆角</z-button>
        </div>
        <div>
            <z-button plain >默认按钮</z-button>
            <z-button plain type="primary">主要按钮</z-button>
            <z-button plain type="success">成功按钮</z-button>
            <z-button plain type="info">信息按钮</z-button>
            <z-button plain type="warning">警告按钮</z-button>
            <z-button plain type="danger">危险按钮</z-button>
            <z-button round plain type="danger">圆角</z-button>
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