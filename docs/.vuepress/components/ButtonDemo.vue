<template>
    <div>
        <z-button  icon="setting">默认按钮</z-button>
        <z-button :loading="true" type="primary">主要按钮</z-button>
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