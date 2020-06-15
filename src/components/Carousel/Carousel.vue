<template>
    <div class="z-carousel">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "z-carousel",
        data(){
            return {
                user: {
                    title: '测试title',
                    name: '测试name'
                }
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    .z-carousel{
        display: flex;
    }
</style>