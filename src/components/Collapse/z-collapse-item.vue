<template>
    <div class="z-collapse-item">
        <div class="z-collapse-item-head" @click="toggle">
            {{title}}
        </div>
        <transition name="slide" >
            <div class="z-collapse-item-content" :class="active?'active':''">
               <slot></slot>
            </div>
        </transition>
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
            width: 100%;
            overflow: hidden;
            max-height: 0;
            transition: all 0.3s ease;
            padding-left: 15px;
            &.active{
                padding: 15px;
                max-height: 50px;
            }
        }
    }
</style>