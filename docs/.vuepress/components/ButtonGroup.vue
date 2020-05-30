<template>
    <div class="container">
        <div>
            <z-button-group>
                <z-button icon="arrow-left">上一页</z-button>
                <z-button>更多</z-button>
                <z-button icon="arrow-right">下一页</z-button>
                <div></div>
            </z-button-group>
        </div>
        <div>
            <z-button-group>
                <z-button>1</z-button>
                <z-button>2</z-button>
                <z-button>3</z-button>
                <z-button>4</z-button>
            </z-button-group>
        </div>
    </div>

</template>

<script>
    import Button from '../../../src/components/Button/button'
    import ButtonGroup from '../../../src/components/Button/button-group'

    export default {
        components: {
            'z-button': Button,
            'z-button-group': ButtonGroup,
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        div{
            margin: 10px 0;
        }
    }
</style>