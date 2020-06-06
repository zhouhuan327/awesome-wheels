<template>
    <div class="z-collapse-item">
        <div class="z-collapse-item-head" @click="onClick">
            {{title}}
        </div>
        <div class="z-collapse-item-content" v-if="active ">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "z-collapse-item",
        data(){
            return {
                active:false
            }
        },
        props:{
            title:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        },
        inject:['eventBus','accordion'],
        methods:{
            onClick(){
                if(this.active){
                    this.active = false
                }else{
                    this.active = true
                    this.eventBus.$emit("update:active",this)
                }

            }
        },
        mounted() {
            if(this.accordion){
                this.eventBus.$on('update:active',(vm)=>{
                    if(vm !== this){
                        this.active = false
                    }
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    .z-collapse-item{
        .z-collapse-item-head{
            cursor: pointer;
            height: 48px;
            line-height: 48px;
            border-bottom: 1px solid #ebeef5;
            user-select: none;
        }
        .z-collapse-item-content{
            padding: 16px 8px;
        }
    }
</style>