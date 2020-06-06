<template>
    <div class='z-collapse'>
        <slot>

        </slot>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "z-collapse",
        model:{
            prop:'activeName'
        },
        data(){
            return {
                eventBus: new Vue(),
            }
        },
        props:{
            activeName:{
                type: String,
                required: true
            },
            type:{
                type:String
            },
            accordion:{
                type:Boolean,
                default:false
            }
        },
        provide(){
            return {
                eventBus: this.eventBus,
                accordion:this.accordion
            }
        },
        mounted() {
            this.eventBus.$on('update:active',(name)=>{
               this.$emit('input',name)
            })
            this.eventBus.$emit('update:active',this.activeName)

        }
    }
</script>

<style lang="scss" scoped>
    .z-collapse{

    }
</style>