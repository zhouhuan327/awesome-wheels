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
            prop:'activeNames'
        },
        data(){
            return {
                eventBus: new Vue(),
            }
        },
        props:{
            activeNames:{
                type: Array,
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
                eventBus: this.eventBus
            }
        },
        mounted() {
            //通知子组件初始的选中状态
            this.eventBus.$emit('update:active',this.activeNames)

            this.eventBus.$on('addActive',(name)=>{
                if(this.accordion){
                    this.activeNames.length = 0
                    this.activeNames.push(name)
                }else{
                    this.activeNames.push(name)
                }
                this.eventBus.$emit('update:active',this.activeNames) //通知子组件
                this.$emit('input',this.activeNames)//通知外部
            })
            this.eventBus.$on('removeActive',(name)=>{
                const index = this.activeNames.indexOf(name)
                this.activeNames.splice(index,1)
                this.eventBus.$emit('update:active',this.activeNames)
                this.$emit('input',this.activeNames)

            })


        }
    }
</script>

<style lang="scss" scoped>
    .z-collapse{

    }
</style>