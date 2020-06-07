<template>
    <div class="z-collapse-item">
        <div class="z-collapse-item-head" @click="toggle">
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
        inject:['eventBus'],
        methods:{
            toggle(){
                if(this.active){
                    this.eventBus.$emit('removeActive',this.name)
                }else{
                    this.eventBus.$emit('addActive',this.name)
                }

            }
        },
        mounted() {
            this.eventBus.$on('update:active',(names)=>{
                this.active = !!names.includes(this.name);
            })
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