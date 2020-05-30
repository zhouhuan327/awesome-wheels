<template>
    <div class="container">
        <div>
            <z-button plain icon="setting">默认按钮</z-button>
            <z-button round icon="setting">默认按钮</z-button>
            <z-button disabled icon="setting">默认按钮</z-button>
        </div>
        <p>加载中的按钮</p>
        <p>要设置为 loading 状态，只要设置loading属性为true即可</p>
        <div>
            <z-button plain :loading="true">默认按钮</z-button>
            <z-button round :loading="true">默认按钮</z-button>
            <z-button disabled :loading="true">默认按钮</z-button>
        </div>
    </div>

</template>

<script>
    import Button from '../../../src/components/Button/button'

    export default {
        components: {
            'z-button': Button,
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        .z-button {
            margin: 2px 8px;
        }
    }
</style>