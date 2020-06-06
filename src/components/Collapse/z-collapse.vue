<template>
    <div>
        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        name: "z-collapse",
        model:{
            prop:'activeName'
        },
        props:{
            activeName:{
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>