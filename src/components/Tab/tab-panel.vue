<template>
    <div class="z-tab-panel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "z-tab-panel",
        props:{
            label:String
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(item,vm) => {
                console.log(`${item}被选中,panel ${this.label}收到`)
            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>