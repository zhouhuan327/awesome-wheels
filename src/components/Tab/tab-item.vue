<template>
    <div class="z-tab-item" @click="onClick" >
        {{label}}
    </div>
</template>

<script>
    export default {
        name: "z-tab-item",
        props:{
            label:String
        },
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(name,vm) => {
                console.log(`${name}被选中,${this.label}收到`,vm)
            })
        },
        methods:{
            onClick(){
                this.eventBus.$emit('update:selected', this.label, this)
            }
        }
    }
</script>

<style scoped>
    .z-tab-item{

    }
</style>