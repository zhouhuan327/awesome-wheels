<template>
    <div>
        <z-button disabled>默认按钮</z-button>
        <z-button disabled type="primary">主要按钮</z-button>
        <z-button disabled type="success">成功按钮</z-button>
        <z-button disabled type="info">信息按钮</z-button>
        <z-button disabled type="warning">警告按钮</z-button>
        <z-button disabled type="danger">危险按钮</z-button>
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

<style scoped>

</style>