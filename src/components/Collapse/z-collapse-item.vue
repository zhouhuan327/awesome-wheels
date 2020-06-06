<template>
    <div class="z-collapse-item">
        <div class="z-collapse-item-head">
            {{title}}
        </div>
        <div class="z-collapse-item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "z-collapse-item",
        props:{
            title:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .z-collapse-item{

    }
</style>